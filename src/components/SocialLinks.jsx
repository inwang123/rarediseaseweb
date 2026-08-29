const PLATFORMS = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61591375202890",
    icon: "/Social-icons/facebook.png",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/crdalliance/",
    icon: "/Social-icons/instagram.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/crdalliance/home/",
    icon: "/Social-icons/linkedin.png",
  },
];

export default function SocialLinks({ className = "", iconClassName = "w-7 h-7" }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      {PLATFORMS.map(({ name, href, icon }) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={name}
          className="flex items-center justify-center transition-transform hover:-translate-y-0.5"
        >
          <img src={icon} alt="" className={`${iconClassName} object-contain`} />
        </a>
      ))}
    </div>
  );
}
