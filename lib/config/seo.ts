import { siteConfig } from "./site";
import { assets } from "./assets";

export const seoConfig = {
  title: `${siteConfig.name} | Professional Piano Tuning in ${siteConfig.city}`,

  description: `${siteConfig.slogan}. Professional piano tuning, regulation, repair and maintenance throughout ${siteConfig.city} and surrounding communities.`,

  keywords: [
  `Piano Tuning ${siteConfig.city}`,
  `Piano Technician ${siteConfig.city}`,
  `Piano Repair ${siteConfig.city}`,
  "Piano Regulation",
  "Grand Piano Tuning",
  "Upright Piano Tuning",
  `Piano Maintenance ${siteConfig.city}`,
  siteConfig.name,
],

  author: siteConfig.name,

  creator: siteConfig.name,

  openGraphImage: assets.ogImage,

  twitterCard: "summary_large_image" as const,
};