import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import AreaPageSchema from '@/components/AreaPageSchema';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "خدمات العزل والإيبوكسي في شمال جدة | شركة أحمد نور للإيبوكسي",
  description: "🏆 أفضل شركة عزل أسطح ومسابح في شمال جدة - خدمة سريعة لجميع أحياء شمال جدة، النزهة، الصفا، الروضة، السلامة. خبرة +15 سنة ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "عزل أسطح شمال جدة",
    "شركة عزل شمال جدة",
    "عزل مسابح شمال جدة",
    "أرضيات إيبوكسي شمال جدة",
    "عزل أسطح النزهة جدة",
    "عزل أسطح الصفا جدة",
    "عزل أسطح الروضة جدة",
    "عزل أسطح السلامة جدة",
    "مقاول عزل شمال جدة",
    "شركة عزل معتمدة شمال جدة"
  ],
  openGraph: {
    title: "🏆 خدمات العزل والإيبوكسي في شمال جدة - شركة أحمد نور",
    description: "أفضل شركة عزل أسطح ومسابح في شمال جدة - خدمة سريعة لجميع الأحياء 📞 +966571935447",
    url: 'https://www.3azlepoxy.com/areas/north-jeddah',
    images: ['/images/north-jeddah-services.jpg'],
  },
  alternates: {
    canonical: '/areas/north-jeddah',
  },
};

export default function NorthJeddahPage() {
  return (
    <div className="min-h-screen">
      <AreaPageSchema
        areaName="شمال جدة"
        areaDescription="خدمات العزل والإيبوكسي في شمال جدة - خدمة سريعة لجميع الأحياء"
        areaUrl="https://www.3azlepoxy.com/areas/north-jeddah"
        neighborhoods={["النزهة", "الصفا", "الروضة", "السلامة", "الشاطئ", "الفيصلية"]}
        coordinates={{ latitude: 21.4858, longitude: 39.1925 }}
      />
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🏆 خدمات العزل والإيبوكسي في شمال جدة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                خدمة سريعة لجميع أحياء شمال جدة • خبرة +15 سنة • ضمان شامل
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

        {/* أحياء شمال جدة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                الأحياء التي نخدمها في شمال جدة
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                نقدم خدماتنا لجميع أحياء شمال جدة بأعلى معايير الجودة والاحترافية
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-4xl mb-4">🏘️</div>
                <h3 className="text-xl font-bold mb-3">حي النزهة</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل أسطح الفلل والعمائر</li>
                  <li>• عزل المسابح الخاصة</li>
                  <li>• أرضيات إيبوكسي ثلاثية الأبعاد</li>
                  <li>• خدمة سريعة خلال ساعات</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-4xl mb-4">🌳</div>
                <h3 className="text-xl font-bold mb-3">حي الصفا</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل خزانات المياه</li>
                  <li>• إصلاح تسريبات المسابح</li>
                  <li>• صيانة أنظمة العزل</li>
                  <li>• استشارات مجانية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-4xl mb-4">🌺</div>
                <h3 className="text-xl font-bold mb-3">حي الروضة</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل أسطح المدارس والمساجد</li>
                  <li>• عزل المباني التجارية</li>
                  <li>• أرضيات إيبوكسي للمحلات</li>
                  <li>• ضمان طويل المدى</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-4xl mb-4">🕊️</div>
                <h3 className="text-xl font-bold mb-3">حي السلامة</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل أسطح المستشفيات</li>
                  <li>• عزل المرافق الطبية</li>
                  <li>• مواد آمنة صحياً</li>
                  <li>• فريق متخصص</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-yellow-600 text-4xl mb-4">🏖️</div>
                <h3 className="text-xl font-bold mb-3">حي الشاطئ</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• عزل مقاوم للرطوبة العالية</li>
                  <li>• حماية من الهواء المالح</li>
                  <li>• مواد مقاومة للتآكل</li>
                  <li>• صيانة دورية</li>
                </ul>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-indigo-600 text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3">الأحياء الأخرى</h3>
                <ul className="text-gray-600 space-y-2">
                  <li>• الفيصلية</li>
                  <li>• المحمدية</li>
                  <li>• البساتين</li>
                  <li>• وجميع أحياء شمال جدة</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* الخدمات المتاحة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                خدماتنا في شمال جدة
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏠</span>
                </div>
                <h3 className="font-bold mb-2">عزل الأسطح</h3>
                <p className="text-gray-600">عزل مائي وحراري للفلل والعمائر</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏊‍♂️</span>
                </div>
                <h3 className="font-bold mb-2">عزل المسابح</h3>
                <p className="text-gray-600">عزل احترافي ومنع التسرب</p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🚰</span>
                </div>
                <h3 className="font-bold mb-2">عزل الخزانات</h3>
                <p className="text-gray-600">حماية المياه من التلوث</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">✨</span>
                </div>
                <h3 className="font-bold mb-2">أرضيات إيبوكسي</h3>
                <p className="text-gray-600">تصاميم ثلاثية الأبعاد مذهلة</p>
              </div>
            </div>
          </div>
        </section>

        {/* مميزات الخدمة في شمال جدة */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                لماذا نحن الأفضل في شمال جدة؟
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-blue-600 text-3xl mb-4">⚡</div>
                <h3 className="text-lg font-bold mb-3">استجابة سريعة</h3>
                <p className="text-gray-600">نصل إليك في شمال جدة خلال ساعة من الاتصال</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-green-600 text-3xl mb-4">🗺️</div>
                <h3 className="text-lg font-bold mb-3">معرفة محلية</h3>
                <p className="text-gray-600">خبرة عميقة بطبيعة المباني في شمال جدة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-purple-600 text-3xl mb-4">👥</div>
                <h3 className="text-lg font-bold mb-3">فريق محلي</h3>
                <p className="text-gray-600">فريق عمل مقيم في شمال جدة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-red-600 text-3xl mb-4">🚚</div>
                <h3 className="text-lg font-bold mb-3">توصيل سريع</h3>
                <p className="text-gray-600">توصيل المواد والمعدات بسرعة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-yellow-600 text-3xl mb-4">💰</div>
                <h3 className="text-lg font-bold mb-3">أسعار خاصة</h3>
                <p className="text-gray-600">عروض وخصومات خاصة لسكان شمال جدة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="text-indigo-600 text-3xl mb-4">🔧</div>
                <h3 className="text-lg font-bold mb-3">صيانة دورية</h3>
                <p className="text-gray-600">متابعة وصيانة دورية مجانية</p>
              </div>
            </div>
          </div>
        </section>

        {/* مشاريع في شمال جدة */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                مشاريعنا المنجزة في شمال جدة
              </h2>
              <p className="text-xl text-gray-600">أكثر من 200 مشروع مكتمل في شمال جدة</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-xl font-bold mb-3">150+ فيلا</h3>
                <p className="text-gray-600">عزل أسطح الفلل في النزهة والصفا</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏊‍♂️</div>
                <h3 className="text-xl font-bold mb-3">80+ مسبح</h3>
                <p className="text-gray-600">عزل المسابح الخاصة والعامة</p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-6 text-center">
                <div className="text-4xl mb-4">🏢</div>
                <h3 className="text-xl font-bold mb-3">50+ مبنى تجاري</h3>
                <p className="text-gray-600">عزل المباني التجارية والإدارية</p>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بنا */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                احصل على خدمة سريعة في شمال جدة
              </h2>
              <p className="text-xl text-gray-600">نصل إليك خلال ساعة واحدة</p>
            </div>

            <div className="bg-white rounded-lg p-8 text-center shadow-lg">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">
                اتصل الآن للحصول على خدمة فورية
              </h3>
              <p className="text-lg text-gray-700 mb-6">
                فريقنا جاهز للوصول إلى موقعك في شمال جدة خلال أقل من ساعة
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 اتصل الآن: 0571935447
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
