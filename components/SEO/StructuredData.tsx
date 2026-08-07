import { businessConfig } from "@/lib/config/business";

export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",

    name: businessConfig.name,

    description: businessConfig.description,

    url: businessConfig.url,

    logo: businessConfig.logo,

    email: businessConfig.email,

    telephone: businessConfig.telephone,

    priceRange: businessConfig.priceRange,

    areaServed: businessConfig.areaServed,

    address: {
      "@type": "PostalAddress",

      addressLocality:
        businessConfig.address.addressLocality,

      addressRegion:
        businessConfig.address.addressRegion,

      addressCountry:
        businessConfig.address.addressCountry,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(jsonLd),
      }}
    />
  );
}