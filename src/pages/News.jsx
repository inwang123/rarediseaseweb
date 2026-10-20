import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import stories from "../data/stories";

const NAVY = "#0f2a44";
const AZURE = "#2c5f86";
const PAGE_SIZE = 6;

const CATEGORIES = ["All Stories", "Rare Stories", "4Rare", "CRDA News", "In the Media"];

const BADGES = {
  "Rare Stories": { bg: "#fde4d9", fg: "#c4501f" },
  "4Rare": { bg: "#4a90d9", fg: "#ffffff" },
  "CRDA News": { bg: "#cdeeea", fg: "#1d6f68" },
  "In the Media": { bg: "#e3dcfb", fg: "#3d2f9c" },
};

function formatDate(iso) {
  const d = new Date(`${iso}T00:00:00`);
  return d.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" });
}

function ReadMore({ url }) {
  const cls = "inline-flex items-center gap-2 text-sm font-semibold hover:underline";
  const content = (
    <>
      Read More <span aria-hidden="true">→</span>
    </>
  );
  if (/^https?:\/\//.test(url)) {
    return (
      <a href={url} target="_blank" rel="noopener noreferrer" className={cls} style={{ color: AZURE }}>
        {content}
      </a>
    );
  }
  return (
    <Link to={url} className={cls} style={{ color: AZURE }}>
      {content}
    </Link>
  );
}

function StoryRow({ story }) {
  const badge = BADGES[story.category] ?? BADGES["CRDA News"];
  return (
    <article className="flex flex-col md:flex-row gap-5 md:gap-7 py-6 border-b border-gray-200 last:border-b-0">
      {story.image && (
        <img
          src={story.image}
          alt=""
          loading="lazy"
          className="w-full md:w-72 lg:w-80 aspect-[16/10] object-cover rounded-lg flex-shrink-0"
        />
      )}
      <div className="flex flex-col gap-2 min-w-0">
        <div className="flex items-center gap-4">
          <span
            className="text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: badge.bg, color: badge.fg }}
          >
            {story.category}
          </span>
          <span className="text-sm text-gray-500">{formatDate(story.date)}</span>
        </div>
        <h2 className="text-xl md:text-2xl font-bold leading-snug" style={{ color: NAVY }}>
          {story.title}
        </h2>
        <p className="text-sm md:text-base leading-relaxed text-gray-500">{story.summary}</p>
        {story.url && <ReadMore url={story.url} />}
      </div>
    </article>
  );
}

function pageNumbers(current, total) {
  if (total <= 5) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, current - 1, current, current + 1]);
  const nums = [...set].filter((n) => n >= 1 && n <= total).sort((a, b) => a - b);
  const out = [];
  nums.forEach((n, i) => {
    if (i && n - nums[i - 1] > 1) out.push("…");
    out.push(n);
  });
  return out;
}

export default function News() {
  const [category, setCategory] = useState("All Stories");
  const [page, setPage] = useState(1);

  const filtered = useMemo(
    () =>
      [...stories]
        .filter((s) => category === "All Stories" || s.category === category)
        .sort((a, b) => new Date(b.date) - new Date(a.date)),
    [category]
  );

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const visible = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const goTo = (n) => {
    setPage(n);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Banner */}
      <section style={{ background: "linear-gradient(135deg, #e6f0f7 0%, #f6efe6 100%)" }}>
        <div className="max-w-6xl mx-auto px-6 md:px-16 py-14 md:py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold" style={{ color: NAVY }}>
            In the News
          </h1>
          <p className="mt-4 max-w-xl text-base md:text-xl leading-relaxed text-gray-600">
            Stories, updates and media coverage from our community, our hikes, and our ongoing
            work to move rare disease treatments forward.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pt-8">
        <div className="flex flex-wrap justify-center gap-3" role="tablist" aria-label="Story categories">
          {CATEGORIES.map((c) => {
            const active = c === category;
            return (
              <button
                key={c}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setCategory(c);
                  setPage(1);
                }}
                className="px-5 py-2 rounded-full text-sm font-medium transition-colors"
                style={
                  active
                    ? { backgroundColor: AZURE, color: "#fff" }
                    : { backgroundColor: "#eef3f8", color: AZURE }
                }
              >
                {c}
              </button>
            );
          })}
        </div>
      </section>

      {/* Stories */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 py-8 min-h-[16rem]">
        {visible.length ? (
          visible.map((s) => <StoryRow key={s.id} story={s} />)
        ) : (
          <p className="py-16 text-center text-gray-500">
            {stories.length
              ? "No stories in this category yet."
              : "Stories are coming soon. Check back for updates."}
          </p>
        )}

        {totalPages > 1 && (
          <nav className="mt-8 flex items-center justify-center gap-2" aria-label="Pagination">
            <button
              onClick={() => goTo(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="w-10 h-10 rounded-lg text-sm bg-[#eef3f8] disabled:opacity-40"
              style={{ color: AZURE }}
            >
              ←
            </button>
            {pageNumbers(page, totalPages).map((n, i) =>
              n === "…" ? (
                <span key={`gap-${i}`} className="w-8 text-center text-gray-400">
                  …
                </span>
              ) : (
                <button
                  key={n}
                  onClick={() => goTo(n)}
                  aria-current={n === page ? "page" : undefined}
                  className="w-10 h-10 rounded-lg text-sm font-medium"
                  style={
                    n === page
                      ? { backgroundColor: AZURE, color: "#fff" }
                      : { backgroundColor: "#eef3f8", color: AZURE }
                  }
                >
                  {n}
                </button>
              )
            )}
            <button
              onClick={() => goTo(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="w-10 h-10 rounded-lg text-sm bg-[#eef3f8] disabled:opacity-40"
              style={{ color: AZURE }}
            >
              →
            </button>
          </nav>
        )}
      </section>
    </div>
  );
}
