import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router";

const categories = [
  "Spices & Herbs",
  "Grains & Cereals",
  "Edible Oils",
  "Nuts & Dried Fruits",
  "Seafood & Marine",
  "Meat Products",
  "Wood Products",
  "Precious Metals",
  "Scrap Metals",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setMobileProductsOpen(false);
    setProductsOpen(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, [location.pathname]);

  // Clean up timer on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close dropdown on click outside or Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setProductsOpen(false);
      }
    };
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProductsOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setProductsOpen(true);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setProductsOpen(false);
    }, 250);
  };

  const isHome = location.pathname === "/";

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || !isHome
          ? "bg-[#1c3a28] shadow-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-18">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded bg-[#c49a3c] flex items-center justify-center flex-shrink-0 transition-transform group-hover:scale-105">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2L13 7H17L14 11L15.5 16L10 13L4.5 16L6 11L3 7H7L10 2Z" fill="#1c3a28"/>
            </svg>
          </div>
          <div>
            <div className="text-white font-bold text-base leading-tight tracking-wide" style={{ fontFamily: "var(--font-sans)" }}>
              AGRI HOLDINGS
            </div>
            <div className="text-[#c49a3c] text-[10px] tracking-[0.2em] uppercase">Ltd</div>
          </div>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          <Link to="/" className="text-white/80 hover:text-[#c49a3c] text-sm font-medium transition-colors">
            Home
          </Link>
          <Link to="/about" className="text-white/80 hover:text-[#c49a3c] text-sm font-medium transition-colors">
            About
          </Link>

          {/* Products Dropdown */}
          <div
            ref={dropdownRef}
            className="relative py-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setProductsOpen((prev) => !prev)}
              aria-expanded={productsOpen}
              aria-haspopup="true"
              className="flex items-center gap-1.5 text-white/80 hover:text-[#c49a3c] text-sm font-medium transition-colors cursor-pointer py-1"
            >
              <span>Products</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                className={`transition-transform duration-200 ${productsOpen ? "rotate-180 text-[#c49a3c]" : ""}`}
              >
                <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dropdown Menu Container */}
            {productsOpen && (
              <div
                className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-60 z-50"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Invisible hover bridge to eliminate any gap */}
                <div className="absolute -top-3 left-0 right-0 h-5" aria-hidden="true" />

                <div className="bg-white rounded-xl shadow-2xl border border-[#ede8e0] py-2 overflow-hidden ring-1 ring-black/5">
                  <div className="px-4 pb-2 mb-1 border-b border-[#ede8e0] flex items-center justify-between">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#c49a3c]">Commodities</span>
                    <Link
                      to="/products"
                      onClick={() => setProductsOpen(false)}
                      className="text-xs text-[#1c3a28] font-semibold hover:text-[#c49a3c] transition-colors"
                    >
                      All Products →
                    </Link>
                  </div>
                  <div className="max-h-[380px] overflow-y-auto py-1">
                    {categories.map((cat) => (
                      <Link
                        key={cat}
                        to={`/products/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                        onClick={() => setProductsOpen(false)}
                        className="flex items-center justify-between px-4 py-2 text-sm text-[#4a4742] hover:text-[#1c3a28] hover:bg-[#f7f4ef] transition-all group"
                      >
                        <span className="group-hover:translate-x-0.5 transition-transform">{cat}</span>
                        <svg className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 text-[#c49a3c] transition-all" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link to="/contact" className="text-white/80 hover:text-[#c49a3c] text-sm font-medium transition-colors">
            Contact
          </Link>
        </div>

        {/* CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            to="/quote"
            className="bg-[#c49a3c] hover:bg-[#d4b060] text-[#1c3a28] font-semibold text-sm px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="lg:hidden text-white p-1 cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            {mobileOpen ? (
              <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            ) : (
              <path d="M4 6H20M4 12H20M4 18H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#122518] border-t border-white/10 px-6 py-6 space-y-4">
          <Link
            to="/"
            onClick={() => setMobileOpen(false)}
            className="block text-white/80 hover:text-[#c49a3c] text-base font-medium py-1"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setMobileOpen(false)}
            className="block text-white/80 hover:text-[#c49a3c] text-base font-medium py-1"
          >
            About
          </Link>

          <div>
            <div className="flex items-center justify-between py-1">
              <Link
                to="/products"
                onClick={() => setMobileOpen(false)}
                className="text-white/80 hover:text-[#c49a3c] text-base font-medium"
              >
                Products
              </Link>
              <button
                type="button"
                onClick={() => setMobileProductsOpen((prev) => !prev)}
                className="text-white/60 hover:text-[#c49a3c] p-1 cursor-pointer"
                aria-label="Toggle categories"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 14"
                  fill="none"
                  className={`transition-transform duration-200 ${mobileProductsOpen ? "rotate-180" : ""}`}
                >
                  <path d="M3 5L7 9L11 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            {mobileProductsOpen && (
              <div className="pl-4 mt-2 space-y-2 border-l border-white/15 ml-2">
                {categories.map((cat) => (
                  <Link
                    key={cat}
                    to={`/products/${cat.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    onClick={() => setMobileOpen(false)}
                    className="block text-white/60 hover:text-[#c49a3c] text-sm py-0.5"
                  >
                    {cat}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block text-white/80 hover:text-[#c49a3c] text-base font-medium py-1"
          >
            Contact
          </Link>
          <Link
            to="/quote"
            onClick={() => setMobileOpen(false)}
            className="block bg-[#c49a3c] text-[#1c3a28] font-semibold text-base px-5 py-3 rounded-lg text-center mt-2"
          >
            Get a Quote
          </Link>
        </div>
      )}
    </header>
  );
}
