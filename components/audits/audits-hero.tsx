import Link from "next/link";
import { ShieldCheck, LineChart, CheckCircle2 } from "lucide-react";
import TrustStrip from "@/components/trust-strip";

export default function AuditsHero() {
  return (
    <section className="relative isolate overflow-hidden bg-brand-deep">
      {/* Subtle grid overlay */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "radial-gradient(60% 50% at 30% 20%, black 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(60% 50% at 30% 20%, black 30%, transparent 80%)",
        }}
      />
      {/* Soft vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/25 via-black/10 to-transparent"
      />

      <div className="container-px py-14 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white ring-1 ring-white/15">
              Primary Service • Environmental Audits
            </p>

            <h1 className="mt-5 text-3xl font-bold leading-tight text-white sm:text-5xl">
              Environmental Audits That Prepare Your Business for Compliance,
              Efficiency, and Sustainable Growth
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-white/90 sm:text-lg">
              Get a clear view of environmental performance across operations—then
              act with a structured roadmap that reduces waste, cuts costs, and
              aligns with regulatory expectations and global standards.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="#packages"
                className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
              >
                View Audit Packages
              </Link>
              <Link
                href="#lead"
                className="inline-flex items-center justify-center rounded-xl bg-brand-accent px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
              >
                Request an Audit
              </Link>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              <MiniStat
                icon={ShieldCheck}
                title="Regulatory readiness"
                text="Prepare documentation and evidence."
              />
              <MiniStat
                icon={LineChart}
                title="Operational efficiency"
                text="Find cost-saving opportunities."
              />
              <MiniStat
                icon={CheckCircle2}
                title="Clear roadmap"
                text="Prioritized actions & timeline."
              />
            </div>
          </div>

          <div className="rounded-3xl bg-white/10 p-6 ring-1 ring-white/15 backdrop-blur">
            <div className="rounded-2xl bg-white p-6 shadow-card ring-1 ring-zinc-200">
              <div className="text-sm font-semibold text-zinc-900">
                Audit Snapshot
              </div>
              <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                Typical engagements include a site walk-through, document review,
                utility and waste data analysis, and an actionable report with a
                compliance + improvement plan.
              </p>

              <div className="mt-6 space-y-3">
                <Bullet>Baseline assessment across waste, water, energy</Bullet>
                <Bullet>Risk gaps + corrective actions</Bullet>
                <Bullet>Recommendations aligned to standards</Bullet>
              </div>

              <div className="mt-6 rounded-2xl bg-brand-deep px-4 py-4 text-white">
                <div className="text-xs font-semibold uppercase tracking-wide text-white/80">
                  Fast start
                </div>
                <div className="mt-1 text-sm font-semibold">
                  Book a short scoping call to receive a proposal.
                </div>
                <Link
                  href="#packages"
                  className="mt-4 inline-flex w-full items-center justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-brand-deep hover:bg-zinc-100"
                >
                  Choose a Package
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="mt-12">
          <TrustStrip tone="dark" />
        </div>
      </div>
    </section>
  );
}

function MiniStat({
  icon: Icon,
  title,
  text,
}: {
  icon: React.ElementType;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15">
      <Icon className="h-5 w-5 text-white/90" aria-hidden />
      <div className="mt-3 text-sm font-semibold text-white">{title}</div>
      <div className="mt-1 text-xs leading-relaxed text-white/85">{text}</div>
    </div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-accent" />
      <span className="text-sm text-zinc-700">{children}</span>
    </div>
  );
}
