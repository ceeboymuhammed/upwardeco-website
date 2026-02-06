import { FileText, BarChart3, Users, ShieldCheck } from "lucide-react";

const offers = [
  {
    title: "Project design & scoping",
    desc: "Clear objectives, implementation plan, budget structure, and governance model.",
    icon: FileText,
  },
  {
    title: "Measurement & reporting",
    desc: "Impact metrics, progress updates, and documentation aligned with partner needs.",
    icon: BarChart3,
  },
  {
    title: "Training & community engagement",
    desc: "Facilitation, curriculum delivery, and stakeholder mobilization support.",
    icon: Users,
  },
  {
    title: "Compliance-minded delivery",
    desc: "Standards-aware execution with practical implementation considerations.",
    icon: ShieldCheck,
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What We Offer</h2>
          <p className="mt-3 text-zinc-600">
            A professional partnership experience built around delivery and evidence.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {offers.map((o) => (
            <div key={o.title} className="rounded-2xl bg-brand-bg p-7 ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                  <o.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{o.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{o.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
