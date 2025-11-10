export default function Scarcity() {
  return (
    <section className="py-12 px-4 bg-gradient-to-r from-red-900/20 to-brand-orange/20">
      <div className="max-w-5xl mx-auto">
        <div className="bg-gray-900 border-2 border-brand-orange rounded-xl p-8 md:p-12 text-center">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Limited to <span className="text-brand-orange">47 Suits Only</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Our custom shop can only produce 47 suits at this heavily discounted Black Friday price.
          </p>
          <div className="bg-black/50 rounded-lg p-6 mb-6">
            <div className="text-5xl font-bold text-brand-orange mb-2">
              32 / 47
            </div>
            <div className="text-gray-400">
              Suits claimed • Only 15 remaining
            </div>
            <div className="w-full bg-gray-700 rounded-full h-4 mt-4">
              <div
                className="bg-gradient-to-r from-brand-orange to-red-500 h-4 rounded-full transition-all duration-500"
                style={{ width: '68%' }}
              ></div>
            </div>
          </div>
          <p className="text-yellow-400 font-semibold text-lg mb-6">
            🔥 Once we hit 47 orders, this deal is GONE forever
          </p>
          <a
            href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
            className="cta-button inline-block text-xl"
          >
            SECURE YOUR SPOT NOW
          </a>
          <p className="text-gray-400 mt-4 text-sm">
            This weekend only • Offer expires Sunday 11:59 PM PST
          </p>
        </div>
      </div>
    </section>
  );
}
