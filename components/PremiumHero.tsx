import Image from 'next/image';

const CTA_LINK = 'https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=trusted-racers';

export default function PremiumHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-brand-orange/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-orange-600/10 via-transparent to-transparent"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left column - Copy */}
          <div className="text-center lg:text-left space-y-8">
            {/* Small badge */}
            <div className="inline-flex items-center gap-2 bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 backdrop-blur-sm">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </span>
              <span className="text-sm font-medium text-brand-orange">Black Friday Exclusive</span>
            </div>

            {/* Main headline */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Your Custom Race Suit.
              <span className="block bg-gradient-to-r from-brand-orange via-orange-500 to-orange-600 bg-clip-text text-transparent mt-2">
                Exactly How You Want It.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 font-light leading-relaxed">
              SFI-5 certified protection. Unlimited customization.
              <span className="text-white font-medium"> 3.5 week delivery.</span>
              <br />
              <span className="text-brand-orange font-semibold">Start with a FREE design mockup.</span>
            </p>

            {/* Value props */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>Unlimited revisions</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                </svg>
                <span>FREE USA shipping</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <a
                href={CTA_LINK}
                className="cta-button-premium text-center group relative z-10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                  GET FREE DESIGN MOCKUP
                </span>
              </a>
              <a
                href="tel:4094040962"
                className="cta-button-outline text-center flex items-center justify-center gap-2"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                (409) 404-0962
              </a>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-6 justify-center lg:justify-start pt-8 border-t border-gray-800">
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">500+</div>
                <div className="text-xs text-gray-500">Suits Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">4.9★</div>
                <div className="text-xs text-gray-500">Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-brand-orange">3.5wk</div>
                <div className="text-xs text-gray-500">Turnaround</div>
              </div>
            </div>
          </div>

          {/* Right column - Hero Image */}
          <div className="relative">
            {/* Floating price badge */}
            <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl p-6 shadow-2xl glow-orange transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <div className="text-center">
                <div className="text-sm font-semibold opacity-90">SAVE</div>
                <div className="text-5xl font-bold">$801</div>
                <div className="text-xs opacity-90">Black Friday</div>
              </div>
            </div>

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl glow-orange group">
              <Image
                src="https://fervogear.com/wp-content/uploads/2025/10/Helloween.jpg"
                alt="Custom FervoGear SFI-5 Race Suit"
                width={800}
                height={1000}
                className="object-cover w-full h-auto transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>

              {/* Badge on image */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md rounded-xl p-4 border border-gray-800">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-sm text-gray-400">Black Friday Price</div>
                    <div className="text-3xl font-bold text-brand-orange">$799</div>
                    <div className="text-xs text-gray-500 line-through">Total Value: $1,599.95</div>
                  </div>
                  <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                    $800.95 OFF
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -z-10 top-1/4 -right-12 w-72 h-72 bg-brand-orange/20 rounded-full blur-3xl"></div>
            <div className="absolute -z-10 bottom-1/4 -left-12 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
