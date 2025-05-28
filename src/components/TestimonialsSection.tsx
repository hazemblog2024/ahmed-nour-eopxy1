'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: 'محمد العتيبي',
      position: 'مالك فيلا',
      location: 'جدة - حي النزهة',
      image: 'https://drive.google.com/uc?export=view&id=1t98Alo9DEdXpr04csaMjFpDTe8kyvQvR',
      rating: 5,
      text: 'خدمة ممتازة وجودة عالية في عزل السطح. الفريق محترف ومنجز العمل في الوقت المحدد. أنصح بشدة بالتعامل مع شركة أحمد نور للإيبوكسي.',
      project: 'عزل سطح فيلا'
    },
    {
      id: 2,
      name: 'فاطمة الزهراني',
      position: 'مديرة مشروع',
      location: 'جدة - حي الروضة',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'تم تطبيق أرضيات إيبوكسي ثلاثية الأبعاد في مكتبنا والنتيجة مذهلة! التصميم رائع والجودة عالية جداً. شكراً لفريق العمل المتميز.',
      project: 'أرضيات إيبوكسي ثلاثية الأبعاد'
    },
    {
      id: 3,
      name: 'أحمد السعدي',
      position: 'مقاول',
      location: 'جدة - حي الصفا',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'أفضل شركة عزل تعاملت معها. عزل المسبح تم بطريقة احترافية ولم نواجه أي مشاكل تسرب منذ سنتين. الضمان والمتابعة ممتازة.',
      project: 'عزل مسبح'
    },
    {
      id: 4,
      name: 'سارة القحطاني',
      position: 'ربة منزل',
      location: 'جدة - حي الحمراء',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'عزل خزان المياه تم بشكل مثالي. الفريق نظيف ومرتب والأسعار معقولة. النتيجة فاقت توقعاتي والخدمة بعد البيع ممتازة.',
      project: 'عزل خزان مياه'
    },
    {
      id: 5,
      name: 'خالد الغامدي',
      position: 'صاحب مطعم',
      location: 'جدة - حي البلد',
      image: 'https://drive.google.com/uc?export=view&id=1dI2tFAqXPRphDwPEvQGRac7ED1sWSVzS',
      rating: 5,
      text: 'تطبيق أرضيات إيبوكسي في المطعم كان قرار صائب. سهولة التنظيف والمظهر الجميل جعل المكان أكثر جاذبية للعملاء. شكراً لكم.',
      project: 'أرضيات إيبوكسي للمطعم'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-5 h-5 ${
          index < rating ? 'text-gold fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            آراء <span className="gradient-text">عملائنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نفخر بثقة عملائنا وآرائهم الإيجابية في خدماتنا المتميزة
          </p>
        </div>

        {/* الشهادات الرئيسية */}
        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* أيقونة الاقتباس */}
            <div className="absolute top-6 right-6 w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Quote className="w-8 h-8 text-primary" />
            </div>

            {/* محتوى الشهادة */}
            <div className="text-center">
              <div className="mb-6">
                <Image
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  width={80}
                  height={80}
                  className="rounded-full mx-auto mb-4"
                />
                <div className="flex justify-center mb-4">
                  {renderStars(testimonials[currentTestimonial].rating)}
                </div>
              </div>

              <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 italic">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div className="border-t pt-6">
                <h4 className="text-xl font-bold text-gray-900 mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="text-gray-600 mb-1">
                  {testimonials[currentTestimonial].position}
                </p>
                <p className="text-sm text-gray-500 mb-2">
                  {testimonials[currentTestimonial].location}
                </p>
                <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                  {testimonials[currentTestimonial].project}
                </div>
              </div>
            </div>

            {/* أزرار التنقل */}
            <button
              onClick={prevTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="الشهادة السابقة"
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors"
              aria-label="الشهادة التالية"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </button>
          </div>

          {/* مؤشرات الشهادات */}
          <div className="flex justify-center mt-8 gap-3">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-primary scale-125'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`الانتقال للشهادة ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* شهادات إضافية */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <div>
                  <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>

              <div className="flex mb-3">
                {renderStars(testimonial.rating)}
              </div>

              <p className="text-gray-700 text-sm leading-relaxed mb-3">
                {testimonial.text.length > 120
                  ? `${testimonial.text.substring(0, 120)}...`
                  : testimonial.text
                }
              </p>

              <div className="text-xs text-primary font-medium">
                {testimonial.project}
              </div>
            </div>
          ))}
        </div>

        {/* دعوة للعمل */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            انضم إلى عملائنا الراضين
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            احصل على خدمة متميزة وجودة عالية تضمن رضاك التام
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/contact" className="btn-primary">
              احصل على عرض سعر
            </a>
            <a href="tel:+966571935447" className="btn-outline">
              اتصل الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
