import { Cpu, BarChart3, ShoppingBag, ExternalLink } from "lucide-react";

const techPillars = [
  {
    title: "AI Recovery Intelligence",
    subtitle: "WasteWise AI Engine",
    desc: "Proprietary computer vision and material classification models that identify waste streams, calculate material purity, and optimize recovery yields in real time.",
    icon: Cpu,
    badge: "AI & Deep Tech",
    link: "https://wastewise-ai.vercel.app/",
    cta: "Test AI Model",
  },
  {
    title: "Digital ESG & Compliance SaaS",
    subtitle: "SendWaste.com Platform",
    desc: "Enterprise software for tracking waste logistics, managing disposal workflows, and automatically generating audit-ready compliance reports for government standards.",
    icon: BarChart3,
    badge: "Enterprise SaaS",
    link: "https://sendwaste.com",
    cta: "Explore SaaS",
  },
  {
    title: "Physical Hub & Upcycled Products",
    subtitle: "AURA Storefront & Abuja Facility",
    desc: "Ground-truth processing at our Abuja Material Recovery Hub, converting recovered plastics into high-value upcycled goods sold direct to consumer and corporate partners.",
    icon: ShoppingBag,
    badge: "Circular Retail",
    link: "https://aurastore.com.ng",
    cta: "Visit Storefront",
  },
];

export default function WhatWeDo() {
  return (
    <section id="tech-ecosystem" className="py-16 sm:py-24 bg-zinc-50/50">
      <div className="container-px">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
            Integrated Tech Ecosystem
          </div>
          <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-4xl">
            Software, AI & Physical Infrastructure in Sync
          </h2>
          <p className="mt-3 text-base text-zinc-600 leading-relaxed">
            We don’t just consult—we build technology and operate processing infrastructure that powers verifiable circular supply chains and automated ESG reporting.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {techPillars.map((item) => (
            <div
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl bg-white p-8 shadow-card ring-1 ring-zinc-200/80 hover:ring-brand-accent/50 hover:shadow-xl transition-all duration-300"
            >
              <div>
                {/* Header & Badge */}
                <div className="flex items-center justify-between gap-2">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                    <item.icon className="h-6 w-6" aria-hidden />
                  </div>
                  <span className="rounded-full bg-zinc-100 px-3 py-1 text-[11px] font-semibold text-zinc-700 ring-1 ring-zinc-200">
                    {item.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <div className="mt-6">
                  <span className="text-xs font-semibold uppercase tracking-wider text-brand-accent">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 text-xl font-bold text-zinc-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Interactive CTA Link */}
              <div className="mt-8 pt-4 border-t border-zinc-100">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep hover:text-brand-accent transition-colors"
                >
                  <span>{item.cta}</span>
                  <ExternalLink className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}