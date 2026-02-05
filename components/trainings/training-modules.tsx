import { ClipboardCheck, Recycle, Leaf, ShieldCheck, BarChart3, Users } from "lucide-react";

const modules = [
  { title: "Sustainability Fundamentals", desc: "Core concepts, terminology, and practical workplace relevance.", icon: Leaf },
  { title: "Waste & Materials Management", desc: "Segregation, collection, diversion planning, and recovery pathways.", icon: Recycle },
  { title: "Environmental Compliance Basics", desc: "What compliance means in practice and how to prepare for assessments.", icon: ShieldCheck },
  { title: "Audit Readiness & Evidence", desc: "Documents, controls, and behavior change that improves audit outcomes.", icon: ClipboardCheck },
  { title: "Sustainability Metrics & Reporting", desc: "KPIs, simple dashboards, and making data usable for decisions.", icon: BarChart3 },
  { title: "Change Management & Culture", desc: "Driving adoption across teams and sustaining new habits.", icon: Users },
];

export default function TrainingModules() {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {modules.map((m) => (
        <div key={m.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
              <m.icon className="h-5 w-5" aria-hidden />
            </div>
            <div className="min-w-0">
              <h3 className="text-base font-semibold">{m.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{m.desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
