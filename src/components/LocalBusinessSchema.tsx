// مكون Schema للأعمال المحلية فقط (بدون HTML)
export default function LocalBusinessSchema() {
  const businessInfo = {
    name: "شركة أحمد نور للإيبوكسي",
    phone: "+966571935447",
    whatsapp: "966571935447",
    email: "info@3azlepoxy.com",
    address: "جدة، المملكة العربية السعودية",
    googleBusinessUrl: "https://g.co/kgs/h1tbAjS"
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://www.3azlepoxy.com/#business",
    "name": businessInfo.name,
    "image": "https://www.3azlepoxy.com/images/ahmed-nour-epoxy-logo.jpg",
    "telephone": businessInfo.phone,
    "email": businessInfo.email,
    "url": "https://www.3azlepoxy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "جدة",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.4858,
      "longitude": 39.1925
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
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
    "areaServed": {
      "@type": "City",
      "name": "جدة"
    },
    "priceRange": "$$",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "127"
    },
    "sameAs": [
      businessInfo.googleBusinessUrl,
      `https://wa.me/${businessInfo.whatsapp}`
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(localBusinessSchema)
      }}
    />
  );
}
