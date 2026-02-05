import Link from "next/link";

export default function ServicesHero() {
  return (
    <section className="bg-brand-deep text-white">
      <div className="container-px py-16 sm:py-20">
        <p className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/15">
          Services
        </p>

        <h1 className="mt-5 text-3xl font-semibold tracking-tight sm:text-4xl">
          Sustainability services that drive real outcomes
        </h1>

        <p className="mt-4 max-w-2xl text-white/85 leading-relaxed">
          Whether you’re starting from scratch or strengthening an existing program,
          UpwardEco helps you audit, train, and build circular systems that stick.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/contact"
            className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep shadow-sm hover:bg-emerald-50"
          >
            Book a Consultation
          </Link>
          <Link
            href="#environmental-audits"
            className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/20 hover:bg-white/15"
          >
            Explore services
          </Link>
        </div>
      </div>
    </section>
  );
}
