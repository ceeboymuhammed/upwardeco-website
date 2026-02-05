import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2">
          {/* Replace later with your logo image */}
          <div className="h-9 w-9 rounded-xl bg-brand-deep" />
          <span className="font-heading text-lg font-bold text-gray-900">
            UpwardEco
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="text-gray-700 hover:text-brand-deep" href="/audits">
            Environmental Audits
          </Link>
          <Link className="text-gray-700 hover:text-brand-deep" href="/training">
            Training
          </Link>
          <Link className="text-gray-700 hover:text-brand-deep" href="/recovery">
            Recovery
          </Link>
          <Link className="text-gray-700 hover:text-brand-deep" href="/impact">
            Impact
          </Link>
          <Link className="text-gray-700 hover:text-brand-deep" href="/about">
            About
          </Link>
          <Link className="text-gray-700 hover:text-brand-deep" href="/contact">
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white shadow-soft hover:opacity-95"
          >
            Request Audit
          </Link>
        </div>
      </div>
    </header>
  );
}
