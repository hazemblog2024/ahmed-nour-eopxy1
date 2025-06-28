'use client';

import { useEffect, useState } from 'react';

// مكون لتحسين الأداء العام
export default function PerformanceOptimizer() {
  useEffect(() => {
    // تحسين الخطوط
    const optimizeFonts = () => {
      const link = document.createElement('link');
      link.rel = 'preload';
      link.href = 'https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap';
      link.as = 'style';
      link.onload = () => {
        link.rel = 'stylesheet';
      };
      document.head.appendChild(link);
    };

    // تحسين الصور
    const optimizeImages = () => {
      const images = document.querySelectorAll('img[data-src]');
      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target as HTMLImageElement;
            img.src = img.dataset.src || '';
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    };

    // تحسين التمرير
    const optimizeScrolling = () => {
      let ticking = false;
      
      const updateScrollPosition = () => {
        // تحديث موضع التمرير بكفاءة
        ticking = false;
      };

      const onScroll = () => {
        if (!ticking) {
          requestAnimationFrame(updateScrollPosition);
          ticking = true;
        }
      };

      window.addEventListener('scroll', onScroll, { passive: true });
      
      return () => window.removeEventListener('scroll', onScroll);
    };

    // تحسين الذاكرة
    const optimizeMemory = () => {
      // تنظيف الذاكرة كل 30 ثانية
      const interval = setInterval(() => {
        if (window.gc) {
          window.gc();
        }
      }, 30000);

      return () => clearInterval(interval);
    };

    // تطبيق التحسينات
    optimizeFonts();
    optimizeImages();
    const cleanupScroll = optimizeScrolling();
    const cleanupMemory = optimizeMemory();

    return () => {
      cleanupScroll();
      cleanupMemory();
    };
  }, []);

  return null;
}

// مكون لمراقبة الأداء
export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<any>(null);

  useEffect(() => {
    // مراقبة Core Web Vitals
    const observeWebVitals = () => {
      if ('PerformanceObserver' in window) {
        // مراقبة LCP (Largest Contentful Paint)
        const lcpObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const lastEntry = entries[entries.length - 1];
          setMetrics((prev: any) => ({
            ...prev,
            lcp: lastEntry.startTime
          }));
        });

        // مراقبة FID (First Input Delay)
        const fidObserver = new PerformanceObserver((list) => {
          const entries = list.getEntries();
          entries.forEach((entry) => {
            setMetrics((prev: any) => ({
              ...prev,
              fid: entry.processingStart - entry.startTime
            }));
          });
        });

        // مراقبة CLS (Cumulative Layout Shift)
        const clsObserver = new PerformanceObserver((list) => {
          let clsValue = 0;
          const entries = list.getEntries();
          entries.forEach((entry: any) => {
            if (!entry.hadRecentInput) {
              clsValue += entry.value;
            }
          });
          setMetrics((prev: any) => ({
            ...prev,
            cls: clsValue
          }));
        });

        try {
          lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
          fidObserver.observe({ entryTypes: ['first-input'] });
          clsObserver.observe({ entryTypes: ['layout-shift'] });
        } catch (e) {
          console.log('Performance Observer not supported');
        }
      }
    };

    observeWebVitals();
  }, []);

  // عرض المقاييس في وضع التطوير فقط
  if (process.env.NODE_ENV === 'development' && metrics) {
    return (
      <div className="fixed bottom-4 right-4 bg-black text-white p-2 rounded text-xs z-50">
        <div>LCP: {metrics.lcp?.toFixed(0)}ms</div>
        <div>FID: {metrics.fid?.toFixed(0)}ms</div>
        <div>CLS: {metrics.cls?.toFixed(3)}</div>
      </div>
    );
  }

  return null;
}

// مكون لتحسين التحميل التدريجي
export function ProgressiveLoader({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // محاكاة التحميل التدريجي
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          setIsLoaded(true);
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-4"></div>
          <div className="text-gray-600 mb-2">جاري التحميل...</div>
          <div className="w-48 bg-gray-200 rounded-full h-2 mx-auto">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
          <div className="text-sm text-gray-500 mt-2">{loadingProgress}%</div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// مكون لتحسين الصور بالذكاء الاصطناعي
export function SmartImageLoader({ 
  src, 
  alt, 
  className = '',
  priority = false,
  quality = 75 
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  quality?: number;
}) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  // تحسين جودة الصورة حسب حجم الشاشة
  const getOptimizedSrc = () => {
    if (typeof window === 'undefined') return src;
    
    const width = window.innerWidth;
    const dpr = window.devicePixelRatio || 1;
    const targetWidth = Math.min(width * dpr, 1920);
    
    // إضافة معاملات التحسين للصورة
    const params = new URLSearchParams({
      w: targetWidth.toString(),
      q: quality.toString(),
      f: 'webp'
    });
    
    return `${src}?${params.toString()}`;
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && !error && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
          </svg>
        </div>
      )}
      
      <img
        src={getOptimizedSrc()}
        alt={alt}
        className={`w-full h-auto transition-opacity duration-300 ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        onLoad={() => setIsLoaded(true)}
        onError={() => setError(true)}
      />
      
      {error && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="text-center text-gray-500">
            <svg className="w-8 h-8 mx-auto mb-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <div className="text-sm">فشل تحميل الصورة</div>
          </div>
        </div>
      )}
    </div>
  );
}

// مكون لتحسين الخطوط
export function FontOptimizer() {
  useEffect(() => {
    // تحميل الخطوط بشكل تدريجي
    const loadFonts = async () => {
      if ('fonts' in document) {
        try {
          // تحميل الخط الأساسي أولاً
          await document.fonts.load('400 16px Cairo');
          
          // ثم تحميل باقي الأوزان
          await Promise.all([
            document.fonts.load('300 16px Cairo'),
            document.fonts.load('500 16px Cairo'),
            document.fonts.load('600 16px Cairo'),
            document.fonts.load('700 16px Cairo'),
            document.fonts.load('800 16px Cairo'),
            document.fonts.load('900 16px Cairo'),
          ]);
          
          // إضافة class للإشارة إلى تحميل الخطوط
          document.documentElement.classList.add('fonts-loaded');
        } catch (error) {
          console.log('Font loading failed:', error);
        }
      }
    };

    loadFonts();
  }, []);

  return null;
}
