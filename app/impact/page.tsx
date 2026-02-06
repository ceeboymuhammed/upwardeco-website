import ImpactHero from "@/components/impact/impact-hero";
import BigNumbers from "@/components/impact/big-numbers";
import EnvironmentalImpact from "@/components/impact/environmental-impact";
import SocialImpact from "@/components/impact/social-impact";
import BusinessImpact from "@/components/impact/business-impact";
import CircularModelSection from "@/components/impact/circular-model-section";
import PartnersSection from "@/components/impact/partners-section";
import FutureGoals from "@/components/impact/future-goals";

export default function ImpactPage() {
  return (
    <div className="bg-brand-bg">
      <ImpactHero />
      <BigNumbers />
      <EnvironmentalImpact />
      <SocialImpact />
      <BusinessImpact />
      <CircularModelSection />
      <PartnersSection />
      <FutureGoals />
    </div>
  );
}
