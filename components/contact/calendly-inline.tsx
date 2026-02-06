"use client";

import { useEffect } from "react";

const calendlyUrl = "https://calendly.com/upwardecoltd/30min";

export default function CalendlyInline() {
  useEffect(() => {
    const scriptId = "calendly-widget-script";
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;
    if (existing) return;

    const s = document.createElement("script");
    s.id = scriptId;
    s.src = "https://assets.calendly.com/assets/external/widget.js";
    s.async = true;
    document.body.appendChild(s);
  }, []);

  return (
    <section className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
      <h2 className="text-lg font-semibold">Book a consultation</h2>
      <p className="mt-1 text-sm text-zinc-600">
        Prefer to talk? Pick a time that works and we’ll meet.
      </p>

      <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-zinc-200">
        <div
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: "320px", height: "720px" }}
        />
      </div>
    </section>
  );
}
