# Project rules

## Navigation dropdowns and their root pages

Whenever you add, remove, rename or reorder a page in a navbar dropdown (`DESKTOP_LINKS` and `MOBILE_LINKS` in `src/components/Navbar.jsx`), update the matching root page in the same change so it reflects the dropdown:

- About root page: `src/pages/About.jsx` (route `/about`)
- Get Involved root page: `src/pages/GetInvolved.jsx` (route `/getinvolved`)

Each root page is a `SectionOverview` with one card per dropdown item. Keep the cards in the same order as the dropdown, with the same labels and links, and write a short description for any new card.

Also keep these in sync with the dropdown change:

- The route in `src/App.jsx`
- The page entry in `public/sitemap.xml`
- Both the desktop and mobile arrays in `Navbar.jsx` (mobile also shows an "Overview" link at the top of each dropdown, which is built automatically)
