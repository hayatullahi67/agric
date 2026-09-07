import { useState } from "react";
import { Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";

const categories = [
  {
    name: "Spices & Herbs",
    slug: "spices-herbs",
    count: 42,
    img: "https://images.unsplash.com/photo-1629649407271-2dac934c1f1b?w=600&h=400&fit=crop&auto=format",
    desc: "Whole and ground spices, dried herbs, blends — direct from origin markets in India, Sri Lanka & Ethiopia.",
    tags: ["Food Grade", "Bulk Available"],
  },
  {
    name: "Grains & Cereals",
    slug: "grains-cereals",
    count: 28,
    img: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=600&h=400&fit=crop&auto=format",
    desc: "Wheat, rice, maize, barley, sorghum and more — available in FCL and LCL shipments.",
    tags: ["FOB", "CIF Available"],
  },
  {
    name: "Edible Oils",
    slug: "edible-oils",
    count: 18,
    img: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=600&h=400&fit=crop&auto=format",
    desc: "Palm oil, sunflower, olive, coconut and specialty oils — refined and crude grades.",
    tags: ["Refined", "Crude"],
  },
  {
    name: "Nuts & Dried Fruits",
    slug: "nuts-dried-fruits",
    count: 35,
    img: "https://images.unsplash.com/photo-1567892737950-30c4db28e6b0?w=600&h=400&fit=crop&auto=format",
    desc: "Cashews, almonds, walnuts, pistachios, dates, raisins — graded and vacuum-packed.",
    tags: ["Grade A", "Organic Available"],
  },
  {
    name: "Seafood & Marine",
    slug: "seafood-marine",
    count: 31,
    img: "https://images.unsplash.com/photo-1534482421-64566f976cfa?w=600&h=400&fit=crop&auto=format",
    desc: "Frozen and dried fish, shrimp, squid, lobster and canned marine products.",
    tags: ["Frozen", "Dried"],
  },
  {
    name: "Meat Products",
    slug: "meat-products",
    count: 22,
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&auto=format",
    desc: "Halal and conventional beef, lamb, poultry — chilled and frozen, HACCP certified.",
    tags: ["Halal", "HACCP"],
  },
  {
    name: "Wood Products",
    slug: "wood-products",
    count: 24,
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=600&h=400&fit=crop&auto=format",
    desc: "Hardwood and softwood timber, plywood, veneers, and wood pellets — FSC certified.",
    tags: ["FSC Certified", "Sustainable"],
  },
  {
    name: "Precious Metals",
    slug: "precious-metals",
    count: 12,
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=600&h=400&fit=crop&auto=format",
    desc: "Gold, silver, platinum and palladium — LBMA-compliant, fully assayed and documented.",
    tags: ["LBMA Compliant", "Assayed"],
  },
  {
    name: "Scrap Metals",
    slug: "scrap-metals",
    count: 19,
    img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=600&h=400&fit=crop&auto=format",
    desc: "HMS 1&2, copper scrap, aluminium, brass and stainless — graded, sorted, ready to ship.",
    tags: ["HMS 1&2", "Non-Ferrous"],
  },
];

const allTags = ["All", "Food Grade", "Bulk Available", "Halal", "FSC Certified", "LBMA Compliant", "Organic Available"];

export default function Products() {
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  const filtered = categories.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) || c.desc.toLowerCase().includes(search.toLowerCase());
    const matchTag = activeTag === "All" || c.tags.includes(activeTag);
    return matchSearch && matchTag;
  });

  return (
    <div className="bg-[#f7f4ef]">
      {/* Header */}
      <div className="bg-[#1c3a28] pt-28 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1678182451047-196f22a4143e?w=1600&h=600&fit=crop&auto=format"
            alt="Stacked containers"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Products" }]} />
          <h1 className="text-5xl lg:text-6xl text-white mt-6" style={{ fontFamily: "var(--font-display)" }}>
            Our <span className="text-[#c49a3c] italic">Product</span> Range
          </h1>
          <p className="text-white/60 mt-4 max-w-xl text-lg">
            200+ product lines across 9 categories, available in bulk on FOB, CIF, and DDP terms.
          </p>
        </div>
      </div>

      {/* Search + Filters */}
      <div className="bg-white border-b border-[#ede8e0] sticky top-[72px] z-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
          <div className="relative flex-1 max-w-sm">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-[#6b6660]" width="16" height="16" viewBox="0 0 16 16" fill="none">
              <circle cx="7" cy="7" r="5" stroke="currentColor" strokeWidth="1.5"/>
              <path d="M11 11L14 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
            <input
              type="text"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 bg-[#f7f4ef] border border-[#ede8e0] rounded-lg text-sm text-[#1a1a1a] placeholder:text-[#6b6660] focus:outline-none focus:border-[#1c3a28]"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(tag)}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  activeTag === tag
                    ? "bg-[#1c3a28] text-white"
                    : "bg-[#f7f4ef] text-[#6b6660] border border-[#ede8e0] hover:border-[#1c3a28]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        {filtered.length === 0 ? (
          <div className="text-center py-24 text-[#6b6660]">No categories match your search.</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {filtered.map((cat) => (
              <Link
                key={cat.slug}
                to={`/products/${cat.slug}`}
                className="group bg-white rounded-2xl overflow-hidden border border-[#ede8e0] hover:shadow-xl hover:border-[#c49a3c]/30 transition-all duration-300"
              >
                <div className="relative overflow-hidden h-52 bg-[#2a5240]">
                  <img
                    src={cat.img}
                    alt={cat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 right-4 bg-[#1c3a28]/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {cat.count} products
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex gap-2 mb-3">
                    {cat.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-semibold tracking-wide text-[#c49a3c] bg-[#c49a3c]/10 px-2 py-0.5 rounded-full uppercase">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-[#1c3a28] font-bold text-xl mb-2" style={{ fontFamily: "var(--font-display)" }}>
                    {cat.name}
                  </h3>
                  <p className="text-[#6b6660] text-sm leading-relaxed mb-5">{cat.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-[#1c3a28] text-sm font-semibold group-hover:text-[#c49a3c] transition-colors">
                      View Products →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
