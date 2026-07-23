"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Cpu, BarChart3, ShoppingBag, ArrowUpRight } from "lucide-react";

const platforms = [
  {
    title: "SendWaste.com",
    tagline: "ESG & Compliance SaaS",
    desc: "Digital waste logistics tracking and automated compliance reporting.",
    href: "https://sendwaste.com",
    icon: BarChart3,
    badge: "SaaS",
    external: true,
  },
  {
    title: "WasteWise AI",
    tagline: "Smart Recovery Engine",
    desc: "Computer vision models for automated material stream identification.",
    href: "https://wastewise-ai.vercel.app/",
    icon: Cpu,
    badge: "AI Tech",
    external: true,
  },
  {
    title: "AURA Store",
    tagline: "Upcycled Goods Retail",
    desc: "Closed-loop storefront selling goods built from recovered polymers.",
    href: "https://aurastore.com.ng",
    icon: ShoppingBag,
    badge: "E-Commerce",
    external: true,
  },
];

const mainNav = [
  { label: "Audits & Advisory", href: "/environmental-audits" },
  { label: "Physical Hub", href: "/material-recovery" },
  { label: "Impact", href: "/impact" },
  { label: "About", href: "/about" },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setOpen(false);
        setDropdownOpen(false);
      }
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      <div className="container-px flex h-16 items-center justify-between">
        
        {/* LOGO & BRAND BADGE */}
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center" onClick={() => setOpen(false)}>
            <Image
              src="/images/logo.png"
              alt="UpwardEco Ltd logo"
              width={140}
              height={40}
              priority
              className="h-9 w-auto"
            />
          </Link>

          <span className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-brand-deep/5 px-2.5 py-0.5 text-[11px] font-semibold text-brand-deep ring-1 ring-brand-deep/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Climate-Tech
          </span>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden items-center gap-7 md:flex">
          
          {/* PLATFORMS DROPDOWN */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-800 hover:text-brand-deep transition-colors py-2"
              onClick={() => setDropdownOpen((v) => !v)}
              aria-expanded={dropdownOpen}
            >
              <span>Platforms</span>
              <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-brand-deep" : ""}`} />
            </button>

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-80 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-zinc-200/80 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  UpwardEco Tech Stack
                </div>
                
                <div className="space-y-1 mt-1">
                  {platforms.map((p) => (
                    <a
                      key={p.title}
                      href={p.href}
                      target={p.external ? "_blank" : "_self"}
                      rel={p.external ? "noopener noreferrer" : ""}
                      className="group flex items-start gap-3 rounded-xl p-2.5 hover:bg-zinc-50 transition-colors"
                      onClick={() => setDropdownOpen(false)}
                    >
                      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-bg text-brand-deep ring-1 ring-zinc-200/80 group-hover:bg-brand-deep group-hover:text-white transition-colors">
                        <p.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-zinc-900 group-hover:text-brand-deep transition-colors">
                            {p.title}
                          </span>
                          <span className="rounded bg-zinc-100 px-1.5 py-0.5 text-[9px] font-semibold text-zinc-600">
                            {p.badge}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-500 line-clamp-1 mt-0.5">
                          {p.desc}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* MAIN NAV LINKS */}
          {mainNav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        {/* DESKTOP CTA BUTTONS */}
        <div className="flex items-center gap-3">
          <a
            href="https://sendwaste.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-bold text-brand-deep hover:text-brand-accent transition-colors px-3 py-2"
          >
            <span>Launch SendWaste</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>

          <Link
            href="/contact"
            className="hidden rounded-xl bg-brand-deep px-4 py-2.5 text-xs font-semibold text-white hover:opacity-95 transition-all shadow-sm md:inline-flex"
          >
            Request Audit
          </Link>

          {/* MOBILE MENU TOGGLE */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white p-2 text-zinc-700 hover:bg-zinc-50 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU DROPDOWN */}
      {open && (
        <div className="md:hidden border-t border-zinc-200 bg-white">
          <div className="container-px py-4 space-y-4">
            
            {/* TECH STACK MOBILE SECTION */}
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Our Tech Platforms
              </div>
              <div className="mt-2 grid gap-1.5">
                {platforms.map((p) => (
                  <a
                    key={p.title}
                    href={p.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between rounded-xl bg-zinc-50 px-3.5 py-2.5 text-xs font-bold text-zinc-900 hover:bg-zinc-100"
                    onClick={() => setOpen(false)}
                  >
                    <div className="flex items-center gap-2.5">
                      <p.icon className="h-4 w-4 text-brand-deep" />
                      <span>{p.title}</span>
                    </div>
                    <span className="rounded bg-white px-2 py-0.5 text-[10px] text-zinc-500 ring-1 ring-zinc-200">
                      {p.badge}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* MAIN PAGES MOBILE SECTION */}
            <div className="pt-2 border-t border-zinc-100 flex flex-col gap-1">
              <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Company & Services
              </div>
              {mainNav.map((i) => (
                <Link
                  key={i.href}
                  href={i.href}
                  className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-50"
                  onClick={() => setOpen(false)}
                >
                  {i.label}
                </Link>
              ))}

              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand-deep px-4 py-3 text-xs font-semibold text-white hover:opacity-95"
                onClick={() => setOpen(false)}
              >
                Request Audit & Consultation
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}