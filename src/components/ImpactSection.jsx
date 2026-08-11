import React from 'react';
import { Trash2, Home, Wind, ArrowRight } from 'lucide-react';

const impactBreakdown = [
  { amount: "$10", waste: "0.5 tons", homes: "2", co2: "0.3 tons" },
  { amount: "$50", waste: "2.5 tons", homes: "10", co2: "1.5 tons" },
  { amount: "$100", waste: "5 tons", homes: "20", co2: "3 tons" },
  { amount: "$500", waste: "25 tons", homes: "100", co2: "15 tons" }
];

export default function ImpactSection() {
  return (
    <section className="py-16 bg-white" id="impact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Investment Impact</h2>
          <p className="text-xl text-gray-600">See exactly how your money powers change</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactBreakdown.map((impact, idx) => (
            <div key={idx} className="bg-linear-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className="text-center mb-4">
                <div className="text-3xl font-bold text-emerald-600 mb-2">{impact.amount}</div>
                <div className="text-sm text-gray-600">Investment</div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm">
                  <Trash2 className="w-5 h-5 text-orange-500" />
                  <span className="text-gray-700"><strong>{impact.waste}</strong> waste removed</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Home className="w-5 h-5 text-blue-500" />
                  <span className="text-gray-700"><strong>{impact.homes}</strong> homes powered</span>
                </div>
                <div className="flex items-center space-x-2 text-sm">
                  <Wind className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700"><strong>{impact.co2}</strong> CO₂ saved</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Video Explainer Placeholder */}
        <div className="mt-16 bg-linear-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">How It Works</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Watch how your $100 investment transforms communities: removes 5 tons of waste, 
                powers 20 homes for a year, and prevents 3 tons of CO₂ emissions.
              </p>
              <div className='flex gap-10 items-center'>
                <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2">
                  <span>Watch Video</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <span className="text-orange-700 flex space-x-2 bg-orange-200 px-6 py-3 rounded-full text-sm font-semibold items-center justify-center">
                  Coming Soon
                </span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl aspect-video flex items-center justify-center border-2 border-white/20">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                  <div className="w-0 h-0 border-l-20 border-l-white border-t-12 border-t-transparent border-b-12 border-b-transparent ml-1"></div>
                </div>
                <p className="text-gray-300">3:45 Impact Explainer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
