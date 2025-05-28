import type { Metadata } from "next";
import "./globals.css";
import "../styles/themes.css";
import GoogleAnalytics from '@/components/GoogleAnalytics';
import StructuredData from '@/components/StructuredData';
import ClientScripts from '@/components/ClientScripts';
import SEOOptimizer from '@/components/SEOOptimizer';
import { ThemeProvider } from '@/contexts/ThemeContext';

export const metadata: Metadata = {
  title: "شركة أحمد نور للإيبوكسي جدة | أفضل مقاول عزل أسطح ومسابح معتمد 2025",
  description: "🏆 شركة أحمد نور للإيبوكسي الرائدة في جدة - خبرة +15 سنة في عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد، إنشاء المسابح، صيانة المكيفات. ⭐ ضمان 10 سنوات - خدمة 24/7 - أسعار منافسة - مقاول معتمد ومرخص في جدة 📞 +966571935447",
  keywords: [
    "شركة أحمد نور للإيبوكسي جدة",
    "أفضل شركة عزل أسطح جدة",
    "مقاول عزل معتمد جدة",
    "عزل أسطح جدة",
    "عزل مسابح جدة",
    "عزل خزانات المياه جدة",
    "أرضيات إيبوكسي ثلاثية الأبعاد جدة",
    "إنشاء مسابح جدة",
    "صيانة مكيفات جدة",
    "كشف تسريبات المياه جدة",
    "أعمال السباكة جدة",
    "هدم وترميم جدة",
    "عزل مائي وحراري جدة",
    "شركة عزل موثوقة جدة",
    "عزل أسطح بالضمان جدة",
    "شركة عزل مسابح جدة",
    "مقاول إيبوكسي جدة",
    "عزل خزانات جدة",
    "شركة عزل رخيصة جدة",
    "أسعار العزل في جدة",
    "عزل أسطح فلل جدة",
    "عزل أسطح عمائر جدة",
    "شركة عزل حراري جدة",
    "شركة عزل مائي جدة",
    "أفضل مقاول عزل في جدة 2025"
  ],
  authors: [{ name: "أحمد نور للإيبوكسي" }],
  creator: "أحمد نور للإيبوكسي",
  publisher: "أحمد نور للإيبوكسي",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://ahmed-nour-eopxy1.vercel.app'),
  alternates: {
    canonical: '/',
    languages: {
      'ar-SA': '/',
    },
  },
  category: 'business',
  classification: 'شركة عزل وإيبوكسي',
  other: {
    'business:contact_data:street_address': 'جدة، المملكة العربية السعودية',
    'business:contact_data:locality': 'جدة',
    'business:contact_data:region': 'منطقة مكة المكرمة',
    'business:contact_data:postal_code': '21589',
    'business:contact_data:country_name': 'المملكة العربية السعودية',
    'business:contact_data:phone_number': '+966571935447',
    'business:contact_data:website': 'https://ahmed-nour-eopxy1.vercel.app',
  },
  openGraph: {
    title: "🏆 أحمد نور للإيبوكسي - أفضل مقاول عزل أسطح ومسابح معتمد في جدة 2025",
    description: "⭐ شركة أحمد نور للإيبوكسي الرائدة في جدة - خبرة +15 سنة في عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد. ضمان 10 سنوات - خدمة 24/7 - أسعار منافسة 📞 +966571935447",
    url: 'https://ahmed-nour-eopxy1.vercel.app',
    siteName: 'شركة أحمد نور للإيبوكسي',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'شركة أحمد نور للإيبوكسي - أفضل مقاول عزل أسطح ومسابح معتمد في جدة',
      },
    ],
    locale: 'ar_SA',
    type: 'website',
    countryName: 'Saudi Arabia',
    emails: ['info@ahmed-nour-epoxy.com'],
    phoneNumbers: ['+966571935447'],
  },
  twitter: {
    card: 'summary_large_image',
    title: "🏆 أحمد نور للإيبوكسي - أفضل مقاول عزل أسطح ومسابح معتمد في جدة 2025",
    description: "⭐ شركة أحمد نور للإيبوكسي الرائدة في جدة - خبرة +15 سنة في عزل الأسطح والمسابح والخزانات، أرضيات إيبوكسي ثلاثية الأبعاد. ضمان 10 سنوات - خدمة 24/7 📞 +966571935447",
    images: ['/og-image.jpg'],
    creator: '@ahmed_nour_epoxy',
    site: '@ahmed_nour_epoxy',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'FBiMz6zQj-MuAD1n-R4anDiArI6BfrnvwqoN95fSc6s',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, minimum-scale=1, user-scalable=yes, viewport-fit=cover" />
        <meta name="theme-color" content="#0033a0" />
        <meta name="google-site-verification" content="FBiMz6zQj-MuAD1n-R4anDiArI6BfrnvwqoN95fSc6s" />

        {/* SEO Meta Tags المتقدمة */}
        <meta name="geo.region" content="SA-02" />
        <meta name="geo.placename" content="جدة" />
        <meta name="geo.position" content="21.3891;39.8579" />
        <meta name="ICBM" content="21.3891, 39.8579" />
        <meta name="language" content="ar" />
        <meta name="distribution" content="global" />
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="1 days" />
        <meta name="expires" content="never" />
        <meta name="pragma" content="no-cache" />
        <meta name="cache-control" content="no-cache" />

        {/* Business Schema */}
        <meta property="business:contact_data:street_address" content="جدة، المملكة العربية السعودية" />
        <meta property="business:contact_data:locality" content="جدة" />
        <meta property="business:contact_data:region" content="منطقة مكة المكرمة" />
        <meta property="business:contact_data:postal_code" content="21589" />
        <meta property="business:contact_data:country_name" content="المملكة العربية السعودية" />
        <meta property="business:contact_data:phone_number" content="+966571935447" />
        <meta property="business:contact_data:website" content="https://ahmed-nour-eopxy1.vercel.app" />

        {/* Additional SEO */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="أحمد نور للإيبوكسي" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preload" href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" as="style" />
        <link href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <style dangerouslySetInnerHTML={{
          __html: `
            * { font-family: 'Cairo', sans-serif !important; }
            html, body { font-family: 'Cairo', sans-serif !important; }
          `
        }} />

        <StructuredData />
      </head>
      <body className="font-arabic antialiased font-cairo">
        <ThemeProvider>
          <GoogleAnalytics />
          <SEOOptimizer />
          <ClientScripts />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
