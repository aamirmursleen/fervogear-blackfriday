'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

const CTA_LINK = 'https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=hero-button';

export default function UltimateHero() {
  const [currentImage, setCurrentImage] = useState(0);

  const heroImages = [
    'https://fervogear.com/wp-content/uploads/2024/04/Jacob-Julson-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Sendit-Rubi.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Driver-Wearing-FervoGear-Suit-12.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Jarrod-Lindemann-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Jasmyn-DeVoe-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/05/Jernigan-Team-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/08/Driver-Wearing-FervoGear-Suit-13.jpg',
  ];

  // Auto-slide every 2 seconds - faster, more engaging!
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [heroImages.length]);
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Ultra-dynamic background */}
      <div className="absolute inset-0">
        {/* Animated gradient mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-brand-orange/30 via-black to-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-orange-600/20 via-transparent to-transparent"></div>

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,107,0,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,107,0,0.1)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black_70%)] animate-pulse"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-brand-orange/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-24 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Ultimate Copy */}
          <div className="space-y-8 text-center lg:text-left">
            {/* Clean badge */}
            <div className="inline-flex items-center gap-3 bg-brand-orange/10 border-2 border-brand-orange/30 rounded-full px-6 py-3 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-brand-orange font-bold text-sm tracking-wide">LIMITED BLACK FRIDAY OFFER</span>
            </div>

            {/* Massive headline with gradient */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black leading-none">
              <span className="block text-white mb-2">Your Dream</span>
              <span className="block bg-gradient-to-r from-brand-orange via-orange-500 to-red-500 bg-clip-text text-transparent mb-2">Race Suit.</span>
              <span className="block text-white text-4xl md:text-5xl lg:text-6xl">Exactly How You Want It.</span>
            </h1>

            {/* Power subheadline */}
            <p className="text-2xl md:text-3xl text-gray-300 font-light leading-relaxed">
              SFI-5 Certified • 100% Custom Design • 3.5 Week Delivery
              <span className="block mt-3 text-brand-orange font-bold">Start with a FREE Design Mockup</span>
            </p>

            {/* Social proof pills */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              {[
                { icon: '⭐', text: '4.9/5 Rating', subtext: '500+ Reviews' },
                { icon: '🏆', text: 'SFI Certified', subtext: 'Industry Standard' },
                { icon: '⚡', text: '3.5 Weeks', subtext: 'Fastest Delivery' },
              ].map((badge, i) => (
                <div key={i} className="bg-black/60 backdrop-blur-md border border-gray-800 rounded-xl px-5 py-3 hover:border-brand-orange transition-all">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{badge.icon}</span>
                    <div>
                      <div className="font-bold text-white text-sm">{badge.text}</div>
                      <div className="text-gray-500 text-xs">{badge.subtext}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mega CTA buttons */}
            <div className="space-y-4 pt-4">
              <a
                href={CTA_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center w-full lg:w-auto"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-orange-600 to-red-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center justify-center gap-3 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold text-xl px-12 py-6 rounded-xl transform group-hover:scale-105 transition-all duration-300 shadow-2xl w-full lg:w-auto">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  <span>GET FREE DESIGN MOCKUP</span>
                  <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:4094040962"
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-orange text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: (409) 404-0962
                </a>
                <a
                  href="#pdf-downloads"
                  className="flex items-center justify-center gap-3 bg-white/10 backdrop-blur-md border-2 border-white/20 hover:border-brand-orange text-white font-semibold px-8 py-4 rounded-xl transition-all hover:bg-white/20"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download PDFs
                </a>
              </div>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap items-center gap-6 text-gray-400 text-sm justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                Unlimited Revisions
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                FREE USA Shipping
              </div>
            </div>
          </div>

          {/* Right: Auto-Playing Image Slider */}
          <div className="relative">
            {/* Main slider container */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <div className="relative aspect-[3/4]">
                {/* Sliding images */}
                {heroImages.map((image, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                      index === currentImage
                        ? 'opacity-100 scale-100 z-10'
                        : 'opacity-0 scale-105 z-0'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`FervoGear Customer ${index + 1}`}
                      fill
                      className="object-cover object-top"
                      priority={index === 0}
                    />
                  </div>
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10"></div>

                {/* Slide indicator dots */}
                <div className="absolute top-4 right-4 flex gap-1 z-20">
                  {heroImages.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImage(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        index === currentImage
                          ? 'bg-brand-orange w-6'
                          : 'bg-white/40 hover:bg-white/60'
                      }`}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Floating price badge on image */}
              <div className="absolute bottom-6 left-6 right-6 space-y-3 z-20">
                <div className="bg-black/80 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <div className="text-gray-400 text-sm">Black Friday Price</div>
                      <div className="text-4xl font-bold text-brand-orange">$799</div>
                      <div className="text-gray-500 text-sm line-through">Regular $1,100</div>
                    </div>
                    <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold">
                      SAVE $301
                    </div>
                  </div>
                  <div className="text-yellow-400 font-semibold text-sm">
                    ⚠️ Limited to 47 suits • 15 remaining
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative glows */}
            <div className="absolute -z-10 top-1/4 -right-16 w-96 h-96 bg-brand-orange/30 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-16 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="flex flex-col items-center gap-2">
          <span className="text-gray-500 text-sm">Scroll to explore</span>
          <svg className="w-6 h-6 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-100vh) translateX(50px); opacity: 0; }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float linear infinite;
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
