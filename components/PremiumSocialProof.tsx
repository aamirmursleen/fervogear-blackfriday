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
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="section-heading-premium mb-4">
            Trusted by <span className="text-brand-orange">500+ Professional Racers</span>
          </h2>
          <p className="section-subheading-premium max-w-3xl mx-auto">
            From weekend warriors to championship winners, racers choose FervoGear for unmatched quality and service.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="premium-card flex flex-col md:flex-row gap-6"
            >
              {/* Image */}
              <div className="relative w-full md:w-48 h-48 md:h-auto flex-shrink-0 rounded-xl overflow-hidden">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  {/* Rating */}
                  <div className="flex gap-1 mb-3">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-300 mb-4 italic leading-relaxed">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Author */}
                <div>
                  <div className="font-semibold text-lg">{testimonial.name}</div>
                  <div className="text-brand-orange text-sm">{testimonial.role}</div>
                </div>
              </div>
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
