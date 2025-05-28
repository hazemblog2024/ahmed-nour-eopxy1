'use client';

import { useState, useEffect } from 'react';
import { Phone, MessageCircle, ChevronUp } from 'lucide-react';

const FloatingButtons = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      if (typeof window !== 'undefined') {
        setShowScrollTop(window.scrollY > 300);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    if (typeof window !== 'undefined') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleWhatsAppClick = () => {
    if (typeof window !== 'undefined') {
      const message = encodeURIComponent('مرحبًا! أود الاستفسار عن خدمات العزل والأرضيات الإيبوكسية.');
      window.open(`https://wa.me/966571935447?text=${message}`, '_blank');
    }
  };

  const handlePhoneClick = () => {
    if (typeof window !== 'undefined') {
      window.location.href = 'tel:+966571935447';
    }
  };

  if (!mounted) {
    return (
      <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
        <div className="w-14 h-14 bg-green-500/50 rounded-full shadow-lg animate-pulse"></div>
        <div className="w-14 h-14 bg-primary/50 rounded-full shadow-lg animate-pulse"></div>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 left-6 z-40 flex flex-col gap-3">
      {/* زر واتساب */}
      <div className="relative group">
        <button
          onClick={handleWhatsAppClick}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center animate-pulse group-hover:animate-none transform hover:scale-110"
          aria-label="تواصل عبر واتساب"
        >
          <MessageCircle className="w-7 h-7" />
        </button>

        {/* رسالة توضيحية */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          تواصل عبر واتساب
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      </div>

      {/* زر الاتصال */}
      <div className="relative group">
        <button
          onClick={handlePhoneClick}
          className="w-14 h-14 bg-primary hover:bg-primary-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110"
          aria-label="اتصل الآن"
        >
          <Phone className="w-7 h-7" />
        </button>

        {/* رسالة توضيحية */}
        <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          اتصل الآن
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full">
            <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
          </div>
        </div>
      </div>

      {/* زر العودة للأعلى */}
      {showScrollTop && (
        <div className="relative group">
          <button
            onClick={scrollToTop}
            className="w-14 h-14 bg-yellow-500 hover:bg-yellow-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center transform hover:scale-110 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
            aria-label="العودة للأعلى"
          >
            <ChevronUp className="w-7 h-7" />
          </button>

          {/* رسالة توضيحية */}
          <div className="absolute right-16 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
            العودة للأعلى
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 translate-x-full">
              <div className="w-0 h-0 border-t-4 border-b-4 border-r-4 border-transparent border-r-gray-900"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FloatingButtons;
