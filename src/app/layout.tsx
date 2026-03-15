import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Fuller Ops — AI-Powered Business Operations for Small Businesses",
    template: "%s | Fuller Ops",
  },
  description:
    "I build and run your entire digital operation — website, content, leads, follow-ups, reviews — so you can focus on your business. Free online presence audit.",
  keywords: [
    "AI business partner",
    "small business operations",
    "digital marketing for small business",
    "AI marketing",
    "lead generation",
    "website design",
    "SEO for small business",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Fuller Ops",
    title: "Fuller Ops — AI-Powered Business Operations",
    description:
      "I build and run your entire digital operation — website, content, leads, follow-ups, reviews — so you can focus on your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fuller Ops — AI-Powered Business Operations",
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
      <body className={`${inter.variable} antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
