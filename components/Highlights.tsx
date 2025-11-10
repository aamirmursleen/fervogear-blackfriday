export default function Highlights() {
  const highlights = [
    {
      number: '01',
      icon: '🛡️',
      title: 'SFI Rated',
      description: 'We sell SFI 3.2A/1 & SFI 3.2A/5 certified custom race suits made from Nomex®, designed to keep you safe while you\'re on the track.',
      badge: 'Safety First'
    },
    {
      number: '02',
      icon: '🚚',
      title: 'Free Shipping',
      description: 'Enjoy free shipping within the USA when you order our custom fire suits. Your suit will be delivered within 5-6 weeks. However, we offer an expedited service for delivery within 3.5 weeks.',
      badge: 'USA Wide'
    },
    {
      number: '03',
      icon: '💰',
      title: 'Best Price Match',
      description: 'We match any USA SFI-approved dealer price. Show a lower price and we\'ll match it guaranteed.',
      badge: 'Guaranteed'
    },
  ];

  return (
    <section className="py-20 px-4 bg-black relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Why Choose <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">FervoGear</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Three pillars of excellence that set us apart in the racing industry
          </p>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-brand-orange rounded-3xl p-8 md:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/20"
            >
              {/* Number badge */}
              <div className="absolute top-6 right-6 text-6xl font-black text-brand-orange/10 group-hover:text-brand-orange/20 transition-colors">
                {highlight.number}
              </div>

              {/* Icon */}
              <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {highlight.icon}
              </div>

              {/* Badge */}
              <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-4 py-1 text-brand-orange text-xs font-semibold mb-4">
                {highlight.badge}
              </div>

              {/* Title */}
              <h3 className="text-3xl font-bold mb-4 text-white group-hover:text-brand-orange transition-colors">
                {highlight.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 leading-relaxed text-lg">
                {highlight.description}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-1 bg-gradient-to-r from-brand-orange to-transparent rounded-full w-0 group-hover:w-full transition-all duration-500"></div>

              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        {/* Additional trust indicators */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: '500+', label: 'Suits Delivered' },
            { value: '4.9★', label: 'Average Rating' },
            { value: '3.5wk', label: 'Fast Turnaround' },
            { value: '100%', label: 'Customizable' },
          ].map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-900/50 rounded-2xl border border-gray-800">
              <div className="text-4xl font-bold bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
