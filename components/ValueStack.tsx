'use client';

import { useEffect, useState } from 'react';

export default function ValueStack() {
  const [suitsCount, setSuitsCount] = useState(47);

  useEffect(() => {
    fetch('/api/suits-count')
      .then(res => res.json())
      .then(data => {
        if (data.availableSuits !== undefined) {
          setSuitsCount(data.availableSuits);
        }
      })
      .catch(err => console.error('Failed to fetch suits count:', err));
  }, []);

  const items = [
    { name: 'Double Layer SFI-5 Nomex Race Suit', value: '$899', icon: '🏎️' },
    { name: 'Premium Matching Racing Gloves', value: '$200', icon: '🧤' },
    { name: 'Matching Shoes', value: '$200', icon: '👟' },
    { name: 'Custom Design Service (Unlimited Revisions)', value: '$200', icon: '🎨' },
    { name: 'Premium Nomex Inner Lining Upgrade', value: '$150', icon: '💎' },
    { name: 'Unlimited Logo Embroidery', value: '$100', icon: '✨' },
    { name: 'FREE USA Shipping', value: '$50.95', icon: '🚚' },
  ];

  const totalValue = 1599.95;
  const dealPrice = 799;
  const savings = 800.95;

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 text-green-500 font-semibold text-sm mb-6 animate-pulse">
            💰 LIMITED TIME OFFER
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className="text-white">Here's</span>{' '}
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Everything</span>{' '}
            <span className="text-white">You Get</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400">
            Complete race suit package - limited availability
          </p>
        </div>

        {/* Value Stack Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black rounded-3xl p-8 md:p-12 border-2 border-brand-orange/50 shadow-2xl glow-orange">
          {/* Items List */}
          <div className="space-y-4 mb-8">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center py-4 px-4 bg-black/40 rounded-xl border border-gray-800 hover:border-brand-orange/50 transition-all"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{item.icon}</span>
                  <span className="text-base md:text-lg font-medium text-white">{item.name}</span>
                </div>
                <span className="text-gray-400 font-bold text-lg whitespace-nowrap ml-4">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Pricing Section */}
          <div className="space-y-6 mb-8">
            {/* Total Value */}
            <div className="flex justify-between items-center py-4 px-6 bg-gray-800/50 rounded-xl">
              <span className="text-xl md:text-2xl font-bold text-white">Total Value:</span>
              <span className="text-2xl md:text-3xl font-bold text-gray-500 line-through">
                ${totalValue}
              </span>
            </div>

            {/* Deal Price */}
            <div className="flex justify-between items-center py-6 px-6 bg-gradient-to-r from-brand-orange/20 to-orange-600/20 border-2 border-brand-orange rounded-xl">
              <span className="text-2xl md:text-3xl font-bold text-white">Deal Price:</span>
              <span className="text-5xl md:text-6xl font-black bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">
                ${dealPrice}
              </span>
            </div>

            {/* Savings Badge */}
            <div className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center py-6 rounded-2xl shadow-2xl">
              <div className="text-lg md:text-xl font-semibold mb-1">YOU SAVE</div>
              <div className="text-4xl md:text-5xl font-black">
                ${savings}
              </div>
            </div>
          </div>

          {/* HUGE CTA Button */}
          <a
            href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=value-stack-section"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative block w-full overflow-hidden"
          >
            {/* Glow effect */}
            <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange via-orange-600 to-red-500 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition-opacity"></div>

            {/* Button */}
            <div className="relative bg-gradient-to-r from-brand-orange via-orange-600 to-red-500 text-white font-bold text-xl md:text-2xl px-12 py-6 md:py-8 rounded-xl text-center transform group-hover:scale-105 transition-all duration-300 shadow-2xl">
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

              {/* Button content */}
              <span className="relative flex items-center justify-center gap-3">
                <svg className="w-7 h-7 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                CLAIM THIS DEAL NOW
                <svg className="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </a>

          {/* Trust indicators */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            ✓ No credit card required • ✓ 30-second form • ✓ Get paired with dedicated designer
          </div>
        </div>

        {/* Urgency below */}
        <div className="mt-8 text-center">
          <div className="inline-block bg-yellow-400/10 border-2 border-yellow-400/40 rounded-xl px-8 py-4">
            <p className="text-yellow-400 font-bold text-lg flex items-center gap-3">
              <span className="text-2xl">⚠️</span>
              Only {suitsCount} suits available at this price
              <span className="text-2xl">⚠️</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
