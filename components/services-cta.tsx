import Link from "next/link";

export default function ServicesCta() {
  return (
    <section className="bg-brand-accent py-14 sm:py-16">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center text-white">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Let’s scope your next step
          </h2>
          <p className="mt-3 text-white/90">
            Tell us where you are today, and we’ll recommend the most effective service track.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep shadow-sm hover:bg-emerald-50"
            >
              Contact Us
            </Link>
            <Link
              href="/"
              className="rounded-xl bg-white/10 px-5 py-3 text-sm font-semibold text-white ring-1 ring-white/25 hover:bg-white/15"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
