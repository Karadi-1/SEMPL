import Link from "next/link";

const heroHighlights = [
  "SS304 construction",
  "Hygienic detailing",
  "Precision fabrication",
];

export default function Hero() {
  return (
    <section className="border-b border-border bg-white">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-32 md:px-10 md:pt-40 lg:grid-cols-[1.2fr_1fr] lg:items-end lg:pb-24">
        <div className="space-y-8">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-steel">
            Elina Engineering
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-tight tracking-tight text-foreground md:text-7xl">
            Hygiene, engineered.
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Built for demanding food-service environments with engineered SS304
            systems, hygienic detailing standards, and precision-led fabrication.
          </p>

          <div className="flex flex-wrap gap-3">
            {heroHighlights.map((highlight) => (
              <span
                key={highlight}
                className="border border-border bg-muted px-3 py-1 text-xs font-medium uppercase tracking-[0.14em] text-steel"
              >
                {highlight}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-2">
            <Link
              href="#capabilities"
              className="inline-flex items-center justify-center border border-foreground bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-steel"
            >
              Explore Solutions
            </Link>
            <Link
              href="#consultation"
              className="inline-flex items-center justify-center border border-border bg-white px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground transition-colors hover:bg-muted"
            >
              Request a Consultation
            </Link>
          </div>
        </div>

        <aside className="grid gap-6 border border-border bg-muted p-6 md:grid-cols-3 lg:grid-cols-1">
          {[
            { label: "Material", value: "SS304 Stainless Steel" },
            { label: "Build", value: "Hygienic Detailing" },
            { label: "Delivery", value: "Engineered Precision" },
          ].map((item) => (
            <div key={item.label} className="space-y-2">
              <p className="text-[11px] uppercase tracking-[0.18em] text-steel">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          ))}
        </aside>
      </div>
    </section>
  );
}
