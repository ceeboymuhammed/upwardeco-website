import SiteHeader from "@/components/sections/site-header";
import ImpactHero from "@/components/impact/impact-hero";
import ImpactStats from "@/components/impact/impact-stats";
import ImpactTestimonials from "@/components/sections/client-testimonials";
import ImpactCTA from "@/components/impact/impact-cta";
import SiteFooter from "@/components/sections/site-footer";

export default function ImpactPage() {
  return (
    <div className="min-h-screen bg-white text-zinc-900">
      <SiteHeader />

      <main>
        <ImpactHero />
        <section className="border-b">
          <div className="mx-auto max-w-6xl px-4 py-12 md:py-16">
            <p className="text-sm font-medium text-zinc-600">Impact</p>
            <h1 className="mt-2 text-3xl font-semibold tracking-tight md:text-5xl">
              Measurable progress, real-world outcomes.
            </h1>
            <p className="mt-4 max-w-2xl text-base text-zinc-600 md:text-lg">
              A snapshot of what UpwardEco is helping achieve through practical sustainability
              training, partnerships, and community initiatives.
            </p>
          </div>
        </section>

        <ImpactStats />
        <ImpactTestimonials />
        <ImpactCTA />
      </main>

      <SiteFooter />
    </div>
  );
}
