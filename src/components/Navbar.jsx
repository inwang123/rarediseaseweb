import { useState } from "react";
import { NavLink } from "react-router-dom";

const DESKTOP_LINKS = [
  { label: "Home",       to: "/" },
  { label: "About",      to: "/about" },
  {
    label: "Climb4Rare",
    to: "/climb4rare",
    dropdown: [
      { label: "Overview", to: "/climb4rare" },
      { label: "Donate",   to: "/donate" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
  { label: "Donate",     to: "/donate", isButton: true },
];

const MOBILE_LINKS = [
  { label: "Home",       to: "/" },
  { label: "About",      to: "/about" },
  {
    label: "Climb4Rare",
    to: "/climb4rare",
    dropdown: [
      { label: "Overview", to: "/climb4rare" },
      { label: "Donate",   to: "/donate" },
    ],
  },
  { label: "Contact Us", to: "/contact" },
  { label: "Donate",     to: "/donate" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-5xl lg:max-w-6xl xl:max-w-7xl mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src="/logo_transparent.png"
            alt="Charity Logo"
            className="h-16 w-auto object-contain"
          />
        </NavLink>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-12 list-none m-0 p-0">
          {DESKTOP_LINKS.map(({ label, to, isButton, dropdown }) => (
            <li
              key={to}
              className={dropdown ? "relative" : undefined}
              onMouseEnter={dropdown ? () => setDesktopDropdownOpen(true) : undefined}
              onMouseLeave={dropdown ? () => setDesktopDropdownOpen(false) : undefined}
            >
              <NavLink
                to={to}
                className={({ isActive }) => {
                  if (isButton) {
                    return `text-sm font-medium px-6 py-2 rounded-lg transition-colors !text-white ${
                      isActive ? "bg-[#2c5f86]" : "bg-[#2c5f86] hover:bg-[#7bb1bf]"
                    }`;
                  }
                  return `flex items-center gap-1 text-sm font-medium transition-colors ${
                    isActive
                      ? "text-[#2c5f86] border-b-2 border-[#2c5f86] pb-0.5"
                      : "text-gray-600 hover:text-[#7bb1bf]"
                  }`;
                }}
              >
                {label}
                {dropdown && (
                  <svg
                    className={`w-3.5 h-3.5 transition-transform ${
                      desktopDropdownOpen ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </NavLink>

              {/* Desktop Dropdown Panel */}
              {dropdown && desktopDropdownOpen && (
                <ul className="absolute top-full left-0 pt-2 bg-white shadow-lg rounded-lg border border-gray-100 py-2 min-w-40 list-none">
                  {dropdown.map((item) => (
                    <li key={item.to}>
                      <NavLink
                        to={item.to}
                        className={({ isActive }) =>
                          `block px-4 py-2 text-sm transition-colors ${
                            isActive
                              ? "text-[#2c5f86] bg-[#2c5f86]/10"
                              : "text-gray-600 hover:text-[#7bb1bf] hover:bg-gray-50"
                          }`
                        }
                      >
                        {item.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
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
          {MOBILE_LINKS.map(({ label, to, dropdown }) => (
            <div key={to}>
              {dropdown ? (
                <>
                  <button
                    onClick={() => setMobileDropdownOpen((o) => !o)}
                    className="w-full flex items-center justify-between gap-3 text-sm font-medium px-3 py-2 rounded-lg transition-colors text-gray-700 hover:text-[#7bb1bf] hover:bg-gray-50"
                  >
                    <span className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 rounded-full shrink-0 bg-transparent" />
                      {label}
                    </span>
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        mobileDropdownOpen ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {mobileDropdownOpen && (
                    <div className="pl-8 flex flex-col gap-1 mt-1">
                      {dropdown.map((item) => (
                        <NavLink
                          key={item.to}
                          to={item.to}
                          onClick={() => {
                            setMenuOpen(false);
                            setMobileDropdownOpen(false);
                          }}
                          className={({ isActive }) =>
                            `text-sm font-medium px-3 py-2 rounded-lg transition-colors ${
                              isActive
                                ? "bg-[#2c5f86]/10 text-[#2c5f86]"
                                : "text-gray-600 hover:text-[#7bb1bf] hover:bg-gray-50"
                            }`
                          }
                        >
                          {item.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <NavLink
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
                        className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                          isActive ? "bg-[#2c5f86]" : "bg-transparent"
                        }`}
                      />
                      {label}
                    </>
                  )}
                </NavLink>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}