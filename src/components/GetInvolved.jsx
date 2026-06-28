import { Link } from "react-router-dom";

const cards = [
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

export default function GetInvolved() {
  return (
    <section className="py-20 px-6 md:px-16 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            Get Involved
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            Every Child Deserves a Treatment
          </h2>
          <p className="text-gray-500 text-base leading-relaxed max-w-2xl mx-auto">
            Accelerating treatment development for children with rare diseases
            by bringing together businesses, workplaces, communities, and
            volunteers to create lasting impact.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {cards.map(({ emoji, title, desc, label, to }) => (
            <div
              key={title}
              className="bg-white rounded-2xl p-6 shadow-sm flex flex-col gap-3 hover:-translate-y-1 hover:shadow-md transition-all duration-300"
            >
              <span className="text-3xl">{emoji}</span>
              <h3 className="text-gray-900 font-bold text-base">{title}</h3>
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
