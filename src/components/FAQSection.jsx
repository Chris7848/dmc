import React from 'react';

const faqs = [
  {
    q: "How do I earn returns?",
    a: "You earn yields from the companies we invest in their infrastructure to your wallet, getting your principal back plus any accumulated carbon credits anytime you want."
  },
  {
    q: "What happens to my investment?",
    a: "Your funds finance WtE infrastructure. As waste is processed and energy sold, you earn returns. All transactions are transparent on Arbitrum blockchain."
  },
  {
    q: "Can I sell my bonds before maturity?",
    a: "Yes! Bonds are tokenized and tradeable on secondary markets. You can exit anytime through our marketplace."
  },
  {
    q: "What are the risks?",
    a: "Main risks include: project delays, revenue fluctuations from energy sales, and regulatory changes. All projects are insured and backed by government contracts."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Everything you need to know before joining us</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div key={idx} className="bg-linear-to-br from-slate-50 to-emerald-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
              <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-start">
                <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 shrink-0 mt-0.5">
                  ?
                </span>
                {faq.q}
              </h4>
              <p className="text-gray-700 leading-relaxed ml-9">{faq.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
          <p className="text-gray-600 mb-6">Our team is here to help you understand your investment</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
              Schedule a Call
            </button>
            <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
              Join Telegram Community
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
