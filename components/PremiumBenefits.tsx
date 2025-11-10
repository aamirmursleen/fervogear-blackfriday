export default function PremiumBenefits() {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      title: 'SFI 3.2A/5 Certified',
      description: 'Maximum fire protection certified to professional racing standards',
      highlight: 'Industry Standard'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
      title: '100% Custom Design',
      description: 'Any color, logo, sponsor, or graphic. Your vision becomes reality',
      highlight: 'Unlimited Options'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      title: 'Custom Tailored Fit',
      description: 'Made to your exact measurements for perfect comfort and performance',
      highlight: 'Perfect Fit'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: '3.5 Week Turnaround',
      description: 'Fastest in the industry. Competitors take 8-12 weeks',
      highlight: '60% Faster'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Price Match Guarantee',
      description: 'Find a better price from any USA dealer? We\'ll match it',
      highlight: 'Best Price'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      ),
      title: 'FREE Design Mockup',
      description: 'See your exact suit design before paying anything',
      highlight: 'Zero Risk'
    },
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-black to-black opacity-50"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-heading-premium mb-4">
            Why Professional Racers
            <span className="text-brand-orange"> Choose FervoGear</span>
          </h2>
          <p className="section-subheading-premium max-w-3xl mx-auto">
            Premium quality meets unmatched customization. Everything you need in a professional race suit.
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="premium-card group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className="flex items-start justify-between mb-4">
                <div className="bg-gradient-to-br from-brand-orange/20 to-orange-600/20 p-4 rounded-xl text-brand-orange group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <span className="bg-brand-orange/10 text-brand-orange text-xs font-semibold px-3 py-1 rounded-full">
                  {benefit.highlight}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold mb-3 group-hover:text-brand-orange transition-colors duration-300">
                {benefit.title}
              </h3>
              <p className="text-gray-400 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee section */}
        <div className="bg-gradient-to-r from-gray-900 via-black to-gray-900 border-2 border-brand-orange/30 rounded-3xl p-8 md:p-12 text-center glow-orange">
          <div className="max-w-4xl mx-auto">
            <div className="text-5xl mb-6">🏆</div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Our Promise: <span className="text-brand-orange">Excellence Guaranteed</span>
            </h3>
            <p className="text-xl text-gray-300 mb-8">
              We don't just make race suits. We craft professional-grade equipment that keeps you safe and makes you look like a champion.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="bg-black/40 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl mb-3">✅</div>
                <div className="font-semibold text-lg mb-2">Quality Guarantee</div>
                <div className="text-gray-400 text-sm">Premium materials and expert craftsmanship on every suit</div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl mb-3">🛡️</div>
                <div className="font-semibold text-lg mb-2">Safety Certified</div>
                <div className="text-gray-400 text-sm">Full SFI 3.2A/5 certification for maximum protection</div>
              </div>

              <div className="bg-black/40 rounded-xl p-6 border border-gray-800">
                <div className="text-3xl mb-3">💯</div>
                <div className="font-semibold text-lg mb-2">Perfect Fit Promise</div>
                <div className="text-gray-400 text-sm">Custom measurements mean perfect comfort every time</div>
              </div>
            </div>

            <a
              href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=trusted-racers"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-premium inline-block"
            >
              <span className="relative z-10">START YOUR FREE DESIGN</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
