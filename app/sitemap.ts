import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/config/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      priority: 1,
    },
    {
      url: `${siteConfig.url}/about`,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/services`,
      priority: 0.9,
    },
    {
      url: `${siteConfig.url}/book`,
      priority: 0.9,
    },
  ];
}