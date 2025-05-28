import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import AboutSection from '@/components/AboutSection';

export const metadata: Metadata = {
  title: 'من نحن - شركة أحمد نور للإيبوكسي | خبرة +15 سنة في عزل الأسطح والمسابح بجدة',
  description: 'شركة أحمد نور للإيبوكسي الرائدة في جدة منذ 2008. خبرة +15 سنة في عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد. فريق محترف، ضمان شامل، أسعار منافسة.',
  keywords: [
    'شركة أحمد نور للإيبوكسي جدة',
    'من نحن أحمد نور',
    'خبرة عزل الأسطح جدة',
    'تاريخ شركة العزل',
    'فريق عمل محترف جدة',
    'خبرة 15 سنة عزل',
    'شركة عزل موثوقة جدة',
    'مؤسس أحمد نور للإيبوكسي'
  ],
  openGraph: {
    title: 'من نحن - شركة أحمد نور للإيبوكسي | خبرة +15 سنة في جدة',
    description: 'تعرف على قصة نجاح شركة أحمد نور للإيبوكسي الرائدة في عزل الأسطح والمسابح بجدة منذ 2008',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'من نحن - شركة أحمد نور للإيبوكسي',
    description: 'خبرة +15 سنة في عزل الأسطح والمسابح والأرضيات الإيبوكسية في جدة',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AboutSection />

        {/* قسم إضافي - تاريخ الشركة */}
        <section className="py-20 bg-gray-50">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-8">
                تاريخ <span className="gradient-text">الشركة</span>
              </h2>

              <div className="space-y-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-4">2008</div>
                  <h3 className="text-xl font-semibold mb-3">تأسيس الشركة</h3>
                  <p className="text-gray-600">
                    بدأت شركة أحمد نور للإيبوكسي كشركة صغيرة متخصصة في عزل الأسطح في جدة
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-4">2015</div>
                  <h3 className="text-xl font-semibold mb-3">التوسع في الخدمات</h3>
                  <p className="text-gray-600">
                    إضافة خدمات عزل المسابح والخزانات مع استيراد أحدث المواد والتقنيات
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-4">2020</div>
                  <h3 className="text-xl font-semibold mb-3">الأرضيات الإيبوكسية</h3>
                  <p className="text-gray-600">
                    دخول مجال الأرضيات الإيبوكسية ثلاثية الأبعاد وتحقيق نجاحات كبيرة
                  </p>
                </div>

                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="text-2xl font-bold text-primary mb-4">2024</div>
                  <h3 className="text-xl font-semibold mb-3">الريادة في السوق</h3>
                  <p className="text-gray-600">
                    أصبحنا من الشركات الرائدة في مجال العزل والأرضيات الإيبوكسية في المنطقة الغربية
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
