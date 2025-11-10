const CTA_LINK = 'https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=trusted-racers';

export default function FreeDesignCTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-orange/5 to-transparent"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="premium-card text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-2xl p-6 glow-orange">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
          </div>

          {/* Headline */}
          <h2 className="section-heading-premium mb-4">
            Get a <span className="text-brand-orange">FREE</span> Design from Your Dedicated Designer
          </h2>

          <p className="section-subheading-premium max-w-3xl mx-auto">
            Fill out our <span className="text-brand-orange font-semibold">30-second form</span> and get paired with your dedicated graphic designer. Work together via call, text, or email until your design is absolutely perfect.
            <span className="block mt-4 text-white font-semibold">No payment. No credit card. See your exact suit before you buy.</span>
          </p>

          {/* Process steps */}
          <div className="grid md:grid-cols-3 gap-8 my-16">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-brand-orange">1</span>
              </div>
              <h3 className="text-xl font-semibold">30-Second Form</h3>
              <p className="text-gray-400 text-sm">Quick form to share your vision: colors, logos, sponsors, style preferences</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-brand-orange">2</span>
              </div>
              <h3 className="text-xl font-semibold">Dedicated Designer</h3>
              <p className="text-gray-400 text-sm">Get paired with your personal graphic designer. Work together via call, text, or email.</p>
            </div>

            <div className="space-y-4">
              <div className="w-16 h-16 bg-brand-orange/10 rounded-xl flex items-center justify-center mx-auto">
                <span className="text-3xl font-bold text-brand-orange">3</span>
              </div>
              <h3 className="text-xl font-semibold">Unlimited Revisions</h3>
              <p className="text-gray-400 text-sm">Request changes until perfect. Only pay when you're 100% satisfied with the design.</p>
            </div>
          </div>

          {/* Benefits grid */}
          <div className="grid md:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {[
              { icon: '✓', text: 'No credit card required', color: 'text-green-500' },
              { icon: '✓', text: 'Professional 3D mockup in 24-48hrs', color: 'text-green-500' },
              { icon: '✓', text: 'Unlimited design revisions', color: 'text-green-500' },
              { icon: '✓', text: 'Expert design consultation included', color: 'text-green-500' },
            ].map((item, index) => (
              <div key={index} className="flex items-center gap-3 bg-gray-900/50 rounded-lg p-4">
                <span className={`text-2xl ${item.color}`}>{item.icon}</span>
                <span className="text-gray-300">{item.text}</span>
              </div>
            ))}
          </div>

          {/* Main CTA */}
          <a
            href={CTA_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="cta-button-premium inline-block text-xl px-16 py-6"
          >
            <span className="relative z-10 flex items-center gap-3">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
              GET MY FREE DESIGN MOCKUP
            </span>
          </a>

          <p className="text-gray-500 mt-6 text-sm">
            🔒 Secure • ⚡ 30 seconds to complete • 📞 Work directly with your designer via call/text/email • 💯 Zero risk
          </p>

          {/* Social proof */}
          <div className="mt-12 pt-12 border-t border-gray-800">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-orange to-orange-600 border-2 border-gray-900 flex items-center justify-center text-xs font-bold">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <div className="text-left">
                  <div className="text-sm font-semibold">500+ Racers</div>
                  <div className="text-xs text-gray-500">Already designed their suits</div>
                </div>
              </div>

              <div className="text-yellow-400 text-2xl">
                ★★★★★
              </div>

              <div className="text-left">
                <div className="text-sm font-semibold">4.9 Average Rating</div>
                <div className="text-xs text-gray-500">From verified customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
