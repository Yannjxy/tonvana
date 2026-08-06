import type { Metadata, Viewport } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL("https://tonvana.com"),

  title: {
    default: "Tonvana | Professional Piano Tuning",
    template: "%s | Tonvana",
  },

  description:
    "Professional piano tuning, repair, regulation and maintenance services in Winnipeg and surrounding communities.",

  keywords: [
    "Piano Tuning",
    "Piano Technician",
    "Piano Repair",
    "Piano Regulation",
    "Piano Maintenance",
    "Winnipeg",
    "Manitoba",
    "Tonvana",
  ],

  authors: [
    {
      name: "Tonvana",
    },
  ],

  creator: "Tonvana",

  publisher: "Tonvana",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Tonvana | Professional Piano Tuning",
    description:
      "Professional piano tuning, repair and maintenance services in Winnipeg, Manitoba.",

    url: "https://tonvana.com",

    siteName: "Tonvana",

    locale: "en_CA",

    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#D4AF37",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
  lang="en"
  data-scroll-behavior="smooth"
  className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
>
      <body className="min-h-screen bg-stone-50 text-stone-900">
        {children}
      </body>
    </html>
  );
}