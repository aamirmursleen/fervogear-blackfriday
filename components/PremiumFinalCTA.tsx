'use client';

import { useEffect, useState } from 'react';

const CTA_LINK = 'https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=trusted-racers';

export default function PremiumFinalCTA() {
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

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-orange via-orange-600 to-red-600">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[shimmer_3s_linear_infinite]"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Main content */}
        <div className="bg-black/30 backdrop-blur-md rounded-3xl p-12 md:p-16 border border-white/20">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-white/20 backdrop-blur-sm rounded-full p-6">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            Ready to Design Your
            <br />
            <span className="text-white/90">Dream Race Suit?</span>
          </h2>

          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join 500+ racers who chose FervoGear. Start with a FREE design mockup today.
          </p>

          {/* Value props */}
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">🎨</div>
              <div className="font-semibold text-lg text-white mb-2">FREE Design First</div>
              <div className="text-white/80 text-sm">See your exact suit before you pay</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">⚡</div>
              <div className="font-semibold text-lg text-white mb-2">3.5 Week Delivery</div>
              <div className="text-white/80 text-sm">Fastest turnaround in the industry</div>
            </div>

            <div className="bg-black/40 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="text-4xl mb-3">💰</div>
              <div className="font-semibold text-lg text-white mb-2">Save $800.95</div>
              <div className="text-white/80 text-sm">Black Friday special pricing</div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-brand-orange font-bold text-xl px-12 py-6 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl mb-6"
          >
            <span className="flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              GET MY FREE DESIGN MOCKUP
            </span>
          </a>

          <p className="text-white/80 text-sm">
            ✓ No credit card required • ✓ Takes 2 minutes • ✓ Unlimited revisions
          </p>

          {/* Urgency message */}
          <div className="mt-10 pt-10 border-t border-white/20">
            <div className="bg-yellow-400/20 border border-yellow-400/40 rounded-xl p-4 inline-block">
              <p className="text-white font-semibold flex items-center gap-2">
                <span className="text-yellow-400">⚠️</span>
                Limited Availability - Only {suitsCount} Suits
                <span className="text-yellow-400">⚠️</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom disclaimer */}
        <div className="mt-8 text-white/70 text-sm">
          <p>This is a limited-time offer. Once we hit 47 orders, this special pricing is permanently gone.</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            background-position: -250% 0;
          }
          100% {
            background-position: 250% 0;
          }
        }
      `}</style>
    </section>
  );
}
