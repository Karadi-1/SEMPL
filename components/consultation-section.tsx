import LeadCaptureForm from "@/components/lead-capture-form";

export default function ConsultationSection() {
  return (
    <section id="consultation" aria-labelledby="consultation-title" className="bg-muted">
      <div className="mx-auto grid w-full max-w-6xl gap-10 px-6 py-20 md:px-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="space-y-4">
          <p className="text-xs font-medium uppercase tracking-[0.24em] text-steel">
            B2B Consultation
          </p>
          <h2
            id="consultation-title"
            className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl"
          >
            Start your engineered kitchen project.
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            Share your project requirements and timelines. Our engineering team
            will respond with a structured consultation plan.
          </p>
        </div>

        <LeadCaptureForm />
      </div>
    </section>
  );
}
