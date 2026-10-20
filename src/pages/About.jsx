import { Link } from "react-router-dom";

{/*
const values = [
  {
    icon: "/compassion.png",
    alt: "Compassion",
    title: "Compassion",
    desc: "We approach every family and patient with empathy, understanding the unique challenges that rare diseases present.",
  },
  {
    icon: "/scientist.png",
    alt: "Research",
    title: "Research",
    desc: "We are committed to funding and advancing research that brings us closer to treatments and cures for rare diseases.",
  },
  {
    icon: "/diversity.png",
    alt: "Community",
    title: "Community",
    desc: "We believe no family should face a rare disease diagnosis alone. Together we are stronger.",
  },
  {
    icon: "/earth.png",
    alt: "Accessibility",
    title: "Accessibility",
    desc: "We work to ensure that support and resources are available to every family regardless of location or background.",
  },
];
*/}

export default function About() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80"
          alt="About us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 flex flex-col justify-center h-full">
          <p className="text-orange-400 font-semibold text-xs uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1 min-w-0">
            <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
              Our Story
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How it all began
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              The Children's Rare Disease Alliance is a 501(c)3 nonprofit
              organization dedicated to accelerating research and treatment
              development for children living with rare diseases and founded by
              families who understand firsthand the challenges when treatments
              are limited or nonexistent.
              <br />
              <br />
              In 2025 and early 2026, Nathan and Erin's daughter Skylar was
              fighting life-threatening complications following a bone marrow
              transplant for Beta-Mannosidosis. Her recovery was touch-and-go at
              times, and after one particularly aggressive infection, the
              medical team told their family to prepare for the worst.
              Encircling her hospital bed, they did not know if she would make
              it through the night.
              <br />
              <br />
              But Skylar kept fighting.
            </p>
          </div>
          <div className="relative flex-shrink-0">
            <img
              src="/sky_smile.jpeg"
              alt="Our story"
              className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-md shadow-md relative z-10"
            />
            <div
              className="absolute -bottom-4 -left-4 w-24 h-24 z-0"
              style={{
                backgroundImage:
                  "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
                backgroundSize: "10px 10px",
              }}
            />
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-10 mt-8">
          <div className="flex-shrink-0">
            <Link
              to="/volunteer"
              className="flex items-center justify-center text-center w-56 h-56 md:w-64 md:h-64 rounded-md shadow-md text-white p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              style={{ backgroundColor: "#2c5f86" }}
            >
              <p className="text-sm md:text-base font-medium leading-relaxed">
                "No child is too rare to treat. Accelerating rare disease
                treatments through community partnerships, fundraising and
                advocacy. Please join us."
              </p>
            </Link>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-gray-500 text-sm leading-relaxed">
              Skylar's story is just one of many. Today thousands of other
              children face incredible odds with a rare diagnosis. For many,
              science and medical advancements could bring treatment, improved
              quality of life, and possibly a cure — but these families face
              the challenge alone. It is daunting, exhausting, and financially
              overwhelming to research, prove, advance, and develop the
              necessary treatments — but it is not impossible. No child is too
              rare to treat.
            </p>
            <p className="text-gray-500 text-sm leading-relaxed mt-4">
              Through the friendships with other families during Skylar's
              year-long hospital stay, it became apparent that the lesser-known
              diseases just don't have the attention of the scientific
              community or the financial resources at their fingertips. The
              Hubbards were inspired to begin to change that, and with a
              renewed commitment to advancing a treatment for Beta-Mannosidosis,
              they formed the Children's Rare Disease Alliance (CRDA).
            </p>
          </div>
        </div>

        <p className="text-gray-500 text-sm leading-relaxed mt-4">
          At CRDA, we have a big goal: 30 by 2030. We are striving to
          support treatment development and bring hope to families facing a
          disease with no approved therapies for 30 rare diseases by 2030.
        </p>
        <p className="text-gray-500 text-sm leading-relaxed mt-4">
          While each rare disease affects a small number of patients,
          together they impact millions of children and families searching
          for answers and hope. Please join us — these kids can't wait, and
          every small effort brings hope, renewed courage, and some joy to
          the families who cherish and love them dearly.
        </p>
      </section>

      {/*
      { Our Values }
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            What We Stand For
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 min-w-0">
                <img
                  src={v.icon}
                  alt={v.alt}
                  className="w-10 h-10 object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-gray-900 font-bold mb-1 text-sm">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      */}

      {/* Fund Usage */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            Where Your Support Goes
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Putting Funds to Work
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Funds raised may support research, natural history studies,
            therapeutic development, manufacturing, and related efforts through
            academic or industry partners working toward treatments for rare
            diseases.
          </p>
        </div>
      </section>
    </div>
  );
}
