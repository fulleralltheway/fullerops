import { SITE, SERVICES } from "@/lib/constants";

export function JsonLd() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: SITE.name,
    description: "AI-powered business operations for small businesses. Website, content, leads, follow-ups, and strategy. One person, everything handled.",
    url: SITE.url,
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
    priceRange: "$$",
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
    description: "All-inclusive AI-powered business operations for small businesses. Website, content, leads, follow-ups, reviews, and strategy.",
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      description: "Custom pricing based on business needs. Request a quote for details.",
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
