import { FileCheck2, Map, ShieldAlert } from "lucide-react";

const deliverables = [
  {
    title: "Audit report",
    desc: "Findings, evidence summary, and performance baseline across the assessment scope.",
    icon: FileCheck2,
  },
  {
    title: "Roadmap & action plan",
    desc: "Prioritized recommendations with timelines, owners, and expected outcomes.",
    icon: Map,
  },
  {
    title: "Risk gaps & corrective actions",
    desc: "Key exposure points, compliance risks, and practical corrective measures.",
    icon: ShieldAlert,
  },
];

export default function Deliverables() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Deliverables</h2>
          <p className="mt-3 text-zinc-600">
            Everything needed to make decisions, communicate results, and start implementation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {deliverables.map((d) => (
            <div key={d.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <d.icon className="h-6 w-6 text-brand-accent" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-zinc-900">{d.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{d.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-brand-bg p-8 ring-1 ring-zinc-200 sm:p-10">
          <div className="grid gap-6 lg:grid-cols-3 lg:items-center">
            <div className="lg:col-span-2">
              <div className="text-sm font-semibold text-zinc-900">
                Optional add-ons (as needed)
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Staff briefing, KPI tracking template, supplier / contractor alignment, and
                implementation support.
              </p>
            </div>
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-zinc-200">
              <div className="text-sm font-semibold text-zinc-900">Next step</div>
              <p className="mt-2 text-sm text-zinc-600">
                Tell us your industry + site size to receive a scoped proposal.
              </p>
              <a
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
              >
                Request a Proposal
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
