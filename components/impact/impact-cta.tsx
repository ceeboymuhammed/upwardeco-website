import Link from "next/link";

export default function ImpactCTA() {
  return (
    <section className="bg-emerald-700">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="rounded-3xl border bg-zinc-50 p-8 text-center md:p-12">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
            Ready to get involved?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-zinc-600">
            Partner with UpwardEco, sponsor a program, or enroll your team in sustainability
            training—turn interest into action.
          </p>

          <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-zinc-900 px-6 py-3 text-sm font-semibold text-white hover:bg-zinc-800"
            >
              Partner with us
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-xl border px-6 py-3 text-sm font-semibold hover:bg-white"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
