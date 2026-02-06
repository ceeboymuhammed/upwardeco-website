const types = [
  {
    title: "Program Co-Delivery",
    desc: "Co-design and implement recovery, training, and circular economy initiatives.",
    who: "Development partners, institutions, NGOs, city actors",
  },
  {
    title: "Corporate Partnerships (CSR/ESG)",
    desc: "Sponsor or co-implement high-impact programs with clear reporting outcomes.",
    who: "Corporates, brands, industry groups",
  },
  {
    title: "Technical Partnership",
    desc: "Joint technical work across audits, standards alignment, and implementation planning.",
    who: "Consultancies, technical agencies, academia",
  },
  {
    title: "Supply Chain & Recovery Partnerships",
    desc: "Enable material recovery systems, aggregation, and end-market value chains.",
    who: "Producers, recyclers, aggregators, logistics partners",
  },
];

export default function PartnershipTypes() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Partnership Types</h2>
          <p className="mt-3 text-zinc-600">
            Flexible partnership models that fit your objectives and governance needs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 lg:grid-cols-2">
          {types.map((t) => (
            <div key={t.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{t.desc}</p>
              <div className="mt-4 rounded-xl bg-brand-bg p-4 text-sm text-zinc-700 ring-1 ring-zinc-200">
                <span className="font-semibold text-zinc-900">Best for: </span>
                {t.who}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
