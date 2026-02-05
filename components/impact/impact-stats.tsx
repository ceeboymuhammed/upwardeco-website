type Stat = {
  label: string;
  value: string;
  helper?: string;
  progressLabel: string;
  progressValue: number; // 0-100
};

const STATS: Stat[] = [
  {
    label: "People trained",
    value: "12,500+",
    helper: "Across corporate, SME, and community programs",
    progressLabel: "Annual target progress",
    progressValue: 72,
  },
  {
    label: "Projects supported",
    value: "180+",
    helper: "Workshops, audits, and implementation sprints",
    progressLabel: "Programs delivered",
    progressValue: 64,
  },
  {
    label: "Partner organizations",
    value: "45+",
    helper: "NGOs, schools, and private sector partners",
    progressLabel: "Partnership goals",
    progressValue: 58,
  },
];

function ProgressBar({ value }: { value: number }) {
  const v = Math.max(0, Math.min(100, value));
  return (
    <div className="h-2 w-full rounded-full bg-zinc-200">
      <div className="h-2 rounded-full bg-zinc-900" style={{ width: `${v}%` }} />
    </div>
  );
}

export default function ImpactStats() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Statistics</h2>
            <p className="mt-2 max-w-2xl text-zinc-600">
              Key outcomes that show the tangible results of our work.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {STATS.map((s) => (
            <div key={s.label} className="rounded-2xl border bg-white p-6 shadow-sm">
              <p className="text-sm font-medium text-zinc-600">{s.label}</p>
              <p className="mt-2 text-3xl font-semibold tracking-tight">{s.value}</p>
              {s.helper ? <p className="mt-2 text-sm text-zinc-600">{s.helper}</p> : null}

              <div className="mt-6">
                <div className="flex items-center justify-between text-xs text-zinc-600">
                  <span>{s.progressLabel}</span>
                  <span className="tabular-nums">{s.progressValue}%</span>
                </div>
                <div className="mt-2">
                  <ProgressBar value={s.progressValue} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
