import Image from "next/image";
import Link from "next/link";

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

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="Real-world sustainability work"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-brand-deep/70" />
      </div>

      <div className="container-px py-16 sm:py-24">
        <div className="max-w-4xl">
          <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
            Environmental Sustainability Solutions That Help Businesses Reduce Waste,
            Cut Costs, and Meet Global Standards
          </h1>

          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/90 sm:text-lg">
            Accredited sustainability consultants delivering environmental audits,
            circular economy systems, and sustainability training — while creating
            inclusive green livelihoods.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/environmental-audits"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
            >
              Request an Environmental Audit
            </Link>
            <Link
              href="/partnerships"
              className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Partner or Volunteer
            </Link>
          </div>
        </div>

        {/* Trust bar */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Trusted / Recognized by
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {trustItems.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
