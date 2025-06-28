'use client';

import Image from 'next/image';
import { CheckCircle, Target, Eye, Award, Users, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    'خبرة تزيد عن 15 سنة في مجال العزل',
    'فريق عمل مدرب ومعتمد',
    'استخدام أحدث التقنيات والمواد',
    'ضمان شامل على جميع الأعمال',
    'خدمة عملاء متميزة 24/7',
    'أسعار تنافسية وعروض مميزة'
  ];

  const values = [
    {
      icon: Target,
      title: 'رؤيتنا',
      description: 'أن نكون الشركة الرائدة في مجال العزل والأرضيات الإيبوكسية في المملكة العربية السعودية، ونقدم حلول مبتكرة تلبي احتياجات عملائنا وتتجاوز توقعاتهم.'
    },
    {
      icon: Eye,
      title: 'رسالتنا',
      description: 'نلتزم بتقديم خدمات عزل وأرضيات إيبوكسي عالية الجودة باستخدام أحدث التقنيات والمواد، مع ضمان رضا العملاء والحفاظ على البيئة.'
    },
    {
      icon: Award,
      title: 'قيمنا',
      description: 'الجودة، الأمانة، الالتزام، الابتكار، والتميز في الخدمة. نؤمن بأن النجاح يأتي من خلال بناء علاقات طويلة الأمد مع عملائنا.'
    }
  ];

  const stats = [
    { icon: Users, number: '500+', label: 'مشروع مكتمل' },
    { icon: Award, number: '15+', label: 'سنة خبرة' },
    { icon: CheckCircle, number: '300+', label: 'عميل راضي' },
    { icon: Clock, number: '24/7', label: 'دعم فني' }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            من <span className="gradient-text">نحن</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            شركة أحمد نور للإيبوكسي - رائدة في مجال العزل والأرضيات الإيبوكسية في جدة
          </p>
        </div>

        {/* القسم الرئيسي */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* النص */}
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              خبرة تتجاوز التوقعات منذ أكثر من 15 عامًا
            </h3>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              تأسست شركة أحمد نور للإيبوكسي بهدف تقديم حلول عزل متطورة وأرضيات إيبوكسي عالية الجودة
              في جدة والمناطق المحيطة. نحن نفخر بخبرتنا الطويلة وسمعتنا الممتازة في السوق السعودي.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              نستخدم أحدث التقنيات والمواد المستوردة من أفضل الشركات العالمية لضمان جودة عالية
              ومتانة طويلة الأمد. فريقنا المدرب والمعتمد يضمن تنفيذ المشاريع بأعلى معايير الجودة والأمان.
            </p>

            {/* المميزات */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+966571935447" className="btn-primary text-center">
                اتصل الآن
              </a>
              <a href="/portfolio" className="btn-outline text-center">
                اطلع على أعمالنا
              </a>
            </div>
          </div>

          {/* الصورة */}
          <div className="relative">
            <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://i.postimg.cc/J0MGJ11Q/roof-insulation-team-jeddah-jpg.jpg"
                alt="فريق عمل شركة أحمد نور للإيبوكسي - خبراء عزل الأسطح في جدة"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
            </div>

            {/* بطاقة الإحصائيات */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-xl shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">مشروع مكتمل</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold">15+</div>
                  <div className="text-sm text-gray-600">سنة خبرة</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* الرؤية والرسالة والقيم */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>

        {/* الإحصائيات */}
        <div className="bg-gradient-to-r from-primary to-gold rounded-2xl p-8 text-white">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold mb-4">إنجازاتنا بالأرقام</h3>
            <p className="text-lg opacity-90">نفخر بثقة عملائنا وإنجازاتنا المتميزة</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
