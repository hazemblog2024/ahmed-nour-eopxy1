import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import ServicePageSchema from '@/components/ServicePageSchema';
import { RelatedLinks, Breadcrumbs } from '@/components/InternalLink';
import { getRelatedLinks, getBreadcrumbs } from '@/utils/internalLinking';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "عزل الأسطح في جدة | شركة أحمد نور للإيبوكسي - ضمان 10 سنوات",
  description: "🏆 أفضل شركة عزل أسطح في جدة - خبرة +15 سنة، ضمان 10 سنوات، مواد عالية الجودة، أسعار منافسة. عزل مائي وحراري احترافي للفلل والعمائر ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "عزل أسطح جدة",
    "شركة عزل أسطح جدة",
    "أفضل شركة عزل أسطح جدة",
    "عزل أسطح فلل جدة",
    "عزل أسطح عمائر جدة",
    "عزل مائي جدة",
    "عزل حراري جدة",
    "مقاول عزل أسطح جدة",
    "أسعار عزل الأسطح جدة",
    "شركة عزل معتمدة جدة",
    "عزل أسطح بالضمان جدة",
    "عزل أسطح رخيص جدة"
  ],
  openGraph: {
    title: "🏆 عزل الأسطح في جدة - شركة أحمد نور للإيبوكسي",
    description: "أفضل شركة عزل أسطح في جدة - خبرة +15 سنة، ضمان 10 سنوات، مواد عالية الجودة 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/services/roof-insulation-jeddah',
    images: ['/images/roof-insulation-jeddah.jpg'],
  },
  alternates: {
    canonical: '/services/roof-insulation-jeddah',
  },
};

export default function RoofInsulationJeddahPage() {
  const currentPath = '/services/roof-insulation-jeddah';
  const relatedLinks = getRelatedLinks(currentPath);
  const breadcrumbs = getBreadcrumbs(currentPath);

  return (
    <div className="min-h-screen">
      <ServicePageSchema
        serviceName="عزل الأسطح في جدة"
        serviceDescription="أفضل شركة عزل أسطح في جدة - خبرة +15 سنة، ضمان 10 سنوات، مواد عالية الجودة"
        serviceUrl="https://www.3azlepoxy.com/services/roof-insulation-jeddah"
        price="25-80 ريال/م²"
        duration="3-7 أيام"
        areaServed="جدة"
      />
      <Header />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4">
        <Breadcrumbs items={breadcrumbs} />
      </div>
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🏆 أفضل شركة عزل أسطح في جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                خبرة تزيد عن 15 سنة • ضمان 10 سنوات • مواد عالية الجودة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 اتصل الآن: 0571935447
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* خدمات العزل */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدمات عزل الأسطح المتخصصة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم حلول عزل شاملة للأسطح في جدة باستخدام أحدث التقنيات والمواد عالية الجودة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* العزل المائي */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">💧</div>
                <h3 className="text-xl font-bold mb-3">العزل المائي</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• حماية من تسرب المياه</li>
                  <li>• مقاومة الأمطار والرطوبة</li>
                  <li>• مواد عالية الجودة</li>
                  <li>• ضمان 10 سنوات</li>
                </ul>
              </div>

              {/* العزل الحراري */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-4xl mb-4">🌡️</div>
                <h3 className="text-xl font-bold mb-3">العزل الحراري</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• توفير في فاتورة الكهرباء</li>
                  <li>• راحة حرارية أفضل</li>
                  <li>• مقاومة الحرارة العالية</li>
                  <li>• تقليل استهلاك التكييف</li>
                </ul>
              </div>

              {/* العزل المختلط */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-xl font-bold mb-3">العزل المختلط</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• حماية شاملة</li>
                  <li>• مائي وحراري معاً</li>
                  <li>• أفضل قيمة مقابل السعر</li>
                  <li>• الحل الأمثل للمناخ السعودي</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* مميزات الشركة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا تختار شركة أحمد نور للإيبوكسي؟
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⭐</span>
                </div>
                <h3 className="font-bold mb-2">خبرة +15 سنة</h3>
                <p className="text-gray-600">خبرة طويلة في مجال العزل</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="font-bold mb-2">ضمان 10 سنوات</h3>
                <p className="text-gray-600">ضمان شامل على جميع الأعمال</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h3 className="font-bold mb-2">مواد عالية الجودة</h3>
                <p className="text-gray-600">أفضل المواد المستوردة</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="font-bold mb-2">أسعار منافسة</h3>
                <p className="text-gray-600">أفضل الأسعار في السوق</p>
              </div>
            </div>
          </div>
        </section>

        {/* أنواع الأسطح */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع الأسطح التي نخدمها
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">أسطح الفلل</h3>
                <p className="text-gray-600">عزل احترافي لأسطح الفلل السكنية بجميع أنواعها</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3">أسطح العمائر</h3>
                <p className="text-gray-600">حلول عزل متقدمة للعمائر والمباني التجارية</p>
              </div>

              <div className="text-center">
                <div className="text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3">أسطح المصانع</h3>
                <p className="text-gray-600">عزل صناعي متخصص للمصانع والمستودعات</p>
              </div>
            </div>
          </div>
        </section>

        {/* الأسعار */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أسعار عزل الأسطح في جدة
              </h2>
              <p className="text-xl text-gray-600">أسعار تنافسية وشفافة بدون رسوم خفية</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                احصل على عرض سعر مجاني الآن
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                نقدم معاينة مجانية وعرض سعر مفصل لمشروعك
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 اتصل للحصول على عرض سعر
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* الروابط ذات الصلة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <RelatedLinks
              title="خدمات ذات صلة"
              links={relatedLinks.map(link => ({
                href: link.href,
                title: link.title,
                description: link.description,
                category: link.category
              }))}
            />
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
