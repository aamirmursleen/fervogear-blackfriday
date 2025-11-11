export default function PainSolution() {
  const problems = [
    {
      icon: '😤',
      title: 'Weeks or Months of Waiting',
      pain: 'Other brands take 8-12 weeks to deliver. Racing season doesn\'t wait!',
      solution: '3.5 weeks - fastest turnaround in the industry'
    },
    {
      icon: '💸',
      title: 'Overpriced "Premium" Suits',
      pain: 'Other brands charge $1,500+ for basic customization options',
      solution: 'Premium quality, 40% less. Plus price match guarantee'
    },
    {
      icon: '🎨',
      title: 'Limited Customization',
      pain: 'Stuck with templates. Extra fees for each logo or color change',
      solution: 'UNLIMITED customization, revisions, logos - all FREE'
    },
    {
      icon: '📏',
      title: 'Poor Fit from Generic Sizing',
      pain: 'Off-the-shelf suits never fit right. Uncomfortable and restrictive',
      solution: 'Custom tailored to YOUR exact measurements'
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,107,0,0.3)_50%,transparent_75%)] bg-[length:60px_60px]"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Tired of</span>{' '}
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Overpriced</span>
            <br />
            <span className="bg-gradient-to-r from-red-500 to-orange-600 bg-clip-text text-transparent">Slow</span>{' '}
            <span className="text-white">Race Suits?</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            We solved the problems that frustrate every racer
          </p>
        </div>

        {/* Problem/Solution Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {problems.map((item, index) => (
            <div
              key={index}
              className="relative group"
            >
              {/* Card */}
              <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 group-hover:border-red-500/50 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-500/20">
                {/* Icon */}
                <div className="text-6xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-red-400 transition-colors">
                  {item.title}
                </h3>

                {/* Problem (with red X) */}
                <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4 mb-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ✕
                    </div>
                    <p className="text-red-300 leading-relaxed">{item.pain}</p>
                  </div>
                </div>

                {/* Solution (with green check) */}
                <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      ✓
                    </div>
                    <p className="text-green-300 font-semibold leading-relaxed">{item.solution}</p>
                  </div>
                </div>

                {/* Decorative line */}
                <div className="mt-6 h-1 bg-gradient-to-r from-red-500 via-brand-orange to-green-500 rounded-full w-0 group-hover:w-full transition-all duration-1000"></div>
              </div>

              {/* Glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-red-500 to-brand-orange rounded-3xl opacity-0 group-hover:opacity-10 blur-xl transition-opacity -z-10"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl p-12 shadow-2xl">
            <h3 className="text-4xl font-bold text-white mb-4">
              Experience the FervoGear Difference
            </h3>
            <p className="text-white/90 text-xl mb-8">
              Join 1,015+ racers who made the switch and never looked back
            </p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-white text-brand-orange font-bold text-xl px-12 py-5 rounded-xl hover:scale-105 transition-transform shadow-xl"
            >
              START MY FREE DESIGN NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
