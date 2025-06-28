'use client';

import { useState, useEffect } from 'react';

interface NetworkInfo {
  effectiveType: string;
  downlink: number;
  rtt: number;
  saveData: boolean;
}

export default function NetworkOptimizer({ children }: { children: React.ReactNode }) {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo | null>(null);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    // التحقق من دعم Network Information API
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      
      const updateNetworkInfo = () => {
        const info: NetworkInfo = {
          effectiveType: connection.effectiveType || 'unknown',
          downlink: connection.downlink || 0,
          rtt: connection.rtt || 0,
          saveData: connection.saveData || false
        };
        
        setNetworkInfo(info);
        
        // تحديد إذا كان الاتصال بطيء
        const isSlow = info.effectiveType === 'slow-2g' || 
                      info.effectiveType === '2g' || 
                      info.downlink < 1.5 ||
                      info.saveData;
        
        setIsSlowConnection(isSlow);
      };

      updateNetworkInfo();
      connection.addEventListener('change', updateNetworkInfo);

      return () => {
        connection.removeEventListener('change', updateNetworkInfo);
      };
    }
  }, []);

  // إذا كان الاتصال بطيء، نعرض نسخة مبسطة
  if (isSlowConnection) {
    return (
      <div className="min-h-screen bg-white">
        {/* رسالة للمستخدمين ذوي الاتصال البطيء */}
        <div className="bg-yellow-50 border-b border-yellow-200 p-3">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-yellow-800">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              <span>تم تحسين الصفحة للاتصال البطيء</span>
            </div>
          </div>
        </div>
        
        {/* محتوى مبسط للاتصال البطيء */}
        <div className="container mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              شركة أحمد نور للإيبوكسي
            </h1>
            <p className="text-lg text-gray-600 mb-6">
              أفضل شركة عزل أسطح ومسابح في جدة
            </p>
            
            {/* أزرار الاتصال المبسطة */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a 
                href="tel:+966571935447"
                className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                📞 اتصل الآن: 0571935447
              </a>
              <a 
                href="https://wa.me/966571935447"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-center"
              >
                💬 واتساب
              </a>
            </div>
          </div>

          {/* خدمات مبسطة */}
          <div className="grid gap-4 mb-8">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">🏠 عزل الأسطح</h3>
              <p className="text-sm text-gray-600">عزل مائي وحراري للأسطح - ضمان 10 سنوات</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">🏊‍♂️ عزل المسابح</h3>
              <p className="text-sm text-gray-600">عزل احترافي للمسابح - ضمان 15 سنة</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-bold mb-2">✨ أرضيات الإيبوكسي</h3>
              <p className="text-sm text-gray-600">أرضيات ثلاثية الأبعاد مذهلة</p>
            </div>
          </div>

          {/* رابط للنسخة الكاملة */}
          <div className="text-center">
            <button
              onClick={() => setIsSlowConnection(false)}
              className="text-blue-600 underline text-sm"
            >
              تحميل النسخة الكاملة
            </button>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}

// مكون لتحسين الصور حسب سرعة الشبكة
export function AdaptiveImage({ 
  src, 
  alt, 
  lowQualitySrc, 
  className = '',
  priority = false 
}: {
  src: string;
  alt: string;
  lowQualitySrc?: string;
  className?: string;
  priority?: boolean;
}) {
  const [useHighQuality, setUseHighQuality] = useState(true);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const isSlow = connection.effectiveType === 'slow-2g' || 
                    connection.effectiveType === '2g' || 
                    connection.saveData;
      
      setIsSlowConnection(isSlow);
      setUseHighQuality(!isSlow);
    }
  }, []);

  const imageSrc = (isSlowConnection && lowQualitySrc && !useHighQuality) ? lowQualitySrc : src;

  return (
    <div className="relative">
      <img
        src={imageSrc}
        alt={alt}
        className={`w-full h-auto ${className}`}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
      
      {/* زر لتحميل الجودة العالية */}
      {isSlowConnection && lowQualitySrc && !useHighQuality && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <button
            onClick={() => setUseHighQuality(true)}
            className="bg-white text-gray-900 px-4 py-2 rounded-lg text-sm font-semibold"
          >
            تحميل جودة عالية
          </button>
        </div>
      )}
    </div>
  );
}

// مكون لتأخير تحميل المحتوى غير الضروري
export function LazyContent({ 
  children, 
  threshold = 0.1,
  fallback = null 
}: {
  children: React.ReactNode;
  threshold?: number;
  fallback?: React.ReactNode;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [elementRef, setElementRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!elementRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(elementRef);

    return () => observer.disconnect();
  }, [elementRef, threshold]);

  return (
    <div ref={setElementRef}>
      {isVisible ? children : (fallback || <div className="h-32 bg-gray-100 animate-pulse rounded"></div>)}
    </div>
  );
}

// مكون لضغط النصوص للاتصال البطيء
export function CompressedText({ 
  fullText, 
  shortText, 
  className = '' 
}: {
  fullText: string;
  shortText: string;
  className?: string;
}) {
  const [showFull, setShowFull] = useState(false);
  const [isSlowConnection, setIsSlowConnection] = useState(false);

  useEffect(() => {
    if ('connection' in navigator) {
      const connection = (navigator as any).connection;
      const isSlow = connection.effectiveType === 'slow-2g' || 
                    connection.effectiveType === '2g' || 
                    connection.saveData;
      
      setIsSlowConnection(isSlow);
    }
  }, []);

  if (!isSlowConnection || showFull) {
    return <div className={className}>{fullText}</div>;
  }

  return (
    <div className={className}>
      {shortText}
      <button
        onClick={() => setShowFull(true)}
        className="text-blue-600 underline mr-2 text-sm"
      >
        اقرأ المزيد
      </button>
    </div>
  );
}
