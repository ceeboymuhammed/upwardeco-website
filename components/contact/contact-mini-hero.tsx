// components/contact/contact-mini-hero.tsx
export function ContactMiniHero() {
  return (
    <section className="relative overflow-hidden">
      {/* “Plain background with the theme colour” + a soft hero treatment */}
      <div className="absolute inset-0 bg-(--theme) opacity-10" aria-hidden="true" />
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-white" aria-hidden="true" />

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="inline-flex items-center rounded-full border border-black/10 bg-white/70 px-3 py-1 text-xs font-medium text-black/70 backdrop-blur">
            Contact UpwardEco
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight text-black sm:text-4xl">
            Let’s build measurable impact together
          </h1>

          <p className="mt-4 text-base leading-7 text-black/70">
            Have a question, partnership idea, or want to work with us? Send a message and we’ll get back to you.
          </p>
        </div>
      </div>
    </section>
  );
}
