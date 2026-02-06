import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function RecoveryLinkToAudits() {
  return (
    <section className="bg-white py-14">
      <div className="container-px">
        <div className="rounded-3xl bg-brand-bg p-8 ring-1 ring-zinc-200 sm:p-10">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="max-w-2xl">
              <h3 className="text-xl font-bold">Want to quantify your waste stream first?</h3>
              <p className="mt-2 text-sm text-zinc-600">
                Start with an Environmental Audit to establish a baseline and identify
                the highest-impact recovery opportunities.
              </p>
            </div>

            <Link
              href="/environmental-audits"
              className="inline-flex items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95"
            >
              Explore Environmental Audits <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
