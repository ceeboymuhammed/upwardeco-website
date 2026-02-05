import Link from "next/link";

export default function CtaStrip({
  title,
  subtitle,
  primary,
  secondary,
  tone = "dark",
}: {
  title: string;
  subtitle?: string;
  primary: { label: string; href: string };
  secondary?: { label: string; href: string };
  tone?: "dark" | "light";
}) {
  const dark = tone === "dark";
  return (
    <section className="py-10">
      <div className="container-px">
        <div
          className={
            dark
              ? "rounded-3xl bg-brand-deep px-6 py-10 text-white shadow-card sm:px-10"
              : "rounded-3xl bg-white px-6 py-10 shadow-card ring-1 ring-zinc-200 sm:px-10"
          }
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className={dark ? "text-xl font-bold" : "text-xl font-bold text-zinc-900"}>
                {title}
              </h3>
              {subtitle ? (
                <p className={dark ? "mt-2 text-sm text-white/90" : "mt-2 text-sm text-zinc-600"}>
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                href={primary.href}
                className={
                  dark
                    ? "inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
                    : "inline-flex items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                }
              >
                {primary.label}
              </Link>

              {secondary ? (
                <Link
                  href={secondary.href}
                  className={
                    dark
                      ? "inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
                      : "inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-50"
                  }
                >
                  {secondary.label}
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
