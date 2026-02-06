import Link from "next/link";

export default function PartnershipsHero() {
  return (
    <section className="bg-white">
      <div className="container-px py-16 sm:py-20">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Partnerships
          </p>
          <h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">
            Partner with UpwardEco to deliver measurable circular impact.
          </h1>
          <p className="mt-4 text-base leading-relaxed text-zinc-600 sm:text-lg">
            We collaborate with businesses, institutions, and development partners to
            scale environmental audits, recovery systems, training, and inclusive green livelihoods.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Start a Partnership Conversation
            </Link>
            <Link
              href="/volunteer"
              className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
            >
              Explore Volunteering
            </Link>
          </div>
        </div>

        <div className="mt-10 rounded-3xl bg-brand-bg p-6 ring-1 ring-zinc-200 sm:p-8">
          <div className="grid gap-6 sm:grid-cols-3">
            <Kpi label="Partnership-ready programs" value="Audits • Recovery • Training" />
            <Kpi label="Delivery model" value="Advisory + operations" />
            <Kpi label="Reporting" value="Metrics & documentation" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white p-5 ring-1 ring-zinc-200">
      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
        {label}
      </div>
      <div className="mt-2 text-sm font-semibold text-zinc-900">{value}</div>
    </div>
  );
}
