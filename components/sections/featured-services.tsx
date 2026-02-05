import Link from "next/link";
import { ArrowRight, ClipboardList, Presentation, Truck, TreePine } from "lucide-react";

const cards = [
  { title: "Environmental Audit for Businesses", icon: ClipboardList, desc: "Audit, compliance review, and reporting with actionable recommendations." },
  { title: "Corporate Sustainability Training", icon: Presentation, desc: "Practical, role-based training for teams and leadership." },
  { title: "Material Recovery Programs", icon: Truck, desc: "Recovery planning, partnerships, and operational support for diversion." },
  { title: "Green Space Creation", icon: TreePine, desc: "Green space initiatives that improve environmental performance and community value." },
];

export default function FeaturedServices() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Featured Services</h2>
            <p className="mt-3 text-zinc-600">
              Built for decision-makers who need credible results and clean documentation.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
          >
            Request a Proposal <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <div className="flex items-start gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-brand-bg text-brand-deep ring-1 ring-zinc-200">
                  <c.icon className="h-5 w-5" aria-hidden />
                </div>
                <div className="min-w-0">
                  <h3 className="text-base font-semibold">{c.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">{c.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
