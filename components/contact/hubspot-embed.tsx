"use client";

import { useEffect, useId, useMemo, useState } from "react";

type Props = {
  title: string;
  description: string;
  portalId: string;
  formId: string;
  region?: "eu1" | "na1";

  // Optional hooks if you ever need them
  formInstanceId?: string;
  onFormReady?: (form: HTMLFormElement) => void;
  onFormSubmitted?: (form: HTMLFormElement) => void;
};

export default function HubspotEmbed({
  title,
  description,
  portalId,
  formId,
  region = "eu1",
  formInstanceId,
  onFormReady,
  onFormSubmitted,
}: Props) {
  const mountId = useId();
  const targetSelector = useMemo(() => `#hubspot-form-${mountId}`, [mountId]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const scriptId = `hubspot-forms-script-v2-${region}`;
    const existing = document.getElementById(scriptId) as HTMLScriptElement | null;

    function createForm() {
      const api = window.hbspt?.forms;
      if (!api) return;

      const targetEl = document.querySelector(targetSelector) as HTMLElement | null;
      if (!targetEl) return;
      if (targetEl.dataset.loaded === "true") return;

      api.create({
        region,
        portalId,
        formId,
        target: targetSelector,
        ...(formInstanceId ? { formInstanceId } : {}),
        ...(onFormReady ? { onFormReady } : {}),
        ...(onFormSubmitted ? { onFormSubmitted } : {}),
      });

      targetEl.dataset.loaded = "true";
      setReady(true);
    }

    if (!existing) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src = `https://js-${region}.hsforms.net/forms/v2.js`;
      s.async = true;
      s.onload = createForm;
      document.body.appendChild(s);
    } else {
      createForm();
    }
  }, [formId, portalId, region, targetSelector, formInstanceId, onFormReady, onFormSubmitted]);

  return (
    <section className="rounded-3xl bg-white p-7 shadow-card ring-1 ring-zinc-200">
      <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-zinc-600">{description}</p>
        </div>
        <div className="text-xs text-zinc-500">{ready ? "Form loaded" : "Loading…"}</div>
      </div>

      <div className="mt-6">
        <div id={`hubspot-form-${mountId}`} />
      </div>
    </section>
  );
}
