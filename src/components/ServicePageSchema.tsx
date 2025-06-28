interface ServicePageSchemaProps {
  serviceName: string;
  serviceDescription: string;
  serviceUrl: string;
  price?: string;
  duration?: string;
  areaServed?: string;
}

const ServicePageSchema = ({
  serviceName,
  serviceDescription,
  serviceUrl,
  price = "$$",
  duration = "3-7 أيام",
  areaServed = "جدة"
}: ServicePageSchemaProps) => {
  
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": serviceDescription,
    "url": serviceUrl,
    "provider": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي",
      "url": "https://www.3azlepoxy.com",
      "telephone": "+966571935447",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "جدة، المملكة العربية السعودية",
        "addressLocality": "جدة",
        "addressRegion": "منطقة مكة المكرمة",
        "addressCountry": "SA"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": areaServed,
      "containedInPlace": {
        "@type": "State",
        "name": "منطقة مكة المكرمة"
      }
    },
    "offers": {
      "@type": "Offer",
      "priceRange": price,
      "priceCurrency": "SAR",
      "availability": "https://schema.org/InStock",
      "validFrom": "2025-01-01",
      "validThrough": "2025-12-31"
    },
    "serviceType": serviceName,
    "category": "خدمات العزل والبناء",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "الرئيسية",
        "item": "https://www.3azlepoxy.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "الخدمات",
        "item": "https://www.3azlepoxy.com/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": serviceName,
        "item": serviceUrl
      }
    ]
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "شركة أحمد نور للإيبوكسي",
    "description": `أفضل شركة ${serviceName} في ${areaServed} - خبرة +15 سنة - ضمان شامل`,
    "url": "https://www.3azlepoxy.com",
    "telephone": "+966571935447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "جدة، المملكة العربية السعودية",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3891,
      "longitude": 39.8579
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "14:00",
        "closes": "18:00"
      }
    ],
    "priceRange": price,
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "SAR"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
    </>
  );
};

export default ServicePageSchema;
