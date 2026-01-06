import type { Metadata } from "next";
import { resumeKeywords } from "@/constant";
import { generateResumeStructuredData } from "@/lib/structured-data";

const SITE_URL = "https://sidhartha-portfolio-three.vercel.app";
const RESUME_PDF_PATH = "/docs/Sidhartha_Pulluri_Resume.pdf";

export const metadata: Metadata = {
  title: "Resume - Sidhartha Pulluri",
  description:
    "View and download Sidhartha Pulluri's resume. Focused on AI/ML, computer vision, NLP, and production-ready full-stack systems.",
  keywords: resumeKeywords,

  alternates: {
    canonical: `${SITE_URL}/resume`,
  },

  openGraph: {
    title: "Resume - Sidhartha Pulluri",
    description:
      "View and download Sidhartha Pulluri's resume, including experience, projects, and technical skills across AI/ML and full-stack development.",
    url: `${SITE_URL}/resume`,
    siteName: "Sidhartha Pulluri",
    images: [
      {
        url: "/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Sidhartha Pulluri Resume",
      },
    ],
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Resume - Sidhartha Pulluri",
    description:
      "View Sidhartha Pulluri's resume, showcasing AI/ML work, projects, and full-stack engineering experience.",
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
      {/* Preload resume PDF for faster viewing */}
      <link
        rel="preload"
        href={RESUME_PDF_PATH}
        as="fetch"
        type="application/pdf"
        crossOrigin="anonymous"
      />

      {/* Structured data for SEO */}
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
