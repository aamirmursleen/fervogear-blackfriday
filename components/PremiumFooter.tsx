'use client';

import Image from 'next/image';

export default function PremiumFooter() {
  return (
    <footer className="relative overflow-hidden">
      {/* Mega CTA Section Above Footer */}
      <div className="bg-gradient-to-br from-brand-orange via-orange-600 to-red-600 py-20 px-4 relative">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] bg-[length:250%_250%] animate-pulse"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-6xl mb-6">🏁</div>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-2xl text-white/90 mb-8">
            Your custom race suit is just one click away
          </p>
          <a
            href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-brand-orange font-bold text-2xl px-16 py-6 rounded-2xl hover:scale-105 transition-transform shadow-2xl"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5" />
            </svg>
            GET MY FREE DESIGN NOW
          </a>
          <p className="text-white/80 text-sm mt-6">
            ✓ No credit card required • ✓ See mockup in 24 hours • ✓ Unlimited revisions
          </p>
        </div>
      </div>

      {/* Main Footer */}
      <div className="bg-black border-t-4 border-brand-orange">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Top section - Newsletter CTA */}
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-brand-orange/30 rounded-3xl p-10 mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-3">
                  Stay Updated on <span className="text-brand-orange">Exclusive Deals</span>
                </h3>
                <p className="text-gray-400">
                  Get early access to sales, new designs, and racing tips
                </p>
              </div>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 bg-black/60 border border-gray-700 rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none"
                />
                <button className="bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Main Footer Grid */}
          <div className="grid md:grid-cols-5 gap-12 mb-12">
            {/* Column 1: Brand */}
            <div className="md:col-span-2">
              {/* FervoGear Logo */}
              <div className="mb-6">
                <Image
                  src="https://fervogear.com/wp-content/uploads/2024/01/47be92d0-c962-47ad-beee-9d0582d9448d.png"
                  alt="FervoGear Logo"
                  width={200}
                  height={60}
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed text-lg">
                Premium custom racing suits designed by racers, for racers. SFI-certified protection with unmatched style and industry-leading turnaround.
              </p>

              {/* Social Media - REAL LINKS */}
              <div className="mb-6">
                <h4 className="text-white font-bold mb-3">Follow Us</h4>
                <div className="flex gap-3">
                  <a
                    href="https://www.facebook.com/fervogear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900 hover:bg-[#1877F2] border border-gray-800 hover:border-[#1877F2] transition-all p-4 rounded-xl"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/fervogear/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900 hover:bg-gradient-to-br hover:from-[#833AB4] hover:via-[#FD1D1D] hover:to-[#F77737] border border-gray-800 hover:border-transparent transition-all p-4 rounded-xl"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                  </a>
                  <a
                    href="https://twitter.com/fervogear"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-gray-900 hover:bg-[#1DA1F2] border border-gray-800 hover:border-[#1DA1F2] transition-all p-4 rounded-xl"
                    aria-label="Twitter/X"
                  >
                    <svg className="w-6 h-6 text-gray-400 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-2 gap-3 mt-6">
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">🛡️</div>
                  <div className="text-white font-bold text-xs">SFI Certified</div>
                </div>
                <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-3 text-center">
                  <div className="text-2xl mb-1">⭐</div>
                  <div className="text-white font-bold text-xs">4.9 Rating</div>
                </div>
              </div>
            </div>

            {/* Column 2: Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#customer-gallery" className="hover:text-brand-orange transition-colors">Customer Gallery</a></li>
                <li><a href="#pdf-downloads" className="hover:text-brand-orange transition-colors">Design Mockups</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Pricing & Savings</a></li>
                <li><a href="#faq-section" className="hover:text-brand-orange transition-colors">FAQs</a></li>
                <li><a href="tel:4094040962" className="hover:text-brand-orange transition-colors">Get Started</a></li>
              </ul>
            </div>

            {/* Column 3: Learn More */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">Learn More</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-brand-orange transition-colors">About FervoGear</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">SFI Certification</a></li>
                <li><a href="#pdf-downloads" className="hover:text-brand-orange transition-colors">Download Resources</a></li>
                <li><a href="#customer-gallery" className="hover:text-brand-orange transition-colors">Real Customers</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Why Choose Us</a></li>
              </ul>
            </div>

            {/* Column 4: Contact */}
            <div>
              <h4 className="font-bold text-lg mb-4 text-brand-orange">Contact Us</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:4094040962" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <div className="bg-gray-900 group-hover:bg-brand-orange p-2 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <span className="font-semibold">(409) 404-0962</span>
                  </a>
                </li>
                <li>
                  <a href="mailto:sales@fervogear.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group">
                    <div className="bg-gray-900 group-hover:bg-brand-orange p-2 rounded-lg transition-colors">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <span>sales@fervogear.com</span>
                  </a>
                </li>
                <li className="text-sm text-gray-500 flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Mon-Sat: 8:00 AM - 5:00 PM PST
                </li>
                <li className="pt-3">
                  <address className="text-gray-500 not-italic text-sm leading-relaxed">
                    8751 Collin McKinney Pkwy<br />
                    Suite 1102, PMB 61<br />
                    McKinney, TX 75070
                  </address>
                </li>
              </ul>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 p-8 bg-gray-900/50 rounded-2xl">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange mb-1">500+</div>
              <div className="text-gray-500 text-sm">Custom Suits Made</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange mb-1">4.9★</div>
              <div className="text-gray-500 text-sm">Customer Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange mb-1">3.5wk</div>
              <div className="text-gray-500 text-sm">Fast Delivery</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange mb-1">100%</div>
              <div className="text-gray-500 text-sm">Customizable</div>
            </div>
          </div>

          {/* Bottom Legal */}
          <div className="pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
              <div className="text-gray-500 text-sm">
                © {new Date().getFullYear()} FervoGear, LLC. All rights reserved.
              </div>
              <div className="flex flex-wrap gap-4 text-gray-500 text-sm">
                <a href="#" className="hover:text-brand-orange transition-colors">Privacy Policy</a>
                <span className="text-gray-700">•</span>
                <a href="#" className="hover:text-brand-orange transition-colors">Terms of Service</a>
                <span className="text-gray-700">•</span>
                <a href="#" className="hover:text-brand-orange transition-colors">Shipping Policy</a>
                <span className="text-gray-700">•</span>
                <a href="#" className="hover:text-brand-orange transition-colors">Refund Policy</a>
              </div>
            </div>

            {/* Payment Methods */}
            <div className="text-center">
              <p className="text-gray-600 text-xs mb-3">We accept</p>
              <div className="flex items-center justify-center gap-4 flex-wrap">
                <div className="text-gray-500 text-sm">💳 Visa</div>
                <div className="text-gray-500 text-sm">💳 Mastercard</div>
                <div className="text-gray-500 text-sm">💳 Amex</div>
                <div className="text-gray-500 text-sm">💳 Discover</div>
                <div className="text-blue-500 font-semibold text-sm">Affirm</div>
                <div className="text-pink-500 font-semibold text-sm">Klarna</div>
                <div className="text-gray-500 text-sm">PayPal</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Black Friday Bottom Banner */}
      <div className="bg-gradient-to-r from-brand-orange via-orange-600 to-brand-orange py-4 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-bold text-lg">
            🔥 BLACK FRIDAY: Save $451 + FREE Gloves • Limited to 47 Orders • Ends Sunday 11:59 PM PST 🔥
          </p>
        </div>
      </div>
    </footer>
  );
}
