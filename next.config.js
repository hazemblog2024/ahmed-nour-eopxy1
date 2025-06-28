/** @type {import('next').NextConfig} */
const nextConfig = {
  // منع مشاكل Hydration
  reactStrictMode: false,

  // ضغط الصور وتحسين الأداء
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // سنة واحدة
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'drive.google.com',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
      },
      {
        protocol: 'https',
        hostname: 'postimg.cc',
      },
    ],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },



  // تحسين الأداء
  compress: true,

  // تحسين الإنتاج (معطل للنشر على Vercel)
  // output: 'export',

  // تحسينات تجريبية للأداء (معطل مؤقتاً)
  // experimental: {
  //   optimizeCss: true,
  //   optimizePackageImports: ['lucide-react', 'framer-motion'],
  //   webVitalsAttribution: ['CLS', 'LCP'],
  // },

  // تحسين الكومبايلر
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  // تحسين الـ trailing slash
  trailingSlash: false,

  // تحسين الـ powered by header
  poweredByHeader: false,

  // تحسين الـ headers للكاش (معطل مؤقتاً للتطوير المحلي)
  // async headers() {
  //   return [
  //     {
  //       source: '/(.*)',
  //       headers: [
  //         {
  //           key: 'X-Content-Type-Options',
  //           value: 'nosniff',
  //         },
  //         {
  //           key: 'X-Frame-Options',
  //           value: 'DENY',
  //         },
  //         {
  //           key: 'X-XSS-Protection',
  //           value: '1; mode=block',
  //         },
  //         {
  //           key: 'Referrer-Policy',
  //           value: 'origin-when-cross-origin',
  //         },
  //         {
  //           key: 'Permissions-Policy',
  //           value: 'camera=(), microphone=(), geolocation=()',
  //         },
  //         {
  //           key: 'Strict-Transport-Security',
  //           value: 'max-age=31536000; includeSubDomains',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/images/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/static/(.*)',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=31536000, immutable',
  //         },
  //       ],
  //     },
  //     {
  //       source: '/sw.js',
  //       headers: [
  //         {
  //           key: 'Cache-Control',
  //           value: 'public, max-age=0, must-revalidate',
  //         },
  //       ],
  //     },
  //   ];
  // },

  // تعطيل ESLint أثناء البناء مؤقتاً
  eslint: {
    ignoreDuringBuilds: true,
  },

  // تعطيل TypeScript errors أثناء البناء مؤقتاً
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
