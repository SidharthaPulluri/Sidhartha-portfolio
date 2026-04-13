import "./globals.css";
import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";
import { Toaster } from "sonner";

import { inter, mono, nasalization, quentine } from "./fonts";

import { keywords, selfData } from "@/constant";
import {
  generatePersonStructuredData,
  generateWebsiteStructuredData,
  generateOrganizationStructuredData,
} from "@/lib/structured-data";

const siteUrl = selfData.site_url;

export const metadata: Metadata = {
  applicationName: selfData.name,
  title: selfData.name,
  description:
    "Sidhartha Pulluri is an AI and software engineer building production-minded systems across machine learning, computer vision, NLP, and modern web development.",
  authors: [
    {
      name: selfData.name,
      url: siteUrl,
    },
  ],
  creator: selfData.name,
  referrer: "origin-when-cross-origin",
  category: "Portfolio",
  classification: "Software Development",
  keywords,
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-US": siteUrl,
    },
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
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    other: {
      me: ["mailto:Sidartha.a.1729@gmail.com"],
    },
  },
  appleWebApp: {
    capable: true,
    title: selfData.name,
    statusBarStyle: "black-translucent",
  },
  formatDetection: {
    telephone: false,
    date: false,
    address: false,
    email: false,
  },
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    shortcut: "/favicon.svg",
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Sidhartha Pulluri | AI Engineer and Builder",
    description:
      "Explore selected work in applied AI, full-stack systems, automation, and developer tooling by Sidhartha Pulluri.",
    url: siteUrl,
    siteName: selfData.name,
    images: [
      {
        url: `${siteUrl}/opengraph-image`,
        width: 1200,
        height: 630,
        alt: "Sidhartha Pulluri portfolio preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  other: {
    "article:published_time": "2024-01-01T00:00:00.000Z",
    "article:modified_time": new Date().toISOString(),
  },
  twitter: {
    card: "summary_large_image",
    title: "Sidhartha Pulluri | AI Engineer and Builder",
    description:
      "Portfolio featuring AI systems, automation work, and full-stack product builds by Sidhartha Pulluri.",
    images: [`${siteUrl}/opengraph-image`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const personStructuredData = generatePersonStructuredData();
  const websiteStructuredData = generateWebsiteStructuredData();
  const organizationStructuredData = generateOrganizationStructuredData();

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${mono.variable} ${nasalization.variable} ${quentine.variable} font-sans`}
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteStructuredData),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData),
          }}
        />
        {children}
        <Toaster position="bottom-right" richColors closeButton />
        <Analytics />
      </body>
    </html>
  );
}

