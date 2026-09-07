import { useState } from "react";
import Breadcrumb from "../components/Breadcrumb";

const products = [
  "Spices & Herbs", "Grains & Cereals", "Edible Oils", "Nuts & Dried Fruits",
  "Seafood & Marine Products", "Meat Products", "Wood Products", "Precious Metals",
  "Scrap Metals", "Other / Multiple",
];

const countries = [
  "United Kingdom", "Germany", "France", "Netherlands", "Belgium", "UAE",
  "Saudi Arabia", "Qatar", "Kuwait", "Nigeria", "Ghana", "South Africa",
  "India", "Singapore", "Malaysia", "USA", "Canada", "Other",
];

const steps = [
  { n: "01", title: "Submit Request", desc: "Fill in the form with your product, quantity, and destination details." },
  { n: "02", title: "Quote in 24h", desc: "Our trade team reviews and sends a competitive, itemised quote." },
  { n: "03", title: "Confirm & Contract", desc: "Agree terms and sign a sales contract — no hidden fees." },
  { n: "04", title: "Goods Dispatched", desc: "We handle logistics, documentation, and tracking through to delivery." },
];

export default function Quote() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "",
    product: "", quantity: "", unit: "MT",
    destination: "", incoterm: "CIF", message: "",
  });

  const set = (k: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="bg-[#f7f4ef] min-h-screen flex items-center justify-center px-6">
        <div className="max-w-md w-full text-center">
          <div className="w-20 h-20 rounded-full bg-[#1c3a28] flex items-center justify-center mx-auto mb-6">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
              <path d="M10 18L15 23L26 12" stroke="#c49a3c" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <h2 className="text-3xl text-[#1c3a28] mb-3" style={{ fontFamily: "var(--font-display)" }}>Request Received</h2>
          <p className="text-[#6b6660] mb-8 leading-relaxed">
            Thank you, <strong>{form.name}</strong>. Our trade team will review your requirements and send a detailed quote to <strong>{form.email}</strong> within 24 hours.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#1c3a28] text-white font-semibold px-8 py-3 rounded-xl hover:bg-[#2a5240] transition-colors"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#f7f4ef]">
      {/* Header */}
      <div className="bg-[#1c3a28] pt-28 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Get a Quote" }]} />
          <h1 className="text-5xl lg:text-6xl text-white mt-6" style={{ fontFamily: "var(--font-display)" }}>
            Request a <span className="text-[#c49a3c] italic">Quote</span>
          </h1>
          <p className="text-white/60 mt-4 max-w-lg text-lg">
            Tell us what you need. We'll respond with competitive pricing within 24 hours — no obligation.
          </p>
        </div>
      </div>

      {/* Process steps */}
      <div className="bg-white border-b border-[#ede8e0]">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <div className="text-[#c49a3c] font-bold text-xl flex-shrink-0 mt-0.5" style={{ fontFamily: "var(--font-display)" }}>
                  {s.n}
                </div>
                <div>
                  <div className="text-[#1c3a28] font-semibold text-sm mb-1">{s.title}</div>
                  <div className="text-[#6b6660] text-xs leading-relaxed">{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Main Form + Sidebar */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact details */}
              <div>
                <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-5">Your Details</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  {[
                    { k: "name", label: "Full Name", type: "text", placeholder: "John Smith", required: true },
                    { k: "company", label: "Company Name", type: "text", placeholder: "Acme Trading Ltd", required: true },
                    { k: "email", label: "Email Address", type: "email", placeholder: "john@acme.com", required: true },
                    { k: "phone", label: "Phone / WhatsApp", type: "tel", placeholder: "+44 7700 000000", required: false },
                  ].map((f) => (
                    <div key={f.k}>
                      <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">
                        {f.label} {f.required && <span className="text-[#c49a3c]">*</span>}
                      </label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        value={form[f.k as keyof typeof form]}
                        onChange={set(f.k)}
                        required={f.required}
                        className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#1c3a28] transition-colors"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="border-t border-[#ede8e0] pt-6">
                <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-5">Product Details</div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">
                      Product Category <span className="text-[#c49a3c]">*</span>
                    </label>
                    <select
                      value={form.product}
                      onChange={set("product")}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1c3a28] transition-colors"
                    >
                      <option value="">Select category...</option>
                      {products.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">
                      Destination Country <span className="text-[#c49a3c]">*</span>
                    </label>
                    <select
                      value={form.destination}
                      onChange={set("destination")}
                      required
                      className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1c3a28] transition-colors"
                    >
                      <option value="">Select country...</option>
                      {countries.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Quantity</label>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="e.g. 50"
                        value={form.quantity}
                        onChange={set("quantity")}
                        className="flex-1 px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#1c3a28] transition-colors"
                      />
                      <select
                        value={form.unit}
                        onChange={set("unit")}
                        className="w-24 px-3 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1c3a28]"
                      >
                        <option>MT</option>
                        <option>KG</option>
                        <option>CBM</option>
                        <option>FCL</option>
                        <option>Lots</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Preferred Incoterm</label>
                    <select
                      value={form.incoterm}
                      onChange={set("incoterm")}
                      className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] focus:outline-none focus:border-[#1c3a28] transition-colors"
                    >
                      {["CIF", "FOB", "DDP", "EXW", "DAP", "CFR"].map((i) => <option key={i}>{i}</option>)}
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-[#1c3a28] text-sm font-medium mb-1.5">Additional Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Product specification, quality grade, packaging requirements, delivery timeline..."
                  value={form.message}
                  onChange={set("message")}
                  className="w-full px-4 py-3 bg-white border border-[#ede8e0] rounded-xl text-sm text-[#1a1a1a] placeholder:text-[#aaa] focus:outline-none focus:border-[#1c3a28] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#1c3a28] hover:bg-[#2a5240] text-white font-bold py-4 rounded-xl text-base transition-all duration-200 hover:shadow-lg"
              >
                Submit Quote Request →
              </button>
              <p className="text-[#6b6660] text-xs text-center">
                By submitting, you agree to our Privacy Policy. We never share your data with third parties.
              </p>
            </form>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-[#1c3a28] rounded-2xl p-7 text-white">
              <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-4">Why Trade With Us</div>
              <ul className="space-y-4">
                {[
                  { icon: "⚡", t: "24-hour response", d: "Our trade team reviews every request same working day." },
                  { icon: "🔒", t: "Secure transactions", d: "Bank-to-bank LC and TT payment terms supported." },
                  { icon: "📦", t: "Full documentation", d: "COO, COA, SGS reports, phytosanitary certs included." },
                  { icon: "🌍", t: "80+ countries served", d: "We know the import regulations for your market." },
                ].map((item) => (
                  <li key={item.t} className="flex gap-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.t}</div>
                      <div className="text-white/60 text-xs mt-0.5 leading-relaxed">{item.d}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#ede8e0]">
              <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-4">Direct Contact</div>
              <div className="space-y-3">
                <a href="tel:+442071234567" className="flex items-center gap-3 text-[#1c3a28] font-medium text-sm hover:text-[#c49a3c] transition-colors">
                  <span className="text-lg">📞</span> +44 207 123 4567
                </a>
                <a href="mailto:trade@agriholdings.co.uk" className="flex items-center gap-3 text-[#1c3a28] font-medium text-sm hover:text-[#c49a3c] transition-colors">
                  <span className="text-lg">✉️</span> trade@agriholdings.co.uk
                </a>
                <a href="https://wa.me/442071234567" className="flex items-center gap-3 text-[#1c3a28] font-medium text-sm hover:text-[#c49a3c] transition-colors">
                  <span className="text-lg">💬</span> WhatsApp us
                </a>
              </div>
            </div>

            <div className="bg-[#ede8e0] rounded-2xl p-5 text-center">
              <div className="text-[#1c3a28] font-semibold text-sm mb-1">Certifications</div>
              <div className="flex justify-center gap-4 mt-4">
                {["ISO 9001", "LBMA", "FSC", "HACCP"].map((c) => (
                  <div key={c} className="bg-white rounded-lg px-3 py-2 text-[#1c3a28] font-bold text-xs border border-[#d4cfc5]">
                    {c}
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
