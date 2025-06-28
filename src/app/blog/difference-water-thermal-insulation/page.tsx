import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, ArrowRight, Phone } from 'lucide-react';
import ArticleSchema from '@/components/ArticleSchema';

export const metadata: Metadata = {
  title: 'الفرق بين العزل المائي والحراري: أيهما تحتاج؟ | شركة أحمد نور للإيبوكسي',
  description: 'دليل شامل للفرق بين العزل المائي والحراري ومتى تحتاج كل نوع في المناخ السعودي. استشارة مجانية من خبراء أحمد نور.',
  keywords: 'الفرق بين العزل المائي والحراري, عزل مائي, عزل حراري, أنواع العزل جدة',
  openGraph: {
    title: 'الفرق بين العزل المائي والحراري: أيهما تحتاج؟',
    description: 'دليل شامل للفرق بين العزل المائي والحراري ومتى تحتاج كل نوع في المناخ السعودي',
    images: ['https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg'],
    url: 'https://www.3azlepoxy.com/blog/difference-water-thermal-insulation',
  },
};

export default function DifferenceWaterThermalInsulationArticle() {
  const articleData = {
    title: 'الفرق بين العزل المائي والحراري: أيهما تحتاج؟',
    description: 'دليل شامل للفرق بين العزل المائي والحراري ومتى تحتاج كل نوع في المناخ السعودي',
    image: 'https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg',
    author: 'م. أحمد نور',
    publishDate: '2025-01-12T10:00:00+03:00',
    modifiedDate: '2025-06-28T14:00:00+03:00',
    url: 'https://www.3azlepoxy.com/blog/difference-water-thermal-insulation',
    category: 'عزل الأسطح',
    readTime: '11 دقيقة'
  };

  return (
    <main>
      <ArticleSchema {...articleData} />
      
      {/* Breadcrumbs */}
      <nav className="bg-gray-100 py-4">
        <div className="container-custom">
          <ol className="flex items-center space-x-2 text-sm text-gray-600">
            <li><Link href="/" className="hover:text-primary">الرئيسية</Link></li>
            <li className="mx-2">/</li>
            <li><Link href="/blog" className="hover:text-primary">المدونة</Link></li>
            <li className="mx-2">/</li>
            <li className="text-primary font-medium">الفرق بين العزل المائي والحراري</li>
          </ol>
        </div>
      </nav>

      {/* Article */}
      <article className="py-12">
        <div className="container-custom max-w-4xl">
          <header className="mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              الفرق بين العزل المائي والحراري: أيهما تحتاج؟
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>م. أحمد نور</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>12 يناير 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>11 دقيقة</span>
              </div>
            </div>

            <div className="relative w-full h-96 mb-8 rounded-xl overflow-hidden">
              <Image
                src="https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg"
                alt="الفرق بين العزل المائي والحراري - شركة أحمد نور للإيبوكسي"
                fill
                className="object-cover"
                priority
              />
            </div>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">
              يخلط الكثير من أصحاب المنازل بين العزل المائي والعزل الحراري، رغم أن لكل منهما وظيفة مختلفة تمام<|im_start|>狀況. في هذا الدليل الشامل، سنوضح الفروقات الأساسية ومتى تحتاج كل نوع في المناخ السعودي.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">ما هو العزل المائي؟</h2>
            
            <p className="mb-6">
              العزل المائي هو عملية حماية المباني من تسرب المياه والرطوبة. يهدف إلى منع وصول المياه إلى الهيكل الداخلي للمبنى، مما يحميه من التلف والتآكل.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">مميزات العزل المائي:</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>حماية من تسرب المياه والأمطار</li>
              <li>منع تكون الرطوبة والعفن</li>
              <li>حماية الحديد من الصدأ</li>
              <li>إطالة عمر المبنى</li>
              <li>توفير تكاليف الصيانة</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">ما هو العزل الحراري؟</h2>
            
            <p className="mb-6">
              العزل الحراري هو عملية تقليل انتقال الحرارة بين داخل وخارج المبنى. يهدف إلى الحفاظ على درجة حرارة مريحة داخل المبنى وتوفير الطاقة.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">مميزات العزل الحراري:</h3>
            <ul className="list-disc list-inside mb-6 space-y-2">
              <li>توفير في فواتير الكهرباء (30-50%)</li>
              <li>راحة أكبر في درجات الحرارة</li>
              <li>تقليل الضغط على أجهزة التكييف</li>
              <li>حماية البيئة بتقليل استهلاك الطاقة</li>
              <li>زيادة قيمة العقار</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6">الخلاصة</h2>
            <p className="text-lg text-gray-700 mb-6">
              العزل المائي يحمي من المياه والرطوبة، بينما العزل الحراري يوفر الطاقة ويحسن الراحة. في جدة، ننصح بالعزل المختلط للحصول على أفضل النتائج وأقصى استفادة من الاستثمار.
            </p>
          </div>

          {/* Call to Action */}
          <div className="bg-primary text-white p-8 rounded-xl mt-12">
            <h3 className="text-2xl font-bold mb-4">تحتاج استشارة مجانية؟</h3>
            <p className="text-blue-100 mb-6">
              تواصل مع خبراء شركة أحمد نور لتحديد نوع العزل المناسب لمشروعك
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+966571935447"
                className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن: 966571935447+
              </a>
              <Link
                href="/contact"
                className="bg-white hover:bg-gray-100 text-primary px-6 py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-colors"
              >
                تواصل معنا
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </article>

      {/* Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary hover:bg-primary-600 text-white p-3 rounded-full shadow-lg transition-colors z-50"
        aria-label="العودة للأعلى"
      >
        🔝
      </button>
    </main>
  );
}
