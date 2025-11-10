import PremiumCountdown from '@/components/PremiumCountdown';
import StickyMobileNav from '@/components/StickyMobileNav';
import UltimateHero from '@/components/UltimateHero';
import Highlights from '@/components/Highlights';
import AboutUs from '@/components/AboutUs';
import FreeDesignCTA from '@/components/FreeDesignCTA';
import PainSolution from '@/components/PainSolution';
import ComparisonTable from '@/components/ComparisonTable';
import SFICertification from '@/components/SFICertification';
import PDFDownloads from '@/components/PDFDownloads';
import VideoTestimonials from '@/components/VideoTestimonials';
import MassiveCustomerGallery from '@/components/MassiveCustomerGallery';
import MockupsSlider from '@/components/MockupsSlider';
import ValueStack from '@/components/ValueStack';
import PaymentCalculator from '@/components/PaymentCalculator';
import PremiumBenefits from '@/components/PremiumBenefits';
import Process from '@/components/Process';
import PremiumSocialProof from '@/components/PremiumSocialProof';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import PremiumFinalCTA from '@/components/PremiumFinalCTA';
import PremiumFooter from '@/components/PremiumFooter';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-20 md:pb-24">
      {/* Sticky countdown timer */}
      <PremiumCountdown />

      {/* Sticky Mobile Navigation */}
      <StickyMobileNav />

      {/* ULTIMATE Hero section - Conversion focused */}
      <UltimateHero />

      {/* Highlights - Why Choose FervoGear */}
      <Highlights />

      {/* About Us - Company story */}
      <AboutUs />

      {/* FREE Design CTA - Lead with low commitment */}
      <FreeDesignCTA />

      {/* Pain/Solution - Address objections */}
      <PainSolution />

      {/* Comparison Table - Competitive advantage */}
      <ComparisonTable />

      {/* SFI Certification - Trust & Safety */}
      <SFICertification />

      {/* PDF Downloads - Resources */}
      <PDFDownloads />

      {/* Video testimonials - Social proof */}
      <VideoTestimonials />

      {/* Massive Customer Gallery */}
      <div id="customer-gallery">
        <MassiveCustomerGallery />
      </div>

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

      {/* Interactive FAQ with AI Chatbot - Answer questions */}
      <div id="faq-section">
        <InteractiveFAQ />
      </div>

      {/* Final CTA - Last chance */}
      <PremiumFinalCTA />

      {/* Footer */}
      <PremiumFooter />
    </main>
  );
}
