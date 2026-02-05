"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How long does an environmental audit take?",
    a: "Timelines depend on site size and scope. After a short scoping call, we confirm duration, data needs, and the delivery date for the report and roadmap.",
  },
  {
    q: "Do you audit multiple locations?",
    a: "Yes. We can scope single sites or multi-site audits, then provide site-level findings and a consolidated roadmap.",
  },
  {
    q: "What do we need to prepare?",
    a: "Typical inputs include utility bills, waste/vendor records, relevant permits/policies, and access to key operational areas for observation.",
  },
  {
    q: "Will the audit disrupt operations?",
    a: "We plan around your operations. Most work is observation, interviews, and document review with minimal disruption.",
  },
  {
    q: "Do you support implementation after the audit?",
    a: "Yes—optional support can include staff briefing, KPI templates, contractor alignment, and implementation planning for recommended actions.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold sm:text-3xl">FAQ</h2>
          <p className="mt-3 text-zinc-600">
            Quick answers to common questions about our environmental audits.
          </p>
        </div>

        <div className="mt-10 divide-y divide-zinc-200 rounded-3xl bg-white shadow-card ring-1 ring-zinc-200">
          {faqs.map((f, idx) => {
            const isOpen = open === idx;
            return (
              <div key={f.q} className="p-6 sm:p-7">
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 text-left"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                >
                  <span className="text-sm font-semibold text-zinc-900">{f.q}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-zinc-500 transition ${isOpen ? "rotate-180" : ""}`}
                    aria-hidden
                  />
                </button>

                {isOpen ? (
                  <p className="mt-3 text-sm leading-relaxed text-zinc-600">{f.a}</p>
                ) : null}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
