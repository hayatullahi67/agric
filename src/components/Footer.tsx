import { Link } from "react-router";

export default function Footer() {
  return (
    <footer className="bg-[#122518] text-white">
      {/* CTA Banner */}
      <div className="bg-[#c49a3c]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <div className="text-[#122518] font-bold text-2xl" style={{ fontFamily: "var(--font-display)" }}>
              Ready to trade at scale?
            </div>
            <div className="text-[#122518]/80 mt-1 text-base">
              Our team responds within 24 hours with competitive pricing.
            </div>
          </div>
          <Link
            to="/quote"
            className="bg-[#122518] hover:bg-[#1c3a28] text-white font-semibold px-8 py-3.5 rounded-lg transition-colors whitespace-nowrap"
          >
            Request a Quote
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 rounded bg-[#c49a3c] flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L13 7H17L14 11L15.5 16L10 13L4.5 16L6 11L3 7H7L10 2Z" fill="#1c3a28"/>
                </svg>
              </div>
              <div>
                <div className="text-white font-bold text-base">AGRI HOLDINGS</div>
                <div className="text-[#c49a3c] text-[10px] tracking-[0.2em] uppercase">Ltd</div>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6">
              UK-based global trading company specialising in agro-commodities, precious metals, and bulk goods since 2008.
            </p>
            <div className="flex gap-3">
              {["linkedin", "twitter", "facebook"].map((s) => (
                <a key={s} href="#" className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#c49a3c] flex items-center justify-center transition-colors">
                  <span className="text-xs text-white">{s[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Products</div>
            <ul className="space-y-2.5">
              {["Spices & Herbs","Grains & Cereals","Edible Oils","Nuts & Dried Fruits","Seafood & Marine","Precious Metals","Scrap Metals","Wood Products"].map((p) => (
                <li key={p}>
                  <Link to="/products" className="text-white/60 hover:text-[#c49a3c] text-sm transition-colors">{p}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Company</div>
            <ul className="space-y-2.5">
              {[["About Us", "/about"], ["Our Products", "/products"], ["Get a Quote", "/quote"], ["Contact Us", "/contact"]].map(([label, href]) => (
                <li key={label}>
                  <Link to={href} className="text-white/60 hover:text-[#c49a3c] text-sm transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Offices */}
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.15em] uppercase mb-5">Our Offices</div>
            <div className="space-y-5">
              <div>
                <div className="text-white text-sm font-semibold mb-1">UK Headquarters</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  27 Canary Wharf, Level 14<br/>
                  London, E14 5AB<br/>
                  United Kingdom
                </div>
                <a href="tel:+442071234567" className="text-[#c49a3c] text-sm mt-1.5 block hover:text-[#d4b060]">+44 207 123 4567</a>
              </div>
              <div>
                <div className="text-white text-sm font-semibold mb-1">Europe Office</div>
                <div className="text-white/60 text-sm leading-relaxed">
                  Rue du Commerce 45<br/>
                  Brussels, 1000<br/>
                  Belgium
                </div>
                <a href="tel:+3225551234" className="text-[#c49a3c] text-sm mt-1.5 block hover:text-[#d4b060]">+32 2 555 1234</a>
              </div>
              <a href="mailto:trade@agriholdings.co.uk" className="text-white/60 hover:text-[#c49a3c] text-sm transition-colors block">
                trade@agriholdings.co.uk
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-14 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-white/40 text-sm">
            © 2025 Agri Holdings Ltd. Registered in England & Wales. Company No. 06892341.
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Trade", "Certifications"].map((l) => (
              <a key={l} href="#" className="text-white/40 hover:text-white/70 text-sm transition-colors">{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
