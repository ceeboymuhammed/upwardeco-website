import { Building2, GraduationCap, Users, Handshake } from "lucide-react";

const audiences = [
  {
    title: "Businesses & Corporates",
    desc: "Operations, procurement, facilities, HSE, leadership teams.",
    icon: Building2,
  },
  {
    title: "Institutions",
    desc: "Schools, hospitals, campuses, public and private institutions.",
    icon: Users,
  },
  {
    title: "Development Partners",
    desc: "Programs requiring measurable outcomes and capacity building.",
    icon: Handshake,
  },
  {
    title: "Individuals",
    desc: "Young professionals and sustainability-conscious learners.",
    icon: GraduationCap,
  },
];

export default function WhoItsFor() {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {audiences.map((a) => (
        <div key={a.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
          <div className="flex items-start gap-4">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
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
  );
}
