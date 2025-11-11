'use client';

import { useState } from 'react';

export default function AIChatbot() {
  const [chatMessages, setChatMessages] = useState<Array<{role: 'user' | 'assistant', content: string}>>([]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleAIChat = async () => {
    if (!userInput.trim()) return;

    const userMessage = { role: 'user' as const, content: userInput };
    setChatMessages(prev => [...prev, userMessage]);
    setUserInput('');
    setIsLoading(true);

    // Add empty assistant message that will be filled by stream
    const assistantMessageIndex = chatMessages.length + 1;
    setChatMessages(prev => [...prev, { role: 'assistant', content: '' }]);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...chatMessages, userMessage]
        }),
      });

      if (!response.ok || !response.body) {
        throw new Error('Failed to get response');
      }

      // Handle streaming response
      const reader = response.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedContent = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ') && line !== 'data: [DONE]') {
            try {
              const json = JSON.parse(line.slice(6));
              const content = json.choices[0]?.delta?.content || '';
              if (content) {
                accumulatedContent += content;
                // Update message in real-time!
                setChatMessages(prev => {
                  const updated = [...prev];
                  updated[assistantMessageIndex] = {
                    role: 'assistant',
                    content: accumulatedContent
                  };
                  return updated;
                });
              }
            } catch (e) {
              // Skip invalid JSON
            }
          }
        }
      }

      setIsLoading(false);
    } catch (error) {
      setChatMessages(prev => {
        const updated = [...prev];
        updated[assistantMessageIndex] = {
          role: 'assistant',
          content: ''
        };
        return updated;
      });
      setIsLoading(false);

      // Show error with clickable contact options
      setTimeout(() => {
        setChatMessages(prev => {
          const updated = [...prev];
          updated[assistantMessageIndex] = {
            role: 'assistant',
            content: 'I apologize, but I need help with this question. Our team would love to assist you!'
          };
          return updated;
        });
      }, 100);
    }
  };

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-gray-900 via-black to-gray-900 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-brand-orange/10 border border-brand-orange/30 rounded-full px-6 py-2 text-brand-orange font-semibold text-sm mb-6 animate-bounce">
            🤖 AI-POWERED SUPPORT
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Ask Our</span>
            <br />
            <span className="bg-gradient-to-r from-brand-orange to-orange-600 bg-clip-text text-transparent">AI Assistant</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto">
            Get instant answers powered by GPT-4. Available 24/7 to help with any questions.
          </p>
        </div>

        {/* AI Chat Card */}
        <div className="bg-gradient-to-br from-gray-900 to-black border-2 border-brand-orange/50 rounded-3xl p-8 md:p-12 shadow-2xl glow-orange">
          <div className="max-w-2xl mx-auto">
            {/* Chat intro */}
            <div className="text-center mb-8">
              <div className="text-6xl mb-4 animate-bounce">🤖</div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Chat with FervoGear USA AI
              </h3>
              <p className="text-gray-400">
                Ask about pricing, customization, delivery, payment plans, or anything else!
              </p>
            </div>

            {/* Chat Messages */}
            <div className="bg-black/60 rounded-2xl p-6 mb-6 min-h-[400px] max-h-[500px] overflow-y-auto">
              {chatMessages.length === 0 ? (
                <div className="text-center text-gray-500 py-12">
                  <p className="text-lg mb-4">👋 Hi! I'm your FervoGear USA AI assistant.</p>
                  <p className="mb-6">Ask me anything about our custom race suits!</p>
                  <div className="space-y-2">
                    <p className="text-sm text-gray-600">Try asking:</p>
                    <div className="flex flex-col gap-2">
                      {['How much does a suit cost?', 'What payment options do you have?', 'How long is delivery?'].map((q, i) => (
                        <button
                          key={i}
                          onClick={() => setUserInput(q)}
                          className="text-left bg-gray-800/50 hover:bg-gray-800 text-gray-400 hover:text-white px-4 py-2 rounded-lg transition-all text-sm"
                        >
                          💡 {q}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {chatMessages.map((msg, i) => (
                    <div key={i}>
                      <div
                        className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                      >
                        <div
                          className={`max-w-[85%] px-5 py-3 rounded-2xl ${
                            msg.role === 'user'
                              ? 'bg-gradient-to-r from-brand-orange to-orange-600 text-white'
                              : 'bg-gray-800 text-gray-200'
                          }`}
                        >
                          <p className="text-sm leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                        </div>
                      </div>

                      {/* Show contact options if AI needs help */}
                      {msg.role === 'assistant' && msg.content.includes('need help with this question') && (
                        <div className="flex justify-start mt-3">
                          <div className="max-w-[85%] space-y-2">
                            <a
                              href="tel:4094040962"
                              className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                              </svg>
                              Call: (409) 404-0962
                            </a>
                            <a
                              href="mailto:support@fervogear.com"
                              className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold px-4 py-2 rounded-lg transition-all text-sm"
                            >
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                              </svg>
                              Email: support@fervogear.com
                            </a>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="bg-gray-800 px-5 py-3 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                          <div className="w-2 h-2 bg-brand-orange rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>

            {/* Input */}
            <div className="flex gap-3 mb-6">
              <input
                type="text"
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleAIChat()}
                placeholder="Type your question here..."
                className="flex-1 bg-black/60 border-2 border-gray-700 focus:border-brand-orange rounded-xl px-6 py-4 text-white placeholder-gray-500 focus:outline-none transition-colors"
              />
              <button
                onClick={handleAIChat}
                disabled={isLoading || !userInput.trim()}
                className="bg-gradient-to-r from-brand-orange to-orange-600 text-white px-8 py-4 rounded-xl font-semibold hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed shadow-lg"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </button>
            </div>

            {/* CTA */}
            <div className="text-center pt-6 border-t border-gray-800">
              <p className="text-gray-400 mb-4">Need to talk to a human?</p>
              <a
                href="tel:4094040962"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-8 py-4 rounded-xl transition-all hover:scale-105"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Call Us Now: (409) 404-0962
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
