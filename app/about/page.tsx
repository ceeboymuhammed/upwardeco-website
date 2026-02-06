
import AboutHero from "@/components/about/about-hero";
import Story from "@/components/about/story";
import MissionVision from "@/components/about/mission-vision";
import Leadership from "@/components/about/leadership";
import Advisors from "@/components/about/advisors";
import Accreditations from "@/components/about/accreditations";
import PartnersSupporters from "@/components/about/partners-supporters";

export default function AboutPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        <AboutHero />
        <Story />
        <MissionVision />
        <Leadership />
        <Advisors />
        <Accreditations />
        <PartnersSupporters />
      </main>
    </div>
  );
}
