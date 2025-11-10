import PremiumCountdown from '@/components/PremiumCountdown';
import PremiumHero from '@/components/PremiumHero';
import FreeDesignCTA from '@/components/FreeDesignCTA';
import VideoTestimonials from '@/components/VideoTestimonials';
import PremiumBenefits from '@/components/PremiumBenefits';
import PremiumSocialProof from '@/components/PremiumSocialProof';
import ValueStack from '@/components/ValueStack';
import Process from '@/components/Process';
import PremiumFinalCTA from '@/components/PremiumFinalCTA';
import PremiumFooter from '@/components/PremiumFooter';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      {/* Sticky countdown timer */}
      <PremiumCountdown />

      {/* Premium hero section */}
      <PremiumHero />

      {/* FREE Design CTA - Lead with low commitment */}
      <FreeDesignCTA />

      {/* Video testimonials - Social proof early */}
      <VideoTestimonials />

      {/* Value stack - Show what they get */}
      <ValueStack />

      {/* Benefits - Why FervoGear */}
      <PremiumBenefits />

      {/* 5-step process */}
      <Process />

      {/* Social proof gallery */}
      <PremiumSocialProof />

      {/* Final CTA */}
      <PremiumFinalCTA />

      {/* Footer */}
      <PremiumFooter />
    </main>
  );
}
