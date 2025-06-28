import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import { ServiceLink } from '@/components/InternalLink';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "مقارنة خدمات العزل والإيبوكسي في جدة | شركة أحمد نور للإيبوكسي",
  description: "⚖️ مقارنة شاملة بين خدمات العزل والإيبوكسي: الأسعار، المميزات، المدة، الضمان. اختر الخدمة المناسبة لاحتياجاتك مع شركة أحمد نور للإيبوكسي في جدة 📞 +966571935447",
  keywords: [
    "مقارنة خدمات العزل",
    "مقارنة أسعار العزل جدة",
    "عزل أسطح مقابل عزل مسابح",
    "إيبوكسي مقابل سيراميك",
    "أفضل خدمة عزل",
    "مقارنة مواد العزل",
    "أسعار العزل في جدة",
    "مقارنة شركات العزل",
    "خدمات العزل المختلفة",
    "اختيار نوع العزل"
  ],
  openGraph: {
    title: "⚖️ مقارنة خدمات العزل والإيبوكسي - شركة أحمد نور",
    description: "مقارنة شاملة بين جميع خدمات العزل والإيبوكسي لمساعدتك في الاختيار الأمثل",
    url: 'https://www.3azlepoxy.com/comparison',
    images: ['/images/services-comparison-jeddah.jpg'],
  },
  alternates: {
    canonical: '/comparison',
  },
};

const servicesComparison = [
  {
    service: "عزل الأسطح",
    icon: "🏠",
    price: "50-80 ريال/م²",
    duration: "3-7 أيام",
    warranty: "10 سنوات",
    urgency: "عالية",
    bestFor: "جميع المباني",
    pros: [
      "حماية شاملة من التسرب",
      "توفير في فاتورة الكهرباء",
      "حماية الهيكل الخرساني",
      "ضمان طويل المدى"
    ],
    cons: [
      "تكلفة أولية متوسطة",
      "يحتاج صيانة دورية"
    ],
    link: "/services/roof-insulation-jeddah"
  },
  {
    service: "عزل المسابح",
    icon: "🏊‍♂️",
    price: "80-150 ريال/م²",
    duration: "5-10 أيام",
    warranty: "15 سنة",
    urgency: "عالية",
    bestFor: "أصحاب المسابح",
    pros: [
      "منع تسرب المياه نهائياً",
      "حماية من المواد الكيميائية",
      "توفير في فاتورة المياه",
      "ضمان ممتد"
    ],
    cons: [
      "تكلفة أعلى نسبياً",
      "يحتاج تفريغ المسبح"
    ],
    link: "/services/pool-insulation-jeddah"
  },
  {
    service: "عزل الخزانات",
    icon: "🚰",
    price: "60-120 ريال/م²",
    duration: "2-5 أيام",
    warranty: "12 سنة",
    urgency: "متوسطة",
    bestFor: "جميع المباني",
    pros: [
      "حماية نقاء المياه",
      "مواد آمنة صحياً",
      "منع التلوث",
      "عمر افتراضي طويل"
    ],
    cons: [
      "يحتاج تفريغ الخزان",
      "صيانة دورية مطلوبة"
    ],
    link: "/services/tank-insulation-jeddah"
  },
  {
    service: "أرضيات الإيبوكسي",
    icon: "✨",
    price: "150-600 ريال/م²",
    duration: "5-10 أيام",
    warranty: "8 سنوات",
    urgency: "منخفضة",
    bestFor: "التجديد والديكور",
    pros: [
      "جمال بصري مذهل",
      "سهولة التنظيف",
      "مقاومة عالية للبقع",
      "تصاميم لا محدودة"
    ],
    cons: [
      "تكلفة عالية للتصاميم المعقدة",
      "يحتاج تحضير دقيق للسطح"
    ],
    link: "/services/3d-epoxy-flooring-jeddah"
  }
];

export default function ComparisonPage() {
  const comparisonSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "مقارنة خدمات العزل والإيبوكسي",
    "description": "مقارنة شاملة بين خدمات العزل والإيبوكسي المختلفة",
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
          __html: JSON.stringify(comparisonSchema)
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ⚖️ مقارنة خدمات العزل والإيبوكسي
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                اختر الخدمة المناسبة لاحتياجاتك مع مقارنة شاملة للأسعار والمميزات
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 استشارة مجانية: 0571935447
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* جدول المقارنة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مقارنة شاملة بين الخدمات
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                جدول مقارنة مفصل لمساعدتك في اتخاذ القرار الصحيح
              </p>
            </div>

            {/* جدول المقارنة للشاشات الكبيرة */}
            <div className="hidden lg:block overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-right">الخدمة</th>
                    <th className="p-4">السعر/م²</th>
                    <th className="p-4">المدة</th>
                    <th className="p-4">الضمان</th>
                    <th className="p-4">الأولوية</th>
                    <th className="p-4">الأنسب لـ</th>
                    <th className="p-4">التفاصيل</th>
                  </tr>
                </thead>
                <tbody>
                  {servicesComparison.map((service, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{service.icon}</span>
                          <span className="font-semibold">{service.service}</span>
                        </div>
                      </td>
                      <td className="p-4 text-center font-semibold text-green-600">
                        {service.price}
                      </td>
                      <td className="p-4 text-center">{service.duration}</td>
                      <td className="p-4 text-center font-semibold text-blue-600">
                        {service.warranty}
                      </td>
                      <td className="p-4 text-center">
                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                          service.urgency === 'عالية' ? 'bg-red-100 text-red-600' :
                          service.urgency === 'متوسطة' ? 'bg-yellow-100 text-yellow-600' :
                          'bg-green-100 text-green-600'
                        }`}>
                          {service.urgency}
                        </span>
                      </td>
                      <td className="p-4 text-center">{service.bestFor}</td>
                      <td className="p-4 text-center">
                        <ServiceLink
                          href={service.link}
                          className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                        >
                          التفاصيل
                        </ServiceLink>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* بطاقات المقارنة للشاشات الصغيرة */}
            <div className="lg:hidden grid gap-6">
              {servicesComparison.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.service}</h3>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-gray-600">السعر:</span>
                      <p className="font-semibold text-green-600">{service.price}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">المدة:</span>
                      <p className="font-semibold">{service.duration}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">الضمان:</span>
                      <p className="font-semibold text-blue-600">{service.warranty}</p>
                    </div>
                    <div>
                      <span className="text-sm text-gray-600">الأولوية:</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        service.urgency === 'عالية' ? 'bg-red-100 text-red-600' :
                        service.urgency === 'متوسطة' ? 'bg-yellow-100 text-yellow-600' :
                        'bg-green-100 text-green-600'
                      }`}>
                        {service.urgency}
                      </span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <span className="text-sm text-gray-600">الأنسب لـ:</span>
                    <p className="font-semibold">{service.bestFor}</p>
                  </div>
                  
                  <ServiceLink
                    href={service.link}
                    className="block w-full bg-purple-600 text-white text-center px-4 py-3 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    عرض التفاصيل
                  </ServiceLink>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* مميزات وعيوب مفصلة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                المميزات والعيوب لكل خدمة
              </h2>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {servicesComparison.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-3xl">{service.icon}</span>
                    <h3 className="text-xl font-bold text-gray-900">{service.service}</h3>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3 flex items-center gap-2">
                        <span>✅</span> المميزات
                      </h4>
                      <ul className="space-y-2">
                        {service.pros.map((pro, proIndex) => (
                          <li key={proIndex} className="text-sm text-gray-700">
                            • {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-600 mb-3 flex items-center gap-2">
                        <span>⚠️</span> الاعتبارات
                      </h4>
                      <ul className="space-y-2">
                        {service.cons.map((con, conIndex) => (
                          <li key={conIndex} className="text-sm text-gray-700">
                            • {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="mt-6">
                    <ServiceLink
                      href={service.link}
                      className="inline-block bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors"
                    >
                      اطلب عرض سعر
                    </ServiceLink>
                  </div>
                </div>
              ))}
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
