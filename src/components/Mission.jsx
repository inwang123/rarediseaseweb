import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const partners = [
	{ id: 1, name: "The Lost Enzyme Project", logo: "/TLEP_logo.png" },
	// Add more: { id: 2, name: "Partner Name", logo: "/logo.png" }
];

function getNextTargetDate() {
	const target = new Date();
	target.setMonth(8, 5);
	target.setHours(6, 0, 0, 0);

	if (target.getTime() <= Date.now()) {
		target.setFullYear(target.getFullYear() + 1);
	}

	return target;
}

function getTimeRemaining(targetDate) {
	const distance = targetDate.getTime() - Date.now();

	if (distance <= 0) {
		return { days: 0, hours: 0, minutes: 0, seconds: 0 };
	}

	return {
		days: Math.floor(distance / (1000 * 60 * 60 * 24)),
		hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
		minutes: Math.floor((distance / (1000 * 60)) % 60),
		seconds: Math.floor((distance / 1000) % 60),
	};
}

function Countdown() {
	const [targetDate] = useState(() => getNextTargetDate());
	const [timeLeft, setTimeLeft] = useState(() => getTimeRemaining(targetDate));

	useEffect(() => {
		const timer = setInterval(() => {
			setTimeLeft(getTimeRemaining(targetDate));
		}, 1000);

		return () => clearInterval(timer);
	}, [targetDate]);

	const countdownUnits = [
		{ label: "Days", value: timeLeft.days },
		{ label: "Hours", value: timeLeft.hours },
		{ label: "Minutes", value: timeLeft.minutes },
		{ label: "Seconds", value: timeLeft.seconds },
	];

	return (
		<div className="px-4 pt-8 pb-2 md:pt-10">
			<div className="mx-auto max-w-4xl">
				<div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
					{countdownUnits.map((unit) => (
						<div key={unit.label} className="flex flex-col items-center gap-1.5">
							<div className="w-full rounded-md border-2 border-gray-800 bg-white px-3 py-2 text-center text-3xl font-black leading-none text-gray-900 md:text-4xl">
								{String(unit.value).padStart(2, "0")}
							</div>
							<div className="w-full rounded-md bg-black px-3 py-1.5 text-center text-[10px] font-bold uppercase tracking-[0.2em] text-white md:text-[11px]">
								{unit.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default function Mission() {
	return (
		<div className="relative overflow-hidden bg-white">
			{/* Border wave — top left, tinted blue to blend */}
			<img
				src="/border_top.png"
				alt=""
				aria-hidden="true"
				className="absolute top-0 left-0 pointer-events-none select-none z-0 w-1/2"
				style={{ opacity: 0.55, mixBlendMode: "multiply" }}
			/>

			<div className="relative z-10">
				<Countdown />

				{/* ── Mission content ── */}
				<section className="py-16 px-6 md:px-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
					{/* Image with warm rounded style */}
					<div className="relative flex-shrink-0 order-2 md:order-1">
						<img
							src="/pippin.jpeg"
							alt="Pippin"
							className="w-56 h-56 object-cover relative z-10"
							style={{
								borderRadius: "2rem",
								boxShadow: "0 8px 32px rgba(44,95,134,0.18)",
							}}
						/>
						{/* Soft blue accent block behind image */}
						<div
							className="absolute -bottom-3 -right-3 w-full h-full z-0"
							style={{
								backgroundColor: "#7bb1bf",
								opacity: 0.18,
								borderRadius: "2rem",
							}}
						/>
					</div>

					{/* Text */}
					<div className="flex flex-col gap-4 flex-1 items-center text-center md:items-start md:text-left order-1 md:order-2">
						<p
							className="text-xs font-bold uppercase tracking-widest"
							style={{ color: "#2c5f86" }}
						>
							Our Mission
						</p>
						<h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
							What are we here to do?
						</h2>
						<p className="text-base leading-relaxed text-gray-500">
							Accelerating treatment development for children with rare diseases
							through community partnerships, fundraising, and advocacy. <br /> <br /> Through our Checkout Charity Program, Corporate Matching Programs, Community Fundraising, and Family & Community Service initiatives, we empower individuals, businesses, and communities to make a lasting impact and help bring life-changing treatments closer to children with rare diseases.
						</p>
						<Link
							to="/about"
							className="self-center md:self-start mt-2 inline-block px-6 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
							style={{
								backgroundColor: "#2c5f86",
								color: "white",
								borderRadius: "0.75rem",
							}}
						>
							Our Story →
						</Link>
					</div>
				</section>
			</div>
		</div>
	);
}
