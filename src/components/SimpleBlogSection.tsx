'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock } from 'lucide-react';
import { allArticles } from '@/data/articles';

const SimpleBlogSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const articles = allArticles;
  const featuredArticles = articles.filter(article => article.featured);

  const filteredArticles = articles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || article.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">


        {/* المقالات المميزة */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">المقالات المميزة</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {featuredArticles.map(article => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
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

                {/* المحتوى - منفصل تماماً عن الصورة */}
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
              </div>
            ))}
          </div>
        </div>

        {/* جميع المقالات */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">جميع المقالات</h2>
          <div className="space-y-8">
            {filteredArticles.map(article => (
              <div key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
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

                  {/* المحتوى - منفصل تماماً */}
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
                        display: 'block'
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimpleBlogSection;
