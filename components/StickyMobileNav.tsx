'use client';

import { useState } from 'react';

export default function StickyMobileNav() {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    {
      id: 'home',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ),
      label: 'Home',
      href: '#'
    },
    {
      id: 'designs',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      ),
      label: 'Gallery',
      scrollTo: 'customer-gallery'
    },
    {
      id: 'cta',
      icon: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      ),
      label: 'Design',
      isMainCTA: true,
      href: 'https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal'
    },
    {
      id: 'faq',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      label: 'FAQs',
      scrollTo: 'faq-section'
    },
    {
      id: 'contact',
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
      {/* Backdrop blur bar */}
      <div className="bg-black/80 backdrop-blur-xl border-t border-gray-800 shadow-2xl">
        <div className="max-w-screen-sm mx-auto px-2">
          <div className="flex items-center justify-around py-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleClick(item)}
                className={`relative flex flex-col items-center justify-center gap-1 px-3 py-2 rounded-xl transition-all duration-300 ${
                  item.isMainCTA
                    ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white scale-110 -mt-8 shadow-lg shadow-brand-orange/50'
                    : activeSection === item.id
                    ? 'text-brand-orange'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {/* Pulse effect for main CTA */}
                {item.isMainCTA && (
                  <div className="absolute inset-0 bg-brand-orange rounded-xl animate-ping opacity-20"></div>
                )}

                {/* Icon */}
                <div className={`relative ${item.isMainCTA ? 'scale-110' : ''}`}>
                  {item.icon}
                </div>

                {/* Label */}
                <span className={`text-xs font-semibold ${item.isMainCTA ? 'text-white' : ''}`}>
                  {item.label}
                </span>

                {/* Active indicator */}
                {!item.isMainCTA && activeSection === item.id && (
                  <div className="absolute -bottom-1 w-8 h-1 bg-brand-orange rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Safe area padding for iOS */}
      <div className="bg-black h-safe-area-inset-bottom"></div>
    </nav>
  );
}
