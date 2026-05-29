const MESSAGES = [
  {
    icon: "/box.png",
    alt: "Donation box",
    title: "Small Acts, Big Hearts",
    body: "Even the smallest donation can bring comfort, care, and hope to children facing rare diseases. Together, those small acts add up to something truly meaningful.",
    accent: "#fff3cd",
  },
  {
    icon: "/star.png",
    alt: "Star",
    title: "Every Child Deserves a Chance",
    body: "Behind every diagnosis is a child with dreams, a family with hope, and a future worth fighting for. Your support helps move us closer to better treatments and brighter days.",
    accent: "#d9eeff",
  },
  {
    icon: "/reading.png",
    alt: "Children",
    title: "You're Part of Their Story",
    body: "By giving at checkout, you become part of something bigger — helping children and families feel seen, supported, and never alone.",
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
          <h2 className="text-white font-bold text-2xl md:text-3xl">
            Why your support matters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {MESSAGES.map(({ icon, alt, title, body, accent }) => (
            <div
              key={title}
              className="bg-white flex flex-col items-center text-center gap-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              style={{ borderRadius: "1.25rem", padding: "1.75rem" }}
            >
              {/* Soft colored icon circle */}
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
