import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const metadata: Metadata = {
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: {
    default: "Solor Renewables | Solar solutions for Roorkee & Haridwar",
    template: "%s | Solor Renewables",
  },
  description:
    "Residential and commercial rooftop solar solutions in Roorkee, Haridwar, Bhagwanpur, and nearby Uttarakhand areas.",
  alternates: {
    canonical: siteUrl || undefined,
  },
  openGraph: {
    title: "Solor Renewables",
    description: "Affordable rooftop solar solutions for homes and businesses in Uttarakhand.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full bg-white text-slate-900 antialiased transition-colors dark:bg-slate-950 dark:text-slate-100">{children}</body>
    </html>
  );
}
