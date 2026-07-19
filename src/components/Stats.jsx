const MESSAGES = [
  {
    icon: "/box.png",
    alt: "Donation box",
    title: "Checkout Charity",
    body: "Small change. Life-changing impact. Partner with CRDA by giving customers the option to round up their purchase at checkout. Every dollar raised at checkout helps fund research and treatments for children with rare diseases.",
    accent: "#fff3cd",
  },
  {
    icon: "/star.png",
    alt: "Star",
    title: "Corporate Matching Programs",
    body: "Double your impact. Many companies match employee donations, volunteer hours, and payroll contributions. Learn how corporate matching programs can help maximize your support for children with rare diseases.",
    accent: "#d9eeff",
  },
  {
    icon: "/reading.png",
    alt: "Children",
    title: "Community Fundraising",
    body: "Turn your passion into progress. Host or join community events that raise awareness and funding for children with rare diseases.",
    accent: "#e8f5e9",
  },
  {
    icon: "/phone-call.png",
    alt: "Children",
    title: "Family & Community Service",
    body: "Supporting families beyond research. Volunteer to provide meals, care packages, hospital support, and community service projects that make a meaningful difference for rare disease families.",
    accent: "#e8f5e9",
  },
];

export default function Stats() {
  return (
    <section
      className="py-20 px-6 md:px-16"
      style={{ backgroundColor: "#2c5f86" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col items-center text-center mb-12 gap-2">
          <img src="/heart_icon.png" alt="heart" className="w-10 h-10 mb-1" />
          <h2 className="text-white font-bold text-4xl md:text-5xl">
            Our Focus
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {MESSAGES.map(({ icon, alt, title, body, accent }) => (
            <div
              key={title}
              className="bg-white flex flex-col items-center text-center gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderRadius: "1.25rem", padding: "1.75rem" }}
            >
              <div
                className="w-14 h-14 flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: accent, borderRadius: "50%" }}
              >
                <img src={icon} alt={alt} className="w-8 h-8 object-contain" />
              </div>
              <h3 className="font-bold text-gray-900 text-sm">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
