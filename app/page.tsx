import dynamic from 'next/dynamic';
import PremiumCountdown from '@/components/PremiumCountdown';
import StickyMobileNav from '@/components/StickyMobileNav';
import UltimateHero from '@/components/UltimateHero';
import QuickLinks from '@/components/QuickLinks';
import Highlights from '@/components/Highlights';
import FreeDesignCTA from '@/components/FreeDesignCTA';

// Dynamic imports for below-fold sections - loads only when visible
const AboutUs = dynamic(() => import('@/components/AboutUs'), { ssr: true });
const PainSolution = dynamic(() => import('@/components/PainSolution'), { ssr: true });
const ComparisonTable = dynamic(() => import('@/components/ComparisonTable'), { ssr: true });
const SFICertification = dynamic(() => import('@/components/SFICertification'), { ssr: true });
const PDFDownloads = dynamic(() => import('@/components/PDFDownloads'), { ssr: true });
const VideoTestimonials = dynamic(() => import('@/components/VideoTestimonials'), { ssr: true });
const MassiveCustomerGallery = dynamic(() => import('@/components/MassiveCustomerGallery'), { ssr: true });
const MockupsSlider = dynamic(() => import('@/components/MockupsSlider'), { ssr: true });
const ValueStack = dynamic(() => import('@/components/ValueStack'), { ssr: true });
const PaymentCalculator = dynamic(() => import('@/components/PaymentCalculator'), { ssr: true });
const PremiumBenefits = dynamic(() => import('@/components/PremiumBenefits'), { ssr: true });
const Process = dynamic(() => import('@/components/Process'), { ssr: true });
const PremiumSocialProof = dynamic(() => import('@/components/PremiumSocialProof'), { ssr: true });
const InteractiveFAQ = dynamic(() => import('@/components/InteractiveFAQ'), { ssr: true });
const PremiumFinalCTA = dynamic(() => import('@/components/PremiumFinalCTA'), { ssr: true });
const PremiumFooter = dynamic(() => import('@/components/PremiumFooter'), { ssr: true });

export default function Home() {
  return (
    <main className="min-h-screen relative pb-20 md:pb-24">
      {/* Sticky countdown timer */}
      <PremiumCountdown />

      {/* Sticky Mobile Navigation */}
      <StickyMobileNav />

      {/* ULTIMATE Hero section - Conversion focused */}
      <UltimateHero />

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
      <div id="pricing-section">
        <ValueStack />
      </div>

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
