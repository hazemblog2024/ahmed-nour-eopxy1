import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "عزل المسابح في جدة | شركة أحمد نور للإيبوكسي - ضمان 15 سنة",
  description: "🏊‍♂️ أفضل شركة عزل مسابح في جدة - خبرة +15 سنة، ضمان 15 سنة، مواد مقاومة للكلور، منع التسرب نهائياً. عزل احترافي للمسابح الخاصة والعامة ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "عزل مسابح جدة",
    "شركة عزل مسابح جدة",
    "أفضل شركة عزل مسابح جدة",
    "عزل مسابح فلل جدة",
    "عزل مسابح خاصة جدة",
    "مقاول عزل مسابح جدة",
    "إصلاح تسرب المسابح جدة",
    "عزل مسابح بالضمان جدة",
    "أسعار عزل المسابح جدة",
    "شركة عزل مسابح معتمدة جدة"
  ],
  openGraph: {
    title: "🏊‍♂️ عزل المسابح في جدة - شركة أحمد نور للإيبوكسي",
    description: "أفضل شركة عزل مسابح في جدة - خبرة +15 سنة، ضمان 15 سنة، مواد مقاومة للكلور 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/services/pool-insulation-jeddah',
    images: ['/images/pool-insulation-jeddah.jpg'],
  },
  alternates: {
    canonical: '/services/pool-insulation-jeddah',
  },
};

export default function PoolInsulationJeddahPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-cyan-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🏊‍♂️ أفضل شركة عزل مسابح في جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                خبرة تزيد عن 15 سنة • ضمان 15 سنة • مواد مقاومة للكلور
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

        {/* خدمات عزل المسابح */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدمات عزل المسابح المتخصصة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم حلول عزل شاملة للمسابح في جدة لضمان عدم التسرب والحفاظ على جودة المياه
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* عزل المسابح الجديدة */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">🆕</div>
                <h3 className="text-xl font-bold mb-3">عزل المسابح الجديدة</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل احترافي من البداية</li>
                  <li>• مواد عالية الجودة</li>
                  <li>• ضمان 15 سنة</li>
                  <li>• تقنيات حديثة</li>
                </ul>
              </div>

              {/* إصلاح تسرب المسابح */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold mb-3">إصلاح تسرب المسابح</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• كشف التسرب بدقة</li>
                  <li>• إصلاح سريع وفعال</li>
                  <li>• بدون تكسير</li>
                  <li>• ضمان على الإصلاح</li>
                </ul>
              </div>

              {/* صيانة دورية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🔄</div>
                <h3 className="text-xl font-bold mb-3">صيانة دورية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• فحص دوري مجاني</li>
                  <li>• صيانة وقائية</li>
                  <li>• تنظيف وتعقيم</li>
                  <li>• متابعة مستمرة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* أنواع المسابح */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع المسابح التي نخدمها
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold mb-2">مسابح الفلل</h3>
                <p className="text-gray-600">مسابح خاصة للفلل والقصور</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏨</span>
                </div>
                <h3 className="font-bold mb-2">مسابح الفنادق</h3>
                <p className="text-gray-600">مسابح الفنادق والمنتجعات</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏫</span>
                </div>
                <h3 className="font-bold mb-2">مسابح النوادي</h3>
                <p className="text-gray-600">مسابح النوادي الرياضية</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-bold mb-2">مسابح تجارية</h3>
                <p className="text-gray-600">مسابح المجمعات التجارية</p>
              </div>
            </div>
          </div>
        </section>

        {/* مشاكل تسرب المسابح */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                علامات تسرب المسابح
              </h2>
              <p className="text-xl text-gray-600">تعرف على العلامات التي تدل على وجود تسرب في مسبحك</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">📉</div>
                <h3 className="text-lg font-bold mb-3">انخفاض مستوى المياه</h3>
                <p className="text-gray-600">فقدان مياه أكثر من المعتاد والحاجة لإضافة مياه بشكل متكرر</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold mb-3">زيادة فاتورة المياه</h3>
                <p className="text-gray-600">ارتفاع غير مبرر في استهلاك المياه وزيادة في الفاتورة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🌱</div>
                <h3 className="text-lg font-bold mb-3">نمو نباتات غير طبيعي</h3>
                <p className="text-gray-600">نمو نباتات أو طحالب حول المسبح بشكل غير طبيعي</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🏗️</div>
                <h3 className="text-lg font-bold mb-3">تشققات في الأرضية</h3>
                <p className="text-gray-600">ظهور تشققات في الأرضية المحيطة بالمسبح</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">💧</div>
                <h3 className="text-lg font-bold mb-3">تشبع التربة</h3>
                <p className="text-gray-600">تشبع التربة حول المسبح بالمياه بشكل مستمر</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🧪</div>
                <h3 className="text-lg font-bold mb-3">تغير في كيمياء المياه</h3>
                <p className="text-gray-600">صعوبة في الحفاظ على توازن كيمياء المياه</p>
              </div>
            </div>
          </div>
        </section>

        {/* المواد المستخدمة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                المواد المستخدمة في عزل المسابح
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-blue-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900">مواد العزل المائي</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• البولي يوريثان السائل</li>
                  <li>• الأغشية البوليمرية</li>
                  <li>• البيتومين المعدل</li>
                  <li>• مواد مقاومة للكلور</li>
                </ul>
              </div>

              <div className="bg-green-50 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-900">مميزات المواد</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>• مقاومة عالية للمواد الكيميائية</li>
                  <li>• مرونة في التطبيق</li>
                  <li>• عمر افتراضي طويل</li>
                  <li>• آمنة صحياً</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* الأسعار */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أسعار عزل المسابح في جدة
              </h2>
              <p className="text-xl text-gray-600">أسعار تنافسية مع ضمان 15 سنة</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                احصل على عرض سعر مجاني الآن
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                نقدم معاينة مجانية وعرض سعر مفصل لمشروع عزل مسبحك
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

        <ContactSection />
      </main>

      <Footer />
      
      <NoSSR>
        <FloatingButtons />
      </NoSSR>
    </div>
  );
}
