import Link from "next/link";

export default async function ThankYouPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string; pkg?: string }>;
}) {
  const sp = await searchParams;

  const serviceLabel =
    sp.service === "both" ? "Audit + Training" : sp.service === "training" ? "Training" : "Audit";
  const pkgLabel =
    sp.pkg === "multisite" ? "Multi-site" : sp.pkg === "lite" ? "Lite" : "Standard";

  // Put your real scheduling link here:
  const calendarUrl = "https://calendly.com/your-link-here/intro-call";

  return (
    <main className="min-h-dvh bg-brand-bg">
      <div className="container-px py-16 sm:py-20">
        <div className="mx-auto max-w-2xl rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200 sm:p-10">
          <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
            Submission received
          </div>

          <h1 className="mt-3 text-2xl font-bold text-zinc-900 sm:text-3xl">
            Thank you — we’ve got your request.
          </h1>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600">
            We’ll review your details and respond shortly with next steps. If you want to
            accelerate the process, book a short scoping call now.
          </p>

          <div className="mt-6 rounded-2xl bg-brand-bg p-5 ring-1 ring-zinc-200">
            <div className="text-sm font-semibold text-zinc-900">Request summary</div>
            <div className="mt-2 text-sm text-zinc-700">
              <span className="font-semibold">Service:</span> {serviceLabel}
            </div>
            <div className="mt-1 text-sm text-zinc-700">
              <span className="font-semibold">Package:</span> {pkgLabel}
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={calendarUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Book a Scoping Call
            </a>
            <Link
              href="/environmental-audits"
              className="inline-flex flex-1 items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
            >
              Back to Audits
            </Link>
          </div>

          <p className="mt-6 text-center text-xs text-zinc-500">
            Prefer email? Send details to hello@upwardeco.example
          </p>
        </div>
      </div>
    </main>
  );
}
