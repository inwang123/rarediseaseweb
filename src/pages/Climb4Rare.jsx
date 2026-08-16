import { useEffect, useRef, useState, useMemo } from "react";
import { Link } from "react-router-dom";

{/* Notes: 
  Go to index.css to see tailwind aliases.
  Use tailwind aliases to reduce the amount of tailwind classes in this file.
  Optimally, refactor this file to use some standard components for cards, buttons, and links to reduce code duplication.
*/}

// Simple markdown-style link parser: [label](url)
function renderLinkedText(text) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return parts.map((part, i) => {
    const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (!match) return <span key={i}>{part}</span>;

    const [, label, url] = match;
    const isExternal = /^https?:\/\//.test(url);
    return (
      <a
        key={i}
        href={url}
        className="text-[#2c5f86] underline hover:text-[#7bb1bf] font-medium"
        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {label}
      </a>
    );
  });
}

const involvementCards = [
  {
    icon: "/Climb4Rare/Summit_sponsor_icon.webp",
    title: "Become a Sponsor",
    desc: "Bring a #Climb4Rare sign and take a photo at the summit!",
    border: "#FE9F01",
    items: [
      "Sponsor recognition on our website and social media.",
      "A custom flag featuring your logo at the top of Mount Kilimanjaro.",
      "Recognition in our expedition documentary footage.",
    ],
  },
  {
    icon: "/Climb4Rare/Join_a_hike_icon.webp",
    title: "Join a Hike",
    desc: "Join a Climb4Rare event near you and make every step count.",
    border: "#2e7d32",
    items: [
      "Find a hike near you",
      "Sign the [waiver](https://thelostenzymeproject.org/wp-content/uploads/2026/06/CLIMB4RARE-Waiver.pdf)",
      "Share your summit",
    ],
  },
  {
    icon: "/Climb4Rare/Host_a_hike_icon.webp",
    title: "Host a Hike",
    desc: "Organize a hike in your community and inspire others to get involved.",
    border: "#1a3663",
    items: [
      "Email [info@crdalliance.org](mailto:info@crdalliance.org) with your trail, date, and time",
      "We'll build your custom registration and fundraising page",
      "Share that link with your community",
    ],
  },
  {
    icon: "/Climb4Rare/Donate_icon.webp",
    title: "Donate",
    desc: "Your support accelerates treatment development and research efforts.",
    border: "#0f7d8c",
    items: [
      "One-time donation",
      "Monthly giving",
      "See your impact",
      "Tax-deductible",
    ],
    cta: { label: "Donate Now →", to: "/donate" },
  },
];

const events = [
  {
    name: "AZ-Thompson Trail",
    date: "June 19, 2026",
    url: "https://givebutter.com/az-thompson-trail-ubdkjd",
  },
  {
    name: "UT-Lower Green Pond",
    date: "June 22, 2026",
    url: "https://givebutter.com/climb4rare-e8teh7",
  },
  {
    name: "UT-Battle Creek Falls Trail",
    date: "July 11, 2026",
    url: "https://givebutter.com/ut-battle-creek-falls-trail-hkwcod",
  },
  {
    name: "CA-Johnny Cash Trail",
    date: "August 8, 2026",
    url: "https://givebutter.com/ca-johnny-cash-trail-dpdnfs",
  },
];

const hallOfFamePhotos = Array.from(
  { length: 16 },
  (_, i) => `/Climb4Rare/Hall_of_Fame/c4r_${i + 1}.webp`
);

function HallOfFameCarousel({ photos }) {
  const [index, setIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(false);
  const containerRef = useRef(null);

  const goTo = (i) => setIndex((i + photos.length) % photos.length);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAutoplay(true);
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!autoplay) return;
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % photos.length);
    }, 4000);
    return () => clearInterval(id);
  }, [autoplay, photos.length]);

  return (
    <div ref={containerRef} className="max-w-4xl mx-auto">
      <div className="relative rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white aspect-square sm:aspect-video">
        <img
          src={photos[index]}
          alt={`Climb4Rare summit photo ${index + 1}`}
          className="w-full h-full object-contain bg-white"
        />

        <button
          type="button"
          onClick={() => goTo(index - 1)}
          aria-label="Previous photo"
          className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-700 shadow-sm transition-colors"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={() => goTo(index + 1)}
          aria-label="Next photo"
          className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white border border-gray-200 hover:bg-gray-100 flex items-center justify-center text-gray-700 shadow-sm transition-colors"
        >
          ›
        </button>
      </div>

      <div className="flex justify-center flex-wrap gap-2 mt-4">
        {photos.map((_, i) => (
          <button
            key={i}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
            className={`w-2.5 h-2.5 rounded-full transition-colors ${
              i === index ? "bg-[#2c5f86]" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function Climb4Rare() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = "Climb4Rare";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  const [leftImg, rightImg] = useMemo(() => {
    const total = 16;
    const first = Math.floor(Math.random() * total) + 1;
    let second = Math.floor(Math.random() * total) + 1;
    while (second === first) {
      second = Math.floor(Math.random() * total) + 1;
    }
    return [
      `/Climb4Rare/Hall_of_Fame/c4r_${first}.webp`,
      `/Climb4Rare/Hall_of_Fame/c4r_${second}.webp`,
    ];
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero */}
      <section className="max-w-5xl mx-auto px-6 md:px-16 pt-8">
        <img
          src="/Climb4Rare/Climb4Rare_Hero.webp"
          alt="Climb4Rare — 19,341 feet. One mission. This September, we are climbing Mount Kilimanjaro to raise funds and awareness for Beta-mannosidosis."
          className="w-full h-auto rounded-lg shadow-sm"
        />
      </section>

      {/* Why We Climb */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-4">
            Why We Climb
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Earlier this year, while our daughter Skylar was fighting
            life-threatening complications following a bone marrow transplant
            for Beta-Mannosidosis, we were told to prepare for the worst.
            Standing beside her hospital bed, we didn't know if she would make
            it through the night.
            <br />
            <br />
            But Skylar kept fighting.
            <br />
            <br />
            That experience strengthened our commitment to advancing a
            treatment for Beta-Mannosidosis and reinforced why we founded
            Children's Rare Disease Alliance. Through Climb4Rare, our goal is to raise
            $100,000 to help support treatment development and bring hope to
            families facing a disease with no approved therapies.
            <br />
            <br />
            For us, this climb is about more than reaching a summit. Every
            foot we climb represents the uphill battle rare disease families
            face every day—the challenges, uncertainty, and determination to
            keep moving forward in search of a better future.
            <br />
            <br />
            For these families, the climb never ends. We climb because
            children like Skylar deserve a future with treatment, hope, and
            the chance to live life to its fullest. We climb because these
            kids can't wait.
          </p>
        </div>
        <div className="flex-shrink-0">
          <img
            src="/Climb4Rare/Climb4Rare_Hospital.webp"
            alt="Skylar and her brother in the hospital"
            className="w-72 md:w-80 h-auto object-cover rounded-md shadow-md"
          />
        </div>
      </section>

      {/* How to Get Involved */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <h2 className="ml-32 text-2xl md:text-3xl font-bold text-[#2c5f86] mb-8">
            How to Get Involved
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {involvementCards.map((card) => (
              <div
                key={card.title}
                className="bg-white rounded-xl shadow-sm border-2 p-6 flex flex-col items-center text-center"
                style={{ borderColor: card.border }}
              >
                <img
                  src={card.icon}
                  alt=""
                  className="w-16 h-16 rounded-full mb-4"
                />
                <h3 className="text-gray-900 font-bold mb-2">{card.title}</h3>
                <p className="body-std mb-4">
                  {card.desc}
                </p>
                <hr className="w-10 border-gray-300 mb-4" />
                <ul className="w-fit max-w-2/3 mx-auto body-std text-left list-disc list-outside pl-5 space-y-1">
                  {card.items.map((item) => (
                    <li key={item}>{renderLinkedText(item)}</li>
                  ))}
                </ul>
                {card.cta && (
                  <Link
                    to={card.cta.to}
                    className="mt-4 text-sm font-semibold px-6 py-2 rounded-lg !text-white bg-[#2c5f86] hover:bg-[#7bb1bf] transition-colors"
                  >
                    {card.cta.label}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Share Your Summit */}
          <section className="py-12 bg-gray-50">
            <div className="max-w-5xl mx-auto px-6 md:px-16">
              <div
                className="bg-white rounded-xl shadow-sm border-2 p-6 md:p-8 flex flex-col md:flex-row items-center gap-6"
                style={{ borderColor: "#4c1d7a" }}
              >
                <img
                  src={leftImg}
                  alt=""
                  className="w-full md:w-48 h-48 object-cover rounded-lg flex-shrink-0"
                />

                <div className="flex-1 text-center">
                  <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-4">
                    Share Your Summit
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    Bring a #Climb4Rare sign and take a photo at the summit!
                  </p>
                  <ul className="body-std text-left list-disc list-outside pl-5 space-y-1 w-fit mx-auto">
                    <li>
                      {renderLinkedText(
                        "Tag: [@CRDA](https://instagram.com/CRDA) or [@hubbardhaven](https://instagram.com/hubbardhaven)"
                      )}
                    </li>
                    <li>
                      {renderLinkedText(
                        "Use #Climb4Rare or hold up [Climb4Rare_Sign.png](https://thelostenzymeproject.org/wp-content/uploads/2026/06/Climb4Rare_8x11_Sign.pdf)"
                      )}
                    </li>
                    <li>
                      We'll share photos from supporters around the world on our
                      social media platforms and website.
                    </li>
                  </ul>
                </div>

                <img
                  src={rightImg}
                  alt=""
                  className="w-full md:w-48 h-48 object-cover rounded-lg flex-shrink-0"
                />
              </div>
            </div>
          </section>

          {/* Events */}
          <div className="ml-32 mt-12">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Climb4Rare Events Near You
            </h3>
            <ul className="space-y-2">
              {events.map((event) => (
                <li key={event.name} className="text-sm">
                  <a
                    href={event.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="!text-[#ed774a] font-medium hover:underline"
                  >
                    {event.name}
                  </a>{" "}
                  <span className="text-gray-500">({event.date})</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Hall of Fame */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-4">
            Climb4Rare Hall of Fame
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-8">
            Don't forget to share your summit and tag{" "}
            <span className="text-[#ed774a] font-medium">
              @CRDA
            </span>{" "}
            or{" "}
            <a href="https://www.instagram.com/hubbardhaven/" target="_blank" rel="noopener noreferrer">
              <span className="text-[#ed774a] font-medium">@hubbardhaven</span>
            </a>{" "}
            with #Climb4Rare or hold up Climb4Rare_Sign.png
          </p>
          <HallOfFameCarousel photos={hallOfFamePhotos} />
        </div>
      </section>
    </div>
  );
}
