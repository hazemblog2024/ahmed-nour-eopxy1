import Script from 'next/script';

interface ArticleSchemaProps {
  title: string;
  description: string;
  image: string;
  author: string;
  publishDate: string;
  modifiedDate?: string;
  url: string;
  category: string;
  readTime: string;
}

const ArticleSchema = ({
  title,
  description,
  image,
  author,
  publishDate,
  modifiedDate,
  url,
  category,
  readTime
}: ArticleSchemaProps) => {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": description,
    "image": {
      "@type": "ImageObject",
      "url": image,
      "width": 1200,
      "height": 630,
      "alt": title
    },
    "author": {
      "@type": "Person",
      "name": author,
      "url": "https://www.3azlepoxy.com/about"
    },
    "publisher": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.3azlepoxy.com/logo.png",
        "width": 300,
        "height": 100
      },
      "url": "https://www.3azlepoxy.com",
      "sameAs": [
        "https://wa.me/966571935447",
        "https://g.co/kgs/h1tbAjS"
      ]
    },
    "datePublished": publishDate,
    "dateModified": modifiedDate || publishDate,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "url": url,
    "articleSection": category,
    "wordCount": "800",
    "timeRequired": readTime,
    "inLanguage": "ar-SA",
    "about": {
      "@type": "Thing",
      "name": "عزل الأسطح والمسابح",
      "description": "خدمات العزل المائي والحراري في جدة"
    },
    "mentions": [
      {
        "@type": "Place",
        "name": "جدة",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "جدة",
          "addressRegion": "منطقة مكة المكرمة",
          "addressCountry": "SA"
        }
      }
    ],
    "isPartOf": {
      "@type": "Blog",
      "name": "مدونة أحمد نور للإيبوكسي",
      "url": "https://www.3azlepoxy.com/blog"
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
        "name": "المدونة",
        "item": "https://www.3azlepoxy.com/blog"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": title,
        "item": url
      }
    ]
  };

  return (
    <>
      <Script
        id="article-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema)
        }}
      />
      <Script
        id="breadcrumb-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
    </>
  );
};

export default ArticleSchema;
