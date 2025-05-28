'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Shield, Droplets, Waves, Home, Palette, Wind, Hammer, Wrench, Search } from 'lucide-react';

const ServicesSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      id: 1,
      icon: Shield,
      title: 'عزل الأسطح',
      description: 'حماية شاملة للأسطح ضد التسرب والرطوبة باستخدام أحدث مواد العزل المائي والحراري',
      features: [
        'عزل مائي وحراري متقدم',
        'مقاومة للعوامل الجوية',
        'ضمان طويل المدى',
        'تقنيات حديثة ومواد عالية الجودة'
      ],
      image: 'https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg',
      color: 'from-blue-500 to-blue-700'
    },
    {
      id: 2,
      icon: Waves,
      title: 'عزل المسابح',
      description: 'عزل احترافي للمسابح يضمن منع التسرب والحفاظ على جودة المياه لسنوات طويلة',
      features: [
        'عزل مقاوم للكلور والمواد الكيميائية',
        'حماية من التشققات والتسرب',
        'تقنيات عزل متخصصة للمسابح',
        'صيانة دورية وضمان شامل'
      ],
      image: 'https://i.postimg.cc/Rh1dvVF5/swimming-pool-insulation-process-jpg.jpg',
      color: 'from-cyan-500 to-blue-600'
    },
    {
      id: 3,
      icon: Droplets,
      title: 'عزل خزانات المياه',
      description: 'عزل متخصص لخزانات المياه يضمن نقاء المياه ومنع التلوث والتسرب',
      features: [
        'مواد عزل آمنة وصحية',
        'مقاومة للبكتيريا والفطريات',
        'حماية من التآكل والصدأ',
        'فحص دوري وصيانة شاملة'
      ],
      image: 'https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg',
      color: 'from-teal-500 to-cyan-600'
    },
    {
      id: 4,
      icon: Home,
      title: 'إنشاء المسابح',
      description: 'تصميم وإنشاء مسابح حديثة بأعلى معايير الجودة والأمان مع أنظمة عزل متطورة',
      features: [
        'تصميم مخصص حسب المساحة',
        'أنظمة ترشيح متقدمة',
        'إضاءة LED وتحكم ذكي',
        'ضمان شامل على الإنشاء والعزل'
      ],
      image: 'https://i.postimg.cc/CxbcN7YL/villa-pool-insulated.jpg',
      color: 'from-blue-600 to-indigo-700'
    },
    {
      id: 5,
      icon: Palette,
      title: 'أرضيات إيبوكسي ثلاثية الأبعاد',
      description: 'أرضيات إيبوكسي مذهلة بتصاميم ثلاثية الأبعاد تجمع بين الجمال والمتانة',
      features: [
        'تصاميم ثلاثية الأبعاد مبهرة',
        'مقاومة للخدش والتآكل',
        'سهولة في التنظيف والصيانة',
        'ألوان وتصاميم متنوعة'
      ],
      image: 'https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg',
      color: 'from-purple-500 to-pink-600'
    },
    {
      id: 6,
      icon: Wind,
      title: 'صيانة المكيفات',
      description: 'خدمات صيانة شاملة لجميع أنواع المكيفات مع ضمان الجودة والكفاءة',
      features: [
        'تنظيف وصيانة دورية',
        'إصلاح الأعطال الفنية',
        'تعبئة الغاز وتغيير الفلاتر',
        'فحص شامل للنظام'
      ],
      image: 'https://i.postimg.cc/Qt0BrFGW/ac-unit-check.jpg',
      color: 'from-blue-400 to-cyan-500'
    },
    {
      id: 7,
      icon: Hammer,
      title: 'أعمال الهدم والتكسير والترميم',
      description: 'خدمات هدم وتكسير احترافية مع أعمال الترميم والتجديد بأعلى معايير الأمان',
      features: [
        'هدم وتكسير آمن ومنظم',
        'ترميم وتجديد المباني',
        'إزالة الأنقاض والمخلفات',
        'استخدام معدات حديثة'
      ],
      image: 'https://i.postimg.cc/kMYV1Rv0/wall-demolition-safety.jpg',
      color: 'from-orange-500 to-red-600'
    },
    {
      id: 8,
      icon: Wrench,
      title: 'أعمال السباكة',
      description: 'خدمات سباكة متكاملة من التركيب والصيانة إلى إصلاح التسريبات والأعطال',
      features: [
        'تركيب وصيانة الأنابيب',
        'إصلاح التسريبات فوراً',
        'تركيب الأدوات الصحية',
        'خدمة طوارئ 24 ساعة'
      ],
      image: 'https://i.postimg.cc/BtWJW36K/image.jpg',
      color: 'from-green-500 to-blue-600'
    },
    {
      id: 9,
      icon: Search,
      title: 'كشف تسريبات المياه',
      description: 'خدمة متخصصة لكشف تسريبات المياه باستخدام أحدث الأجهزة والتقنيات المتطورة',
      features: [
        'كشف التسريبات بدون تكسير',
        'أجهزة كشف إلكترونية متطورة',
        'تحديد مكان التسريب بدقة عالية',
        'تقرير مفصل مع الحلول المقترحة'
      ],
      image: 'https://i.postimg.cc/T1vTFGhW/leak-detection-device.jpg',
      color: 'from-indigo-500 to-purple-600'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            خدماتنا <span className="gradient-text">المتخصصة</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نقدم مجموعة شاملة من خدمات العزل والأرضيات الإيبوكسية بأعلى معايير الجودة والاحترافية في جدة
          </p>
        </div>

        {/* قائمة الخدمات */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* قائمة الخدمات */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                  activeService === index
                    ? 'bg-white shadow-xl border-r-4 border-primary'
                    : 'bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveService(index)}
              >
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                    {activeService === index && (
                      <div className="mt-4 space-y-2 animate-fade-in">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-primary rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                        <button className="mt-4 text-primary hover:text-primary-600 font-semibold flex items-center gap-2 transition-colors">
                          اعرف المزيد
                          <span className="text-lg">←</span>
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* صورة الخدمة النشطة */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={services[activeService].image}
                alt={services[activeService].title}
                fill
                className="object-cover transition-all duration-500"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${services[activeService].color} opacity-20`}></div>
            </div>

            {/* بطاقة معلومات */}
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl max-w-sm">
              <h4 className="font-bold text-gray-900 mb-2">
                {services[activeService].title}
              </h4>
              <p className="text-gray-600 text-sm">
                خدمة احترافية بضمان شامل وجودة عالية
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-4 h-4 bg-gold rounded-full"></div>
                  ))}
                </div>
                <span className="text-sm text-gray-500">تقييم ممتاز</span>
              </div>
            </div>
          </div>
        </div>

        {/* دعوة للعمل */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-gold p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              هل تحتاج استشارة مجانية؟
            </h3>
            <p className="text-lg mb-6 opacity-90">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+966571935447"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966571935447"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
