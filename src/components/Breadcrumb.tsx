import { Link } from "react-router";

interface Crumb {
  label: string;
  href?: string;
}

export default function Breadcrumb({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="flex items-center gap-2 text-sm text-[#6b6660]">
      {crumbs.map((crumb, i) => (
        <span key={i} className="flex items-center gap-2">
          {i > 0 && <span className="text-[#c49a3c]">/</span>}
          {crumb.href ? (
            <Link to={crumb.href} className="hover:text-[#1c3a28] transition-colors">{crumb.label}</Link>
          ) : (
            <span className="text-[#1c3a28] font-medium">{crumb.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
