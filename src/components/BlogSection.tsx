'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Search } from 'lucide-react';
import { allArticles } from '@/data/articles-extended';
const BlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = allArticles;

  const categories = [
    { id: 'all', name: 'جميع المقالات', count: articles.length },
    { id: 'roofing', name: 'عزل الأسطح', count: articles.filter(a => a.category === 'roofing').length },
    { id: 'pools', name: 'عزل المسابح', count: articles.filter(a => a.category === 'pools').length },
    { id: 'epoxy', name: 'أرضيات إيبوكسي', count: articles.filter(a => a.category === 'epoxy').length },
    { id: 'maintenance', name: 'الصيانة', count: articles.filter(a => a.category === 'maintenance').length }
  ];

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredArticles = filteredArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* شريط البحث والفلترة */}
        <div className="mb-12">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* شريط البحث */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="ابحث في المقالات..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-4 pr-12 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* فلتر الفئات */}
            <div className="flex flex-wrap gap-2">
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    selectedCategory === category.id
                      ? 'bg-primary text-white'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* المقالات المميزة */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">المقالات المميزة</h2>
            <div className="grid md:grid-cols-2 gap-8">
              {featuredArticles.map(article => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  {/* الصورة */}
                  <div className="relative w-full" style={{ height: '180px' }}>
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

                  {/* المحتوى - منفصل تمام<|im_start|> عن الصورة */}
                  <div style={{ 
                    padding: '20px',
                    backgroundColor: 'white',
                    position: 'relative',
                    zIndex: 10
                  }}>
                    {/* معلومات المقال */}
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

                    {/* العنوان */}
                    <h3 
                      style={{
                        fontSize: '16px',
                        fontWeight: 'bold',
                        color: '#111827',
                        marginTop: '0px',
                        marginBottom: '12px',
                        lineHeight: '1.5',
                        display: 'block',
                        backgroundColor: 'white',
                        position: 'relative',
                        zIndex: 20,
                        padding: '0'
                      }}
                    >
                      {article.title}
                    </h3>

                    {/* الوصف */}
                    <p 
                      style={{
                        fontSize: '14px',
                        color: '#6b7280',
                        marginBottom: '16px',
                        lineHeight: '1.6',
                        display: 'block',
                        backgroundColor: 'white',
                        position: 'relative',
                        zIndex: 20
                      }}
                    >
                      {article.excerpt}
                    </p>

                    {/* معلومات إضافية */}
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
            {selectedCategory === 'all' ? 'جميع المقالات' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {regularArticles.length > 0 ? (
            <div className="space-y-8">
              {regularArticles.map(article => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    {/* الصورة */}
                    <div className="md:w-1/3">
                      <div className="relative w-full" style={{ height: '180px' }}>
                        <Image
                          src={article.image}
                          alt={article.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* المحتوى - منفصل تمام */}
                    <div className="md:w-2/3" style={{ 
                      padding: '20px',
                      backgroundColor: 'white',
                      position: 'relative',
                      zIndex: 10
                    }}>
                      {/* معلومات المقال */}
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

                      {/* العنوان */}
                      <h3 
                        style={{
                          fontSize: '18px',
                          fontWeight: 'bold',
                          color: '#111827',
                          marginTop: '0px',
                          marginBottom: '12px',
                          lineHeight: '1.5',
                          display: 'block',
                          backgroundColor: 'white',
                          position: 'relative',
                          zIndex: 20,
                          padding: '0'
                        }}
                      >
                        {article.title}
                      </h3>

                      {/* الوصف */}
                      <p 
                        style={{
                          fontSize: '16px',
                          color: '#6b7280',
                          marginBottom: '16px',
                          lineHeight: '1.5',
                          display: 'block',
                          backgroundColor: 'white',
                          position: 'relative',
                          zIndex: 20
                        }}
                      >
                        {article.excerpt}
                      </p>

                      {/* معلومات إضافية */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-2">
                            <User className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-600">{article.author}</span>
                          </div>
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
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">لا توجد مقالات تطابق البحث الحالي</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
