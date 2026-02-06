import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Reduced waste-to-dumpsite volumes through separation and recovery",
  "Measurable diversion metrics for ESG reporting and partner requirements",
  "Lower contamination improves material value and recovery reliability",
  "Operational model that supports women and youth inclusion",
  "Clear documentation aligned with audit and compliance needs",
];

export default function RecoveryBenefits() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Benefits</h2>
            <p className="mt-3 text-zinc-600">
              Circular systems should be practical and provable. These outcomes are what most
              decision-makers care about.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
            <ul className="space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
                  <span className="text-sm leading-relaxed text-zinc-700">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
