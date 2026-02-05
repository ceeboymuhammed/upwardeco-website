"use client";

type PackageKey = "lite" | "standard" | "multisite";

const packages: Record<
  PackageKey,
  {
    name: string;
    bestFor: string;
    highlights: string[];
  }
> = {
  lite: {
    name: "Lite",
    bestFor: "Single site, quick baseline + priority actions",
    highlights: [
      "Site walk-through + document review",
      "Waste / water / energy baseline (high-level)",
      "Findings summary + priority actions",
    ],
  },
  standard: {
    name: "Standard",
    bestFor: "Full audit for compliance readiness + efficiency gains",
    highlights: [
      "Deeper data review + interviews",
      "Risk gaps + corrective actions",
      "Detailed report + roadmap with timeline",
    ],
  },
  multisite: {
    name: "Multi-site",
    bestFor: "Organizations with multiple locations and consolidated reporting",
    highlights: [
      "Site-level findings per location",
      "Cross-site benchmarking",
      "Consolidated roadmap + governance model",
    ],
  },
};

const features: Array<{
  label: string;
  lite: boolean | string;
  standard: boolean | string;
  multisite: boolean | string;
}> = [
  { label: "Discovery & Scoping Call", lite: true, standard: true, multisite: true },
  { label: "Site Walk-through", lite: true, standard: true, multisite: true },
  {
    label: "Waste, Water, Energy Assessment",
    lite: "High-level",
    standard: "Detailed",
    multisite: "Detailed",
  },
  {
    label: "Risk Gaps + Corrective Actions",
    lite: "Basic",
    standard: "Comprehensive",
    multisite: "Comprehensive",
  },
  { label: "Report + Roadmap", lite: true, standard: true, multisite: true },
  { label: "Multi-site Benchmarking", lite: false, standard: false, multisite: true },
];

export default function AuditPackages({
  onRequestPackage,
}: {
  onRequestPackage: (pkg: PackageKey) => void;
}) {
  return (
    <section id="packages" className="bg-white py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">Audit Packages</h2>
          <p className="mt-3 text-zinc-600">
            Choose a starting package. We’ll confirm scope and pricing after your intake details.
          </p>
        </div>

        {/* Package cards */}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {(Object.keys(packages) as PackageKey[]).map((k) => {
            const isFeatured = k === "standard";
            return (
              <div
                key={k}
                className={[
                  "rounded-2xl p-7 shadow-card ring-1",
                  isFeatured
                    ? "bg-brand-deep text-white ring-brand-deep"
                    : "bg-white text-zinc-900 ring-zinc-200",
                ].join(" ")}
              >
                <div className="text-sm font-semibold opacity-95">{packages[k].name}</div>
                <div className="mt-2 text-sm opacity-90">{packages[k].bestFor}</div>

                <ul className="mt-5 space-y-2 text-sm leading-relaxed opacity-95">
                  {packages[k].highlights.map((h) => (
                    <li key={h}>• {h}</li>
                  ))}
                </ul>

                <button
                  type="button"
                  onClick={() => onRequestPackage(k)}
                  className={[
                    "mt-7 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 text-sm font-semibold",
                    isFeatured
                      ? "bg-white text-brand-deep hover:bg-zinc-100"
                      : "bg-brand-deep text-white hover:opacity-95",
                  ].join(" ")}
                >
                  Request This Package
                </button>
              </div>
            );
          })}
        </div>

        {/* Comparison table */}
        <div className="mt-10 overflow-hidden rounded-3xl bg-white ring-1 ring-zinc-200">
          <div className="px-6 py-4 text-sm font-semibold text-zinc-900">
            Package comparison
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-760px w-full border-t border-zinc-200 text-sm">
              <thead className="bg-brand-bg text-zinc-700">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-left font-semibold">Lite</th>
                  <th className="px-6 py-4 text-left font-semibold">Standard</th>
                  <th className="px-6 py-4 text-left font-semibold">Multi-site</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200">
                {features.map((f) => (
                  <tr key={f.label}>
                    <td className="px-6 py-4 text-zinc-800">{f.label}</td>
                    <td className="px-6 py-4 text-zinc-600">{formatCell(f.lite)}</td>
                    <td className="px-6 py-4 text-zinc-600">{formatCell(f.standard)}</td>
                    <td className="px-6 py-4 text-zinc-600">{formatCell(f.multisite)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-4 text-xs text-zinc-500">
            Final scope depends on industry, site size, and number of locations.
          </div>
        </div>
      </div>
    </section>
  );
}

function formatCell(v: boolean | string) {
  if (typeof v === "string") return v;
  return v ? "Included" : "—";
}
