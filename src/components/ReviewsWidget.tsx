import Link from 'next/link';

interface Review {
  id: number;
  name: string;
  location: string;
  service: string;
  rating: number;
  review: string;
  date: string;
  verified?: boolean;
}

const featuredReviews: Review[] = [
  {
    id: 1,
    name: "أحمد محمد السعدي",
    location: "شمال جدة",
    service: "عزل أسطح",
    rating: 5,
    date: "2024-01-15",
    review: "خدمة ممتازة وجودة عالية. تم عزل السطح في 3 أيام كما وعدوا تماماً. لا توجد أي تسريبات بعد 6 أشهر.",
    verified: true
  },
  {
    id: 2,
    name: "فاطمة عبدالله الزهراني",
    location: "جنوب جدة",
    service: "عزل مسابح",
    rating: 5,
    date: "2024-01-10",
    review: "كان لدينا مشكلة تسرب في المسبح لسنوات. شركة أحمد نور حلت المشكلة نهائياً. فريق محترف وأسعار معقولة.",
    verified: true
  },
  {
    id: 3,
    name: "خالد عبدالرحمن القحطاني",
    location: "شرق جدة",
    service: "أرضيات إيبوكسي",
    rating: 5,
    date: "2024-01-05",
    review: "النتيجة فاقت توقعاتي! الأرضية ثلاثية الأبعاد رائعة جداً. العمل نظيف ومنظم.",
    verified: true
  }
];

// مكون عرض المراجعات المختصر
export default function ReviewsWidget({ showTitle = true, limit = 3 }: { 
  showTitle?: boolean; 
  limit?: number; 
}) {
  const displayReviews = featuredReviews.slice(0, limit);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {showTitle && (
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              ⭐ آراء عملائنا الكرام
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              تقييمات حقيقية من عملاء راضين عن خدماتنا المتميزة
            </p>
          </div>
        )}

        {/* إحصائيات سريعة */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-4 bg-white rounded-lg shadow-lg p-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-600">4.9</div>
              <div className="flex text-yellow-400 justify-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <div className="text-sm text-gray-600">متوسط التقييم</div>
            </div>
            
            <div className="w-px h-12 bg-gray-300"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">127+</div>
              <div className="text-sm text-gray-600">مراجعة</div>
            </div>
            
            <div className="w-px h-12 bg-gray-300"></div>
            
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">500+</div>
              <div className="text-sm text-gray-600">مشروع ناجح</div>
            </div>
          </div>
        </div>

        {/* المراجعات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {displayReviews.map((review) => (
            <div key={review.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
              {/* رأس المراجعة */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-bold text-gray-900 text-sm">{review.name}</h3>
                    {review.verified && (
                      <span className="bg-green-100 text-green-600 text-xs px-2 py-1 rounded-full">
                        ✓
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-gray-600">{review.location}</p>
                </div>
              </div>

              {/* التقييم */}
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* نوع الخدمة */}
              <div className="mb-3">
                <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
                  {review.service}
                </span>
              </div>

              {/* نص المراجعة */}
              <p className="text-gray-700 text-sm leading-relaxed">
                "{review.review}"
              </p>
            </div>
          ))}
        </div>

        {/* رابط لعرض جميع المراجعات */}
        <div className="text-center">
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            <span>عرض جميع المراجعات</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12l-3-3m0 0l-3 3m3-3v12" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

// مكون مراجعة واحدة مبسط
export function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-r-4 border-yellow-400">
      <div className="flex items-center gap-3 mb-3">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
          {review.name.charAt(0)}
        </div>
        <div className="flex-1">
          <h4 className="font-semibold text-gray-900 text-sm">{review.name}</h4>
          <p className="text-xs text-gray-600">{review.location}</p>
        </div>
        <div className="flex text-yellow-400">
          {[...Array(review.rating)].map((_, i) => (
            <svg key={i} className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 text-sm leading-relaxed mb-2">
        "{review.review}"
      </p>
      
      <div className="flex items-center justify-between">
        <span className="bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded-full">
          {review.service}
        </span>
        <span className="text-xs text-gray-500">{review.date}</span>
      </div>
    </div>
  );
}

// مكون تقييم Google
export function GoogleRating() {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 text-center">
      <div className="flex items-center justify-center gap-2 mb-4">
        <img 
          src="/images/google-logo.png" 
          alt="Google" 
          className="w-6 h-6"
        />
        <span className="font-semibold text-gray-900">تقييمات Google</span>
      </div>
      
      <div className="text-4xl font-bold text-yellow-600 mb-2">4.9</div>
      
      <div className="flex justify-center text-yellow-400 mb-2">
        {[...Array(5)].map((_, i) => (
          <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        بناءً على 127+ مراجعة
      </div>
      
      <a
        href="https://g.co/kgs/h1tbAjS"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-blue-700 transition-colors"
      >
        اكتب مراجعة
      </a>
    </div>
  );
}
