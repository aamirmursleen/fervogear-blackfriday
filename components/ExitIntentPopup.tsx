'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Desktop only - detect mouse leaving viewport at top
      if (e.clientY <= 0 && !hasShown && window.innerWidth >= 768) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Mobile - detect scroll up intent or back button
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.innerWidth < 768 && !hasShown) {
        if (window.scrollY < lastScrollY && window.scrollY < 100) {
          setShowPopup(true);
          setHasShown(true);
        }
        lastScrollY = window.scrollY;
      }
    };

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('scroll', handleScroll);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/90 backdrop-blur-sm"
        onClick={() => setShowPopup(false)}
      ></div>

      {/* Popup - Mobile Responsive */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl max-w-lg w-full border-4 border-brand-orange shadow-2xl animate-scaleIn overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-3 right-3 z-10 bg-black/80 hover:bg-black text-white rounded-full p-2 transition-all hover:scale-110"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content - Simplified */}
        <div className="p-6 md:p-8">
          {/* GIF - Hero Element */}
          <div className="relative w-full mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://i.pinimg.com/originals/d8/24/0d/d8240dada417d0eff51db37dc6ec85ad.gif"
              alt="Wait, hold up!"
              width={500}
              height={280}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Headline - Short & Punchy */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-3 leading-tight">
              WAIT!
            </h2>
            <p className="text-2xl md:text-3xl font-bold mb-2">
              <span className="bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent">
                Save $700.95
              </span>
            </p>
            <p className="text-lg text-gray-300">
              + Get a <span className="text-white font-semibold">FREE custom design</span> in 24 hours
            </p>
          </div>

          {/* Urgency - Minimal */}
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-xl p-4 mb-6 text-center">
            <p className="text-yellow-400 font-bold text-lg">
              ⚠️ Only 15 of 47 suits left!
            </p>
            <p className="text-red-400 text-sm mt-1">
              Deal ends Sunday midnight
            </p>
          </div>

          {/* HUGE CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=exit-intent-popup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowPopup(false)}
            className="group relative block w-full overflow-hidden mb-3"
          >
            {/* Pulsing glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-red-500 rounded-xl blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>

            {/* Button */}
            <div className="relative bg-gradient-to-r from-brand-orange to-red-500 text-white font-bold text-lg md:text-xl px-8 py-5 rounded-xl text-center transform group-hover:scale-105 transition-all">
              <span className="flex items-center justify-center gap-2">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                CLAIM MY $700.95 SAVINGS
              </span>
            </div>
          </a>

          {/* Reverse Psychology Close */}
          <button
            onClick={() => setShowPopup(false)}
            className="w-full text-gray-500 hover:text-gray-400 text-sm py-2 transition-colors"
          >
            No thanks, I'll pay full price
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
        }
      `}</style>
    </div>
  );
}
