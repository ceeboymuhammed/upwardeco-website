import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/Upwardeco_team.jpg"
          alt="Lush green forest"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-linear-to-b from-black/30 via-black/25 to-white/0" />
      </div>

      <div className="flex min-h-[72vh] items-center py-16 sm:py-24">
        <div className="w-full max-w-6xl px-6 sm:px-8 lg:px-4">
        <div className="max-w-2xl">
          <p className="inline-flex animate-fade-in items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white ring-1 ring-white/20">
            Sustainability • Compliance • Circularity
          </p>

          <h1 className="mt-5 animate-fade-up text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Build a greener business without the guesswork.
          </h1>

          <p
            className="mt-4 animate-fade-up text-base leading-relaxed text-white/90 sm:text-lg"
            style={{ animationDelay: "90ms" }}
          >
            UpwardEco helps teams reduce environmental impact through audits,
            training, and circular systems that actually stick.
          </p>

          <div
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "140ms" }}
          >
            <Link
              href="/services"
              className="rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
            >
              Get in Touch
            </Link>
          </div>

          <div className="mt-10 grid grid-cols-2 gap-3 text-white/90 sm:grid-cols-3">
            <Stat label="Environmental audits" value="Fast & thorough" />
            <Stat label="Sustainability training" value="Team-ready" />
            <Stat label="Circular systems" value="Practical wins" />
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-2xl bg-white/10 p-4 ring-1 ring-white/15">
      <div className="text-xs text-white/80">{label}</div>
      <div className="mt-1 text-sm font-semibold">{value}</div>
    </div>
  );
}
