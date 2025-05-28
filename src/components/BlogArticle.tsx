'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Tag, Share2, Heart, MessageCircle, TrendingUp } from 'lucide-react';

interface Article {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  author: string;
  publishDate: string;
  readTime: string;
  image: string;
  tags: string[];
  views: number;
}

interface Props {
  article: Article;
}

const BlogArticle = ({ article }: Props) => {
  const [likes, setLikes] = useState(42);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setIsLiked(!isLiked);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: window.location.href,
      });
    } else {
      // نسخ الرابط إلى الحافظة
      navigator.clipboard.writeText(window.location.href);
      alert('تم نسخ الرابط!');
    }
  };

  // تحويل المحتوى من Markdown إلى HTML (مبسط)
  const formatContent = (content: string) => {
    return content
      .replace(/^# (.*$)/gim, '<h1 class="text-3xl font-bold text-gray-900 mb-6 mt-8">$1</h1>')
      .replace(/^## (.*$)/gim, '<h2 class="text-2xl font-bold text-gray-900 mb-4 mt-6">$1</h2>')
      .replace(/^### (.*$)/gim, '<h3 class="text-xl font-semibold text-gray-900 mb-3 mt-4">$1</h3>')
      .replace(/^\*\*(.*)\*\*/gim, '<strong class="font-semibold">$1</strong>')
      .replace(/^- (.*$)/gim, '<li class="mb-2">$1</li>')
      .replace(/\n\n/g, '</p><p class="text-gray-700 leading-relaxed mb-4">')
      .replace(/^(?!<[h|l|p])/gm, '<p class="text-gray-700 leading-relaxed mb-4">')
      .replace(/<\/li>\s*<p/g, '</li><ul class="list-disc list-inside mb-4 space-y-2"><li')
      .replace(/<\/p>\s*<li/g, '</p><ul class="list-disc list-inside mb-4 space-y-2"><li')
      .replace(/(<li.*<\/li>)/gs, '<ul class="list-disc list-inside mb-4 space-y-2">$1</ul>');
  };

  const relatedArticles = [
    {
      id: 2,
      title: 'أرضيات الإيبوكسي ثلاثية الأبعاد: الدليل الكامل',
      slug: 'epoxy-3d-flooring-complete-guide',
      image: 'https://drive.google.com/uc?export=view&id=1pvDKXN4VQbm1qQwM_PALNyKtIbD3u525',
      readTime: '12 دقيقة'
    },
    {
      id: 3,
      title: 'كيفية اكتشاف تسرب المياه في المسابح',
      slug: 'pool-leak-detection-repair',
      image: 'https://drive.google.com/uc?export=view&id=1-mQ5BNyOKCb3qnBSV1603SRTHnC0h-0w',
      readTime: '6 دقائق'
    },
    {
      id: 4,
      title: '5 أخطاء شائعة في عزل الخزانات',
      slug: 'tank-insulation-common-mistakes',
      image: 'https://drive.google.com/uc?export=view&id=15pRVuViCXc7c3HmNFhycUVYM-Nlg3yk-',
      readTime: '5 دقائق'
    }
  ];

  return (
    <article className="py-20 bg-white">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          {/* رأس المقال */}
          <header className="mb-8">
            {/* التنقل */}
            <nav className="mb-6">
              <Link
                href="/blog"
                className="text-primary hover:text-primary-600 flex items-center gap-2 transition-colors"
              >
                <span className="text-lg">←</span>
                العودة إلى المدونة
              </Link>
            </nav>

            {/* العنوان */}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {article.title}
            </h1>

            {/* معلومات المقال */}
            <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>{article.author}</span>
              </div>

              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>{article.publishDate}</span>
              </div>

              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5" />
                <span>{article.readTime}</span>
              </div>

              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span>{article.views} مشاهدة</span>
              </div>
            </div>

            {/* التاجات */}
            <div className="flex flex-wrap gap-2 mb-6">
              {article.tags.map((tag, index) => (
                <span
                  key={index}
                  className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* أزرار التفاعل */}
            <div className="flex items-center gap-4 pb-6 border-b">
              <button
                onClick={handleLike}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
                  isLiked
                    ? 'bg-red-100 text-red-600'
                    : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
              >
                <Heart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
                <span>{likes}</span>
              </button>

              <button
                onClick={handleShare}
                className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors"
              >
                <Share2 className="w-5 h-5" />
                <span>مشاركة</span>
              </button>

              <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span>تعليق</span>
              </button>
            </div>
          </header>

          {/* صورة المقال */}
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8">
            <Image
              src={article.image}
              alt={article.title}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* محتوى المقال */}
          <div className="prose prose-lg max-w-none">
            <div
              className="article-content"
              dangerouslySetInnerHTML={{ __html: formatContent(article.content) }}
            />
          </div>

          {/* دعوة للعمل */}
          <div className="bg-gradient-to-r from-primary to-gold rounded-2xl p-8 text-white text-center my-12">
            <h3 className="text-2xl font-bold mb-4">هل أعجبك المقال؟</h3>
            <p className="text-lg mb-6 opacity-90">
              تواصل معنا للحصول على استشارة مجانية من خبرائنا
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                احصل على استشارة مجانية
              </a>
              <a
                href="tel:+966571935447"
                className="border-2 border-white text-white hover:bg-white hover:text-primary font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                اتصل الآن
              </a>
            </div>
          </div>

          {/* المقالات ذات الصلة */}
          <section className="mt-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">مقالات ذات صلة</h2>

            <div className="grid md:grid-cols-3 gap-8">
              {relatedArticles.map(relatedArticle => (
                <Link
                  key={relatedArticle.id}
                  href={`/blog/${relatedArticle.slug}`}
                  className="group"
                >
                  <article className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 transform group-hover:-translate-y-2">
                    <div className="relative h-48">
                      <Image
                        src={relatedArticle.image}
                        alt={relatedArticle.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    <div className="p-6">
                      <h3 className="font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                        {relatedArticle.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <Clock className="w-4 h-4" />
                        <span>{relatedArticle.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </section>

          {/* قسم التعليقات */}
          <section className="mt-16 pt-8 border-t">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">التعليقات</h2>

            <div className="bg-gray-50 rounded-xl p-8 text-center">
              <MessageCircle className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                كن أول من يعلق!
              </h3>
              <p className="text-gray-600 mb-6">
                شاركنا رأيك أو اطرح أسئلتك حول هذا المقال
              </p>
              <button className="btn-primary">
                اكتب تعليق
              </button>
            </div>
          </section>
        </div>
      </div>
    </article>
  );
};

export default BlogArticle;
