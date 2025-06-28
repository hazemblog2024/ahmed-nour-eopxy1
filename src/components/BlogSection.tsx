'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, User, Clock, Search } from 'lucide-react';

// بيانات المقالات مباشرة في الملف لضمان العمل
const allArticles = [
  {
    id: 1,
    title: 'دليل شامل لعزل الأسطح في المملكة العربية السعودية 2025',
    slug: 'roof-insulation-guide-saudi-arabia',
    excerpt: 'تعرف على أفضل طرق عزل الأسطح في السعودية، المواد المستخدمة، والتكاليف المتوقعة مع نصائح الخبراء.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2025-01-15',
    readTime: '8 دقائق',
    featured: true,
    tags: ['عزل الأسطح', 'السعودية', 'مواد العزل']
  },
  {
    id: 2,
    title: 'أرضيات الإيبوكسي ثلاثية الأبعاد: الدليل الكامل',
    slug: 'epoxy-3d-flooring-complete-guide',
    excerpt: 'اكتشف عالم أرضيات الإيبوكسي ثلاثية الأبعاد، مميزاتها، طرق التركيب، والتكاليف في السوق السعودي.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg',
    category: 'epoxy',
    author: 'أحمد نور',
    publishDate: '2025-01-10',
    readTime: '12 دقيقة',
    featured: true,
    tags: ['إيبوكسي', 'أرضيات ثلاثية الأبعاد', 'ديكور']
  },
  {
    id: 3,
    title: 'كيفية اكتشاف تسرب المياه في المسابح وإصلاحه',
    slug: 'pool-leak-detection-repair',
    excerpt: 'دليل شامل لاكتشاف وإصلاح تسريبات المسابح، العلامات التحذيرية، وطرق الوقاية الفعالة.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/Ls1gfQMN/pool-leak-detection.jpg',
    category: 'pools',
    author: 'أحمد نور',
    publishDate: '2025-01-05',
    readTime: '6 دقائق',
    featured: false,
    tags: ['مسابح', 'تسرب المياه', 'صيانة']
  },
  {
    id: 4,
    title: '5 أخطاء شائعة في عزل الخزانات وكيفية تجنبها',
    slug: 'tank-insulation-common-mistakes',
    excerpt: 'تعرف على الأخطاء الشائعة في عزل خزانات المياه وكيفية تجنبها لضمان عزل فعال وطويل الأمد.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg',
    category: 'maintenance',
    author: 'أحمد نور',
    publishDate: '2025-01-01',
    readTime: '5 دقائق',
    featured: false,
    tags: ['خزانات المياه', 'عزل', 'صيانة']
  },
  {
    id: 5,
    title: 'أفضل مواد العزل المائي للأسطح في جدة',
    slug: 'best-waterproofing-materials-jeddah',
    excerpt: 'مقارنة شاملة لأفضل مواد العزل المائي المناسبة لمناخ جدة مع الأسعار والمميزات.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/gctxrbC3/roof-insulation-materials.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2024-12-28',
    readTime: '7 دقائق',
    featured: false,
    tags: ['مواد العزل', 'جدة', 'عزل مائي']
  },
  {
    id: 6,
    title: 'تكلفة عزل الأسطح في السعودية 2025',
    slug: 'roof-insulation-cost-saudi-2025',
    excerpt: 'دليل شامل لتكاليف عزل الأسطح في السعودية، العوامل المؤثرة على السعر، ونصائح لتوفير التكاليف.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2024-12-25',
    readTime: '9 دقائق',
    featured: false,
    tags: ['تكلفة العزل', 'السعودية', 'أسعار']
  },
  {
    id: 7,
    title: 'مقارنة بين الإيبوكسي والسيراميك للأرضيات',
    slug: 'epoxy-vs-ceramic-flooring-comparison',
    excerpt: 'مقارنة تفصيلية بين أرضيات الإيبوكسي والسيراميك من حيث التكلفة، المتانة، والصيانة.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg',
    category: 'epoxy',
    author: 'أحمد نور',
    publishDate: '2024-12-20',
    readTime: '10 دقائق',
    featured: true,
    tags: ['إيبوكسي', 'سيراميك', 'مقارنة']
  },
  {
    id: 8,
    title: 'علامات تحذيرية تدل على الحاجة لعزل السطح',
    slug: 'roof-insulation-warning-signs',
    excerpt: 'تعرف على العلامات التي تدل على ضرورة عزل السطح فور<|im_start|> لتجنب المشاكل الأكبر.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2024-12-15',
    readTime: '6 دقائق',
    featured: false,
    tags: ['علامات التحذير', 'عزل الأسطح', 'صيانة']
  },
  {
    id: 9,
    title: 'الفرق بين العزل المائي والعزل الحراري',
    slug: 'waterproof-vs-thermal-insulation',
    excerpt: 'شرح مفصل للفروقات بين العزل المائي والحراري، متى نحتاج كل نوع، والمواد المستخدمة.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/nLkn9qPC/water-tank-insulation-jpg.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2024-12-10',
    readTime: '8 دقائق',
    featured: false,
    tags: ['عزل مائي', 'عزل حراري', 'أنواع العزل']
  },
  {
    id: 10,
    title: 'أحدث تصاميم الإيبوكسي ثلاثي الأبعاد 2025',
    slug: 'latest-3d-epoxy-designs-2025',
    excerpt: 'استكشف أحدث وأجمل تصاميم الإيبوكسي ثلاثي الأبعاد لعام 2025 مع أفكار إبداعية للمنازل والمكاتب.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/MZsbb4QY/3d-epoxy-floor-glossy-jpg.jpg',
    category: 'epoxy',
    author: 'أحمد نور',
    publishDate: '2024-12-05',
    readTime: '11 دقيقة',
    featured: true,
    tags: ['تصاميم حديثة', 'إيبوكسي ثلاثي الأبعاد', '2025']
  },
  {
    id: 11,
    title: 'صيانة المسابح في فصل الصيف: دليل شامل',
    slug: 'pool-maintenance-summer-guide',
    excerpt: 'نصائح مهمة لصيانة المسابح خلال فصل الصيف في السعودية، التنظيف، والمواد الكيميائية.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/Ls1gfQMN/pool-leak-detection.jpg',
    category: 'pools',
    author: 'أحمد نور',
    publishDate: '2024-11-30',
    readTime: '7 دقائق',
    featured: false,
    tags: ['صيانة المسابح', 'الصيف', 'تنظيف']
  },
  {
    id: 12,
    title: 'مقارنة شاملة بين مواد العزل المختلفة',
    slug: 'insulation-materials-comprehensive-comparison',
    excerpt: 'مقارنة تفصيلية بين جميع أنواع مواد العزل المتاحة في السوق السعودي مع المميزات والعيوب.',
    content: 'محتوى المقال الكامل...',
    image: 'https://i.postimg.cc/gctxrbC3/roof-insulation-materials.jpg',
    category: 'roofing',
    author: 'أحمد نور',
    publishDate: '2024-11-25',
    readTime: '13 دقيقة',
    featured: false,
    tags: ['مواد العزل', 'مقارنة', 'أنواع العزل']
  }
];

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
                  <div className="relative w-full h-48">
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

                    <h3 className="text-xl font-bold text-gray-900 mb-3 leading-tight">
                      {article.title}
                    </h3>

                    <p className="text-gray-600 mb-4">
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
            {selectedCategory === 'all' ? 'جميع المقالات' : categories.find(c => c.id === selectedCategory)?.name}
          </h2>
          
          {regularArticles.length > 0 ? (
            <div className="space-y-8">
              {regularArticles.map(article => (
                <article key={article.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300">
                  <div className="md:flex">
                    <div className="md:w-1/3">
                      <div className="relative w-full h-48 md:h-full">
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
                      </div>

                      <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4">
                        {article.excerpt}
                      </p>

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
