import { selfData, skillsData } from "@/constant";

const SITE_URL = "https://sidhartha-portfolio-three.vercel.app";
const LOGO_URL = `${SITE_URL}/images/logo.png`;
const RESUME_URL = `${SITE_URL}/resume`;
const RESUME_PDF_URL = `${SITE_URL}/docs/Sidhartha_Pulluri_Resume.pdf`;

export function generatePersonStructuredData() {
  const skills = skillsData.flatMap((category) =>
    category.data.map((skill) => skill.title)
  );

  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: selfData.name,
    givenName: selfData.first_name,
    familyName: selfData.last_name,
    jobTitle: selfData.jobTitle,
    worksFor: selfData.workFor
      ? {
          "@type": "Organization",
          name: selfData.workFor,
        }
      : undefined,

    // Update to your actual education (UT Dallas)
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "The University of Texas at Dallas",
    },

    email: selfData.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: selfData.current_location.city,
      addressRegion: selfData.current_location.state,
      addressCountry: selfData.current_location.country,
    },
    sameAs: [
      selfData.socials_username.github
        ? `https://github.com/${selfData.socials_username.github}`
        : undefined,
      selfData.socials_username.linkedin
        ? `https://linkedin.com/in/${selfData.socials_username.linkedin}`
        : undefined,
      selfData.socials_username.twitter
        ? `https://twitter.com/${selfData.socials_username.twitter}`
        : undefined,
      selfData.socials_username.instagram
        ? `https://instagram.com/${selfData.socials_username.instagram}`
        : undefined,
      selfData.socials_username.leetcode
        ? `https://leetcode.com/${selfData.socials_username.leetcode}`
        : undefined,
    ].filter(Boolean),

    url: SITE_URL,
    description: selfData.bio,
    knowsAbout: skills,
  };
}

export function generateWebsiteStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: `${selfData.name} - Portfolio`,
    url: SITE_URL,
    description:
      "Portfolio showcasing projects and experience across AI/ML, computer vision, NLP, and full-stack engineering.",
    author: {
      "@type": "Person",
      name: selfData.name,
    },
    publisher: {
      "@type": "Person",
      name: selfData.name,
    },
    inLanguage: "en-US",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: {
      "@type": "Person",
      name: selfData.name,
    },
  };
}

export function generateOrganizationStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: selfData.name,
    url: SITE_URL,
    logo: LOGO_URL,
    description: selfData.bio,
    founder: {
      "@type": "Person",
      name: selfData.name,
    },
    sameAs: [
      selfData.socials_username.github
        ? `https://github.com/${selfData.socials_username.github}`
        : undefined,
      selfData.socials_username.linkedin
        ? `https://linkedin.com/in/${selfData.socials_username.linkedin}`
        : undefined,
      selfData.socials_username.twitter
        ? `https://twitter.com/${selfData.socials_username.twitter}`
        : undefined,
      selfData.socials_username.instagram
        ? `https://instagram.com/${selfData.socials_username.instagram}`
        : undefined,
    ].filter(Boolean),
  };
}

export function generateResumeStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "DigitalDocument",
    name: `${selfData.name} Resume`,
    description:
      "Professional resume of Sidhartha Pulluri, highlighting experience and projects in AI/ML and full-stack engineering.",
    url: RESUME_URL,
    author: {
      "@type": "Person",
      name: selfData.name,
      email: selfData.email,
      jobTitle: selfData.jobTitle,
      worksFor: selfData.workFor
        ? {
            "@type": "Organization",
            name: selfData.workFor,
          }
        : undefined,
      address: {
        "@type": "PostalAddress",
        addressLocality: selfData.current_location.city,
        addressRegion: selfData.current_location.state,
        addressCountry: selfData.current_location.country,
      },
      sameAs: [
        selfData.socials_username.github
          ? `https://github.com/${selfData.socials_username.github}`
          : undefined,
        selfData.socials_username.linkedin
          ? `https://linkedin.com/in/${selfData.socials_username.linkedin}`
          : undefined,
      ].filter(Boolean),
    },
    dateModified: new Date().toISOString(),
    fileFormat: "application/pdf",
    contentUrl: RESUME_PDF_URL,
    downloadUrl: RESUME_PDF_URL,
    keywords: [
      "AI/ML Engineer",
      "Machine Learning",
      "Computer Vision",
      "NLP",
      "Full Stack Developer",
      "Next.js Developer",
      "React Developer",
      "TypeScript",
      "Python",
      "UT Dallas",
      "Dallas",
      "United States",
    ],
  };
}
