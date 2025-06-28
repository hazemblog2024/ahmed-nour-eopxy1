import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "خدمات العزل والإيبوكسي في جنوب جدة | شركة أحمد نور للإيبوكسي",
  description: "🏆 أفضل شركة عزل أسطح ومسابح في جنوب جدة - خدمة سريعة لجميع أحياء جنوب جدة، العزيزية، الرويس، المرجان، الحمراء. خبرة +15 سنة ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "عزل أسطح جنوب جدة",
    "شركة عزل جنوب جدة",
    "عزل مسابح جنوب جدة",
    "أرضيات إيبوكسي جنوب جدة",
    "عزل أسطح العزيزية جدة",
    "عزل أسطح الرويس جدة",
    "عزل أسطح المرجان جدة",
    "عزل أسطح الحمراء جدة",
    "مقاول عزل جنوب جدة",
    "شركة عزل معتمدة جنوب جدة"
  ],
  openGraph: {
    title: "🏆 خدمات العزل والإيبوكسي في جنوب جدة - شركة أحمد نور",
    description: "أفضل شركة عزل أسطح ومسابح في جنوب جدة - خدمة سريعة لجميع الأحياء 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/areas/south-jeddah',
    images: ['/images/south-jeddah-services.jpg'],
  },
  alternates: {
    canonical: '/areas/south-jeddah',
  },
};

export default function SouthJeddahPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-teal-800 to-cyan-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🏆 خدمات العزل والإيبوكسي في جنوب جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                خدمة سريعة لجميع أحياء جنوب جدة • خبرة +15 سنة • ضمان شامل
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
                  className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* أحياء جنوب جدة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                الأحياء التي نخدمها في جنوب جدة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدماتنا لجميع أحياء جنوب جدة بأعلى معايير الجودة والاحترافية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold mb-3">حي العزيزية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل أسطح الفلل الفاخرة</li>
                  <li>• عزل المسابح الخاصة</li>
                  <li>• أرضيات إيبوكسي للقصور</li>
                  <li>• خدمة VIP متميزة</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">حي الرويس</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل مقاوم للرطوبة البحرية</li>
                  <li>• حماية من الهواء المالح</li>
                  <li>• مواد مقاومة للتآكل</li>
                  <li>• صيانة دورية مجانية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-4xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold mb-3">حي المرجان</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل المنتجعات والفنادق</li>
                  <li>• عزل المسابح الكبيرة</li>
                  <li>• أرضيات إيبوكسي للمرافق السياحية</li>
                  <li>• خدمة 24/7</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-4xl mb-4">🔴</div>
                <h3 className="text-xl font-bold mb-3">حي الحمراء</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل المباني السكنية</li>
                  <li>• عزل خزانات المياه</li>
                  <li>• إصلاح التسريبات</li>
                  <li>• أسعار اقتصادية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-yellow-600 text-4xl mb-4">🏙️</div>
                <h3 className="text-xl font-bold mb-3">حي الأندلس</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل المجمعات السكنية</li>
                  <li>• عزل المباني التجارية</li>
                  <li>• أرضيات إيبوكسي للمحلات</li>
                  <li>• ضمان طويل المدى</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-indigo-600 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3">الأحياء الأخرى</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• الثغر</li>
                  <li>• الكندرة</li>
                  <li>• البلد</li>
                  <li>• وجميع أحياء جنوب جدة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* التحديات الخاصة بجنوب جدة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                حلول خاصة لتحديات جنوب جدة
              </h2>
              <p className="text-xl text-gray-600">نفهم التحديات الخاصة بالمنطقة الساحلية</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">التحديات البيئية:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600">🌊</span>
                    </div>
                    <div>
                      <h4 className="font-bold">الرطوبة العالية</h4>
                      <p className="text-gray-600">نستخدم مواد مقاومة للرطوبة العالية</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600">🧂</span>
                    </div>
                    <div>
                      <h4 className="font-bold">الهواء المالح</h4>
                      <p className="text-gray-600">مواد مقاومة للتآكل والصدأ</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <span className="text-yellow-600">🌡️</span>
                    </div>
                    <div>
                      <h4 className="font-bold">التقلبات الحرارية</h4>
                      <p className="text-gray-600">عزل يتحمل التقلبات الحرارية الشديدة</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <span className="text-purple-600">💨</span>
                    </div>
                    <div>
                      <h4 className="font-bold">الرياح القوية</h4>
                      <p className="text-gray-600">تثبيت قوي ومقاوم للرياح</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">حلولنا المتخصصة:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>مواد مقاومة للبيئة البحرية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>طبقات حماية إضافية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>فحص دوري مجاني</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>ضمان ممتد للمناطق الساحلية</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-green-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">✓</span>
                    <span>صيانة وقائية متخصصة</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* الخدمات المتاحة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا في جنوب جدة
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold mb-2">عزل الأسطح</h3>
                <p className="text-gray-600">مقاوم للبيئة البحرية</p>
              </div>

              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏊‍♂️</span>
                </div>
                <h3 className="font-bold mb-2">عزل المسابح</h3>
                <p className="text-gray-600">للمنتجعات والفلل</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚰</span>
                </div>
                <h3 className="font-bold mb-2">عزل الخزانات</h3>
                <p className="text-gray-600">حماية من التلوث</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold mb-2">أرضيات إيبوكسي</h3>
                <p className="text-gray-600">للمرافق السياحية</p>
              </div>
            </div>
          </div>
        </section>

        {/* مشاريع في جنوب جدة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مشاريعنا المنجزة في جنوب جدة
              </h2>
              <p className="text-xl text-gray-600">أكثر من 180 مشروع مكتمل في جنوب جدة</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏨</div>
                <h3 className="text-xl font-bold mb-3">25+ منتجع وفندق</h3>
                <p className="text-gray-600">عزل المنتجعات السياحية في المرجان</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">120+ فيلا</h3>
                <p className="text-gray-600">عزل الفلل في العزيزية والأندلس</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏊‍♂️</div>
                <h3 className="text-xl font-bold mb-3">60+ مسبح</h3>
                <p className="text-gray-600">عزل المسابح الخاصة والعامة</p>
              </div>
            </div>
          </div>
        </section>

        {/* عروض خاصة */}
        <section className="py-16 bg-green-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                عروض خاصة لسكان جنوب جدة
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-3xl mb-4">🎁</div>
                <h3 className="text-xl font-bold mb-3">عرض المناطق الساحلية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• خصم 15% على عزل الأسطح</li>
                  <li>• فحص مجاني للرطوبة</li>
                  <li>• ضمان ممتد سنة إضافية</li>
                  <li>• صيانة دورية مجانية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-3xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold mb-3">باقة المنتجعات</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• أسعار خاصة للمشاريع الكبيرة</li>
                  <li>• خدمة 24/7 للطوارئ</li>
                  <li>• فريق متخصص للمنتجعات</li>
                  <li>• ضمان شامل 15 سنة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                خدمة سريعة في جنوب جدة
              </h2>
              <p className="text-xl mb-8">نصل إليك خلال 45 دقيقة</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 اتصل الآن: 0571935447
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-green-800 hover:bg-green-900 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
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
