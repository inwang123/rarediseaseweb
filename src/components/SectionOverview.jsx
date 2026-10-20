import { Link } from "react-router-dom";
import PageBanner from "./PageBanner";

const NAVY = "#0f2a44";
const AZURE = "#2c5f86";

// Landing page for a navbar section: a banner, a short intro, and a card linking to each sub-page.
export default function SectionOverview({ eyebrow, title, intro, items }) {
  return (
    <div className="bg-white overflow-x-hidden">
      <PageBanner eyebrow={eyebrow} title={title} intro={intro} />

      <section className="max-w-6xl mx-auto px-6 md:px-16 py-12 md:py-16">
        <div className="flex flex-col gap-5">
          {items.map(({ title: itemTitle, desc, to }) => (
            <Link
              key={to}
              to={to}
              className="group flex items-center gap-6 bg-white rounded-2xl border border-gray-200 border-l-4 p-6 md:p-7 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              style={{ borderLeftColor: AZURE }}
            >
              <div className="flex flex-col gap-2 flex-1 min-w-0">
                <h2 className="text-xl md:text-2xl font-bold" style={{ color: NAVY }}>
                  {itemTitle}
                </h2>
                <p className="text-sm md:text-base leading-relaxed text-gray-500">{desc}</p>
              </div>
              <span
                className="text-2xl transition-transform duration-200 group-hover:translate-x-1"
                style={{ color: AZURE }}
                aria-hidden="true"
              >
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
