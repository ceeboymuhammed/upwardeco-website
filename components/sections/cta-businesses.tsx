import Link from "next/link";

export default function CtaBusinesses() {
  return (
    <section className="py-10">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-deep px-6 py-10 text-white shadow-card sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">
                Ready to understand your environmental performance?
              </h3>
              <p className="mt-2 text-sm text-white/90">
                Start with an audit and get a clear, standards-aligned roadmap.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
            >
              Book a Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
