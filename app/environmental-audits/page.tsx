import SiteHeader from "@/components/sections/site-header";
import AuditsHero from "@/components/audits/audits-hero";
import AuditsLeadController from "@/components/audits/audits-lead-controller";
import WhyAuditsMatter from "@/components/audits/why-audits-matter";
import WhatWeAssess from "@/components/audits/what-we-assess";
import Deliverables from "@/components/audits/deliverables";
import ProcessSteps from "@/components/audits/process-steps";
import WhoItsFor from "@/components/audits/who-its-for";
import WhyUpwardEco from "@/components/audits/why-upwardeco";
import Faq from "@/components/audits/faq";
import FinalCta from "@/components/audits/final-cta";
import LeadAnchor from "@/components/audits/lead-anchor";
import SiteFooter from "@/components/sections/site-footer";

export default function EnvironmentalAuditsPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <AuditsHero />
        <AuditsLeadController />
        <WhyAuditsMatter />
        <WhatWeAssess />
        <Deliverables />
        <ProcessSteps />
        <WhoItsFor />
        <WhyUpwardEco />
        <Faq />
        <LeadAnchor />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}
