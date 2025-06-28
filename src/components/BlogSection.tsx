'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { allArticles } from '@/data/articles';

export default function BlogSection() {
  const [searchTerm, setSearchTerm] = useState('');

  const articles = allArticles || [];

  const filteredArticles = articles.filter(article => 
    article.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
          مدونة أحمد نور للإيبوكسي
        </h2>

        {/* شريط البحث */}
        <div className="mb-12 max-w-md mx-auto">
          <input
            type="text"
            placeholder="ابحث في المقالات..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* المقالات */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map(article => (
            <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {article.title}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {article.excerpt}
                </p>
                
                <Link
                  href={`/blog/${article.slug}`}
                  className="text-blue-600 hover:text-blue-800 font-semibold"
                >
                  اقرأ المزيد ←
                </Link>
              </div>
            </article>
          ))}
        </div>

        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">لا توجد مقالات</p>
          </div>
        )}
      </div>
    </section>
  );
}
