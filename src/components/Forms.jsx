import { useState } from "react";

/**
 * Forms.jsx
 * A reusable, config-driven form. Pass a `fields` array describing what to
 * render/validate, plus a Web3Forms `accessKey` (web3forms.com — free,
 * unlimited, no backend). On submit, all field values are collected into one
 * JSON object and POSTed to Web3Forms, which emails the result to whatever
 * inbox that access key is registered to (e.g. info@crdalliance.org).
 *
 * Get a key: go to https://web3forms.com, enter info@crdalliance.org, click
 * "Create Access Key" — no signup required. Reuse one key across every form,
 * or make separate keys per event if you want to route/tag differently.
 *
 * ── Usage ──────────────────────────────────────────────────────────────
 * <Forms
 *   eyebrow="RSVP"
 *   title="Fall Fundraiser"
 *   description="Let us know you're coming — spots are limited."
 *   accessKey="YOUR-WEB3FORMS-ACCESS-KEY"
 *   subject="Fall Fundraiser RSVP"
 *   submitLabel="Reserve my spot"
 *   fields={[
 *     { name: "fullName", label: "Full name", type: "text", required: true },
 *     { name: "email", label: "Email", type: "email", required: true },
 *     { name: "phone", label: "Phone", type: "tel" },
 *     {
 *       name: "guests",
 *       label: "Number of guests",
 *       type: "select",
 *       required: true,
 *       options: ["1", "2", "3", "4+"],
 *     },
 *     {
 *       name: "dietary",
 *       label: "Dietary restrictions",
 *       type: "textarea",
 *       fullWidth: true,
 *     },
 *     {
 *       name: "updates",
 *       label: "Send me updates about future CRDA events",
 *       type: "checkbox",
 *     },
 *   ]}
 * />
 *
 * ── Supported field.type values ──────────────────────────────────────────
 * "text" | "email" | "tel" | "number" | "date" | "textarea" |
 * "select" (needs `options`) | "radio" (needs `options`) | "checkbox"
 *
 * ── Field shape ───────────────────────────────────────────────────────
 * {
 *   name: string,          // key used in the submitted JSON
 *   label: string,
 *   type: string,          // see above, defaults to "text"
 *   required?: boolean,    // default false
 *   placeholder?: string,
 *   options?: string[],    // for "select" / "radio"
 *   fullWidth?: boolean,   // span both columns on md+ screens
 * }
 * ─────────────────────────────────────────────────────────────────────
 */

const initialStateFromFields = (fields) =>
	fields.reduce((acc, f) => {
		acc[f.name] = f.type === "checkbox" ? false : "";
		return acc;
	}, {});

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export default function Forms({
	eyebrow = "Get Involved",
	title,
	description,
	fields = [],
	accessKey = "b45f0f6f-f306-4313-a452-0b2c0d04f672", // Web3Forms access key — see setup note above
	subject = "New form submission", // email subject line for this form
	fromName = "CRDA Website", // shown as the sender name in the email
	submitLabel = "Submit",
	extraPayload = {}, // static values to merge in, e.g. { eventId: "fall-2026" }
}) {
	const [values, setValues] = useState(() => initialStateFromFields(fields));
	const [errors, setErrors] = useState({});
	const [status, setStatus] = useState("idle"); // idle | submitting | success | error

	const handleChange = (name, value) => {
		setValues((prev) => ({ ...prev, [name]: value }));
		if (errors[name]) {
			setErrors((prev) => {
				const next = { ...prev };
				delete next[name];
				return next;
			});
		}
	};

	const validate = () => {
		const nextErrors = {};
		for (const field of fields) {
			const value = values[field.name];

			if (field.required) {
				const isEmpty =
					field.type === "checkbox" ? !value : !String(value ?? "").trim();
				if (isEmpty) {
					nextErrors[field.name] = `${field.label} is required`;
					continue;
				}
			}

			if (field.type === "email" && value) {
				const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
				if (!emailOk) nextErrors[field.name] = "Enter a valid email address";
			}
		}
		setErrors(nextErrors);
		return Object.keys(nextErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!accessKey) {
			console.error(
				"Forms: no accessKey provided — get one free at web3forms.com"
			);
			setStatus("error");
			return;
		}
		if (!validate()) return;

		setStatus("submitting");
		try {
			const payload = {
				access_key: accessKey,
				subject,
				from_name: fromName,
				...values,
				...extraPayload,
			};
			const res = await fetch(WEB3FORMS_ENDPOINT, {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(payload),
			});

			const result = await res.json();
			if (!res.ok || !result.success) {
				throw new Error(result.message || `Request failed with ${res.status}`);
			}

			setStatus("success");
			setValues(initialStateFromFields(fields));
		} catch (err) {
			console.error("Forms: submission failed", err);
			setStatus("error");
		}
	};

	if (status === "success") {
		return (
			<section className="bg-white py-16 px-6 md:px-16">
				<div className="max-w-2xl mx-auto text-center">
					<p className="eyebrow">{eyebrow}</p>
					<h2 className="h2-std">Thanks — you're all set!</h2>
					<p className="body-std">
						We've received your submission. We'll be in touch if we need
						anything else.
					</p>
				</div>
			</section>
		);
	}

	return (
		<section className="bg-white py-16 px-6 md:px-16">
			<div className="max-w-2xl mx-auto">
				<div className="text-center mb-10">
					<p className="eyebrow">{eyebrow}</p>
					{title && <h2 className="h2-std">{title}</h2>}
					{description && <p className="body-std">{description}</p>}
				</div>

				<form
					onSubmit={handleSubmit}
					noValidate
					className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5 rounded-2xl p-6 md:p-8"
					style={{ boxShadow: "0 8px 32px rgba(44,95,134,0.12)" }}
				>
					{fields.map((field) => (
						<FormField
							key={field.name}
							field={field}
							value={values[field.name]}
							error={errors[field.name]}
							onChange={handleChange}
						/>
					))}

					<div className="md:col-span-2 flex flex-col items-center gap-3 mt-2">
						<button
							type="submit"
							disabled={status === "submitting"}
							className="w-full md:w-auto px-8 py-3 rounded-xl font-semibold text-sm text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md disabled:opacity-60 disabled:hover:translate-y-0"
							style={{ backgroundColor: "#2c5f86" }}
						>
							{status === "submitting" ? "Submitting…" : submitLabel}
						</button>

						{status === "error" && (
							<p className="text-sm text-red-600 text-center">
								Something went wrong sending your submission. Please try
								again.
							</p>
						)}
					</div>
				</form>
			</div>
		</section>
	);
}

function FormField({ field, value, error, onChange }) {
	const {
		name,
		label,
		type = "text",
		required,
		placeholder,
		options = [],
		fullWidth,
	} = field;

	const wrapperClass = `flex flex-col gap-1.5 ${
		fullWidth || type === "textarea" ? "md:col-span-2" : ""
	} ${type === "checkbox" ? "md:col-span-2 flex-row items-center gap-2.5" : ""}`;

	const inputClass = `w-full rounded-lg border px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 transition-colors duration-150 focus:outline-none focus:ring-2 ${
		error
			? "border-red-400 focus:ring-red-200"
			: "border-gray-300 focus:ring-[#7bb1bf] focus:border-[#2c5f86]"
	}`;

	const labelEl =
		type !== "checkbox" ? (
			<label htmlFor={name} className="text-sm font-semibold text-gray-700">
				{label}
				{required && <span className="text-orange-500 ml-0.5">*</span>}
			</label>
		) : null;

	let control;
	switch (type) {
		case "textarea":
			control = (
				<textarea
					id={name}
					name={name}
					rows={4}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(name, e.target.value)}
					className={inputClass}
				/>
			);
			break;

		case "select":
			control = (
				<select
					id={name}
					name={name}
					value={value}
					onChange={(e) => onChange(name, e.target.value)}
					className={inputClass}
				>
					<option value="" disabled>
						{placeholder || "Select…"}
					</option>
					{options.map((opt) => (
						<option key={opt} value={opt}>
							{opt}
						</option>
					))}
				</select>
			);
			break;

		case "radio":
			control = (
				<div className="flex flex-wrap gap-4 pt-1">
					{options.map((opt) => (
						<label
							key={opt}
							className="flex items-center gap-2 text-sm text-gray-700"
						>
							<input
								type="radio"
								name={name}
								value={opt}
								checked={value === opt}
								onChange={(e) => onChange(name, e.target.value)}
								className="accent-[#2c5f86]"
							/>
							{opt}
						</label>
					))}
				</div>
			);
			break;

		case "checkbox":
			control = (
				<input
					id={name}
					type="checkbox"
					name={name}
					checked={!!value}
					onChange={(e) => onChange(name, e.target.checked)}
					className="w-4 h-4 accent-[#2c5f86]"
				/>
			);
			break;

		default:
			// text, email, tel, number, date, etc.
			control = (
				<input
					id={name}
					type={type}
					name={name}
					placeholder={placeholder}
					value={value}
					onChange={(e) => onChange(name, e.target.value)}
					className={inputClass}
				/>
			);
	}

	return (
		<div className={wrapperClass}>
			{type === "checkbox" ? (
				<>
					{control}
					<label htmlFor={name} className="text-sm text-gray-700">
						{label}
						{required && <span className="text-orange-500 ml-0.5">*</span>}
					</label>
				</>
			) : (
				<>
					{labelEl}
					{control}
				</>
			)}
			{error && <span className="text-xs text-red-600 mt-0.5">{error}</span>}
		</div>
	);
}
