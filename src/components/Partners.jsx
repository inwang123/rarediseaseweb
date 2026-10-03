const partners = [
  { id: 1, name: "Xplor Technologies", logo: "/Sponsors/Xplor_logo.png" },
  { id: 2, name: "The Lost Enzyme Project", logo: "/Sponsors/tlep_logo.jpg" },
  { id: 3, name: "Lee's Marketplace", logo: "/Sponsors/lee_logo.png" },
  { id: 4, name: "Ruck 4 Rare", logo: "/Sponsors/ruck4rare_logo.png" },
  { id: 5, name: "Timber Cross", logo: "/Sponsors/Timber_Cross_logo.png" },
  { id: 6, name: "Prism Print Shop", logo: "/Sponsors/prism_logo.png" },
  { id: 7, name: "Men Saw Hey", logo: "/Sponsors/mensawhey_logo-07.jpg" },
  { id: 8, name: "Anytime Auto Glass", logo: "/Sponsors/anytime_auto_logo.png" },
];

export default function Mission() {
  return (
    <div className="bg-white">
      {/* ── Partners Section ── */}
      <section className="py-16 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Our Sponsors
            </h2>
            <p className="text-gray-400 text-sm">
              Supporting families affected by rare diseases
            </p>
          </div>

          {/* Partners Grid - Centered */}
          <div className="flex justify-center gap-16 md:gap-24 flex-wrap">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="flex flex-col items-center justify-center gap-4 group"
              >
                {/* Logo container */}
                <div className="w-48 h-48 flex items-center justify-center p-6 transition-transform duration-300 group-hover:scale-105">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="max-w-full max-h-full object-contain"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerHTML = `<div class="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-gray-400 text-xs text-center">${partner.name}</div>`;
                    }}
                  />
                </div>

                {/* Partner name */}
                <p className="text-gray-500 text-sm text-center font-medium">
                  {partner.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
