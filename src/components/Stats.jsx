import { Link } from "react-router-dom";

const CARDS = [
  {
    emoji: "💼",
    title: "Business Partnerships",
    desc: "Partner with CRDA through checkout giving, sponsorships, cause marketing, and community campaigns that directly support treatment development.",
    label: "Become a Partner",
    to: "/contact",
  },
  {
    emoji: "💙",
    title: "Workplace Giving",
    desc: "Maximize your donation through employer matching, payroll giving, volunteer grants, and workplace giving programs.",
    label: "Find Your Employer",
    to: "/contact",
  },
  {
    emoji: "🎉",
    title: "Community Fundraising",
    desc: "Host or join community events that raise awareness and funding for children with rare diseases.",
    label: "Learn More",
    to: "/about",
  },
  {
    emoji: "❤️",
    title: "Family & Community Service",
    desc: "Volunteer to provide meals, care packages, hospital support, and community service projects that make a meaningful difference for rare disease families.",
    label: "Volunteer",
    to: "/contact",
  },
];

export default function Stats() {
  return (
    <section
      className="py-10 px-6 md:px-16"
      style={{ backgroundColor: "#2c5f86" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-6 gap-1">
          <img src="/heart_icon.png" alt="heart" className="w-8 h-8 mb-1" />
          <h2 className="text-white font-bold text-2xl md:text-3xl">
            Our Focus
          </h2>
          <p className="text-white/75 text-sm max-w-xl leading-relaxed">
            Accelerating treatment development for children with rare diseases
            by bringing together businesses, workplaces, communities, and
            volunteers to create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {CARDS.map(({ emoji, title, desc, label, to }) => (
            <div
              key={title}
              className="bg-white flex flex-col gap-2 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderRadius: "1rem", padding: "1.1rem 1.25rem" }}
            >
              <h3 className="font-bold text-gray-900 text-base">
                {emoji} {title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">{desc}</p>
              <Link
                to={to}
                className="self-start text-sm font-semibold transition-colors duration-200"
                style={{ color: "#2c5f86" }}
              >
                {label} →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}