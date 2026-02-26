import Link from "next/link";
import { REDIRECT_URL } from "@/lib/config";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 md:px-16">
      <span className="font-serif text-xl font-medium tracking-[0.12em] text-foreground uppercase">
        Elina
      </span>
      <Link
        href={REDIRECT_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-200 font-sans"
      >
        Visit Site
      </Link>
    </header>
  );
}
