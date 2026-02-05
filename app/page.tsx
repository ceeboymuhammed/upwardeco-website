import SiteHeader from "@/components/sections/site-header";
import HeroSection from "@/components/sections/hero-section";
import ServicesOverview from "@/components/sections/services-overview";
import AboutIntro from "@/components/about-intro";
import ClientTestimonials from "@/components/sections/client-testimonials";
import CtaGetInvolved from "@/components/sections/cta-get-involved";
import SiteFooter from "@/components/sections/site-footer";

export default function HomePage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <ServicesOverview />
        <AboutIntro />
        <ClientTestimonials />
        <CtaGetInvolved />
      </main>
      <SiteFooter />
    </div>
  );
}
