import Link from "next/link";

export default function FutureGoals() {
  return (
    <section className="py-14 pb-20 sm:py-18">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-deep px-7 py-10 text-white shadow-card sm:px-10">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Future goals</h2>
              <p className="mt-3 text-white/90">
                We are scaling recovery capacity to reach <span className="font-semibold">10 tons/month</span>,
                while expanding GreenBridge training and business support programs.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/partnerships"
                className="rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                Partner With Us
              </Link>
              <Link
                href="/contact"
                className="rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Fund or Support a Program
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
