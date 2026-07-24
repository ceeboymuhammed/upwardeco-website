import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

const trustItems = [
  "Federal Ministry of Environment (Accredited)",
  "NESREA Aligned",
  "African Impact Academy Winner ($20k Grant)",
  "Food & Beverage Recycling Alliance",
  "54Collective",
  "Sydani Group",
];

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Background Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/hero.jpg"
          alt="AI-Powered ESG Compliance & Waste-Tracking Software"
          fill
          priority
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-deep via-brand-deep/95 to-brand-deep/80" />
      </div>

      <div className="container-px py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Product-Led Hero Copy */}
          <div className="lg:col-span-7">
            {/* SaaS Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3.5 py-1 text-xs font-semibold text-emerald-400 ring-1 ring-emerald-500/30 backdrop-blur mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              AI-Powered Enterprise ESG Software
            </div>

            <h1 className="text-4xl font-bold leading-tight text-white sm:text-6xl tracking-tight">
              AI-Powered ESG Compliance & <span className="text-brand-accent">Waste-Tracking Software</span>
            </h1>

            <p className="mt-5 text-base leading-relaxed text-white/90 sm:text-lg max-w-2xl">
              SendWaste.com and WasteWise AI automate regulatory reporting, stream classification, and supply chain tracking for enterprises, industries, and municipalities.
            </p>

            <div className="mt-8 flex flex-col gap-3.5 sm:flex-row">
              <a
                href="https://sendwaste.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-7 py-3.5 text-sm font-bold text-white shadow-lg transition hover:opacity-95"
              >
                <span>Start Free Trial</span>
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-brand-deep transition hover:bg-zinc-100"
              >
                Book a Platform Demo
              </Link>
            </div>

            {/* Software Metrics Bar */}
            <div className="mt-10 pt-8 border-t border-white/10 grid grid-cols-3 gap-4">
              <div>
                <p className="text-2xl font-extrabold text-white">Automated</p>
                <p className="text-xs text-white/70">ISO & Government Reports</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-brand-accent">Real-Time</p>
                <p className="text-xs text-white/70">AI Stream Classification</p>
              </div>
              <div>
                <p className="text-2xl font-extrabold text-white">Closed-Loop</p>
                <p className="text-xs text-white/70">Abuja Recovery Hub Proof</p>
              </div>
            </div>
          </div>

          {/* Right Product Interactive Mockup Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-mono font-bold tracking-wide text-brand-accent uppercase">
                  Flagship SaaS Engine
                </span>
                <span className="rounded bg-emerald-500/20 px-2 py-0.5 text-[10px] font-semibold text-emerald-300 border border-emerald-500/30">
                  v2.4 Live
                </span>
              </div>

              {/* SendWaste */}
              <a 
                href="https://sendwaste.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/30 p-4 border border-white/10 hover:border-brand-accent/60 transition"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>📊 SendWaste.com SaaS</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  Automated waste logistics tracking, regulatory workflows, and audit-ready ESG reporting.
                </p>
              </a>

              {/* WasteWise AI */}
              <a 
                href="https://wastewise-ai.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/30 p-4 border border-white/10 hover:border-brand-accent/60 transition"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>🤖 WasteWise AI Engine</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  Proprietary computer vision stream scanning & material purity analytics.
                </p>
              </a>

              {/* AURA Store */}
              <a 
                href="https://aurastore.com.ng" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block group rounded-xl bg-black/30 p-4 border border-white/10 hover:border-brand-accent/60 transition"
              >
                <div className="flex items-center justify-between text-xs font-bold text-white">
                  <span>🛍️ AURA Storefront</span>
                  <span className="text-brand-accent group-hover:translate-x-0.5 transition-transform">→</span>
                </div>
                <p className="mt-1 text-xs text-white/70">
                  Verifiable upcycled consumer storefront demonstrating closed-loop material outcomes.
                </p>
              </a>
            </div>
          </div>

        </div>

        {/* Trust Bar */}
        <div className="mt-14 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur">
          <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
            Backed, Recognized & Regulated By
          </div>
          <div className="mt-3 flex flex-wrap gap-2">
            {trustItems.map((t) => (
              <span
                key={t}
                className="rounded-full bg-white/10 px-3.5 py-1 text-xs text-white/90 ring-1 ring-white/15"
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