export default function AboutHistory() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-6 sm:px-8 lg:px-12 py-14 sm:py-18">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Our story
            </h2>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              UpwardEco started with a simple observation: many sustainability
              plans fail not because people don’t care, but because they lack a
              clear path from goals to daily decisions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-zinc-700">
              Today, we deliver corporate and individual training, advisory, and
              community programs that make sustainability practical, accessible,
              and measurable.
            </p>

            <dl className="mt-8 grid gap-5 sm:grid-cols-3">
              <div className="rounded-2xl border border-zinc-200 p-4">
                <dt className="text-sm font-medium text-zinc-600">Focus</dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900">
                  Actionable learning
                </dd>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <dt className="text-sm font-medium text-zinc-600">Approach</dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900">
                  Evidence-led
                </dd>
              </div>
              <div className="rounded-2xl border border-zinc-200 p-4">
                <dt className="text-sm font-medium text-zinc-600">Outcome</dt>
                <dd className="mt-1 text-sm font-semibold text-zinc-900">
                  Real behavior change
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-50">
            <div
              className="aspect-4/3 w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url(https://images.unsplash.com/photo-1523741543316-beb7fc7023d8?auto=format&fit=crop&w=2000&q=60)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
