import { CheckCircle2 } from "lucide-react";

const points = [
  "Align staff decisions with sustainability goals and operational realities",
  "Improve compliance readiness and audit performance",
  "Reduce waste and cost through better process habits",
  "Build a common language across teams (procurement, ops, HR, facilities)",
  "Support credible reporting with clear roles and responsibilities",
];

export default function WhyTrainingMatters() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
      <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
        <div className="text-sm font-semibold text-zinc-900">The problem we solve</div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          Many organizations have sustainability intentions but lack execution capacity.
          We focus on practical behaviors, tools, and workflows that teams can implement immediately.
        </p>
      </div>

      <ul className="space-y-3">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
            <span className="text-sm text-zinc-800">{p}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
