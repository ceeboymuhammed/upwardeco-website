const items = [
  { value: "3+ tons", label: "materials diverted monthly", note: "target: 10 tons" },
  { value: "500+ youths", label: "trained through GreenBridge" },
  { value: "Women", label: "empowered through green enterprise" },
  { value: "Businesses", label: "supported with sustainability actions" },
];

export default function ImpactBase() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Current Impact Base</h2>
            <p className="mt-3 text-zinc-600">
              A foundation of measurable work that can be scaled through partnerships.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {items.map((m) => (
              <div key={m.label} className="rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200">
                <div className="text-2xl font-bold text-brand-deep">{m.value}</div>
                <div className="mt-2 text-sm font-semibold text-zinc-800">{m.label}</div>
                {m.note ? <div className="mt-1 text-xs text-zinc-600">{m.note}</div> : null}
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm text-zinc-600">
            We can co-design additional indicators based on your priorities (ESG, CSR, livelihoods, diversion, compliance).
          </div>
        </div>
      </div>
    </section>
  );
}
