"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How long does a typical engagement take?",
    a: "Most projects run 2–6 weeks depending on scope, data access, and team availability.",
  },
  {
    q: "Do you work with small businesses or only large organizations?",
    a: "Both. We scope work to fit your team size, maturity level, and budget realities.",
  },
  {
    q: "Can you help with compliance and reporting?",
    a: "Yes. We can support audit evidence, gap assessments, and structured reporting outputs depending on your needs.",
  },
];

export default function ServicesFaq() {
  return (
    <section className="py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            FAQ
          </h2>
          <p className="mt-3 text-zinc-600">
            Quick answers to common questions before you book.
          </p>
        </div>

        <div className="mt-10 space-y-3">
          {faqs.map((f) => (
            <FaqItem key={f.q} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-sm font-semibold">{q}</span>
        <span className="text-zinc-500">{open ? "–" : "+"}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 text-sm leading-relaxed text-zinc-600">
          {a}
        </div>
      )}
    </div>
  );
}
