import Link from "next/link";
import { Users, GraduationCap, Briefcase } from "lucide-react";

const highlights = [
  {
    title: "GreenBridge: 500+ youths trained",
    desc: "Skills development for sustainability pathways and green livelihood opportunities.",
    icon: GraduationCap,
  },
  {
    title: "Inclusive livelihoods",
    desc: "Women empowered through green enterprise and community-linked circular value chains.",
    icon: Users,
  },
  {
    title: "Employability + enterprise",
    desc: "Training designed to translate into work-readiness and practical implementation capacity.",
    icon: Briefcase,
  },
];

export default function SocialImpact() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Social impact</h2>
            <p className="mt-3 text-zinc-600">
              Building a circular economy that is not only efficient—but inclusive.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/volunteer"
                className="rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Volunteer
              </Link>
              <Link
                href="/partnerships"
                className="rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
              >
                Partner With Us
              </Link>
            </div>
          </div>

          <div className="grid gap-5">
            {highlights.map((h) => (
              <div key={h.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
                <div className="flex items-start gap-4">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                    <h.icon className="h-5 w-5" aria-hidden />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-zinc-900">{h.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{h.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
