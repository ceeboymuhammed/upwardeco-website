"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { ShieldCheck, Handshake } from "lucide-react";

const partners = [
  {
    name: "Federal Ministry of Environment",
    shortName: "FME",
    logo: "/images/partners/fme.png",
    category: "Accrediting Ministry",
  },
  {
    name: "National Environmental Standards and Regulations Enforcement Agency",
    shortName: "NESREA",
    logo: "/images/partners/nesrea.png",
    category: "Regulatory Agency",
  },
  {
    name: "Abuja Environmental Protection Board",
    shortName: "AEPB",
    logo: "/images/partners/aepb.png",
    category: "Municipal Authority",
  },
  {
    name: "Recyclers Association of Nigeria",
    shortName: "RAN",
    logo: "/images/partners/ran.png",
    category: "Industry Body",
  },
  {
    name: "Waste Pickers Association of Nigeria",
    shortName: "WAPAN",
    logo: "/images/partners/wapan.png",
    category: "Ecosystem Partner",
  },
  {
    name: "Sydani Group",
    shortName: "Sydani Group",
    logo: "/images/partners/sydani.png",
    category: "Strategic Partner",
  },
];

export default function CtaPartners() {
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (shortName: string) => {
    setImageErrors((prev) => ({ ...prev, [shortName]: true }));
  };

  return (
    <section className="py-12 pb-16 sm:pb-24 bg-zinc-50/50">
      <div className="container-px space-y-10">
        
        {/* LOGO GRID SECTION */}
        <div className="rounded-3xl bg-white p-8 sm:p-10 shadow-card ring-1 ring-zinc-200">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-zinc-100 pb-6">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-deep/5 px-3 py-1 text-xs font-semibold text-brand-deep ring-1 ring-brand-deep/10">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                Institutional Network
              </div>
              <h2 className="mt-3 text-2xl font-bold text-zinc-900 tracking-tight sm:text-3xl">
                Accredited, Regulated & Ecosystem Supported
              </h2>
              <p className="mt-2 text-sm text-zinc-600 max-w-2xl">
                We work closely with federal ministries, regulatory enforcement agencies, municipal boards, and development partners to deliver compliant circular infrastructure.
              </p>
            </div>

            <div className="text-xs font-mono font-semibold text-zinc-400 shrink-0">
              Regulatory Alignment
            </div>
          </div>

          {/* Partner Grid */}
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {partners.map((p) => (
              <div
                key={p.shortName}
                className="group relative flex flex-col items-center justify-center rounded-2xl bg-zinc-50/80 p-5 ring-1 ring-zinc-200/80 hover:ring-brand-accent/50 hover:bg-white hover:shadow-md transition-all duration-200 text-center"
              >
                <div className="h-12 w-full relative flex items-center justify-center">
                  {!imageErrors[p.shortName] ? (
                    <Image
                      src={p.logo}
                      alt={`${p.name} logo`}
                      fill
                      sizes="(max-width: 768px) 50vw, 16vw"
                      className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300 p-1"
                      onError={() => handleImageError(p.shortName)}
                    />
                  ) : (
                    /* Fallback styled badge if logo image isn't in /public yet */
                    <div className="flex h-10 w-full items-center justify-center rounded-xl bg-brand-bg font-extrabold text-brand-deep ring-1 ring-zinc-200/80 text-xs px-2">
                      {p.shortName}
                    </div>
                  )}
                </div>

                <span className="mt-3 text-[10px] font-mono font-semibold uppercase text-brand-deep tracking-wider">
                  {p.category}
                </span>
                <span className="mt-0.5 text-xs font-bold text-zinc-800 line-clamp-1">
                  {p.shortName}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PARTNER CTA BANNER */}
        <div className="rounded-3xl bg-brand-deep px-6 py-10 shadow-xl ring-1 ring-brand-deep text-white sm:px-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl space-y-2">
              <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-accent">
                <Handshake className="h-4 w-4" />
                <span>Join Our Circular Mission</span>
              </div>
              <h3 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Partner with Us to Accelerate Circularity
              </h3>
              <p className="text-sm leading-relaxed text-white/80">
                Collaborate with UpwardEco on corporate waste recovery programs, technology deployment, or youth & community empowerment initiatives.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row shrink-0">
              <Link
                href="/partnerships"
                className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-6 py-3.5 text-xs font-semibold text-white shadow-lg hover:opacity-95 transition-all text-center"
              >
                Partner With Us
              </Link>
              <Link
                href="/volunteer"
                className="inline-flex items-center justify-center rounded-xl bg-white/10 px-6 py-3.5 text-xs font-semibold text-white ring-1 ring-white/20 hover:bg-white/20 transition-all text-center"
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}