export default function Donate() {
  return (
    <div className="bg-white overflow-x-hidden">
      {/* Donation Section — no hero, so the form is visible right away */}
      <section
        className="pt-4 pb-10 md:pt-5 px-6 md:px-16"
        style={{
          background: "linear-gradient(135deg, #d0fcff 0%, #e4c3ecdc 100%)",
        }}
      >
        <h1 className="sr-only">Donate</h1>

        <div className="max-w-4xl mx-auto">
          {/* Account portal link */}
          <a
            href="https://xplorpay.hyfin.app/portal/Z69N6"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mb-3 text-sm font-medium text-black hover:underline"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.75}
                d="M15.75 6.75a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 20.25a7.5 7.5 0 0115 0"
              />
            </svg>
            Go to account
          </a>

          {/* Donation Form */}
          <div className="w-full">
            <iframe
              src="https://xplorpay.hyfin.app/Z69N6PXK33UR/paymentLink?embed=true"
              title="Donate to the Children's Rare Disease Alliance"
              frameBorder="0"
              allow="payment"
              className="block mx-auto w-full max-w-4xl h-[1660px] min-[480px]:h-[1600px] min-[560px]:h-[1450px] md:h-[1340px] lg:h-[1290px]"
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