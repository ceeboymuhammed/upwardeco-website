import { CheckCircle2 } from "lucide-react";

const points = [
  "Government accredited consultant",
  "Practical implementation experience",
  "Integrated advisory + recovery model",
  "NESREA accreditation in progress",
];

export default function WhyChoose() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Why Choose UpwardEco</h2>
            <p className="mt-3 text-zinc-600">
              Professional, evidence-based consulting with real delivery capacity.
            </p>

            <ul className="mt-8 space-y-3">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
                  <span className="text-sm text-zinc-800">{p}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
            <div className="text-sm font-semibold text-zinc-900">What you get</div>
            <div className="mt-3 text-sm leading-relaxed text-zinc-600">
              Clear audit documentation, practical implementation guidance, and support that aligns with
              global expectations for sustainability performance and reporting.
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-brand-bg p-5 ring-1 ring-zinc-200">
                <div className="text-sm font-semibold text-brand-deep">Trustworthy</div>
                <div className="mt-1 text-xs text-zinc-600">Accreditation-driven + standards-aligned.</div>
              </div>
              <div className="rounded-2xl bg-brand-bg p-5 ring-1 ring-zinc-200">
                <div className="text-sm font-semibold text-brand-deep">Actionable</div>
                <div className="mt-1 text-xs text-zinc-600">Plans that teams can actually execute.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
