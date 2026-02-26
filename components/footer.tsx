export default function Footer() {
  return (
    <footer className="border-t border-border bg-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <span className="text-base font-semibold uppercase tracking-[0.12em] text-foreground">
          Elina
        </span>
        <p className="text-[11px] uppercase tracking-[0.18em] text-steel">
          Hygiene, engineered.
        </p>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Elina Engineering. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
