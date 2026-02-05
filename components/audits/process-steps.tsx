const steps = [
  {
    title: "Discovery & scoping",
    desc: "We confirm your sites, operations, reporting needs, and regulatory context.",
  },
  {
    title: "Data + document review",
    desc: "Policies, permits, logs, utility data, vendor records, and operational evidence.",
  },
  {
    title: "Site assessment",
    desc: "Walk-through observations, interviews, and verification against the scope.",
  },
  {
    title: "Analysis & findings",
    desc: "Baseline performance, gaps, risks, and priority opportunities for improvement.",
  },
  {
    title: "Report & roadmap",
    desc: "You receive a clear report and action plan with owners, timelines, and next steps.",
  },
];

export default function ProcessSteps() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Process</h2>
          <p className="mt-3 text-zinc-600">
            A professional, low-disruption audit approach—structured from scope to roadmap.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">
                    {idx + 1}. {s.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
                </div>
                <div className="rounded-2xl bg-brand-bg px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-zinc-200">
                  Step
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
