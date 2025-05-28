import Link from 'next/link';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = [
    'أرضيات الإيبوكسي',
    'العزل المائي',
    'صيانة التكييف',
    'أعمال السباكة',
    'كشف تسربات المياه',
    'أعمال الهدم والتكسير',
    'عزل الأسطح والخزانات',
    'الاستشارات الهندسية',
  ];

  const quickLinks = [
    { name: 'الرئيسية', href: '/' },
    { name: 'من نحن', href: '/about' },
    { name: 'خدماتنا', href: '/services' },
    { name: 'معرض الأعمال', href: '/portfolio' },
    { name: 'المدونة', href: '/blog' },
    { name: 'تواصل معنا', href: '/contact' },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* القسم الرئيسي */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* معلومات الشركة */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-gold rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">أن</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">أحمد نور للإيبوكسي</h3>
                  <p className="text-gray-400 text-sm">العزل والأرضيات الإيبوكسية</p>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                شركة متخصصة في خدمات العزل وتطبيق الأرضيات الإيبوكسية ثلاثية الأبعاد في جدة،
                نقدم حلول عزل احترافية للأسطح والمسابح والخزانات مع ضمان الجودة والمتانة.
              </p>
            </div>

            {/* تواصل سريع */}
            <div>
              <h4 className="font-semibold mb-3">تواصل سريع</h4>
              <div className="space-y-3">
                <a
                  href="tel:+966571935447"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <span>اتصل الآن</span>
                </a>
                <a
                  href="https://wa.me/966571935447"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                >
                  <span className="w-5 h-5 text-center">💬</span>
                  <span>واتساب</span>
                </a>
                <a
                  href="mailto:info@ahmed-nour-epoxy.com"
                  className="flex items-center gap-3 text-gray-300 hover:text-gold transition-colors"
                >
                  <Mail className="w-5 h-5" />
                  <span>إيميل</span>
                </a>
              </div>
            </div>
          </div>

          {/* خدماتنا */}
          <div>
            <h3 className="text-xl font-bold mb-6">خدماتنا</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* روابط سريعة */}
          <div>
            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-gold transition-colors duration-300 flex items-center gap-2"
                  >
                    <span className="w-2 h-2 bg-gold rounded-full"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* معلومات التواصل */}
          <div>
            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">جدة، المملكة العربية السعودية</p>
                  <p className="text-gray-400 text-sm">حي النزهة، شارع الأمير سلطان</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+966571935447" className="text-gray-300 hover:text-gold transition-colors">
                  +966 57 193 5447
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:info@ahmed-nour-epoxy.com" className="text-gray-300 hover:text-gold transition-colors">
                  info@ahmed-nour-epoxy.com
                </a>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-gold mt-1" />
                <div>
                  <p className="text-gray-300">ساعات العمل</p>
                  <p className="text-gray-400 text-sm">السبت - الخميس: 8:00 ص - 6:00 م</p>
                  <p className="text-gray-400 text-sm">الجمعة: 2:00 م - 6:00 م</p>
                  <p className="text-gray-400 text-sm">خدمة طوارئ 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* الشريط السفلي */}
      <div className="border-t border-gray-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm mb-1">
                © {currentYear} شركة أحمد نور للإيبوكسي - جميع الحقوق محفوظة - جدة، السعودية
              </p>
              <p className="text-gray-500 text-xs mb-1">
                خدمة احترافية • ضمان شامل • خبرة +15 سنة
              </p>
              <p className="text-gray-500 text-xs">
                تطوير: <a href="https://wa.me/201151580130" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-400 transition-colors">المهندس حازم الهواري</a>
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-gold transition-colors">
                سياسة الخصوصية
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-gold transition-colors">
                الشروط والأحكام
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
