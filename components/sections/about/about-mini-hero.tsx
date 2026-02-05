import Link from "next/link";

export default function AboutMiniHero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-black/50 to-black/10" />
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=2400&q=60)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12">
        <div className="py-20 sm:py-24 text-center">
          <p className="text-sm font-medium text-white/80">About UpwardEco</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Building practical sustainability for people and businesses
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base text-white/85 sm:text-lg">
            We help organizations and individuals turn climate intent into
            measurable action—through training, strategy, and hands-on support.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:bg-white/90"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border border-white/40 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/15"
            >
              Explore services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
