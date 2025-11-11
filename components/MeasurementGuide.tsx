'use client';

import Script from 'next/script';
import Image from 'next/image';

export default function MeasurementGuide() {
  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 left-1/3 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
            📏 PERFECT FIT GUARANTEED
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="text-white">How to</span>{' '}
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Measure Yourself</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Watch our video guide or scan the QR code to get perfect measurements at home
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left: Video */}
          <div className="space-y-8">
            {/* Wistia Video */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-black">
                <Script
                  src="https://fast.wistia.com/player.js"
                  strategy="lazyOnload"
                />
                <Script
                  src="https://fast.wistia.com/embed/sfn5t0l27s.js"
                  strategy="lazyOnload"
                />
                <div className="wistia_responsive_padding" style={{ padding: '50% 0 0 0', position: 'relative' }}>
                  <div className="wistia_responsive_wrapper" style={{ height: '100%', left: 0, position: 'absolute', top: 0, width: '100%' }}>
                    <div
                      className="wistia_embed wistia_async_sfn5t0l27s videoFoam=true"
                      style={{ height: '100%', position: 'relative', width: '100%' }}
                    >
                      &nbsp;
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* QR Code Card */}
            <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-brand-orange/50 rounded-3xl p-8 text-center hover:scale-105 transition-transform">
              <h3 className="text-2xl font-bold text-white mb-6">
                📱 Watch on Your Phone
              </h3>
              <div className="bg-white rounded-2xl p-6 inline-block mb-6">
                <Image
                  src="https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=https://fervo.me/video&color=FF6019"
                  alt="Scan QR Code for Measurement Video"
                  width={300}
                  height={300}
                  className="w-48 h-48"
                  unoptimized
                />
              </div>
              <p className="text-gray-400">
                Scan to watch the measurement video while taking your measurements
              </p>
            </div>
          </div>

          {/* Right: Guidelines & Actions */}
          <div className="space-y-8">

            {/* Measurement Tips */}
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-3xl">✓</span>
                Measurement Guidelines
              </h3>
              <ul className="space-y-4">
                {[
                  'Wear form-fitting clothes (underwear recommended)',
                  'Use cloth tape close to skin – exact measurements only',
                  'Inches are preferred for accurate measurements',
                  'Have someone help you for best results',
                ].map((tip, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-300">
                    <span className="text-brand-orange text-xl flex-shrink-0">•</span>
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Download Buttons */}
            <div className="space-y-4">
              <a
                href="https://drive.google.com/uc?export=download&id=1aDti-YBiv2rnAjYGOobNd7B9LNw5wVRK"
                download
                className="group block w-full bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold text-lg px-8 py-5 rounded-xl text-center hover:scale-105 transition-transform shadow-xl"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download Measurement Video
                </span>
              </a>

              <a
                href="https://fervogear.com/wp-content/uploads/2025/10/FervoGear-Updated-Measurement-Form-Updated-2025.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-white/10 border-2 border-white/20 hover:border-brand-orange text-white font-semibold text-lg px-8 py-5 rounded-xl text-center transition-all"
              >
                <span className="flex items-center justify-center gap-3">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  View Measurement Form (PDF)
                </span>
              </a>
            </div>

            {/* Help Section */}
            <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-brand-orange/30 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-2xl font-bold text-white mb-3">Need Help with Measurements?</h3>
              <p className="text-gray-400 mb-6">Our experts will walk you through the process</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="tel:+14094040962"
                  className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Call: (409) 404-0962
                </a>
                <a
                  href="mailto:support@fervogear.com"
                  className="flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-xl transition-all hover:scale-105"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Support
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
