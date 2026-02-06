const partners = [
  "54Collective",
  "People’s Accords",
  "SendWaste.com",
];

export default function PartnersSupporters() {
  return (
    <section className="py-14 pb-16 sm:py-18 sm:pb-20">
      <div className="container-px">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <h2 className="text-2xl font-bold sm:text-3xl">Partners & Supporters</h2>
            <p className="mt-3 text-zinc-600">
              We collaborate with organizations aligned with circularity, livelihoods, and measurable impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-2">
              {partners.map((p) => (
                <span
                  key={p}
                  className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-zinc-800 ring-1 ring-zinc-200"
                >
                  {p}
                </span>
              ))}
            </div>

            <p className="mt-6 text-sm leading-relaxed text-zinc-600">
              Interested in partnering with UpwardEco? We work with businesses, institutions, and
              development partners on audits, training, and circular programs.
            </p>
          </div>

          {/* Logo grid placeholder (swap to real logos later) */}
          <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
            <div className="text-sm font-semibold text-zinc-900">Partner logos</div>
            <p className="mt-2 text-sm text-zinc-600">
              Replace these placeholders with real brand marks as you confirm usage permissions.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
              {Array.from({ length: 6 }).map((_, idx) => (
                <div
                  key={idx}
                  className="grid h-20 place-items-center rounded-2xl bg-brand-bg text-xs font-semibold text-zinc-500 ring-1 ring-zinc-200"
                >
                  Logo
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
