'use client';

import { useEffect } from 'react';

const SEOOptimizer = () => {
  useEffect(() => {
    // تحسين الأداء للـ SEO
    const optimizeSEO = () => {
      // إضافة structured data ديناميكي
      const addStructuredData = () => {
        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.innerHTML = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          "name": document.title,
          "url": window.location.href,
          "description": document.querySelector('meta[name="description"]')?.getAttribute('content'),
          "inLanguage": "ar-SA",
          "isPartOf": {
            "@type": "WebSite",
            "name": "شركة أحمد نور للإيبوكسي",
            "url": "https://ahmed-nour-eopxy1.vercel.app"
          },
          "breadcrumb": {
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "الرئيسية",
                "item": "https://ahmed-nour-eopxy1.vercel.app"
              }
            ]
          }
        });
        document.head.appendChild(script);
      };

      // تحسين الصور للـ SEO
      const optimizeImages = () => {
        const images = document.querySelectorAll('img');
        images.forEach((img) => {
          if (!img.alt) {
            img.alt = 'شركة أحمد نور للإيبوكسي - خدمات العزل والإيبوكسي في جدة';
          }
          if (!img.title) {
            img.title = img.alt;
          }
        });
      };

      // تحسين الروابط للـ SEO
      const optimizeLinks = () => {
        const links = document.querySelectorAll('a');
        links.forEach((link) => {
          if (link.href && link.href.includes('tel:')) {
            link.setAttribute('aria-label', 'اتصل بشركة أحمد نور للإيبوكسي');
          }
          if (link.href && link.href.includes('whatsapp')) {
            link.setAttribute('aria-label', 'تواصل عبر واتساب مع شركة أحمد نور للإيبوكسي');
          }
          if (link.href && link.href.includes('mailto:')) {
            link.setAttribute('aria-label', 'راسل شركة أحمد نور للإيبوكسي');
          }
        });
      };

      // تحسين العناوين للـ SEO
      const optimizeHeadings = () => {
        const headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
        headings.forEach((heading) => {
          if (!heading.id) {
            const text = heading.textContent?.replace(/\s+/g, '-').toLowerCase();
            heading.id = text || '';
          }
        });
      };

      // إضافة canonical URL
      const addCanonicalURL = () => {
        let canonical = document.querySelector('link[rel="canonical"]');
        if (!canonical) {
          canonical = document.createElement('link');
          canonical.setAttribute('rel', 'canonical');
          canonical.setAttribute('href', window.location.href);
          document.head.appendChild(canonical);
        }
      };

      // تحسين meta tags
      const optimizeMetaTags = () => {
        // إضافة meta tags إضافية للـ SEO
        const metaTags = [
          { name: 'robots', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { name: 'googlebot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { name: 'bingbot', content: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
          { property: 'og:locale', content: 'ar_SA' },
          { property: 'og:type', content: 'website' },
          { property: 'og:site_name', content: 'شركة أحمد نور للإيبوكسي' },
          { name: 'twitter:card', content: 'summary_large_image' },
          { name: 'twitter:site', content: '@ahmed_nour_epoxy' },
          { name: 'twitter:creator', content: '@ahmed_nour_epoxy' },
          { name: 'application-name', content: 'شركة أحمد نور للإيبوكسي' },
          { name: 'msapplication-TileColor', content: '#0033a0' },
          { name: 'theme-color', content: '#0033a0' }
        ];

        metaTags.forEach(tag => {
          const existingTag = document.querySelector(`meta[name="${tag.name}"], meta[property="${tag.property}"]`);
          if (!existingTag) {
            const meta = document.createElement('meta');
            if (tag.name) meta.setAttribute('name', tag.name);
            if (tag.property) meta.setAttribute('property', tag.property);
            meta.setAttribute('content', tag.content);
            document.head.appendChild(meta);
          }
        });
      };

      // تشغيل جميع التحسينات
      addStructuredData();
      optimizeImages();
      optimizeLinks();
      optimizeHeadings();
      addCanonicalURL();
      optimizeMetaTags();
    };

    // تشغيل التحسينات بعد تحميل الصفحة
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', optimizeSEO);
    } else {
      optimizeSEO();
    }

    // تحسين الأداء
    const optimizePerformance = () => {
      // تحسين الصور lazy loading
      const images = document.querySelectorAll('img');
      images.forEach(img => {
        if (!img.loading) {
          img.loading = 'lazy';
        }
      });

      // تحسين الخطوط
      const fontLinks = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
      fontLinks.forEach(link => {
        link.setAttribute('rel', 'preload');
        link.setAttribute('as', 'style');
        link.setAttribute('onload', "this.onload=null;this.rel='stylesheet'");
      });
    };

    optimizePerformance();

    // تتبع الأحداث للـ SEO
    const trackSEOEvents = () => {
      // تتبع النقرات على الروابط الخارجية
      document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        const link = target.closest('a');
        if (link && link.href) {
          if (link.href.includes('tel:')) {
            // تتبع المكالمات الهاتفية
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'phone_call', {
                event_category: 'contact',
                event_label: 'header_phone'
              });
            }
          }
          if (link.href.includes('whatsapp')) {
            // تتبع رسائل واتساب
            if (typeof window !== 'undefined' && (window as any).gtag) {
              (window as any).gtag('event', 'whatsapp_click', {
                event_category: 'contact',
                event_label: 'whatsapp_button'
              });
            }
          }
        }
      });

      // تتبع التمرير للصفحة
      let scrollTracked = false;
      window.addEventListener('scroll', () => {
        if (!scrollTracked && window.scrollY > window.innerHeight * 0.5) {
          scrollTracked = true;
          if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('event', 'scroll_depth', {
              event_category: 'engagement',
              event_label: '50_percent'
            });
          }
        }
      });
    };

    trackSEOEvents();

  }, []);

  return null; // هذا المكون لا يعرض أي شيء
};

export default SEOOptimizer;
