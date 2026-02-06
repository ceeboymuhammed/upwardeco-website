export default function MissionVision() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <h2 className="text-2xl font-bold sm:text-3xl">Mission & Vision</h2>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <Card
              title="Mission"
              body="To help organizations reduce waste, cut costs, and meet credible environmental standards through audits, capacity building, and practical circular systems."
            />
            <Card
              title="Vision"
              body="A circular and inclusive green economy where materials are recovered, value is retained, and sustainable livelihoods are strengthened across communities."
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Card({ title, body }: { title: string; body: string }) {
  return (
    <div className="rounded-3xl bg-brand-bg p-7 ring-1 ring-zinc-200">
      <div className="text-sm font-semibold text-brand-deep">{title}</div>
      <p className="mt-3 text-sm leading-relaxed text-zinc-600">{body}</p>
    </div>
  );
}
