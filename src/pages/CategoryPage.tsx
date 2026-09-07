import { useParams, Link } from "react-router";
import Breadcrumb from "../components/Breadcrumb";

const categoryData: Record<string, {
  name: string;
  desc: string;
  img: string;
  sidebarImg: string;
  products: { name: string; spec: string; origin: string; moq: string; img: string }[];
}> = {
  "spices-herbs": {
    name: "Spices & Herbs",
    desc: "Whole, cracked, and ground spices sourced from certified farms in India, Sri Lanka, Ethiopia, Vietnam, and Indonesia. Available in food-grade bulk packaging, 25kg bags to 20-ton FCL.",
    img: "https://images.unsplash.com/photo-1629649407271-2dac934c1f1b?w=1600&h=500&fit=crop&auto=format",
    sidebarImg: "https://images.unsplash.com/photo-1529517986296-847580704921?w=400&h=300&fit=crop&auto=format",
    products: [
      { name: "Black Pepper (Whole)", spec: "Grade A, 500+ g/L", origin: "Vietnam / India", moq: "5 MT", img: "https://images.unsplash.com/photo-1599909533731-74dfe5bb4a84?w=400&h=300&fit=crop&auto=format" },
      { name: "Turmeric Powder", spec: "3–5% Curcumin", origin: "India (Erode)", moq: "5 MT", img: "https://images.unsplash.com/photo-1615485500834-bc10199bc727?w=400&h=300&fit=crop&auto=format" },
      { name: "Cinnamon Sticks", spec: "Ceylon Grade A (Alba)", origin: "Sri Lanka", moq: "2 MT", img: "https://images.unsplash.com/photo-1638437447450-6bdf5b52ec20?w=400&h=300&fit=crop&auto=format" },
      { name: "Cardamom (Green)", spec: "7–8mm Bold", origin: "Guatemala / India", moq: "1 MT", img: "https://images.unsplash.com/photo-1640866023498-a6a1b4c78af6?w=400&h=300&fit=crop&auto=format" },
      { name: "Cloves (Whole)", spec: "≥15% Essential Oil", origin: "Madagascar / Indonesia", moq: "2 MT", img: "https://images.unsplash.com/photo-1603106037987-18a2f58cba19?w=400&h=300&fit=crop&auto=format" },
      { name: "Cumin Seed", spec: "99% Purity, Machine Cleaned", origin: "India (Rajasthan)", moq: "5 MT", img: "https://images.unsplash.com/photo-1613918431703-aa50889e3be8?w=400&h=300&fit=crop&auto=format" },
    ],
  },
  "precious-metals": {
    name: "Precious Metals",
    desc: "LBMA-compliant gold, silver, platinum, and palladium — fully assayed, refined, and documented. Available as bars, granules, and certified grain for industrial and investment use.",
    img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1600&h=500&fit=crop&auto=format",
    sidebarImg: "https://images.unsplash.com/photo-1624365168056-daf44387e2ae?w=400&h=300&fit=crop&auto=format",
    products: [
      { name: "Gold Bars (999.9)", spec: "1 kg – 400 oz bars", origin: "South Africa / UAE", moq: "1 kg", img: "https://images.unsplash.com/photo-1610375461246-83df859d849d?w=400&h=300&fit=crop&auto=format" },
      { name: "Silver Granules", spec: "999 fine silver", origin: "Mexico / Peru", moq: "50 kg", img: "https://images.unsplash.com/photo-1624365169364-0640dd10e180?w=400&h=300&fit=crop&auto=format" },
      { name: "Gold Dore Bars", spec: "75–95% purity", origin: "Ghana / Mali", moq: "5 kg", img: "https://images.unsplash.com/photo-1624365168056-daf44387e2ae?w=400&h=300&fit=crop&auto=format" },
      { name: "Platinum Sponge", spec: "99.95% purity", origin: "South Africa", moq: "100 g", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&auto=format" },
    ],
  },
  "wood-products": {
    name: "Wood Products",
    desc: "FSC-certified hardwood, softwood, veneers, plywood panels, and wood pellets — sustainably sourced from managed forests across Central Africa, South America, and Northern Europe.",
    img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=1600&h=500&fit=crop&auto=format",
    sidebarImg: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&auto=format",
    products: [
      { name: "Sapele Hardwood Lumber", spec: "KD 12%, FAS Grade", origin: "Cameroon / Ivory Coast", moq: "20 CBM", img: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop&auto=format" },
      { name: "Pine Timber (C16/C24)", spec: "Structural grade, KD", origin: "Finland / Sweden", moq: "40 CBM", img: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&auto=format" },
      { name: "Hardwood Plywood (18mm)", spec: "BB/CC face, FSC", origin: "China / Vietnam", moq: "100 sheets", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop&auto=format" },
      { name: "Wood Pellets (ENplus A1)", spec: "< 10% moisture, 6mm", origin: "Eastern Europe", moq: "25 MT", img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&auto=format" },
    ],
  },
};

const allCategories = [
  { name: "Spices & Herbs", slug: "spices-herbs" },
  { name: "Grains & Cereals", slug: "grains-cereals" },
  { name: "Edible Oils", slug: "edible-oils" },
  { name: "Nuts & Dried Fruits", slug: "nuts-dried-fruits" },
  { name: "Seafood & Marine", slug: "seafood-marine" },
  { name: "Meat Products", slug: "meat-products" },
  { name: "Wood Products", slug: "wood-products" },
  { name: "Precious Metals", slug: "precious-metals" },
  { name: "Scrap Metals", slug: "scrap-metals" },
];

const fallbackCategory = {
  name: "Products",
  desc: "Quality-assured commodities sourced from certified producers worldwide.",
  img: "https://images.unsplash.com/photo-1678182451047-196f22a4143e?w=1600&h=500&fit=crop&auto=format",
  sidebarImg: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=300&fit=crop&auto=format",
  products: [
    { name: "Sample Product A", spec: "Grade A, Food-grade", origin: "Various Origins", moq: "5 MT", img: "https://images.unsplash.com/photo-1587293852726-70cdb56c2866?w=400&h=300&fit=crop&auto=format" },
    { name: "Sample Product B", spec: "Premium grade", origin: "Various Origins", moq: "10 MT", img: "https://images.unsplash.com/photo-1529517986296-847580704921?w=400&h=300&fit=crop&auto=format" },
  ],
};

export default function CategoryPage() {
  const { slug } = useParams<{ slug: string }>();
  const data = (slug && categoryData[slug]) ? categoryData[slug] : { ...fallbackCategory, name: slug?.replace(/-/g, " ").replace(/\b\w/g, c => c.toUpperCase()) || "Products" };

  return (
    <div className="bg-[#f7f4ef]">
      {/* Category Banner */}
      <div className="relative h-72 lg:h-96 overflow-hidden bg-[#1c3a28]">
        <img src={data.img} alt={data.name} className="w-full h-full object-cover opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#122518]/80 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-6 lg:px-10 pb-10">
          <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/products" }, { label: data.name }]} />
          <h1 className="text-4xl lg:text-6xl text-white mt-4" style={{ fontFamily: "var(--font-display)" }}>
            {data.name}
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-4 gap-10">
          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-5 border border-[#ede8e0]">
              <div className="text-[#1c3a28] font-semibold text-sm mb-4 uppercase tracking-wider">All Categories</div>
              <ul className="space-y-1">
                {allCategories.map((cat) => (
                  <li key={cat.slug}>
                    <Link
                      to={`/products/${cat.slug}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        cat.slug === slug
                          ? "bg-[#1c3a28] text-white font-medium"
                          : "text-[#6b6660] hover:bg-[#f7f4ef] hover:text-[#1c3a28]"
                      }`}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-[#1c3a28] rounded-2xl p-6 text-white">
              <div className="text-[#c49a3c] text-xs font-semibold tracking-widest uppercase mb-3">Need a Quote?</div>
              <p className="text-white/70 text-sm mb-5 leading-relaxed">
                Tell us your quantity and destination — we respond within 24 hours.
              </p>
              <Link
                to="/quote"
                className="block bg-[#c49a3c] hover:bg-[#d4b060] text-[#122518] font-bold text-sm px-4 py-3 rounded-xl text-center transition-colors"
              >
                Request a Quote
              </Link>
            </div>

            <img src={data.sidebarImg} alt="" className="rounded-2xl w-full h-40 object-cover" />
          </aside>

          {/* Main */}
          <div className="lg:col-span-3">
            <p className="text-[#6b6660] text-base leading-relaxed mb-10 max-w-2xl">{data.desc}</p>

            <div className="grid sm:grid-cols-2 gap-6">
              {data.products.map((product) => (
                <div
                  key={product.name}
                  className="bg-white rounded-2xl overflow-hidden border border-[#ede8e0] hover:shadow-lg hover:border-[#c49a3c]/30 transition-all duration-300 group"
                >
                  <div className="h-44 overflow-hidden bg-[#2a5240]">
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="text-[#1c3a28] font-bold text-base mb-2">{product.name}</h3>
                    <div className="space-y-1.5 mb-4">
                      <div className="flex items-center gap-2 text-xs text-[#6b6660]">
                        <span className="font-semibold text-[#1c3a28]">Spec:</span> {product.spec}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#6b6660]">
                        <span className="font-semibold text-[#1c3a28]">Origin:</span> {product.origin}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-[#6b6660]">
                        <span className="font-semibold text-[#1c3a28]">MOQ:</span> {product.moq}
                      </div>
                    </div>
                    <Link
                      to="/quote"
                      className="block bg-[#f7f4ef] hover:bg-[#1c3a28] text-[#1c3a28] hover:text-white font-semibold text-sm px-4 py-2.5 rounded-lg text-center transition-all duration-200 border border-[#ede8e0] hover:border-[#1c3a28]"
                    >
                      Request Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
