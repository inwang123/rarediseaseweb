import { Link } from "react-router-dom";

const partners = [
  { id: 1, name: "The Lost Enzyme Project", logo: "/TLEP_logo.png" },
  // Add more: { id: 2, name: "Partner Name", logo: "/logo.png" }
];

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
              The Children's Rare Disease Alliance turns small acts of
              generosity at checkout into life-changing treatments for children
              living with rare diseases.
            </p>
            <p className="text-base leading-relaxed text-gray-500">
              We partner with local businesses so everyday moments — a grocery
              run, a cup of coffee — become opportunities to fund research and
              bring hope to families who need it most.
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
