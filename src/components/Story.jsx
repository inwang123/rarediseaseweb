import { Link } from "react-router-dom";

export default function Story() {
  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f0f6fa" }}
    >
      {/* Border wave — bottom right, blended to fit the light blue bg */}
      <img
        src="/border_bottom.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1/2 pointer-events-none select-none z-0"
        style={{ opacity: 0.5, mixBlendMode: "multiply" }}
      />

      <section className="relative z-10 py-20 px-6 md:px-16 max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-14">
        {/* Text */}
        <div className="flex-1 flex flex-col gap-4">
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#2c5f86" }}
          >
            Our Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Learn our story
          </h2>
          <p className="text-base leading-relaxed text-gray-500">
            Every day, children are born with rare diseases that have little
            research and few treatment options. While each condition may be
            rare, together these diseases affect millions of families who are
            searching for answers and hope.
          </p>
          <p className="text-base leading-relaxed text-gray-500">
            The Children's Rare Disease Alliance was created to help change
            that. By partnering with local businesses and communities, we turn
            small donations at checkout into funding that supports research and
            the development of life-changing treatments.
          </p>
        </div>

        {/* Portrait photo */}
        <div
          className="relative flex-shrink-0 w-60 md:w-64 overflow-hidden shadow-xl"
          style={{ aspectRatio: "3/4", borderRadius: "1.5rem" }}
        >
          <img
            src="/Skylar_hospital.png"
            alt="Skylar"
            className="w-full h-full object-cover"
          />
          {/* Accent block */}
          <div
            className="absolute -bottom-3 -left-3 w-full h-full z-[-1]"
            style={{
              backgroundColor: "#7bb1bf",
              opacity: 0.2,
              borderRadius: "1.5rem",
            }}
          />
        </div>
      </section>
    </div>
  );
}
