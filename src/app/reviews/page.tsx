import type { Metadata } from "next";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import ContactSection from '@/components/ContactSection';
import { MobileCallButtons } from '@/components/MobileOptimized';
import NoSSR from '@/components/NoSSR';

export const metadata: Metadata = {
  title: "آراء ومراجعات العملاء | شركة أحمد نور للإيبوكسي - تقييمات حقيقية",
  description: "⭐ اقرأ آراء ومراجعات العملاء الحقيقية لشركة أحمد نور للإيبوكسي في جدة. تقييمات 5 نجوم في عزل الأسطح والمسابح والإيبوكسي. شهادات عملاء موثقة مع صور المشاريع 📞 +966571935447",
  keywords: [
    "مراجعات شركة أحمد نور للإيبوكسي",
    "آراء العملاء عزل أسطح جدة",
    "تقييمات شركة عزل جدة",
    "شهادات عملاء عزل مسابح",
    "مراجعات أرضيات إيبوكسي جدة",
    "تقييمات Google عزل أسطح",
    "آراء العملاء شركة عزل موثوقة",
    "شهادات نجاح مشاريع العزل",
    "تقييمات 5 نجوم عزل جدة",
    "مراجعات عملاء حقيقية"
  ],
  openGraph: {
    title: "⭐ آراء ومراجعات العملاء - شركة أحمد نور للإيبوكسي",
    description: "تقييمات حقيقية من عملائنا الكرام - أكثر من 500 مشروع ناجح",
    url: 'https://www.3azlepoxy.com/reviews',
    images: ['/images/customer-reviews-ahmed-nour.jpg'],
  },
  alternates: {
    canonical: '/reviews',
  },
};

const customerReviews = [
  {
    id: 1,
    name: "أحمد محمد السعدي",
    location: "شمال جدة - النزهة",
    service: "عزل أسطح",
    rating: 5,
    date: "2024-01-15",
    review: "خدمة ممتازة وجودة عالية. تم عزل السطح في 3 أيام كما وعدوا تماماً. لا توجد أي تسريبات بعد 6 أشهر. أنصح بهم بقوة.",
    image: "/images/reviews/customer-1.jpg",
    projectImage: "/images/projects/roof-1-after.jpg",
    verified: true
  },
  {
    id: 2,
    name: "فاطمة عبدالله الزهراني",
    location: "جنوب جدة - العزيزية",
    service: "عزل مسابح",
    rating: 5,
    date: "2024-01-10",
    review: "كان لدينا مشكلة تسرب في المسبح لسنوات. شركة أحمد نور حلت المشكلة نهائياً. فريق محترف وأسعار معقولة. شكراً لكم.",
    image: "/images/reviews/customer-2.jpg",
    projectImage: "/images/projects/pool-1-after.jpg",
    verified: true
  },
  {
    id: 3,
    name: "خالد عبدالرحمن القحطاني",
    location: "شرق جدة - الفيصلية",
    service: "أرضيات إيبوكسي ثلاثية الأبعاد",
    rating: 5,
    date: "2024-01-05",
    review: "النتيجة فاقت توقعاتي! الأرضية ثلاثية الأبعاد رائعة جداً. العمل نظيف ومنظم. سأتعامل معهم مرة أخرى بالتأكيد.",
    image: "/images/reviews/customer-3.jpg",
    projectImage: "/images/projects/epoxy-1-after.jpg",
    verified: true
  },
  {
    id: 4,
    name: "سارة محمد الغامدي",
    location: "غرب جدة - الكورنيش",
    service: "عزل خزانات المياه",
    rating: 5,
    date: "2023-12-28",
    review: "عمل احترافي ونظيف. تم عزل الخزان بمواد آمنة صحياً. الفريق ملتزم بالمواعيد ومهذب في التعامل. أنصح بهم.",
    image: "/images/reviews/customer-4.jpg",
    projectImage: "/images/projects/tank-1-after.jpg",
    verified: true
  },
  {
    id: 5,
    name: "عبدالعزيز سالم الحربي",
    location: "شمال جدة - الصفا",
    service: "عزل أسطح",
    rating: 5,
    date: "2023-12-20",
    review: "ممتاز جداً! حل مشكلة التسرب التي عانيت منها لسنوات. الضمان 10 سنوات يعطي ثقة كبيرة. شكراً لفريق العمل المحترف.",
    image: "/images/reviews/customer-5.jpg",
    projectImage: "/images/projects/roof-2-after.jpg",
    verified: true
  },
  {
    id: 6,
    name: "نورا أحمد البقمي",
    location: "جنوب جدة - المرجان",
    service: "عزل مسابح",
    rating: 5,
    date: "2023-12-15",
    review: "خدمة رائعة من البداية للنهاية. تم إصلاح تسرب المسبح بدون تكسير. النتيجة ممتازة والسعر مناسب جداً.",
    image: "/images/reviews/customer-6.jpg",
    projectImage: "/images/projects/pool-2-after.jpg",
    verified: true
  }
];

const googleReviews = {
  averageRating: 4.9,
  totalReviews: 127,
  ratingDistribution: {
    5: 118,
    4: 7,
    3: 2,
    2: 0,
    1: 0
  }
};

export default function ReviewsPage() {
  const reviewsSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "شركة أحمد نور للإيبوكسي",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": googleReviews.averageRating,
      "reviewCount": googleReviews.totalReviews,
      "bestRating": 5,
      "worstRating": 1
    },
    "review": customerReviews.map(review => ({
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": review.name
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": review.rating,
        "bestRating": 5,
        "worstRating": 1
      },
      "reviewBody": review.review,
      "datePublished": review.date
    }))
  };

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(reviewsSchema)
        }}
      />
      
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-yellow-600 via-orange-600 to-red-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ⭐ آراء ومراجعات العملاء
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-yellow-100">
                تقييمات حقيقية من عملائنا الكرام - أكثر من 500 مشروع ناجح
              </p>
              
              {/* إحصائيات Google Reviews */}
              <div className="bg-white bg-opacity-10 rounded-lg p-6 mb-8">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="text-4xl font-bold">{googleReviews.averageRating}</div>
                  <div className="flex text-yellow-300">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <div className="text-lg">({googleReviews.totalReviews} مراجعة)</div>
                </div>
                <div className="text-sm text-yellow-100">
                  تقييمات Google My Business الحقيقية
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  📞 انضم لعملائنا السعداء: 0571935447
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-lg text-lg font-semibold transition-colors"
                >
                  💬 واتساب
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* توزيع التقييمات */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                توزيع التقييمات
              </h2>
              
              <div className="bg-white rounded-lg shadow-lg p-8">
                {Object.entries(googleReviews.ratingDistribution).reverse().map(([stars, count]) => (
                  <div key={stars} className="flex items-center gap-4 mb-4">
                    <div className="flex items-center gap-1 w-20">
                      <span className="font-semibold">{stars}</span>
                      <svg className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    
                    <div className="flex-1 bg-gray-200 rounded-full h-3">
                      <div 
                        className="bg-yellow-400 h-3 rounded-full transition-all duration-1000"
                        style={{ width: `${(count / googleReviews.totalReviews) * 100}%` }}
                      ></div>
                    </div>
                    
                    <div className="w-12 text-sm text-gray-600 text-right">
                      {count}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* مراجعات العملاء */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                شهادات عملائنا الكرام
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                اقرأ تجارب عملائنا الحقيقية مع خدماتنا المتميزة
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {customerReviews.map((review) => (
                <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 border-r-4 border-yellow-400">
                  {/* رأس المراجعة */}
                  <div className="flex items-start gap-4 mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-gray-900">{review.name}</h3>
                        {review.verified && (
                          <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                            ✓ موثق
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{review.location}</p>
                      <div className="flex items-center gap-2">
                        <div className="flex text-yellow-400">
                          {[...Array(review.rating)].map((_, i) => (
                            <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">{review.date}</span>
                      </div>
                    </div>
                  </div>

                  {/* نوع الخدمة */}
                  <div className="mb-4">
                    <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                  </div>

                  {/* نص المراجعة */}
                  <p className="text-gray-700 leading-relaxed mb-4">
                    "{review.review}"
                  </p>

                  {/* صورة المشروع */}
                  <div className="rounded-lg overflow-hidden">
                    <img
                      src={review.projectImage}
                      alt={`مشروع ${review.service}`}
                      className="w-full h-48 object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* دعوة للعمل */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">
                🌟 كن أحد عملائنا السعداء
              </h2>
              <p className="text-xl mb-8">
                انضم إلى أكثر من 500 عميل راضٍ عن خدماتنا المتميزة
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:+966571935447"
                  className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  📞 احصل على عرض سعر مجاني
                </a>
                <a 
                  href="https://wa.me/966571935447"
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  💬 تواصل معنا عبر واتساب
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
        <MobileCallButtons />
      </NoSSR>
    </div>
  );
}
