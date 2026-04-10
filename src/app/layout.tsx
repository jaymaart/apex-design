import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://apexframedesigns.com"),
  title: {
    default: "Apex Frame Designs — Global AI Systems & Business Automation",
    template: "%s | Apex Frame Designs",
  },
  description: "Capture leads and book customers 24/7. We build premium AI receptionists, automated follow-up systems, and high-converting business websites globally.",
  keywords: [
    "AI Automation",
    "AI Receptionist",
    "Sales Automation",
    "High-converting Websites",
    "Lead Management",
    "Business Process Automation",
    "Automated Follow-ups",
    "Apex Frame Designs",
  ],
  authors: [{ name: "Stevie Gudeman" }, { name: "Apex Frame Designs" }],
  creator: "Apex Frame Designs",
  publisher: "Apex Frame Designs",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://apexframedesigns.com",
    siteName: "Apex Frame Designs",
    title: "Apex Frame Designs — Global AI Systems & Business Automation",
    description: "Premium AI receptionists and automated lead systems for businesses worldwide. Built to convert 24/7.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Frame Designs — Global AI Systems & Business Automation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Frame Designs — Global AI Systems & Business Automation",
    description: "Premium AI receptionists and automated lead systems for businesses worldwide.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${plusJakartaSans.variable} ${instrumentSerif.variable}`}>
        {children}
      </body>
    </html>
  );
}
