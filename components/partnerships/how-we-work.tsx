const steps = [
  {
    title: "Discovery & alignment",
    desc: "We clarify objectives, stakeholders, timelines, and reporting expectations.",
  },
  {
    title: "Co-design & scope",
    desc: "We define activities, delivery roles, governance, and measurement approach.",
  },
  {
    title: "Implementation",
    desc: "We execute with clear coordination, documentation, and quality controls.",
  },
  {
    title: "Measurement & learning",
    desc: "We report progress and refine the model for better outcomes and scale.",
  },
];

export default function HowWeWork() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">How We Work</h2>
          <p className="mt-3 text-zinc-600">
            A structured approach that keeps partnerships clear, measurable, and easy to manage.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {steps.map((s, idx) => (
            <div key={s.title} className="rounded-2xl bg-brand-bg p-7 ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                  <span className="text-sm font-bold">{idx + 1}</span>
                </div>
                <div>
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 text-sm text-zinc-700">
          <span className="font-semibold text-zinc-900">Typical outputs:</span>{" "}
          Partnership concept note, implementation plan, roles & governance, monitoring framework, periodic reporting.
        </div>
      </div>
    </section>
  );
}
