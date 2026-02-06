import { AlertTriangle, Trash2, Truck } from "lucide-react";

const points = [
  {
    title: "Most waste goes to dumpsites",
    desc: "Recoverable materials are mixed, collected, and transported as trash—reducing value and increasing costs.",
    icon: Trash2,
  },
  {
    title: "Low segregation means low recovery",
    desc: "Without separation at source and reliable sorting, diversion remains inconsistent and difficult to measure.",
    icon: AlertTriangle,
  },
  {
    title: "High leakage, high risk",
    desc: "Waste leakage affects compliance, reputational risk, and environmental outcomes—especially for institutions.",
    icon: Truck,
  },
];

export default function RecoveryProblem() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">The Problem</h2>
          <p className="mt-3 text-zinc-600">
            When waste flows directly to dumpsites, organizations lose recoverable value and
            gain avoidable environmental and compliance risks.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {points.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                  <p.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
