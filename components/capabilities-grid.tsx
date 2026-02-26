const capabilities = [
  "Stainless Steel Fabrication",
  "Commercial Cooking Equipment",
  "Refrigeration Systems",
  "Preparation & Storage",
  "Ventilation & Exhaust",
  "Custom Engineered Solutions",
];

function CapabilityCard({ title }: { title: string }) {
  return (
    <article className="group border border-border bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-[0_8px_24px_rgba(26,26,26,0.08)]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-steel">Capability</p>
      <h3 className="mt-3 text-xl font-semibold text-foreground">{title}</h3>
    </article>
  );
}

export default function CapabilitiesGrid() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="border-b border-border bg-muted">
      <div className="mx-auto w-full max-w-6xl px-6 py-20 md:px-10">
        <div className="mb-10 space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-steel">
            Core Capabilities
          </p>
          <h2 id="capabilities-title" className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            Precision systems for modern commercial kitchens.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => (
            <CapabilityCard key={capability} title={capability} />
          ))}
        </div>
      </div>
    </section>
  );
}
