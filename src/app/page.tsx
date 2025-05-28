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
        <ContactSection />
      </main>
      <Footer />
      <NoSSR>
        <FloatingButtons />
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
