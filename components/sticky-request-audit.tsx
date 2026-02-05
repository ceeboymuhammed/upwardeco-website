"use client";

import { useEffect, useState } from "react";

export default function StickyRequestAudit({
  onClick,
  showAfterPx = 520,
}: {
  onClick: () => void;
  showAfterPx?: number;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    function onScroll() {
      setShow(window.scrollY > showAfterPx);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [showAfterPx]);

  return (
    <div
      className={[
        "fixed inset-x-0 bottom-0 z-70 p-4 sm:p-5",
        "transition duration-300",
        show ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none",
      ].join(" ")}
      aria-hidden={!show}
    >
      <div className="container-px">
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/90 p-3 shadow-card ring-1 ring-zinc-200 backdrop-blur">
          <div className="hidden sm:block">
            <div className="text-sm font-semibold text-zinc-900">
              Ready to scope your environmental audit?
            </div>
            <div className="text-xs text-zinc-600">
              Share a few details—get next steps + proposal.
            </div>
          </div>

          <button
            type="button"
            onClick={onClick}
            className="inline-flex w-full items-center justify-center rounded-xl bg-brand-deep px-5 py-3 text-sm font-semibold text-white hover:opacity-95 sm:w-auto"
          >
            Request Audit
          </button>
        </div>
      </div>
    </div>
  );
}
