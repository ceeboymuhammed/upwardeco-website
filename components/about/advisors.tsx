const advisors = [
  { name: "Francis Oguaju", focus: "Advisory" },
  { name: "Ijeoma Igwebike", focus: "Advisory" },
];

export default function Advisors() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Advisors</h2>
            <p className="mt-3 text-zinc-600">
              We work with experienced advisors who strengthen governance, quality, and growth.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {advisors.map((a) => (
              <div
                key={a.name}
                className="rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200"
              >
                <div className="text-sm font-semibold text-zinc-900">{a.name}</div>
                <div className="mt-1 text-xs font-semibold uppercase tracking-wide text-zinc-600">
                  {a.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
