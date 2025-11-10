import Image from 'next/image';

export default function MassiveCustomerGallery() {
  const customers = [
    'https://fervogear.com/wp-content/uploads/2024/04/David-Rivera-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Jacob-Julson-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Sendit-Rubi.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Kenedi-Jernigan-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/05/Riley-Jernigan-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/05/Jernigan-Racing-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-1.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-2.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-3.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-4.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-5.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-6.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-7.jpg',
    'https://fervogear.com/wp-content/uploads/2024/12/CLient-Wearing-FG-Suit-8.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Turn-Kee-Wearing-FG-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Trenton-Beasom-Wearing-FG-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Driver-Wearing-FervoGear-Suit-2.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Tegan-Evans-Wearing-FG-SUit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Tyler-Luce-Wearing-FG-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Nicole-Furman-Wearing-FG-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Kelsey-Family-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Jarrod-Lindemann-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Joey-klemish-Worn-FervoGear-Race-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/04/Eric-Andreen-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Alex-Wearing-FG-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Ambria-Hunter-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/05/Jasmyn-DeVoe-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/04/Nick-Provost-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Ryan-Claeys-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/08/Driver-Wearing-FervoGear-Suit-10.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Jernigan-Team-Worn-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/04/Sean-Genson-Worn-FervoGear-Race-Suit.jpg',
    'https://fervogear.com/wp-content/uploads/2024/04/Mike-Wood-Worn-FervoGear-Race-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/08/Driver-Wearing-FervoGear-Suit-4.jpg',
    'https://fervogear.com/wp-content/uploads/2024/05/Tyler-Simpson-Wearing-Our-FervoGear-Suit.webp',
    'https://fervogear.com/wp-content/uploads/2024/08/Brett-Allen-Wearing-FG-Suit.jpg',
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 text-green-500 font-semibold text-sm mb-6">
            REAL CUSTOMERS • REAL RESULTS
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Join <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">500+ Racers</span> Worldwide
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From weekend warriors to professional champions, racers trust FervoGear for safety, style, and performance
          </p>
        </div>

        {/* Masonry-style gallery */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {customers.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover:scale-105 transition-transform duration-500 cursor-pointer"
            >
              <Image
                src={image}
                alt={`FervoGear Customer ${index + 1}`}
                fill
                className="object-cover object-top"
                loading="lazy"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                quality={80}
              />
              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="text-white">
                  <div className="font-bold">Custom Design</div>
                  <div className="text-sm text-gray-300">100% Customized</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-brand-orange/30 rounded-3xl p-12 inline-block">
            <h3 className="text-3xl font-bold mb-4">
              Ready to Join Them?
            </h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Get your FREE design mockup and see exactly how your custom suit will look
            </p>
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-button-premium inline-block"
            >
              <span className="relative z-10">START YOUR FREE DESIGN</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
