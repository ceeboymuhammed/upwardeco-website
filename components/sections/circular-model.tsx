import { ArrowRight, Truck, Cpu, Factory, ShoppingBag, FileCheck } from "lucide-react";

const flowSteps = [
  {
    step: "01",
    title: "Digital Logistics & Intake",
    platform: "SendWaste.com",
    desc: "Commercial waste scheduling, real-time collection logging, and supply chain tracking.",
    icon: Truck,
    badge: "SaaS",
  },
  {
    step: "02",
    title: "AI Stream Analysis",
    platform: "WasteWise AI",
    desc: "Automated material identification and purity grading using vision classification models.",
    icon: Cpu,
    badge: "AI Engine",
  },
  {
    step: "03",
    title: "Physical Hub & Upcycling",
    platform: "Abuja Recovery Hub",
    desc: "Ground-truth processing, sorting, and manufacturing of recovered polymer materials.",
    icon: Factory,
    badge: "Physical Facility",
  },
  {
    step: "04",
    title: "Closed-Loop E-Commerce",
    platform: "AURA Store",
    desc: "D2C and B2B upcycled product retail, creating sustainable revenue and green jobs.",
    icon: ShoppingBag,
    badge: "Storefront",
  },
];

export default function CircularModel() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="container-px">
        
        {/* Header */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
            Closed-Loop Architecture
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            Our Hardware + Software Circular Engine
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            A end-to-end circular pipeline that connects digital waste tracking, AI sorting, physical recovery hubs, and consumer upcycling.
          </p>
        </div>

        {/* Interactive Flow Grid */}
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {flowSteps.map((item, idx) => (
            <div
              key={item.step}
              className="relative flex flex-col justify-between rounded-2xl bg-zinc-50 p-6 ring-1 ring-zinc-200 hover:ring-brand-accent/50 hover:bg-white hover:shadow-lg transition-all duration-300"
            >
              <div>
                {/* Step Number & Badge */}
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold text-brand-accent">
                    STAGE {item.step}
                  </span>
                  <span className="rounded-full bg-white px-2.5 py-0.5 text-[10px] font-semibold text-zinc-700 ring-1 ring-zinc-200">
                    {item.badge}
                  </span>
                </div>

                {/* Icon & Title */}
                <div className="mt-5 flex items-center gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-deep text-white shadow-sm">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold text-brand-deep uppercase tracking-wider block">
                      {item.platform}
                    </span>
                    <h3 className="text-base font-bold text-zinc-900 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                {/* Description */}
                <p className="mt-4 text-xs leading-relaxed text-zinc-600">
                  {item.desc}
                </p>
              </div>

              {/* Connecting Arrow for Desktop */}
              {idx < flowSteps.length - 1 && (
                <div className="hidden lg:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                  <div className="grid h-6 w-6 place-items-center rounded-full bg-white text-zinc-400 ring-1 ring-zinc-200 shadow-sm">
                    <ArrowRight className="h-3.5 w-3.5" />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Outcome Callout Box */}
        <div className="mt-10 rounded-2xl bg-brand-bg p-6 ring-1 ring-zinc-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-deep/10 text-brand-deep">
              <FileCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm font-bold text-brand-deep">
                End Result: Verifiable ESG Data & Zero Waste to Landfill
              </p>
              <p className="text-xs text-zinc-600">
                Every kilogram processed feeds back into SendWaste.com to produce audit-ready corporate compliance reports.
              </p>
            </div>
          </div>
          <a
            href="https://sendwaste.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all"
          >
            See SendWaste Demo →
          </a>
        </div>

      </div>
    </section>
  );
}