import { Link } from "react-router-dom";

const NAVY = "#0f2a44";
const AZURE = "#2c5f86";
const ORANGE = "#ed774a";

// Photo shown beside the story text
const MOUNTAIN_IMAGE = "/images/get-involved/get_involved_climb.jpg";

function Peak({ active }) {
  return (
    <svg viewBox="0 0 48 40" className="w-11 h-9" aria-hidden="true">
      {active && (
        <>
          <line x1="24" y1="2" x2="24" y2="12" stroke={ORANGE} strokeWidth="1.5" />
          <polygon points="24,2 31,4.5 24,7" fill={ORANGE} />
        </>
      )}
      <polygon
        points="2,38 18,16 24,24 32,12 46,38"
        fill={active ? NAVY : "#c4cfdb"}
      />
      <polygon
        points="32,12 36,18 32,17 29,19"
        fill={active ? "#fff" : "#e5ebf1"}
        opacity="0.9"
      />
    </svg>
  );
}

export default function GetInvolved() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── Banner ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Photo sits on the right so the climber stays clear of the text */}
        <img
          src="/images/get-involved/get_involved_banner.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full md:w-3/5 object-cover select-none pointer-events-none"
          style={{ objectPosition: "35% 60%" }}
        />
        {/* Fade the photo into the navy panel */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${NAVY} 0%, ${NAVY} 40%, rgba(15,42,68,0.55) 62%, rgba(15,42,68,0) 100%)`,
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: "rgba(15,42,68,0.55)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-16 py-14 md:py-24 min-h-[22rem] md:min-h-[26rem] flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            Get Involved
          </p>
          <div className="mt-2 mb-5 h-0.5 w-10" style={{ backgroundColor: ORANGE }} />
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">
            Our Goal: 30 by 30
          </h1>
          <p className="mt-4 text-xl md:text-3xl font-bold text-white leading-snug max-w-xl">
            Thirty diseases. Thirty peaks.
            <br />
            One mission: ensure no one is too rare to treat.
          </p>
          <p className="mt-4 text-base md:text-lg text-white/85 max-w-md leading-relaxed">
            We will start with one disease, then another, building a route for
            every climb that follows.
          </p>
        </div>
      </section>

      {/* ── Story + image ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 py-14 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="flex flex-col gap-4 text-base leading-relaxed text-gray-600">
          <p>
            Many of the world’s great peaks were once considered unclimbable,
            until a brave explorer found a route.
          </p>
          <p>
            Similarly, children and adults with rare diseases often have little
            hope of treatment — not because treatment is impossible — but because
            no one has assembled the science and medical team, or gathered the
            resources and capital required to make the climb.
          </p>
          <p className="text-lg font-bold" style={{ color: AZURE }}>
            Our goal is to help change that.
          </p>
          <p>
            Today, rare diseases are the unclimbed peaks of medicine. Genomics,
            patient-derived models, new therapeutic tools, and emerging
            regulatory pathways are opening routes that did not exist before.
          </p>
          <p>Join us. Now is the time to set our sights on the summit.</p>
          <p>
            We will start with one disease. Then another. The opportunity is not
            only to fund one treatment. It is to prove a model that can make the
            next expedition easier to launch.
          </p>
          <p className="text-lg font-bold" style={{ color: AZURE }}>
            30 by 2030. An expedition of expeditions.
          </p>
        </div>

        <img
          src={MOUNTAIN_IMAGE}
          alt="Climbers ascending a mountain ridge above the clouds at sunrise"
          className="w-full aspect-[4/3] object-cover rounded-xl"
          style={{ boxShadow: "0 8px 32px rgba(44,95,134,0.18)" }}
        />
      </section>

      {/* ── 30 by 2030 tracker ── */}
      <section className="px-6 md:px-16 py-14" style={{ backgroundColor: "#f5f8fb" }}>
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold" style={{ color: AZURE }}>
            30 by 2030
          </h2>
          <div className="mx-auto mt-2 h-0.5 w-10" style={{ backgroundColor: ORANGE }} />
          <p className="mt-4 text-base md:text-lg font-medium" style={{ color: NAVY }}>
            One route can change what is possible for the next climb.
          </p>

          <ol className="mt-8 grid grid-cols-5 md:grid-cols-10 gap-y-5 gap-x-2 list-none p-0">
            {Array.from({ length: 30 }, (_, i) => i + 1).map((n) => (
              <li key={n} className="flex flex-col items-center gap-1">
                <Peak active={n === 1} />
                <span
                  className={`text-xs ${n === 1 ? "font-bold text-gray-900" : "text-gray-500"}`}
                >
                  {n}
                </span>
              </li>
            ))}
          </ol>

          {/* Call to action */}
          <div className="mt-10 bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col md:flex-row items-center gap-5 md:gap-8">
            <p
              className="flex-1 text-xl md:text-2xl italic font-medium text-left border-l-4 pl-5"
              style={{ color: NAVY, borderColor: AZURE }}
            >
              “No child is too rare to treat.”
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/donate"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold !text-white transition-colors hover:!bg-[#7bb1bf]"
                style={{ backgroundColor: AZURE }}
              >
                Support the Mission →
              </Link>
              <Link
                to="/volunteer"
                className="px-6 py-2.5 rounded-lg text-sm font-semibold border-2 transition-colors hover:bg-[#2c5f86]/10"
                style={{ color: AZURE, borderColor: AZURE }}
              >
                Learn About Fundraising →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
