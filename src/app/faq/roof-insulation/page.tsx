import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "أسئلة شائعة عن عزل الأسطح في جدة | شركة أحمد نور للإيبوكسي",
  description: "🏠 أجوبة شاملة على جميع الأسئلة حول عزل الأسطح في جدة: الأسعار، المواد، المدة، الضمان، وأفضل الطرق. خبرة +15 سنة في عزل الأسطح ⭐ اتصل الآن 📞 +966571935447",
  keywords: [
    "أسئلة عزل الأسطح جدة",
    "أسعار عزل الأسطح جدة",
    "مدة عزل السطح",
    "أفضل مواد عزل الأسطح",
    "ضمان عزل الأسطح",
    "متى أحتاج عزل السطح",
    "علامات تسرب السطح",
    "تكلفة عزل السطح",
    "أنواع عزل الأسطح",
    "صيانة عزل الأسطح"
  ],
  openGraph: {
    title: "🏠 أسئلة شائعة عن عزل الأسطح - شركة أحمد نور للإيبوكسي",
    description: "أجوبة شاملة على جميع الأسئلة حول عزل الأسطح في جدة من الخبراء",
    url: 'https://www.3azlepoxy.com/faq/roof-insulation',
    images: ['/images/faq-roof-insulation-jeddah.jpg'],
  },
  alternates: {
    canonical: '/faq/roof-insulation',
  },
};

const roofInsulationFAQ = [
  {
    question: "كم تكلفة عزل السطح في جدة 2025؟",
    answer: "تتراوح تكلفة عزل السطح في جدة من 50-80 ريال للمتر المربع شاملاً العزل المائي والحراري. العوامل المؤثرة: نوع العزل، مساحة السطح، حالة السطح الحالية. نقدم عروض أسعار مجانية مع ضمان عدم وجود رسوم خفية."
  },
  {
    question: "ما هي أفضل مواد عزل الأسطح في المناخ الحار بجدة؟",
    answer: "أفضل المواد للمناخ الحار في جدة: 1) البولي يوريثان الرغوي (مقاومة ممتازة للحرارة) 2) الأغشية البوليمرية (مرونة عالية) 3) البيتومين المعدل (تحمل درجات حرارة عالية) 4) الألواح العاكسة (تقليل الحرارة بنسبة 40%). نختار المادة المناسبة حسب نوع المبنى والميزانية."
  },
  {
    question: "كم تستغرق مدة عزل السطح؟",
    answer: "المدة الزمنية حسب المساحة: - أسطح صغيرة (أقل من 100 م²): 2-3 أيام - أسطح متوسطة (100-300 م²): 4-5 أيام - أسطح كبيرة (أكثر من 300 م²): 6-7 أيام. العوامل المؤثرة: حالة الطقس، نوع العزل، حالة السطح الحالية. نلتزم بالمواعيد المحددة مع إمكانية العمل في عطلة نهاية الأسبوع."
  },
  {
    question: "متى أحتاج لعزل السطح فوراً؟",
    answer: "العلامات التحذيرية الخطيرة: 1) تسرب مياه نشط من السقف 2) بقع رطوبة متزايدة 3) رائحة عفن قوية 4) ارتفاع فاتورة الكهرباء بنسبة +30% 5) تشققات واضحة في السطح 6) تقشر الطلاء الداخلي. لا تتجاهل هذه العلامات - التأخير يزيد التكلفة والأضرار."
  },
  {
    question: "ما نوع الضمان الذي تقدمونه على عزل الأسطح؟",
    answer: "نقدم ضمان شامل 10 سنوات يشمل: - ضمان ضد التسرب 100% - صيانة مجانية كل 6 أشهر - إصلاح فوري لأي مشكلة - استبدال المواد التالفة مجاناً - فريق دعم فني 24/7. الضمان مكتوب وموثق قانونياً مع إمكانية التجديد."
  },
  {
    question: "هل يمكن عزل السطح في الصيف؟",
    answer: "نعم، نعمل في جميع فصول السنة مع احتياطات خاصة للصيف: - العمل في الساعات المبكرة (6-11 صباحاً) - استخدام مواد مقاومة للحرارة العالية - فترات راحة للعمال - معدات حماية متقدمة. أفضل وقت للعزل: أكتوبر-مايو، لكن الطوارئ نتعامل معها فوراً."
  },
  {
    question: "ما الفرق بين العزل المائي والحراري؟",
    answer: "العزل المائي: يمنع تسرب المياه والرطوبة (ضروري فوراً). العزل الحراري: يقلل انتقال الحرارة ويوفر الطاقة (مهم للراحة والتوفير). في جدة ننصح بالعزل المختلط الذي يجمع النوعين لحماية شاملة وتوفير أكبر في التكلفة."
  },
  {
    question: "كيف أختار شركة عزل موثوقة في جدة؟",
    answer: "معايير الاختيار: 1) خبرة +10 سنوات في السوق 2) ترخيص رسمي ومعتمد 3) ضمان مكتوب طويل المدى 4) مراجعات عملاء إيجابية 5) استخدام مواد عالية الجودة 6) أسعار شفافة بدون رسوم خفية 7) فريق فني متخصص. شركة أحمد نور تحقق جميع هذه المعايير مع خبرة 15+ سنة."
  },
  {
    question: "هل العزل يحتاج صيانة دورية؟",
    answer: "نعم، الصيانة الدورية تطيل عمر العزل: - فحص سنوي شامل (مجاني لعملائنا) - تنظيف المصارف والمجاري - إصلاح التشققات الصغيرة فوراً - فحص بعد العواصف المطرية - تجديد طبقة الحماية كل 3-5 سنوات. الصيانة الوقائية توفر 70% من تكلفة الإصلاحات الكبيرة."
  },
  {
    question: "ماذا يحدث إذا لم أعزل السطح؟",
    answer: "العواقب المكلفة: 1) تسرب مياه يدمر الأثاث والممتلكات 2) زيادة فاتورة الكهرباء 30-50% 3) مشاكل صحية من العفن والرطوبة 4) تآكل الهيكل الخرساني 5) انخفاض قيمة العقار 6) تكاليف إصلاح باهظة (10,000-50,000 ريال). العزل الوقائي يوفر كل هذه المشاكل والتكاليف."
  }
];

export default function RoofInsulationFAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": roofInsulationFAQ.map(qa => ({
      "@type": "Question",
      "name": qa.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": qa.answer
      }
    }))
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema)
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-900 via-blue-800 to-teal-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                🏠 أسئلة شائعة عن عزل الأسطح
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                أجوبة شاملة من خبراء العزل في جدة - خبرة +15 سنة
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
                  className="bg-white text-green-900 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  الأسئلة الأكثر شيوعاً عن عزل الأسطح
                </h2>
                <p className="text-xl text-gray-600">
                  إجابات مفصلة من خبراء العزل المعتمدين
                </p>
              </div>
              
              <div className="space-y-8">
                {roofInsulationFAQ.map((qa, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-lg p-8 border-r-4 border-green-500">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                      <span className="bg-green-100 text-green-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                        {index + 1}
                      </span>
                      {qa.question}
                    </h3>
                    <div className="text-gray-700 leading-relaxed mr-11 whitespace-pre-line">
                      {qa.answer}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* نصائح إضافية */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                نصائح مهمة لعزل الأسطح
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-green-600 text-3xl mb-4">✅</div>
                  <h3 className="text-xl font-bold mb-4">ما يجب فعله</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• فحص السطح كل 6 أشهر</li>
                    <li>• تنظيف المصارف بانتظام</li>
                    <li>• إصلاح التشققات فوراً</li>
                    <li>• استخدام مواد عالية الجودة</li>
                    <li>• الاستعانة بخبراء معتمدين</li>
                  </ul>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-red-600 text-3xl mb-4">❌</div>
                  <h3 className="text-xl font-bold mb-4">ما يجب تجنبه</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>• تجاهل علامات التسرب</li>
                    <li>• استخدام مواد رخيصة</li>
                    <li>• العمل في الطقس السيء</li>
                    <li>• التأجيل المستمر للصيانة</li>
                    <li>• الاعتماد على حلول مؤقتة</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* اتصل بالخبراء */}
        <section className="py-16 bg-green-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                هل تحتاج استشارة متخصصة؟
              </h2>
              <p className="text-xl mb-8">
                فريق الخبراء جاهز لتقديم النصح المجاني والمعاينة الفورية
              </p>
              
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
