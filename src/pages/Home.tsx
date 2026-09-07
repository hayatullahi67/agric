import { Link } from "react-router";

const stats = [
  { value: "16+", label: "Years of Experience" },
  { value: "80+", label: "Countries Served" },
  { value: "200+", label: "Product Lines" },
  { value: "1,400+", label: "Active Clients" },
];

const productCategories = [
  {
    name: "Spices & Herbs",
    count: "40+ products",
    slug: "spices-herbs",
    img: "https://images.unsplash.com/photo-1529517986296-847580704921?w=600&h=400&fit=crop&auto=format",
    color: "#7b3f1a",
  },
  {
    name: "Grains & Cereals",
    count: "25+ products",
    slug: "grains-cereals",
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&auto=format",
    color: "#5a6e2e",
  },
  {
    name: "Edible Oils",
    count: "18+ products",
    slug: "edible-oils",
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop&auto=format",
    color: "#9b8530",
  },
  {
    name: "Precious Metals",
    count: "12+ products",
    slug: "precious-metals",
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop&auto=format",
    color: "#8a7030",
  },
  {
    name: "Seafood & Marine",
    count: "30+ products",
    slug: "seafood-marine",
    img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=400&fit=crop&auto=format",
    color: "#1a4a6b",
  },
  {
    name: "Wood Products",
    count: "20+ products",
    slug: "wood-products",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
    color: "#5c3c1e",
  },
];

const whyUs = [
  {
    icon: "🚢",
    title: "Global Shipping",
    desc: "Door-to-port and port-to-port delivery across 80+ countries with preferred freight partners.",
  },
  {
    icon: "🏅",
    title: "Certified Quality",
    desc: "ISO 9001:2015 certified. Every shipment is tested, documented, and traceable.",
  },
  {
    icon: "💰",
    title: "Competitive Pricing",
    desc: "Direct sourcing from origin markets — no middlemen, passing savings directly to you.",
  },
  {
    icon: "⚡",
    title: "Fast Turnaround",
    desc: "Quote within 24 hours. Shipment ready within 5–14 days depending on volume.",
  },
];

const regions = [
  { name: "Western Europe", pct: 34 },
  { name: "Middle East & GCC", pct: 27 },
  { name: "Sub-Saharan Africa", pct: 18 },
  { name: "South & SE Asia", pct: 14 },
  { name: "Americas", pct: 7 },
];

export default function Home() {
  return (
    <div className="bg-[#f7f4ef]">
      {/* Hero — editorial split layout */}
      <section className="relative min-h-screen overflow-hidden bg-[#0d1f14]">
        {/* Full-bleed background photo, right-weighted */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?w=1800&h=1100&fit=crop&auto=format"
            alt="Container ship being loaded at dusk"
            className="w-full h-full object-cover object-center opacity-45"
          />
          {/* Deep left vignette so text pops cleanly */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1f14] via-[#0d1f14]/80 to-[#0d1f14]/10" />
          {/* Subtle bottom fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d1f14]/70 via-transparent to-transparent" />
        </div>

        {/* Gold vertical accent line */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-[#c49a3c] to-transparent opacity-60 hidden lg:block" />

        {/* Content grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 min-h-screen flex items-end pb-20 pt-32">
          <div className="w-full grid lg:grid-cols-12 gap-10 items-end">

            {/* Left — main copy (spans 7 cols) */}
            <div className="lg:col-span-7">
              {/* Eyebrow */}
              <div className="flex items-center gap-3 mb-10">
                <div className="h-px w-10 bg-[#c49a3c]" />
                <span className="text-[#c49a3c] text-xs font-semibold tracking-[0.22em] uppercase">
                  Global Commodity Traders · Est. 2008
                </span>
              </div>

              {/* Headline — massive, editorial */}
              <h1
                className="text-white leading-[1.0] mb-8"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(3rem, 7vw, 6.5rem)",
                }}
              >
                Trading the<br />
                World's<br />
                <em className="text-[#c49a3c] not-italic" style={{ fontFamily: "var(--font-display)" }}>
                  Best Commodities
                </em>
              </h1>

              <p className="text-white/65 text-lg leading-relaxed mb-12 max-w-[480px]">
                From farmland to factory floor — Agri Holdings connects global buyers with premium agro-products, precious metals, and bulk commodities at scale.
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/quote"
                  className="inline-flex items-center justify-center gap-2 bg-[#c49a3c] hover:bg-[#d4b060] text-[#0d1f14] font-bold px-8 py-4 rounded-xl text-base transition-all duration-200 hover:shadow-2xl hover:shadow-[#c49a3c]/30"
                >
                  Get a Quote
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M3 8H13M9 4L13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center gap-2 bg-transparent text-white font-semibold px-8 py-4 rounded-xl text-base border border-white/25 hover:border-[#c49a3c] hover:text-[#c49a3c] transition-all duration-200"
                >
                  Explore Products
                </Link>
              </div>
            </div>

            {/* Right — floating metrics card (spans 4 cols, offset 1) */}
            <div className="hidden lg:block lg:col-span-4 lg:col-start-9">
              <div className="bg-[#122518]/80 backdrop-blur-md border border-white/10 rounded-2xl p-7">
                <div className="text-[#c49a3c] text-[10px] font-semibold tracking-[0.2em] uppercase mb-5">
                  At a Glance
                </div>
                <div className="grid grid-cols-2 gap-5">
                  {[
                    { v: "16+", l: "Years Active" },
                    { v: "80+", l: "Countries" },
                    { v: "£240M+", l: "Annual Volume" },
                    { v: "1,400+", l: "B2B Clients" },
                  ].map((s) => (
                    <div key={s.l} className="border border-white/8 rounded-xl p-4">
                      <div
                        className="text-white font-bold text-2xl mb-0.5"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {s.v}
                      </div>
                      <div className="text-white/50 text-xs">{s.l}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 pt-5 border-t border-white/10 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {["🇬🇧", "🇩🇪", "🇦🇪", "🇳🇬"].map((f) => (
                      <div key={f} className="w-7 h-7 rounded-full bg-[#1c3a28] border-2 border-[#122518] flex items-center justify-center text-sm">{f}</div>
                    ))}
                  </div>
                  <span className="text-white/50 text-xs ml-1">Active in 80+ markets</span>
                </div>
              </div>

              {/* Certification badges below card */}
              <div className="flex gap-2 mt-4">
                {["ISO 9001", "LBMA", "FSC", "HACCP"].map((c) => (
                  <div key={c} className="bg-white/8 border border-white/15 backdrop-blur-sm rounded-lg px-3 py-1.5 text-white/70 text-[10px] font-semibold tracking-wider">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar — visible on mobile too */}
        <div className="relative z-10 border-t border-white/10 bg-[#0d1f14]/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex items-center justify-between gap-6 overflow-x-auto">
            {["Agro-Products", "Precious Metals", "Scrap Metals", "Wood Products", "Grains & Oils", "Seafood & Meat"].map((cat, i) => (
              <div key={cat} className="flex items-center gap-4 flex-shrink-0">
                {i > 0 && <div className="h-4 w-px bg-white/20" />}
                <Link to="/products" className="text-white/50 hover:text-[#c49a3c] text-xs font-medium tracking-wide transition-colors whitespace-nowrap">
                  {cat}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <section className="bg-[#1c3a28] py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="text-[#c49a3c] text-4xl font-bold mb-1" style={{ fontFamily: "var(--font-display)" }}>
                  {s.value}
                </div>
                <div className="text-white/60 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About summary */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            {/* Premium professional image — two executives closing a deal */}
            <img
              src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?w=900&h=700&fit=crop&auto=format"
              alt="Business professionals shaking hands outside modern building"
              className="rounded-2xl w-full object-cover h-96 lg:h-[540px] object-top"
            />
            {/* Overlay gradient for depth */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#122518]/40 via-transparent to-transparent" />
            {/* Floating gold stat card */}
            <div className="absolute -bottom-6 -right-6 bg-[#c49a3c] rounded-2xl p-6 shadow-2xl hidden lg:block">
              <div className="text-[#122518] font-bold text-2xl" style={{ fontFamily: "var(--font-display)" }}>16 Years</div>
              <div className="text-[#122518]/80 text-sm mt-0.5">Global Expertise</div>
            </div>
            {/* ISO badge top-left */}
            <div className="absolute top-5 left-5 bg-[#122518]/85 backdrop-blur-sm rounded-xl px-4 py-2 border border-[#c49a3c]/30">
              <div className="text-[#c49a3c] text-[10px] font-semibold tracking-widest uppercase">ISO 9001 Certified</div>
            </div>
          </div>
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">About Agri Holdings</div>
            <h2 className="text-4xl lg:text-5xl text-[#1c3a28] leading-tight mb-6" style={{ fontFamily: "var(--font-display)" }}>
              A Trusted Bridge Between Producers & Markets
            </h2>
            <p className="text-[#6b6660] text-base leading-relaxed mb-5">
              Founded in London in 2008, Agri Holdings Ltd has grown into one of the UK's most respected B2B commodity trading firms. We source directly from certified farms, mines, and processing facilities across 40+ origin countries, delivering to buyers in more than 80 markets worldwide.
            </p>
            <p className="text-[#6b6660] text-base leading-relaxed mb-8">
              Our model is simple: rigorous quality control, transparent pricing, and logistics partnerships that ensure your goods arrive on time, every time.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-[#1c3a28] font-semibold border-b-2 border-[#c49a3c] pb-0.5 hover:text-[#c49a3c] transition-colors"
            >
              Our full story →
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-[#1c3a28] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Core Business</div>
            <h2 className="text-4xl lg:text-5xl text-white" style={{ fontFamily: "var(--font-display)" }}>
              What We Do
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🌾", title: "Agro-Products", desc: "Spices, grains, oils, nuts, seafood, and meat — sourced directly from certified producers." },
              { icon: "⛏️", title: "Precious Metals", desc: "Gold, silver, platinum, and palladium — traceable, refined, and LBMA-compliant." },
              { icon: "♻️", title: "Scrap Metals", desc: "Ferrous and non-ferrous scrap, sorted, graded, and shipped in bulk on FCL terms." },
              { icon: "🌲", title: "Wood Products", desc: "Hardwood, softwood, veneers, and timber — sustainably sourced with FSC documentation." },
            ].map((item) => (
              <div key={item.title} className="bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/10 transition-colors">
                <div className="text-3xl mb-4">{item.icon}</div>
                <div className="text-white font-semibold text-lg mb-3">{item.title}</div>
                <div className="text-white/60 text-sm leading-relaxed">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Portfolio</div>
            <h2 className="text-4xl lg:text-5xl text-[#1c3a28]" style={{ fontFamily: "var(--font-display)" }}>
              Product Categories
            </h2>
          </div>
          <Link to="/products" className="text-[#1c3a28] font-semibold text-sm border-b border-[#c49a3c] pb-0.5 hover:text-[#c49a3c] transition-colors whitespace-nowrap">
            View all categories →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {productCategories.map((cat) => (
            <Link
              key={cat.slug}
              to={`/products/${cat.slug}`}
              className="group relative overflow-hidden rounded-2xl aspect-[4/3] bg-[#2a5240]"
            >
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="text-white font-semibold text-xl mb-1">{cat.name}</div>
                <div className="text-white/60 text-sm">{cat.count}</div>
              </div>
              <div className="absolute top-4 right-4 bg-[#c49a3c] text-[#122518] text-xs font-bold px-3 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                View →
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Exports / Regions */}
      <section className="bg-[#ede8e0] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Reach</div>
              <h2 className="text-4xl lg:text-5xl text-[#1c3a28] mb-8" style={{ fontFamily: "var(--font-display)" }}>
                Exports Across Every Major Region
              </h2>
              <div className="space-y-4">
                {regions.map((r) => (
                  <div key={r.name}>
                    <div className="flex justify-between text-sm mb-1.5">
                      <span className="text-[#1c3a28] font-medium">{r.name}</span>
                      <span className="text-[#c49a3c] font-semibold">{r.pct}%</span>
                    </div>
                    <div className="h-2 bg-white rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#1c3a28] to-[#c49a3c] rounded-full"
                        style={{ width: `${r.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop&auto=format"
                alt="Cargo ships at port"
                className="rounded-2xl w-full h-96 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Foundation</div>
          <h2 className="text-4xl lg:text-5xl text-[#1c3a28]" style={{ fontFamily: "var(--font-display)" }}>
            Mission & Values
          </h2>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {[
            { icon: "🤝", title: "Integrity First", desc: "Every deal we make is backed by transparent documentation, fair terms, and honest communication." },
            { icon: "🌱", title: "Sustainable Sourcing", desc: "We partner only with certified, responsible producers to protect ecosystems and communities." },
            { icon: "🌍", title: "Global Impact", desc: "We enable developing economies to access global markets, creating livelihoods at scale." },
          ].map((v) => (
            <div key={v.title} className="text-center p-8 rounded-2xl border border-[#ede8e0] hover:border-[#c49a3c] hover:shadow-lg transition-all">
              <div className="text-4xl mb-5">{v.icon}</div>
              <div className="text-[#1c3a28] font-bold text-xl mb-3">{v.title}</div>
              <div className="text-[#6b6660] text-sm leading-relaxed">{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-[#f7f4ef] pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-16">
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Why Agri Holdings</div>
            <h2 className="text-4xl lg:text-5xl text-[#1c3a28]" style={{ fontFamily: "var(--font-display)" }}>
              Why Choose Us
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((w) => (
              <div key={w.title} className="bg-white rounded-2xl p-7 shadow-sm border border-[#ede8e0]">
                <div className="text-3xl mb-5">{w.icon}</div>
                <div className="text-[#1c3a28] font-semibold text-base mb-3">{w.title}</div>
                <div className="text-[#6b6660] text-sm leading-relaxed">{w.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
