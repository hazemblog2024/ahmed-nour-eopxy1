'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Tag, Clock, Search, TrendingUp } from 'lucide-react';
import { allArticles } from '@/data/articles';

const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'جميع المقالات', count: 6 },
    { id: 'roofing', name: 'عزل الأسطح', count: 2 },
    { id: 'pools', name: 'عزل المسابح', count: 1 },
    { id: 'epoxy', name: 'أرضيات إيبوكسي', count: 2 },
    { id: 'maintenance', name: 'الصيانة', count: 1 }
  ];

  const articles = allArticles;

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = articles.filter(article => article.featured);
  const popularArticles = [...articles].sort((a, b) => b.views - a.views).slice(0, 5);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* المحتوى الرئيسي */}
          <div className="lg:col-span-3">
            {/* شريط البحث والفلاتر */}
            <div className="bg-white rounded-xl p-6 shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-4">
                {/* البحث */}
                <div className="relative flex-1">
                  <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="ابحث في المقالات..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>

                {/* فلتر الفئات */}
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category.id} value={category.id}>
                      {category.name} ({category.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* المقالات المميزة */}
            {selectedCategory === 'all' && !searchTerm && (
              <div className="mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-8">المقالات المميزة</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {featuredArticles.map(article => (
                    <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                      <div className="relative h-48">
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                        <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                          مميز
                        </div>
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.publishDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 line-clamp-3">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{article.author}</span>
                          </div>

                          <Link
                            href={`/blog/${article.slug}`}
                            className="text-primary hover:text-primary-600 font-semibold flex items-center gap-1 transition-colors"
                          >
                            اقرأ المزيد
                            <span className="text-lg">←</span>
                          </Link>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}

            {/* جميع المقالات */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                {searchTerm ? `نتائج البحث عن "${searchTerm}"` : 'جميع المقالات'}
              </h2>

              <div className="space-y-8">
                {filteredArticles.map(article => (
                  <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="md:flex">
                      <div className="md:w-1/3">
                        <div className="relative h-48 md:h-full">
                          <Image
                            src={article.image}
                            alt={article.title}
                            fill
                            className="object-cover"
                          />
                        </div>
                      </div>

                      <div className="md:w-2/3 p-6">
                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                          <div className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            <span>{article.publishDate}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            <span>{article.readTime}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <TrendingUp className="w-4 h-4" />
                            <span>{article.views} مشاهدة</span>
                          </div>
                        </div>

                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {article.title}
                        </h3>

                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {article.excerpt}
                        </p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2">
                              <User className="w-4 h-4 text-gray-400" />
                              <span className="text-sm text-gray-600">{article.author}</span>
                            </div>

                            <div className="flex gap-2">
                              {article.tags.slice(0, 2).map((tag, index) => (
                                <span
                                  key={index}
                                  className="bg-primary/10 text-primary px-2 py-1 rounded text-xs"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>

                          <Link
                            href={`/blog/${article.slug}`}
                            className="text-primary hover:text-primary-600 font-semibold flex items-center gap-1 transition-colors"
                          >
                            اقرأ المقال
                            <span className="text-lg">←</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>

          {/* الشريط الجانبي */}
          <div className="space-y-8">
            {/* المقالات الأكثر قراءة */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                الأكثر قراءة
              </h3>

              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <Link
                    key={article.id}
                    href={`/blog/${article.slug}`}
                    className="block hover:bg-gray-50 p-3 rounded-lg transition-colors"
                  >
                    <div className="flex gap-3">
                      <span className="text-2xl font-bold text-primary">{index + 1}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 text-sm line-clamp-2 mb-1">
                          {article.title}
                        </h4>
                        <div className="text-xs text-gray-500 flex items-center gap-2">
                          <span>{article.views} مشاهدة</span>
                          <span>•</span>
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* الفئات */}
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Tag className="w-5 h-5 text-primary" />
                الفئات
              </h3>

              <div className="space-y-2">
                {categories.filter(cat => cat.id !== 'all').map(category => (
                  <button
                    key={category.id}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`w-full text-right p-3 rounded-lg transition-colors ${
                      selectedCategory === category.id
                        ? 'bg-primary text-white'
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <div className="flex justify-between items-center">
                      <span>{category.name}</span>
                      <span className={`text-sm ${
                        selectedCategory === category.id ? 'text-white/80' : 'text-gray-500'
                      }`}>
                        {category.count}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* دعوة للعمل */}
            <div className="bg-gradient-to-br from-primary to-gold rounded-xl p-6 text-white text-center">
              <h3 className="text-xl font-bold mb-3">هل تحتاج استشارة؟</h3>
              <p className="text-sm opacity-90 mb-4">
                تواصل معنا للحصول على استشارة مجانية من خبرائنا
              </p>
              <a
                href="#contact"
                className="bg-white text-primary hover:bg-gray-100 font-semibold py-2 px-4 rounded-lg transition-colors inline-block"
              >
                تواصل معنا
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
