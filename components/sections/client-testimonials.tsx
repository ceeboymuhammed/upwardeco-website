"use client";

import { useMemo, useState } from "react";
import { Star } from "lucide-react";

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    quote:
      "UpwardEco helped us turn a messy sustainability plan into a simple roadmap the whole team could follow.",
    name: "Amina K.",
    role: "Operations Lead",
    rating: 5,
  },
  {
    quote:
      "The audit was detailed, but the recommendations were practical—and we saw improvements within weeks.",
    name: "Daniel O.",
    role: "Facilities Manager",
    rating: 5,
  },
  {
    quote:
      "Training was engaging and specific to our workflow. It changed how people make decisions day-to-day.",
    name: "Chioma E.",
    role: "People & Culture",
    rating: 4,
  },
];

export default function ClientTestimonials() {
  const [index, setIndex] = useState(0);

  const active = useMemo(() => testimonials[index], [index]);

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <section className="bg-zinc-50 py-16 sm:py-20">
      <div className="container-px">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            What clients say
          </h2>
          <p className="mt-3 text-zinc-600">
            Real feedback that reflects real outcomes.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-3xl">
          <div className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="flex items-center justify-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${
                    i < active.rating ? "text-amber-500" : "text-zinc-200"
                  }`}
                  fill={i < active.rating ? "currentColor" : "none"}
                  aria-hidden
                />
              ))}
            </div>

            <p className="mt-5 text-center text-base leading-relaxed text-zinc-800 sm:text-lg">
              “{active.quote}”
            </p>

            <div className="mt-6 text-center">
              <div className="text-sm font-semibold">{active.name}</div>
              <div className="text-sm text-zinc-600">{active.role}</div>
            </div>

            <div className="mt-8 flex items-center justify-between">
              <button
                type="button"
                onClick={prev}
                className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
              >
                Prev
              </button>
              <div className="text-sm text-zinc-500">
                {index + 1} / {testimonials.length}
              </div>
              <button
                type="button"
                onClick={next}
                className="rounded-xl border border-zinc-200 px-4 py-2 text-sm font-semibold hover:bg-zinc-50"
              >
                Next
              </button>
            </div>
          </div>

          <div className="mt-6 text-center text-xs text-zinc-500">
            Tip: swap this for a full carousel library later if you want swipe +
            autoplay.
          </div>
        </div>
      </div>
    </section>
  );
}
