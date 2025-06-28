// نظام إدارة الروابط الداخلية الذكي

export interface LinkData {
  href: string;
  title: string;
  description?: string;
  category: 'service' | 'area' | 'blog' | 'page' | 'faq';
  keywords: string[];
  priority: 'high' | 'medium' | 'low';
  relatedTo?: string[];
}

// قاعدة بيانات الروابط الداخلية
export const internalLinks: LinkData[] = [
  // الصفحات الرئيسية
  {
    href: '/',
    title: 'الصفحة الرئيسية',
    description: 'شركة أحمد نور للإيبوكسي - أفضل شركة عزل في جدة',
    category: 'page',
    keywords: ['شركة عزل جدة', 'أحمد نور للإيبوكسي', 'عزل أسطح'],
    priority: 'high',
    relatedTo: ['services', 'areas', 'about']
  },
  {
    href: '/about',
    title: 'من نحن',
    description: 'تعرف على شركة أحمد نور للإيبوكسي وخبرتنا في العزل',
    category: 'page',
    keywords: ['من نحن', 'خبرة الشركة', 'فريق العمل'],
    priority: 'medium',
    relatedTo: ['services', 'contact']
  },
  {
    href: '/contact',
    title: 'اتصل بنا',
    description: 'تواصل مع شركة أحمد نور للإيبوكسي للحصول على عرض سعر مجاني',
    category: 'page',
    keywords: ['اتصل بنا', 'عرض سعر', 'تواصل'],
    priority: 'high',
    relatedTo: ['services', 'areas']
  },

  // صفحات الخدمات
  {
    href: '/services/roof-insulation-jeddah',
    title: 'عزل الأسطح في جدة',
    description: 'أفضل شركة عزل أسطح في جدة - ضمان 10 سنوات',
    category: 'service',
    keywords: ['عزل أسطح جدة', 'عزل مائي', 'عزل حراري', 'ضمان العزل'],
    priority: 'high',
    relatedTo: ['pool-insulation', 'tank-insulation', 'north-jeddah', 'south-jeddah']
  },
  {
    href: '/services/pool-insulation-jeddah',
    title: 'عزل المسابح في جدة',
    description: 'عزل احترافي للمسابح في جدة - ضمان 15 سنة',
    category: 'service',
    keywords: ['عزل مسابح جدة', 'تسرب المسابح', 'إصلاح المسابح'],
    priority: 'high',
    relatedTo: ['roof-insulation', 'tank-insulation', 'north-jeddah', 'south-jeddah']
  },
  {
    href: '/services/tank-insulation-jeddah',
    title: 'عزل خزانات المياه في جدة',
    description: 'عزل خزانات المياه بمواد آمنة صحياً - ضمان 12 سنة',
    category: 'service',
    keywords: ['عزل خزانات جدة', 'خزانات المياه', 'مواد آمنة'],
    priority: 'high',
    relatedTo: ['roof-insulation', 'pool-insulation', 'north-jeddah', 'south-jeddah']
  },
  {
    href: '/services/3d-epoxy-flooring-jeddah',
    title: 'أرضيات الإيبوكسي ثلاثية الأبعاد',
    description: 'أرضيات إيبوكسي ثلاثية الأبعاد مذهلة في جدة',
    category: 'service',
    keywords: ['أرضيات إيبوكسي جدة', 'إيبوكسي ثلاثي الأبعاد', 'أرضيات ثلاثية'],
    priority: 'high',
    relatedTo: ['roof-insulation', 'north-jeddah', 'south-jeddah']
  },

  // صفحات المناطق
  {
    href: '/areas/north-jeddah',
    title: 'خدمات العزل في شمال جدة',
    description: 'خدمات العزل والإيبوكسي في شمال جدة - النزهة، الصفا، الروضة',
    category: 'area',
    keywords: ['شمال جدة', 'النزهة', 'الصفا', 'الروضة', 'عزل شمال جدة'],
    priority: 'high',
    relatedTo: ['roof-insulation', 'pool-insulation', 'south-jeddah']
  },
  {
    href: '/areas/south-jeddah',
    title: 'خدمات العزل في جنوب جدة',
    description: 'خدمات العزل والإيبوكسي في جنوب جدة - العزيزية، المرجان، الحمراء',
    category: 'area',
    keywords: ['جنوب جدة', 'العزيزية', 'المرجان', 'الحمراء', 'عزل جنوب جدة'],
    priority: 'high',
    relatedTo: ['roof-insulation', 'pool-insulation', 'north-jeddah']
  },

  // صفحات FAQ
  {
    href: '/faq',
    title: 'الأسئلة الشائعة',
    description: 'أجوبة شاملة على جميع الأسئلة حول خدمات العزل والإيبوكسي',
    category: 'faq',
    keywords: ['أسئلة شائعة', 'أسئلة العزل', 'أسئلة الإيبوكسي'],
    priority: 'medium',
    relatedTo: ['services', 'roof-insulation-faq']
  },
  {
    href: '/faq/roof-insulation',
    title: 'أسئلة شائعة عن عزل الأسطح',
    description: 'أجوبة مفصلة على جميع الأسئلة حول عزل الأسطح في جدة',
    category: 'faq',
    keywords: ['أسئلة عزل الأسطح', 'أسعار العزل', 'مدة العزل'],
    priority: 'medium',
    relatedTo: ['roof-insulation', 'faq']
  },

  // مقالات المدونة
  {
    href: '/blog/best-roof-insulation-materials-hot-climate-jeddah',
    title: 'أفضل مواد عزل الأسطح في المناخ الحار بجدة',
    description: 'دليل شامل لاختيار أفضل مواد العزل المناسبة للمناخ الحار',
    category: 'blog',
    keywords: ['مواد العزل', 'المناخ الحار', 'جدة', 'مقارنة'],
    priority: 'medium',
    relatedTo: ['roof-insulation', 'materials']
  },
  {
    href: '/blog/roof-insulation-cost-jeddah-2025',
    title: 'كم تكلفة عزل السطح في جدة 2025؟',
    description: 'دليل شامل لأسعار عزل الأسطح في جدة مع تفاصيل التكلفة',
    category: 'blog',
    keywords: ['أسعار العزل', 'تكلفة', 'جدة', '2025'],
    priority: 'medium',
    relatedTo: ['roof-insulation', 'pricing']
  }
];

// دالة للحصول على الروابط ذات الصلة
export function getRelatedLinks(currentPath: string, limit: number = 4): LinkData[] {
  const currentLink = internalLinks.find(link => link.href === currentPath);
  if (!currentLink) return [];

  // البحث عن الروابط ذات الصلة
  const relatedLinks = internalLinks.filter(link => {
    if (link.href === currentPath) return false;
    
    // التحقق من الروابط المحددة مسبقاً
    if (currentLink.relatedTo?.some(related => link.href.includes(related))) {
      return true;
    }

    // التحقق من الكلمات المفتاحية المشتركة
    const commonKeywords = link.keywords.filter(keyword => 
      currentLink.keywords.some(currentKeyword => 
        currentKeyword.includes(keyword) || keyword.includes(currentKeyword)
      )
    );

    return commonKeywords.length > 0;
  });

  // ترتيب حسب الأولوية والصلة
  return relatedLinks
    .sort((a, b) => {
      const priorityOrder = { high: 3, medium: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    })
    .slice(0, limit);
}

// دالة للحصول على روابط الخدمات
export function getServiceLinks(): LinkData[] {
  return internalLinks.filter(link => link.category === 'service');
}

// دالة للحصول على روابط المناطق
export function getAreaLinks(): LinkData[] {
  return internalLinks.filter(link => link.category === 'area');
}

// دالة للحصول على روابط المدونة
export function getBlogLinks(): LinkData[] {
  return internalLinks.filter(link => link.category === 'blog');
}

// دالة لإنشاء anchor text محسن
export function generateAnchorText(link: LinkData, context: 'service' | 'area' | 'general' = 'general'): string {
  const baseTitle = link.title;
  
  switch (context) {
    case 'service':
      return `خدمة ${baseTitle}`;
    case 'area':
      return `خدماتنا في ${baseTitle}`;
    default:
      return baseTitle;
  }
}

// دالة للحصول على الروابط الداخلية للصفحة الرئيسية
export function getHomePageLinks(): LinkData[] {
  return internalLinks.filter(link => 
    link.priority === 'high' && 
    ['service', 'area'].includes(link.category)
  );
}

// دالة للحصول على breadcrumbs
export function getBreadcrumbs(currentPath: string): Array<{href?: string; title: string}> {
  const pathSegments = currentPath.split('/').filter(Boolean);
  const breadcrumbs = [{ href: '/', title: 'الرئيسية' }];

  let currentHref = '';
  for (const segment of pathSegments) {
    currentHref += `/${segment}`;
    const link = internalLinks.find(l => l.href === currentHref);
    
    if (link) {
      breadcrumbs.push({
        href: currentHref === currentPath ? undefined : currentHref,
        title: link.title
      });
    } else {
      // إنشاء عنوان تلقائي للمسارات غير المعرفة
      const title = segment.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      breadcrumbs.push({
        href: currentHref === currentPath ? undefined : currentHref,
        title
      });
    }
  }

  return breadcrumbs;
}

// دالة لتحليل الروابط الداخلية وتحسينها
export function analyzeInternalLinks() {
  const analysis = {
    totalLinks: internalLinks.length,
    byCategory: {} as Record<string, number>,
    byPriority: {} as Record<string, number>,
    orphanedLinks: [] as LinkData[],
    wellConnectedLinks: [] as LinkData[]
  };

  // تحليل حسب الفئة
  internalLinks.forEach(link => {
    analysis.byCategory[link.category] = (analysis.byCategory[link.category] || 0) + 1;
    analysis.byPriority[link.priority] = (analysis.byPriority[link.priority] || 0) + 1;
  });

  // البحث عن الروابط المعزولة والمترابطة
  internalLinks.forEach(link => {
    const relatedCount = getRelatedLinks(link.href).length;
    if (relatedCount === 0) {
      analysis.orphanedLinks.push(link);
    } else if (relatedCount >= 3) {
      analysis.wellConnectedLinks.push(link);
    }
  });

  return analysis;
}
