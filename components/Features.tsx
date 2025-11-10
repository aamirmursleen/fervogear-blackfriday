export default function Features() {
  const features = [
    {
      icon: '🔥',
      title: 'SFI 3.2A/5 Certified',
      description: 'Highest level fire protection for professional racing'
    },
    {
      icon: '🧵',
      title: 'Premium Nomex® Fabric',
      description: 'Genuine DuPont Nomex double-layer construction'
    },
    {
      icon: '🎨',
      title: 'Fully Customizable',
      description: 'Colors, logos, sponsors, graphics - 100% yours'
    },
    {
      icon: '✂️',
      title: 'Custom Tailored Fit',
      description: 'Made to your exact measurements for perfect comfort'
    },
    {
      icon: '⚡',
      title: '3.5 Week Turnaround',
      description: 'Fastest production time in the racing industry'
    },
    {
      icon: '🚚',
      title: 'FREE USA Shipping',
      description: 'Fast and insured delivery at no extra cost'
    },
    {
      icon: '💰',
      title: 'Price Match Guarantee',
      description: 'Find a better price? We\'ll match it'
    },
    {
      icon: '🎁',
      title: 'FREE Design Mockup',
      description: 'See your exact suit before paying a dime'
    },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Premium Features. Unbeatable Value.
          </h2>
          <p className="section-subheading">
            Everything you need in a professional race suit
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl text-center hover:bg-gray-800 transition-all duration-300 border border-gray-800 hover:border-brand-orange"
            >
              <div className="text-5xl mb-3">{feature.icon}</div>
              <h3 className="font-bold text-lg mb-2 text-brand-orange">
                {feature.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Guarantee section */}
        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 border-2 border-green-500/30">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-4xl mb-3">✅</div>
              <h3 className="font-bold text-xl mb-2">Quality Guarantee</h3>
              <p className="text-gray-300 text-sm">Premium materials and craftsmanship on every suit</p>
            </div>
            <div>
              <div className="text-4xl mb-3">🛡️</div>
              <h3 className="font-bold text-xl mb-2">Safety Certified</h3>
              <p className="text-gray-300 text-sm">Full SFI 3.2A/5 certification for maximum protection</p>
            </div>
            <div>
              <div className="text-4xl mb-3">💯</div>
              <h3 className="font-bold text-xl mb-2">Perfect Fit Promise</h3>
              <p className="text-gray-300 text-sm">Custom measurements mean perfect comfort every time</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
