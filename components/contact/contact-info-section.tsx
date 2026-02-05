// components/contact/contact-info-section.tsx
import Link from "next/link";

function InfoRow({
  label,
  value,
  href,
}: {
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <span className="text-sm text-black/80">
      <span className="font-medium text-black">{label}:</span>{" "}
      <span className="underline decoration-black/20 underline-offset-4 hover:decoration-black/50">
        {value}
      </span>
    </span>
  );

  if (!href) return <div className="py-2">{content}</div>;

  return (
    <div className="py-2">
      <Link href={href} className="inline-block">
        {content}
      </Link>
    </div>
  );
}

export function ContactInfoSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
      <div className="grid gap-6 lg:grid-cols-2 lg:items-stretch">
        {/* Left: icon list (simple, clean) */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">Contact details</h2>
          <p className="mt-2 text-sm leading-6 text-black/70">
            Reach us directly or visit our office. (Replace placeholders with your real details.)
          </p>

          <div className="mt-6 divide-y divide-black/10">
            <InfoRow label="Phone" value="+234 000 000 0000" href="tel:+2340000000000" />
            <InfoRow label="Email" value="hello@upwardeco.com" href="mailto:hello@upwardeco.com" />
            <InfoRow label="Office" value="Lagos, Nigeria" />
          </div>

          <div className="mt-6 rounded-xl bg-(--theme)/10 p-4">
            <p className="text-sm text-black/80">
              Prefer email? Share a short brief and your timeline — we’ll reply with next steps.
            </p>
          </div>
        </div>

        {/* Right: “Google map” placeholder panel */}
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black">Find us</h3>
          <p className="mt-2 text-sm text-black/70">
            Embed your Google Map here when you’re ready.
          </p>

          <div className="mt-6 aspect-16/10 w-full overflow-hidden rounded-xl border border-black/10 bg-black/5">
            <div className="flex h-full w-full items-center justify-center px-6 text-center">
              <div>
                <p className="text-sm font-medium text-black">Map placeholder</p>
                <p className="mt-1 text-xs text-black/60">
                  Replace this with an iframe embed (Google Maps) or a map component.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-4 text-xs text-black/60">
            Tip: keep the map responsive using an aspect-ratio wrapper (like this block).
          </div>
        </div>
      </div>
    </section>
  );
}
