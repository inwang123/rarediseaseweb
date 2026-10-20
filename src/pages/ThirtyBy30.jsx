import { Link } from "react-router-dom";

const NAVY = "#0f2a44";
const AZURE = "#2c5f86";
const ORANGE = "#ed774a";

// Photo shown beside the story text
const MOUNTAIN_IMAGE = "/images/get-involved/30x30-hikers.jpg";

export default function ThirtyBy30() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* ── Banner ── */}
      <section
        className="relative overflow-hidden"
        style={{ backgroundColor: NAVY }}
      >
        {/* Wide photo sits on the right so the climbers and sunrise stay clear of the text */}
        <img
          src="/images/get-involved/30x30-banner.jpg"
          alt=""
          aria-hidden="true"
          className="absolute inset-y-0 right-0 h-full w-full md:w-[45%] object-cover select-none pointer-events-none"
          style={{ objectPosition: "50% 65%" }}
        />
        {/* Fade the photo into the navy panel */}
        <div
          className="absolute inset-0"
          style={{
            background: `linear-gradient(90deg, ${NAVY} 0%, ${NAVY} 55%, rgba(15,42,68,0.8) 59%, rgba(15,42,68,0.55) 64%, rgba(15,42,68,0.3) 70%, rgba(15,42,68,0.12) 77%, rgba(15,42,68,0) 85%)`,
          }}
        />
        <div
          className="absolute inset-0 md:hidden"
          style={{ backgroundColor: "rgba(15,42,68,0.55)" }}
        />

        <div className="relative max-w-6xl mx-auto px-6 md:px-16 py-14 md:py-24 min-h-[22rem] md:min-h-[26rem] flex flex-col justify-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/80">
            30x30
          </p>
          <div className="mt-2 mb-5 h-0.5 w-10" style={{ backgroundColor: ORANGE }} />
          <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
            Thirty diseases. Thirty peaks.
            <br className="hidden md:block" />{" "}
            One mission: ensure no child
            <br className="hidden md:block" />{" "}
            is too rare to treat.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/85 max-w-md leading-relaxed">
            We will start with one disease, then another, building a route for
            every climb that follows.
          </p>
        </div>
      </section>

      {/* ── Story + image ── */}
      <section className="max-w-6xl mx-auto px-6 md:px-16 pt-14 pb-6">
        {/* Intro text beside the photo; the photo stretches to match the text height */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-14 md:items-stretch">
          <div className="flex flex-col justify-center gap-4 text-base leading-relaxed text-gray-600">
            <p>
              Many of the world’s greatest peaks were once considered impossible
              to climb—until someone found a way.
            </p>
            <p>
              Rare diseases are mountains of their own, filled with obstacles that
              no family should face alone. Reaching the summit takes a team,
              determination, and the courage to keep climbing.
            </p>
            <p>
              At <strong style={{ color: AZURE }}>Children’s Rare Disease Alliance</strong>, our goal is to
              raise the funds to advance treatments for{" "}
              <strong style={{ color: AZURE }}>30 rare diseases by 2030</strong>.
            </p>
            <p>
              Together, we can turn impossible climbs into life-changing
              breakthroughs.
            </p>
          </div>

          <img
            src={MOUNTAIN_IMAGE}
            alt="A line of hikers with trekking poles crossing a ridge above the clouds under a deep blue sky"
            className="w-full aspect-[4/3] md:aspect-auto md:h-full md:min-h-[16rem] object-cover rounded-xl"
            style={{ boxShadow: "0 8px 32px rgba(44,95,134,0.18)" }}
          />
        </div>

        {/* Remaining text spans the full container width */}
        <div className="mt-8 flex flex-col gap-4 text-base leading-relaxed text-gray-600">
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
      </section>

      {/* ── Call to action ── */}
      <section className="px-6 md:px-16 pt-6 pb-14" style={{ background: "linear-gradient(180deg, #ffffff 0%, #f5f8fb 4rem, #f5f8fb 100%)" }}>
        <div className="max-w-5xl mx-auto text-center">
          {/* Call to action */}
          <div className="bg-white rounded-2xl shadow-md px-6 py-5 flex flex-col md:flex-row items-center gap-5 md:gap-8">
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
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
