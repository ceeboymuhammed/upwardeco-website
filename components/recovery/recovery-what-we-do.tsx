import { CheckCircle2, Layers, Recycle, Route } from "lucide-react";

const items = [
  {
    title: "Segregation at source",
    desc: "Simple, practical separation systems for offices, campuses, facilities, and events.",
    icon: Layers,
  },
  {
    title: "Recovery operations",
    desc: "Sorting, aggregation, and quality control to make materials market-ready and measurable.",
    icon: Recycle,
  },
  {
    title: "Circular pathways",
    desc: "Match recovered materials to circular partners: recyclers, makers, and responsible off-takers.",
    icon: Route,
  },
  {
    title: "Documentation & reporting",
    desc: "Track volumes, diversion, and outcomes with reporting suitable for audits and partners.",
    icon: CheckCircle2,
  },
];

export default function RecoveryWhatWeDo() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div className="max-w-xl">
            <h2 className="text-2xl font-bold sm:text-3xl">What We Do</h2>
            <p className="mt-3 text-zinc-600">
              UpwardEco builds recovery programs that work in the real world—operationally,
              financially, and with measurable outcomes.
            </p>

            <div className="mt-8 rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200">
              <div className="text-sm font-semibold text-brand-deep">Delivery approach</div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                We start by understanding your waste stream, then deploy a clear segregation and
                recovery plan with reporting that supports decision-making.
              </p>
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {items.map((i) => (
              <div
                key={i.title}
                className="rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200"
              >
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                    <i.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold">{i.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{i.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}