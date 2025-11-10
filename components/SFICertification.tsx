import Image from 'next/image';

export default function SFICertification() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 text-green-500 font-semibold text-sm mb-6 animate-bounce">
            🛡️ CERTIFIED SAFETY
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">SFI Approved</span>
            <br />
            <span className="text-white">Manufacturer</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Your assurance of safety, quality, and professional-grade protection
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Certificate - CLEAN DISPLAY */}
          <div className="relative group">
            {/* Glow effect */}
            <div className="absolute -inset-4 bg-gradient-to-r from-green-500 to-emerald-500 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>

            {/* Certificate card - professional presentation */}
            <div className="relative bg-gradient-to-br from-gray-900 to-black border-2 border-green-500/50 rounded-3xl p-8 shadow-2xl transform group-hover:scale-105 transition-transform duration-500">
              {/* SFI Approved Badge */}
              <div className="absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full p-5 shadow-xl animate-bounce z-20">
                <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>

              {/* Certificate icon/graphic instead of photo */}
              <div className="bg-white rounded-2xl p-12 mb-6">
                <div className="text-center">
                  {/* SFI Logo placeholder */}
                  <div className="text-8xl mb-4">🛡️</div>
                  <div className="border-4 border-green-500 rounded-xl p-8">
                    <div className="text-green-600 font-black text-4xl mb-2">SFI</div>
                    <div className="text-gray-700 font-bold text-xl mb-4">CERTIFIED MANUFACTURER</div>
                    <div className="flex gap-4 justify-center mb-4">
                      <div className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg">
                        SFI 3.2A/1
                      </div>
                      <div className="bg-green-100 text-green-800 font-bold px-4 py-2 rounded-lg">
                        SFI 3.2A/5
                      </div>
                    </div>
                    <div className="text-gray-600 font-semibold">FervoGear, LLC</div>
                    <div className="text-gray-500 text-sm mt-2">McKinney, Texas</div>
                  </div>
                </div>
              </div>

              {/* Trust badges */}
              <div className="grid grid-cols-2 gap-3 text-center">
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                  <div className="text-2xl mb-1">✅</div>
                  <div className="text-white font-semibold text-sm">Official SFI</div>
                </div>
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-3">
                  <div className="text-2xl mb-1">🔥</div>
                  <div className="text-white font-semibold text-sm">Fire Tested</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6">
            <h3 className="text-4xl font-bold text-white mb-6">
              Certified by the <span className="text-green-500">SFI Foundation</span>
            </h3>

            <p className="text-xl text-gray-300 leading-relaxed">
              FervoGear offers top-notch <strong className="text-white">SFI 3.2A/1</strong> and <strong className="text-white">SFI 3.2A/5</strong> certified driver suits. These certifications, granted by the respected SFI Foundation, ensure our commitment to safety in motorsports.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                { icon: '🔥', title: 'Rigorous Fire Testing', description: 'Exceptional fire resistance crucial for protecting drivers in extreme conditions' },
                { icon: '🌡️', title: 'TPP Rating Certified', description: 'Thermal Protective Performance measures ability to withstand flames and radiant heat' },
                { icon: '🧵', title: 'Thread & Zipper Heat Resistance', description: 'Every component tested for heat resistance and durability' },
                { icon: '📏', title: 'Thermal Shrinkage Tested', description: 'Maintains proper fit even after exposure to extreme heat' },
              ].map((feature, index) => (
                <div key={index} className="flex items-start gap-4 bg-gray-900/50 border border-gray-800 rounded-xl p-4 hover:border-green-500/50 transition-all">
                  <div className="text-3xl">{feature.icon}</div>
                  <div>
                    <h4 className="font-bold text-lg mb-1 text-white">{feature.title}</h4>
                    <p className="text-gray-400 text-sm">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* SFI Info Box */}
            <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-2 border-green-500/30 rounded-2xl p-6">
              <h4 className="font-bold text-xl mb-3 text-green-400">40+ Years of Safety Standards</h4>
              <p className="text-gray-300 leading-relaxed">
                The SFI Foundation has been setting motorsport safety standards for over four decades. When you see the SFI tag on your FervoGear suit, you know you're wearing equipment that meets the highest safety requirements in professional racing.
              </p>
            </div>

            {/* CTA */}
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-500 text-white text-center font-bold py-5 rounded-xl hover:scale-105 transition-transform shadow-xl"
            >
              ORDER YOUR SFI-CERTIFIED SUIT
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
