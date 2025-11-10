'use client';

import { useState } from 'react';

export default function PaymentCalculator() {
  const [selectedPlan, setSelectedPlan] = useState<'affirm' | 'klarna'>('affirm');
  const price = 799;

  const paymentPlans = {
    affirm: [
      { months: 3, monthly: Math.ceil(price / 3), total: price, interest: '0% APR' },
      { months: 6, monthly: Math.ceil(price / 6), total: price, interest: '0% APR' },
      { months: 12, monthly: Math.ceil(price / 12), total: price, interest: '0% APR' },
      { months: 24, monthly: 39, total: 936, interest: '15% APR' },
    ],
    klarna: [
      { months: 4, monthly: Math.ceil(price / 4), total: price, interest: '0% APR', label: 'Pay in 4' },
      { months: 6, monthly: Math.ceil(price / 6), total: price, interest: '0% APR', label: 'Pay in 6' },
      { months: 12, monthly: Math.ceil(price / 12), total: price, interest: '0% APR', label: 'Pay in 12' },
      { months: 24, monthly: 39, total: 936, interest: '15% APR', label: 'Extended' },
    ],
  };

  const plans = paymentPlans[selectedPlan];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-gray-900 to-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-green-500/10 border border-green-500/30 rounded-full px-6 py-2 text-green-500 font-semibold text-sm mb-6 animate-pulse">
            💳 FLEXIBLE PAYMENTS
          </div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="text-white">Pay as Low as</span>
            <br />
            <span className="bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
              ${Math.ceil(price / 12)}/month
            </span>
          </h2>
          <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
            Buy now, pay over time with <span className="text-white font-semibold">0% APR</span> financing
          </p>
        </div>

        {/* Provider Toggle */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={() => setSelectedPlan('affirm')}
            className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedPlan === 'affirm'
                ? 'bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-2xl shadow-blue-500/50 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div className="text-left">
                <div>Affirm</div>
                <div className="text-xs opacity-75">3-24 months</div>
              </div>
            </div>
          </button>

          <button
            onClick={() => setSelectedPlan('klarna')}
            className={`relative px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 ${
              selectedPlan === 'klarna'
                ? 'bg-gradient-to-r from-pink-600 to-pink-500 text-white shadow-2xl shadow-pink-500/50 scale-105'
                : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
            }`}
          >
            <div className="flex items-center gap-3">
              <span className="text-2xl">💳</span>
              <div className="text-left">
                <div>Klarna</div>
                <div className="text-xs opacity-75">4-24 months</div>
              </div>
            </div>
          </button>
        </div>

        {/* Payment Plans Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative bg-gradient-to-br from-gray-900 to-black border-2 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 ${
                index === 0
                  ? 'border-green-500 shadow-2xl shadow-green-500/20 scale-105'
                  : 'border-gray-800 hover:border-green-500/50 hover:shadow-2xl hover:shadow-green-500/10'
              }`}
            >
              {/* Most Popular Badge */}
              {index === 0 && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg">
                  MOST POPULAR
                </div>
              )}

              {/* Plan Details */}
              <div className="text-center">
                {/* Monthly Payment */}
                <div className="mb-4">
                  <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                    ${plan.monthly}
                  </div>
                  <div className="text-gray-400 text-sm">per month</div>
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent my-6"></div>

                {/* Plan Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">{plan.months} months</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Interest:</span>
                    <span className={`font-semibold ${plan.interest === '0% APR' ? 'text-green-400' : 'text-orange-400'}`}>
                      {plan.interest}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-400">Total:</span>
                    <span className="text-white font-semibold">${plan.total}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full py-3 rounded-xl font-bold transition-all duration-300 ${
                    index === 0
                      ? 'bg-gradient-to-r from-green-500 to-emerald-500 text-white hover:scale-105 shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                  }`}
                >
                  Select Plan
                </a>
              </div>

              {/* Hover glow */}
              <div className={`absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity -z-10 ${
                selectedPlan === 'affirm' ? 'bg-gradient-to-r from-blue-500 to-blue-600' : 'bg-gradient-to-r from-pink-500 to-pink-600'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { icon: '✓', title: 'Instant Approval', description: 'Get approved in seconds, no hard credit check' },
            { icon: '🔒', title: 'Secure Checkout', description: 'Bank-level encryption protects your information' },
            { icon: '💰', title: 'No Hidden Fees', description: 'What you see is what you pay. Period.' },
          ].map((benefit, index) => (
            <div key={index} className="bg-gray-900/50 border border-gray-800 rounded-2xl p-6 text-center hover:border-green-500/50 transition-all">
              <div className="text-4xl mb-3">{benefit.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{benefit.title}</h3>
              <p className="text-gray-400 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Calculator Explanation */}
        <div className="bg-gradient-to-r from-gray-900 to-black border-2 border-green-500/30 rounded-3xl p-10 text-center">
          <div className="text-5xl mb-4">🎯</div>
          <h3 className="text-3xl font-bold mb-4">
            <span className="text-white">Make Your Dream Suit</span>{' '}
            <span className="text-green-400">Affordable</span>
          </h3>
          <p className="text-xl text-gray-300 mb-6 max-w-3xl mx-auto">
            Why wait? Get your custom SFI-5 race suit NOW and pay over time.
            Choose the payment plan that fits your budget.
          </p>

          {/* Comparison */}
          <div className="inline-block bg-black/50 rounded-2xl p-8 mb-8">
            <div className="grid grid-cols-2 gap-8 text-center">
              <div>
                <div className="text-gray-500 mb-2">Pay in Full</div>
                <div className="text-4xl font-bold text-gray-400 line-through mb-1">$799</div>
                <div className="text-sm text-gray-500">One payment</div>
              </div>
              <div>
                <div className="text-green-400 font-semibold mb-2">Pay Monthly</div>
                <div className="text-5xl font-black bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-1">
                  ${Math.ceil(price / 12)}
                </div>
                <div className="text-sm text-green-400">for 12 months</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://fervogear.com/custom-race-suit/?utm_source=landing&utm_medium=web&utm_campaign=Black_Friday_2025&utm_id=bf_sfi5_deal"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-xl px-12 py-5 rounded-xl hover:scale-105 transition-transform shadow-2xl"
            >
              GET STARTED WITH FINANCING
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>

          <p className="text-gray-500 text-sm mt-6">
            ✓ No impact on credit score for checking rates • ✓ Instant decision • ✓ Secure application
          </p>
        </div>

        {/* Provider Logos */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">Powered by trusted payment partners</p>
          <div className="flex items-center justify-center gap-8 flex-wrap">
            <div className="text-blue-500 font-bold text-2xl">Affirm</div>
            <div className="text-pink-500 font-bold text-2xl">Klarna</div>
          </div>
        </div>
      </div>
    </section>
  );
}
