import ContactHeader from "@/components/contact/contact-header";
import ContactInfo from "@/components/contact/contact-info";
import HubspotAuditForm from "@/components/contact/hubspot-audit-form";
import HubspotInquiryForm from "@/components/contact/hubspot-inquiry-form";
import CalendlyInline from "@/components/contact/calendly-inline";

export default function ContactPage() {
  return (
    <div className="flex min-h-dvh flex-col">
   
      <main className="flex-1">
        <ContactHeader />

        <section className="py-12 sm:py-16">
          <div className="container-px grid gap-8 lg:grid-cols-3 lg:items-start">
            <div className="lg:col-span-1">
              <ContactInfo />
            </div>

            <div className="lg:col-span-2 space-y-8">
              <div className="grid gap-8">
                <HubspotAuditForm />
                <HubspotInquiryForm />
              </div>

              <CalendlyInline />
            </div>
          </div>
        </section>
      </main>

   
    </div>
  );
}
