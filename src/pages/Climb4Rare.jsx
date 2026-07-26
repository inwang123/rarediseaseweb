import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const involvementCards = [
  {
    icon: "/Climb4Rare/Join_a_hike_icon.webp",
    title: "Join a Hike",
    desc: "Join a Climb4Rare event near you and make every step count.",
    border: "#2e7d32",
    items: [
      "Find a hike near you",
      "Sign the waiver: climb4rare_waiver.pdf",
      "Share your summit",
    ],
  },
  {
    icon: "/Climb4Rare/Host_a_hike_icon.webp",
    title: "Host a Hike",
    desc: "Organize a hike in your community and inspire others to get involved.",
    border: "#1a3663",
    items: [
      "Email erin@crdalliance.org with your trail, date, and time",
      "We'll build your custom registration and fundraising page",
      "Share that link with your community",
    ],
  },
  {
    icon: "/Climb4Rare/Share_your_summit_icon.webp",
    title: "Share your Summit",
    desc: "Wherever you hike, bring a #Climb4Rare sign and take a photo at the summit.",
    border: "#4c1d7a",
    items: [
      "Tag: @CRDA or @hubbardhaven",
      "Use #Climb4Rare or hold up Climb4Rare_Sign.png",
      "We'll share photos from supporters around the world on our social media platforms and website.",
    ],
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
  { length: 14 },
  (_, i) => `/Climb4Rare/Hall_of_Fame/c4r_${i + 1}.webp`
);

const sponsorTiers = [
  {
    icon: "/Climb4Rare/Summit_sponsor_icon.webp",
    title: "Summit Sponsor",
    amount: "$5,000+",
    border: "#f2960f",
    items: [
      "Logo carried to the summit of Kilimanjaro",
      "Dedicated Sponsor spotlight reel on CRDA social media and website",
      "Featured recognition on crdalliance.org",
      "Priority sponsor placement throughout the campaign",
    ],
  },
  {
    icon: "/Climb4Rare/Ascent_sponsor_icon.webp",
    title: "Ascent Sponsor",
    amount: "$2,500+",
    border: "#1a3663",
    items: [
      "Logo displayed at the halfway point of Kilimanjaro",
      "Dedicated Sponsor spotlight reel on CRDA social media and website",
      "Recognition on crdalliance.org",
      "Recognition across social media platforms",
    ],
  },
  {
    icon: "/Climb4Rare/Base_camp_sponsor.webp",
    title: "Base Camp Sponsor",
    amount: "$1,000",
    border: "#2e7d32",
    items: [
      "Logo displayed at Kilimanjaro Base Camp",
      "Recognition on crdalliance.org",
      "Recognition across social media platforms",
      "Featured in expedition updates and photos",
    ],
  },
];

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

      {/* Why we Climb */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-4">
            Why we Climb
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
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-8">
            How to Get Involved
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-stretch">
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
                <ul className="body-std text-left list-disc list-inside space-y-1">
                  {card.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Donate card */}
            <div
              className="bg-white rounded-xl shadow-sm border-2 p-6 flex flex-col items-center text-center"
              style={{ borderColor: "#0f7d8c" }}
            >
              <img
                src="/Climb4Rare/Donate_icon.webp"
                alt=""
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-gray-900 font-bold mb-2">Donate</h3>
              <p className="body-std mb-4">
                Your support helps accelerate treatment development and
                research efforts.
              </p>
              <hr className="w-10 border-gray-300 mb-4" />
              <ul className="body-std text-left list-disc list-inside space-y-1 mb-6">
                <li>One-time donation</li>
                <li>Monthly giving</li>
                <li>See your impact</li>
                <li>Tax-deductible</li>
              </ul>
              <Link
                to="/donate"
                className="mt-auto text-sm font-semibold px-6 py-2 rounded-lg !text-white bg-[#2c5f86] hover:bg-[#7bb1bf] transition-colors"
              >
                Donate Now →
              </Link>
            </div>
          </div>

          {/* Events */}
          <div className="mt-12">
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

      {/* Become a Sponsor */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <h2 className="text-2xl md:text-3xl font-bold text-[#2c5f86] mb-4">
          Become a Sponsor
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-2">
          Partner with us as we take the message of rare disease awareness to
          the summit of Mount Kilimanjaro. All sponsors receive recognition
          across CRDA's website, social media platforms, and expedition
          updates. Donations are tax-deductible and support research and
          treatment development through Children's Rare Disease Alliance, a 501(c)(3)
          nonprofit.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed max-w-3xl mb-8">
          Complete our Sponsor Commitment for Climb4Rare_Sponsor_Commitment_Form.pdf
          {" "}or contact us at{" "}
          <a
            href="mailto:info@crdalliance.org"
            className="!text-[#ed774a] font-medium hover:underline"
          >
            info@crdalliance.org
          </a>
          .
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 items-stretch">
          {sponsorTiers.map((tier) => (
            <div
              key={tier.title}
              className="bg-white rounded-xl shadow-sm border-2 p-6 flex flex-col items-center text-center"
              style={{ borderColor: tier.border }}
            >
              <img
                src={tier.icon}
                alt=""
                className="w-16 h-16 rounded-full mb-4"
              />
              <h3 className="text-gray-900 font-bold">{tier.title}</h3>
              <p className="text-[#2c5f86] font-semibold mb-4">
                {tier.amount}
              </p>
              <hr className="w-10 border-gray-300 mb-4" />
              <ul className="body-std text-left list-disc list-inside space-y-1">
                {tier.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
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
