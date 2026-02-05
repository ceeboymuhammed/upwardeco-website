import { BadgeCheck, Briefcase, Layers3, Timer } from "lucide-react";

const points = [
  {
    title: "Government accredited consultant",
    desc: "A compliance-first approach grounded in credible documentation and evidence.",
    icon: BadgeCheck,
  },
  {
    title: "Practical implementation experience",
    desc: "Recommendations are designed to work in real operations—no theory decks.",
    icon: Briefcase,
  },
  {
    title: "Integrated advisory + recovery model",
    desc: "We connect audit insights to recovery programs and circular interventions.",
    icon: Layers3,
  },
  {
    title: "NESREA accreditation in progress",
    desc: "We operate with a standards mindset and continuous strengthening of credentials.",
    icon: Timer,
  },
];

export default function WhyUpwardEco() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Why UpwardEco</h2>
            <p className="mt-3 text-zinc-600">
              Corporate-consultancy delivery standards with on-ground operational experience.
            </p>

            <div className="mt-8 space-y-4">
              {points.map((p) => (
                <div key={p.title} className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-zinc-200">
                  <div className="flex items-start gap-4">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-brand-bg ring-1 ring-zinc-200">
                      <p.icon className="h-5 w-5 text-brand-deep" aria-hidden />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-zinc-900">{p.title}</div>
                      <div className="mt-1 text-sm leading-relaxed text-zinc-600">{p.desc}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-brand-deep p-8 text-white shadow-card">
            <div className="text-sm font-semibold text-white/90">What clients typically value</div>
            <ul className="mt-5 space-y-3 text-sm text-white/90">
              <li>• Clear scope and minimal disruption to operations</li>
              <li>• Evidence-based findings with prioritized actions</li>
              <li>• Practical recommendations tied to cost and compliance</li>
              <li>• Support beyond the report (optional implementation)</li>
            </ul>

            <div className="mt-7 rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
              <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                Start point
              </div>
              <div className="mt-1 text-sm font-semibold">
                Book a short consultation to scope your audit.
              </div>
              <a
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
