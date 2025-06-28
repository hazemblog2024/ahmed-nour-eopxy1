import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatingButtons from '@/components/FloatingButtons';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import AboutSection from '@/components/AboutSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import CostCalculator from '@/components/CostCalculator';
import AppointmentBooking from '@/components/AppointmentBooking';
import ReviewsSection from '@/components/ReviewsSection';
import PWAManager from '@/components/PWAManager';
import SecurityHeaders from '@/components/SecurityHeaders';
import { ServiceNavigation, AreaNavigation } from '@/components/InternalLink';
import { MobileCallButtons } from '@/components/MobileOptimized';
import ReviewsWidget from '@/components/ReviewsWidget';
// import { LocalBusinessInfo, InteractiveMap, ServiceAreas, GoogleMyBusinessWidget } from '@/components/LocalSEO';
import NoSSR from '@/components/NoSSR';
import HydrationSafe from '@/components/HydrationSafe';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />

        {/* قسم التنقل بين الخدمات */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <ServiceNavigation />
          </div>
        </section>

        <HydrationSafe>
          <CostCalculator />
        </HydrationSafe>
        <HydrationSafe>
          <AppointmentBooking />
        </HydrationSafe>
        <HydrationSafe>
          <ReviewsSection />
        </HydrationSafe>
        <TestimonialsSection />

        {/* قسم مراجعات العملاء */}
        <ReviewsWidget />

        {/* قسم معلومات الأعمال المحلية */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            {/* <div className="grid lg:grid-cols-2 gap-8 mb-12">
              <LocalBusinessInfo />
              <GoogleMyBusinessWidget />
            </div>
            <div className="grid lg:grid-cols-2 gap-8">
              <InteractiveMap />
              <ServiceAreas />
            </div> */}
          </div>
        </section>

        {/* قسم التنقل بين المناطق */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AreaNavigation />
          </div>
        </section>

        <ContactSection />
      </main>
      <Footer />
      <NoSSR>
        <FloatingButtons />
        <MobileCallButtons />
      </NoSSR>

      <NoSSR>
        <PWAManager />
      </NoSSR>
      <NoSSR>
        <SecurityHeaders />
      </NoSSR>
    </div>
  );
}
