export default function Story() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Our Story</h2>
            <p className="mt-3 text-zinc-600">
              Founded in <span className="font-semibold text-zinc-900">2023</span>,
              UpwardEco Ltd was created to close the gap between sustainability strategy
              and on-the-ground implementation.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600">
              Many organizations want to meet global standards, reduce waste, and build
              credible environmental performance—but struggle with practical systems.
              UpwardEco combines consulting with field-level recovery insights to deliver
              realistic, measurable outcomes.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
            <div className="text-sm font-semibold text-zinc-900">Quick facts</div>
            <dl className="mt-6 grid gap-5 sm:grid-cols-2">
              <Fact label="Founded" value="2023" />
              <Fact label="Focus" value="Sustainability + Circular Economy" />
              <Fact label="Core services" value="Audits, Training, Recovery Systems" />
              <Fact label="Audience" value="Businesses, Institutions, Partners" />
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

function Fact({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-brand-bg p-5 ring-1 ring-zinc-200">
      <dt className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
        {label}
      </dt>
      <dd className="mt-2 text-sm font-semibold text-brand-deep">{value}</dd>
    </div>
  );
}
