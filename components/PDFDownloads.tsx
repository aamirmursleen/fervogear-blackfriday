export default function PDFDownloads() {
  const pdfs = [
    {
      title: 'Full Catalog',
      description: 'Browse our complete collection of racing suits, gloves, and accessories',
      icon: '📕',
      url: 'https://drive.google.com/file/d/1P7S-Z_QkkFD706gRLMGRhe6YSj5IlklZ/view',
      size: 'PDF • 5.2 MB'
    },
    {
      title: 'Measurement Form',
      description: 'Get the perfect fit with our detailed measurement guide',
      icon: '📏',
      url: 'https://fervogear.com/wp-content/uploads/2025/10/FervoGear-Updated-Measurement-Form-Updated-2025.pdf',
      size: 'PDF • 850 KB'
    },
    {
      title: 'Size Chart',
      description: 'Find your ideal size with our comprehensive sizing chart',
      icon: '📊',
      url: 'https://fervogear.com/wp-content/uploads/2024/01/FervoGear-Race-Suit-Size-Chart.pdf',
      size: 'PDF • 450 KB'
    },
  ];

  return (
    <section id="pdf-downloads" className="py-20 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6">
            FREE RESOURCES
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Download <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">FREE</span> Resources
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Everything you need to get started with your custom race suit
          </p>
        </div>

        {/* PDF Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {pdfs.map((pdf, index) => (
            <a
              key={index}
              href={pdf.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative bg-gradient-to-br from-gray-900 to-black border-2 border-gray-800 hover:border-brand-orange rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-orange/20"
            >
              {/* Icon */}
              <div className="text-7xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {pdf.icon}
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-brand-orange transition-colors">
                {pdf.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {pdf.description}
              </p>

              {/* Download button */}
              <div className="flex items-center justify-between">
                <span className="text-gray-500 text-sm">{pdf.size}</span>
                <div className="flex items-center gap-2 text-brand-orange font-semibold group-hover:gap-3 transition-all">
                  <span>Download</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>

              {/* Hover glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-brand-orange to-orange-600 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10"></div>
            </a>
          ))}
        </div>

        {/* CTA below */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 mb-4">Need help getting started?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:4094040962"
              className="flex items-center justify-center gap-2 bg-brand-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Us: (409) 404-0962
            </a>
            <a
              href="mailto:sales@fervogear.com"
              className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 hover:border-brand-orange text-white font-semibold px-8 py-4 rounded-xl transition-all"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Email: sales@fervogear.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
