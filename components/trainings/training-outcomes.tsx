import { CheckCircle2 } from "lucide-react";

const outcomes = [
  "Role-based responsibilities and quick-reference guides",
  "Improved waste management and internal compliance habits",
  "A short action plan with owners, timelines, and KPIs",
  "Templates: checklists, SOP starters, and tracking sheets",
  "Better readiness for audits and partner requirements",
];

export default function TrainingOutcomes() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
      <div className="grid gap-4 lg:grid-cols-2">
        <div>
          <div className="text-sm font-semibold text-zinc-900">Expected outcomes</div>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            Training is designed to deliver practical outputs your team can use immediately.
          </p>
        </div>

        <ul className="space-y-3">
          {outcomes.map((o) => (
            <li key={o} className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
              <span className="text-sm text-zinc-800">{o}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
