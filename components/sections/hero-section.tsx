import Image from "next/image";
import Link from "next/link";

const trustItems = [
  "Federal Ministry of Environment (Accredited)",
  "RAN",
  "WAPAN",
  "Food & Beverage Recycling Alliance",
  "54Collective",
  "African Impact Academy",
  "People’s Accords",
  "NESREA accreditation in progress",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="AI-driven material recovery and circular infrastructure"
          fill
          priority
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/90 to-brand-deep/70" />
      </div>

      <div className="container-px py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Copy */}
          <div className="lg:col-span-7">
            {/* Tech Pillar Pill */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3.5 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/20 backdrop-blur mb-6">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              Climate-Tech & Circular Infrastructure
            </div>

            <h1 className="text-3xl font-bold leading-tight text-white sm:text-5xl">
              Transforming Waste Recovery with{" "}
              <span className="text-brand-accent">AI & Digital Intelligence</span>
            </h1>

            <p className="mt-4 text-base leading-relaxed text-white/90 sm:text-lg">
              We integrate AI-powered material sorting, digital compliance software, and physical recovery hubs to help businesses, industries, and governments track waste, achieve ESG compliance, and build closed-loop supply chains.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#tech-ecosystem"
                className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition hover:opacity-95"
              >
                Explore Tech Platforms
              </Link>
              <Link
                href="/environmental-audits"
                className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-brand-deep transition hover:bg-zinc-100"
              >
                Request Enterprise Audit
              </Link>
            </div>
          </div>

          {/* Right Tech Platform Showcase Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-semibold tracking-wide text-brand-accent uppercase">
                  UpwardEco Tech Stack
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300">
                  Live Engine
                </span>
              </div>

              {/* WasteWise AI */}
              <a 
                href="https://wastewise-ai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/20 p-3.5 border border-white/10 hover:border-brand-accent/50 transition"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>🤖 WasteWise AI</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  AI-driven computer vision for automated material identification and sorting analytics.
                </p>
              </a>

              {/* SendWaste */}
              <a 
                href="https://sendwaste.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/20 p-3.5 border border-white/10 hover:border-brand-accent/50 transition"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>📊 SendWaste.com</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  Digital waste logistics tracking, compliance workflows, and audit-ready ESG reporting.
                </p>
              </a>

              {/* AURA Store */}
              <a 
                href="https://aurastore.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/20 p-3.5 border border-white/10 hover:border-brand-accent/50 transition"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-white">
                  <span>🛍️ AURA Store</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  Closed-loop storefront selling upcycled products manufactured from recovered materials.
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* Trust Bar */}
        <div className="mt-12 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Trusted, Partnered & Recognized By
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {trustItems.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3 py-1 text-xs text-white/90 ring-1 ring-white/15"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}