export default function Climb4Rare() {
  return (
    <div className="bg-white">

      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="Kilimanjaro_from_Amboseli.jpg"
          alt="Climb4Rare"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 flex flex-col justify-center h-full">
          <p className="text-orange-400 font-semibold text-sm uppercase tracking-widest mb-2">Fundraising Campaign</p>
          <h1 className="text-white text-4xl md:text-5xl font-extrabold leading-tight">Climb4Rare</h1>
        </div>
      </section>

      {/* Why We Climb */}
      <section className="py-16 max-w-5xl mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="h2-std">Why We Climb</h2>
            <p className="body-std mb-4">
              Earlier this year, while our daughter Skylar was fighting life-threatening complications
              following a bone marrow transplant for Beta-Mannosidosis, we were told to prepare for the
              worst. Standing beside her hospital bed, we didn't know if she would make it through the night.
            </p>
            <p className="body-std mb-4">
              But Skylar kept fighting. That experience strengthened our commitment to advancing a treatment for Beta-Mannosidosis, and other rare diseases. Through Climb4Rare, our goal is to raise the funds needed to support treatment development and bring hope to families facing a disease with no approved therapies.
            </p>
            <p className="body-std">
              For us, this climb is about more than reaching a summit — it represents the uphill battle
              rare disease families face every day. We climb because children like Skylar deserve a future
              with treatment, hope, and the chance to live life to its fullest. We climb because these kids can't wait.
            </p>
          </div>
          <img
            src="\why_we_climb.jpeg"
            alt="Family climbing"
            className="rounded-xl w-full h-80 object-cover"
          />
        </div>
      </section>

    </div>
  );
}