const audiences = [
  "Corporate offices & business facilities",
  "Institutions (schools, hospitals, campuses)",
  "Food & beverage businesses and producers",
  "Events & venues",
  "Development partners supporting circular economy programs",
];

export default function RecoveryWhoFor() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who It’s For</h2>
          <p className="mt-3 text-zinc-600">
            Organizations that want measurable diversion, stronger compliance posture,
            and credible circular pathways.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {audiences.map((a) => (
            <div
              key={a}
              className="rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200"
            >
              <div className="text-sm font-semibold text-zinc-900">{a}</div>
              <div className="mt-2 text-sm text-zinc-600">
                Designed for real operations—lightweight setup, clear roles, consistent reporting.
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
