// app/about/page.tsx
import AboutMiniHero from "@/components/sections/about/about-mini-hero";
import AboutHistory from "@/components/sections/about-history";
import AboutTeam from "@/components/sections/about-team";
import AboutValues from "@/components/sections/about-values";
import AboutCta from "@/components/sections/about-cta";

export default function AboutPage() {
  return (
    <main>
      <AboutMiniHero />
      <AboutHistory />
      <AboutTeam />
      <AboutValues />
      <AboutCta />
    </main>
  );
}
