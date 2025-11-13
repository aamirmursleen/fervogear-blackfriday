export default function FinalCTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-brand-orange via-orange-600 to-red-600 relative overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.1) 35px, rgba(255,255,255,.1) 70px)',
        }}></div>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 md:p-12 border-2 border-white/30">
          <div className="text-6xl md:text-8xl mb-6">🏁</div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Don't Miss This Deal
          </h2>

          <p className="text-2xl md:text-3xl mb-6">
            Black Friday Weekend Only
          </p>

          <div className="bg-black/40 rounded-xl p-6 mb-8 inline-block">
            <div className="text-5xl md:text-6xl font-bold mb-2">
              SAVE 50% ($800.95)
            </div>
            <div className="text-xl">
              Premium SFI-5 Suit + FREE Gloves + Shoes ($400 Value)
            </div>
            <div className="text-sm text-gray-300 mt-2">
              🎁 Black Friday Exclusive Deal 🎁
            </div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center justify-center gap-3 text-xl">
              <span className="text-2xl">✓</span>
              <span>Only 15 suits left at this price</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
              <span className="text-2xl">✓</span>
              <span>Offer expires Sunday at midnight</span>
            </div>
            <div className="flex items-center justify-center gap-3 text-xl">
              <span className="text-2xl">✓</span>
              <span>Won't see this price again until 2026</span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              className="bg-white text-brand-orange font-bold py-6 px-12 rounded-lg text-2xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl inline-block"
            >
              CLAIM MY BLACK FRIDAY DEAL
            </a>
          </div>

          <p className="text-lg opacity-90">
            🔒 Secure checkout • ✓ No credit card for FREE mockup • 🚚 FREE USA shipping
          </p>
        </div>

        <div className="mt-8 text-white/80 text-sm">
          <p>This is a limited-time Black Friday offer. Once 47 orders are claimed or Sunday 11:59 PM PST passes, this deal is permanently gone.</p>
        </div>
      </div>
    </section>
  );
}
