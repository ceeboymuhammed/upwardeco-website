import Link from "next/link";

export default function CtaPartners() {
  return (
    <section className="py-10 pb-16 sm:pb-20">
      <div className="container-px">
        <div className="rounded-3xl bg-white px-6 py-10 shadow-card ring-1 ring-zinc-200 sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold text-zinc-900">
                Join our mission to build a circular and inclusive green economy.
              </h3>
              <p className="mt-2 text-sm text-zinc-600">
                Partner with us, volunteer, or support programs that deliver measurable outcomes.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href="/volunteer"
                className="rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Volunteer
              </Link>
              <Link
                href="/partnerships"
                className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
              >
                Partner With Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
