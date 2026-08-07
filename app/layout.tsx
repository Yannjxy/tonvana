import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import "./globals.css";

import { siteConfig } from "@/lib/config/site";
import { seoConfig } from "@/lib/config/seo";
import StructuredData from "@/components/SEO/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: seoConfig.title,
    template: `%s | ${siteConfig.name}`,
  },

  description: seoConfig.description,

  keywords: seoConfig.keywords,

  authors: [
    {
      name: seoConfig.author,
    },
  ],

  creator: seoConfig.creator,

  publisher: siteConfig.name,

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: "website",
    locale: "en_CA",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: seoConfig.title,
    description: seoConfig.description,

    images: [
      {
        url: seoConfig.openGraphImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: seoConfig.title,
    description: seoConfig.description,
    images: [seoConfig.openGraphImage],
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#C7A15A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-CA"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
        <StructuredData />
        {children}
      </body>
    </html>
  );
}