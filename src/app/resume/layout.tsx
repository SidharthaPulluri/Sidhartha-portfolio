import type { Metadata } from "next";

import { resumeKeywords, selfData } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

const SITE_URL = selfData.site_url;
const RESUME_PDF_PATH = "/docs/Sidhartha_Pulluri_Resume.pdf";

export const metadata: Metadata = {
  title: "Resume - Sidhartha Pulluri",
  description:
    "View and download Sidhartha Pulluri's resume, focused on AI systems, applied machine learning, and modern software engineering.",
  keywords: resumeKeywords,
  alternates: {
    canonical: `${SITE_URL}/resume`,
  },
  openGraph: {
    title: "Resume - Sidhartha Pulluri",
    description:
      "View Sidhartha Pulluri's resume, including selected experience, projects, and technical strengths across AI and software engineering.",
    url: `${SITE_URL}/resume`,
    siteName: selfData.name,
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sidhartha Pulluri resume preview",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resume - Sidhartha Pulluri",
    description:
      "Resume preview for Sidhartha Pulluri, covering AI, ML, automation, and product engineering work.",
    images: ["/images/thumbnail.png"],
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const resumeStructuredData = generateResumeStructuredData();

  return (
    <>
      <link
        rel="preload"
        href={RESUME_PDF_PATH}
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resumeStructuredData),
        }}
      />

      {children}
    </>
  );
}
