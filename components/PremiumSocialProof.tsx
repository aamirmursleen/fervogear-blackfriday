import Image from 'next/image';

export default function PremiumSocialProof() {
  const testimonials = [
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/03/Sendit-Rubi-Wearing-FG-SFI-5-Suit.jpg',
      name: 'Sendit Rubi',
      role: 'Professional Drifter',
      quote: 'The fit is perfect and the quality is unmatched. I\'ve recommended FervoGear to my entire team.',
      rating: 5
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-1.jpg',
      name: 'Mike Rodriguez',
      role: 'Sprint Car Racer',
      quote: 'Got my custom suit in 3.5 weeks. Other companies wanted 12 weeks! Quality is outstanding.',
      rating: 5
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-7.jpg',
      name: 'Sarah Chen',
      role: 'Road Racing Champion',
      quote: 'FervoGear made my vision come to life. The design process was smooth and professional.',
      rating: 5
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/05/Riley-Jernigan-Worn-FervoGear-Suit.webp',
      name: 'Riley Jernigan',
      role: 'Stock Car Racing',
      quote: 'Best investment for my racing career. Looks professional and performs even better.',
      rating: 5
    },
  ];

  const mockups = [
    'https://fervogear.com/wp-content/uploads/2023/07/01-Josh-Garrity-1.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/02-Gerald-piatt-7-copy.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/03-Dean-Lewis-11.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-Fire-Race-SFI-Suite.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-Fire-Racing-Fire-Suit-White-and-Black.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-SFI-Certified-Racing-Fire-Suit.jpg',
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Section header - BIGGER */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
              VERIFIED CUSTOMERS
            </div>
          </div>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 leading-tight">
            Trusted by <span className="bg-gradient-to-r from-brand-orange via-orange-500 to-orange-600 bg-clip-text text-transparent">500+ Professional Racers</span>
          </h2>
          <p className="text-2xl md:text-3xl text-gray-400 max-w-4xl mx-auto font-light leading-relaxed">
            From weekend warriors to championship winners, racers choose FervoGear for unmatched quality and service.
          </p>
        </div>

        {/* Testimonials grid - BIGGER & BETTER */}
        <div className="grid lg:grid-cols-2 gap-10 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 border-2 border-gray-800 rounded-3xl overflow-hidden hover:border-brand-orange/50 transition-all duration-500 hover:shadow-2xl hover:shadow-brand-orange/20 hover:-translate-y-2"
            >
              {/* Large Image - Takes more space */}
              <div className="relative w-full h-96 lg:h-[500px] overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                  style={{ objectPosition: '50% 20%' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

                {/* Floating badge */}
                <div className="absolute top-6 right-6 bg-brand-orange/90 backdrop-blur-sm text-white px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Verified Customer
                </div>
              </div>

              {/* Content - Larger padding and text */}
              <div className="p-8 lg:p-10">
                {/* Rating - Bigger stars */}
                <div className="flex gap-1 mb-5">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-7 h-7 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Quote - Larger text */}
                <p className="text-gray-200 text-xl lg:text-2xl mb-6 italic leading-relaxed font-light">
                  "{testimonial.quote}"
                </p>

                {/* Author - Bigger and more prominent */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-800">
                  <div className="flex-1">
                    <div className="font-bold text-2xl mb-1 text-white">{testimonial.name}</div>
                    <div className="text-brand-orange text-base font-medium">{testimonial.role}</div>
                  </div>

                  {/* Checkmark badge */}
                  <div className="bg-green-500/20 border-2 border-green-500 rounded-full p-3">
                    <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative corner accent */}
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-brand-orange/20 to-transparent rounded-br-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          ))}
        </div>

        {/* Design mockups showcase */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Unlimited Design <span className="text-brand-orange">Possibilities</span>
            </h3>
            <p className="text-xl text-gray-400">
              Every suit is custom-made to your exact specifications
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {mockups.map((mockup, index) => (
              <div
                key={index}
                className="relative aspect-[3/4] rounded-2xl overflow-hidden group cursor-pointer"
              >
                <Image
                  src={mockup}
                  alt={`Custom Design ${index + 1}`}
                  fill
                  className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <span className="text-white font-semibold">Custom Design #{index + 1}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trust indicators */}
        <div className="bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl p-8">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-3">
              <div className="text-5xl">🏆</div>
              <div className="font-semibold text-xl">Industry Leader</div>
              <div className="text-gray-400 text-sm">Most trusted custom race suit manufacturer in North America</div>
            </div>

            <div className="space-y-3">
              <div className="text-5xl">⚡</div>
              <div className="font-semibold text-xl">Fastest Delivery</div>
              <div className="text-gray-400 text-sm">3.5 weeks vs industry standard 8-12 weeks</div>
            </div>

            <div className="space-y-3">
              <div className="text-5xl">💎</div>
              <div className="font-semibold text-xl">Premium Quality</div>
              <div className="text-gray-400 text-sm">SFI-certified with genuine Nomex® materials</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
