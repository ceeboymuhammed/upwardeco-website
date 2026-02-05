import { Scale, FileText, AlertTriangle } from "lucide-react";

const items = [
  {
    title: "Regulatory readiness",
    desc: "Build evidence for compliance, permitting, and inspections with clear documentation.",
    icon: Scale,
  },
  {
    title: "Better reporting & governance",
    desc: "Strengthen internal controls, policies, and reporting for stakeholders and partners.",
    icon: FileText,
  },
  {
    title: "Risk reduction",
    desc: "Identify risk gaps early and prevent operational, reputational, and financial exposure.",
    icon: AlertTriangle,
  },
];

export default function WhyAuditsMatter() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Why audits matter</h2>
          <p className="mt-3 text-zinc-600">
            Environmental audits make sustainability measurable—turning expectations into
            clear actions and defensible evidence.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <i.icon className="h-6 w-6 text-brand-accent" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{i.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
