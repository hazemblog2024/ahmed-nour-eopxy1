import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';

export const metadata: Metadata = {
  title: 'تواصل معنا - شركة أحمد نور للإيبوكسي | استشارة مجانية وعرض سعر فوري في جدة',
  description: 'تواصل مع شركة أحمد نور للإيبوكسي في جدة للحصول على استشارة مجانية وعرض سعر فوري لمشروعك. خدمة عملاء 24 ساعة، زيارة مجانية، تقييم احترافي. اتصل الآن: +966571935447',
  keywords: [
    'تواصل مع أحمد نور للإيبوكسي',
    'استشارة مجانية عزل جدة',
    'عرض سعر عزل أسطح',
    'رقم شركة العزل جدة',
    'خدمة عملاء أحمد نور',
    'زيارة مجانية للموقع',
    'تقييم مشروع العزل',
    'واتساب أحمد نور للإيبوكسي',
    'عنوان شركة العزل جدة',
    'موعد كشف تسريبات'
  ],
  openGraph: {
    title: 'تواصل معنا - شركة أحمد نور للإيبوكسي | خدمة عملاء 24 ساعة',
    description: 'احصل على استشارة مجانية وعرض سعر فوري من شركة أحمد نور للإيبوكسي في جدة. خدمة عملاء متميزة وزيارة مجانية',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'تواصل معنا - شركة أحمد نور للإيبوكسي',
    description: 'استشارة مجانية وعرض سعر فوري لجميع خدمات العزل والأرضيات الإيبوكسية في جدة',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* البانر */}
        <section className="bg-gradient-to-r from-primary to-gold text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6">تواصل معنا</h1>
            <p className="text-xl max-w-3xl mx-auto">
              نحن هنا لمساعدتك في جميع احتياجاتك من العزل والأرضيات الإيبوكسية. تواصل معنا الآن!
            </p>
          </div>
        </section>

        <ContactSection />

        {/* قسم الأسئلة الشائعة */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                الأسئلة <span className="gradient-text">الشائعة</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                إجابات على أكثر الأسئلة شيوعاً حول خدماتنا
              </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-6">
              {[
                {
                  question: 'كم تستغرق مدة عزل السطح؟',
                  answer: 'تختلف المدة حسب مساحة السطح وحالته، لكن عادة تتراوح بين 3-7 أيام للمشاريع السكنية.'
                },
                {
                  question: 'هل تقدمون ضمان على أعمال العزل؟',
                  answer: 'نعم، نقدم ضمان يصل إلى 15 سنة على أعمال العزل حسب نوع الخدمة والمواد المستخدمة.'
                },
                {
                  question: 'ما هي تكلفة الأرضيات الإيبوكسية؟',
                  answer: 'تبدأ أسعار الأرضيات الإيبوكسية من 80 ريال للمتر المربع، وتختلف حسب التصميم والمساحة.'
                },
                {
                  question: 'هل تعملون خارج جدة؟',
                  answer: 'نعم، نقدم خدماتنا في جدة والمناطق المحيطة مثل مكة المكرمة والطائف.'
                },
                {
                  question: 'كيف يمكنني الحصول على عرض سعر؟',
                  answer: 'يمكنك التواصل معنا عبر الهاتف أو واتساب أو ملء نموذج التواصل للحصول على عرض سعر مجاني.'
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
