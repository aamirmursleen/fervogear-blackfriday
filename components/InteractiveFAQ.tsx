'use client';

import { useState } from 'react';

export default function InteractiveFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "How does the FREE design mockup work?",
      answer: "Simply fill out our form with your preferences (colors, logos, sponsors). Within 24 hours, you'll receive a professional 3D mockup of your suit. No payment required. You can request unlimited revisions until it's perfect. Only when you love the design do you place your order."
    },
    {
      question: "What makes FervoGear USA different from other brands?",
      answer: "We offer the FASTEST turnaround (3.5 weeks vs 8-12 weeks), 100% customization with FREE unlimited revisions, lower prices with our price match guarantee, and personal customer service. Every suit is custom-made to your measurements, not off-the-shelf."
    },
    {
      question: "Are your suits really SFI certified?",
      answer: "Yes! We're an official SFI-approved manufacturer. Every suit comes with genuine SFI 3.2A/1 or SFI 3.2A/5 certification tags. We use authentic Nomex® fabric and meet all safety standards required for professional racing."
    },
    {
      question: "How long does delivery actually take?",
      answer: "Standard production is 5-6 weeks. However, we offer an expedited 3.5-week service (fastest in the industry!). Once shipped, delivery within USA is 3-5 business days via UPS with tracking."
    },
    {
      question: "What if the suit doesn't fit?",
      answer: "We provide a detailed measurement guide and video tutorial. Suits are made to YOUR exact measurements, so fit issues are rare. If there's a problem, contact us immediately and we'll work with you to make it right."
    },
    {
      question: "Can I really customize EVERYTHING?",
      answer: "Absolutely! Choose any colors, add unlimited logos, sponsor patches, custom graphics, embroidery, your name, number, and more. We've created suits with American flags, flames, tribal patterns, team logos - your imagination is the only limit!"
    },
    {
      question: "Do you offer payment plans?",
      answer: "Yes! We partner with Affirm for Buy Now, Pay Later. Split your purchase into 4 interest-free payments, or choose extended terms up to 36 months. No credit card required for the FREE mockup."
    },
    {
      question: "What's included in the Black Friday deal?",
      answer: "Double Layer SFI-5 rated Nomex suit ($1,100 value) + FREE matching racing gloves ($150 value) = Total $1,250 value for just $799. That's $451 in savings! Plus FREE USA shipping, FREE design mockup, and unlimited revisions. Limited to 47 suits."
    },
    {
      question: "Can I see examples of custom designs?",
      answer: "Yes! Scroll through our gallery above to see dozens of real customer suits. Each one is 100% unique. We've created over 500 custom suits for racers worldwide."
    },
    {
      question: "What if I need my suit FAST?",
      answer: "Our standard expedited service is 3.5 weeks (fastest in the industry). For rush orders, contact us at (409) 404-0962 and we'll discuss priority production options."
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6 animate-bounce-slow">
            GOT QUESTIONS?
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about custom race suits
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-gray-900/80 to-black/80 backdrop-blur-sm border-2 border-gray-800 hover:border-brand-orange/50 rounded-2xl overflow-hidden transition-all duration-500"
            >
              {/* Question Button */}
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-8 py-6 flex items-center justify-between gap-4 text-left transition-all duration-300"
              >
                <div className="flex items-center gap-4 flex-1">
                  {/* Number badge */}
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${
                    openIndex === index
                      ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white'
                      : 'bg-gray-800 text-gray-500'
                  }`}>
                    {String(index + 1).padStart(2, '0')}
                  </div>

                  {/* Question text */}
                  <span className={`text-lg md:text-xl font-semibold transition-colors duration-300 ${
                    openIndex === index ? 'text-brand-orange' : 'text-white'
                  }`}>
                    {faq.question}
                  </span>
                </div>

                {/* Icon */}
                <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${
                  openIndex === index
                    ? 'bg-brand-orange/20 rotate-180'
                    : 'bg-gray-800'
                }`}>
                  <svg
                    className={`w-5 h-5 transition-colors duration-300 ${
                      openIndex === index ? 'text-brand-orange' : 'text-gray-500'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-8 pb-6 pl-[88px]">
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-brand-orange/30 rounded-3xl p-10 inline-block">
            <div className="text-5xl mb-4">💬</div>
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-gray-400 mb-6 max-w-xl">
              Our racing experts are here to help. Get instant answers via phone, email, or live chat.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:4094040962"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-brand-orange to-orange-600 text-white font-bold px-8 py-4 rounded-xl hover:scale-105 transition-transform"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Now: (409) 404-0962
              </a>
              <a
                href="mailto:sales@fervogear.com"
                className="flex items-center justify-center gap-2 bg-white/10 border-2 border-white/20 hover:border-brand-orange text-white font-semibold px-8 py-4 rounded-xl transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Email Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
