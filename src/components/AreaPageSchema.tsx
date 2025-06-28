interface AreaPageSchemaProps {
  areaName: string;
  areaDescription: string;
  areaUrl: string;
  neighborhoods?: string[];
  coordinates?: {
    latitude: number;
    longitude: number;
  };
}

const AreaPageSchema = ({
  areaName,
  areaDescription,
  areaUrl,
  neighborhoods = [],
  coordinates = { latitude: 21.3891, longitude: 39.8579 }
}: AreaPageSchemaProps) => {
  
  const placeSchema = {
    "@context": "https://schema.org",
    "@type": "Place",
    "name": areaName,
    "description": areaDescription,
    "url": areaUrl,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": areaName,
      "addressRegion": "منطقة مكة المكرمة",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "containedInPlace": {
      "@type": "City",
      "name": "جدة",
      "containedInPlace": {
        "@type": "State",
        "name": "منطقة مكة المكرمة"
      }
    }
  };

  const serviceAreaSchema = {
    "@context": "https://schema.org",
    "@type": "ServiceArea",
    "name": `خدمات العزل في ${areaName}`,
    "description": `نقدم خدمات العزل والإيبوكسي في ${areaName} وجميع الأحياء المحيطة`,
    "geo": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": coordinates.latitude,
        "longitude": coordinates.longitude
      },
      "geoRadius": "10000"
    },
    "serviceProvider": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي",
      "url": "https://www.3azlepoxy.com",
      "telephone": "+966571935447"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `شركة أحمد نور للإيبوكسي - ${areaName}`,
    "description": `أفضل شركة عزل أسطح ومسابح في ${areaName} - خدمة سريعة وجودة عالية`,
    "url": areaUrl,
    "telephone": "+966571935447",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${areaName}، جدة، المملكة العربية السعودية`,
      "addressLocality": areaName,
      "addressRegion": "منطقة مكة المكرمة",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": coordinates.latitude,
      "longitude": coordinates.longitude
    },
    "areaServed": {
      "@type": "Place",
      "name": areaName,
      "geo": {
        "@type": "GeoCircle",
        "geoMidpoint": {
          "@type": "GeoCoordinates",
          "latitude": coordinates.latitude,
          "longitude": coordinates.longitude
        },
        "geoRadius": "5000"
      }
    },
    "serviceArea": neighborhoods.map(neighborhood => ({
      "@type": "Place",
      "name": neighborhood,
      "containedInPlace": {
        "@type": "City",
        "name": areaName
      }
    })),
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `خدمات العزل في ${areaName}`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `عزل الأسطح في ${areaName}`,
            "description": `خدمات عزل الأسطح المتخصصة في ${areaName}`
          },
          "areaServed": areaName
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `عزل المسابح في ${areaName}`,
            "description": `خدمات عزل المسابح الاحترافية في ${areaName}`
          },
          "areaServed": areaName
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `أرضيات الإيبوكسي في ${areaName}`,
            "description": `تركيب أرضيات الإيبوكسي ثلاثية الأبعاد في ${areaName}`
          },
          "areaServed": areaName
        }
      ]
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
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "SAR"
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
        "name": "المناطق",
        "item": "https://www.3azlepoxy.com/areas"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": areaName,
        "item": areaUrl
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(placeSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceAreaSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(localBusinessSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default AreaPageSchema;
