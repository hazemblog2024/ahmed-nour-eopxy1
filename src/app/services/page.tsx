import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ServicesSection from '@/components/ServicesSection';
import Image from 'next/image';
import { Shield, Waves, Droplets, Home, Palette, CheckCircle, Star, Wind, Hammer, Wrench, Search } from 'lucide-react';

export const metadata: Metadata = {
  title: 'خدماتنا - شركة أحمد نور للإيبوكسي | عزل أسطح ومسابح وأرضيات إيبوكسي ثلاثية الأبعاد في جدة',
  description: 'خدمات شاملة من شركة أحمد نور للإيبوكسي في جدة: عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد، صيانة مكيفات، كشف تسريبات، أعمال سباكة وهدم. ضمان شامل وخدمة 24 ساعة.',
  keywords: [
    'خدمات أحمد نور للإيبوكسي جدة',
    'عزل أسطح جدة',
    'عزل مسابح جدة',
    'عزل خزانات المياه جدة',
    'أرضيات إيبوكسي ثلاثية الأبعاد',
    'صيانة مكيفات جدة',
    'كشف تسريبات المياه',
    'أعمال السباكة جدة',
    'هدم وترميم جدة',
    'شركة عزل معتمدة جدة'
  ],
  openGraph: {
    title: 'خدماتنا - شركة أحمد نور للإيبوكسي | جميع خدمات العزل في جدة',
    description: 'خدمات متكاملة في العزل والأرضيات الإيبوكسية: عزل أسطح ومسابح وخزانات، صيانة مكيفات، كشف تسريبات',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'خدماتنا - شركة أحمد نور للإيبوكسي',
    description: 'خدمات شاملة في العزل والأرضيات الإيبوكسية والصيانة في جدة',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ServicesPage() {
  const detailedServices = [
    {
      icon: Shield,
      title: 'عزل الأسطح الاحترافي',
      description: 'حماية شاملة للأسطح ضد التسرب والرطوبة باستخدام أحدث مواد العزل المائي والحراري',
      features: [
        'عزل مائي متقدم ضد التسرب',
        'عزل حراري لتوفير الطاقة',
        'مقاومة للعوامل الجوية القاسية',
        'ضمان 10 سنوات على العزل',
        'فحص دوري مجاني',
        'صيانة شاملة'
      ],
      process: [
        'فحص وتقييم السطح',
        'تنظيف وتحضير السطح',
        'تطبيق طبقة الأساس',
        'تطبيق مادة العزل',
        'طبقة الحماية النهائية',
        'فحص الجودة والاختبار'
      ],
      image: 'https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg'
    },
    {
      icon: Waves,
      title: 'عزل المسابح المتخصص',
      description: 'عزل احترافي للمسابح يضمن منع التسرب والحفاظ على جودة المياه لسنوات طويلة',
      features: [
        'مقاوم للكلور والمواد الكيميائية',
        'حماية من التشققات والتسرب',
        'مواد آمنة وصحية',
        'ضمان 15 سنة ضد التسرب',
        'صيانة دورية مجانية',
        'فحص سنوي شامل'
      ],
      process: [
        'تفريغ المسبح وتنظيفه',
        'فحص الهيكل والتشققات',
        'معالجة التشققات والعيوب',
        'تطبيق طبقات العزل',
        'اختبار مقاومة المياه',
        'الملء التجريبي والفحص النهائي'
      ],
      image: 'https://i.postimg.cc/Rh1dvVF5/swimming-pool-insulation-process-jpg.jpg'
    },
    {
      icon: Droplets,
      title: 'عزل خزانات المياه',
      description: 'عزل متخصص لخزانات المياه يضمن نقاء المياه ومنع التلوث والتسرب',
      features: [
        'مواد عزل آمنة وصحية معتمدة',
        'مقاومة للبكتيريا والفطريات',
        'حماية من التآكل والصدأ',
        'ضمان 12 سنة على العزل',
        'فحص دوري لجودة المياه',
        'شهادات صحية معتمدة'
      ],
      process: [
        'تفريغ وتنظيف الخزان',
        'فحص الجدران والقاعدة',
        'معالجة التشققات',
        'تطبيق العزل الداخلي',
        'تطبيق العزل الخارجي',
        'اختبار الجودة والسلامة'
      ],
      image: 'https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg'
    },
    {
      icon: Home,
      title: 'إنشاء المسابح الحديثة',
      description: 'تصميم وإنشاء مسابح حديثة بأعلى معايير الجودة والأمان مع أنظمة عزل متطورة',
      features: [
        'تصميم مخصص حسب المساحة والذوق',
        'أنظمة ترشيح وتنقية متقدمة',
        'إضاءة LED ملونة وتحكم ذكي',
        'أنظمة تدفئة للمياه',
        'ضمان شامل 20 سنة',
        'صيانة دورية مجانية لسنتين'
      ],
      process: [
        'الاستشارة والتصميم',
        'الحفر وتحضير الموقع',
        'صب الخرسانة والهيكل',
        'تركيب أنظمة السباكة',
        'تطبيق العزل والبلاط',
        'تركيب المعدات والاختبار'
      ],
      image: 'https://i.postimg.cc/CxbcN7YL/villa-pool-insulated.jpg'
    },
    {
      icon: Palette,
      title: 'أرضيات إيبوكسي ثلاثية الأبعاد',
      description: 'أرضيات إيبوكسي مذهلة بتصاميم ثلاثية الأبعاد تجمع بين الجمال والمتانة',
      features: [
        'تصاميم ثلاثية الأبعاد مبهرة ومخصصة',
        'مقاومة عالية للخدش والتآكل',
        'سهولة في التنظيف والصيانة',
        'مقاومة للمواد الكيميائية',
        'ضمان 8 سنوات على الجودة',
        'ألوان وتصاميم لا محدودة'
      ],
      process: [
        'تحضير وتنظيف السطح',
        'تطبيق طبقة الأساس',
        'طباعة التصميم ثلاثي الأبعاد',
        'تطبيق طبقات الإيبوكسي',
        'طبقة الحماية الشفافة',
        'التلميع والفحص النهائي'
      ],
      image: 'https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg'
    },
    {
      icon: Wind,
      title: 'صيانة المكيفات الشاملة',
      description: 'خدمات صيانة متكاملة لجميع أنواع المكيفات مع ضمان الجودة والكفاءة العالية',
      features: [
        'تنظيف وصيانة دورية شاملة',
        'إصلاح جميع الأعطال الفنية',
        'تعبئة الغاز وتغيير الفلاتر',
        'فحص شامل لجميع أجزاء النظام',
        'صيانة وحدات التكييف المركزي',
        'خدمة طوارئ سريعة'
      ],
      process: [
        'فحص شامل للوحدة الداخلية والخارجية',
        'تنظيف المبخر والمكثف',
        'فحص مستوى الغاز والضغط',
        'تنظيف أو تغيير الفلاتر',
        'فحص الدوائر الكهربائية',
        'اختبار الأداء والكفاءة'
      ],
      image: 'https://i.postimg.cc/Qt0BrFGW/ac-unit-check.jpg'
    },
    {
      icon: Hammer,
      title: 'أعمال الهدم والتكسير والترميم',
      description: 'خدمات هدم وتكسير احترافية مع أعمال الترميم والتجديد بأعلى معايير الأمان والجودة',
      features: [
        'هدم وتكسير آمن ومنظم',
        'ترميم وتجديد المباني القديمة',
        'إزالة الأنقاض والمخلفات',
        'استخدام معدات حديثة ومتطورة',
        'تجديد الواجهات والديكورات',
        'ضمان السلامة والأمان'
      ],
      process: [
        'دراسة المشروع وتقييم الوضع',
        'وضع خطة العمل والسلامة',
        'تنفيذ أعمال الهدم بحذر',
        'إزالة المخلفات والأنقاض',
        'تحضير الموقع للترميم',
        'تنفيذ أعمال الترميم والتجديد'
      ],
      image: 'https://i.postimg.cc/kMYV1Rv0/wall-demolition-safety.jpg'
    },
    {
      icon: Wrench,
      title: 'أعمال السباكة المتكاملة',
      description: 'خدمات سباكة شاملة من التركيب والصيانة إلى إصلاح التسريبات والأعطال الطارئة',
      features: [
        'تركيب وصيانة جميع أنواع الأنابيب',
        'إصلاح التسريبات فوراً',
        'تركيب الأدوات الصحية الحديثة',
        'خدمة طوارئ 24 ساعة',
        'تسليك المجاري والبالوعات',
        'تركيب أنظمة المياه الساخنة'
      ],
      process: [
        'فحص شامل لنظام السباكة',
        'تحديد مصدر المشكلة',
        'تحضير المواد والأدوات',
        'تنفيذ أعمال الإصلاح أو التركيب',
        'اختبار النظام والتأكد من سلامته',
        'تنظيف الموقع وتسليم العمل'
      ],
      image: 'https://i.postimg.cc/BtWJW36K/image.jpg'
    },
    {
      icon: Search,
      title: 'كشف تسريبات المياه بدون تكسير',
      description: 'خدمة كشف التسريبات المتطورة باستخدام أحدث الأجهزة الإلكترونية بدون الحاجة للتكسير أو الحفر',
      features: [
        'كشف دقيق بدون تكسير أو حفر',
        'أجهزة إلكترونية متطورة ومعتمدة',
        'تحديد مكان التسريب بدقة عالية',
        'تقرير مفصل مع الصور والحلول',
        'خدمة سريعة في نفس اليوم',
        'ضمان على دقة النتائج'
      ],
      process: [
        'فحص أولي للمنطقة المشتبه بها',
        'استخدام أجهزة الكشف الإلكترونية',
        'تحديد مكان التسريب بدقة',
        'توثيق النتائج بالصور والتقارير',
        'تقديم الحلول والتوصيات',
        'متابعة ما بعد الإصلاح'
      ],
      image: 'https://i.postimg.cc/T1vTFGhW/leak-detection-device.jpg'
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* البانر */}
        <section className="bg-gradient-to-r from-primary to-gold text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6">خدمات شركة أحمد نور للإيبوكسي في جدة</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نقدم مجموعة شاملة من خدمات العزل والأرضيات الإيبوكسية بأعلى معايير الجودة والاحترافية
            </p>
          </div>
        </section>

        {/* الخدمات التفصيلية */}
        {detailedServices.map((service, index) => (
          <section key={index} className={`py-20 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}`}>
            <div className="container-custom">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                {/* المحتوى */}
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">{service.title}</h2>
                  </div>

                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                  </p>

                  {/* المميزات */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">المميزات:</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>



                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/contact" className="btn-primary text-center">
                      احصل على عرض سعر
                    </a>
                    <a href="tel:+966571935447" className="btn-outline text-center">
                      استشارة مجانية
                    </a>
                  </div>
                </div>

                {/* الصورة */}
                <div className={index % 2 === 1 ? 'lg:col-start-1' : ''}>
                  <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={service.image}
                      alt={`${service.title} - شركة أحمد نور للإيبوكسي في جدة`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      quality={80}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        {/* دعوة للعمل */}
        <section className="py-20 bg-gradient-to-r from-primary to-gold text-white">
          <div className="container-custom text-center">
            <h2 className="text-4xl font-bold mb-6">
              جاهز لبدء مشروعك؟
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تواصل معنا الآن للحصول على استشارة مجانية وعرض سعر مخصص لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                احصل على عرض سعر مجاني
              </a>
              <a
                href="tel:+966571935447"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-4 px-8 rounded-lg transition-colors"
              >
                اتصل الآن
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
