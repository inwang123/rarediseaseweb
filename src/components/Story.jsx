import { useState } from "react";

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
];

export default function Story() {
  const [selected, setSelected] = useState(null);

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

        {/* Patient Cards */}
        <div className="flex flex-col sm:flex-row gap-8 justify-center w-full">
          {patients.map((p) => (
            <div
              key={p.name}
              className="flex flex-col items-center text-center bg-white rounded-2xl shadow-sm overflow-hidden w-full max-w-xs mx-auto"
            >
              <div className="w-full aspect-square overflow-hidden">
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="p-4 flex flex-col items-center gap-1">
                <h3 className="font-bold text-gray-900 text-xl">{p.name}</h3>
                <p className="text-gray-400 text-sm">...</p>
                <button
                  onClick={() => setSelected(p)}
                  className="mt-1 text-xs text-[#2c5f86] font-medium underline underline-offset-2"
                >
                  Learn more
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bio Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-y-auto max-h-[80vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
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
