const stats = [
  { value: "3+ tons", label: "materials diverted monthly", note: "Target: 10 tons/month" },
  { value: "500+ youths", label: "trained through GreenBridge", note: "skills + employability" },
  { value: "Women", label: "empowered through green enterprise", note: "inclusive livelihoods" },
  { value: "Businesses", label: "supported in sustainability", note: "audits, training, systems" },
];

export default function BigNumbers() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Big numbers</h2>
          <p className="mt-3 text-zinc-600">
            A snapshot of our current outcomes and the direction we’re scaling toward.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200"
            >
              <div className="text-3xl font-bold text-brand-deep">{s.value}</div>
              <div className="mt-2 text-sm font-semibold text-zinc-900">{s.label}</div>
              <div className="mt-2 text-xs text-zinc-600">{s.note}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
