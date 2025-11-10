import Image from 'next/image';

export default function Support() {
  return (
    <section className="py-16 px-4 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="section-heading">
            Questions? We're Here to Help
          </h2>
          <p className="section-subheading">
            Expert support throughout your entire custom suit journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-2xl">
              <Image
                src="https://fervogear.com/wp-content/uploads/2025/10/OpnePhone-Customer-Chat.png"
                alt="FervoGear Customer Support"
                fill
                className="object-cover"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-brand-orange mb-1">4.9★</div>
                <div className="text-gray-400 text-sm">Customer Rating</div>
              </div>
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl font-bold text-brand-orange mb-1">&lt;1hr</div>
                <div className="text-gray-400 text-sm">Response Time</div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold mb-6">
              Get instant answers from our racing experts
            </h3>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl">📞</div>
                <div>
                  <div className="font-bold text-lg mb-1">Call Us</div>
                  <a href="tel:4094040962" className="text-brand-orange hover:underline text-xl">
                    (409) 404-0962
                  </a>
                  <div className="text-gray-400 text-sm mt-1">
                    Monday - Saturday<br />
                    8:00 AM - 5:00 PM PST
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl">✉️</div>
                <div>
                  <div className="font-bold text-lg mb-1">Email Us</div>
                  <a href="mailto:sales@fervogear.com" className="text-brand-orange hover:underline">
                    sales@fervogear.com
                  </a>
                  <div className="text-gray-400 text-sm mt-1">
                    Response within 1 hour during business hours
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 bg-gray-800 p-4 rounded-lg">
                <div className="text-3xl">💬</div>
                <div>
                  <div className="font-bold text-lg mb-1">Live Chat</div>
                  <div className="text-gray-300">
                    Click the chat button on our order page
                  </div>
                  <div className="text-gray-400 text-sm mt-1">
                    Instant answers to your questions
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-brand-orange/20 to-transparent border-l-4 border-brand-orange p-4 rounded-r-lg">
              <p className="text-gray-300">
                <strong className="text-white">Real people, real help.</strong> No bots, no runaround.
                Just friendly experts who know racing and want to help you get the perfect suit.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
