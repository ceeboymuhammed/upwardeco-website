import Link from "next/link";
import { ClipboardCheck, GraduationCap, Recycle } from "lucide-react";

const services = [
  {
    title: "Environmental Audits",
    desc: "Baseline impact, spot gaps, and map your next steps with clear reporting.",
    icon: ClipboardCheck,
    href: "/services#environmental-audits",
  },
  {
    title: "Sustainability Training",
    desc: "Hands-on workshops that turn policy into everyday habits and decisions.",
    icon: GraduationCap,
    href: "/services#training",
  },
  {
    title: "Circular Systems",
    desc: "Design processes that reduce waste and recover value across operations.",
    icon: Recycle,
    href: "/services#circular-systems",
  },
];

export default function ServicesOverview() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="flex items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Services that move you forward
            </h2>
            <p className="mt-3 text-zinc-600">
              A quick overview of what UpwardEco offers—pick a track and go
              deeper. {/* 3-column overview per wireframe */}{" "}
            </p>
          </div>
          <Link
            href="/services"
            className="hidden rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50 sm:inline-flex"
          >
            View all services
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {services.map((s) => (
            <Link
              key={s.title}
              href={s.href}
              className="group rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100">
                  <s.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {s.desc}
                  </p>
                  <span className="mt-4 inline-flex text-sm font-semibold text-emerald-700 group-hover:underline">
                    Learn more →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            href="/services"
            className="inline-flex rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
          >
            View all services
          </Link>
        </div>
      </div>
    </section>
  );
}
