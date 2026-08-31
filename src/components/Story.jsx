import { useState, useEffect, useRef, useCallback } from "react";

const patients = [
  {
    name: "Skylar Hubbard",
    img: "/Skylar_bio.webp",
    bio: "Skylar Hubbard was diagnosed with beta-mannosidosis just one day before her first birthday. Since then, she has lost vision, hearing, and ability to eat and has been diagnosed with autism, optic nerve atrophy, and leukoencephalopathy. In 2025, Skylar spent more than nine months in the hospital undergoing an experimental bone marrow transplant to help slow the progression of her disease. Despite these challenges, her smile lights up every room, and her joyful spirit is contagious. Her sign name means \"Brave,\" because she is a true fighter. The Lost Enzyme Project is working to develop the first enzyme replacement therapy for children living with beta-mannosidosis, bringing hope to families around the world.",
  },
  {
    name: "Oliver",
    img: "/Oliver_bio.webp",
    bio: "Oliver was diagnosed with Beta-mannosidosis at the age of 4. He was the first patient diagnosed in the U.S. and underwent an experimental bone marrow transplant at the age of 4, the first in medical history for Beta-mannosidosis. Through research initiated by The Lost Enzyme Project, it was discovered that Oliver has a second rare HSPD1 disorder. Collectively, Oliver's symptoms continue to progress. He is considered blind, experiences chronic pain, has difficulty with swallowing and speech, and has lost his ability to walk. He desperately needs life-saving Beta-mannosidosis and HSPD1 treatment. Despite his challenges, Oliver loves his life. He has a wonderful sense of humor and a kind heart. Oliver works hard, loves travel, basketball, and all things LA Lakers. Most of all, Oliver believes in the possibility of a better future.",
  },
  {
    name: "Phippin",
    img: "/Phippin_bio.jpg",
    bio: "Phippin is from Logan, Utah, and is currently living with Aicardi-Goutières syndrome (AGS), a rare genetic condition that affects the brain and immune system, Hodgkin's lymphoma, and moyamoya disease, a rare cerebrovascular disorder that adds further complexity to his care. Through it all, Phippin's joyful personality continues to shine. He loves to sing, dance, and spread happiness to everyone around him.",
  },
  {
    name: "Keon",
    img: "/Keon_bio.jpg",
    bio: "Keon was diagnosed with a rare genetic mutation at the age of 8: Tatton Brown Rahman Syndrome. The syndrome and gene mutation had only been discovered 4 years prior. At the time of his diagnosis there were only 15 known cases in the world. Today, Keon is 17 and there are several hundred people who have since been diagnosed with TBRS. His main challenges with the disease are mental disability, kidney disease, eye issues, low muscle tone and difficulty walking. Keon is the happiest, most loving and joyful boy, with a smile that lights up your heart. This past year has been especially challenging for Keon. He was diagnosed with a rare T-cell leukemia on top of his rare genetic syndrome, and all of the complications that come with that. It has definitely affected him, but yet he manages to still smile and laugh and spread joy to everyone he meets.",
  },
  {
    name: "Marco",
    img: "/Marco_bio.png",
    bio: "Marco was diagnosed with Beta-mannosidosis at 7yrs old. He was born with moderate hearing loss and started wearing hearing aids at 3 months old. He was diagnosed with ADHD and low cognitive function in 2023. Marco speech is delayed and receives education assistance at school. Despite all his challenges, Marco is an adorable kid that lives life to the fullest. He loves going camping, cars, bats and playing with friends."
  },
  {
    name: "Auggie",
    img: "/Auggie_bio.jpg",
    bio: "Auggie has AGS. He is nonverbal or maybe we could say non-wordal because he likes to squawk at us. He loves being held, loves lights, bird sounds, and bell sounds. He is a people person like his brother Phippin and seems happy when people--those he knows and those he's just met--are around."
  }
];

const AUTO_SCROLL_MS = 4500;
const WHEEL_COOLDOWN_MS = 600;

// Shortest signed distance from `index` to `center` around a circle of size `length`
function circularOffset(index, center, length) {
  let diff = index - center;
  if (diff > length / 2) diff -= length;
  if (diff < -length / 2) diff += length;
  return diff;
}

export default function Story() {
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const autoScrollRef = useRef(null);
  const lastWheelRef = useRef(0);
  const trackRef = useRef(null);

  const length = patients.length;

  const goTo = useCallback(
    (index) => {
      setCurrent(((index % length) + length) % length);
    },
    [length]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-scroll every few seconds, paused while the bio modal is open
  useEffect(() => {
    if (modalOpen) return;
    autoScrollRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % length);
    }, AUTO_SCROLL_MS);
    return () => clearInterval(autoScrollRef.current);
  }, [modalOpen, length]);

  const resetAutoScroll = useCallback(() => {
    clearInterval(autoScrollRef.current);
    if (modalOpen) return;
    autoScrollRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % length);
    }, AUTO_SCROLL_MS);
  }, [modalOpen, length]);

  const handleWheel = useCallback(
    (e) => {
      e.preventDefault();
      const now = Date.now();
      if (now - lastWheelRef.current < WHEEL_COOLDOWN_MS) return;
      lastWheelRef.current = now;

      if (e.deltaY > 5 || e.deltaX > 5) {
        next();
        resetAutoScroll();
      } else if (e.deltaY < -5 || e.deltaX < -5) {
        prev();
        resetAutoScroll();
      }
    },
    [next, prev, resetAutoScroll]
  );

  useEffect(() => {
    const node = trackRef.current;
    if (!node) return;
    node.addEventListener("wheel", handleWheel, { passive: false });
    return () => node.removeEventListener("wheel", handleWheel);
  }, [handleWheel]);

  const openBio = (p) => {
    setSelected(p);
    setModalOpen(true);
  };

  const closeBio = () => {
    setSelected(null);
    setModalOpen(false);
  };

  return (
    <div
      className="relative overflow-hidden"
      style={{ backgroundColor: "#f0f6fa" }}
    >
      <img
        src="/border_bottom.png"
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 right-0 w-1/2 pointer-events-none select-none z-0"
        style={{ opacity: 0.5, mixBlendMode: "multiply" }}
      />

      <section className="relative z-10 py-20 px-6 md:px-16 max-w-5xl mx-auto flex flex-col items-center gap-10">
        {/* Header */}
        <div className="text-center flex flex-col gap-2">
          <p
            className="text-xs font-bold uppercase tracking-widest"
            style={{ color: "#2c5f86" }}
          >
            Our Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            Meet Our Rare Heroes
          </h2>
        </div>

        {/* Carousel */}
        <div className="w-full flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 md:gap-6 w-full justify-center">
            <button
              onClick={() => {
                prev();
                resetAutoScroll();
              }}
              aria-label="Previous hero"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm text-[#2c5f86] hover:bg-[#e9f2f8] transition-colors shrink-0"
            >
              ‹
            </button>

            <div
              ref={trackRef}
              className="relative w-full max-w-3xl mx-auto"
              style={{ height: "420px", touchAction: "pan-y" }}
            >
              {patients.map((p, i) => {
                const offset = circularOffset(i, current, length);
                const abs = Math.abs(offset);

                // Render one card further out than we show, so it can fade
                // out in place instead of popping out of existence
                if (abs > 2) return null;

                const isCenter = offset === 0;
                const isVisible = abs <= 1;
                const scale = isCenter ? 1 : isVisible ? 0.8 : 0.65;
                const translateX = offset * 230;
                const opacity = isVisible ? 1 : 0;
                const zIndex = isCenter ? 30 : isVisible ? 10 : 1;

                return (
                  <div
                    key={p.name}
                    className="absolute top-1/2 left-1/2 flex flex-col items-center text-center bg-white rounded-2xl overflow-hidden w-64"
                    style={{
                      transform: `translate(-50%, -50%) translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                      boxShadow: isCenter
                        ? "0 20px 40px -12px rgba(44, 95, 134, 0.35)"
                        : "0 8px 20px -8px rgba(44, 95, 134, 0.18)",
                      filter: isCenter ? "none" : "saturate(0.85)",
                      transition:
                        "transform 1s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.2s ease, box-shadow 0.5s ease, filter 0.5s ease",
                      cursor: isCenter ? "default" : "pointer",
                      pointerEvents: isVisible ? "auto" : "none",
                    }}
                    onClick={() => {
                      if (!isCenter) {
                        goTo(i);
                        resetAutoScroll();
                      }
                    }}
                  >
                    <div className="w-full aspect-square overflow-hidden">
                      <img
                        src={p.img}
                        alt={p.name}
                        className="w-full h-full object-cover object-top"
                        draggable={false}
                      />
                    </div>
                    <div className="p-4 flex flex-col items-center gap-1">
                      <h3 className="font-bold text-gray-900 text-xl">{p.name}</h3>
                      {isCenter && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openBio(p);
                          }}
                          className="mt-1 text-xs text-[#2c5f86] font-medium underline underline-offset-2"
                        >
                          Learn more
                        </button>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => {
                next();
                resetAutoScroll();
              }}
              aria-label="Next hero"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-white shadow-sm text-[#2c5f86] hover:bg-[#e9f2f8] transition-colors shrink-0"
            >
              ›
            </button>
          </div>

          {/* Dots */}
          <div className="flex items-center gap-2">
            {patients.map((p, i) => (
              <button
                key={p.name}
                onClick={() => {
                  goTo(i);
                  resetAutoScroll();
                }}
                aria-label={`Go to ${p.name}`}
                className="rounded-full transition-all"
                style={{
                  width: i === current ? "20px" : "8px",
                  height: "8px",
                  backgroundColor: i === current ? "#2c5f86" : "#c7dae6",
                }}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Bio Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={closeBio}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-y-auto max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeBio}
              className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm transition-all"
            >
              ✕
            </button>
            <div className="w-full aspect-square overflow-hidden rounded-t-2xl flex-shrink-0">
              <img
                src={selected.img}
                alt={selected.name}
                className="w-full h-full object-cover object-top"
              />
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-gray-900 font-bold text-lg">{selected.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{selected.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
