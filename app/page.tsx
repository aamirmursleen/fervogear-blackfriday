import CountdownTimer from '@/components/CountdownTimer';
import Hero from '@/components/Hero';
import ValueStack from '@/components/ValueStack';
import Benefits from '@/components/Benefits';
import Scarcity from '@/components/Scarcity';
import DriverGallery from '@/components/DriverGallery';
import MockupGallery from '@/components/MockupGallery';
import Process from '@/components/Process';
import Features from '@/components/Features';
import Support from '@/components/Support';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Sticky countdown timer */}
      <CountdownTimer />

      {/* Hero section with main offer */}
      <Hero />

      {/* Value stack - what they get */}
      <ValueStack />

      {/* Scarcity/urgency section */}
      <Scarcity />

      {/* Benefits - why choose FervoGear */}
      <Benefits />

      {/* Real drivers social proof */}
      <DriverGallery />

      {/* Custom design mockups */}
      <MockupGallery />

      {/* Features grid */}
      <Features />

      {/* 5-step process */}
      <Process />

      {/* Customer support */}
      <Support />

      {/* Final CTA */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </main>
  );
}
