'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function ExitIntentPopup() {
  const [showPopup, setShowPopup] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      // Detect mouse leaving viewport at top (exit intent)
      if (e.clientY <= 0 && !hasShown) {
        setShowPopup(true);
        setHasShown(true);
      }
    };

    // Add listener after 5 seconds (don't trigger immediately)
    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [hasShown]);

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 animate-fadeIn">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={() => setShowPopup(false)}
      ></div>

      {/* Popup */}
      <div className="relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-3xl max-w-2xl w-full border-4 border-brand-orange shadow-2xl animate-scaleIn overflow-hidden">
        {/* Close button */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 z-10 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-all hover:scale-110"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Content */}
        <div className="p-8 md:p-12">
          {/* GIF */}
          <div className="relative w-full max-w-md mx-auto mb-6 rounded-2xl overflow-hidden">
            <Image
              src="https://i.pinimg.com/originals/d8/24/0d/d8240dada417d0eff51db37dc6ec85ad.gif"
              alt="Wait, hold up!"
              width={400}
              height={300}
              className="w-full h-auto"
              unoptimized
            />
          </div>

          {/* Headline - Direct Response */}
          <div className="text-center mb-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 leading-tight">
              WAIT! Don't Leave Without
              <span className="block bg-gradient-to-r from-brand-orange to-red-500 bg-clip-text text-transparent mt-2">
                Your $926 Savings!
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-300">
              You're <span className="text-red-400 font-bold">THIS close</span> to getting the custom suit of your dreams...
            </p>
          </div>

          {/* Urgency Box */}
          <div className="bg-red-500/10 border-2 border-red-500/50 rounded-2xl p-6 mb-6">
            <div className="text-center">
              <div className="text-5xl mb-3">⚠️</div>
              <p className="text-xl font-bold text-white mb-2">
                Only 15 of 47 Black Friday Suits Remaining!
              </p>
              <p className="text-red-400 font-semibold">
                This deal ends Sunday at midnight. Once they're gone, they're GONE.
              </p>
            </div>
          </div>

          {/* Value Reminder */}
          <div className="bg-gradient-to-r from-gray-800 to-black rounded-2xl p-6 mb-6">
            <h3 className="text-xl font-bold text-white mb-4 text-center">Here's What You're Walking Away From:</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between text-gray-300">
                <span>✓ Custom SFI-5 Suit + FREE Gloves</span>
                <span className="font-bold text-white">$1,725</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>✓ Dedicated Designer (Call/Text/Email)</span>
                <span className="font-bold text-white">FREE</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>✓ Unlimited Design Revisions</span>
                <span className="font-bold text-white">FREE</span>
              </div>
              <div className="flex items-center justify-between text-gray-300">
                <span>✓ 30-Second Form (No Credit Card)</span>
                <span className="font-bold text-white">FREE</span>
              </div>
              <div className="pt-3 border-t-2 border-brand-orange/50 flex items-center justify-between">
                <span className="text-xl font-bold text-white">Black Friday Price:</span>
                <span className="text-3xl font-black text-brand-orange">$799</span>
              </div>
              <div className="bg-green-500 text-white text-center py-3 rounded-lg">
                <span className="text-2xl font-black">YOU SAVE $926</span>
              </div>
            </div>
          </div>

          {/* Final Push - Scarcity */}
          <div className="text-center mb-6">
            <p className="text-gray-400 text-lg mb-2">
              <span className="text-yellow-400 font-bold">47 people</span> will get this deal.
            </p>
            <p className="text-white text-xl font-semibold">
              Will YOU be one of them?
            </p>
          </div>

          {/* HUGE CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=exit-intent-popup"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setShowPopup(false)}
            className="group relative block w-full overflow-hidden mb-4"
          >
            {/* Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-red-500 to-orange-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>

            {/* Button */}
            <div className="relative bg-gradient-to-r from-brand-orange via-red-500 to-orange-600 text-white font-bold text-xl md:text-2xl px-12 py-6 rounded-xl text-center transform group-hover:scale-105 transition-all shadow-2xl">
              <span className="flex items-center justify-center gap-3">
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                YES! CLAIM MY $926 SAVINGS NOW
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>

          {/* Secondary - Close */}
          <button
            onClick={() => setShowPopup(false)}
            className="w-full text-gray-500 hover:text-gray-400 text-sm transition-colors"
          >
            No thanks, I don't want to save $926
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
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
