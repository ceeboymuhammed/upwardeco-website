import Link from "next/link";

export default function PartnershipsCta() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-deep px-6 py-12 text-white shadow-card sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Let’s build a partnership with clear outcomes.
              </h2>
              <p className="mt-3 text-sm text-white/90">
                Tell us what you’re trying to achieve—diversion targets, training goals, ESG reporting, or community impact—and we’ll propose a scope.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                Book a Partnership Call
              </Link>
              <Link
                href="/contact?topic=partnership"
                className="rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Request a Concept Note
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
