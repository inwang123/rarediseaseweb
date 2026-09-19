export default function Donate() {
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
              Thank you for your contribution!
            </p>
          </div>

          {/* Donation Form */}
          <div className="w-full overflow-x-auto">
            <iframe
              src="https://xplorpay.hyfin.app/Z69N6PXK33UR/paymentLink?embed=true"
              title="Donate to the Children's Rare Disease Alliance"
              frameBorder="0"
              allow="payment"
              className="block mx-auto w-full min-w-[500px] max-w-4xl h-[1350px] md:h-[1250px]"
              style={{
                colorScheme: "light",
                borderRadius: ".25em",
              }}
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
}