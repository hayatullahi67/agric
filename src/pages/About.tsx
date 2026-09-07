import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";

const timeline = [
  { year: "2008", event: "Founded in London, initial focus on UK-Africa agro trade." },
  { year: "2011", event: "Expanded into Middle East & GCC markets. Opened European liaison office." },
  { year: "2014", event: "Launched precious metals & scrap division; ISO 9001 certification achieved." },
  { year: "2017", event: "Crossed £100M in annual trade volume. Added wood products portfolio." },
  { year: "2020", event: "Digitalised order management. Navigated pandemic logistics with zero shipment failures." },
  { year: "2024", event: "1,400+ active B2B clients across 80+ countries. Expanding SE Asia coverage." },
];

const team = [
  {
    name: "James Okafor",
    title: "CEO & Founder",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Sarah Whitfield",
    title: "Chief Commercial Officer",
    img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Arjun Mehta",
    title: "Head of Commodities",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format",
  },
  {
    name: "Fatima Al-Rashid",
    title: "Regional Director – MENA",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&auto=format",
  },
];

export default function About() {
  return (
    <div className="bg-[#f7f4ef]">
      {/* Page Header */}
      <div className="bg-[#1c3a28] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1781816928088-f9dfe5eec817?w=1600&h=600&fit=crop&auto=format"
            alt="Aerial agricultural fields"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]} />
          <h1 className="text-5xl lg:text-6xl text-white mt-6 max-w-2xl" style={{ fontFamily: "var(--font-display)" }}>
            Sixteen Years of<br /><span className="text-[#c49a3c] italic">Global Trade</span>
          </h1>
        </div>
      </div>

      {/* Company Story */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Story</div>
            <h2 className="text-4xl text-[#1c3a28] mb-6" style={{ fontFamily: "var(--font-display)" }}>
              Built on Trust, Scaled by Expertise
            </h2>
            <div className="space-y-4 text-[#6b6660] text-base leading-relaxed">
              <p>
                Agri Holdings Ltd was born from a simple observation: the gap between producers of the world's finest commodities and the buyers who need them was costly, opaque, and inefficient. Our founder, James Okafor, set out to bridge that gap with transparency and discipline.
              </p>
              <p>
                Starting with a small portfolio of West African agro-exports, the company quickly built a reputation for reliability and quality documentation — two things commodity buyers trust above all else. Within three years, we had established relationships across Europe and the Middle East.
              </p>
              <p>
                Today, Agri Holdings is a multi-commodity trading company with a diversified portfolio spanning food-grade agricultural products, industrial metals, and sustainable wood products. Every deal is underpinned by our own quality inspection process and logistics management.
              </p>
            </div>
          </div>
          {/* Premium real-life professional imagery collage */}
          <div className="relative">
            {/* Main large image — premium professional handshake */}
            <img
              src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?w=700&h=500&fit=crop&auto=format&crop=top"
              alt="Business professionals shaking hands outside modern office building"
              className="rounded-2xl w-full h-80 object-cover object-top shadow-xl"
            />
            {/* Two smaller images below, side by side */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <img
                src="https://images.unsplash.com/photo-1590496793907-4d66e2994b4d?w=400&h=260&fit=crop&auto=format"
                alt="Container ship being loaded at a port at dusk"
                className="rounded-2xl w-full h-44 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=260&fit=crop&auto=format"
                alt="Stacked gold bullion bars"
                className="rounded-2xl w-full h-44 object-cover shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#1c3a28] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              { v: "£240M+", l: "Annual Trade Volume" },
              { v: "80+", l: "Countries Served" },
              { v: "1,400+", l: "Active Clients" },
              { v: "40+", l: "Origin Markets" },
            ].map((s) => (
              <div key={s.l} className="text-center">
                <div className="text-[#c49a3c] text-4xl font-bold mb-2" style={{ fontFamily: "var(--font-display)" }}>{s.v}</div>
                <div className="text-white/60 text-sm">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Our Journey</div>
          <h2 className="text-4xl text-[#1c3a28]" style={{ fontFamily: "var(--font-display)" }}>Milestones</h2>
        </div>
        {/* Desktop: true alternating left/right timeline */}
        <div className="hidden lg:block relative">
          {/* Center spine */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#ddd8ce] -translate-x-px" />

          <div className="space-y-0">
            {timeline.map((t, i) => {
              const isLeft = i % 2 === 0; // even → content on LEFT, odd → content on RIGHT
              return (
                <div key={t.year} className="relative grid grid-cols-2 min-h-[120px]">
                  {/* Left column */}
                  <div className={`pr-14 pb-12 flex flex-col ${isLeft ? "items-end text-right" : ""}`}>
                    {isLeft && (
                      <>
                        <div
                          className="text-[#c49a3c] font-bold text-3xl mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {t.year}
                        </div>
                        <div className="text-[#6b6660] text-base leading-relaxed max-w-xs">{t.event}</div>
                      </>
                    )}
                  </div>

                  {/* Center dot — positioned on the spine */}
                  <div className="absolute left-1/2 top-2 -translate-x-1/2 z-10">
                    <div className="w-5 h-5 rounded-full bg-[#c49a3c] border-4 border-[#f7f4ef] shadow-sm" />
                  </div>

                  {/* Right column */}
                  <div className={`pl-14 pb-12 flex flex-col ${!isLeft ? "items-start text-left" : ""}`}>
                    {!isLeft && (
                      <>
                        <div
                          className="text-[#c49a3c] font-bold text-3xl mb-2"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {t.year}
                        </div>
                        <div className="text-[#6b6660] text-base leading-relaxed max-w-xs">{t.event}</div>
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Mobile: vertical single-column timeline */}
        <div className="lg:hidden relative pl-8">
          <div className="absolute left-3 top-0 bottom-0 w-px bg-[#ddd8ce]" />
          <div className="space-y-10">
            {timeline.map((t) => (
              <div key={t.year} className="relative">
                <div className="absolute -left-5 top-1 w-4 h-4 rounded-full bg-[#c49a3c] border-4 border-[#f7f4ef]" />
                <div className="text-[#c49a3c] font-bold text-2xl mb-1" style={{ fontFamily: "var(--font-display)" }}>{t.year}</div>
                <div className="text-[#6b6660] text-sm leading-relaxed">{t.event}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-[#ede8e0] py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-14">
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">The People</div>
            <h2 className="text-4xl text-[#1c3a28]" style={{ fontFamily: "var(--font-display)" }}>Leadership Team</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((m) => (
              <div key={m.name} className="text-center">
                <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-4 bg-[#2a5240]">
                  <img src={m.img} alt={m.name} className="w-full h-full object-cover" />
                </div>
                <div className="text-[#1c3a28] font-semibold text-base">{m.name}</div>
                <div className="text-[#c49a3c] text-xs mt-1">{m.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid lg:grid-cols-3 gap-8">
          {[
            { icon: "🤝", title: "Integrity", desc: "Honest pricing, accurate documentation, and long-term relationship focus." },
            { icon: "🌱", title: "Sustainability", desc: "Certified sourcing from responsible producers with traceable supply chains." },
            { icon: "🌍", title: "Partnership", desc: "We are not just a supplier — we are a partner invested in your growth." },
          ].map((v) => (
            <div key={v.title} className="flex gap-5 items-start">
              <div className="text-3xl flex-shrink-0 mt-1">{v.icon}</div>
              <div>
                <div className="text-[#1c3a28] font-bold text-xl mb-2">{v.title}</div>
                <div className="text-[#6b6660] text-sm leading-relaxed">{v.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1c3a28] py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 text-center">
          <h2 className="text-4xl text-white mb-4" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Work Together?
          </h2>
          <p className="text-white/60 mb-8 text-lg">Get a competitive quote within 24 hours.</p>
          <Link to="/quote" className="bg-[#c49a3c] hover:bg-[#d4b060] text-[#122518] font-bold px-10 py-4 rounded-xl transition-all">
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
