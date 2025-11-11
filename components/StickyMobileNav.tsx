'use client';

import { useState } from 'react';

export default function StickyMobileNav() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    {
      id: 'home',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
      href: '#'
    },
    {
      id: 'pricing',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'Pricing',
      scrollTo: 'pricing-section'
    },
    {
      id: 'cta',
      icon: (
        <svg className="w-6 h-6 group-hover:rotate-12 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      label: 'Design',
      isMainCTA: true,
      href: 'https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=sticky-nav-bar'
    },
    {
      id: 'contact',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      label: 'Call',
      href: 'tel:4094040962'
    },
  ];

  const handleClick = (item: typeof navItems[0]) => {
    setActiveSection(item.id);

    if (item.scrollTo) {
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else if (item.href) {
      if (item.href.startsWith('#')) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (item.href.startsWith('tel:')) {
        window.location.href = item.href;
      } else {
        window.open(item.href, '_blank');
      }
    }
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50">
      {/* Beautiful backdrop blur bar - Mobile & Desktop */}
      <div className="bg-black/90 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end justify-around md:justify-around px-3 md:px-3 py-1.5 safe-bottom gap-3 md:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className={`group relative flex flex-col items-center justify-center gap-0.5 min-w-[65px] md:min-w-[60px] py-1.5 rounded-lg transition-all duration-300 ${
                  item.isMainCTA
                    ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white scale-105 -mt-6 md:-mt-5 px-4 md:px-4 py-2 shadow-lg shadow-brand-orange/50 hover:scale-110 z-30'
                    : activeSection === item.id
                    ? 'text-brand-orange z-20'
                    : 'text-gray-400 hover:text-white active:text-white z-20'
                }`}
              >
                {/* Pulse effect for main CTA */}
                {item.isMainCTA && (
                  <>
                    <div className="absolute inset-0 bg-brand-orange rounded-lg md:rounded-xl animate-ping opacity-20 pointer-events-none"></div>
                    {/* Shimmer effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 rounded-lg md:rounded-xl pointer-events-none"></div>
                  </>
                )}

                {/* Icon with animation */}
                <div className="relative">
                  {item.icon}
                </div>

                {/* Label */}
                <span className={`text-[10px] md:text-xs font-semibold leading-tight ${item.isMainCTA ? 'text-white' : ''}`}>
                  {item.label}
                </span>

                {/* Active indicator */}
                {!item.isMainCTA && activeSection === item.id && (
                  <div className="absolute -bottom-0.5 w-6 md:w-8 h-0.5 md:h-1 bg-brand-orange rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
