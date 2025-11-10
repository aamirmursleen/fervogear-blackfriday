import Image from 'next/image';

export default function DriverGallery() {
  const drivers = [
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/03/Sendit-Rubi-Wearing-FG-SFI-5-Suit.jpg',
      name: 'Sendit Rubi',
      quote: 'The fit is perfect and the quality is unmatched. Worth every penny.',
      location: 'Professional Drifter'
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-1.jpg',
      name: 'Mike Rodriguez',
      quote: 'Got my custom suit in 3.5 weeks. Other companies wanted 12 weeks!',
      location: 'Sprint Car Racer'
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-7.jpg',
      name: 'Sarah Chen',
      quote: 'FervoGear made my vision come to life. The design process was smooth.',
      location: 'Road Racing'
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/05/Riley-Jernigan-Worn-FervoGear-Suit.webp',
      name: 'Riley Jernigan',
      quote: 'Best investment I made for my racing career. Looks pro, feels pro.',
      location: 'Stock Car Racing'
    },
    {
      image: 'https://fervogear.com/wp-content/uploads/2024/04/Jacob-Julson-Wearing-FervoGear-Suit.jpg',
      name: 'Jacob Julson',
      quote: 'The attention to detail is incredible. My sponsors love the visibility.',
      location: 'Dirt Track Racing'
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Real Drivers. Real Results.
          </h2>
          <p className="section-subheading">
            Join hundreds of professional racers who trust FervoGear
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {drivers.map((driver, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl"
            >
              <div className="relative aspect-[3/4]">
                <Image
                  src={driver.image}
                  alt={driver.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="text-brand-orange font-bold text-lg mb-2">
                  {driver.name}
                </div>
                <div className="text-gray-400 text-sm mb-3">
                  {driver.location}
                </div>
                <p className="text-gray-300 italic">
                  "{driver.quote}"
                </p>
                <div className="flex gap-1 mt-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">★</span>
                  ))}
                </div>
              </div>
            </div>
          ))}

          {/* Call to action card */}
          <div className="bg-gradient-to-br from-brand-orange to-orange-600 rounded-xl p-8 flex flex-col items-center justify-center text-center">
            <div className="text-6xl mb-4">🏁</div>
            <h3 className="text-3xl font-bold mb-4">
              Your Turn
            </h3>
            <p className="text-lg mb-6">
              Join the FervoGear family and look like a champion
            </p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              className="bg-white text-brand-orange font-bold py-4 px-8 rounded-lg text-lg hover:bg-gray-100 transition-all"
            >
              GET YOUR CUSTOM SUIT
            </a>
          </div>
        </div>

        {/* Trust badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-gray-800">
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">500+</div>
            <div className="text-gray-400">Suits Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">4.9★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">3.5</div>
            <div className="text-gray-400">Week Turnaround</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-brand-orange mb-2">100%</div>
            <div className="text-gray-400">Customizable</div>
          </div>
        </div>
      </div>
    </section>
  );
}
