'use client';

export default function QuickLinks() {
  const sections = [
    { id: 'highlights', icon: '✨', label: 'Why Choose Us', color: 'from-blue-500 to-blue-600' },
    { id: 'about', icon: '📖', label: 'Our Story', color: 'from-purple-500 to-purple-600' },
    { id: 'measurement-guide', icon: '📏', label: 'How to Measure', color: 'from-orange-500 to-orange-600' },
    { id: 'video-reels', icon: '🎬', label: 'Video Reels', color: 'from-red-500 to-red-600' },
    { id: 'customer-gallery', icon: '👥', label: 'Real Customers', color: 'from-green-500 to-green-600' },
    { id: 'pricing-section', icon: '💰', label: 'Pricing & Deals', color: 'from-yellow-500 to-yellow-600' },
    { id: 'faq-section', icon: '💬', label: 'FAQs & AI Help', color: 'from-pink-500 to-pink-600' },
  ];

  const handleClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="py-12 px-4 bg-gradient-to-b from-black to-gray-900 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-orange/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-4">
            QUICK NAVIGATION
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Jump to Any Section
          </h2>
          <p className="text-gray-400">Click to explore specific areas</p>
        </div>

        {/* Quick Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {sections.map((section, index) => (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-brand-orange rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-orange/20"
            >
              {/* Icon */}
              <div className="text-5xl mb-3 transform group-hover:scale-110 transition-transform">
                {section.icon}
              </div>

              {/* Label */}
              <div className="text-white font-semibold text-sm text-center leading-tight">
                {section.label}
              </div>

              {/* Hover indicator */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-brand-orange to-orange-600 rounded-b-xl scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              {/* Glow effect */}
              <div className={`absolute -inset-1 bg-gradient-to-r ${section.color} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10`}></div>
            </button>
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Or scroll down to explore the full page
          </p>
        </div>
      </div>
    </section>
  );
}
