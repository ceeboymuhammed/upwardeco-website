"use client";

import { useEffect, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { X } from "lucide-react";

type ServiceOption = "audit" | "training" | "both";
type PackageKey = "lite" | "standard" | "multisite";

type LeadFormState = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  industry: string;
  location: string;
  numberOfSites: string;
  siteSize: string;
  wasteVolume: string;
  service: ServiceOption;
  package: PackageKey;
  notes: string;
};

export default function LeadModal({
  open,
  onClose,
  defaultService = "audit",
  defaultPackage,
}: {
  open: boolean;
  onClose: () => void;
  defaultService?: ServiceOption;
  defaultPackage?: PackageKey;
}) {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState<null | "error">(null);

  const [form, setForm] = useState<LeadFormState>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    industry: "",
    location: "",
    numberOfSites: "1",
    siteSize: "",
    wasteVolume: "",
    service: defaultService,
    package: defaultPackage ?? "standard",
    notes: "",
  });

  useEffect(() => {
    if (!open) return;

    setDone(null);

    // lock scroll while modal is open
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  useEffect(() => {
    setForm((p) => ({ ...p, service: defaultService }));
  }, [defaultService]);

  useEffect(() => {
    if (!defaultPackage) return;
    setForm((p) => ({ ...p, package: defaultPackage }));
  }, [defaultPackage]);

  const title = useMemo(() => {
    const pkg =
      form.package === "multisite"
        ? "Multi-site"
        : form.package[0].toUpperCase() + form.package.slice(1);
    return `Request ${pkg} Audit Package`;
  }, [form.package]);

  if (!open) return null;

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setDone(null);

    try {
      const res = await fetch("/api/hubspot/lead", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Bad response");

      // Lightweight success redirect
      const params = new URLSearchParams({
        service: form.service,
        pkg: form.package,
      });

      onClose();
      router.push(`/thank-you?${params.toString()}`);
    } catch {
      setDone("error");
    } finally {
      setSubmitting(false);
    }
  }

  function set<K extends keyof LeadFormState>(key: K, val: LeadFormState[K]) {
    setForm((p) => ({ ...p, [key]: val }));
  }

  return (
    <div className="fixed inset-0 z-60">
      <div
        className="absolute inset-0 bg-black/50"
        onClick={onClose}
        aria-hidden
      />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-card ring-1 ring-zinc-200">
          <div className="flex items-start justify-between gap-4 border-b border-zinc-200 px-6 py-5">
            <div>
              <div className="text-sm font-semibold text-zinc-900">{title}</div>
              <div className="mt-1 text-xs text-zinc-600">
                Share a few details. We’ll respond with scope + next steps.
              </div>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-zinc-200 p-2 hover:bg-zinc-50"
              aria-label="Close"
            >
              <X className="h-4 w-4" aria-hidden />
            </button>
          </div>

          <form onSubmit={submit} className="px-6 py-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <Field label="First name">
                <input
                  required
                  value={form.firstName}
                  onChange={(e) => set("firstName", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Last name">
                <input
                  required
                  value={form.lastName}
                  onChange={(e) => set("lastName", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Email">
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={(e) => set("email", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Phone">
                <input
                  value={form.phone}
                  onChange={(e) => set("phone", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Company / Organization">
                <input
                  required
                  value={form.company}
                  onChange={(e) => set("company", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Industry">
                <input
                  value={form.industry}
                  onChange={(e) => set("industry", e.target.value)}
                  className="input"
                  placeholder="e.g., Manufacturing, FMCG, Hospitality"
                />
              </Field>

              <Field label="Location">
                <input
                  value={form.location}
                  onChange={(e) => set("location", e.target.value)}
                  className="input"
                  placeholder="City, Country"
                />
              </Field>

              <Field label="Number of sites">
                <input
                  type="number"
                  min={1}
                  value={form.numberOfSites}
                  onChange={(e) => set("numberOfSites", e.target.value)}
                  className="input"
                />
              </Field>

              <Field label="Site size (optional)">
                <input
                  value={form.siteSize}
                  onChange={(e) => set("siteSize", e.target.value)}
                  className="input"
                  placeholder="e.g., staff count, sqm, production volume"
                />
              </Field>

              <Field label="Waste volume (optional)">
                <input
                  value={form.wasteVolume}
                  onChange={(e) => set("wasteVolume", e.target.value)}
                  className="input"
                  placeholder="e.g., tons/month or bags/day"
                />
              </Field>

              <Field label="Need">
                <select
                  value={form.service}
                  onChange={(e) =>
                    set("service", e.target.value as ServiceOption)
                  }
                  className="input"
                >
                  <option value="audit">Audit</option>
                  <option value="training">Training</option>
                  <option value="both">Audit + Training</option>
                </select>
              </Field>

              <Field label="Selected package">
                <select
                  value={form.package}
                  onChange={(e) =>
                    set("package", e.target.value as PackageKey)
                  }
                  className="input"
                >
                  <option value="lite">Lite</option>
                  <option value="standard">Standard</option>
                  <option value="multisite">Multi-site</option>
                </select>
              </Field>
            </div>

            <div className="mt-4">
              <Field label="Notes (optional)">
                <textarea
                  value={form.notes}
                  onChange={(e) => set("notes", e.target.value)}
                  className="input min-h-90px"
                  placeholder="Any specific compliance needs, timelines, or context…"
                />
              </Field>
            </div>

            {done === "error" ? (
              <div className="mt-4 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                Something went wrong. Please try again, or email
                {" "}hello@upwardeco.example
              </div>
            ) : null}

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={onClose}
                className="rounded-xl border border-zinc-200 bg-white px-4 py-2 text-sm font-semibold text-zinc-800 hover:bg-zinc-50"
              >
                Cancel
              </button>
              <button
                disabled={submitting}
                type="submit"
                className="rounded-xl bg-brand-deep px-5 py-2 text-sm font-semibold text-white hover:opacity-95 disabled:opacity-60"
              >
                {submitting ? "Submitting..." : "Submit to Request"}
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Tailwind “input” utility (scoped) */}
      <style>{`
        .input {
          width: 100%;
          border-radius: 0.75rem;
          border: 1px solid rgb(228 228 231);
          padding: 0.6rem 0.75rem;
          font-size: 0.875rem;
          line-height: 1.25rem;
          outline: none;
        }
        .input:focus {
          border-color: rgba(46, 125, 91, 0.55);
          box-shadow: 0 0 0 4px rgba(46, 125, 91, 0.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <div className="mb-1 text-xs font-semibold text-zinc-700">{label}</div>
      {children}
    </label>
  );
}
