import SiteHeader from "@/components/sections/site-header";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import SiteFooter from "@/components/sections/site-footer";

const heading = Montserrat({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["400", "600", "700"],
});

const body = Open_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "UpwardEco Ltd | Climate-Tech & Circular Infrastructure Engine",
  description:
    "Combining WasteWise AI, SendWaste.com ESG compliance software, and physical material recovery hubs to automate waste tracking and build closed-loop circular supply chains.",
  keywords: [
    "Climate-Tech Africa",
    "Waste Management Software",
    "SendWaste",
    "WasteWise AI",
    "ISO 14001 Environmental Audit Nigeria",
    "Abuja Material Recovery Hub",
    "AURA Store Upcycled Goods",
    "ESG Regulatory Compliance Nigeria",
  ],
  authors: [{ name: "UpwardEco Ltd" }],
  openGraph: {
    title: "UpwardEco Ltd | Climate-Tech & Circular Infrastructure Engine",
    description:
      "Integrating AI-powered material recovery, digital ESG compliance tracking, and physical processing infrastructure for enterprise and municipal waste diversion.",
    url: "https://upwardeco.com.ng",
    siteName: "UpwardEco Ltd",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "UpwardEco Climate-Tech Platform and Recovery Hub",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "UpwardEco Ltd | AI & Circular Infrastructure",
    description:
      "Digital compliance SaaS (SendWaste.com), AI sorting (WasteWise AI), and physical upcycling operations.",
    images: ["/images/hero.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${heading.variable} ${body.variable} font-body antialiased`}>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}