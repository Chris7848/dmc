import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Trash2, Zap, TrendingUp, ArrowRight } from 'lucide-react';

export default function EducationSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navigation />

      <main className="py-16 bg-linear-to-br from-slate-950 via-[#0a2f1d] to-[#031d10] text-white flex-1">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-2">Market Insights</div>
            <h1 className="text-3xl md:text-4xl font-extrabold mb-4 tracking-tight">
              Why Climate Infrastructure Matters in Africa
            </h1>
            <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Addressing the continent's infrastructure demand, bankability challenges, and commercial transition opportunity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* The Problem */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <div className="bg-red-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-red-500/30">
                <Trash2 className="w-7 h-7 text-red-400" />
              </div>
              <h2 className="text-xl font-bold mb-4 text-white">The Financing Gap</h2>
              <ul className="space-y-3.5 text-xs text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">•</span>
                  Africa requires more than $240B annually in climate finance, with Nigeria facing a $27B+ annual deficit.
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">•</span>
                  Africa faces a $1.45 Trillion climate funding gap by 2030, yet only $13B in sustainable debt was issued in 2024.
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">•</span>
                  Over 125M tons of municipal waste generated annually across Africa, with under 30% formally collected.
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2 font-bold">•</span>
                  Over 600M people lack grid electricity access, forcing reliance on expensive, polluting diesel generators.
                </li>
              </ul>
            </div>

            {/* The Solution */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <div className="bg-emerald-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30">
                <Zap className="w-7 h-7 text-emerald-400" />
              </div>
              <h2 className="text-xl font-bold mb-4 text-white">Bankable Infrastructure</h2>
              <ul className="space-y-3.5 text-xs text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-[#32d96c] mr-2 font-bold">•</span>
                  Convert municipal solid waste into baseload clean electricity, biogas, and high-value recyclable polymers.
                </li>
                <li className="flex items-start">
                  <span className="text-[#32d96c] mr-2 font-bold">•</span>
                  Deploy decentralized solar mini-grids to address the $7.5–15B small-scale clean energy gap.
                </li>
                <li className="flex items-start">
                  <span className="text-[#32d96c] mr-2 font-bold">•</span>
                  Divert over 90% of landfill waste while drastically reducing fugitive greenhouse gas emissions.
                </li>
                <li className="flex items-start">
                  <span className="text-[#32d96c] mr-2 font-bold">•</span>
                  Structure commercial SPVs with long-term offtake contracts that satisfy international DFI covenants.
                </li>
              </ul>
            </div>

            {/* The Impact */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all">
              <div className="bg-blue-500/20 w-14 h-14 rounded-xl flex items-center justify-center mb-6 border border-blue-500/30">
                <TrendingUp className="w-7 h-7 text-blue-400" />
              </div>
              <h2 className="text-xl font-bold mb-4 text-white">Commercial Scale</h2>
              <ul className="space-y-3.5 text-xs text-gray-300 leading-relaxed">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">•</span>
                  Mobilize blended finance by using catalytic development capital to de-risk senior commercial debt.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">•</span>
                  Capture value from Nigeria's $2.3B waste market (expanding 5.2% annually) through formal recovery.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">•</span>
                  Create thousands of certified green jobs across collection, sorting, and plant operations.
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 font-bold">•</span>
                  Replicate standardized transaction templates across Nigeria, Kenya, Ghana, and broader African markets.
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="/#partner"
              className="inline-flex items-center gap-2 bg-[#32d96c] text-[#031d10] hover:bg-[#2bc45d] px-8 py-3.5 rounded-lg font-bold text-xs uppercase tracking-wider transition-all shadow-xl"
            >
              Explore Partnership Opportunities <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
