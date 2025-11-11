import Image from 'next/image';

export default function AboutUs() {
  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/10 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
            OUR STORY
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">FervoGear's Journey of</span>
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Innovation</span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto italic">
            Driving Innovation for Winning Performance
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image */}
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl opacity-20 blur-2xl group-hover:opacity-40 transition-opacity"></div>
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="https://fervogear.com/wp-content/uploads/2024/04/About-us-main-image.jpg"
                alt="FervoGear Team"
                fill
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            </div>
          </div>

          {/* Right: Story */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-3xl p-8">
              <h3 className="text-3xl font-bold mb-6 text-brand-orange">Our Mission</h3>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                At FervoGear USA, we're dedicated to constant research to bring you the best in racing gear innovation. With over <strong className="text-white">45 years of combined team experience</strong> and close collaboration with professional drivers, we make custom fire suits that meet the demanding standards of the racing industry.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Founded by a group of passionate racing fans, FervoGear USA has become a <strong className="text-brand-orange">leading racing suit manufacturer</strong> in motorsports by recognizing and solving drivers' specific needs and problems.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-orange mb-1">45+</div>
                <div className="text-gray-500 text-xs">Years Experience</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-orange mb-1">1015+</div>
                <div className="text-gray-500 text-xs">Suits & Counting</div>
              </div>
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-4 text-center">
                <div className="text-3xl font-bold text-brand-orange mb-1">100%</div>
                <div className="text-gray-500 text-xs">Custom</div>
              </div>
            </div>
          </div>
        </div>

        {/* Nomex Section */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-brand-orange/30 rounded-3xl p-12 mb-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-4xl font-bold mb-6">
                Why <span className="text-brand-orange">Nomex® Meta-Aramid</span> Fabric
              </h3>
              <p className="text-xl text-gray-400 italic mb-6">
                Unmatched Comfort, Ultimate Safety
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                We use only the finest materials, such as fire-retardant <strong className="text-brand-orange">Nomex® meta-aramid</strong>, to construct our racing suits. This ensures maximum protection, durability, and comfort for the driver.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                It's super strong fabric that can stand up to heat and keep you safe, kind of like a <strong className="text-white">superhero's cape!</strong> 🦸‍♂️
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: '🔥', title: 'Fire Resistant', description: 'Withstands extreme heat' },
                { icon: '💪', title: 'Super Strong', description: 'Durable meta-aramid fibers' },
                { icon: '😌', title: 'Lightweight', description: 'Comfort without compromise' },
                { icon: '✅', title: 'Industry Standard', description: 'Trusted by professionals' },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-black/60 border border-gray-800 rounded-2xl p-6 text-center hover:border-brand-orange/50 transition-all hover:scale-105"
                >
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h4 className="font-bold mb-2 text-white">{item.title}</h4>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quality Assurance */}
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold mb-8">
            <span className="text-white">FervoGear</span>{' '}
            <span className="text-brand-orange">Quality Assurance</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: '🛡️',
              title: 'Protection First',
              description: 'Our racing suits are carefully made by skilled technicians, paying attention to every detail to ensure a perfect fit and optimal performance.'
            },
            {
              icon: '✅',
              title: 'Thorough Inspection',
              description: 'Before shipping, every suit undergoes rigorous inspection to guarantee it meets our exacting standards for quality, safety, and craftsmanship.'
            },
            {
              icon: '💯',
              title: 'Satisfaction Guarantee',
              description: 'We stand behind our products. If you\'re not completely satisfied, we will work with you to make it right.'
            },
          ].map((item, index) => (
            <div
              key={index}
              className="premium-card text-center"
            >
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform">{item.icon}</div>
              <h4 className="text-2xl font-bold mb-4 text-brand-orange">{item.title}</h4>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold text-xl px-12 py-6 rounded-xl hover:scale-105 transition-transform shadow-2xl"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            GET YOUR SFI-CERTIFIED SUIT
          </a>
        </div>
      </div>
    </section>
  );
}
