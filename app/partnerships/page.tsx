
import PartnershipsHero from "@/components/partnerships/partnerships-hero";
import WhyPartner from "@/components/partnerships/why-partner";
import FocusAreas from "@/components/partnerships/focus-areas";
import PartnershipTypes from "@/components/partnerships/partnership-types";
import WhatWeOffer from "@/components/partnerships/what-we-offer";
import ImpactBase from "@/components/partnerships/impact-base";
import HowWeWork from "@/components/partnerships/how-we-work";
import PartnershipsCta from "@/components/partnerships/partnerships-cta";

export default function PartnershipsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
     
      <main className="flex-1">
        <PartnershipsHero />
        <WhyPartner />
        <FocusAreas />
        <PartnershipTypes />
        <WhatWeOffer />
        <ImpactBase />
        <HowWeWork />
        <PartnershipsCta />
      </main>
     
    </div>
  );
}
