import Link from "next/link";

export default function RecoveryHero() {
  return (
    <section className="bg-brand-deep">
      <div className="container-px py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
            Material Recovery & Circular Systems
          </p>

          <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
            Material Recovery Systems That Turn Waste into Value
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            We design recovery pathways that reduce waste leakage, improve diversion,
            and support inclusive livelihoods through operational hubs.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
            >
              Request a Recovery Program
            </Link>
            <Link
              href="/environmental-audits"
              className="rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Start with an Audit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
