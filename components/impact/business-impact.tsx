import Link from "next/link";
import { ShieldCheck, TrendingDown, FileText } from "lucide-react";

const items = [
  {
    title: "Compliance confidence",
    desc: "Clear documentation and gap analysis aligned with recognized sustainability expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Reduced waste and operating costs",
    desc: "Practical interventions that reduce leakage, improve efficiency, and support savings.",
    icon: TrendingDown,
  },
  {
    title: "Credible reporting for stakeholders",
    desc: "Outputs that support investors, partners, and leadership decision-making.",
    icon: FileText,
  },
];

export default function BusinessImpact() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="container-px">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Business impact</h2>
            <p className="mt-3 text-zinc-600">
              Outcomes designed for decision-makers: clarity, risk reduction, and implementable plans.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Book a Consultation
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl bg-brand-bg p-7 ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                  <i.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-zinc-900">{i.title}</h3>
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
