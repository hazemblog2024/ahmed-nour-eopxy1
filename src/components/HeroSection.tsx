'use client';

import Image from 'next/image';
import { Shield, Award, Users, Clock } from 'lucide-react';

const HeroSection = () => {
  const stats = [
    { icon: Shield, number: '500+', label: 'مشروع مكتمل' },
    { icon: Award, number: '15+', label: 'سنة خبرة' },
    { icon: Users, number: '300+', label: 'عميل راضي' },
    { icon: Clock, number: '24/7', label: 'دعم فني' },
  ];

  return (
    <>
      {/* البنر المتطور */}
      <section className="relative min-h-screen sm:h-[90vh] md:h-[85vh] lg:h-[80vh] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
        {/* خلفية متحركة */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-gold/20 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-5 left-5 sm:top-10 sm:left-10 w-32 h-32 sm:w-72 sm:h-72 bg-primary/10 rounded-full blur-3xl animate-bounce"></div>
            <div className="absolute bottom-5 right-5 sm:bottom-10 sm:right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gold/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 sm:w-80 sm:h-80 bg-blue-500/5 rounded-full blur-2xl"></div>
          </div>
        </div>

        {/* صورة الخلفية */}
        <div className="absolute inset-0 opacity-20 sm:opacity-30">
          <Image
            src="https://i.postimg.cc/RFcWN3zF/epoxy-roof-insulation-company-jeddah.jpg"
            alt="أحمد نور للإيبوكسي - خدمات العزل والأرضيات الإيبوكسية في جدة"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>

        {/* المحتوى الرئيسي */}
        <div className="relative z-10 flex items-center justify-center min-h-screen sm:h-[90vh] md:h-[85vh] lg:h-[80vh] px-2 sm:px-3 md:px-4 py-4 sm:py-8 md:py-0">
          <div className="container-custom w-full max-w-full">
            <div className="text-center text-white max-w-full mx-auto px-2 sm:px-4">

              {/* شارة الجودة */}
              <div className="inline-flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-gold/20 to-primary/20 backdrop-blur-lg border border-gold/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 animate-fade-in">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-gold" />
                <span className="text-gold font-semibold text-sm sm:text-base">شركة معتمدة ومرخصة في جدة</span>
                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* العنوان الرئيسي */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight mb-2 sm:mb-3 md:mb-4 animate-fade-in">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
                  أحمد نور
                </span>
                <span className="bg-gradient-to-r from-gold via-yellow-400 to-gold bg-clip-text text-transparent block">
                  للإيبوكسي
                </span>
              </h1>

              {/* العنوان الفرعي */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 mb-2 sm:mb-3 max-w-full sm:max-w-3xl mx-auto leading-relaxed animate-fade-in px-1 sm:px-2">
                خبرة تتجاوز التوقعات في العزل والأرضيات الإيبوكسية
              </p>

              <p className="text-xs sm:text-sm md:text-base text-gray-400 mb-4 sm:mb-6 md:mb-8 max-w-full sm:max-w-2xl mx-auto animate-fade-in px-1 sm:px-2">
                نقدم حلول عزل احترافية وأرضيات إيبوكسي ثلاثية الأبعاد عالية الجودة في جدة والمناطق المحيطة
              </p>

              {/* أزرار العمل المتطورة */}
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center mb-4 sm:mb-6 md:mb-10 animate-fade-in px-1 sm:px-2">
                <a
                  href="#services"
                  className="group relative overflow-hidden bg-gradient-to-r from-primary to-blue-600 hover:from-blue-600 hover:to-primary text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-blue-500/25 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    اكتشف خدماتنا
                  </span>
                </a>

                <a
                  href="tel:+966571935447"
                  className="group relative overflow-hidden bg-gradient-to-r from-gold to-yellow-500 hover:from-yellow-500 hover:to-gold text-white font-bold py-2.5 px-4 sm:py-3 sm:px-6 md:py-4 md:px-8 rounded-lg sm:rounded-xl md:rounded-2xl transition-all duration-500 transform hover:scale-105 sm:hover:scale-110 shadow-2xl hover:shadow-gold/25 w-full sm:w-auto"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  <span className="relative flex items-center justify-center gap-1 sm:gap-2 md:gap-3 text-sm sm:text-base md:text-lg">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 group-hover:scale-125 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    اتصل الآن
                  </span>
                </a>
              </div>

              {/* معلومات الاتصال */}
              <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-lg sm:rounded-xl md:rounded-2xl p-2 sm:p-3 md:p-4 max-w-full sm:max-w-xs md:max-w-sm mx-auto animate-fade-in">
                <div className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2 md:gap-4 text-white">
                  <div className="flex items-center gap-1 sm:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-xs sm:text-sm md:text-base font-semibold">+966 57 193 5447</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 sm:h-6 bg-white/20"></div>
                  <div className="flex items-center gap-1 sm:gap-2">
                    <svg className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-xs sm:text-sm">جدة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* مؤشر التمرير */}
        <div className="absolute bottom-2 sm:bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-4 h-6 sm:w-5 sm:h-8 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-0.5 h-1.5 sm:w-1 sm:h-2 bg-white/50 rounded-full mt-1 sm:mt-1.5 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* قسم الإحصائيات المتطور */}
      <section className="py-4 sm:py-6 md:py-8 lg:py-12 bg-gradient-to-r from-gray-50 via-white to-gray-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-gold/5"></div>
        <div className="container-custom relative z-10 px-2 sm:px-4">
          <div className="text-center mb-4 sm:mb-6 md:mb-8">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">إنجازاتنا في أرقام</h2>
            <div className="w-8 sm:w-12 md:w-16 h-0.5 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center">
                <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-md sm:rounded-lg md:rounded-xl p-2 sm:p-3 md:p-4 hover:border-primary/30 hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-gradient-to-br from-primary to-gold rounded-md sm:rounded-lg flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-3 group-hover:rotate-12 transition-transform duration-300 shadow-md">
                    <stat.icon className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 text-white" />
                  </div>
                  <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-black text-gray-900 mb-0.5 sm:mb-1 group-hover:text-primary transition-colors duration-300">
                    {stat.number}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-600 font-medium group-hover:text-gray-900 transition-colors duration-300 leading-tight">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
