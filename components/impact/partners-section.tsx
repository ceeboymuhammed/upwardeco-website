const partners = [
  "Federal Ministry of Environment (Accredited)",
  "RAN",
  "WAPAN",
  "Food & Beverage Recycling Alliance",
  "54Collective",
  "People’s Accords",
  "SendWaste.com",
  "NESREA accreditation in progress",
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Partners</h2>
          <p className="mt-3 text-zinc-600">
            We collaborate with institutions, networks, and ecosystem partners to deliver outcomes.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-brand-bg p-8 ring-1 ring-zinc-200">
          <div className="flex flex-wrap gap-2">
            {partners.map((p) => (
              <span
                key={p}
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-zinc-700 ring-1 ring-zinc-200"
              >
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
