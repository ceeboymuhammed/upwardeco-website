"use client";

import { useEffect, useId, useMemo, useRef } from "react";


type HubspotFormProps = {
  region: string;
  portalId: string;
  formId: string;
  /** Optional: fired after HubSpot mounts the form */
  onReady?: () => void;
  /** Optional: fired after successful submission */
  onSubmitted?: () => void;
};

export default function HubspotForm({
  region,
  portalId,
  formId,
  onReady,
  onSubmitted,
}: HubspotFormProps) {
  const reactId = useId();
  const containerId = useMemo(
    () => `hs-form-${reactId.replace(/:/g, "")}`,
    [reactId]
  );

  const createdRef = useRef(false);

  useEffect(() => {
    // Avoid double-inserting / double-creating in React strict mode
    if (createdRef.current) return;

    const ensureScript = () =>
      new Promise<void>((resolve, reject) => {
        // If already loaded, resolve immediately
        if (window.hbspt?.forms) return resolve();

        const existing = document.querySelector<HTMLScriptElement>(
          'script[src="//js.hsforms.net/forms/embed/v2.js"]'
        );
        if (existing) {
          existing.addEventListener("load", () => resolve(), { once: true });
          existing.addEventListener("error", () => reject(), { once: true });
          return;
        }

        const s = document.createElement("script");
        s.src = "//js.hsforms.net/forms/embed/v2.js";
        s.async = true;
        s.charset = "utf-8";
        s.addEventListener("load", () => resolve(), { once: true });
        s.addEventListener("error", () => reject(), { once: true });
        document.body.appendChild(s);
      });

    const createForm = async () => {
      await ensureScript();

      // Clear container (useful if route transitions remount)
      const el = document.getElementById(containerId);
      if (el) el.innerHTML = "";

      window.hbspt?.forms?.create({
        region,
        portalId,
        formId,
        target: `#${containerId}`, // HubSpot supports target for embed placement
        formInstanceId: containerId, // helps if multiple forms exist
        onFormReady: () => onReady?.(),
        onFormSubmitted: () => onSubmitted?.(),
      });

      createdRef.current = true;
    };

    createForm().catch(() => {
      // Optional: you can render a fallback message if needed
      // Keeping silent prevents layout jumps.
    });
  }, [region, portalId, formId, containerId, onReady, onSubmitted]);

  return <div id={containerId} />;
}
