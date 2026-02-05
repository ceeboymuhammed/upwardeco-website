type Value = {
  title: string;
  desc: string;
  icon: string;
};

const values: Value[] = [
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "We design solutions that reduce impact and strengthen resilience.",
  },
  {
    icon: "🤝",
    title: "Integrity",
    desc: "We recommend what works, backed by evidence and transparency.",
  },
  {
    icon: "📈",
    title: "Measurable outcomes",
    desc: "We prioritize progress you can track—skills, systems, and results.",
  },
];

export default function AboutValues() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-14 sm:py-18">
        <div className="text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Our values
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-zinc-700">
            The principles that guide our work and decisions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-3xl border border-zinc-200 bg-zinc-50 p-6 text-center"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl border border-zinc-200 bg-white text-xl">
                {v.icon}
              </div>
              <h3 className="mt-4 text-base font-semibold text-zinc-900">
                {v.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-700">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
