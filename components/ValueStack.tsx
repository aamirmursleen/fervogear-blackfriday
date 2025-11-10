export default function ValueStack() {
  const items = [
    { name: 'Double Layer SFI-5 Nomex Race Suit', value: '$1,100' },
    { name: 'Premium Matching Racing Gloves', value: '$150' },
    { name: 'Custom Design Service (Unlimited Revisions)', value: '$200' },
    { name: 'Professional 3D Mockup', value: '$75' },
    { name: 'Custom Tailoring to Your Measurements', value: '$150' },
    { name: 'FREE USA Shipping', value: '$50' },
  ];

  const totalValue = 1725;
  const dealPrice = 799;
  const savings = totalValue - dealPrice;

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-transparent to-brand-orange/5">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Here's Everything You Get
          </h2>
          <p className="text-xl text-gray-300">
            This Black Friday weekend only - complete race suit package
          </p>
        </div>

        <div className="bg-gray-900 rounded-xl p-6 md:p-8 border-2 border-brand-orange/30 shadow-2xl">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-4 border-b border-gray-800 last:border-b-0"
            >
              <div className="flex items-start gap-3">
                <span className="text-brand-orange text-xl">✓</span>
                <span className="text-lg">{item.name}</span>
              </div>
              <span className="text-gray-400 font-semibold whitespace-nowrap ml-4">
                {item.value}
              </span>
            </div>
          ))}

          <div className="mt-6 pt-6 border-t-2 border-brand-orange/50">
            <div className="flex justify-between items-center mb-4">
              <span className="text-xl font-semibold">Total Value:</span>
              <span className="text-2xl font-bold text-gray-400 line-through">
                ${totalValue}
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span className="text-2xl font-bold">Black Friday Price:</span>
              <span className="text-4xl font-bold text-brand-orange">
                ${dealPrice}
              </span>
            </div>
            <div className="bg-green-500 text-white text-center py-4 rounded-lg">
              <span className="text-2xl font-bold">
                YOU SAVE ${savings}
              </span>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              className="cta-button inline-block"
            >
              CLAIM THIS DEAL NOW
            </a>
          </div>
        </div>

        <div className="mt-6 text-center text-yellow-400 font-semibold">
          ⚠️ Only 47 suits available at this price
        </div>
      </div>
    </section>
  );
}
