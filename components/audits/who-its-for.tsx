const audiences = [
  { title: "Manufacturing & industrial facilities", desc: "Waste, water, and energy optimization with risk-gap controls." },
  { title: "Food & beverage businesses", desc: "Material recovery, compliance readiness, and operational efficiency." },
  { title: "Institutions & campuses", desc: "Baseline assessment and practical sustainability programs." },
  { title: "Retail, hospitality & commercial operations", desc: "Improve performance and reporting while reducing costs." },
  { title: "Development partners & programs", desc: "Evidence-based assessment with measurable outcomes." },
  { title: "Organizations starting sustainability reporting", desc: "Build a credible baseline and prioritized roadmap." },
];

export default function WhoItsFor() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Who it’s for</h2>
          <p className="mt-3 text-zinc-600">
            Designed for organizations that want credible sustainability performance and defensible documentation.
          </p>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {audiences.map((a) => (
            <div key={a.title} className="rounded-2xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
              <h3 className="text-base font-semibold text-zinc-900">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
