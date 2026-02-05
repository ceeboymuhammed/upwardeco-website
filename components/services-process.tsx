const steps = [
  {
    title: "Discover",
    desc: "We learn your goals, constraints, and baseline impact.",
  },
  {
    title: "Assess",
    desc: "We audit operations, gather evidence, and identify high-leverage fixes.",
  },
  {
    title: "Plan",
    desc: "You get a clear roadmap with prioritized actions and owners.",
  },
  {
    title: "Implement",
    desc: "We support rollout with training, templates, and accountability.",
  },
];

export default function ServicesProcess() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            How engagements work
          </h2>
          <p className="mt-3 text-zinc-600">
            A simple process that keeps things practical and measurable.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="text-sm font-semibold text-emerald-700">
                Step {i + 1}
              </div>
              <div className="mt-2 text-base font-semibold">{s.title}</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
