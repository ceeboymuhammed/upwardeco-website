"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, Cpu, BarChart3, ShoppingBag, ArrowUpRight, ShoppingCart } from "lucide-react";

const platforms = [
  {
    title: "SendWaste.com",
    tagline: "ESG & Compliance SaaS",
    desc: "Enterprise waste logistics tracking and automated regulatory reporting.",
    href: "https://sendwaste.com",
    icon: BarChart3,
    badge: "SaaS Platform",
    external: true,
  },
  {
    title: "WasteWise AI",
    tagline: "Smart Sorting Engine",
    desc: "Computer vision classification models for automated stream identification.",
    href: "https://wastewise-ai.vercel.app/",
    icon: Cpu,
    badge: "AI Engine",
    external: true,
  },
  {
    title: "AURA Store",
    tagline: "Upcycled Product Storefront",
    desc: "Closed-loop circular retail made from verified recovered polymers.",
    href: "https://aurastore.com.ng",
    icon: ShoppingBag,
    badge: "Circular Retail",
    external: true,
  },
];

const mainNav = [
  { label: "Platform", href: "#tech-ecosystem", external: false },
  { label: "Compliance & Audits", href: "/environmental-audits", external: false },
  { label: "Impact & Infrastructure", href: "/material-recovery", external: false },
  { label: "Shop", href: "https://aurastore.com.ng", external: true },
  { label: "About", href: "/about", external: false },
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
        
        {/* LOGO & PLATFORM BADGE */}
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

          <span className="hidden xl:inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 ring-1 ring-emerald-600/20">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            AI-Powered B2B SaaS
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
              <span>Products</span>
              <ChevronDown className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${dropdownOpen ? "rotate-180 text-brand-deep" : ""}`} />
            </button>

            {/* DROPDOWN MENU */}
            {dropdownOpen && (
              <div className="absolute top-full left-0 w-80 rounded-2xl bg-white p-3 shadow-2xl ring-1 ring-zinc-200/80 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                  UpwardEco Software & Retail
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
            i.external ? (
              <a
                key={i.href}
                href={i.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-semibold text-zinc-700 hover:text-brand-deep transition-colors"
              >
                <span>{i.label}</span>
                <ShoppingCart className="h-3.5 w-3.5 text-zinc-400" />
              </a>
            ) : (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm font-medium text-zinc-700 hover:text-zinc-900 transition-colors"
              >
                {i.label}
              </Link>
            )
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
            Book a Demo
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
            
            {/* PRODUCTS */}
            <div>
              <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Products & Retail
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

            {/* NAVIGATION LINKS */}
            <div className="pt-2 border-t border-zinc-100 flex flex-col gap-1">
              <div className="px-3 py-1 text-[10px] font-mono font-bold uppercase tracking-wider text-zinc-400">
                Platform & Company
              </div>
              {mainNav.map((i) => (
                i.external ? (
                  <a
                    key={i.href}
                    href={i.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-xl px-3 py-2 text-xs font-semibold text-zinc-900 hover:bg-zinc-50 flex items-center justify-between"
                    onClick={() => setOpen(false)}
                  >
                    <span>{i.label}</span>
                    <ShoppingCart className="h-3.5 w-3.5 text-zinc-400" />
                  </a>
                ) : (
                  <Link
                    key={i.href}
                    href={i.href}
                    className="rounded-xl px-3 py-2 text-xs font-medium text-zinc-800 hover:bg-zinc-50"
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                )
              ))}

              <Link
                href="/contact"
                className="mt-3 inline-flex items-center justify-center rounded-xl bg-brand-deep px-4 py-3 text-xs font-semibold text-white hover:opacity-95"
                onClick={() => setOpen(false)}
              >
                Book a Demo
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}