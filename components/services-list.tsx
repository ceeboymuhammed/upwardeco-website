import Link from "next/link";
import { ClipboardCheck, GraduationCap, Recycle, ArrowRight } from "lucide-react";

const services = [
  {
    id: "environmental-audits",
    title: "Environmental Audits",
    icon: ClipboardCheck,
    bullets: [
      "Baseline assessment & compliance review",
      "Operational gap analysis",
      "Actionable recommendations & reporting",
    ],
  },
  {
    id: "training",
    title: "Sustainability Training",
    icon: GraduationCap,
    bullets: [
      "Workshops tailored to your team",
      "Policy-to-practice learning",
      "Role-based sustainability playbooks",
    ],
  },
  {
    id: "circular-systems",
    title: "Circular Systems",
    icon: Recycle,
    bullets: [
      "Waste reduction & value recovery",
      "Procurement & lifecycle thinking",
      "Circular process design support",
    ],
  },
];

export default function ServicesList() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What we offer
          </h2>
          <p className="mt-3 text-zinc-600">
            Choose a service track below. Each engagement is scoped to your goals,
            timeline, and operations.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {services.map((s) => (
            <div
              key={s.id}
              id={s.id}
              className="scroll-mt-24 rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <ul className="mt-3 space-y-2 text-sm text-zinc-600">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-2">
                        <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-600" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
                    >
                      Request this service <ArrowRight className="h-4 w-4" aria-hidden />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
