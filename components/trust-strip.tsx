const trustItems = [
  "Federal Ministry of Environment (Accredited)",
  "RAN",
  "WAPAN",
  "Food & Beverage Recycling Alliance",
  "54Collective",
  "People’s Accords",
  "SendWaste.com",
  "NESREA accreditation in progress",
];

export default function TrustStrip({ tone = "light" }: { tone?: "light" | "dark" }) {
  const dark = tone === "dark";

  return (
    <div
      className={[
        "rounded-2xl p-5",
        dark
          ? "border border-white/15 bg-white/10 text-white backdrop-blur"
          : "border border-zinc-200 bg-white text-zinc-900",
      ].join(" ")}
    >
      <div
        className={[
          "text-xs font-semibold uppercase tracking-wide",
          dark ? "text-white/80" : "text-zinc-600",
        ].join(" ")}
      >
        Trusted / Recognized by
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {trustItems.map((t) => (
          <span
            key={t}
            className={[
              "rounded-full px-3 py-1 text-xs ring-1",
              dark
                ? "bg-white/10 text-white/90 ring-white/15"
                : "bg-brand-bg text-zinc-700 ring-zinc-200",
            ].join(" ")}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
