import { Leaf, Recycle, ClipboardCheck } from "lucide-react";

const items = [
  {
    title: "Waste diversion & recovery",
    desc: "We reduce leakage to landfill by improving collection, sorting, and recovery pathways.",
    icon: Recycle,
  },
  {
    title: "Environmental performance visibility",
    desc: "Audits and reporting help organizations identify gaps, risks, and improvement opportunities.",
    icon: ClipboardCheck,
  },
  {
    title: "Greener spaces & cleaner communities",
    desc: "We support initiatives that improve local environmental quality and public outcomes.",
    icon: Leaf,
  },
];

export default function EnvironmentalImpact() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Environmental impact</h2>
          <p className="mt-3 text-zinc-600">
            Outcomes that reduce waste, improve compliance, and support better environmental performance.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-brand-bg p-7 ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                  <i.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{i.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{i.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
