import Link from "next/link";

export default function AboutCta() {
  return (
    <section className="bg-zinc-950">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-14 sm:py-18">
        <div className="rounded-3xl border border-white/10 bg-white/5 px-6 py-10 text-center sm:px-10">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Ready to take the next step?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
            Let’s talk about your goals and map a practical sustainability plan
            you can implement.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm transition hover:bg-white/90"
            >
              Get in touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
