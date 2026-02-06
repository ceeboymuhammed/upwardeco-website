import { ArrowRight, Users, Warehouse, HandHeart } from "lucide-react";

const steps = [
  { title: "Collection points", icon: Warehouse, desc: "Clear bins + signage to reduce mixing." },
  { title: "Recovery hub", icon: Warehouse, desc: "Sorting, aggregation, and quality control." },
  { title: "Circular partners", icon: ArrowRight, desc: "Off-takers, recyclers, makers, reprocessors." },
  { title: "Inclusive livelihoods", icon: HandHeart, desc: "Women and youth roles across operations." },
];

export default function RecoveryHubModel() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Our Hub Model</h2>
          <p className="mt-3 text-zinc-600">
            A structured operational hub that improves recovery quality while enabling
            women and youth inclusion across the value chain.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <div className="grid gap-5 md:grid-cols-2">
            {steps.map((s) => (
              <div key={s.title} className="rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                    <s.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{s.title}</div>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{s.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl bg-white p-6 ring-1 ring-zinc-200">
            <div className="flex items-start gap-3">
              <Users className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
              <p className="text-sm leading-relaxed text-zinc-700">
                Inclusion is designed into operations: training, collection logistics, sorting roles,
                reporting, and community enterprise support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
