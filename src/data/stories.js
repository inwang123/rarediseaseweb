// Stories shown on the "In the News" page (/news). Newest first is applied automatically.
//
// Each story looks like:
// {
//   id: "2026-10-05-24-climbers",          // unique
//   category: "4Rare",                      // "Rare Stories" | "4Rare" | "CRDA News" | "In the Media"
//   title: "24 Climbers. 24 Summits.",
//   summary: "One or two sentences shown on the card.",
//   date: "2026-10-05",                     // YYYY-MM-DD
//   image: "/images/news/24-climbers.jpg",  // optional, put files in /public/images/news
//   url: "/climb4rare",                     // site path, full https:// link, or a file in /public
// }
const stories = [
  {
    id: "2026-10-19-corporate-matching",
    category: "CRDA News",
    title: "Double Your Impact with Corporate Matching",
    summary:
      "Many employers offer matching gift programs that can double or even triple your donation. Learn how to ask your company, request that CRDA be a verified charity, and help us accelerate life-changing treatments for children with rare diseases.",
    date: "2026-10-19",
    image: "/images/news/corporate-matching-thumb.jpg",
    url: "/images/news/corporate-matching-flyer.png",
  },
];

export default stories;
