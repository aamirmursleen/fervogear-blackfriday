import dynamic from 'next/dynamic';
import PremiumCountdown from '@/components/PremiumCountdown';
import StickyMobileNav from '@/components/StickyMobileNav';
import ExitIntentPopup from '@/components/ExitIntentPopup';
import UltimateHero from '@/components/UltimateHero';
import QuickLinks from '@/components/QuickLinks';
import Highlights from '@/components/Highlights';
import FreeDesignCTA from '@/components/FreeDesignCTA';

// Dynamic imports for below-fold sections - loads only when visible
const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: true });
const PainSolution = dynamic(() => import('@/components/PainSolution'), { ssr: true });
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { ssr: true });
const SFICertification = dynamic(() => import('@/components/SFICertification'), { ssr: true });
const SFILifeSaving = dynamic(() => import('@/components/SFILifeSaving'), { ssr: true });
const PDFDownloads = dynamic(() => import('@/components/PDFDownloads'), { ssr: true });
const MeasurementGuide = dynamic(() => import('@/components/MeasurementGuide'), { ssr: true });
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'), { ssr: true });
const MassiveCustomerGallery = dynamic(() => import('@/components/MassiveCustomerGallery'), { ssr: true });
const MockupsSlider = dynamic(() => import('@/components/MockupsSlider'), { ssr: true });
const ValueStack = dynamic(() => import('@/components/ValueStack'), { ssr: true });
const PaymentCalculator = dynamic(() => import('@/components/PaymentCalculator'), { ssr: true });
const KartingSuits = dynamic(() => import('@/components/KartingSuits'), { ssr: true });
const PremiumBenefits = dynamic(() => import('@/components/PremiumBenefits'), { ssr: true });
const Process = dynamic(() => import('@/components/Process'), { ssr: true });
const PremiumSocialProof = dynamic(() => import('@/components/PremiumSocialProof'), { ssr: true });
const InteractiveFAQ = dynamic(() => import('@/components/InteractiveFAQ'), { ssr: true });
const AIChatbot = dynamic(() => import('@/components/AIChatbot'), { ssr: true });
const PremiumFinalCTA = dynamic(() => import('@/components/PremiumFinalCTA'), { ssr: true });
const PremiumFooter = dynamic(() => import('@/components/PremiumFooter'), { ssr: true });

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
