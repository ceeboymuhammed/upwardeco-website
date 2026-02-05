// components/contact/contact-form-faq-section.tsx
"use client";

import { useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

function Input({
  label,
  value,
  onChange,
  type = "text",
  placeholder,
  required,
  name,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
  required?: boolean;
  name: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-black">{label}</span>
      <input
        name={name}
        type={type}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/20 focus:ring-2 focus:ring-(--theme)/20"
      />
    </label>
  );
}

function Textarea({
  label,
  value,
  onChange,
  placeholder,
  required,
  name,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  required?: boolean;
  name: string;
}) {
  return (
    <label className="block">
      <span className="text-sm font-medium text-black">{label}</span>
      <textarea
        name={name}
        value={value}
        required={required}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="mt-2 w-full resize-y rounded-xl border border-black/10 bg-white px-4 py-3 text-sm text-black outline-none placeholder:text-black/40 focus:border-black/20 focus:ring-2 focus:ring-(--theme)/20"
      />
    </label>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-4">
      <p className="text-sm font-semibold text-black">{q}</p>
      <p className="mt-2 text-sm leading-6 text-black/70">{a}</p>
    </div>
  );
}

export function ContactFormFaqSection() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const canSubmit = useMemo(() => {
    return (
      form.name.trim() &&
      form.email.trim() &&
      form.subject.trim() &&
      form.message.trim()
    );
  }, [form]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    try {
      setStatus("sending");
      await new Promise((r) => setTimeout(r, 700));
      setStatus("sent");
      setForm(initialState);
      setTimeout(() => setStatus("idle"), 2500);
    } catch {
      setStatus("idle");
    }
  }

  return (
    <section className="mx-auto max-w-6xl px-4 pb-16">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h2 className="text-xl font-semibold text-black">Send a message</h2>
          <p className="mt-2 text-sm text-black/70">
            Fill out the form and we’ll respond as soon as possible.
          </p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <Input
                label="Name"
                name="name"
                value={form.name}
                onChange={(v) => setForm((s) => ({ ...s, name: v }))}
                placeholder="Your name"
                required
              />
              <Input
                label="Email"
                name="email"
                type="email"
                value={form.email}
                onChange={(v) => setForm((s) => ({ ...s, email: v }))}
                placeholder="you@email.com"
                required
              />
            </div>

            <Input
              label="Subject"
              name="subject"
              value={form.subject}
              onChange={(v) => setForm((s) => ({ ...s, subject: v }))}
              placeholder="How can we help?"
              required
            />

            <Textarea
              label="Message"
              name="message"
              value={form.message}
              onChange={(v) => setForm((s) => ({ ...s, message: v }))}
              placeholder="Tell us a bit about what you’re working on…"
              required
            />

            <div className="flex items-center gap-3">
              <button
                type="submit"
                disabled={!canSubmit || status === "sending"}
                className="inline-flex items-center justify-center rounded-xl bg-(--theme) px-5 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Submit"}
              </button>

              {status === "sent" ? (
                <p className="text-sm text-black/70">Message sent. We’ll reply soon.</p>
              ) : (
                <p className="text-xs text-black/50">
                  This is a placeholder submit — wire your API when ready.
                </p>
              )}
            </div>
          </form>
        </div>

        <div className="rounded-2xl border border-black/10 bg-white p-6 shadow-sm">
          <h3 className="text-xl font-semibold text-black">Quick FAQ</h3>
          <p className="mt-2 text-sm text-black/70">
            A few common questions to speed things up.
          </p>

          <div className="mt-6 grid gap-4">
            <FaqItem
              q="What kind of projects do you take on?"
              a="Sustainability strategy, impact measurement, circular economy programs, and ESG-aligned initiatives."
            />
            <FaqItem
              q="How soon can we start?"
              a="Usually within 1–2 weeks depending on scope. Share your timeline in the message."
            />
            <FaqItem
              q="Do you work with partners?"
              a="Yes — we collaborate with NGOs, corporates, and community organizations to deliver measurable outcomes."
            />
          </div>

          <div className="mt-6 rounded-xl bg-black/5 p-4">
            <p className="text-sm text-black/80">
              Want a faster reply? Include: location, budget range, and what success looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}