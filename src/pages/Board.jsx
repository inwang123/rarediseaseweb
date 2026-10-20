import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { TeamSection, BioModal } from "../components/TeamParts";
import { boardOfDirectors } from "../data/team";

export default function Board() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white overflow-x-hidden">
      <PageBanner title="Board of Directors" />

      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <TeamSection members={boardOfDirectors} onSelect={setSelected} />
      </section>

      <BioModal member={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
