'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function MockupsSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const mockups = [
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/01-Josh-Garrity-1.jpg', title: 'American Spirit', style: 'Patriotic Design' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/02-Gerald-piatt-7-copy.jpg', title: 'Stars & Stripes', style: 'Bold Statement' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/03-Dean-Lewis-11.jpg', title: 'Classic Black', style: 'Professional' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/04-Patrick-T-Tharp-Sr-M-New.jpg', title: 'Racing Flame', style: 'Aggressive' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/05-Ronnie-Klys-5_Mockup.jpg', title: 'Team Spirit', style: 'Sponsor Heavy' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/06-D-RAT-2.jpg', title: 'Street Style', style: 'Urban Edge' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/07-Jason-Pica-08-2-1.jpg', title: 'Racing Pro', style: 'Custom Design' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/08-Taylor-Wood-New-02.jpg', title: 'Bold Colors', style: 'Vibrant' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/09-Tony-Scheffler-New.jpg', title: 'Team Colors', style: 'Professional' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/10-Ryan-Claeys-E-New-10-copy.jpg', title: 'Custom Graphics', style: 'Detailed' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/11-Wesley-Ashcraft.jpg', title: 'Racing Style', style: 'Modern' },
    { url: 'https://fervogear.com/wp-content/uploads/2023/07/12-Rich-Hervig-03-1-1.jpg', title: 'Classic Design', style: 'Traditional' },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % mockups.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, mockups.length]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % mockups.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + mockups.length) % mockups.length);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
            DESIGN SHOWCASE
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Infinite</span>
            {' '}
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Possibilities</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Every suit is 100% unique. Browse real custom designs from our customers.
          </p>
        </div>

        {/* Main Slider */}
        <div className="relative">
          {/* Slider container */}
          <div className="relative h-[650px] md:h-[750px]">
            {mockups.map((mockup, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-all duration-1000 ease-in-out transform ${
                  index === currentSlide
                    ? 'opacity-100 scale-100 z-10'
                    : index === (currentSlide - 1 + mockups.length) % mockups.length
                    ? 'opacity-0 -translate-x-full scale-95 z-0'
                    : 'opacity-0 translate-x-full scale-95 z-0'
                }`}
              >
                {/* CLEAN DESIGN - Pure white card, no distracting backgrounds */}
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  <div className="relative w-full max-w-3xl h-full">
                    {/* Pure white background card */}
                    <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden">
                      {/* FervoGear branding header */}
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-gray-100 to-white p-4 border-b border-gray-200 z-10">
                        <div className="flex items-center justify-between">
                          <div className="text-xl font-bold text-gray-800">FERVOGEAR</div>
                          <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-4 py-2 rounded-xl font-bold text-sm">
                            DESIGN #{index + 1}
                          </div>
                        </div>
                      </div>

                      {/* Clean mockup display */}
                      <div className="absolute inset-0 top-16 bottom-24 p-8">
                        <Image
                          src={mockup.url}
                          alt={mockup.title}
                          fill
                          className="object-contain drop-shadow-xl"
                        />
                      </div>

                      {/* Info footer */}
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 via-gray-800 to-transparent p-6">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-2xl font-bold text-white mb-1">{mockup.title}</h3>
                            <p className="text-brand-orange font-semibold">{mockup.style}</p>
                          </div>
                          <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            CUSTOM
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md hover:bg-brand-orange/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Previous slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/60 backdrop-blur-md hover:bg-brand-orange/90 text-white p-4 rounded-full transition-all duration-300 hover:scale-110 group"
              aria-label="Next slide"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Progress indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex items-center gap-2 bg-black/60 backdrop-blur-md px-6 py-3 rounded-full">
              <span className="text-white font-bold">{currentSlide + 1}</span>
              <span className="text-gray-400">/</span>
              <span className="text-gray-400">{mockups.length}</span>
            </div>
          </div>

          {/* Thumbnail navigation */}
          <div className="mt-8 flex gap-3 overflow-x-auto pb-4 hide-scrollbar">
            {mockups.map((mockup, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative flex-shrink-0 w-24 h-24 rounded-xl overflow-hidden transition-all duration-300 ${
                  index === currentSlide
                    ? 'ring-4 ring-brand-orange scale-110'
                    : 'ring-2 ring-gray-800 hover:ring-brand-orange/50 opacity-60 hover:opacity-100'
                }`}
              >
                <div className="absolute inset-0 bg-white p-1">
                  <Image
                    src={mockup.url}
                    alt={mockup.title}
                    fill
                    className="object-contain"
                  />
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* CTA below slider */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-brand-orange/30 rounded-3xl p-12 inline-block">
            <div className="text-5xl mb-4">🎨</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Your Design Will Be <span className="text-brand-orange">100% Unique</span>
            </h3>
            <p className="text-gray-400 mb-8 max-w-2xl text-lg">
              These are just examples. Your suit will be custom-designed to match YOUR vision, colors, logos, and style.
            </p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-2xl"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              START MY FREE DESIGN
            </a>
            <p className="text-gray-500 text-sm mt-4">
              ✓ No credit card • ✓ Unlimited revisions • ✓ See design in 24hrs
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
