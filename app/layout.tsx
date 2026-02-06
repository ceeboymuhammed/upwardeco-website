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
  title: "UpwardEco Ltd | Environmental Sustainability & Circular Economy Consulting",
  description:
    "Accredited sustainability consultants delivering environmental audits, circular economy systems, and sustainability training.",
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
