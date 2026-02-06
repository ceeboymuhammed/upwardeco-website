import { CheckCircle2 } from "lucide-react";

const points = [
  {
    title: "Credible sustainability execution",
    desc: "Standards-aligned work with clear documentation for stakeholders and reporting.",
  },
  {
    title: "Circular economy delivery capacity",
    desc: "We connect recovery operations, hubs, and value creation for practical results.",
  },
  {
    title: "Inclusive livelihoods focus",
    desc: "Programs designed to empower youth and women through green enterprise pathways.",
  },
  {
    title: "Professional engagement model",
    desc: "Clear scopes, timelines, governance, and measurement from day one.",
  },
];

export default function WhyPartner() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Why Partner</h2>
          <p className="mt-3 text-zinc-600">
            Partnerships are built on delivery, credibility, and shared outcomes.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {points.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-0.5 h-5 w-5 text-brand-accent" aria-hidden />
                <div>
                  <h3 className="text-base font-semibold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
