export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Share Your Vision',
      description: 'Tell us your colors, logos, sponsors, and style preferences. Upload reference images if you have them.',
      icon: '💭'
    },
    {
      number: '2',
      title: 'Get FREE Mockup',
      description: 'Receive a professional mockup of your custom suit within 3 hours during business hours (max 24 hours). No payment required yet.',
      icon: '🎨'
    },
    {
      number: '3',
      title: 'Refine Design',
      description: 'Request unlimited changes until your design is absolutely perfect. We don\'t start production until you say so.',
      icon: '✨'
    },
    {
      number: '4',
      title: 'Send Measurements',
      description: 'Follow our simple measurement guide or upload measurements from your current suit. Perfect fit guaranteed.',
      icon: '📏'
    },
    {
      number: '5',
      title: 'Receive & Race',
      description: 'Your custom SFI-5 suit arrives in just 3.5 weeks. Put it on and dominate the track.',
      icon: '🏁'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            5 Simple Steps to Your Dream Suit
          </h2>
          <p className="section-subheading">
            The easiest custom race suit experience in the industry
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange via-brand-orange to-brand-orange" style={{ top: '60px' }}></div>

          <div className="grid md:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-gradient-to-br from-brand-orange to-orange-600 w-24 h-24 rounded-full flex items-center justify-center text-4xl font-bold mx-auto mb-4 shadow-lg relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {step.number}
                  </div>
                </div>
                <div className="text-4xl mb-3">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-brand-orange">
                  {step.title}
                </h3>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <div className="bg-gray-800 border border-gray-700 rounded-xl p-8 inline-block">
            <div className="text-5xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold mb-2">
              Industry-Leading 3.5 Week Turnaround
            </h3>
            <p className="text-gray-300 mb-6">
              While competitors take 8-12 weeks, we deliver your custom suit in half the time
            </p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              className="cta-button inline-block"
            >
              START YOUR ORDER TODAY
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
