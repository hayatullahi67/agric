import { useState } from "react";
import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <div className="bg-[#f7f4ef]">
      {/* Header */}
      <div className="bg-[#1c3a28] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Contact Us" }]} />
          <h1 className="text-5xl lg:text-6xl text-white mt-6" style={{ fontFamily: "var(--font-display)" }}>
            Get in <span className="text-[#c49a3c] italic">Touch</span>
          </h1>
          <p className="text-white/60 mt-4 text-lg max-w-lg">
            Talk to our trade team, arrange a visit to one of our offices, or send us a message below.
          </p>
        </div>
      </div>

      {/* Offices */}
      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {[
            {
              flag: "🇬🇧",
              title: "UK Headquarters",
              addr: "27 Canary Wharf, Level 14\nLondon, E14 5AB\nUnited Kingdom",
              phone: "+44 207 123 4567",
              email: "london@agriholdings.co.uk",
              hours: "Mon–Fri: 08:30–18:00 GMT",
              mapBg: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=800&h=300&fit=crop&auto=format",
            },
            {
              flag: "🇧🇪",
              title: "Europe Office",
              addr: "Rue du Commerce 45, Suite 8\nBrussels, 1000\nBelgium",
              phone: "+32 2 555 1234",
              email: "brussels@agriholdings.co.uk",
              hours: "Mon–Fri: 09:00–17:30 CET",
              mapBg: "https://images.unsplash.com/photo-1549388604-817d15aa0110?w=800&h=300&fit=crop&auto=format",
            },
          ].map((office) => (
            <div key={office.title} className="bg-white rounded-2xl overflow-hidden border border-[#ede8e0] shadow-sm">
              <div className="relative h-44 overflow-hidden bg-[#2a5240]">
                <img src={office.mapBg} alt={office.title} className="w-full h-full object-cover opacity-80" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c3a28]/60 to-transparent" />
                <div className="absolute bottom-4 left-5">
                  <span className="text-2xl">{office.flag}</span>
                  <span className="text-white font-bold text-lg ml-2" style={{ fontFamily: "var(--font-display)" }}>{office.title}</span>
                </div>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <div className="text-[#6b6660] text-xs font-semibold uppercase tracking-wider mb-1.5">Address</div>
                  <div className="text-[#1c3a28] text-sm whitespace-pre-line leading-relaxed">{office.addr}</div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-[#6b6660] text-xs font-semibold uppercase tracking-wider mb-1.5">Phone</div>
                    <a href={`tel:${office.phone.replace(/ /g, "")}`} className="text-[#1c3a28] text-sm hover:text-[#c49a3c] transition-colors">
                      {office.phone}
                    </a>
                  </div>
                  <div>
                    <div className="text-[#6b6660] text-xs font-semibold uppercase tracking-wider mb-1.5">Email</div>
                    <a href={`mailto:${office.email}`} className="text-[#1c3a28] text-sm hover:text-[#c49a3c] transition-colors break-all">
                      {office.email}
                    </a>
                  </div>
                </div>
                <div className="border-t border-[#ede8e0] pt-4 flex items-center justify-between">
                  <div className="text-[#6b6660] text-xs">{office.hours}</div>
                  <a href={`https://wa.me/${office.phone.replace(/[^0-9]/g, "")}`} className="flex items-center gap-1.5 bg-[#25D366]/10 text-[#128C7E] text-xs font-semibold px-3 py-1.5 rounded-full hover:bg-[#25D366]/20 transition-colors">
                    <span>💬</span> WhatsApp
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact form + info */}
        <div className="grid lg:grid-cols-5 gap-12">
          {/* Form */}
          <div className="lg:col-span-3">
            <div className="text-[#c49a3c] text-xs font-semibold tracking-[0.2em] uppercase mb-4">Send a Message</div>
            <h2 className="text-3xl text-[#1c3a28] mb-8" style={{ fontFamily: "var(--font-display)" }}>
              We Read Every Message
            </h2>

            {sent ? (
              <div className="bg-[#1c3a28] rounded-2xl p-10 text-center">
                <div className="text-4xl mb-4">✅</div>
                <div className="text-white font-bold text-xl mb-2">Message Sent!</div>
                <div className="text-white/60 text-sm mb-6">We'll reply to {form.email} within one business day.</div>
                <button onClick={() => setSent(false)} className="bg-[#c49a3c] text-[#122518] font-semibold px-6 py-2.5 rounded-lg text-sm">
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Name <span className="text-[#c49a3c]">*</span></label>
                    <input type="text" required placeholder="Your name" value={form.name} onChange={set("name")}
                      className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm focus:outline-none focus:border-[#1c3a28] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Email <span className="text-[#c49a3c]">*</span></label>
                    <input type="email" required placeholder="your@email.com" value={form.email} onChange={set("email")}
                      className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm focus:outline-none focus:border-[#1c3a28] transition-colors" />
                  </div>
                </div>
                <div>
                  <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Subject</label>
                  <select value={form.subject} onChange={set("subject")}
                    className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm focus:outline-none focus:border-[#1c3a28] transition-colors">
                    <option value="">Select a topic...</option>
                    <option>Product Enquiry</option>
                    <option>Partnership / Sourcing</option>
                    <option>Logistics & Documentation</option>
                    <option>Careers</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Message <span className="text-[#c49a3c]">*</span></label>
                  <textarea required rows={5} placeholder="Tell us what you need..." value={form.message} onChange={set("message")}
                    className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm focus:outline-none focus:border-[#1c3a28] transition-colors resize-none" />
                </div>
                <button type="submit"
                  className="bg-[#1c3a28] hover:bg-[#2a5240] text-white font-bold py-4 px-8 rounded-xl text-sm transition-all hover:shadow-lg">
                  Send Message →
                </button>
              </form>
            )}
          </div>

          {/* Info panel */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-[#1c3a28] rounded-2xl p-7 text-white">
              <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-5">Quick Contact</div>
              <div className="space-y-4">
                <a href="tel:+442071234567" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#c49a3c] flex items-center justify-center transition-colors text-lg">📞</div>
                  <div>
                    <div className="text-white/50 text-xs">Call us</div>
                    <div className="text-white font-medium text-sm">+44 207 123 4567</div>
                  </div>
                </a>
                <a href="mailto:trade@agriholdings.co.uk" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#c49a3c] flex items-center justify-center transition-colors text-lg">✉️</div>
                  <div>
                    <div className="text-white/50 text-xs">Email</div>
                    <div className="text-white font-medium text-sm">trade@agriholdings.co.uk</div>
                  </div>
                </a>
                <a href="https://wa.me/442071234567" className="flex items-center gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 group-hover:bg-[#c49a3c] flex items-center justify-center transition-colors text-lg">💬</div>
                  <div>
                    <div className="text-white/50 text-xs">WhatsApp</div>
                    <div className="text-white font-medium text-sm">Chat directly with our team</div>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#ede8e0]">
              <div className="text-[#1c3a28] font-semibold text-sm mb-4">Need a Quote Instead?</div>
              <p className="text-[#6b6660] text-sm leading-relaxed mb-4">
                For pricing and trade enquiries, our dedicated quote form gives us everything we need to respond fast.
              </p>
              <Link to="/quote" className="block bg-[#c49a3c] hover:bg-[#d4b060] text-[#122518] font-bold text-sm py-3 rounded-xl text-center transition-colors">
                Get a Trade Quote
              </Link>
            </div>

            <img
              src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&h=300&fit=crop&auto=format"
              alt="London skyline"
              className="rounded-2xl w-full h-40 object-cover"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
