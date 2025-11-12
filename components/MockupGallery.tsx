import Image from 'next/image';

export default function MockupGallery() {
  const mockups = [
    'https://fervogear.com/wp-content/uploads/2023/07/01-Josh-Garrity-1.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/02-Gerald-piatt-7-copy.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/03-Dean-Lewis-11.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/04-Patrick-T-Tharp-Sr-M-New.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/05-Ronnie-Klys-5_Mockup.jpg',
    'https://fervogear.com/wp-content/uploads/2023/07/06-D-RAT-2.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-Fire-Race-SFI-Suite.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-Fire-Racing-Fire-Suit-White-and-Black.jpg',
    'https://fervogear.com/wp-content/uploads/2024/03/Custom-SFI-Certified-Racing-Fire-Suit.jpg',
  ];

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Unlimited Design Possibilities
          </h2>
          <p className="section-subheading">
            Any color. Any logo. Any sponsor. Any graphic. Your imagination is the only limit.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 mb-12">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              className="relative aspect-[3/4] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 shadow-xl group"
            >
              <Image
                src={mockup}
                alt={`Custom Race Suit Design ${index + 1}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <span className="text-white font-semibold">Custom Design #{index + 1}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-xl p-8 md:p-12 border border-brand-orange/30">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">
                See Your Exact Suit Before You Buy
              </h3>
              <p className="text-xl text-gray-300 mb-6">
                Get a FREE professional mockup of your custom design. Make unlimited changes until it's perfect.
              </p>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <span className="text-brand-orange text-xl">✓</span>
                  <span>Professional design consultation included</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-orange text-xl">✓</span>
                  <span>Unlimited revisions at no extra cost</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-orange text-xl">✓</span>
                  <span>No credit card required for mockup</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="text-brand-orange text-xl">✓</span>
                  <span>Only pay when you love it</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="bg-black/50 rounded-xl p-8 mb-6">
                <div className="text-6xl mb-4">🎨</div>
                <div className="text-2xl font-bold mb-2">100% Risk-Free</div>
                <div className="text-gray-300">Start your design today</div>
              </div>
              <a
                href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
                className="cta-button inline-block"
              >
                START MY FREE DESIGN
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
