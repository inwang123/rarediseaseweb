const NAVY = "#0f2a44";
const AZURE = "#2c5f86";
const ORANGE = "#ed774a";

// Shared banner for the top-level pages (About, Get Involved, In the News, Contact).
// Same gradient as the Donate page, and a fixed height so the banners line up across pages.
export default function PageBanner({ eyebrow, title, intro }) {
  return (
    <section
      className="flex items-center min-h-[15rem] md:min-h-[18rem]"
      style={{ background: "linear-gradient(135deg, #d0fcff 0%, #e4c3ecdc 100%)" }}
    >
      <div className="w-full max-w-6xl mx-auto px-6 md:px-16 py-10">
        {eyebrow && (
          <>
            <p className="text-xs font-bold uppercase tracking-[0.2em]" style={{ color: AZURE }}>
              {eyebrow}
            </p>
            <div className="mt-2 mb-4 h-0.5 w-10" style={{ backgroundColor: ORANGE }} />
          </>
        )}
        <h1 className="text-4xl md:text-6xl font-extrabold" style={{ color: NAVY }}>
          {title}
        </h1>
        {intro && (
          <p className="mt-4 max-w-2xl text-base md:text-xl leading-relaxed text-gray-700">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
