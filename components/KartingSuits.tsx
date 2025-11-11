export default function KartingSuits() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-blue-500/10 border border-blue-500/30 rounded-full px-6 py-2 text-blue-500 font-semibold text-sm mb-6">
            🏎️ KARTING & RECREATIONAL RACING
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">Custom Karting Suits</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">Starting at Just $349</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            For karting and recreational racing. Maximum customization freedom with unlimited design options.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left: Pricing & Info */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-blue-500/50 rounded-3xl p-8 shadow-2xl">
              <div className="text-center mb-6">
                <div className="text-gray-400 text-sm mb-2">Karting Suits Starting At</div>
                <div className="text-6xl md:text-7xl font-black bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  $349
                </div>
                <div className="text-gray-500">Non-SFI • Perfect for Karting & Recreation</div>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3 bg-blue-500/10 rounded-xl p-4">
                  <span className="text-3xl">✓</span>
                  <span className="text-white font-medium">100% Custom Design - Your Way</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/10 rounded-xl p-4">
                  <span className="text-3xl">✓</span>
                  <span className="text-white font-medium">3.5 Week Fast Turnaround</span>
                </div>
                <div className="flex items-center gap-3 bg-blue-500/10 rounded-xl p-4">
                  <span className="text-3xl">✓</span>
                  <span className="text-white font-medium">FREE Design Mockup & Revisions</span>
                </div>
              </div>

              <a
                href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=karting-suits-section"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-bold text-lg px-8 py-4 rounded-xl hover:scale-105 transition-transform shadow-xl"
              >
                GET MY KARTING SUIT - $349
              </a>
            </div>
          </div>

          {/* Right: Design Options */}
          <div>
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-3xl font-bold text-white mb-6">
                <span className="text-blue-500">Unlimited</span> Design Options
              </h3>

              <div className="space-y-6">
                {/* Karting Suit Designs */}
                <div className="bg-blue-500/10 border border-blue-500/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-blue-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🎨</span>
                    Karting Suits ($349) - All Design Methods
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <div>
                        <span className="text-white font-semibold block">Embroidery</span>
                        <span className="text-gray-400 text-sm">Classic stitched logos and text</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <div>
                        <span className="text-white font-semibold block">Sublimation Printing</span>
                        <span className="text-gray-400 text-sm">Full-color graphics, photos, gradients</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <div>
                        <span className="text-white font-semibold block">Digital Printing</span>
                        <span className="text-gray-400 text-sm">Complex designs, unlimited colors</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SFI Suit Designs (Comparison) */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6">
                  <h4 className="text-xl font-bold text-red-400 mb-4 flex items-center gap-2">
                    <span className="text-2xl">🔥</span>
                    SFI-5 Suits ($799) - Embroidery Only
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                      <div>
                        <span className="text-white font-semibold block">Embroidery Only</span>
                        <span className="text-gray-400 text-sm">Required for SFI certification compliance</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="text-yellow-500 text-xl flex-shrink-0">⚠</span>
                      <div>
                        <span className="text-gray-300 font-semibold block">No Sublimation/Printing</span>
                        <span className="text-gray-500 text-sm">Heat-sealed graphics don't meet SFI standards</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Info Box */}
              <div className="mt-6 bg-gray-800/50 rounded-xl p-4">
                <p className="text-gray-400 text-sm leading-relaxed">
                  <strong className="text-white">Choose based on your needs:</strong> Karting/recreational racing? Start at $349 with full design freedom. Professional/sanctioned racing? SFI-5 at $799 saves your life.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Karting Suit Card */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-500/50 rounded-3xl p-8 hover:scale-105 transition-transform">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🏎️</div>
              <h3 className="text-2xl font-bold text-blue-400 mb-2">Karting Suits</h3>
              <div className="text-4xl font-black text-white mb-2">$349</div>
              <div className="text-gray-400 text-sm">Starting Price</div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Non-SFI (recreational use)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Embroidery + Sublimation + Digital Print</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Maximum design freedom</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Photos, gradients, complex graphics</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>3.5 week delivery</span>
              </li>
            </ul>

            <a
              href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=karting-price-card"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white text-center font-bold py-3 rounded-xl hover:scale-105 transition-transform"
            >
              START KARTING DESIGN
            </a>
          </div>

          {/* SFI Suit Card */}
          <div className="bg-gradient-to-br from-red-900/20 to-orange-900/20 border-2 border-red-500/50 rounded-3xl p-8 hover:scale-105 transition-transform">
            <div className="text-center mb-6">
              <div className="text-5xl mb-3">🔥</div>
              <h3 className="text-2xl font-bold text-red-400 mb-2">SFI-5 Suits</h3>
              <div className="text-4xl font-black text-white mb-2">$799</div>
              <div className="text-gray-400 text-sm">Black Friday Price (Save $926!)</div>
            </div>

            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>SFI 3.2A/5 Certified (professional)</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Embroidery customization only</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Double-layer Nomex® fire protection</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>Life-saving in fire situations</span>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <span className="text-green-500">✓</span>
                <span>+ FREE Gloves ($150 value)</span>
              </li>
            </ul>

            <a
              href="https://fervogear.typeform.com/custom?utm_source=website&utm_medium=custom-race-suit-landing&utm_campaign=sfi-price-card"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-red-600 to-orange-600 text-white text-center font-bold py-3 rounded-xl hover:scale-105 transition-transform"
            >
              START SFI-5 DESIGN
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
