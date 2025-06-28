// أدوات تحسين الصور للـ SEO والأداء

export interface ImageOptimizationConfig {
  quality?: number;
  format?: 'webp' | 'jpeg' | 'png';
  width?: number;
  height?: number;
  blur?: boolean;
}

// إنشاء URL محسن للصورة
export function getOptimizedImageUrl(
  src: string, 
  config: ImageOptimizationConfig = {}
): string {
  const {
    quality = 85,
    format = 'webp',
    width,
    height,
    blur = false
  } = config;

  // إذا كانت الصورة خارجية، نعيدها كما هي
  if (src.startsWith('http')) {
    return src;
  }

  // بناء URL محسن
  const params = new URLSearchParams();
  
  if (quality !== 85) params.set('q', quality.toString());
  if (format !== 'webp') params.set('f', format);
  if (width) params.set('w', width.toString());
  if (height) params.set('h', height.toString());
  if (blur) params.set('blur', '10');

  const queryString = params.toString();
  return queryString ? `${src}?${queryString}` : src;
}

// إنشاء placeholder blur للصورة
export function generateBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  
  const ctx = canvas.getContext('2d');
  if (!ctx) return '';

  // إنشاء تدرج لوني بسيط
  const gradient = ctx.createLinearGradient(0, 0, width, height);
  gradient.addColorStop(0, '#f3f4f6');
  gradient.addColorStop(1, '#e5e7eb');
  
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
  
  return canvas.toDataURL();
}

// أحجام الصور المتجاوبة
export const responsiveSizes = {
  mobile: '(max-width: 640px) 100vw',
  tablet: '(max-width: 1024px) 50vw',
  desktop: '33vw',
  full: '100vw'
};

// إنشاء sizes string للصور المتجاوبة
export function getResponsiveSizes(type: keyof typeof responsiveSizes = 'mobile'): string {
  switch (type) {
    case 'mobile':
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
    case 'tablet':
      return '(max-width: 1024px) 100vw, 50vw';
    case 'desktop':
      return '(max-width: 1200px) 50vw, 33vw';
    case 'full':
      return '100vw';
    default:
      return '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw';
  }
}

// قائمة الصور المحسنة للموقع
export const optimizedImages = {
  // صور الخدمات
  services: {
    roofInsulation: {
      src: '/images/services/roof-insulation-jeddah.webp',
      alt: 'عزل الأسطح في جدة - شركة أحمد نور للإيبوكسي',
      width: 800,
      height: 600
    },
    poolInsulation: {
      src: '/images/services/pool-insulation-jeddah.webp',
      alt: 'عزل المسابح في جدة - شركة أحمد نور للإيبوكسي',
      width: 800,
      height: 600
    },
    epoxyFlooring: {
      src: '/images/services/3d-epoxy-flooring-jeddah.webp',
      alt: 'أرضيات إيبوكسي ثلاثية الأبعاد في جدة - شركة أحمد نور',
      width: 800,
      height: 600
    },
    tankInsulation: {
      src: '/images/services/tank-insulation-jeddah.webp',
      alt: 'عزل خزانات المياه في جدة - شركة أحمد نور للإيبوكسي',
      width: 800,
      height: 600
    }
  },
  
  // صور المناطق
  areas: {
    northJeddah: {
      src: '/images/areas/north-jeddah-services.webp',
      alt: 'خدمات العزل في شمال جدة - شركة أحمد نور للإيبوكسي',
      width: 1200,
      height: 800
    },
    southJeddah: {
      src: '/images/areas/south-jeddah-services.webp',
      alt: 'خدمات العزل في جنوب جدة - شركة أحمد نور للإيبوكسي',
      width: 1200,
      height: 800
    }
  },
  
  // صور المشاريع
  projects: {
    villa1: {
      src: '/images/projects/villa-roof-insulation-jeddah.webp',
      alt: 'مشروع عزل سطح فيلا في جدة - شركة أحمد نور للإيبوكسي',
      width: 800,
      height: 600
    },
    pool1: {
      src: '/images/projects/swimming-pool-insulation-jeddah.webp',
      alt: 'مشروع عزل مسبح في جدة - شركة أحمد نور للإيبوكسي',
      width: 800,
      height: 600
    },
    epoxy1: {
      src: '/images/projects/3d-epoxy-floor-jeddah.webp',
      alt: 'مشروع أرضية إيبوكسي ثلاثية الأبعاد في جدة',
      width: 800,
      height: 600
    }
  },
  
  // صور المدونة
  blog: {
    materials: {
      src: '/images/blog/insulation-materials-comparison.webp',
      alt: 'مقارنة مواد العزل - دليل شامل من شركة أحمد نور',
      width: 800,
      height: 450
    },
    costs: {
      src: '/images/blog/roof-insulation-cost-guide.webp',
      alt: 'دليل أسعار عزل الأسطح في جدة 2025',
      width: 800,
      height: 450
    },
    comparison: {
      src: '/images/blog/epoxy-vs-ceramic-comparison.webp',
      alt: 'مقارنة بين الإيبوكسي والسيراميك - أيهما أفضل؟',
      width: 800,
      height: 450
    }
  },
  
  // صور الشركة
  company: {
    logo: {
      src: '/images/company/ahmed-nour-epoxy-logo.webp',
      alt: 'شعار شركة أحمد نور للإيبوكسي - أفضل شركة عزل في جدة',
      width: 300,
      height: 100
    },
    team: {
      src: '/images/company/team-ahmed-nour-epoxy.webp',
      alt: 'فريق عمل شركة أحمد نور للإيبوكسي المتخصص',
      width: 800,
      height: 600
    },
    equipment: {
      src: '/images/company/professional-equipment.webp',
      alt: 'معدات احترافية لعزل الأسطح والمسابح',
      width: 800,
      height: 600
    }
  }
};

// دالة للحصول على معلومات الصورة المحسنة
export function getImageInfo(category: string, name: string) {
  const categoryImages = optimizedImages[category as keyof typeof optimizedImages];
  if (!categoryImages) return null;
  
  return categoryImages[name as keyof typeof categoryImages] || null;
}

// دالة لإنشاء alt text محسن للـ SEO
export function generateSEOAltText(
  baseText: string,
  location: string = 'جدة',
  company: string = 'شركة أحمد نور للإيبوكسي'
): string {
  return `${baseText} في ${location} - ${company}`;
}

// دالة لإنشاء title محسن للصور
export function generateSEOTitle(
  service: string,
  location: string = 'جدة',
  company: string = 'شركة أحمد نور للإيبوكسي'
): string {
  return `${service} | ${company} في ${location}`;
}

// إعدادات الضغط حسب نوع الصورة
export const compressionSettings = {
  hero: { quality: 90, format: 'webp' as const },
  service: { quality: 85, format: 'webp' as const },
  gallery: { quality: 80, format: 'webp' as const },
  thumbnail: { quality: 75, format: 'webp' as const },
  icon: { quality: 90, format: 'png' as const }
};

// دالة للحصول على إعدادات الضغط
export function getCompressionSettings(type: keyof typeof compressionSettings) {
  return compressionSettings[type] || compressionSettings.service;
}
