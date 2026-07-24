import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, MapPin, Mail, Phone, ShieldCheck } from "lucide-react";

export default function SiteFooter() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <div className="container-px py-16">
        
        {/* Main Grid */}
        <div className="grid gap-10 lg:grid-cols-12">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.png"
                alt="UpwardEco Ltd logo"
                width={140}
                height={40}
                className="h-9 w-auto"
              />
            </Link>

            <p className="text-sm leading-relaxed text-zinc-600 max-w-sm">
              AI-powered ESG compliance and waste-tracking B2B SaaS platform backed by ground-truth material recovery infrastructure.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-deep">
              <ShieldCheck className="h-4 w-4 text-emerald-600 shrink-0" />
              <span>Federal Ministry of Environment Accredited</span>
            </div>
          </div>

          {/* Software Products Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Flagship Products
            </div>
            <ul className="space-y-2.5 text-xs font-semibold text-zinc-700">
              <li>
                <a
                  href="https://sendwaste.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-deep transition-colors"
                >
                  <span>SendWaste.com SaaS</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://wastewise-ai.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-deep transition-colors"
                >
                  <span>WasteWise AI Engine</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
              <li>
                <a
                  href="https://aurastore.com.ng"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 hover:text-brand-deep transition-colors"
                >
                  <span>AURA Store (Upcycled Retail)</span>
                  <ArrowUpRight className="h-3 w-3 text-zinc-400" />
                </a>
              </li>
            </ul>
          </div>

          {/* Platform & Infrastructure Column */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Enterprise
            </div>
            <ul className="space-y-2.5 text-xs font-medium text-zinc-600">
              <li>
                <Link className="hover:text-zinc-900 transition-colors" href="/environmental-audits">
                  Compliance Frameworks
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900 transition-colors" href="/material-recovery">
                  Abuja Recovery Hub
                </Link>
              </li>
              <li>
                <Link className="hover:text-zinc-900 transition-colors" href="/partnerships">
                  Partnerships
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3 space-y-3">
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400">
              Headquarters
            </div>
            <div className="space-y-2 text-xs text-zinc-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-brand-deep shrink-0 mt-0.5" />
                <span>Jikwoyi Material Recovery Hub, Abuja, Nigeria</span>
              </div>
              <div className="flex items-center gap-2 pt-1">
                <Mail className="h-4 w-4 text-brand-deep shrink-0" />
                <a href="mailto:hello@upwardeco.com" className="hover:text-zinc-900 font-medium">
                  hello@upwardeco.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-brand-deep shrink-0" />
                <a href="tel:+2348039622610" className="hover:text-zinc-900 font-medium">
                  +234 (803) 962 2610
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-zinc-200/80 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            © {new Date().getFullYear()} UpwardEco Ltd. All rights reserved. Registered Climate-Tech SaaS Enterprise.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <span>upwardeco.com</span>
            <span>•</span>
            <span>ISO 14001:2026 Aligned</span>
          </div>
        </div>

      </div>
    </footer>
  );
}