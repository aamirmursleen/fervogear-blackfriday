'use client';

import { useEffect, useState } from 'react';

export default function PremiumCountdown() {
  const [suitsCount, setSuitsCount] = useState(47);

  useEffect(() => {
    // Fetch the suits count from the config file
    fetch('/api/suits-count')
      .then(res => res.json())
      .then(data => {
        if (data.availableSuits !== undefined) {
          setSuitsCount(data.availableSuits);
        }
      })
      .catch(err => {
        console.error('Failed to fetch suits count:', err);
        // Keep default value of 47 on error
      });
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-orange via-orange-600 to-brand-orange backdrop-blur-md border-b border-orange-400/20">
      <div className="max-w-7xl mx-auto px-3 md:px-4 py-2.5 md:py-3">
        {/* Mobile: Optimized single line */}
        <div className="md:hidden flex items-center justify-between gap-2">
          <div className="flex items-center gap-2 flex-1 min-w-0">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-bold text-xs text-white leading-tight">
              🔥 Save $700.95 + FREE Gear
            </span>
          </div>

          {/* Scarcity indicator */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <span className="text-yellow-300 text-xs font-semibold">47 Orders • {suitsCount} Left</span>
          </div>

          {/* Small CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=top-banner-mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange px-3 py-1.5 rounded-md font-bold text-xs whitespace-nowrap flex-shrink-0 hover:bg-gray-100 transition-colors"
          >
            CLAIM NOW
          </a>
        </div>

        {/* Desktop: Full impactful layout */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Left side - Full offer text with scarcity */}
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-3 w-3 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-bold text-base">
              🔥 Save $700.95 + FREE Gloves & Shoes • Only 47 Custom Suit Orders This Month • {suitsCount} Left 🔥
            </span>
          </div>

          {/* Right side - Strong CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=top-banner-desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange px-8 py-2.5 rounded-lg font-bold text-sm hover:bg-gray-100 hover:scale-105 transition-all whitespace-nowrap shadow-lg"
          >
            CLAIM DEAL NOW
          </a>
        </div>
      </div>
    </div>
  );
}
