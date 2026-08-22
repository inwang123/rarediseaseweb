import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="text-white py-10 px-6 md:px-16" style={{ background: "#2c5f86" }}>
      <div className="max-w-5xl mx-auto">

        {/* Main row */}
        <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">

          {/* Logo + tagline */}
          <div className="flex flex-col gap-3 max-w-sm">
            <img
              src="/logo_footer.png"
              alt="Charity Logo"
              className="w-40"
              style={{ borderRadius: "8px", alignSelf: "flex-start" }}
            />
            <p className="text-xs leading-relaxed opacity-80">
              Together, we’re bringing hope and healing to children with rare diseases.
            </p>
            <SocialLinks
              className="mt-1 text-white/80"
              iconClassName="w-5 h-5 hover:text-white transition-colors"
            />
          </div>

          {/* Contact info */}
          <div className="flex flex-col gap-3 text-sm">
            <span className="opacity-60 text-xs uppercase tracking-widest font-semibold mb-1">Contact</span>
            <div className="flex items-center gap-2">
              <span>+1(602)-361-1880</span>
            </div>
            <div className="flex items-start gap-2">
              <span>PO Box 11334 Chandler, AZ, 85248</span>
            </div>
          </div>
        </div>

        {/* Bottom divider + copyright */}
        <div
          className="mt-8 pt-4 text-xs text-center opacity-60"
          style={{ borderTop: "1px solid rgba(255,255,255,0.8)" }}
        >
          © {new Date().getFullYear()} Children's Rare Disease Alliance. All rights reserved.
        </div>

      </div>
    </footer>
  );
}