import { BarChart2, ShieldCheck, Award, Users } from "lucide-react";

const metrics = [
  {
    value: "10 Tons/Mo",
    label: "Material Recovery Capacity",
    note: "Abuja Hub processing target",
    icon: BarChart2,
    tag: "Physical Hub",
  },
  {
    value: "500+",
    label: "Youths & Women Empowered",
    note: "GreenBridge & enterprise training",
    icon: Users,
    tag: "Livelihoods",
  },
  {
    value: "127",
    label: "Partners and users",
    note: "African Impact Academy winner",
    icon: Award,
    tag: "Venture Backed",
  },
  {
    value: "100%",
    label: "ISO & Ministry Aligned",
    note: "Lead Auditor certified standards",
    icon: ShieldCheck,
    tag: "Compliance",
  },
];

export default function ImpactSnapshot() {
  return (
    <section className="py-16 sm:py-20 bg-zinc-50/50">
      <div className="container-px">
        <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          
          {/* Header */}
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
                Ground-Truth Metrics
              </div>
              <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                Verifiable Environmental & Economic Impact
              </h2>
              <p className="mt-2 text-zinc-600">
                Real-world data tracked across our digital platforms, physical recovery infrastructure, and community programs.
              </p>
            </div>
            
            <div className="text-xs font-semibold text-zinc-500 font-mono">
              Live Impact Sync • 2026
            </div>
          </div>

          {/* Metric Cards Grid */}
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="relative flex flex-col justify-between rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200/80 hover:ring-brand-accent/50 transition-all"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className="grid h-10 w-10 place-items-center rounded-xl bg-white text-brand-deep ring-1 ring-zinc-200">
                      <m.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-zinc-600 ring-1 ring-zinc-200">
                      {m.tag}
                    </span>
                  </div>

                  <div className="mt-6 text-3xl font-extrabold text-brand-deep tracking-tight">
                    {m.value}
                  </div>
                  <div className="mt-1 text-sm font-semibold text-zinc-800">
                    {m.label}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200/60 text-xs font-medium text-zinc-500">
                  {m.note}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}