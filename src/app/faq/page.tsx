import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "الأسئلة الشائعة | شركة أحمد نور للإيبوكسي - أجوبة شاملة",
  description: "❓ أجوبة شاملة على جميع الأسئلة الشائعة حول خدمات العزل والإيبوكسي في جدة. معلومات مفصلة عن الأسعار، المواد، الضمان، والمدة الزمنية ⭐ شركة أحمد نور للإيبوكسي",
  keywords: [
    "أسئلة شائعة عزل الأسطح",
    "أسئلة عن عزل المسابح",
    "أسئلة أرضيات الإيبوكسي",
    "أسعار العزل في جدة",
    "ضمان العزل",
    "مدة عزل السطح",
    "أفضل مواد العزل",
    "كشف تسريبات المياه",
    "صيانة العزل",
    "شركة عزل موثوقة جدة"
  ],
  openGraph: {
    title: "❓ الأسئلة الشائعة - شركة أحمد نور للإيبوكسي",
    description: "أجوبة شاملة على جميع الأسئلة حول خدمات العزل والإيبوكسي في جدة",
    url: 'https://www.3azlepoxy.com/faq',
    images: ['/images/faq-ahmed-nour-epoxy.jpg'],
  },
  alternates: {
    canonical: '/faq',
  },
};

const faqData = [
  {
    category: "عزل الأسطح",
    questions: [
      {
        question: "كم تكلفة عزل السطح في جدة؟",
        answer: "تتراوح تكلفة عزل السطح في جدة من 50-80 ريال للمتر المربع حسب نوع العزل والمساحة. نقدم عروض أسعار مجانية مع إمكانية المعاينة في نفس اليوم."
      },
      {
        question: "كم تستغرق مدة عزل السطح؟",
        answer: "تستغرق مدة عزل السطح من 3-7 أيام حسب المساحة ونوع العزل. للأسطح الصغيرة (أقل من 100 م²) نحتاج 2-3 أيام، وللأسطح الكبيرة قد نحتاج أسبوع كامل."
      },
      {
        question: "ما هي أفضل مواد عزل الأسطح في جدة؟",
        answer: "أفضل مواد العزل في جدة هي البولي يوريثان والأغشية البوليمرية والبيتومين المعدل. هذه المواد تتحمل المناخ الحار والرطوبة العالية في جدة."
      },
      {
        question: "هل تقدمون ضمان على أعمال العزل؟",
        answer: "نعم، نقدم ضمان شامل لمدة 10 سنوات على جميع أعمال العزل مع خدمة صيانة مجانية وفريق دعم فني متاح 24/7."
      },
      {
        question: "متى أحتاج لعزل السطح؟",
        answer: "تحتاج لعزل السطح عند ظهور تسريبات، ارتفاع فاتورة الكهرباء، تشققات في السطح، أو رائحة عفن في المنزل. ننصح بالعزل الوقائي قبل ظهور المشاكل."
      }
    ]
  },
  {
    category: "عزل المسابح",
    questions: [
      {
        question: "كيف أعرف أن مسبحي يحتاج عزل؟",
        answer: "علامات الحاجة للعزل: انخفاض مستوى المياه باستمرار، زيادة فاتورة المياه، نمو نباتات حول المسبح، تشققات في الأرضية، أو تغير في كيمياء المياه."
      },
      {
        question: "ما هي مدة ضمان عزل المسابح؟",
        answer: "نقدم ضمان 15 سنة على عزل المسابح مع استخدام مواد مقاومة للكلور والمواد الكيميائية. الضمان يشمل الإصلاح المجاني لأي تسرب."
      },
      {
        question: "هل يمكن عزل المسبح بدون تفريغ المياه؟",
        answer: "لا، يجب تفريغ المسبح بالكامل لضمان جودة العزل. نقوم بتنظيف وتحضير السطح قبل تطبيق مواد العزل المتخصصة."
      },
      {
        question: "كم تكلفة عزل المسبح؟",
        answer: "تعتمد التكلفة على حجم المسبح ونوع العزل. متوسط التكلفة 80-150 ريال/م². نقدم عروض أسعار مجانية بعد المعاينة."
      }
    ]
  },
  {
    category: "أرضيات الإيبوكسي",
    questions: [
      {
        question: "ما هي مميزات أرضيات الإيبوكسي ثلاثية الأبعاد؟",
        answer: "المميزات: تصاميم مذهلة ثلاثية الأبعاد، مقاومة عالية للخدش والبقع، سهولة التنظيف، عمر افتراضي طويل (15-20 سنة), وإمكانيات تصميم لا محدودة."
      },
      {
        question: "كم تكلفة أرضيات الإيبوكسي ثلاثية الأبعاد؟",
        answer: "الأسعار تبدأ من 150 ريال/م² للتصاميم البسيطة وتصل إلى 600 ريال/م² للتصاميم المخصصة المعقدة. السعر يشمل التحضير والتطبيق والضمان."
      },
      {
        question: "كم تستغرق مدة تركيب أرضيات الإيبوكسي؟",
        answer: "تستغرق من 5-10 أيام حسب المساحة وتعقيد التصميم. يشمل ذلك التحضير، التطبيق، والتجفيف. يمكن استخدام الأرضية بعد 48 ساعة من الانتهاء."
      },
      {
        question: "هل أرضيات الإيبوكسي مناسبة للمطابخ والحمامات؟",
        answer: "نعم، الإيبوكسي مثالي للمطابخ والحمامات لأنه مقاوم للماء والبقع والمواد الكيميائية. سطحه الأملس يمنع تجمع البكتيريا ويسهل التنظيف."
      }
    ]
  },
  {
    category: "خدمات عامة",
    questions: [
      {
        question: "هل تقدمون خدمة كشف تسريبات المياه؟",
        answer: "نعم، نقدم خدمة كشف تسريبات المياه بأحدث الأجهزة الإلكترونية بدون تكسير. نحدد مكان التسرب بدقة عالية ونقدم الحل المناسب."
      },
      {
        question: "ما هي مناطق الخدمة؟",
        answer: "نخدم جميع أحياء جدة: شمال جدة (النزهة، الصفا، الروضة)، جنوب جدة (العزيزية، المرجان، الحمراء)، شرق وغرب جدة. خدمة سريعة خلال ساعة."
      },
      {
        question: "هل تعملون في أيام الجمعة والعطل؟",
        answer: "نعم، نعمل 6 أيام في الأسبوع من السبت إلى الخميس (8 صباحاً - 6 مساءً)، والجمعة (2 ظهراً - 6 مساءً). خدمة الطوارئ متاحة 24/7."
      },
      {
        question: "كيف يمكنني الحصول على عرض سعر؟",
        answer: "يمكنك الاتصال على 0571935447 أو إرسال رسالة واتساب. نقدم معاينة مجانية وعرض سعر مفصل خلال 24 ساعة."
      }
    ]
  }
];

export default function FAQPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqData.flatMap(category => 
      category.questions.map(qa => ({
        "@type": "Question",
        "name": qa.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": qa.answer
        }
      }))
    )
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
        <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ❓ الأسئلة الشائعة
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100">
                أجوبة شاملة على جميع استفساراتك حول خدمات العزل والإيبوكسي
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 اتصل للاستفسار: 0571935447
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

        {/* FAQ Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              {faqData.map((category, categoryIndex) => (
                <div key={categoryIndex} className="mb-12">
                  <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                    أسئلة {category.category}
                  </h2>
                  
                  <div className="space-y-6">
                    {category.questions.map((qa, qaIndex) => (
                      <div key={qaIndex} className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                          <span className="bg-blue-100 text-blue-600 w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-1">
                            {qaIndex + 1}
                          </span>
                          {qa.question}
                        </h3>
                        <div className="text-gray-700 leading-relaxed mr-11">
                          {qa.answer}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* لم تجد إجابة؟ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                لم تجد إجابة لسؤالك؟
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                فريقنا المتخصص جاهز للإجابة على جميع استفساراتك
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-blue-600 text-3xl mb-4">📞</div>
                  <h3 className="font-bold mb-2">اتصل بنا</h3>
                  <p className="text-gray-600 mb-4">تحدث مع خبرائنا مباشرة</p>
                  <a href="tel:+966571935447" className="text-blue-600 font-semibold">
                    0571935447
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-green-600 text-3xl mb-4">💬</div>
                  <h3 className="font-bold mb-2">واتساب</h3>
                  <p className="text-gray-600 mb-4">راسلنا في أي وقت</p>
                  <a href="https://wa.me/966571935447" className="text-green-600 font-semibold">
                    إرسال رسالة
                  </a>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-6">
                  <div className="text-purple-600 text-3xl mb-4">🏠</div>
                  <h3 className="font-bold mb-2">زيارة مجانية</h3>
                  <p className="text-gray-600 mb-4">معاينة وتقييم مجاني</p>
                  <a href="/contact" className="text-purple-600 font-semibold">
                    احجز موعد
                  </a>
                </div>
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
