import Link from "next/link";

export default function RecoveryCta() {
  return (
    <section className="py-12 pb-16 sm:pb-20">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-deep px-6 py-12 text-white shadow-card sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">Ready to build a recovery pathway?</h3>
              <p className="mt-2 text-sm text-white/90">
                We’ll design a clear segregation + hub-based recovery plan with measurable diversion.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                Request a Proposal
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Talk to a Consultant
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
