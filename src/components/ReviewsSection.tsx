'use client';

import { useState, useEffect } from 'react';
import { Star, Quote, ThumbsUp, MessageCircle, ExternalLink } from 'lucide-react';

const ReviewsSection = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [isClient, setIsClient] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'أحمد محمد السعدي',
      service: 'عزل أسطح',
      rating: 5,
      date: '2024-01-15',
      review: 'خدمة ممتازة وجودة عالية في عزل سطح الفيلا. الفريق محترف والعمل نظيف. أنصح بالتعامل معهم.',
      verified: true,
      helpful: 12,
      source: 'google'
    },
    {
      id: 2,
      name: 'فاطمة أحمد الزهراني',
      service: 'أرضيات إيبوكسي',
      rating: 5,
      date: '2024-01-10',
      review: 'أرضية إيبوكسي ثلاثية الأبعاد رائعة في المكتب. التصميم مذهل والتنفيذ احترافي. تجاوزت توقعاتي.',
      verified: true,
      helpful: 8,
      source: 'website'
    },
    {
      id: 3,
      name: 'محمد عبدالله القحطاني',
      service: 'عزل مسابح',
      rating: 5,
      date: '2024-01-05',
      review: 'عزل المسبح تم بشكل مثالي. لا توجد أي مشاكل تسرب بعد 6 أشهر. شركة موثوقة وأسعار معقولة.',
      verified: true,
      helpful: 15,
      source: 'google'
    },
    {
      id: 4,
      name: 'سارة محمد الغامدي',
      service: 'عزل خزانات',
      rating: 4,
      date: '2023-12-28',
      review: 'خدمة جيدة في عزل خزان المياه. العمل نظيف والفريق ملتزم بالمواعيد. النتيجة مرضية.',
      verified: true,
      helpful: 6,
      source: 'website'
    },
    {
      id: 5,
      name: 'عبدالرحمن سالم الحربي',
      service: 'صيانة مكيفات',
      rating: 5,
      date: '2023-12-25',
      review: 'صيانة شاملة للمكيفات مع تنظيف عميق. الفني محترف ويشرح المشاكل بوضوح. خدمة ممتازة.',
      verified: true,
      helpful: 9,
      source: 'google'
    },
    {
      id: 6,
      name: 'نورا أحمد العتيبي',
      service: 'أعمال سباكة',
      rating: 5,
      date: '2023-12-20',
      review: 'حل مشكلة تسرب المياه بسرعة وكفاءة. خدمة طوارئ ممتازة والسعر مناسب. شكراً للفريق.',
      verified: true,
      helpful: 7,
      source: 'website'
    }
  ];

  const stats = {
    totalReviews: 127,
    averageRating: 4.8,
    fiveStars: 89,
    fourStars: 28,
    threeStars: 8,
    twoStars: 2,
    oneStar: 0
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  const filteredReviews = activeTab === 'all'
    ? reviews
    : reviews.filter(review => review.service.includes(activeTab));

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  const getSourceIcon = (source: string) => {
    switch (source) {
      case 'google':
        return '🔍';
      case 'website':
        return '🌐';
      default:
        return '⭐';
    }
  };

  if (!isClient) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            آراء <span className="gradient-text">عملائنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            اكتشف تجارب عملائنا الحقيقية مع خدماتنا المتميزة
          </p>
        </div>

        {/* إحصائيات التقييمات */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* التقييم العام */}
            <div className="text-center">
              <div className="text-6xl font-bold text-primary mb-2">
                {stats.averageRating}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(5)}
              </div>
              <p className="text-gray-600">
                بناءً على {stats.totalReviews} تقييم
              </p>
            </div>

            {/* توزيع التقييمات */}
            <div className="space-y-3">
              {[5, 4, 3, 2, 1].map((stars) => {
                const count = stats[`${['oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'][stars - 1]}` as keyof typeof stats] as number;
                const percentage = (count / stats.totalReviews) * 100;

                return (
                  <div key={stars} className="flex items-center gap-3">
                    <span className="text-sm font-medium w-8">{stars}</span>
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <div className="flex-1 bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-yellow-400 h-2 rounded-full"
                        style={{ width: `${percentage}%` }}
                      ></div>
                    </div>
                    <span className="text-sm text-gray-600 w-8">{count}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* فلاتر التقييمات */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'all', name: 'جميع التقييمات' },
            { id: 'عزل', name: 'خدمات العزل' },
            { id: 'إيبوكسي', name: 'أرضيات إيبوكسي' },
            { id: 'صيانة', name: 'الصيانة' },
            { id: 'سباكة', name: 'السباكة' }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* التقييمات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredReviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              {/* رأس التقييم */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center text-white font-bold">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.service}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-sm">{getSourceIcon(review.source)}</span>
                  {review.verified && (
                    <span className="text-green-500 text-xs">✓</span>
                  )}
                </div>
              </div>

              {/* التقييم والتاريخ */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-sm text-gray-500">{review.date}</span>
              </div>

              {/* نص التقييم */}
              <div className="relative mb-4">
                <Quote className="absolute -top-2 -right-2 w-6 h-6 text-primary/20" />
                <p className="text-gray-700 leading-relaxed pr-4">
                  {review.review}
                </p>
              </div>

              {/* أزرار التفاعل */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                  <ThumbsUp className="w-4 h-4" />
                  <span className="text-sm">مفيد ({review.helpful})</span>
                </button>
                <button className="flex items-center gap-2 text-gray-500 hover:text-primary transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-sm">رد</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* دعوة لكتابة تقييم */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary to-gold rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">شاركنا تجربتك</h3>
            <p className="text-lg mb-6 opacity-90">
              هل تعاملت معنا من قبل؟ نود سماع رأيك في خدماتنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://g.page/r/your-google-business-id/review"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                <ExternalLink className="w-5 h-5" />
                تقييم على Google
              </a>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-colors">
                اكتب تقييم هنا
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
