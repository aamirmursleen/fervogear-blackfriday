import PremiumCountdown from '@/components/PremiumCountdown';
import UltimateHero from '@/components/UltimateHero';
import Highlights from '@/components/Highlights';
import PDFDownloads from '@/components/PDFDownloads';
import FreeDesignCTA from '@/components/FreeDesignCTA';
import VideoTestimonials from '@/components/VideoTestimonials';
import MassiveCustomerGallery from '@/components/MassiveCustomerGallery';
import ValueStack from '@/components/ValueStack';
import PremiumBenefits from '@/components/PremiumBenefits';
import Process from '@/components/Process';
import PremiumSocialProof from '@/components/PremiumSocialProof';
import PremiumFinalCTA from '@/components/PremiumFinalCTA';
import PremiumFooter from '@/components/PremiumFooter';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Sticky countdown timer */}
      <PremiumCountdown />

      {/* ULTIMATE Hero section - Conversion focused */}
      <UltimateHero />

      {/* Highlights - Why Choose FervoGear */}
      <Highlights />

      {/* FREE Design CTA - Lead with low commitment */}
      <FreeDesignCTA />

      {/* PDF Downloads - Resources */}
      <PDFDownloads />

      {/* Video testimonials - Social proof early */}
      <VideoTestimonials />

      {/* Massive Customer Gallery */}
      <MassiveCustomerGallery />

      {/* Value stack - Show what they get */}
      <ValueStack />

      {/* Benefits - Why FervoGear */}
      <PremiumBenefits />

      {/* 5-step process */}
      <Process />

      {/* Social proof gallery with testimonials */}
      <PremiumSocialProof />

      {/* Final CTA */}
      <PremiumFinalCTA />

      {/* Footer */}
      <PremiumFooter />
    </main>
  );
}
