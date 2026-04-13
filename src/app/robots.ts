import { MetadataRoute } from "next";

import { selfData } from "@/constant";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api", "/private"],
      },
    ],
    sitemap: `${selfData.site_url}/sitemap.xml`,
  };
}
