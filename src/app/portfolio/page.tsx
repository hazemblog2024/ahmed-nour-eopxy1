import { Metadata } from 'next';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import PortfolioSection from '@/components/PortfolioSection';

export const metadata: Metadata = {
  title: 'معرض الأعمال - شركة أحمد نور للإيبوكسي | مشاريع عزل الأسطح والمسابح المكتملة في جدة',
  description: 'شاهد معرض أعمال شركة أحمد نور للإيبوكسي في جدة: مشاريع عزل أسطح ومسابح وخزانات مكتملة، أرضيات إيبوكسي ثلاثية الأبعاد مذهلة، صور قبل وبعد لأكثر من 500 مشروع ناجح. جودة مضمونة وتنفيذ احترافي.',
  keywords: [
    'معرض أعمال أحمد نور للإيبوكسي',
    'مشاريع عزل أسطح جدة',
    'مشاريع عزل مسابح جدة',
    'أرضيات إيبوكسي ثلاثية الأبعاد',
    'صور قبل وبعد العزل',
    'مشاريع مكتملة جدة',
    'أعمال العزل المنجزة',
    'معرض صور العزل',
    'نماذج أعمال الإيبوكسي',
    'مشاريع ناجحة جدة'
  ],
  openGraph: {
    title: 'معرض الأعمال - شركة أحمد نور للإيبوكسي | +500 مشروع ناجح في جدة',
    description: 'شاهد معرض أعمالنا المتميزة: مشاريع عزل أسطح ومسابح وأرضيات إيبوكسي ثلاثية الأبعاد مكتملة في جدة',
    type: 'website',
    locale: 'ar_SA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'معرض الأعمال - شركة أحمد نور للإيبوكسي',
    description: 'شاهد مشاريعنا المكتملة في العزل والأرضيات الإيبوكسية في جدة',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PortfolioPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* البانر */}
        <section className="bg-gradient-to-r from-primary to-gold text-white py-20">
          <div className="container-custom text-center">
            <h1 className="text-5xl font-bold mb-6">معرض أعمال شركة أحمد نور للإيبوكسي في جدة</h1>
            <p className="text-xl max-w-3xl mx-auto">
              اكتشف مجموعة من أفضل مشاريعنا المكتملة بنجاح في مجال العزل والأرضيات الإيبوكسية
            </p>
          </div>
        </section>

        <PortfolioSection />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
