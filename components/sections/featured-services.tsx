import Link from "next/link";
import { ArrowRight, FileCheck, Layers, Factory, GraduationCap } from "lucide-react";

const cards = [
  {
    title: "ISO & Regulatory Compliance Audits",
    tag: "Powered by SendWaste.com",
    icon: FileCheck,
    desc: "Government-accredited environmental audits and compliance reviews using digital tracking to produce audit-ready ESG reports aligned with NESREA and ISO 14001 standards.",
  },
  {
    title: "Closed-Loop Material Recovery Programs",
    tag: "AI-Stream Classification",
    icon: Layers,
    desc: "End-to-end recovery systems for commercial facilities and manufacturers, utilizing WasteWise AI to identify, separate, and divert waste streams from landfills.",
  },
  {
    title: "Hub Operations & Processing Infrastructure",
    tag: "Abuja Facility Processing",
    icon: Factory,
    desc: "Direct physical material processing and upcycling capacity at our Abuja Material Recovery Hub, providing verifiable supply chain traceability for corporate partners.",
  },
  {
    title: "Corporate Sustainability & Capacity Building",
    tag: "Workforce Training",
    icon: GraduationCap,
    desc: "Practical, role-based capacity training that helps executive teams and operations staff implement circular practices and regulatory compliance on the ground.",
  },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
              Enterprise Solutions
            </div>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Tech-Assisted Services & Infrastructure
            </h2>
            <p className="mt-2 text-zinc-600">
              Built for commercial decision-makers who need verifiable compliance documentation and physical recovery outcomes.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95 transition-all shadow-sm"
          >
            Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
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
                    {c.tag}
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