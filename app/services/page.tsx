import SiteHeader from "@/components/sections/site-header";
import SiteFooter from "@/components/sections/site-footer";
import ServicesHero from "@/components/services-hero";
import ServicesList from "@/components/services-list";
import ServicesProcess from "@/components/services-process";
import ServicesFaq from "@/components/services-faq";
import ServicesCta from "@/components/services-cta";

export default function ServicesPage() {
  return (
    <div className="flex min-h-dvh flex-col">
      <SiteHeader />
      <main className="flex-1">
        <ServicesHero />
        <ServicesList />
        <ServicesProcess />
        <ServicesFaq />
        <ServicesCta />
      </main>
      <SiteFooter />
    </div>
  );
}
