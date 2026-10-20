import SectionOverview from "../components/SectionOverview";

const items = [
  {
    title: "Get Involved",
    desc: "Our goal is 30 by 30: thirty rare diseases, thirty peaks. Learn about the mission and how you can join the climb.",
    to: "/30-by-30",
  },
  {
    title: "Checkout Charity",
    desc: "Partner with us through your point-of-sale system and let customers round up their purchases to fund treatment development.",
    to: "/checkoutcharity",
  },
  {
    title: "Climb4Rare",
    desc: "Join a hike, host one in your community, or share your summit to raise funds and awareness for rare diseases.",
    to: "/climb4rare",
  },
  {
    title: "Volunteer",
    desc: "Give your time at our events and help bring hope to families facing a rare disease.",
    to: "/volunteer",
  },
];

export default function GetInvolved() {
  return (
    <SectionOverview
      eyebrow="Ways to Help"
      title="Get Involved"
      intro="There are many ways to help children with rare diseases. Find the one that fits you."
      items={items}
    />
  );
}
