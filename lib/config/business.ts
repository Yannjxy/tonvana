import { siteConfig } from "./site";
import { assets } from "./assets";

export const businessConfig = {
  name: siteConfig.name,

  description: siteConfig.slogan,

  url: siteConfig.url,

  email: siteConfig.email,

  telephone: siteConfig.phone,

  logo: `${siteConfig.url}${assets.logo}`,

  address: {
    addressLocality: siteConfig.city,

    addressRegion: siteConfig.province,

    addressCountry: siteConfig.country,
  },

  areaServed: siteConfig.serviceArea,

  priceRange: "$$",
};