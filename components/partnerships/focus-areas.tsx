import { ClipboardList, Recycle, Presentation, TreePine } from "lucide-react";

const areas = [
  {
    title: "Environmental Audits & Advisory",
    desc: "Compliance reviews, baseline assessments, and sustainability roadmaps.",
    icon: ClipboardList,
  },
  {
    title: "Material Recovery & Circular Systems",
    desc: "Diversion programs, recovery partnerships, hubs, and end-market support.",
    icon: Recycle,
  },
  {
    title: "Training & Capacity Building",
    desc: "Corporate training and community programs for measurable behavior change.",
    icon: Presentation,
  },
  {
    title: "Green Spaces & Environmental Projects",
    desc: "Initiatives that improve environmental performance and community value.",
    icon: TreePine,
  },
];

export default function FocusAreas() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Focus Areas</h2>
          <p className="mt-3 text-zinc-600">
            We partner around programs that are operationally realistic and stakeholder-ready.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {areas.map((a) => (
            <div key={a.title} className="rounded-2xl bg-brand-bg p-7 ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-white text-brand-deep ring-1 ring-zinc-200">
                  <a.icon className="h-5 w-5" aria-hidden />
                </div>
                <div>
                  <h3 className="text-base font-semibold">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{a.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
