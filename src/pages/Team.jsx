import { useState } from "react";
import PageBanner from "../components/PageBanner";
import { TeamSection, BioModal } from "../components/TeamParts";
import {
  strategicAdvisoryBoard,
  marketingTeam,
  otherTeam,
  outreachCommittee,
} from "../data/team";

export default function Team() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white overflow-x-hidden">
      <PageBanner title="Meet Our Team" intro="The People Behind Our Work" />

      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <TeamSection
          title="Strategic Advisory Board"
          members={strategicAdvisoryBoard}
          onSelect={setSelected}
        />

        <TeamSection
          title="Marketing & Fundraising Specialists"
          members={marketingTeam}
          onSelect={setSelected}
        />

        <TeamSection
          title="Team Members"
          members={otherTeam}
          onSelect={setSelected}
        />

        <TeamSection
          title="Outreach and Service Committee"
          members={outreachCommittee}
          onSelect={setSelected}
        />
      </section>

      <BioModal member={selected} onClose={() => setSelected(null)} />
    </div>
  );
}
