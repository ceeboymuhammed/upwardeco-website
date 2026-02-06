const items = [
  "Federal Ministry of Environment (Accredited)",
  "RAN",
  "WAPAN",
  "Food & Beverage Recycling Alliance",
  "NESREA accreditation in progress",
];

export default function Accreditations() {
  return (
    <section className="py-14 sm:py-18">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Accreditations & Memberships
          </h2>
          <p className="mt-3 text-zinc-600">
            Proof points that support trust, compliance, and professional standards.
          </p>
        </div>

        <div className="mt-10 rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <div className="flex flex-wrap gap-2">
            {items.map((t) => (
              <span
                key={t}
                className="rounded-full bg-brand-bg px-4 py-2 text-xs font-semibold text-brand-deep ring-1 ring-zinc-200"
              >
                {t}
              </span>
            ))}
          </div>

          <div className="mt-6 text-sm leading-relaxed text-zinc-600">
            If you’d like documentation for a procurement or due-diligence process, we can provide
            credentials and supporting materials upon request.
          </div>
        </div>
      </div>
    </section>
  );
}
