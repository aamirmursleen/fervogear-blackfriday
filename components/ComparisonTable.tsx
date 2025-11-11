export default function ComparisonTable() {
  const features = [
    { name: 'Turnaround Time', fervogear: '3.5 weeks', competitors: '8-12 weeks' },
    { name: 'Starting Price (SFI-5)', fervogear: '$899 (Special Offer)', competitors: '$1,200-$1,500' },
    { name: 'Unlimited Customization', fervogear: true, competitors: false },
    { name: 'FREE Design Mockup', fervogear: true, competitors: '($50-$100 fee)' },
    { name: 'Unlimited Revisions', fervogear: true, competitors: '(2-3 max)' },
    { name: 'Custom Measurements', fervogear: true, competitors: 'Some brands' },
    { name: 'Price Match Guarantee', fervogear: true, competitors: false },
    { name: 'FREE USA Shipping', fervogear: true, competitors: '($25-$50)' },
    { name: 'SFI Certified', fervogear: true, competitors: true },
    { name: 'Payment Plans', fervogear: '4 or 36 months', competitors: 'Limited' },
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-green-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
            HONEST COMPARISON
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">FervoGear vs</span>
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Other Brands</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See why professional racers are switching to FervoGear
          </p>
        </div>

        {/* Comparison Table */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 rounded-3xl overflow-hidden shadow-2xl">
          {/* Table Header */}
          <div className="grid grid-cols-3 gap-4 p-6 bg-gradient-to-r from-gray-800 to-gray-900 border-b border-gray-700">
            <div className="text-gray-400 font-semibold">Feature</div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold px-4 py-2 rounded-xl inline-block">
                FervoGear
              </div>
            </div>
            <div className="text-center text-gray-400 font-semibold">Others</div>
          </div>

          {/* Table Rows */}
          <div className="divide-y divide-gray-800">
            {features.map((feature, index) => (
              <div
                key={index}
                className="grid grid-cols-3 gap-4 p-6 hover:bg-gray-900/50 transition-colors"
              >
                {/* Feature name */}
                <div className="flex items-center">
                  <span className="text-white font-medium">{feature.name}</span>
                </div>

                {/* FervoGear value */}
                <div className="flex items-center justify-center">
                  {typeof feature.fervogear === 'boolean' ? (
                    <div className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">
                      ✓
                    </div>
                  ) : (
                    <span className="text-green-400 font-semibold text-center">{feature.fervogear}</span>
                  )}
                </div>

                {/* Competitors value */}
                <div className="flex items-center justify-center">
                  {typeof feature.competitors === 'boolean' ? (
                    feature.competitors ? (
                      <div className="bg-gray-700 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        ✓
                      </div>
                    ) : (
                      <div className="bg-red-500/20 text-red-400 w-8 h-8 rounded-full flex items-center justify-center font-bold">
                        ✕
                      </div>
                    )
                  ) : (
                    <span className="text-gray-500 text-center text-sm">{feature.competitors}</span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="bg-gradient-to-r from-brand-orange/10 to-orange-600/10 p-8 border-t-2 border-brand-orange/30 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">The Choice is Clear</h3>
            <p className="text-gray-300 mb-6">Better quality, faster delivery, lower price</p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold px-10 py-4 rounded-xl hover:scale-105 transition-transform"
            >
              SWITCH TO FERVOGEAR
            </a>
          </div>
        </div>

        {/* Social proof below */}
        <div className="mt-12 text-center text-gray-400">
          <p className="text-lg mb-4">Don't just take our word for it...</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange">1,015+</div>
              <div className="text-sm">Suits Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange">4.9★</div>
              <div className="text-sm">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-brand-orange">98%</div>
              <div className="text-sm">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
