import Link from "next/link";
import { Leaf } from "lucide-react";

const nav = [
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Impact", href: "/impact" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/70 bg-white/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-emerald-600 text-white">
            <Leaf className="h-5 w-5" aria-hidden />
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">
            UpwardEco Ltd
          </span>
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

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
          >
            Book a Consultation
          </Link>
        </div>
      </div>
    </header>
  );
}
