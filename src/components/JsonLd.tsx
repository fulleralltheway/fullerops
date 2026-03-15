import { SITE, SERVICES } from "@/lib/constants";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: "AI-powered business operations partner for small businesses — website, content, leads, follow-ups, and strategy.",
    url: SITE.url,
    telephone: SITE.phone,
    email: SITE.email,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    founder: {
      "@type": "Person",
      name: SITE.owner,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Louisville",
      addressRegion: "KY",
      addressCountry: "US",
    },
    serviceType: SERVICES.map((s) => s.title),
    priceRange: "$1,000-$2,500/month",
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Business Operations",
    provider: {
      "@type": "ProfessionalService",
      name: SITE.name,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description: "All-inclusive AI-powered business operations — website, content, leads, follow-ups, reviews, and strategy for small businesses.",
    offers: {
      "@type": "Offer",
      price: "1000",
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: "1000",
        priceCurrency: "USD",
        unitText: "MONTH",
        minPrice: "1000",
        maxPrice: "1500",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  );
}
