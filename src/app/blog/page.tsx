import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import BlogSection from '@/components/BlogSection';

export const metadata: Metadata = {
  title: 'المدونة - أحمد نور للإيبوكسي | مقالات ونصائح العزل والأرضيات الإيبوكسية',
  description: 'اكتشف أحدث المقالات والنصائح حول العزل والأرضيات الإيبوكسية. دليل شامل للعناية بالأسطح والمسابح والخزانات في جدة والمملكة العربية السعودية.',
  keywords: [
    'مدونة العزل',
    'نصائح العزل',
    'أرضيات إيبوكسي',
    'عزل الأسطح',
    'عزل المسابح',
    'صيانة العزل',
    'مقالات تقنية',
    'دليل العزل',
    'نصائح البناء',
    'العزل في السعودية'
  ],
  openGraph: {
    title: 'المدونة - أحمد نور للإيبوكسي',
    description: 'اكتشف أحدث المقالات والنصائح حول العزل والأرضيات الإيبوكسية',
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* البانر */}
        <section className="bg-gradient-to-r from-primary to-gold text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6">المدونة</h1>
            <p className="text-xl max-w-3xl mx-auto">
              اكتشف أحدث المقالات والنصائح المتخصصة في مجال العزل والأرضيات الإيبوكسية
            </p>
          </div>
        </section>

        <BlogSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
