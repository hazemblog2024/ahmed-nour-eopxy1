'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, MapPin } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'معرض الأعمال', href: '/portfolio' },
    { name: 'المدونة', href: '/blog' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <>
      {/* شريط المعلومات العلوي */}
      <div className="bg-primary text-white py-2 text-sm hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+966 57 193 5447</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>جدة، المملكة العربية السعودية</span>
              </div>
            </div>
            <div className="hidden lg:block">
              <span>شركة أحمد نور للإيبوكسي - خبرة تتجاوز التوقعات</span>
            </div>
          </div>
        </div>
      </div>

      {/* الهيدر الرئيسي */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'header-blur shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center py-3 md:py-4">
            {/* الشعار */}
            <Link href="/" className="flex items-center gap-2 md:gap-3">
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg md:text-xl">أن</span>
              </div>
              <div>
                <h1 className="text-lg md:text-xl font-bold text-primary">أحمد نور للإيبوكسي</h1>
                <p className="text-xs md:text-sm text-gray-600 hidden sm:block">خدمات الإيبوكسي والعزل المائي والصيانة</p>
              </div>
            </Link>

            {/* القائمة الرئيسية - سطح المكتب */}
            <nav className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-300 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </nav>

            {/* أزرار التواصل */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="tel:+966571935447"
                className="btn-outline text-sm"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966571935447"
                className="btn-primary text-sm"
              >
                واتساب
              </a>
            </div>

            {/* زر القائمة - الموبايل */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 text-gray-700 hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* القائمة المنسدلة - الموبايل */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t shadow-lg">
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-primary font-medium py-2 border-b border-gray-100 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="flex flex-col gap-3 mt-4">
                  <a
                    href="tel:+966571935447"
                    className="btn-outline text-center"
                  >
                    اتصل الآن
                  </a>
                  <a
                    href="https://wa.me/966571935447"
                    className="btn-primary text-center"
                  >
                    واتساب
                  </a>
                </div>
              </nav>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;
