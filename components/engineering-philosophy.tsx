const philosophyItems = [
  {
    title: "Hygienic Design Principles",
    description:
      "Seamless joints, serviceable geometry, and contamination-aware design practices that support safe, efficient operation.",
  },
  {
    title: "SS304 Material Integrity",
    description:
      "Food-grade stainless steel construction selected for corrosion resistance, longevity, and high-cycle performance.",
  },
  {
    title: "Structural Engineering",
    description:
      "Load-considered fabrication with dimensional consistency for dependable strength in production kitchen environments.",
  },
  {
    title: "Compliance & Precision Manufacturing",
    description:
      "Process-controlled fabrication workflows aligned to hygiene norms and repeatable engineering tolerances.",
  },
];

export default function EngineeringPhilosophy() {
  return (
    <section aria-labelledby="engineering-philosophy" className="border-b border-border bg-white">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-steel">
            Engineering Philosophy
          </p>
          <h2
            id="engineering-philosophy"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Designed. Not Just Fabricated.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {philosophyItems.map((item) => (
            <article key={item.title} className="border border-border bg-muted p-6">
              <div className="mb-4 h-8 w-8 border border-border bg-white" aria-hidden="true" />
              <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
