'use client';

import { useState } from 'react';

export default function InteractiveFAQ() {
  const [activeTab, setActiveTab] = useState<string>('general');
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showChat, setShowChat] = useState(false);

  const departments = [
    { id: 'general', icon: '📋', label: 'General', color: 'from-blue-500 to-blue-600' },
    { id: 'ordering', icon: '⚠️', label: 'Ordering', color: 'from-purple-500 to-purple-600' },
    { id: 'sizing', icon: '📏', label: 'Sizing & Fit', color: 'from-green-500 to-green-600' },
    { id: 'safety', icon: '🛡️', label: 'Safety', color: 'from-red-500 to-red-600' },
    { id: 'shipping', icon: '🚚', label: 'Shipping', color: 'from-yellow-500 to-yellow-600' },
    { id: 'payment', icon: '💰', label: 'Payment', color: 'from-emerald-500 to-emerald-600' },
  ];

  const faqsByDepartment: Record<string, Array<{q: string, a: string}>> = {
    general: [
      { q: "What makes FervoGear racing suits unique?", a: "Our custom auto racing suits are fully customizable, allowing you to personalize every detail including colors, logos, and embroidery. We use top-quality Nomex fabric for maximum safety and comfort. Each suit is tailored to your exact measurements for a perfect fit. We also offer a price match guarantee." },
      { q: "Why do you use Nomex meta-aramid fabric?", a: "Nomex provides unmatched heat and flame resistance to keep drivers protected. This material is highly durable while remaining lightweight and comfortable. Nomex is the trusted choice by racing professionals worldwide." },
      { q: "Is FervoGear an SFI approved brand?", a: "Yes! FervoGear is an SFI approved brand, offering both SFI 3.2A/1 and SFI 3.2A/5 certified racing suits that meet strict safety requirements for competitive racing." },
    ],
    ordering: [
      { q: "How can I order custom racing gear?", a: "Simply fill out our online form, select your preferences for suit type, colors, logos, and design elements. You'll receive a detailed mockup within 24 hours to review before production begins." },
      { q: "What customization options are available?", a: "FervoGear offers unlimited customization options. You can personalize with your choice of colors, logos, embroidery, sponsor graphics, and unique designs. Choose between boot cut or cuffed leg designs." },
      { q: "Is there a limit to design revisions?", a: "No! FervoGear provides unlimited revisions to your custom design without any additional charge until you are completely satisfied with the final proof." },
      { q: "How long does the ordering process take?", a: "You'll receive your initial mockup in 24 hours. After approval and measurements, your suit will be delivered in 3.5 weeks with our expedited service (5-6 weeks standard)." },
    ],
    sizing: [
      { q: "How do I ensure the right size?", a: "After approving your design, we provide a custom sizing form with detailed instructions. We also have video tutorials to help you take accurate measurements." },
      { q: "Can suits be tailored to fit perfectly?", a: "Yes! Every suit is tailored to your unique measurements, ensuring optimal comfort, mobility, and safety. Your suit is made specifically for your body." },
      { q: "What if my suit doesn't fit properly?", a: "Contact our customer service immediately. We stand behind our products and will work with you to make it right. We offer a satisfaction guarantee." },
      { q: "Can I order different suit styles?", a: "Yes! We build one-piece, two-piece, and jacket-only styles, all tailored to your exact measurements and fully customizable." },
    ],
    safety: [
      { q: "What safety features are included?", a: "Fire-retardant Nomex outer shell, multiple collar shapes, durable stainless steel D-rings, double interlocked stitching, and 360-degree arm gussets. Every suit is engineered with driver safety as top priority." },
      { q: "Are FervoGear products SFI certified?", a: "Yes! We offer SFI 3.2A/1 and SFI 3.2A/5 certified suits, meeting the highest safety standards in motorsports as set by the SFI Foundation." },
      { q: "What materials are used?", a: "High-quality, fire-retardant Nomex meta-aramid fabric. Every suit is constructed with professional-grade materials that meet or exceed SFI safety standards." },
      { q: "Do I need additional safety gear?", a: "Yes. Your suit is part of a complete safety system. We recommend: helmet, gloves, shoes, fire-resistant underwear, head sock, and neck protector." },
    ],
    shipping: [
      { q: "How long until I receive my suit?", a: "Standard delivery is 5-6 weeks. We offer expedited 3.5-week service (fastest in the industry!). Once shipped, USA delivery is 3-5 business days via UPS." },
      { q: "Does FervoGear offer free shipping?", a: "Yes! Free shipping within the USA on all custom racing gear orders." },
      { q: "Do you ship internationally?", a: "Yes, we ship worldwide! Shipping fees and delivery times vary by destination. International customers are responsible for import duties, taxes, or fees." },
    ],
    payment: [
      { q: "What payment methods do you accept?", a: "We accept all major credit cards (Visa, Mastercard, Amex, Discover), PayPal, and offer Affirm and Klarna financing options for qualifying orders." },
      { q: "Does FervoGear offer a price match guarantee?", a: "Yes! If you find a lower price for the same product from a USA SFI-approved dealer, we'll match that price." },
      { q: "Do you offer payment plans?", a: "Yes! We partner with Affirm and Klarna for Buy Now, Pay Later. Choose 0% APR for 3-12 months, or extended terms up to 24 months." },
      { q: "What are your prices?", a: "Prices vary by customization. Our racing suits start at just $349 for SFI-1, and $699 for SFI-5. Black Friday special: $799 for SFI-5 + FREE gloves!" },
    ],
  };

  const handleAIChat = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: 'user' as const, content: userInput };
    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    try {
      // Call our secure server-side API (protects API key!)
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...chatMessages, userMessage]
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error);
      }

      const aiMessage = { role: 'assistant' as const, content: data.message };
      setChatMessages(prev => [...prev, aiMessage]);
    } catch (error) {
      setChatMessages(prev => [...prev, { role: 'assistant', content: 'Sorry, I encountered an error. Please call us at (409) 404-0962 for immediate assistance!' }]);
    }

    setIsLoading(false);
  };

  const currentFAQs = faqsByDepartment[activeTab] || [];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6 animate-pulse">
            🤖 AI-POWERED SUPPORT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Frequently Asked</span>
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">Questions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Choose a department or ask our AI anything
          </p>
        </div>

        {/* Department Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {departments.map((dept) => (
            <button
              key={dept.id}
              onClick={() => {
                setActiveTab(dept.id);
                setOpenIndex(0);
              }}
              className={`group relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                activeTab === dept.id
                  ? `bg-gradient-to-r ${dept.color} text-white shadow-lg scale-105`
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              <span className="flex items-center gap-2">
                <span className="text-xl">{dept.icon}</span>
                <span>{dept.label}</span>
              </span>
              {activeTab === dept.id && (
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left: FAQs */}
          <div className="lg:col-span-2">
            <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-6">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                {departments.find(d => d.id === activeTab)?.icon}
                <span>{departments.find(d => d.id === activeTab)?.label} Questions</span>
              </h3>

              <div className="space-y-3">
                {currentFAQs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black/40 border-2 border-gray-800 hover:border-brand-orange/50 rounded-2xl overflow-hidden transition-all duration-300"
                  >
                    <button
                      onClick={() => setOpenIndex(openIndex === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left"
                    >
                      <span className={`font-semibold transition-colors ${openIndex === index ? 'text-brand-orange' : 'text-white'}`}>
                        {faq.q}
                      </span>
                      <div className={`flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                        <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                    <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                      <div className="px-6 pb-4">
                        <p className="text-gray-300 leading-relaxed">{faq.a}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: AI Chatbot */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-gradient-to-br from-gray-900 to-black border-2 border-brand-orange/50 rounded-3xl p-6 shadow-2xl glow-orange">
              <div className="text-center mb-6">
                <div className="text-5xl mb-3 animate-bounce">🤖</div>
                <h3 className="text-2xl font-bold mb-2">Ask Our AI</h3>
                <p className="text-gray-400 text-sm">Get instant answers to any question</p>
              </div>

              {/* Chat Messages */}
              <div className="bg-black/60 rounded-2xl p-4 mb-4 h-64 overflow-y-auto space-y-3">
                {chatMessages.length === 0 ? (
                  <div className="text-center text-gray-500 text-sm py-8">
                    <p>👋 Hi! I'm your FervoGear AI assistant.</p>
                    <p className="mt-2">Ask me anything about our custom race suits!</p>
                  </div>
                ) : (
                  chatMessages.map((msg, i) => (
                    <div
                      key={i}
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] px-4 py-2 rounded-2xl ${
                          msg.role === 'user'
                            ? 'bg-brand-orange text-white'
                            : 'bg-gray-800 text-gray-200'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{msg.content}</p>
                      </div>
                    </div>
                  ))
                )}
                {isLoading && (
                  <div className="flex justify-start">
                    <div className="bg-gray-800 px-4 py-2 rounded-2xl">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce"></div>
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                        <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Input */}
              <div className="flex gap-2">
                <input
                  type="text"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAIChat()}
                  placeholder="Ask anything..."
                  className="flex-1 bg-black/60 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:border-brand-orange focus:outline-none transition-colors"
                />
                <button
                  onClick={handleAIChat}
                  disabled={isLoading || !userInput.trim()}
                  className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </button>
              </div>

              {/* Quick questions */}
              <div className="mt-4 space-y-2">
                <p className="text-gray-500 text-xs mb-2">Quick questions:</p>
                {['How much does a suit cost?', 'How long is delivery?', 'Is customization free?'].map((q, i) => (
                  <button
                    key={i}
                    onClick={() => setUserInput(q)}
                    className="w-full text-left text-sm bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white px-3 py-2 rounded-lg transition-all"
                  >
                    {q}
                  </button>
                ))}
              </div>

              {/* CTA */}
              <div className="mt-6 pt-6 border-t border-gray-800">
                <a
                  href="tel:4094040962"
                  className="block w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3 rounded-xl text-center transition-all hover:scale-105"
                >
                  📞 Or Call: (409) 404-0962
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
