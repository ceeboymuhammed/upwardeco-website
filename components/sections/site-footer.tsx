import Link from "next/link";
import { Facebook, Instagram, Linkedin } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-sm font-semibold">UpwardEco Ltd</div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-zinc-600">
              Practical sustainability programs, audits, and circular systems for
              organizations ready to act.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Links</div>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>
                <Link className="hover:text-zinc-900" href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/impact">
                  Impact
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900" href="/privacy">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-3 space-y-2 text-sm text-zinc-600">
              <p>hello@upwardeco.example</p>
              <p>+234 (0) 000 000 0000</p>
              <div className="mt-4 flex items-center gap-3">
                <Link
                  href="#"
                  aria-label="LinkedIn"
                  className="rounded-xl border border-zinc-200 p-2 hover:bg-zinc-50"
                >
                  <Linkedin className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#"
                  aria-label="Instagram"
                  className="rounded-xl border border-zinc-200 p-2 hover:bg-zinc-50"
                >
                  <Instagram className="h-4 w-4" aria-hidden />
                </Link>
                <Link
                  href="#"
                  aria-label="Facebook"
                  className="rounded-xl border border-zinc-200 p-2 hover:bg-zinc-50"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-zinc-200 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} UpwardEco Ltd. All rights reserved.</p>
          <p>Built for a clean, modern, professional experience.</p>
        </div>
      </div>
    </footer>
  );
}
