import { MetadataRoute } from "next";

import { selfData } from "@/constant";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = selfData.site_url;

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${baseUrl}/resume`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];
}
