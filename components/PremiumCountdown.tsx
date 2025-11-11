'use client';

import { useEffect, useState } from 'react';

export default function PremiumCountdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const endDate = new Date('2025-12-01T23:59:59').getTime();

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endDate - now;

      if (distance < 0) {
        clearInterval(timer);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-brand-orange via-orange-600 to-brand-orange backdrop-blur-md border-b border-orange-400/20">
      <div className="max-w-7xl mx-auto px-2 md:px-4 py-1.5 md:py-3">
        {/* Mobile: Compact single line */}
        <div className="md:hidden flex items-center justify-between gap-2">
          <div className="flex items-center gap-1.5 flex-1 min-w-0">
            <span className="relative flex h-2 w-2 flex-shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
            </span>
            <span className="font-bold text-[11px] truncate">
              LIMITED OFFER: SAVE $700.95
            </span>
          </div>

          {/* Compact countdown */}
          <div className="flex gap-0.5 flex-shrink-0">
            {[
              { value: timeLeft.days, label: 'D' },
              { value: timeLeft.hours, label: 'H' },
              { value: timeLeft.minutes, label: 'M' },
            ].map((item, index) => (
              <div key={index} className="bg-white/20 backdrop-blur-sm rounded px-1 py-0.5 min-w-[28px] text-center">
                <div className="text-sm font-bold text-white leading-none">{item.value}</div>
                <div className="text-[8px] text-white/80 leading-none">{item.label}</div>
              </div>
            ))}
          </div>

          {/* Small CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=countdown-timer-mobile"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange px-3 py-1 rounded-md font-bold text-[11px] whitespace-nowrap flex-shrink-0"
          >
            CLAIM
          </a>
        </div>

        {/* Desktop: Full layout */}
        <div className="hidden md:flex items-center justify-between gap-3">
          {/* Left side - Offer text */}
          <div className="flex items-center gap-3 text-white">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-white"></span>
            </span>
            <span className="font-bold text-base">
              LIMITED OFFER: Save $700.95 + FREE Gloves & Shoes
            </span>
          </div>

          {/* Center - Countdown */}
          <div className="flex items-center gap-2">
            <span className="text-white/90 text-sm mr-2">Ends in:</span>
            <div className="flex gap-1">
              {[
                { value: timeLeft.days, label: 'D' },
                { value: timeLeft.hours, label: 'H' },
                { value: timeLeft.minutes, label: 'M' },
                { value: timeLeft.seconds, label: 'S' },
              ].map((item, index) => (
                <div key={index} className="bg-white/20 backdrop-blur-sm rounded-lg px-2 py-1 min-w-[40px] text-center">
                  <div className="text-xl font-bold text-white leading-none">{item.value}</div>
                  <div className="text-[10px] text-white/80">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - CTA */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=countdown-timer"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-brand-orange px-6 py-2 rounded-lg font-bold text-sm hover:bg-gray-100 transition-colors whitespace-nowrap"
          >
            CLAIM DEAL
          </a>
        </div>
      </div>
    </div>
  );
}
