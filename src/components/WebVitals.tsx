'use client';

import { useEffect } from 'react';
import { onCLS, onFID, onFCP, onLCP, onTTFB } from 'web-vitals';

interface WebVitalsProps {
  debug?: boolean;
}

export default function WebVitals({ debug = false }: WebVitalsProps) {
  useEffect(() => {
    // قياس Core Web Vitals
    onCLS((metric) => {
      if (debug) {
        console.log('CLS:', metric);
      }
      // إرسال البيانات إلى Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'CLS',
          value: Math.round(metric.value * 1000),
          custom_parameter_1: metric.id,
        });
      }
    });

    onFID((metric) => {
      if (debug) {
        console.log('FID:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FID',
          value: Math.round(metric.value),
          custom_parameter_1: metric.id,
        });
      }
    });

    onFCP((metric) => {
      if (debug) {
        console.log('FCP:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'FCP',
          value: Math.round(metric.value),
          custom_parameter_1: metric.id,
        });
      }
    });

    onLCP((metric) => {
      if (debug) {
        console.log('LCP:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'LCP',
          value: Math.round(metric.value),
          custom_parameter_1: metric.id,
        });
      }
    });

    onTTFB((metric) => {
      if (debug) {
        console.log('TTFB:', metric);
      }
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'web_vitals', {
          event_category: 'Web Vitals',
          event_label: 'TTFB',
          value: Math.round(metric.value),
          custom_parameter_1: metric.id,
        });
      }
    });
  }, [debug]);

  return null;
}

// إضافة types للـ gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      targetId: string,
      config?: {
        event_category?: string;
        event_label?: string;
        value?: number;
        custom_parameter_1?: string;
      }
    ) => void;
  }
}
