import SectionOverview from "../components/SectionOverview";

const items = [
  {
    title: "Our Story",
    desc: "How Skylar's journey inspired the Hubbard family to start the Children's Rare Disease Alliance, and the big goal we're working toward.",
    to: "/our-story",
  },
  {
    title: "Our Team",
    desc: "Meet the board, advisors, specialists and volunteers behind our work.",
    to: "/team",
  },
];

export default function About() {
  return (
    <SectionOverview
      eyebrow="Who We Are"
      title="About Us"
      intro="The Children's Rare Disease Alliance is a 501(c)3 nonprofit dedicated to accelerating research and treatment development for children living with rare diseases."
      items={items}
    />
  );
}
