import Link from "next/link";

export default function ImpactHero() {
  return (
    <section className="bg-emerald-700">
      <div className="mx-auto max-w-6xl px-4 py-14 md:py-20">
        <p className="text-sm font-medium text-white/85">Impact</p>

        <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white md:text-5xl">
          Measuring what matters.
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 md:text-lg">
          Our work is designed to deliver outcomes you can track—skills built, projects
          implemented, and partnerships that move sustainability forward.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-emerald-800 hover:bg-emerald-50"
          >
            Partner with us
          </Link>

          <Link
            href="/services"
            className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
          >
            Explore programs
          </Link>
        </div>

        {/* Optional: small highlight chips (fits “plain hero” but adds structure) */}
        <div className="mt-10 grid gap-3 sm:grid-cols-3">
          <Chip label="Training delivered" value="Workshops & onboarding" />
          <Chip label="Audits completed" value="Actionable reporting" />
          <Chip label="Communities engaged" value="Local programs" />
        </div>
      </div>
    </section>
  );
}

function Chip({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
      <div className="text-xs text-white/80">{label}</div>
      <div className="mt-1 text-sm font-semibold text-white">{value}</div>
    </div>
  );
}
