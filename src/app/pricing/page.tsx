import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import { ServiceLink } from '@/components/InternalLink';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "أسعار خدمات العزل والإيبوكسي في جدة 2025 | شركة أحمد نور للإيبوكسي",
  description: "💰 أسعار شفافة لجميع خدمات العزل والإيبوكسي في جدة 2025. عروض أسعار مفصلة للأسطح، المسابح، الخزانات، والإيبوكسي. بدون رسوم خفية ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "أسعار العزل في جدة",
    "أسعار عزل الأسطح جدة",
    "أسعار عزل المسابح جدة",
    "أسعار أرضيات الإيبوكسي جدة",
    "تكلفة العزل في جدة",
    "عروض أسعار العزل",
    "أسعار شركة عزل جدة",
    "تكلفة عزل السطح",
    "أسعار العزل 2025",
    "عرض سعر مجاني جدة"
  ],
  openGraph: {
    title: "💰 أسعار خدمات العزل والإيبوكسي - شركة أحمد نور",
    description: "أسعار شفافة ومفصلة لجميع خدمات العزل والإيبوكسي في جدة مع ضمان أفضل الأسعار",
    url: 'https://www.3azlepoxy.com/pricing',
    images: ['/images/pricing-services-jeddah.jpg'],
  },
  alternates: {
    canonical: '/pricing',
  },
};

const pricingData = [
  {
    category: "عزل الأسطح",
    icon: "🏠",
    services: [
      {
        name: "العزل المائي الأساسي",
        price: "25-35 ريال/م²",
        features: ["بيتومين عادي", "ضمان 5 سنوات", "مناسب للميزانية المحدودة"],
        warranty: "5 سنوات",
        link: "/services/roof-insulation-jeddah"
      },
      {
        name: "العزل المائي المتقدم",
        price: "40-55 ريال/م²",
        features: ["بولي يوريثان", "ضمان 10 سنوات", "مقاومة عالية"],
        warranty: "10 سنوات",
        popular: true,
        link: "/services/roof-insulation-jeddah"
      },
      {
        name: "العزل المختلط (مائي + حراري)",
        price: "60-80 ريال/م²",
        features: ["حماية شاملة", "توفير الطاقة", "ضمان 10 سنوات"],
        warranty: "10 سنوات",
        link: "/services/roof-insulation-jeddah"
      }
    ]
  },
  {
    category: "عزل المسابح",
    icon: "🏊‍♂️",
    services: [
      {
        name: "عزل المسابح الصغيرة",
        price: "80-120 ريال/م²",
        features: ["مسابح حتى 50 م²", "مواد مقاومة للكلور", "ضمان 15 سنة"],
        warranty: "15 سنة",
        link: "/services/pool-insulation-jeddah"
      },
      {
        name: "عزل المسابح الكبيرة",
        price: "100-150 ريال/م²",
        features: ["مسابح أكثر من 50 م²", "تقنيات متقدمة", "ضمان 15 سنة"],
        warranty: "15 سنة",
        popular: true,
        link: "/services/pool-insulation-jeddah"
      },
      {
        name: "إصلاح تسريبات المسابح",
        price: "150-300 ريال/م²",
        features: ["كشف دقيق للتسرب", "إصلاح بدون تكسير", "ضمان الإصلاح"],
        warranty: "5 سنوات",
        link: "/services/pool-insulation-jeddah"
      }
    ]
  },
  {
    category: "عزل الخزانات",
    icon: "🚰",
    services: [
      {
        name: "عزل الخزانات العلوية",
        price: "60-100 ريال/م²",
        features: ["مواد آمنة صحياً", "مقاومة الأشعة فوق البنفسجية", "ضمان 12 سنة"],
        warranty: "12 سنة",
        link: "/services/tank-insulation-jeddah"
      },
      {
        name: "عزل الخزانات الأرضية",
        price: "80-120 ريال/م²",
        features: ["حماية من الرطوبة الجوفية", "مواد عالية الجودة", "ضمان 12 سنة"],
        warranty: "12 سنة",
        popular: true,
        link: "/services/tank-insulation-jeddah"
      }
    ]
  },
  {
    category: "أرضيات الإيبوكسي",
    icon: "✨",
    services: [
      {
        name: "إيبوكسي عادي",
        price: "150-250 ريال/م²",
        features: ["ألوان أساسية", "تصاميم بسيطة", "ضمان 5 سنوات"],
        warranty: "5 سنوات",
        link: "/services/3d-epoxy-flooring-jeddah"
      },
      {
        name: "إيبوكسي ثلاثي الأبعاد",
        price: "300-450 ريال/م²",
        features: ["تصاميم ثلاثية الأبعاد", "جودة عالية", "ضمان 8 سنوات"],
        warranty: "8 سنوات",
        popular: true,
        link: "/services/3d-epoxy-flooring-jeddah"
      },
      {
        name: "إيبوكسي مخصص",
        price: "500-800 ريال/م²",
        features: ["تصاميم حسب الطلب", "أفضل المواد", "ضمان 10 سنوات"],
        warranty: "10 سنوات",
        link: "/services/3d-epoxy-flooring-jeddah"
      }
    ]
  }
];

export default function PricingPage() {
  const pricingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "أسعار خدمات العزل والإيبوكسي",
    "description": "أسعار شفافة ومفصلة لجميع خدمات العزل والإيبوكسي في جدة",
    "provider": {
      "@type": "Organization",
      "name": "شركة أحمد نور للإيبوكسي"
    }
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(pricingSchema)
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-800 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                💰 أسعار خدمات العزل والإيبوكسي
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                أسعار شفافة ومفصلة • بدون رسوم خفية • عروض أسعار مجانية
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 عرض سعر مجاني: 0571935447
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* جداول الأسعار */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                جداول الأسعار التفصيلية
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                أسعار محدثة لعام 2025 مع ضمان أفضل الأسعار في السوق
              </p>
            </div>

            <div className="space-y-12">
              {pricingData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-2xl font-bold">{category.category}</h3>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {category.services.map((service, serviceIndex) => (
                        <div 
                          key={serviceIndex} 
                          className={`relative border rounded-lg p-6 ${
                            service.popular 
                              ? 'border-green-500 bg-green-50' 
                              : 'border-gray-200 hover:border-blue-300'
                          } transition-colors`}
                        >
                          {service.popular && (
                            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                الأكثر طلباً
                              </span>
                            </div>
                          )}
                          
                          <div className="text-center mb-4">
                            <h4 className="text-lg font-bold text-gray-900 mb-2">
                              {service.name}
                            </h4>
                            <div className="text-3xl font-bold text-green-600 mb-2">
                              {service.price}
                            </div>
                            <div className="text-sm text-gray-600">
                              ضمان {service.warranty}
                            </div>
                          </div>
                          
                          <ul className="space-y-2 mb-6">
                            {service.features.map((feature, featureIndex) => (
                              <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                                <span className="text-green-500 mt-1">✓</span>
                                {feature}
                              </li>
                            ))}
                          </ul>
                          
                          <ServiceLink
                            href={service.link}
                            className={`block w-full text-center px-4 py-3 rounded-lg font-semibold transition-colors ${
                              service.popular
                                ? 'bg-green-600 text-white hover:bg-green-700'
                                : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                          >
                            اطلب عرض سعر
                          </ServiceLink>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* العوامل المؤثرة على السعر */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  العوامل المؤثرة على السعر
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-green-600">📈</span>
                    عوامل زيادة السعر
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• مساحة أكبر من 500 م²</li>
                    <li>• حالة السطح تحتاج إصلاحات</li>
                    <li>• مواقع صعبة الوصول</li>
                    <li>• العمل في أوقات الطوارئ</li>
                    <li>• تصاميم معقدة ومخصصة</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <span className="text-blue-600">📉</span>
                    عوامل تقليل السعر
                  </h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• مساحات كبيرة (خصم الكمية)</li>
                    <li>• سطح جديد وجاهز</li>
                    <li>• الحجز المبكر</li>
                    <li>• مشاريع متعددة</li>
                    <li>• العمل في الأوقات العادية</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ضمان أفضل الأسعار */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                🏆 ضمان أفضل الأسعار
              </h2>
              <p className="text-xl mb-8">
                نضمن لك أفضل الأسعار في السوق مع أعلى معايير الجودة
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl mb-2">💰</div>
                  <h3 className="font-bold mb-2">أسعار تنافسية</h3>
                  <p className="text-sm">أفضل الأسعار مقارنة بالسوق</p>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl mb-2">🔍</div>
                  <h3 className="font-bold mb-2">شفافية كاملة</h3>
                  <p className="text-sm">بدون رسوم خفية أو مفاجآت</p>
                </div>
                
                <div className="bg-white bg-opacity-10 rounded-lg p-4">
                  <div className="text-2xl mb-2">📋</div>
                  <h3 className="font-bold mb-2">عروض مجانية</h3>
                  <p className="text-sm">معاينة وعرض سعر مجاني</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 احصل على عرض سعر الآن
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-blue-800 hover:bg-blue-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
      
      <NoSSR>
        <FloatingButtons />
      </NoSSR>
    </div>
  );
}
