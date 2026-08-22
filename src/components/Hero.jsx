import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative h-80 md:h-[440px] overflow-hidden">
      <img
        src="/kid_hugging_doc.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-[70%_center]"
      />

      {/* Directional gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(20,40,60,0.82) 0%, rgba(20,40,60,0.55) 50%, rgba(20,40,60,0.10) 100%)",
        }}
      />

      <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 flex flex-col justify-center h-full gap-5">
        <div className="max-w-xl">
          <h1
            className="text-white text-4xl md:text-5xl font-extrabold leading-tight"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            Making Treatment Possible for Children with{" "}
            <span className="text-orange-400">Rare Diseases</span>
          </h1>
          <p
            className="text-white text-lg md:text-xl font-medium mt-3"
            style={{ textShadow: "0 2px 16px rgba(0,0,0,0.25)" }}
          >
            No Child Is Too Rare to Treat.
          </p>
        </div>

        <div className="flex gap-3 flex-wrap mt-1">
          <Link
            to="/donate"
            className="inline-block px-7 py-3 font-bold text-sm bg-white transition-all duration-200 hover:bg-gray-100 hover:-translate-y-0.5 hover:shadow-lg"
            style={{ color: "#2c5f86", borderRadius: "0.75rem" }}
          >
            Donate Now
          </Link>
          <Link
            to="/about"
            className="inline-block px-7 py-3 font-semibold text-sm border-2 transition-all duration-200 hover:bg-white/15 hover:border-white"
            style={{
              color: "white",
              borderColor: "rgba(255,255,255,0.65)",
              borderRadius: "0.75rem",
            }}
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
}
