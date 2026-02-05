import Image from "next/image";
import Link from "next/link";

export default function AboutIntro() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          {/* Left: text */}
          <div className="max-w-xl">
            <p className="text-sm font-semibold text-emerald-700">About UpwardEco</p>

            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Sustainability that’s practical, measurable, and built to last
            </h2>

            <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              UpwardEco helps organizations reduce environmental impact with clear
              assessments, team training, and systems that turn good intentions into
              repeatable action.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>Transparent audits and realistic recommendations</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>Training that fits your workflow—not generic slides</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-emerald-600" />
                <span>Circular systems that reduce waste and recover value</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-xl bg-emerald-600 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700"
              >
                Learn more about us
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-900 hover:bg-zinc-50"
              >
                Talk to us
              </Link>
            </div>
          </div>

          {/* Right: image */}
          <div className="relative overflow-hidden rounded-2xl border border-zinc-200 bg-white shadow-sm">
            <div className="relative aspect-4/3 w-full">
              <Image
                src="/images/about.jpg"
                alt="UpwardEco team and sustainability work"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-zinc-600">
                The UpwardEco Team out on an awareness campaign.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
