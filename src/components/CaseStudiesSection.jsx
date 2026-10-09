import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Globe, Award, ArrowRight } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navigation />

      <main className="py-16 flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#009b4d] font-bold tracking-[0.1em] text-[11px] uppercase mb-2">Market Benchmarks</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Global Reference Models
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              How circular economy and waste-to-energy infrastructure scale internationally.
            </p>
            <p className="text-xs text-gray-400 italic mt-2">
              * Note: These case studies represent proven international infrastructure models provided for comparative economic reference, not EcoBond portfolio transactions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8 hover:border-emerald-300 transition-all shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Sweden's Circular Energy Model</h2>
                  <span className="text-[11px] text-gray-500 uppercase font-semibold">Global Reference Benchmark</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Sweden converts over 50% of municipal household waste into thermal and electrical energy, powering district heating networks for over 950,000 households and proving the commercial scalability of waste diversion.
              </p>
              <div className="flex items-center space-x-2 text-emerald-700 font-semibold text-xs bg-emerald-50 px-3 py-2 rounded-lg border border-emerald-100">
                <Award className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>99% municipal waste diverted from landfills</span>
              </div>
            </div>

            <div className="bg-[#fafafa] border border-gray-200 rounded-2xl p-8 hover:border-emerald-300 transition-all shadow-xs">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Singapore's Landfill Diversion Infrastructure</h2>
                  <span className="text-[11px] text-gray-500 uppercase font-semibold">Global Reference Benchmark</span>
                </div>
              </div>
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                Despite land constraints, Singapore processes over 3M tons of waste annually through high-efficiency waste-to-energy infrastructure, generating electricity while shrinking landfill volume demand by over 90%.
              </p>
              <div className="flex items-center space-x-2 text-blue-700 font-semibold text-xs bg-blue-50 px-3 py-2 rounded-lg border border-blue-100">
                <Award className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Extended national landfill lifespan past 2035</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#infrastructure"
              className="inline-flex items-center gap-2 bg-[#009b4d] text-white hover:bg-[#008040] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all"
            >
              View What EcoBond Finances <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
