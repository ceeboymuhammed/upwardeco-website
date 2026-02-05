import Link from "next/link";

export default function FinalCta() {
  return (
    <section className="py-14 sm:py-20">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-deep px-6 py-12 text-white shadow-card sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Ready to start your environmental audit?
              </h2>
              <p className="mt-3 text-sm leading-relaxed text-white/90">
                Get a clear baseline, identify risk gaps, and receive a practical roadmap for
                compliance, efficiency, and sustainable growth.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                Request an Audit
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs text-zinc-500">
          Prefer email? Send your site details to hello@upwardeco.example
        </p>
      </div>
    </section>
  );
}
