import { useEffect } from "react";

export default function Donate() {
  useEffect(() => {
    const existing = document.querySelector(
      'script[src*="widgets.givebutter.com"]'
    );
    if (existing) return;
    const script = document.createElement("script");
    script.src =
      "https://widgets.givebutter.com/latest.umd.cjs?acct=wq6qCPjsy68cS69J&p=other";
    script.async = true;
    document.head.appendChild(script);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="kid_hugging_doc.png"
          alt="Donate"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 flex flex-col justify-center h-full">
          <p className="text-orange-400 font-semibold text-xs uppercase tracking-widest mb-2">
            Make a Difference today
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            Donate Today
          </h1>
        </div>
      </section>

      {/* Donation Section with Background */}
      <section
        className="py-12 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #d0fcff 0%, #e4c3ecdc 100%)",
        }}
      >
        <div className="max-w-6xl mx-auto">
          {/* Header Text */}
          <div className="mb-8 text-center">
            <p className="text-orange-500 font-semibold text-lg uppercase tracking-widest mb-2">
              Your Gift Matters
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Turn small change into life-changing treatments
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Thank you for your contribution! *No need to tip
            </p>
          </div>

          {/* Two Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {/* Donation Form - first in DOM so it appears first on mobile */}
            <div className="md:order-last">
              {/* Mobile-only tip disclaimer */}
              <div className="md:hidden bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                <p className="text-sm font-semibold text-yellow-800 mb-1">
                  💡 No need to tip!
                </p>
                <p className="text-sm text-yellow-700 leading-relaxed">
                  Tips go directly to Givebutter, not our organization. To
                  remove the tip:
                </p>
                <ol className="text-sm text-yellow-700 mt-2 space-y-1 list-decimal list-inside">
                  <li>Click the tip dropdown</li>
                  <li>
                    Select <strong>Other</strong>
                  </li>
                  <li>
                    Type <strong>0</strong>
                  </li>
                </ol>
              </div>

              <givebutter-giving-form campaign="RWEOLE"></givebutter-giving-form>
            </div>
            {/* Left Box - Organization Info (hidden on mobile) */}
            <div className="hidden md:flex bg-white rounded-lg shadow-sm overflow-hidden flex-col self-start sticky top-4">
              {/* Top half - White background with logo */}
              <div
                className="bg-white p-6 flex items-center justify-center"
                style={{ minHeight: "180px" }}
              >
                <img
                  src="/logo_icon.png"
                  alt="Children's Rare Disease Alliance"
                  className="w-32 h-32 object-contain"
                />
              </div>
              {/* Bottom half - Blue background with text */}
              <div className="bg-blue-50 p-8 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                  Children's Rare Disease Alliance
                </h3>
                <p className="text-gray-600 text-lg leading-relaxed mb-6 flex-grow">
                  The Children's Rare Disease Alliance turns small acts of
                  generosity at checkout into life-changing treatments for
                  children living with rare diseases.
                </p>

                {/* Tip Disclaimer */}
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <p className="text-sm font-semibold text-yellow-800 mb-1">
                    💡 No need to tip!
                  </p>
                  <p className="text-sm text-yellow-700 leading-relaxed">
                    Tips go directly to Givebutter, not our organization. To
                    remove the tip:
                  </p>
                  <ol className="text-sm text-yellow-700 mt-2 space-y-1 list-decimal list-inside">
                    <li>Click the tip dropdown</li>
                    <li>
                      Select <strong>Other</strong>
                    </li>
                    <li>
                      Type <strong>0</strong>
                    </li>
                  </ol>
                </div>
                <p className="text-sm text-gray-400 text-center pt-4 border-t border-gray-300">
                  Organized by Children's Rare Disease Alliance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        /* Make givebutter form fill container */
        givebutter-giving-form {
          display: block !important;
          width: 100% !important;
        }

        /* Ensure both columns are equal height */
        @media (min-width: 768px) {
          .grid.md\\:grid-cols-2 {
            grid-auto-rows: 1fr;
          }
        }
      `}</style>
    </div>
  );
}