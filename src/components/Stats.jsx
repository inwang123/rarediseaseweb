import { Link } from "react-router-dom";

const MESSAGES = [
	{
		icon: "/images/icons/reading.png",
		alt: "Fundraising",
		title: "Fundraising",
		body: "CRDA's goal is to help fund treatment development for 30 rare diseases by 2030 — partnering with the researchers and clinicians who develop the therapies themselves.",
		accent: "#e8f5e9",
	},
	{
		icon: "/images/climb4rare/Summit_sponsor_icon.webp",
		alt: "4Rare",
		title: "4Rare",
		body: "Climb4Rare and Adventure4Rare: join a hike, host one, or help us reach the summit for rare disease awareness and treatment funding.",
		accent: "#d9eeff",
		link: { to: "/climb4rare", label: "Climb4Rare →" },
	},
	{
		icon: "/images/icons/compassion.png",
		alt: "Volunteer",
		title: "Volunteer",
		body: "Give your time through family and community service projects — from hospital meals to holiday events — that bring comfort to families living with rare diseases.",
		accent: "#e8f5e9",
		link: { to: "/volunteer", label: "Volunteer →" },
	},
];

const GIVING_PROGRAMS = {
	icon: "/images/icons/box.png",
	alt: "Checkout Charity and Corporate Matching",
	title: "Checkout Charity & Corporate Matching",
	accent: "#fff3cd",
	subItems: [
		{
			title: "Checkout Charity",
			body: "Partner with CRDA by giving your customers the option to round up their purchase at checkout.",
			link: { to: "/checkoutcharity", label: "Checkout Charity →" },
		},
		{
			title: "Corporate Matching Programs",
			body: "Many companies match employee donations and volunteer hours — ask your employer how to double your impact.",
		},
	],
};

function FocusCard({ icon, alt, title, body, accent, link }) {
	return (
		<div
			className="bg-white flex flex-col items-center text-center gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
			style={{ borderRadius: "1.25rem", padding: "1.75rem" }}
		>
			<div
				className="w-14 h-14 flex items-center justify-center flex-shrink-0"
				style={{ backgroundColor: accent, borderRadius: "50%" }}
			>
				<img src={icon} alt={alt} className="w-8 h-8 object-contain" />
			</div>
			<h3 className="font-bold text-gray-900 text-base">{title}</h3>
			<p className="text-gray-500 text-base leading-relaxed flex-1">{body}</p>
			{link && (
				<Link
					to={link.to}
					className="mt-1 inline-block px-6 py-2.5 font-semibold text-sm !text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
					style={{ backgroundColor: "#2c5f86", borderRadius: "0.75rem" }}
				>
					{link.label}
				</Link>
			)}
		</div>
	);
}

export default function Stats() {
	return (
		<section
			className="pt-8 pb-20 px-6 md:px-16"
			style={{ backgroundColor: "#2c5f86" }}
		>
			<div className="max-w-5xl mx-auto">
				<div className="flex flex-col items-center text-center mb-12 gap-2">
					<img src="/images/icons/heart_icon.png" alt="heart" className="w-10 h-10 mb-1" />
					<h2 className="text-white font-bold text-4xl md:text-5xl">
						Our Focus
					</h2>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
					{MESSAGES.map((card) => (
						<FocusCard key={card.title} {...card} />
					))}
				</div>

				{/* Giving programs — full width, side-by-side sub-items */}
				<div
					className="mt-5 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
					style={{ borderRadius: "1.25rem", padding: "1.75rem" }}
				>
					<div className="flex flex-col items-center text-center gap-3 mb-4">
						<div
							className="w-14 h-14 flex items-center justify-center flex-shrink-0"
							style={{
								backgroundColor: GIVING_PROGRAMS.accent,
								borderRadius: "50%",
							}}
						>
							<img
								src={GIVING_PROGRAMS.icon}
								alt={GIVING_PROGRAMS.alt}
								className="w-8 h-8 object-contain"
							/>
						</div>
						<h3 className="font-bold text-gray-900 text-base">
							{GIVING_PROGRAMS.title}
						</h3>
					</div>

					<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:divide-x sm:divide-gray-100">
						{GIVING_PROGRAMS.subItems.map((item) => (
							<div
								key={item.title}
								className="flex flex-col items-center text-center gap-2 sm:px-6"
							>
								<p className="font-semibold text-gray-800 text-sm">
									{item.title}
								</p>
								<p className="text-gray-500 text-sm leading-relaxed flex-1">
									{item.body}
								</p>
								{item.link && (
									<Link
										to={item.link.to}
										className="mt-1 inline-block px-5 py-2 font-semibold text-xs !text-white transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
										style={{ backgroundColor: "#2c5f86", borderRadius: "0.75rem" }}
									>
										{item.link.label}
									</Link>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
