import Link from 'next/link';
import { ReactNode } from 'react';

interface InternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  title?: string;
  rel?: string;
  target?: string;
  priority?: 'high' | 'medium' | 'low';
  category?: 'service' | 'area' | 'blog' | 'page';
  keywords?: string[];
}

export default function InternalLink({
  href,
  children,
  className = '',
  title,
  rel,
  target,
  priority = 'medium',
  category = 'page',
  keywords = []
}: InternalLinkProps) {
  
  // إنشاء title محسن للـ SEO إذا لم يتم تمريره
  const optimizedTitle = title || `${children} - شركة أحمد نور للإيبوكسي`;
  
  // إضافة rel attributes حسب نوع الرابط
  const linkRel = rel || (target === '_blank' ? 'noopener noreferrer' : undefined);
  
  // إضافة data attributes للتتبع
  const dataAttributes = {
    'data-link-priority': priority,
    'data-link-category': category,
    'data-link-keywords': keywords.join(',')
  };

  return (
    <Link
      href={href}
      className={`hover:text-blue-600 transition-colors ${className}`}
      title={optimizedTitle}
      rel={linkRel}
      target={target}
      {...dataAttributes}
    >
      {children}
    </Link>
  );
}

// مكون للروابط عالية الأولوية (خدمات رئيسية)
export function PriorityLink(props: Omit<InternalLinkProps, 'priority'>) {
  return <InternalLink {...props} priority="high" />;
}

// مكون لروابط الخدمات
export function ServiceLink(props: Omit<InternalLinkProps, 'category'>) {
  return <InternalLink {...props} category="service" />;
}

// مكون لروابط المناطق
export function AreaLink(props: Omit<InternalLinkProps, 'category'>) {
  return <InternalLink {...props} category="area" />;
}

// مكون لروابط المدونة
export function BlogLink(props: Omit<InternalLinkProps, 'category'>) {
  return <InternalLink {...props} category="blog" />;
}

// مكون للروابط ذات الصلة
interface RelatedLinksProps {
  title?: string;
  links: Array<{
    href: string;
    title: string;
    description?: string;
    category?: 'service' | 'area' | 'blog' | 'page';
  }>;
  className?: string;
}

export function RelatedLinks({ 
  title = "صفحات ذات صلة", 
  links, 
  className = "" 
}: RelatedLinksProps) {
  return (
    <div className={`bg-gray-50 rounded-lg p-6 ${className}`}>
      <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
      <div className="grid gap-4">
        {links.map((link, index) => (
          <InternalLink
            key={index}
            href={link.href}
            category={link.category}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
          >
            <h4 className="font-semibold text-gray-900 mb-1">{link.title}</h4>
            {link.description && (
              <p className="text-sm text-gray-600">{link.description}</p>
            )}
          </InternalLink>
        ))}
      </div>
    </div>
  );
}

// مكون للتنقل بين الصفحات (Breadcrumbs)
interface BreadcrumbItem {
  href?: string;
  title: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className = "" }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.title,
      ...(item.href && { "item": `https://www.3azlepoxy.com${item.href}` })
    }))
  };

  return (
    <nav className={`py-4 ${className}`} aria-label="مسار التنقل">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema)
        }}
      />
      
      <ol className="flex items-center space-x-2 text-sm text-gray-600">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && (
              <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
              </svg>
            )}
            {item.href ? (
              <InternalLink
                href={item.href}
                className="hover:text-blue-600"
                title={`انتقل إلى ${item.title}`}
              >
                {item.title}
              </InternalLink>
            ) : (
              <span className="text-gray-900 font-medium">{item.title}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}

// مكون لقائمة الخدمات المترابطة
export function ServiceNavigation() {
  const services = [
    {
      href: '/services/roof-insulation-jeddah',
      title: 'عزل الأسطح',
      description: 'عزل مائي وحراري للأسطح',
      icon: '🏠'
    },
    {
      href: '/services/pool-insulation-jeddah',
      title: 'عزل المسابح',
      description: 'عزل احترافي للمسابح',
      icon: '🏊‍♂️'
    },
    {
      href: '/services/tank-insulation-jeddah',
      title: 'عزل الخزانات',
      description: 'عزل خزانات المياه',
      icon: '🚰'
    },
    {
      href: '/services/3d-epoxy-flooring-jeddah',
      title: 'أرضيات الإيبوكسي',
      description: 'أرضيات ثلاثية الأبعاد',
      icon: '✨'
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        خدماتنا المتخصصة
      </h3>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((service, index) => (
          <ServiceLink
            key={index}
            href={service.href}
            className="block p-4 text-center border rounded-lg hover:border-blue-500 hover:bg-blue-50 transition-all"
            title={`${service.title} في جدة - شركة أحمد نور للإيبوكسي`}
          >
            <div className="text-2xl mb-2">{service.icon}</div>
            <h4 className="font-semibold text-gray-900 mb-1">{service.title}</h4>
            <p className="text-xs text-gray-600">{service.description}</p>
          </ServiceLink>
        ))}
      </div>
    </div>
  );
}

// مكون لقائمة المناطق المترابطة
export function AreaNavigation() {
  const areas = [
    {
      href: '/areas/north-jeddah',
      title: 'شمال جدة',
      neighborhoods: ['النزهة', 'الصفا', 'الروضة']
    },
    {
      href: '/areas/south-jeddah',
      title: 'جنوب جدة',
      neighborhoods: ['العزيزية', 'المرجان', 'الحمراء']
    },
    {
      href: '/areas/east-jeddah',
      title: 'شرق جدة',
      neighborhoods: ['الفيصلية', 'المحمدية']
    },
    {
      href: '/areas/west-jeddah',
      title: 'غرب جدة',
      neighborhoods: ['الكورنيش', 'الشاطئ']
    }
  ];

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
        المناطق التي نخدمها في جدة
      </h3>
      <div className="grid md:grid-cols-2 gap-4">
        {areas.map((area, index) => (
          <AreaLink
            key={index}
            href={area.href}
            className="block p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
            title={`خدمات العزل في ${area.title} - شركة أحمد نور`}
          >
            <h4 className="font-semibold text-gray-900 mb-2">{area.title}</h4>
            <p className="text-sm text-gray-600">
              {area.neighborhoods.join(' • ')}
            </p>
          </AreaLink>
        ))}
      </div>
    </div>
  );
}
