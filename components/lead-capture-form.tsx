const projectTypes = [
  "Stainless Steel Fabrication",
  "Commercial Cooking Equipment",
  "Refrigeration Systems",
  "Ventilation & Exhaust",
  "Custom Engineered Solution",
];

export default function LeadCaptureForm() {
  return (
    <form
      action="/api/lead"
      method="post"
      className="grid gap-4 md:grid-cols-2"
      aria-label="Request a consultation"
    >
      <label className="space-y-2 text-sm text-foreground">
        <span>Name</span>
        <input
          name="name"
          required
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <label className="space-y-2 text-sm text-foreground">
        <span>Company</span>
        <input
          name="company"
          required
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <label className="space-y-2 text-sm text-foreground">
        <span>Email</span>
        <input
          type="email"
          name="email"
          required
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <label className="space-y-2 text-sm text-foreground">
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          required
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <label className="space-y-2 text-sm text-foreground">
        <span>Project Type</span>
        <select
          name="projectType"
          required
          defaultValue=""
          className="w-full border border-border bg-white px-4 py-3 text-sm text-foreground outline-none focus:border-foreground"
        >
          <option value="" disabled>
            Select project type
          </option>
          {projectTypes.map((projectType) => (
            <option key={projectType} value={projectType}>
              {projectType}
            </option>
          ))}
        </select>
      </label>
      <label className="space-y-2 text-sm text-foreground">
        <span>Timeline</span>
        <input
          name="timeline"
          placeholder="e.g. 8-12 weeks"
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <label className="space-y-2 text-sm text-foreground md:col-span-2">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          className="w-full border border-border bg-white px-4 py-3 text-sm outline-none focus:border-foreground"
        />
      </label>
      <div className="md:col-span-2">
        <button
          type="submit"
          className="inline-flex items-center justify-center border border-foreground bg-foreground px-6 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:bg-steel"
        >
          Submit Consultation Request
        </button>
      </div>
    </form>
  );
}
