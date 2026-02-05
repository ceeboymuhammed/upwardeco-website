import { Droplets, Zap, Trash2 } from "lucide-react";

const pillars = [
  {
    title: "Waste",
    icon: Trash2,
    bullets: [
      "Waste streams mapping (types, volumes, handling)",
      "Segregation, storage, hauling, recovery opportunities",
      "Compliance alignment and leakage reduction",
    ],
  },
  {
    title: "Water",
    icon: Droplets,
    bullets: [
      "Usage baseline and efficiency opportunities",
      "Process water, discharge practices, risk points",
      "Monitoring plan and improvement actions",
    ],
  },
  {
    title: "Energy",
    icon: Zap,
    bullets: [
      "Energy consumption profile and hotspots",
      "Quick wins + medium-term efficiency upgrades",
      "Measurement and reporting recommendations",
    ],
  },
];

export default function WhatWeAssess() {
  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">What we assess</h2>
          <p className="mt-3 text-zinc-600">
            A focused scope across core operational areas—structured, evidence-based,
            and tailored to your industry.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <div className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-bg ring-1 ring-zinc-200">
                  <p.icon className="h-5 w-5 text-brand-deep" aria-hidden />
                </div>
                <h3 className="text-base font-semibold">{p.title}</h3>
              </div>

              <ul className="mt-5 space-y-3">
                {p.bullets.map((b) => (
                  <li key={b} className="text-sm text-zinc-600">
                    <span className="mr-2 text-brand-accent">•</span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
