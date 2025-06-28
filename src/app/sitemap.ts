import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.3azlepoxy.com';

  // الصفحات الرئيسية
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ];

  // مقالات المدونة
  const blogPosts = [
    'roof-insulation-guide-saudi-arabia',
    'epoxy-3d-flooring-complete-guide',
    'pool-leak-detection-repair',
    'tank-insulation-common-mistakes',
    'insulation-materials-comparison',
    'epoxy-flooring-maintenance-guide',
    'best-roof-insulation-materials-hot-climate-jeddah',
    'roof-insulation-cost-jeddah-2025',
    'epoxy-vs-ceramic-flooring-comparison',
    'signs-roof-needs-insulation-immediately',
    'difference-water-thermal-insulation',
    'latest-3d-epoxy-designs-2025'
  ];

  const blogRoutes = blogPosts.map((slug) => ({
    url: `${baseUrl}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  // صفحات الخدمات التفصيلية
  const services = [
    'roof-insulation',
    'pool-insulation',
    'tank-insulation',
    'pool-construction',
    'epoxy-flooring',
    'ac-maintenance',
    'demolition-renovation',
    'plumbing-services',
    'water-leak-detection',
    'roof-insulation-jeddah',
    'pool-insulation-jeddah',
    'tank-insulation-jeddah',
    '3d-epoxy-flooring-jeddah'
  ];

  // صفحات المناطق الجغرافية
  const areas = [
    'north-jeddah',
    'south-jeddah',
    'east-jeddah',
    'west-jeddah'
  ];

  const areaRoutes = areas.map((area) => ({
    url: `${baseUrl}/areas/${area}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // صفحات إضافية
  const additionalPages = [
    { path: 'faq', priority: 0.7 },
    { path: 'faq/roof-insulation', priority: 0.7 },
    { path: 'comparison', priority: 0.8 },
    { path: 'pricing', priority: 0.8 },
    { path: 'reviews', priority: 0.8 }
  ];

  const additionalRoutes = additionalPages.map((page) => ({
    url: `${baseUrl}/${page.path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: page.priority,
  }));

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/services/${service}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }));

  return [...routes, ...blogRoutes, ...serviceRoutes, ...areaRoutes, ...additionalRoutes];
}
