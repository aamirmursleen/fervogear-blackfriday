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
      id: 'designs',
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Gallery',
      scrollTo: 'customer-gallery'
    },
    {
      id: 'cta',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
        </svg>
      ),
      label: 'Design',
      isMainCTA: true,
      href: 'https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal'
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
    <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Compact backdrop blur bar */}
      <div className="bg-black/90 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
        <div className="flex items-end justify-around px-1 py-1.5 safe-bottom">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleClick(item)}
              className={`relative flex flex-col items-center justify-center gap-0.5 min-w-[60px] py-1.5 rounded-lg transition-all duration-300 ${
                item.isMainCTA
                  ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white scale-105 -mt-6 px-4 py-2 shadow-lg shadow-brand-orange/50'
                  : activeSection === item.id
                  ? 'text-brand-orange'
                  : 'text-gray-400 active:text-white'
              }`}
            >
              {/* Pulse effect for main CTA */}
              {item.isMainCTA && (
                <div className="absolute inset-0 bg-brand-orange rounded-lg animate-ping opacity-20"></div>
              )}

              {/* Icon - smaller */}
              <div className="relative">
                {item.icon}
              </div>

              {/* Label - smaller text */}
              <span className={`text-[10px] font-semibold leading-tight ${item.isMainCTA ? 'text-white' : ''}`}>
                {item.label}
              </span>

              {/* Active indicator */}
              {!item.isMainCTA && activeSection === item.id && (
                <div className="absolute -bottom-0.5 w-6 h-0.5 bg-brand-orange rounded-full"></div>
              )}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
