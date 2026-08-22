const PLATFORMS = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/crdallliance/",
    path: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.3" cy="6.7" r="0.6" fill="currentColor" stroke="none" />
      </>
    ),
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: true,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591375202890",
    path: (
      <path d="M13.5 21v-7.5h2.5l.4-3H13.5V8.4c0-.87.24-1.46 1.48-1.46H16.5V4.36c-.3-.04-1.3-.12-2.5-.12-2.4 0-4 1.46-4 4.15V10.5H7.5v3H10V21h3.5z" />
    ),
    viewBox: "0 0 24 24",
    fill: "currentColor",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/crdalliance/home/",
    path: (
      <path d="M6.94 8.5a1.94 1.94 0 1 1 0-3.88 1.94 1.94 0 0 1 0 3.88zM5 10.13h3.88V19H5zM10.5 10.13h3.72v1.22h.05c.52-.94 1.79-1.94 3.68-1.94 3.94 0 4.67 2.52 4.67 5.8V19h-3.88v-4.35c0-1.04-.02-2.37-1.45-2.37-1.45 0-1.67 1.13-1.67 2.3V19H10.5z" />
    ),
    viewBox: "0 0 24 24",
    fill: "currentColor",
  },
];

export default function SocialLinks({ className = "", iconClassName = "w-4 h-4" }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {PLATFORMS.map(({ name, href, path, viewBox, fill, stroke }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="transition-colors"
        >
          <svg
            viewBox={viewBox}
            fill={fill}
            stroke={stroke ? "currentColor" : undefined}
            strokeWidth={stroke ? 2 : undefined}
            className={iconClassName}
          >
            {path}
          </svg>
        </a>
      ))}
    </div>
  );
}
