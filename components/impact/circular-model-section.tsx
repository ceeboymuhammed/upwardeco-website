import { ArrowRight } from "lucide-react";

const flow = ["Waste", "Recovery", "Hubs", "Products", "Aura Store", "Livelihoods"];

export default function CircularModelSection() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Circular model</h2>
          <p className="mt-3 text-zinc-600">
            A simple, scalable flow that connects recovery operations to products and livelihoods.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
          <div className="flex flex-wrap items-center gap-3">
            {flow.map((s, idx) => (
              <div key={s} className="flex items-center gap-3">
                <div className="rounded-2xl bg-brand-bg px-4 py-3 text-sm font-semibold text-brand-deep ring-1 ring-zinc-200">
                  {s}
                </div>
                {idx < flow.length - 1 ? (
                  <ArrowRight className="h-4 w-4 text-zinc-400" aria-hidden />
                ) : null}
              </div>
            ))}
          </div>

          <div className="mt-6 text-sm leading-relaxed text-zinc-600">
            This model supports business performance (diversion + compliance) while enabling inclusive green enterprise.
          </div>
        </div>
      </div>
    </section>
  );
}
