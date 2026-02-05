import Link from "next/link";

export default function CtaGetInvolved() {
  return (
    <section className="bg-emerald-700 py-14 sm:py-16">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Ready to get involved?
          </h2>
          <p className="mt-3 text-white/90">
            Volunteer, partner, or reach out—let’s build something sustainable
            together.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-emerald-800 shadow-sm hover:bg-emerald-50"
            >
              Partner with UpwardEco
            </Link>
            <Link
              href="/about"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
            >
              Learn about our mission
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
