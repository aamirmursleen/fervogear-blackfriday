import PremiumCountdown from '@/components/PremiumCountdown';
import UltimateHero from '@/components/UltimateHero';
import Highlights from '@/components/Highlights';
import FreeDesignCTA from '@/components/FreeDesignCTA';
import PainSolution from '@/components/PainSolution';
import ComparisonTable from '@/components/ComparisonTable';
import PDFDownloads from '@/components/PDFDownloads';
import VideoTestimonials from '@/components/VideoTestimonials';
import MassiveCustomerGallery from '@/components/MassiveCustomerGallery';
import MockupsSlider from '@/components/MockupsSlider';
import ValueStack from '@/components/ValueStack';
import PaymentCalculator from '@/components/PaymentCalculator';
import PremiumBenefits from '@/components/PremiumBenefits';
import Process from '@/components/Process';
import PremiumSocialProof from '@/components/PremiumSocialProof';
import FAQAccordion from '@/components/FAQAccordion';
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

      {/* Pain/Solution - Address objections */}
      <PainSolution />

      {/* Comparison Table - Competitive advantage */}
      <ComparisonTable />

      {/* PDF Downloads - Resources */}
      <PDFDownloads />

      {/* Video testimonials - Social proof */}
      <VideoTestimonials />

      {/* Massive Customer Gallery */}
      <MassiveCustomerGallery />

      {/* Animated Mockups Slider - Design showcase */}
      <MockupsSlider />

      {/* Value stack - Show what they get */}
      <ValueStack />

      {/* Payment Calculator - Affirm & Klarna */}
      <PaymentCalculator />

      {/* Benefits - Why FervoGear */}
      <PremiumBenefits />

      {/* 5-step process */}
      <Process />

      {/* Social proof gallery with testimonials */}
      <PremiumSocialProof />

      {/* FAQ Accordion - Answer questions */}
      <FAQAccordion />

      {/* Final CTA - Last chance */}
      <PremiumFinalCTA />

      {/* Footer */}
      <PremiumFooter />
    </main>
  );
}
