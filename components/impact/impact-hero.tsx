import Link from "next/link";

export default function ImpactHero() {
  return (
    <section className="border-b border-zinc-200 bg-white">
      <div className="container-px py-14 sm:py-18">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Impact
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight text-zinc-900 sm:text-5xl">
            Measurable Environmental and Social Impact
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            We combine sustainability consulting with practical recovery systems to
            deliver measurable outcomes for communities and organizations.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Discuss Your Impact Goals
            </Link>
            <Link
              href="/environmental-audits"
              className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
            >
              Request an Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
