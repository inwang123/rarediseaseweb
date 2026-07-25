import { useState } from "react";
import { NavLink } from "react-router-dom";

const DESKTOP_LINKS = [
  { label: "Home",       to: "/" },
  { label: "Climb4Rare", to: "/climb4rare" },
  { label: "About",      to: "/about" },
  { label: "Climb4Rare", to: "/climb4rare" },
  { label: "Contact Us", to: "/contact" },
  { label: "Donate",     to: "/donate", isButton: true },
];

const MOBILE_LINKS = [
  { label: "Home",       to: "/" },
  { label: "Climb4Rare", to: "/climb4rare" },
  { label: "About",      to: "/about" },
  { label: "Climb4Rare", to: "/climb4rare" },
  { label: "Contact Us", to: "/contact" },
  { label: "Donate",     to: "/donate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo_transparent.png"
            alt="Charity Logo"
            className="h-16 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
          {DESKTOP_LINKS.map(({ label, to, isButton }) => (
            <li key={to}>
              <NavLink
                to={to}
                className={({ isActive }) => {
                  if (isButton) {
                    return `text-sm font-medium px-6 py-2 rounded-lg transition-colors !text-white ${
                      isActive ? "bg-[#2c5f86]" : "bg-[#2c5f86] hover:bg-[#7bb1bf]"
                    }`;
                  }
                  return `text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#2c5f86] border-b-2 border-[#2c5f86] pb-0.5"
                      : "text-gray-600 hover:text-[#7bb1bf]"
                  }`;
                }}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-1">
          {MOBILE_LINKS.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `flex items-center gap-3 text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                  isActive
                    ? "bg-[#2c5f86]/10 text-[#2c5f86]"
                    : "text-gray-700 hover:text-[#7bb1bf] hover:bg-gray-50"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span
                    className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors ${
                      isActive ? "bg-[#2c5f86]" : "bg-transparent"
                    }`}
                  />
                  {label}
                </>
              )}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
}