"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const nav = [
  { label: "Audits", href: "/environmental-audits" },
  { label: "Training", href: "/training" },
  { label: "Circular Systems", href: "/material-recovery" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        {/* LOGO */}
        <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
          <Image
            src="/images/logo.png"   // <--logo file in /public/images/logo.png
            alt="UpwardEco Ltd logo"
            width={140}
            height={40}
            priority
            className="h-9 w-auto"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          {/* Desktop CTA */}
          <Link
            href="/contact"
            className="hidden rounded-xl bg-brand-deep px-4 py-2 text-sm font-semibold text-white hover:opacity-95 md:inline-flex"
          >
            Book a Consultation
          </Link>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 hover:bg-zinc-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="container-px py-4">
            <div className="flex flex-col gap-2">
              {nav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-zinc-800 hover:bg-zinc-50"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-2 inline-flex items-center justify-center rounded-xl bg-brand-deep px-4 py-3 text-sm font-semibold text-white hover:opacity-95"
                onClick={() => setOpen(false)}
              >
                Book a Consultation
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
