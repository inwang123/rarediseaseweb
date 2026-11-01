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
        "id": "NoChildTooRare",
        "category": "4Rare",  
        "title": "No Child Is Too Rare To Treat",
        "summary": "Accelerating treatment development for children with rare diseases through community partnerships, fundraising, and advocacy.",
        "date": "2026-10-18",
        "image": "/images/news/nochildtoorare.jpg",
        "url": "https://www.youtube.com/watch?v=8LHy7ggJXQk"
    },
    {
        "id": "2026-08-20-vid-c4r",
        "category": "4Rare",  
        "title": "Interview with Good Things Utah",
        "summary": "Watch to hear Skylar's latest update and learn how you can join the climb to help bring life-changing treatments closer to children who desperately need them.",
        "date": "2026-08-20",
        "image": "/images/news/interview_gtu.jpg",
        "url": "https://www.youtube.com/watch?v=7tlshA1qySA"
    },
    {
        "id": "SkylarsFight",
        "category": "4Rare",  
        "title": "Skylar's Fight Against An Ultra-Rare Disease",
        "summary": "Skylar is now recovering from a bone marrow transplant—a bridge treatment to slow the disease while we work to develop an enzyme replacement therapy at UCI.",
        "date": "2025-08-23",
        "image": "/images/news/skylarsfight.jpg",
        "url": "https://www.youtube.com/watch?v=tqNe0TYs1vs"
    }
];

export default stories;
