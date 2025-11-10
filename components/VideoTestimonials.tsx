'use client';

import Script from 'next/script';

export default function VideoTestimonials() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-heading-premium">
            Built for Champions,{' '}
            <span className="text-brand-orange">Trusted by Racers</span>
          </h2>
          <p className="section-subheading-premium max-w-3xl mx-auto">
            From karting to professional racing, we craft customizable suits that exceed expectations.
          </p>
        </div>

        {/* Video grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Video 1 */}
          <div className="premium-card p-0 overflow-hidden">
            <div className="video-container aspect-[9/16]">
              <Script
                src="https://fast.wistia.com/player.js"
                strategy="lazyOnload"
              />
              <Script
                src="https://fast.wistia.com/embed/2bcif91mif.js"
                strategy="lazyOnload"
              />
              <div
                className="wistia_embed wistia_async_2bcif91mif videoFoam=true"
                style={{ height: '100%', position: 'relative', width: '100%' }}
              >
                &nbsp;
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Professional Quality</h3>
              <p className="text-gray-400 text-sm">See the craftsmanship that goes into every custom suit</p>
            </div>
          </div>

          {/* Video 2 */}
          <div className="premium-card p-0 overflow-hidden">
            <div className="video-container aspect-[9/16]">
              <Script
                src="https://fast.wistia.com/embed/medias/nqivv850r8.jsonp"
                strategy="lazyOnload"
              />
              <Script
                src="https://fast.wistia.com/assets/external/E-v1.js"
                strategy="lazyOnload"
              />
              <div className="wistia_responsive_padding" style={{ padding: '178.61% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div
                    className="wistia_embed wistia_async_nqivv850r8 videoFoam=true"
                    style={{ height: '100%', position: 'relative', width: '100%' }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Custom Designs</h3>
              <p className="text-gray-400 text-sm">Unlimited customization options for your unique style</p>
            </div>
          </div>

          {/* Video 3 */}
          <div className="premium-card p-0 overflow-hidden">
            <div className="video-container aspect-[9/16]">
              <Script
                src="https://fast.wistia.com/embed/medias/s3j7brprkx.jsonp"
                strategy="lazyOnload"
              />
              <Script
                src="https://fast.wistia.com/assets/external/E-v1.js"
                strategy="lazyOnload"
              />
              <div className="wistia_responsive_padding" style={{ padding: '177.78% 0 0 0', position: 'relative' }}>
                <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                  <div
                    className="wistia_embed wistia_async_s3j7brprkx videoFoam=true"
                    style={{ height: '100%', position: 'relative', width: '100%' }}
                  >
                    &nbsp;
                  </div>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-semibold text-lg mb-2">Real Racers</h3>
              <p className="text-gray-400 text-sm">Hear from professional drivers who trust FervoGear</p>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
              500+
            </div>
            <div className="text-gray-400 text-sm">Suits Delivered</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
              4.9★
            </div>
            <div className="text-gray-400 text-sm">Average Rating</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
              3.5wk
            </div>
            <div className="text-gray-400 text-sm">Turnaround</div>
          </div>

          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
              100%
            </div>
            <div className="text-gray-400 text-sm">Customizable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
