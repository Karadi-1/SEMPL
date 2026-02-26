export default function Footer() {
  return (
    <footer className="border-t border-border px-8 md:px-16 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
      <span className="font-serif text-base font-medium tracking-[0.12em] text-foreground uppercase">
        Elina
      </span>
      <p className="text-[11px] tracking-widest uppercase text-muted-foreground font-sans">
        Hygiene, engineered.
      </p>
      <p className="text-[11px] text-muted-foreground font-sans">
        &copy; {new Date().getFullYear()} Elina Engineering. All rights
        reserved.
      </p>
    </footer>
  );
}
