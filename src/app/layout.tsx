import type { Metadata } from "next";
import { Outfit, Instrument_Serif } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-body",
  subsets: ["latin"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fullerops.com"),
  title: {
    default: "FullerOps | AI-Powered Business Operations for Small Businesses",
    template: "%s | FullerOps",
  },
  description:
    "I build and run your entire digital operation. Website, content, leads, follow-ups, reviews. One person handles everything so you can focus on your business. Free online presence audit.",
  keywords: [
    "AI business partner",
    "small business operations",
    "digital marketing for small business",
    "AI marketing",
    "lead generation",
    "website design",
    "SEO for small business",
  ],
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "FullerOps",
    title: "FullerOps | AI-Powered Business Operations",
    description:
      "I build and run your entire digital operation. Website, content, leads, follow-ups, reviews. One person, everything handled.",
  },
  twitter: {
    card: "summary_large_image",
    title: "FullerOps | AI-Powered Business Operations",
    description:
      "I build and run your entire digital operation for small businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${instrumentSerif.variable} antialiased grain`}>
        <a href="#main-content" className="skip-to-content">Skip to content</a>
        {children}
      </body>
    </html>
  );
}
