import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "عزل خزانات المياه في جدة | شركة أحمد نور للإيبوكسي - ضمان 12 سنة",
  description: "🚰 أفضل شركة عزل خزانات المياه في جدة - مواد آمنة صحياً، ضمان 12 سنة، حماية من التلوث والتسرب. عزل خزانات علوية وأرضية ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "عزل خزانات المياه جدة",
    "شركة عزل خزانات جدة",
    "أفضل شركة عزل خزانات جدة",
    "عزل خزانات علوية جدة",
    "عزل خزانات أرضية جدة",
    "مقاول عزل خزانات جدة",
    "إصلاح تسرب خزانات جدة",
    "عزل خزانات بالضمان جدة",
    "أسعار عزل الخزانات جدة",
    "شركة عزل خزانات معتمدة جدة"
  ],
  openGraph: {
    title: "🚰 عزل خزانات المياه في جدة - شركة أحمد نور للإيبوكسي",
    description: "أفضل شركة عزل خزانات المياه في جدة - مواد آمنة صحياً، ضمان 12 سنة 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/services/tank-insulation-jeddah',
    images: ['/images/tank-insulation-jeddah.jpg'],
  },
  alternates: {
    canonical: '/services/tank-insulation-jeddah',
  },
};

export default function TankInsulationJeddahPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-900 via-blue-800 to-cyan-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🚰 أفضل شركة عزل خزانات المياه في جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                مواد آمنة صحياً • ضمان 12 سنة • حماية من التلوث والتسرب
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
                  className="bg-white text-teal-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* أهمية عزل خزانات المياه */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا عزل خزانات المياه مهم؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                عزل خزانات المياه ضروري لضمان نقاء المياه وحماية صحة الأسرة
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-blue-600 text-4xl mb-4">💧</div>
                <h3 className="text-lg font-bold mb-3">نقاء المياه</h3>
                <p className="text-gray-600">حماية المياه من التلوث والبكتيريا</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-green-600 text-4xl mb-4">🛡️</div>
                <h3 className="text-lg font-bold mb-3">منع التسرب</h3>
                <p className="text-gray-600">حماية من تسرب المياه وإهدارها</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-red-600 text-4xl mb-4">🦠</div>
                <h3 className="text-lg font-bold mb-3">مقاومة البكتيريا</h3>
                <p className="text-gray-600">منع نمو البكتيريا والفطريات</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-yellow-600 text-4xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-3">توفير الطاقة</h3>
                <p className="text-gray-600">عزل حراري يقلل استهلاك الطاقة</p>
              </div>
            </div>
          </div>
        </section>

        {/* أنواع خزانات المياه */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع خزانات المياه التي نخدمها
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* خزانات علوية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">⬆️</div>
                <h3 className="text-xl font-bold mb-3">خزانات علوية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• خزانات الأسطح</li>
                  <li>• خزانات البولي إيثيلين</li>
                  <li>• خزانات الفايبر جلاس</li>
                  <li>• خزانات الستانلس ستيل</li>
                </ul>
              </div>

              {/* خزانات أرضية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">⬇️</div>
                <h3 className="text-xl font-bold mb-3">خزانات أرضية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• خزانات الخرسانة</li>
                  <li>• خزانات تحت الأرض</li>
                  <li>• خزانات الحدائق</li>
                  <li>• خزانات الري</li>
                </ul>
              </div>

              {/* خزانات صناعية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-4xl mb-4">🏭</div>
                <h3 className="text-xl font-bold mb-3">خزانات صناعية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• خزانات المصانع</li>
                  <li>• خزانات المستشفيات</li>
                  <li>• خزانات الفنادق</li>
                  <li>• خزانات المدارس</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* المواد المستخدمة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                المواد المستخدمة في عزل الخزانات
              </h2>
              <p className="text-xl text-gray-600">مواد آمنة صحياً ومعتمدة عالمياً</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-blue-900">مواد العزل المائي</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span><strong>البولي يوريثان الآمن:</strong> مقاوم للمياه ومعتمد صحياً</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span><strong>الإيبوكسي الغذائي:</strong> آمن للاستخدام مع مياه الشرب</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-green-600">✓</span>
                    <span><strong>الأغشية البوليمرية:</strong> مرونة عالية ومقاومة للتشقق</span>
                  </li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4 text-green-900">مميزات المواد</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">✓</span>
                    <span><strong>آمنة صحياً:</strong> معتمدة من منظمة الصحة العالمية</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">✓</span>
                    <span><strong>مقاومة للبكتيريا:</strong> تمنع نمو الميكروبات</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-blue-600">✓</span>
                    <span><strong>عمر طويل:</strong> تدوم لأكثر من 15 سنة</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* خطوات العزل */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خطوات عزل خزانات المياه
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-600 font-bold">1</span>
                </div>
                <h3 className="text-lg font-bold mb-3">الفحص والتقييم</h3>
                <p className="text-gray-600">فحص شامل للخزان وتحديد نوع العزل المناسب</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-green-600 font-bold">2</span>
                </div>
                <h3 className="text-lg font-bold mb-3">التنظيف والتحضير</h3>
                <p className="text-gray-600">تنظيف شامل وتحضير السطح للعزل</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-yellow-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-600 font-bold">3</span>
                </div>
                <h3 className="text-lg font-bold mb-3">تطبيق العزل</h3>
                <p className="text-gray-600">تطبيق طبقات العزل بالتقنيات الحديثة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-purple-600 font-bold">4</span>
                </div>
                <h3 className="text-lg font-bold mb-3">الفحص والاختبار</h3>
                <p className="text-gray-600">اختبار جودة العزل وضمان عدم التسرب</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-red-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-red-600 font-bold">5</span>
                </div>
                <h3 className="text-lg font-bold mb-3">التعقيم والتطهير</h3>
                <p className="text-gray-600">تعقيم شامل للخزان قبل الاستخدام</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="bg-indigo-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-indigo-600 font-bold">6</span>
                </div>
                <h3 className="text-lg font-bold mb-3">التسليم والضمان</h3>
                <p className="text-gray-600">تسليم العمل مع شهادة ضمان 12 سنة</p>
              </div>
            </div>
          </div>
        </section>

        {/* علامات الحاجة للعزل */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                علامات تدل على حاجة خزانك للعزل
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🚨</div>
                <h3 className="text-lg font-bold mb-3">تغير طعم المياه</h3>
                <p className="text-gray-600">طعم غريب أو رائحة كريهة في المياه</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🟤</div>
                <h3 className="text-lg font-bold mb-3">تغير لون المياه</h3>
                <p className="text-gray-600">مياه عكرة أو ملونة أو بها شوائب</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">💧</div>
                <h3 className="text-lg font-bold mb-3">تسرب المياه</h3>
                <p className="text-gray-600">وجود تسرب حول الخزان أو تحته</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🦠</div>
                <h3 className="text-lg font-bold mb-3">نمو الطحالب</h3>
                <p className="text-gray-600">ظهور طحالب أو فطريات داخل الخزان</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-bold mb-3">تآكل الخزان</h3>
                <p className="text-gray-600">صدأ أو تآكل في جدران الخزان</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">📈</div>
                <h3 className="text-lg font-bold mb-3">زيادة فاتورة المياه</h3>
                <p className="text-gray-600">ارتفاع غير مبرر في استهلاك المياه</p>
              </div>
            </div>
          </div>
        </section>

        {/* الأسعار */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أسعار عزل خزانات المياه في جدة
              </h2>
              <p className="text-xl text-gray-600">أسعار تنافسية مع ضمان 12 سنة</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                احصل على عرض سعر مجاني الآن
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                نقدم فحص مجاني للخزان وعرض سعر مفصل حسب نوع الخزان وحجمه
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
