import Image from 'next/image';

const CTA_LINK = 'https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal';

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-orange/10 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left column - Copy */}
          <div className="text-center md:text-left">
            <div className="inline-block bg-brand-orange/20 border-2 border-brand-orange rounded-full px-6 py-2 mb-6">
              <span className="text-brand-orange font-bold">LIMITED QUANTITIES</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Premium SFI-5 Race Suit
              <span className="text-brand-orange"> + FREE Gloves + Shoes</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Double Layer Nomex® Protection. Custom Design. Professional Fit.
            </p>

            {/* Price showcase */}
            <div className="bg-gradient-to-r from-brand-orange/20 to-transparent border-l-4 border-brand-orange p-6 mb-8 rounded-r-lg">
              <div className="flex flex-col md:flex-row items-center md:items-end gap-4 mb-4">
                <div>
                  <div className="text-gray-400 text-sm line-through">Total Value: $1,599.95</div>
                  <div className="text-5xl md:text-6xl font-bold text-brand-orange">$799</div>
                </div>
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg font-bold mb-2">
                  SAVE $800.95
                </div>
              </div>
              <div className="text-xl font-semibold border-t border-gray-700 pt-4">
                + FREE Matching Gloves <span className="text-brand-orange">($200 Value)</span>
              </div>
              <div className="text-xl font-semibold">
                + FREE Matching Shoes <span className="text-brand-orange">($200 Value)</span>
              </div>
              <div className="text-2xl font-bold text-brand-orange mt-2">
                Total Savings: $800.95
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-6">
              <a
                href={CTA_LINK}
                className="cta-button text-center"
                aria-label="Claim Black Friday Deal"
              >
                🔥 CLAIM BLACK FRIDAY DEAL
              </a>
              <a
                href="tel:4094040962"
                className="cta-button-secondary text-center"
                aria-label="Call FervoGear"
              >
                📞 (409) 404-0962
              </a>
            </div>

            <p className="text-gray-400 text-sm">
              ✓ No credit card required to start &nbsp;•&nbsp; ✓ FREE design mockup &nbsp;•&nbsp; ✓ FREE USA shipping
            </p>
          </div>

          {/* Right column - Hero Image */}
          <div className="relative">
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://fervogear.com/wp-content/uploads/2025/10/Helloween.jpg"
                alt="Custom FervoGear SFI-5 Race Suit"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -top-4 -right-4 bg-brand-orange text-white rounded-full w-32 h-32 flex flex-col items-center justify-center font-bold shadow-xl transform rotate-12">
              <div className="text-3xl">$801</div>
              <div className="text-sm">OFF</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
