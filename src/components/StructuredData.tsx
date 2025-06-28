const StructuredData = () => {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness", "HomeAndConstructionBusiness"],
    "name": "شركة أحمد نور للإيبوكسي",
    "alternateName": ["Ahmed Nour Epoxy Company", "أحمد نور للإيبوكسي", "شركة أحمد نور للعزل"],
    "url": "https://ahmed-nour-eopxy1.vercel.app",
    "logo": "https://ahmed-nour-eopxy1.vercel.app/logo.png",
    "image": "https://ahmed-nour-eopxy1.vercel.app/og-image.jpg",
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "telephone": "+966571935447",
        "contactType": "customer service",
        "areaServed": ["SA", "جدة", "مكة المكرمة"],
        "availableLanguage": ["Arabic", "ar"],
        "hoursAvailable": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Saturday", "Sunday"],
          "opens": "08:00",
          "closes": "18:00"
        }
      },
      {
        "@type": "ContactPoint",
        "telephone": "+966571935447",
        "contactType": "emergency",
        "areaServed": ["SA", "جدة"],
        "availableLanguage": "Arabic",
        "hoursAvailable": "24/7"
      }
    ],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "جدة، المملكة العربية السعودية",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "postalCode": "21589",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3891,
      "longitude": 39.8579
    },
    "sameAs": [
      "https://www.facebook.com/ahmednourepoxy",
      "https://www.instagram.com/ahmednourepoxy",
      "https://twitter.com/ahmednourepoxy",
      "https://wa.me/966571935447"
    ],
    "description": "🏆 شركة أحمد نور للإيبوكسي الرائدة في جدة - أفضل مقاول عزل أسطح ومسابح معتمد ومرخص. خبرة +15 سنة في عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد، صيانة المكيفات وكشف تسريبات المياه. ضمان 10 سنوات - خدمة 24/7 - أسعار منافسة.",
    "foundingDate": "2008",
    "numberOfEmployees": "25-50",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer", "نقدي", "فيزا", "ماستركارد", "تحويل بنكي"],
    "currenciesAccepted": ["SAR", "ريال سعودي"],
    "slogan": "خبرة تتجاوز التوقعات",
    "keywords": "عزل أسطح جدة، عزل مسابح جدة، أرضيات إيبوكسي جدة، مقاول عزل معتمد جدة، شركة عزل موثوقة جدة",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 21.3891,
        "longitude": 39.8579
      },
      "geoRadius": "50000"
    }
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "Contractor"],
    "name": "شركة أحمد نور للإيبوكسي",
    "alternateName": "أحمد نور للإيبوكسي - أفضل مقاول عزل معتمد في جدة",
    "image": ["https://ahmed-nour-eopxy1.vercel.app/logo.png", "https://ahmed-nour-eopxy1.vercel.app/og-image.jpg"],
    "telephone": "+966571935447",
    "email": "info@ahmed-nour-epoxy.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "جدة، المملكة العربية السعودية",
      "addressLocality": "جدة",
      "addressRegion": "منطقة مكة المكرمة",
      "postalCode": "21589",
      "addressCountry": "SA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 21.3891,
      "longitude": 39.8579
    },
    "url": "https://ahmed-nour-eopxy1.vercel.app",
    "description": "🏆 أفضل شركة عزل أسطح ومسابح معتمدة في جدة - خبرة +15 سنة - ضمان 10 سنوات - خدمة 24/7 - أسعار منافسة",
    "priceRange": "$$",
    "paymentAccepted": ["Cash", "Credit Card", "Bank Transfer"],
    "currenciesAccepted": "SAR",
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
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "محمد العتيبي"
        },
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "reviewBody": "خدمة ممتازة وجودة عالية في عزل السطح. الفريق محترف ومنجز العمل في الوقت المحدد. أنصح بشدة بالتعامل مع شركة أحمد نور للإيبوكسي."
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات العزل والإيبوكسي",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "عزل الأسطح",
            "description": "عزل أسطح بأحدث المواد والتقنيات مع ضمان 10 سنوات"
          },
          "priceRange": "$$",
          "availability": "https://schema.org/InStock"
        }
      ]
    },
    "areaServed": {
      "@type": "City",
      "name": "جدة",
      "containedInPlace": {
        "@type": "State",
        "name": "منطقة مكة المكرمة"
      }
    }
  };

  const servicesSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "عزل وأرضيات إيبوكسي",
    "provider": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "areaServed": {
      "@type": "City",
      "name": "جدة"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "خدمات العزل والإيبوكسي",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "عزل الأسطح",
            "description": "خدمات عزل الأسطح بأحدث المواد والتقنيات"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "عزل المسابح",
            "description": "عزل المسابح بمواد عالية الجودة ومقاومة للكلور"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "عزل الخزانات",
            "description": "عزل خزانات المياه بمواد آمنة صحياً"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "أرضيات إيبوكسي ثلاثية الأبعاد",
            "description": "أرضيات إيبوكسي بتصاميم ثلاثية الأبعاد مذهلة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "صيانة المكيفات",
            "description": "خدمات صيانة شاملة لجميع أنواع المكيفات"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "أعمال الهدم والترميم",
            "description": "خدمات هدم وترميم احترافية بمعايير أمان عالية"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "أعمال السباكة",
            "description": "خدمات سباكة متكاملة مع خدمة طوارئ 24 ساعة"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "كشف تسريبات المياه",
            "description": "كشف تسريبات المياه بأحدث الأجهزة الإلكترونية بدون تكسير"
          }
        }
      ]
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
        "item": "https://ahmed-nour-eopxy1.vercel.app"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "خدماتنا",
        "item": "https://ahmed-nour-eopxy1.vercel.app/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "معرض الأعمال",
        "item": "https://ahmed-nour-eopxy1.vercel.app/portfolio"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "المدونة",
        "item": "https://ahmed-nour-eopxy1.vercel.app/blog"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "تواصل معنا",
        "item": "https://ahmed-nour-eopxy1.vercel.app/contact"
      }
    ]
  };

  // إضافة WebSite Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "شركة أحمد نور للإيبوكسي",
    "alternateName": "أحمد نور للإيبوكسي - أفضل مقاول عزل في جدة",
    "url": "https://www.3azlepoxy.com",
    "description": "أفضل شركة عزل أسطح ومسابح في جدة - خبرة +15 سنة - ضمان شامل",
    "inLanguage": "ar",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.3azlepoxy.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    },
    "publisher": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.3azlepoxy.com/logo.png"
      }
    }
  };

  // إضافة Professional Service Schema
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "شركة أحمد نور للإيبوكسي",
    "description": "خدمات عزل احترافية وأرضيات إيبوكسي في جدة",
    "serviceType": ["عزل الأسطح", "عزل المسابح", "أرضيات الإيبوكسي"],
    "provider": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "areaServed": [
      {
        "@type": "City",
        "name": "جدة",
        "containedInPlace": {
          "@type": "State",
          "name": "منطقة مكة المكرمة",
          "containedInPlace": {
            "@type": "Country",
            "name": "المملكة العربية السعودية"
          }
        }
      }
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": "+966571935447",
      "serviceUrl": "https://www.3azlepoxy.com"
    }
  };

  // إضافة FAQ Schema للأسئلة الشائعة
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "ما هي أفضل شركة عزل أسطح في جدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "شركة أحمد نور للإيبوكسي هي أفضل شركة عزل أسطح في جدة بخبرة تزيد عن 15 سنة وضمان 10 سنوات على جميع الأعمال. نستخدم أحدث المواد والتقنيات العالمية."
        }
      },
      {
        "@type": "Question",
        "name": "كم سعر عزل السطح في جدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أسعار عزل الأسطح في جدة تبدأ من 25 ريال للمتر المربع حسب نوع المادة والمساحة. نقدم عروض أسعار مجانية وأسعار منافسة مع ضمان الجودة."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون ضمان على أعمال العزل؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم ضمان شامل لمدة 10 سنوات على جميع أعمال العزل مع خدمة صيانة مجانية وفريق دعم فني متاح 24/7."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي أفضل مواد عزل الأسطح في جدة؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أفضل مواد عزل الأسطح في جدة هي البولي يوريثان والأغشية البوليمرية والبيتومين المعدل، حيث تتحمل المناخ الحار والرطوبة العالية."
        }
      },
      {
        "@type": "Question",
        "name": "كم تستغرق مدة عزل السطح؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "تستغرق مدة عزل السطح من 3-7 أيام حسب المساحة ونوع العزل المطلوب. نلتزم بالمواعيد المحددة ونعمل بكفاءة عالية."
        }
      },
      {
        "@type": "Question",
        "name": "هل تقدمون خدمة كشف تسريبات المياه؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "نعم، نقدم خدمة كشف تسريبات المياه بأحدث الأجهزة الإلكترونية بدون تكسير أو حفر، مع تحديد مكان التسرب بدقة عالية."
        }
      },
      {
        "@type": "Question",
        "name": "ما هي أسعار أرضيات الإيبوكسي ثلاثية الأبعاد؟",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "أسعار أرضيات الإيبوكسي ثلاثية الأبعاد تبدأ من 150 ريال للمتر المربع حسب التصميم والجودة. نقدم عروض أسعار مجانية مع إمكانية المعاينة."
        }
      }
    ]
  };

  // إضافة Product Schema للخدمات
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": "خدمات عزل الأسطح في جدة",
    "description": "خدمات عزل أسطح احترافية في جدة بأحدث المواد والتقنيات مع ضمان 10 سنوات",
    "brand": {
      "@type": "Brand",
      "name": "شركة أحمد نور للإيبوكسي"
    },
    "category": "خدمات العزل والبناء",
    "offers": {
      "@type": "Offer",
      "price": "50",
      "priceCurrency": "SAR",
      "priceValidUntil": "2025-12-31",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "شركة أحمد نور للإيبوكسي"
      },
      "areaServed": {
        "@type": "City",
        "name": "جدة"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "156",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  // إضافة How-to Schema
  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": "كيفية اختيار أفضل شركة عزل أسطح في جدة",
    "description": "دليل شامل لاختيار أفضل شركة عزل أسطح موثوقة في جدة",
    "image": "https://www.3azlepoxy.com/images/how-to-choose-insulation-company.jpg",
    "totalTime": "PT30M",
    "estimatedCost": {
      "@type": "MonetaryAmount",
      "currency": "SAR",
      "value": "0"
    },
    "supply": [
      {
        "@type": "HowToSupply",
        "name": "قائمة بأسماء الشركات المحلية"
      },
      {
        "@type": "HowToSupply",
        "name": "معايير التقييم والمقارنة"
      }
    ],
    "tool": [
      {
        "@type": "HowToTool",
        "name": "الإنترنت للبحث والمراجعات"
      }
    ],
    "step": [
      {
        "@type": "HowToStep",
        "name": "البحث عن الشركات المحلية",
        "text": "ابحث عن شركات العزل المحلية في جدة واجمع قائمة بالخيارات المتاحة",
        "url": "https://www.3azlepoxy.com/blog"
      },
      {
        "@type": "HowToStep",
        "name": "التحقق من الخبرة والسمعة",
        "text": "تأكد من خبرة الشركة وسمعتها في السوق من خلال المراجعات والتوصيات",
        "url": "https://www.3azlepoxy.com/about"
      },
      {
        "@type": "HowToStep",
        "name": "طلب عروض أسعار",
        "text": "اطلب عروض أسعار من عدة شركات وقارن بين الأسعار والخدمات المقدمة",
        "url": "https://www.3azlepoxy.com/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
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
          __html: JSON.stringify(servicesSchema)
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
          __html: JSON.stringify(faqSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(professionalServiceSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(productSchema)
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(howToSchema)
        }}
      />
    </>
  );
};

export default StructuredData;
