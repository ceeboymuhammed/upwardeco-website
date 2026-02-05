import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function LinkToAudits() {
  return (
    <div className="grid gap-6 lg:grid-cols-2 lg:items-center">
      <div className="rounded-3xl bg-white p-8 shadow-card ring-1 ring-zinc-200">
        <div className="text-sm font-semibold text-zinc-900">
          Best practice: Audit → Training → Implementation
        </div>
        <p className="mt-3 text-sm leading-relaxed text-zinc-600">
          When training is tied to real findings, it’s more credible and easier to implement.
          Start with an environmental audit to establish a baseline, then train teams based on the gaps.
        </p>

        <Link
          href="/environmental-audits"
          className="mt-6 inline-flex items-center text-sm font-semibold text-brand-deep hover:underline"
        >
          Explore Environmental Audits <ArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>

      <div className="rounded-3xl bg-brand-bg p-8 ring-1 ring-zinc-200">
        <div className="text-sm font-semibold text-zinc-900">What we’ll need from you</div>
        <ul className="mt-3 space-y-2 text-sm text-zinc-700">
          <li>• Your sector and team roles</li>
          <li>• Training goals (compliance, waste reduction, reporting)</li>
          <li>• Current practices / policies (if available)</li>
          <li>• Preferred format and timeline</li>
        </ul>
      </div>
    </div>
  );
}
