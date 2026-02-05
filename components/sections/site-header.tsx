import Link from "next/link";

const nav = [
  { label: "Audits", href: "/environmental-audits" },
  { label: "Training", href: "/training" },
  { label: "Circular Systems", href: "/material-recovery" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="text-sm font-semibold tracking-tight sm:text-base">
          <span className="text-brand-deep">Upward</span>Eco Ltd
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm text-zinc-700 hover:text-zinc-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white hover:opacity-95"
        >
          Book a Consultation
        </Link>
      </div>
    </header>
  );
}