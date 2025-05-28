'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Filter, Eye, Calendar, MapPin, X } from 'lucide-react';

const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = [
    { id: 'all', name: 'جميع المشاريع' },
    { id: 'roofing', name: 'عزل الأسطح' },
    { id: 'pools', name: 'عزل المسابح' },
    { id: 'tanks', name: 'عزل الخزانات' },
    { id: 'epoxy', name: 'أرضيات إيبوكسي' },
    { id: 'construction', name: 'إنشاء مسابح' }
  ];

  const projects = [
    {
      id: 1,
      title: 'عزل سطح فيلا سكنية',
      category: 'roofing',
      location: 'جدة - حي النزهة',
      date: '2024',
      description: 'مشروع عزل سطح فيلا سكنية بمساحة 300 متر مربع باستخدام أحدث مواد العزل المائي والحراري',
      beforeImage: 'https://i.postimg.cc/k5dxgP07/roof-villa-before-after-insulation.jpg',
      afterImage: 'https://i.postimg.cc/k5dxgP07/roof-villa-before-after-insulation.jpg',
      features: ['عزل مائي متقدم', 'عزل حراري', 'ضمان 10 سنوات']
    },
    {
      id: 2,
      title: 'أرضيات إيبوكسي ثلاثية الأبعاد - مطعم',
      category: 'epoxy',
      location: 'جدة - حي البلد',
      date: '2024',
      description: 'تطبيق أرضيات إيبوكسي ثلاثية الأبعاد بتصميم مائي مذهل في مطعم بمساحة 200 متر مربع',
      beforeImage: 'https://i.postimg.cc/XJBGfHSs/epoxy-3d-floor-restaurant.jpg',
      afterImage: 'https://i.postimg.cc/XJBGfHSs/epoxy-3d-floor-restaurant.jpg',
      features: ['تصميم ثلاثي الأبعاد', 'مقاوم للخدش', 'سهل التنظيف']
    },
    {
      id: 3,
      title: 'عزل مسبح فيلا خاصة',
      category: 'pools',
      location: 'جدة - حي الروضة',
      date: '2023',
      description: 'عزل مسبح خاص بمساحة 50 متر مربع مع ضمان 15 سنة ضد التسرب',
      beforeImage: 'https://i.postimg.cc/CxbcN7YL/villa-pool-insulated.jpg',
      afterImage: 'https://i.postimg.cc/CxbcN7YL/villa-pool-insulated.jpg',
      features: ['مقاوم للكلور', 'عزل متقدم', 'ضمان 15 سنة']
    },
    {
      id: 4,
      title: 'عزل خزان مياه علوي',
      category: 'tanks',
      location: 'جدة - حي الصفا',
      date: '2023',
      description: 'عزل خزان مياه علوي بسعة 10000 لتر بمواد آمنة وصحية معتمدة',
      beforeImage: 'https://i.postimg.cc/jqJ32t97/top-water-tank-insulated.jpg',
      afterImage: 'https://i.postimg.cc/jqJ32t97/top-water-tank-insulated.jpg',
      features: ['مواد آمنة', 'مقاوم للبكتيريا', 'شهادة صحية']
    },
    {
      id: 5,
      title: 'إنشاء مسبح حديث',
      category: 'construction',
      location: 'جدة - حي الحمراء',
      date: '2024',
      description: 'إنشاء مسبح حديث بتصميم عصري مع أنظمة ترشيح متقدمة وإضاءة LED',
      beforeImage: 'https://i.postimg.cc/XvQcHDP3/commercial-pool-insulation.jpg',
      afterImage: 'https://i.postimg.cc/XvQcHDP3/commercial-pool-insulation.jpg',
      features: ['تصميم عصري', 'أنظمة متقدمة', 'إضاءة LED']
    },
    {
      id: 6,
      title: 'أرضيات إيبوكسي - مكتب إداري',
      category: 'epoxy',
      location: 'جدة - حي النزهة',
      date: '2023',
      description: 'تطبيق أرضيات إيبوكسي بتصميم أنيق في مكتب إداري بمساحة 150 متر مربع',
      beforeImage: 'https://i.postimg.cc/TYd2G77B/epoxy-floor-office.jpg',
      afterImage: 'https://i.postimg.cc/TYd2G77B/epoxy-floor-office.jpg',
      features: ['تصميم أنيق', 'جودة عالية', 'مقاوم للتآكل']
    }
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* فلاتر المشاريع */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 shadow'
              }`}
            >
              {filter.name}
            </button>
          ))}
        </div>

        {/* شبكة المشاريع */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              {/* صورة المشروع */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.afterImage}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  quality={75}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
                  <div className="flex items-center gap-2 text-white/80 text-sm">
                    <MapPin className="w-4 h-4" />
                    <span>{project.location}</span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                  <Eye className="w-5 h-5 text-white" />
                </div>
              </div>

              {/* محتوى المشروع */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                  <Calendar className="w-4 h-4" />
                  <span>{project.date}</span>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description.length > 100
                    ? `${project.description.substring(0, 100)}...`
                    : project.description
                  }
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.features.slice(0, 2).map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {feature}
                    </span>
                  ))}
                  {project.features.length > 2 && (
                    <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs">
                      +{project.features.length - 2} المزيد
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* نافذة منبثقة لتفاصيل المشروع */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              {/* رأس النافذة */}
              <div className="flex justify-between items-center p-6 border-b">
                <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              {/* محتوى النافذة */}
              <div className="p-6">
                {/* معلومات المشروع */}
                <div className="grid md:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-5 h-5" />
                    <span>{selectedProject.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-5 h-5" />
                    <span>{selectedProject.date}</span>
                  </div>
                </div>

                {/* الوصف */}
                <p className="text-gray-700 leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* صور قبل وبعد */}
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">قبل</h4>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.beforeImage}
                        alt="قبل"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">بعد</h4>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={selectedProject.afterImage}
                        alt="بعد"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>

                {/* المميزات */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">مميزات المشروع:</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.features.map((feature: string, index: number) => (
                      <span
                        key={index}
                        className="bg-primary/10 text-primary px-4 py-2 rounded-lg text-sm font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* أزرار العمل */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="btn-primary text-center"
                    onClick={() => setSelectedProject(null)}
                  >
                    مشروع مماثل
                  </a>
                  <a
                    href="tel:+966571935447"
                    className="btn-outline text-center"
                  >
                    استشارة مجانية
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* إحصائيات */}
        <div className="mt-20 bg-gradient-to-r from-primary to-gold rounded-2xl p-8 text-white text-center">
          <h3 className="text-3xl font-bold mb-6">إنجازاتنا بالأرقام</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-lg opacity-90">مشروع مكتمل</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">300+</div>
              <div className="text-lg opacity-90">عميل راضي</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-lg opacity-90">سنة خبرة</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <div className="text-lg opacity-90">ضمان الجودة</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
