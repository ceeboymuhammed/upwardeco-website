// app/contact/page.tsx
import type { Metadata } from "next";
import { ContactMiniHero } from "@/components/contact/contact-mini-hero";
import { ContactInfoSection } from "@/components/contact/contact-info-section";
import { ContactFormFaqSection } from "@/components/contact/contact-form-faq-section";

export const metadata: Metadata = {
  title: "Contact | UpwardEco Ltd",
  description: "Get in touch with UpwardEco Ltd.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactMiniHero />
       <ContactFormFaqSection />
       <ContactInfoSection />
    
    </main>
  );
}
