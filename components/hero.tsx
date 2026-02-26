import Image from "next/image";
import Link from "next/link";
import { REDIRECT_URL } from "@/lib/config";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-kitchen.jpg"
          alt="Precision-engineered commercial kitchen systems"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center gap-8">
        {/* Badge */}
        <p className="text-[10px] tracking-[0.3em] uppercase text-steel font-sans font-medium border border-border px-4 py-2">
          Coming Soon
        </p>

        {/* Headline */}
        <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl font-light text-foreground leading-[0.95] text-balance">
          Hygiene,
          <br />
          <span className="italic">engineered.</span>
        </h1>

        {/* Sub text */}
        <p className="font-sans text-sm md:text-base text-muted-foreground max-w-md leading-relaxed font-light tracking-wide">
          Precision-crafted stainless steel commercial kitchen systems. SS304
          construction. Engineered for compliance, durability, and operational
          excellence.
        </p>

        {/* Divider */}
        <div className="w-10 h-px bg-border" />

        {/* CTA */}
        <Link
          href={REDIRECT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-foreground text-accent-foreground px-8 py-4 text-xs tracking-[0.2em] uppercase font-sans font-medium hover:bg-steel transition-colors duration-300"
        >
          Visit Site
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path
              d="M1 7H13M7 1L13 7L7 13"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>

      {/* Bottom descriptor strip */}
      <div className="absolute bottom-0 left-0 right-0 z-10 border-t border-border">
        <div className="grid grid-cols-3 divide-x divide-border">
          {[
            { label: "Material", value: "SS304 Stainless Steel" },
            { label: "Standard", value: "Hygienic Engineering" },
            { label: "Origin", value: "Precision Fabricated" },
          ].map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center justify-center py-4 px-4 gap-1"
            >
              <span className="text-[9px] tracking-[0.2em] uppercase text-steel font-sans">
                {item.label}
              </span>
              <span className="text-[11px] tracking-wide text-foreground font-sans font-medium hidden sm:block">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
