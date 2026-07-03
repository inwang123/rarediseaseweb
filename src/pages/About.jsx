import { useState } from "react";

const boardOfDirectors = [
  {
    name: "Erin Hubbard",
    role: "Co-founder and Board Chair",
    img: "/Erin.png",
    bio: "Erin Hubbard is the Co-Founder and Board Chair of the Children's Rare Disease Alliance. She is a wife and mother of five, including her youngest daughter, Skylar, who lives with Beta-mannosidosis, an ultra-rare lysosomal storage disorder. Erin also co-founded The Lost Enzyme Project and is passionate about accelerating treatment development and supporting families affected by rare diseases.",
  },
  {
    name: "Nathan Hubbard",
    role: "Co-founder and Treasurer",
    img: "/Nathan.jpg",
    bio: "Nathan is a seasoned tax executive with over 15 years of experience leading global transfer pricing functions in high-tech multinational environments. He specializes in developing and executing comprehensive transfer pricing strategies that align with functional/IP operating models, support business expansion, and mitigate risks amid evolving international tax landscapes. He's also passionate about rare diseases and excited to lend his financial and tax expertise to CRDA.",
  },
  {
    name: "Emma Luptak",
    role: "Executive Director, Board Member",
    img: "/Emma.png",
    bio: "Emma Luptak is the Executive Director and Board Member of the Children's Rare Disease Alliance, where she builds partnerships that transform everyday generosity into critical funding for rare disease research. She also serves as the Program Manager and Patient Advocacy Specialist for the Lost Enzyme Project, a nonprofit dedicated to raising awareness and advancing the development of treatment for Beta‑mannosidosis, an ultra-rare lysosomal storage disorder. Emma graduated from the University of Wisconsin–Madison in 2025 and is currently pursuing her Master of Public Health in Health Policy and Administration at the University of Illinois Chicago. She is driven by a deep commitment to ensuring families have the guidance, resources, and advocacy they need to navigate their rare disease journey and to help accelerate the path toward effective treatments.",
  },
  {
    name: "Samantha Behunin",
    role: "Board Member",
    img: "/Samantha.png",
    bio: "Bio coming soon.",
  },
  {
    name: "Emily Tingey",
    role: "Board Member",
    img: null,
    bio: "Bio coming soon.",
  },
];

const marketingTeam = [
  {
    name: "Ivy Lee",
    role: "Marketing and Fundraising Specialist",
    img: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Charlie Hubbard",
    role: "Marketing and Fundraising Specialist",
    img: "/charlie.jpg",
    bio: "Charlie is an honor student gearing up for his senior year of high school, where his sharp intellect and relentless work ethic have earned him many awards already. He's the kind of leader who balances rigorous academics with genuine enthusiasm for school life.",
  },
];

const communityCommittee = [
  {
    name: "Whisper Gale",
    role: "Community Action Committee",
    img: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Cassie Fakatoumafi",
    role: "Community Action Committee",
    img: null,
    bio: "Bio coming soon.",
  },
  {
    name: "Emily Tingey",
    role: "Community Action Committee",
    img: null,
    bio: "Bio coming soon.",
  },
];

const outreachCommittee = [
  {
    name: "Whisper Gale",
    role: "Outreach and Service Committee Member",
    img: "/Whisper.png",
    bio: "Whisper Gale is a Mom of six, devoted to raising her wonderful children alongside her husband, Austin, whom she met in 2015 and married in 2018. Together, they are enjoying their journey filled with birds and animals. After welcoming three children in 2021, a temporary kiddo in 2023, a daughter in 2024, and her great nephew in kinship care, she is now embracing life to the fullest as a stay-at-home mom, with a heart full of gratitude for her family and her daughter's cancer remission.",
  },
  {
    name: "Rachael Lyon",
    role: "Outreach and Service Committee Member",
    img: "/Rachael_Lyon.png",
    bio: "Rachael Lyon is a devoted mother of four and a passionate advocate within the cancer community. Her perspective is deeply personal—shaped by supporting her second child through a diagnosis of a rare form of leukemia. This journey has instilled in her a profound commitment to compassion, resilience, and hope for families facing similar challenges. With 14 years of experience in the biotechnology and pharmaceutical industry, Rachael combines professional expertise with heartfelt purpose. She is dedicated to advancing innovations in healthcare while championing the needs of patients and caregivers. Her story reflects a powerful balance of scientific insight and lived experience, driving her commitment to making a meaningful difference in the fight against cancer.",
  },
];

const otherTeam = [
  {
    name: "Ivy Wang",
    role: "Website Designer & Developer",
    img: "/ivy.jpg",
    bio: "Ivy is the designer and developer behind the Children's Rare Disease Alliance website, bringing the organization's mission to life through thoughtful design and development.",
  },
  {
    name: "Trevor Hubbard",
    role: "Chief Information Security Officer",
    img: "/trevor.jpeg",
    bio: "Trevor is a Chief Information Security Officer with over two decades of professional IT and cybersecurity experience across civilian, government, and military environments. His career has focused on strengthening security programs, managing risk, and protecting critical systems in high-stakes operational settings. He holds a Bachelor of Science in Finance and a Master of Science in Cybersecurity, combining deep technical expertise with strong business and governance perspectives. He is committed to advancing the secure and mission-driven use of technology in service of The Lost Enzyme Project.",
  },
];

const values = [
  {
    icon: "/compassion.png",
    alt: "Compassion",
    title: "Compassion",
    desc: "We approach every family and patient with empathy, understanding the unique challenges that rare diseases present.",
  },
  {
    icon: "/scientist.png",
    alt: "Research",
    title: "Research",
    desc: "We are committed to funding and advancing research that brings us closer to treatments and cures for rare diseases.",
  },
  {
    icon: "/diversity.png",
    alt: "Community",
    title: "Community",
    desc: "We believe no family should face a rare disease diagnosis alone. Together we are stronger.",
  },
  {
    icon: "/earth.png",
    alt: "Accessibility",
    title: "Accessibility",
    desc: "We work to ensure that support and resources are available to every family regardless of location or background.",
  },
];

function TeamCard({ member, onClick }) {
  const initials = member.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div
      className="flex flex-col items-center text-center bg-gray-50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md cursor-pointer w-full max-w-xs sm:max-w-none mx-auto"
      onClick={() => onClick(member)}
    >
      <div className="w-full h-56 overflow-hidden">
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            className="w-full h-full object-cover object-top"
          />
        ) : (
          <div className="w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-3xl font-bold text-gray-400">{initials}</span>
          </div>
        )}
      </div>
      <div className="p-4 flex flex-col items-center gap-1">
        <h3 className="text-gray-900 font-bold text-sm">{member.name}</h3>
        <p className="text-gray-500 text-sm">{member.role}</p>
        <span className="mt-2 text-xs text-[#2c5f86] font-medium underline underline-offset-2">
          Read bio →
        </span>
      </div>
    </div>
  );
}

function TeamSection({ title, description, members, onSelect }) {
  return (
    <div className="mb-12">
      <div className="mb-6 pb-2 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-800">{title}</h3>
        {description && (
          <p className="text-gray-500 text-sm mt-1">{description}</p>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 place-items-center sm:place-items-stretch">
        {members.map((member) => (
          <TeamCard
            key={member.name + member.role}
            member={member}
            onClick={onSelect}
          />
        ))}
      </div>
    </div>
  );
}

export default function About() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="bg-white overflow-x-hidden">
      {/* Hero Banner */}
      <section className="relative h-56 md:h-72 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=1200&q=80"
          alt="About us"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="max-w-5xl mx-auto px-6 md:px-16 relative z-10 flex flex-col justify-center h-full">
          <p className="text-orange-400 font-semibold text-xs uppercase tracking-widest mb-2">
            Who We Are
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-extrabold leading-tight">
            About Us
          </h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 min-w-0">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            Our Story
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            How it all began
          </h2>
          <p className="text-gray-500 text-sm leading-relaxed">
            The Children's Rare Disease Alliance is a nonprofit organization
            dedicated to accelerating research and treatment development for
            children living with rare diseases. It was founded by families of
            children with rare diseases who understand firsthand the challenges
            families face when treatments are limited or nonexistent.
            <br />
            <br />
            While each rare disease affects a small number of patients, together
            they impact millions of children and families searching for answers
            and hope. The Children's Rare Disease Alliance was created to help
            change that.
            <br />
            <br />
            By partnering with local businesses and communities, we turn small
            donations at checkout into funding that supports researchers,
            clinicians, and patient communities working to develop life-changing
            therapies for children who urgently need them.
            <br />
            <br />
            Through everyday generosity, we are helping bring hope to families
            and accelerate the path toward treatments.
            <br />
            <br />
            Together, we can turn small change into life-changing treatments.
          </p>
        </div>
        <div className="relative flex-shrink-0">
          <img
            src="/sky_smile.jpeg"
            alt="Our story"
            className="w-56 h-56 md:w-64 md:h-64 object-cover rounded-md shadow-md relative z-10"
          />
          <div
            className="absolute -bottom-4 -left-4 w-24 h-24 z-0"
            style={{
              backgroundImage:
                "radial-gradient(circle, #f97316 1.5px, transparent 1.5px)",
              backgroundSize: "10px 10px",
            }}
          />
        </div>
      </section>

      {/* Our Values */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            What We Stand For
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Our Values
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div key={v.title} className="flex gap-4 min-w-0">
                <img
                  src={v.icon}
                  alt={v.alt}
                  className="w-10 h-10 object-contain flex-shrink-0"
                />
                <div className="min-w-0">
                  <h3 className="text-gray-900 font-bold mb-1 text-sm">
                    {v.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {v.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-12 max-w-5xl mx-auto px-6 md:px-16">
        <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
          The People Behind Our Work
        </p>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-10">
          Meet Our Team
        </h2>

        <TeamSection
          title="Board of Directors"
          members={boardOfDirectors}
          onSelect={setSelected}
        />

        <TeamSection
          title="Marketing & Fundraising Specialists"
          members={marketingTeam}
          onSelect={setSelected}
        />

        {/* <TeamSection
          title="Community Action Committee"
          description="Committee members can lead initiatives including Hospital Family Support, Community Fundraising, Volunteer Events, Festival of Trees, and Corporate Service Projects."
          members={communityCommittee}
          onSelect={setSelected}
        /> */}

        <TeamSection
          title="Technology & Operations"
          members={otherTeam}
          onSelect={setSelected}
        />

        <TeamSection
          title="Outreach and Service Committee"
          members={outreachCommittee}
          onSelect={setSelected}
        />
      </section>

      {/* Bio Modal */}
      {selected && (
        <div
          className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center px-4"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-white rounded-2xl shadow-xl max-w-md w-full overflow-y-auto max-h-[70vh] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelected(null)}
              className="absolute top-3 right-3 z-10 bg-white/80 backdrop-blur-sm rounded-full w-8 h-8 flex items-center justify-center text-gray-600 hover:text-gray-900 hover:bg-white shadow-sm transition-all"
            >
              ✕
            </button>

            <div className="h-80 w-full overflow-hidden rounded-t-2xl flex-shrink-0">
              {selected.img ? (
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-full object-cover object-top"
                />
              ) : (
                <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                  <span className="text-6xl font-bold text-gray-400">
                    {selected.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
                  </span>
                </div>
              )}
            </div>
            <div className="p-6 flex flex-col gap-2">
              <h3 className="text-gray-900 font-bold text-lg">
                {selected.name}
              </h3>
              <p className="text-orange-500 text-sm font-medium">
                {selected.role}
              </p>
              <p className="text-gray-500 text-sm leading-relaxed mt-2">
                {selected.bio}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Fund Usage */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6 md:px-16">
          <p className="text-orange-500 font-semibold text-xs uppercase tracking-widest mb-2">
            Where Your Support Goes
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Putting Funds to Work
          </h2>
          <p className="text-gray-600 text-base leading-relaxed max-w-2xl">
            Funds raised may support research, natural history studies,
            therapeutic development, manufacturing, and related efforts through
            academic or industry partners working toward treatments for rare
            diseases.
          </p>
        </div>
      </section>
    </div>
  );
}
