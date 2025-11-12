import PremiumCountdown from '@/components/PremiumCountdown';
import StickyMobileNav from '@/components/StickyMobileNav';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import UltimateHero from '@/components/UltimateHero';
import QuickLinks from '@/components/QuickLinks';
import Highlights from '@/components/Highlights';
import FreeDesignCTA from '@/components/FreeDesignCTA';
import AboutUs from '@/components/AboutUs';
import PainSolution from '@/components/PainSolution';
import ComparisonTable from '@/components/ComparisonTable';
import SFICertification from '@/components/SFICertification';
import SFILifeSaving from '@/components/SFILifeSaving';
import PDFDownloads from '@/components/PDFDownloads';
import MeasurementGuide from '@/components/MeasurementGuide';
import VideoTestimonials from '@/components/VideoTestimonials';
import MassiveCustomerGallery from '@/components/MassiveCustomerGallery';
import MockupsSlider from '@/components/MockupsSlider';
import ValueStack from '@/components/ValueStack';
import PaymentCalculator from '@/components/PaymentCalculator';
import KartingSuits from '@/components/KartingSuits';
import PremiumBenefits from '@/components/PremiumBenefits';
import Process from '@/components/Process';
import PremiumSocialProof from '@/components/PremiumSocialProof';
import InteractiveFAQ from '@/components/InteractiveFAQ';
import AIChatbot from '@/components/AIChatbot';
import PremiumFinalCTA from '@/components/PremiumFinalCTA';
import PremiumFooter from '@/components/PremiumFooter';

export default function Home() {
  return (
    <main className="min-h-screen relative pb-20 md:pb-24">
      {/* Exit Intent Popup - Capture abandoning visitors */}
      <ExitIntentPopup />

      {/* Sticky countdown timer */}
      <PremiumCountdown />

      {/* Sticky Mobile Navigation */}
      <StickyMobileNav />

      {/* ULTIMATE Hero section - Conversion focused */}
      <UltimateHero />

      {/* Video Reels - Built for Champions */}
      <div id="video-reels">
        <VideoTestimonials />
      </div>

      {/* Quick Navigation Links */}
      <QuickLinks />

      {/* Highlights - Why Choose FervoGear */}
      <div id="highlights">
        <Highlights />
      </div>

      {/* About Us - Company story */}
      <div id="about">
        <AboutUs />
      </div>

      {/* FREE Design CTA - Lead with low commitment */}
      <FreeDesignCTA />

      {/* Pain/Solution - Address objections */}
      <PainSolution />

      {/* Comparison Table - Competitive advantage */}
      <ComparisonTable />

      {/* SFI Certification - Trust & Safety */}
      <div id="sfi-certification">
        <SFICertification />
      </div>

      {/* SFI Life-Saving - Emotional direct response */}
      <SFILifeSaving />

      {/* PDF Downloads - Resources */}
      <PDFDownloads />

      {/* Measurement Guide - How to measure */}
      <div id="measurement-guide">
        <MeasurementGuide />
      </div>

      {/* Massive Customer Gallery */}
      <div id="customer-gallery">
        <MassiveCustomerGallery />
      </div>

      {/* Animated Mockups Slider - Design showcase */}
      <MockupsSlider />

      {/* Value stack - Show what they get */}
      <div id="pricing-section">
        <ValueStack />
      </div>

      {/* Payment Calculator - Affirm & Klarna */}
      <PaymentCalculator />

      {/* Karting Suits - Alternative pricing */}
      <div id="karting-section">
        <KartingSuits />
      </div>

      {/* Benefits - Why FervoGear */}
      <PremiumBenefits />

      {/* 5-step process */}
      <Process />

      {/* Social proof gallery with testimonials */}
      <PremiumSocialProof />

      {/* Interactive FAQ - Answer questions */}
      <div id="faq-section">
        <InteractiveFAQ />
      </div>

      {/* AI Chatbot - Own section */}
      <div id="ai-chatbot">
        <AIChatbot />
      </div>

      {/* Final CTA - Last chance */}
      <PremiumFinalCTA />

      {/* Footer */}
      <PremiumFooter />
    </main>
  );
}
