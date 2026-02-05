import { ClipboardCheck, Recycle, GraduationCap } from "lucide-react";

const items = [
  {
    title: "Environmental Audits & Advisory",
    desc: "Assess compliance, identify gaps, and build a clear roadmap aligned with global standards.",
    icon: ClipboardCheck,
  },
  {
    title: "Circular Economy & Material Recovery",
    desc: "Design recovery systems, reduce waste leakage, and create value from materials.",
    icon: Recycle,
  },
  {
    title: "Sustainability Training & Capacity Building",
    desc: "Corporate and individual training that translates policy into practical implementation.",
    icon: GraduationCap,
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-4xl">What We Do</h2>
          <p className="mt-3 text-zinc-600">
            Clear, structured support for organizations building credible sustainability programs.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                  <i.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{i.title}</h3>
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
