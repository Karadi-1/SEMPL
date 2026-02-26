import Link from "next/link";

const navLinks = [
  { label: "Capabilities", href: "#capabilities" },
  { label: "Categories", href: "#product-categories-title" },
  { label: "Consultation", href: "#consultation" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-white/95 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-5 md:px-10">
        <span className="text-lg font-semibold uppercase tracking-[0.14em] text-foreground">
          Elina
        </span>
        <nav aria-label="Main navigation" className="flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
