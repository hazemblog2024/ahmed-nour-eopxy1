'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const services = [
    'عزل الأسطح',
    'عزل المسابح',
    'عزل خزانات المياه',
    'إنشاء المسابح',
    'أرضيات إيبوكسي ثلاثية الأبعاد',
    'استشارة مجانية',
    'أخرى'
  ];

  const contactInfo = [
    {
      icon: Phone,
      title: 'اتصل بنا',
      details: ['+966 57 193 5447'],
      action: 'tel:+966571935447'
    },
    {
      icon: Mail,
      title: 'البريد الإلكتروني',
      details: ['info@ahmed-nour-epoxy.com'],
      action: 'mailto:info@ahmed-nour-epoxy.com'
    },
    {
      icon: MapPin,
      title: 'العنوان',
      details: ['جدة، المملكة العربية السعودية'],
      action: '#'
    },
    {
      icon: Clock,
      title: 'ساعات العمل',
      details: ['السبت - الخميس: 8:00 ص - 8:00 م', 'الجمعة: 2:00 م - 8:00 م'],
      action: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // إعادة تعيين النموذج بعد 3 ثوان
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        message: ''
      });
    }, 3000);
  };

  const isFormValid = formData.name && formData.phone && formData.message;

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container-custom">
        {/* العنوان الرئيسي */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            تواصل <span className="gradient-text">معنا</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            نحن هنا لمساعدتك في جميع احتياجاتك من العزل والأرضيات الإيبوكسية
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* معلومات التواصل */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              معلومات التواصل
            </h3>

            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{info.title}</h4>
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600 mb-1">
                        {info.action.startsWith('tel:') || info.action.startsWith('mailto:') ? (
                          <a href={info.action} className="hover:text-primary transition-colors">
                            {detail}
                          </a>
                        ) : (
                          detail
                        )}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>



            {/* أزرار التواصل السريع */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <a
                href="tel:+966571935447"
                className="btn-primary text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                اتصل الآن
              </a>
              <a
                href="https://wa.me/966571935447"
                className="btn-secondary text-center flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                واتساب
              </a>
            </div>
          </div>

          {/* نموذج التواصل */}
          <div>
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                احصل على عرض سعر مجاني
              </h3>

              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    تم إرسال رسالتك بنجاح!
                  </h4>
                  <p className="text-gray-600">
                    سنتواصل معك في أقرب وقت ممكن
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* الاسم */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      الاسم الكامل *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="أدخل اسمك الكامل"
                    />
                  </div>

                  {/* رقم الهاتف */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      رقم الهاتف *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="05xxxxxxxx"
                    />
                  </div>

                  {/* البريد الإلكتروني */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                      placeholder="example@email.com"
                    />
                  </div>

                  {/* نوع الخدمة */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      نوع الخدمة المطلوبة
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors"
                    >
                      <option value="">اختر نوع الخدمة</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* الرسالة */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      تفاصيل المشروع *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors resize-none"
                      placeholder="اكتب تفاصيل مشروعك هنا..."
                    />
                  </div>

                  {/* زر الإرسال */}
                  <button
                    type="submit"
                    disabled={!isFormValid || isSubmitting}
                    className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                      isFormValid && !isSubmitting
                        ? 'bg-primary hover:bg-primary-600 text-white transform hover:scale-105'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        جاري الإرسال...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        إرسال الطلب
                      </>
                    )}
                  </button>

                  <p className="text-sm text-gray-500 text-center">
                    * الحقول المطلوبة
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
