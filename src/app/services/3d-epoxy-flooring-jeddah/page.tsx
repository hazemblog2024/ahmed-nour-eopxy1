import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "أرضيات إيبوكسي ثلاثية الأبعاد في جدة | شركة أحمد نور للإيبوكسي",
  description: "✨ أفضل شركة أرضيات إيبوكسي ثلاثية الأبعاد في جدة - تصاميم مذهلة، جودة عالية، ضمان 8 سنوات. أرضيات إيبوكسي 3D للمنازل والمكاتب والمحلات ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "أرضيات إيبوكسي ثلاثية الأبعاد جدة",
    "أرضيات إيبوكسي 3D جدة",
    "شركة أرضيات إيبوكسي جدة",
    "أفضل أرضيات إيبوكسي جدة",
    "تركيب أرضيات إيبوكسي جدة",
    "أسعار أرضيات إيبوكسي جدة",
    "أرضيات إيبوكسي للمنازل جدة",
    "أرضيات إيبوكسي للمكاتب جدة",
    "دهان إيبوكسي جدة",
    "بديل السيراميك جدة"
  ],
  openGraph: {
    title: "✨ أرضيات إيبوكسي ثلاثية الأبعاد في جدة - شركة أحمد نور",
    description: "أفضل شركة أرضيات إيبوكسي ثلاثية الأبعاد في جدة - تصاميم مذهلة، جودة عالية 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/services/3d-epoxy-flooring-jeddah',
    images: ['/images/3d-epoxy-flooring-jeddah.jpg'],
  },
  alternates: {
    canonical: '/services/3d-epoxy-flooring-jeddah',
  },
};

export default function EpoxyFlooringJeddahPage() {
  return (
    <div className="min-h-screen">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-purple-900 via-blue-800 to-indigo-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ✨ أرضيات إيبوكسي ثلاثية الأبعاد في جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                تصاميم مذهلة • جودة عالية • ضمان 8 سنوات
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
                  className="bg-white text-purple-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ما هي أرضيات الإيبوكسي ثلاثية الأبعاد */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                ما هي أرضيات الإيبوكسي ثلاثية الأبعاد؟
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                تقنية حديثة تجمع بين الجمال البصري المذهل والمتانة العالية لإنتاج أرضيات فريدة من نوعها
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">المميزات الرئيسية:</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="bg-purple-100 p-2 rounded-full">
                      <span className="text-purple-600">✨</span>
                    </div>
                    <div>
                      <h4 className="font-bold">تأثيرات بصرية مذهلة</h4>
                      <p className="text-gray-600">تصاميم ثلاثية الأبعاد تخطف الأنظار</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-blue-100 p-2 rounded-full">
                      <span className="text-blue-600">💪</span>
                    </div>
                    <div>
                      <h4 className="font-bold">متانة عالية</h4>
                      <p className="text-gray-600">مقاومة للخدش والتآكل والمواد الكيميائية</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-green-100 p-2 rounded-full">
                      <span className="text-green-600">🧽</span>
                    </div>
                    <div>
                      <h4 className="font-bold">سهولة التنظيف</h4>
                      <p className="text-gray-600">سطح أملس سهل التنظيف والصيانة</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="bg-yellow-100 p-2 rounded-full">
                      <span className="text-yellow-600">🎨</span>
                    </div>
                    <div>
                      <h4 className="font-bold">تصاميم لا محدودة</h4>
                      <p className="text-gray-600">إمكانيات تصميم وألوان لا نهائية</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold mb-4">عملية التطبيق:</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">1</span>
                    <span>تحضير وتنظيف السطح</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">2</span>
                    <span>تطبيق طبقة الأساس</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">3</span>
                    <span>طباعة التصميم ثلاثي الأبعاد</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">4</span>
                    <span>تطبيق طبقات الإيبوكسي الشفافة</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="bg-purple-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm">5</span>
                    <span>اللمسة الأخيرة والتلميع</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* أنواع التصاميم */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أنواع التصاميم المتاحة
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* تصاميم طبيعية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🌊</div>
                <h3 className="text-xl font-bold mb-3">تصاميم طبيعية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• مناظر بحرية وشواطئ</li>
                  <li>• غابات وأشجار</li>
                  <li>• صحاري وجبال</li>
                  <li>• أنهار وشلالات</li>
                </ul>
              </div>

              {/* تصاميم هندسية */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">📐</div>
                <h3 className="text-xl font-bold mb-3">تصاميم هندسية</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• أشكال هندسية معقدة</li>
                  <li>• خداع بصري</li>
                  <li>• تصاميم عصرية</li>
                  <li>• أنماط متكررة</li>
                </ul>
              </div>

              {/* تصاميم مخصصة */}
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-4xl mb-4">🎨</div>
                <h3 className="text-xl font-bold mb-3">تصاميم مخصصة</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• شعارات الشركات</li>
                  <li>• تصاميم شخصية</li>
                  <li>• رسوم فنية</li>
                  <li>• صور عائلية</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* الاستخدامات */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أماكن الاستخدام
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold mb-2">المنازل</h3>
                <p className="text-gray-600">غرف المعيشة والمطابخ والحمامات</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏢</span>
                </div>
                <h3 className="font-bold mb-2">المكاتب</h3>
                <p className="text-gray-600">مكاتب الشركات وقاعات الاجتماعات</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛍️</span>
                </div>
                <h3 className="font-bold mb-2">المحلات التجارية</h3>
                <p className="text-gray-600">متاجر ومولات ومعارض</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏥</span>
                </div>
                <h3 className="font-bold mb-2">المرافق الطبية</h3>
                <p className="text-gray-600">مستشفيات وعيادات ومختبرات</p>
              </div>
            </div>
          </div>
        </section>

        {/* مقارنة مع البدائل */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا الإيبوكسي أفضل من البدائل؟
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-purple-600 text-white">
                  <tr>
                    <th className="p-4 text-right">الخاصية</th>
                    <th className="p-4">إيبوكسي ثلاثي الأبعاد</th>
                    <th className="p-4">السيراميك</th>
                    <th className="p-4">الرخام</th>
                    <th className="p-4">البورسلين</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">المتانة</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">الجمال</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-4 font-semibold">سهولة التنظيف</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-4 font-semibold">مقاومة البقع</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-semibold">التكلفة</td>
                    <td className="p-4 text-center">⭐⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐</td>
                    <td className="p-4 text-center">⭐⭐⭐</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* الأسعار */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                أسعار أرضيات الإيبوكسي ثلاثية الأبعاد
              </h2>
              <p className="text-xl text-gray-600">أسعار تنافسية مع ضمان 8 سنوات</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">الباقة الأساسية</h3>
                <div className="text-3xl font-bold text-blue-600 mb-4">من 150 ريال/م²</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• تصاميم بسيطة</li>
                  <li>• ضمان 5 سنوات</li>
                  <li>• تطبيق احترافي</li>
                </ul>
                <a href="tel:+966571935447" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  اطلب عرض سعر
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center border-2 border-purple-600">
                <div className="bg-purple-600 text-white px-3 py-1 rounded-full text-sm mb-4">الأكثر طلباً</div>
                <h3 className="text-xl font-bold mb-4">الباقة المتقدمة</h3>
                <div className="text-3xl font-bold text-purple-600 mb-4">من 250 ريال/م²</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• تصاميم متقدمة</li>
                  <li>• ضمان 8 سنوات</li>
                  <li>• مواد عالية الجودة</li>
                </ul>
                <a href="tel:+966571935447" className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  اطلب عرض سعر
                </a>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <h3 className="text-xl font-bold mb-4">الباقة المميزة</h3>
                <div className="text-3xl font-bold text-gold-600 mb-4">من 400 ريال/م²</div>
                <ul className="text-gray-600 space-y-2 mb-6">
                  <li>• تصاميم مخصصة</li>
                  <li>• ضمان 10 سنوات</li>
                  <li>• أفضل المواد المستوردة</li>
                </ul>
                <a href="tel:+966571935447" className="bg-yellow-600 text-white px-6 py-2 rounded-lg hover:bg-yellow-700 transition-colors">
                  اطلب عرض سعر
                </a>
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-8 text-center">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                احصل على عرض سعر مجاني ومعاينة
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                نقدم معاينة مجانية وعرض سعر مفصل مع عينات من التصاميم
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
