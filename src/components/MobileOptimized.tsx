'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

// مكون أزرار الاتصال المحسنة للموبايل
export function MobileCallButtons() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className={`fixed bottom-4 left-4 right-4 z-50 transition-all duration-300 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
    } md:hidden`}>
      <div className="flex gap-2">
        {/* زر الاتصال */}
        <a
          href="tel:+966571935447"
          className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-4 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-bold transition-all duration-300 transform hover:scale-105"
          aria-label="اتصل الآن"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <span className="text-sm">اتصل الآن</span>
        </a>

        {/* زر الواتساب */}
        <a
          href="https://wa.me/966571935447"
          className="flex-1 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-4 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2 font-bold transition-all duration-300 transform hover:scale-105"
          aria-label="واتساب"
        >
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="text-sm">واتساب</span>
        </a>
      </div>
    </div>
  );
}

// مكون القائمة المحسنة للموبايل
export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { href: '/', label: 'الرئيسية' },
    { href: '/services', label: 'الخدمات' },
    { href: '/areas', label: 'المناطق' },
    { href: '/blog', label: 'المدونة' },
    { href: '/pricing', label: 'الأسعار' },
    { href: '/faq', label: 'الأسئلة الشائعة' },
    { href: '/contact', label: 'اتصل بنا' },
  ];

  return (
    <div className="md:hidden">
      {/* زر القائمة */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
        aria-label="فتح القائمة"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          {isOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* القائمة المنسدلة */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 bg-white shadow-lg border-t z-50">
          <div className="py-2">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className="block px-4 py-3 text-gray-700 hover:bg-gray-100 border-b border-gray-100 last:border-b-0"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            
            {/* أزرار الاتصال في القائمة */}
            <div className="px-4 py-3 border-t border-gray-200">
              <div className="flex gap-2">
                <a
                  href="tel:+966571935447"
                  className="flex-1 bg-green-600 text-white py-2 px-3 rounded text-center text-sm font-semibold"
                >
                  📞 اتصل
                </a>
                <a
                  href="https://wa.me/966571935447"
                  className="flex-1 bg-blue-600 text-white py-2 px-3 rounded text-center text-sm font-semibold"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

// مكون النص المحسن للموبايل
export function MobileOptimizedText({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`text-base leading-relaxed md:text-lg md:leading-relaxed ${className}`}>
      {children}
    </div>
  );
}

// مكون الأزرار المحسنة للموبايل
interface MobileButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'call' | 'whatsapp';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function MobileButton({ 
  href, 
  onClick, 
  children, 
  variant = 'primary', 
  size = 'md',
  className = '' 
}: MobileButtonProps) {
  const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    call: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500',
    whatsapp: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500'
  };

  const sizeClasses = {
    sm: 'px-3 py-2 text-sm min-h-[44px]',
    md: 'px-4 py-3 text-base min-h-[48px]',
    lg: 'px-6 py-4 text-lg min-h-[52px]'
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}

// مكون الشبكة المحسنة للموبايل
export function MobileGrid({ children, cols = 1, className = '' }: { 
  children: React.ReactNode; 
  cols?: 1 | 2 | 3;
  className?: string;
}) {
  const gridClasses = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 sm:grid-cols-2',
    3: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
  };

  return (
    <div className={`grid gap-4 md:gap-6 ${gridClasses[cols]} ${className}`}>
      {children}
    </div>
  );
}

// مكون الصور المحسنة للموبايل
export function MobileImage({ 
  src, 
  alt, 
  className = '',
  priority = false 
}: { 
  src: string; 
  alt: string; 
  className?: string;
  priority?: boolean;
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={`w-full h-auto rounded-lg ${className}`}
      loading={priority ? 'eager' : 'lazy'}
      decoding="async"
    />
  );
}

// مكون التحميل السريع للموبايل
export function MobileFastLoad({ children }: { children: React.ReactNode }) {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="flex items-center justify-center min-h-[200px]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return <>{children}</>;
}
