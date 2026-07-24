import Link from "next/link";
import { ArrowRight, FileCheck, Layers, Factory, GraduationCap } from "lucide-react";

const platformModules = [
  {
    title: "Automated Compliance & Audit Engine",
    module: "SendWaste Module",
    icon: FileCheck,
    desc: "Digital workflow software that logs waste streams and automatically generates ISO 14001 and government-aligned regulatory audit reports.",
  },
  {
    title: "AI Material Classification Engine",
    module: "WasteWise AI Module",
    icon: Layers,
    desc: "Machine learning models designed to scan commercial waste streams, compute material purity ratings, and optimize recycling diversion rates.",
  },
  {
    title: "Supply Chain Traceability & Proof of Recovery",
    module: "Infrastructure Telemetry",
    icon: Factory,
    desc: "Integrates real-world material recovery telemetry from our Abuja Hub into enterprise ESG dashboards, guaranteeing verifiable zero-landfill reporting.",
  },
  {
    title: "Enterprise Capacity & User Onboarding",
    module: "Customer Success",
    icon: GraduationCap,
    desc: "Structured platform onboarding, role-based workforce training, and corporate ESG compliance execution frameworks.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 sm:py-24">
      <div className="container-px">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
              Core Platform Modules
            </div>
            <h2 className="mt-3 text-2xl font-bold sm:text-4xl text-zinc-900">
              Enterprise Software Capabilities
            </h2>
            <p className="mt-2 text-zinc-600">
              Built for facility managers, ESG directors, and enterprise decision-makers who need automated compliance and verifiable data.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all shadow-sm"
          >
            Book a Demo <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {platformModules.map((c) => (
            <div
              key={c.title}
              className="group rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200 hover:ring-brand-accent/50 hover:shadow-md transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-brand-accent">
                    {c.module}
                  </span>
                  <h3 className="mt-0.5 text-base font-semibold text-zinc-900">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {c.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}