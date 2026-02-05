import SiteHeader from "@/components/sections/site-header";
import Hero from "@/components/sections/hero-section";
import WhatWeDo from "@/components/sections/what-we-do";
import FeaturedServices from "@/components/sections/featured-services";
import ImpactSnapshot from "@/components/sections/impact-snapshot";
import CircularModel from "@/components/sections/circular-model";
import WhyChoose from "@/components/sections/why-choose-us";
import CtaBusinesses from "@/components/sections/cta-businesses";
import CtaPartners from "@/components/sections/cta-partners";
import SiteFooter from "@/components/sections/site-footer";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <WhatWeDo />
        <FeaturedServices />
        <ImpactSnapshot />
        <CircularModel />
        <WhyChoose />
        <CtaBusinesses />
        <CtaPartners />
      </main>
      <SiteFooter />
    </div>
  );
}
