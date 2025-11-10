export default function Benefits() {
  const benefits = [
    {
      icon: '🛡️',
      title: 'SFI 3.2A/5 Certified',
      description: 'Maximum protection with double-layer Nomex® fabric. Meets all professional racing safety standards.'
    },
    {
      icon: '🎨',
      title: '100% Customizable',
      description: 'Your colors, your logos, your sponsors, your vision. Unlimited design revisions until perfect.'
    },
    {
      icon: '📏',
      title: 'Tailored to You',
      description: 'Custom measurements for perfect fit. Professional comfort that moves with you on track.'
    },
    {
      icon: '⚡',
      title: '3.5 Week Turnaround',
      description: 'Fastest in the industry. Other brands take 8-12 weeks. We deliver race-ready suits in half the time.'
    },
    {
      icon: '💎',
      title: 'Premium Materials',
      description: 'Genuine Nomex® fire-resistant fabric. Built to last multiple seasons of hard racing.'
    },
    {
      icon: '🎯',
      title: 'No Risk Start',
      description: 'FREE design mockup. No credit card needed. See your exact suit before committing one dollar.'
    },
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Why Professional Drivers Choose FervoGear
          </h2>
          <p className="section-subheading">
            Safety. Speed. Style. No compromises.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-gray-800 hover:border-brand-orange transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="text-5xl mb-4">{benefit.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-brand-orange">
                {benefit.title}
              </h3>
              <p className="text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
