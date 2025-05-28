'use client';

import Script from 'next/script';
import { useEffect, useState } from 'react';

const GoogleAnalytics = () => {
  const [isClient, setIsClient] = useState(false);
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || 'G-XXXXXXXXXX';

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
};

// دالة لتتبع الأحداث المخصصة
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// دالة لتتبع تحويلات الهاتف
export const trackPhoneCall = () => {
  trackEvent('click', 'contact', 'phone_call');
};

// دالة لتتبع رسائل واتساب
export const trackWhatsApp = () => {
  trackEvent('click', 'contact', 'whatsapp_message');
};

// دالة لتتبع طلبات عروض الأسعار
export const trackQuoteRequest = () => {
  trackEvent('submit', 'lead_generation', 'quote_request');
};

// دالة لتتبع حجز المواعيد
export const trackAppointmentBooking = () => {
  trackEvent('submit', 'lead_generation', 'appointment_booking');
};

// دالة لتتبع استخدام حاسبة التكلفة
export const trackCostCalculator = () => {
  trackEvent('use', 'tools', 'cost_calculator');
};

// دالة لتتبع قراءة المقالات
export const trackBlogRead = (articleTitle: string) => {
  trackEvent('read', 'content', `blog_article_${articleTitle}`);
};

// دالة لتتبع مشاهدة معرض الأعمال
export const trackPortfolioView = (projectTitle: string) => {
  trackEvent('view', 'portfolio', `project_${projectTitle}`);
};

// دالة لتتبع تحميل الصفحات
export const trackPageView = (pageName: string) => {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
      page_title: pageName,
      page_location: window.location.href,
    });
  }
};

export default GoogleAnalytics;
