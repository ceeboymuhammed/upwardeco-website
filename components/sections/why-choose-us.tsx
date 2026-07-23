import { CheckCircle2, ShieldCheck, Cpu, Factory, FileSpreadsheet } from "lucide-react";

const valueProps = [
  {
    title: "Government-Accredited Advisory",
    desc: "Federal Ministry of Environment accredited consultants with ISO 14001:2026 Lead Auditor expertise and active NESREA alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Proprietary Climate-Tech Engine",
    desc: "Powered by WasteWise AI for stream classification and SendWaste.com for automated digital waste logistics tracking.",
    icon: Cpu,
  },
  {
    title: "Ground-Truth Infrastructure",
    desc: "Backed by real physical processing capacity at our Abuja Material Recovery & Upcycling Hub, ensuring supply chain traceability.",
    icon: Factory,
  },
  {
    title: "Audit-Ready ESG Reporting",
    desc: "Generate verifiable, standards-aligned environmental documentation engineered for corporate decision-makers and global investors.",
    icon: FileSpreadsheet,
  },
];

export default function WhyChoose() {
  return (
    <section className="py-16 sm:py-24 bg-zinc-50/50">
      <div className="container-px">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Core Differentiators */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
              Defensible Advantage
            </div>
            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl text-zinc-900">
              Why Institutional Partners & Enterprises Choose UpwardEco
            </h2>
            <p className="mt-3 text-base text-zinc-600 leading-relaxed">
              We bridge the gap between regulatory compliance and physical execution by deploying software, AI, and processing infrastructure under one unified framework.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-2">
              {valueProps.map((item) => (
                <div key={item.title} className="flex gap-3.5">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                    <item.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-900">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-zinc-600">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Institutional Outcomes Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200/80 relative overflow-hidden">
              <div className="absolute top-0 right-0 h-24 w-24 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-brand-accent">
                Enterprise Guarantee
              </div>
              <h3 className="mt-2 text-xl font-bold text-zinc-900">
                Data Precision Meets Regulatory Rigor
              </h3>
              <p className="mt-3 text-xs leading-relaxed text-zinc-600">
                Whether you need to fulfill state environmental compliance or audit international supply chain waste streams, our integrated technology ensures clean documentation without operational friction.
              </p>

              <div className="mt-6 space-y-3 pt-6 border-t border-zinc-100">
                <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  <span>ISO 14001:2026 Aligned Audit Frameworks</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  <span>Verified Supply Chain Material Traceability</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs font-semibold text-zinc-800">
                  <CheckCircle2 className="h-4 w-4 text-brand-accent shrink-0" />
                  <span>Direct Closed-Loop Product Offtake (AURA Store)</span>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-brand-bg p-4 ring-1 ring-zinc-200/80 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold text-brand-deep">Ready for Compliance Audit?</p>
                  <p className="text-[11px] text-zinc-600">Book an initial environmental assessment.</p>
                </div>
                <a
                  href="/contact"
                  className="rounded-lg bg-brand-deep px-3.5 py-2 text-xs font-semibold text-white hover:opacity-95 transition-all"
                >
                  Get Started
                </a>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}