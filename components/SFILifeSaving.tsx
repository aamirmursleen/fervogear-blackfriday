export default function SFILifeSaving() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-red-950/20 to-black relative overflow-hidden">
      {/* Dramatic background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-red-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Urgent Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-full px-6 py-2 text-red-500 font-semibold text-sm mb-6 animate-pulse">
            ⚠️ LIFE-SAVING PROTECTION
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            <span className="text-white">Your Life is Worth More Than</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">Saving a Few Dollars</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            When seconds matter, <span className="text-red-400 font-bold">SFI-5 certification could be the difference</span> between walking away and everything else.
          </p>
        </div>

        {/* Emotional Story */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-red-500/50 rounded-3xl p-10 md:p-12 mb-12 shadow-2xl">
          <div className="text-center mb-8">
            <div className="text-6xl mb-4">🔥</div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Every Second Counts in a Fire
            </h3>
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              In a racing accident, fire can spread in <span className="text-red-400 font-bold">under 3 seconds</span>. Your suit isn't just gear—it's your <span className="text-white font-bold">life insurance policy</span> on the track.
            </p>
          </div>

          {/* Life-Saving Features */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {[
              {
                icon: '🛡️',
                title: 'Double-Layer Protection',
                benefit: 'Twice the fire resistance. Twice the protection. Gives you critical extra seconds to escape.',
              },
              {
                icon: '⏱️',
                title: 'SFI 3.2A/5 Rated',
                benefit: 'Tested to withstand intense flames. Required by most professional racing series. Your family needs you to have it.',
              },
              {
                icon: '🧬',
                title: 'Nomex® Technology',
                benefit: 'Won\'t melt into your skin. Self-extinguishing. Proven to save lives in real crashes.',
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-black/60 border border-red-500/30 rounded-2xl p-6 hover:border-red-500 transition-all"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{item.title}</h4>
                <p className="text-gray-300 leading-relaxed">{item.benefit}</p>
              </div>
            ))}
          </div>

          {/* Direct Response Copy */}
          <div className="bg-red-500/10 border-2 border-red-500/30 rounded-2xl p-8 mb-8">
            <h4 className="text-2xl font-bold text-white mb-4 text-center">Think About This...</h4>
            <div className="space-y-4 text-lg text-gray-300">
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl flex-shrink-0">→</span>
                <span>Would you <strong className="text-white">risk your life</strong> to save $300 on a cheaper suit?</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl flex-shrink-0">→</span>
                <span>What would your <strong className="text-white">family say</strong> if they knew you were racing without proper protection?</span>
              </p>
              <p className="flex items-start gap-3">
                <span className="text-red-500 text-2xl flex-shrink-0">→</span>
                <span>Can you afford <strong className="text-white">NOT</strong> to have the best protection available?</span>
              </p>
            </div>
          </div>

          {/* Social Proof */}
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6 mb-8">
            <p className="text-center text-xl text-gray-300 leading-relaxed">
              <span className="text-green-400 font-bold">1,015+ professional racers</span> trust their lives to FervoGear USA SFI-5 suits.
              <span className="block mt-2 text-white font-semibold">They choose safety. You should too.</span>
            </p>
          </div>

          {/* Urgent CTA */}
          <div className="text-center">
            <p className="text-gray-400 mb-6 text-lg">
              Don't wait until it's too late. Protect yourself NOW.
            </p>
            <a
              href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=sfi-life-saving-section"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-orange-600 text-white font-bold text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-2xl"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              GET MY LIFE-SAVING SFI-5 SUIT
            </a>
            <p className="text-gray-500 mt-6 text-sm">
              ✓ SFI 3.2A/5 Certified • ✓ Double-Layer Nomex® • ✓ Special Offer: $899 (Save $700.95)
            </p>
          </div>
        </div>

        {/* Technical Note */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm italic">
            Note: SFI-5 suits feature embroidery customization only (heat-sealed graphics not permitted for safety certification).
          </p>
        </div>
      </div>
    </section>
  );
}
