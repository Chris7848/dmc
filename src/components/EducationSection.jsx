import React from 'react';
import { Trash2, Zap, TrendingUp } from 'lucide-react';

export default function EducationSection() {
  return (
    <section className="py-16 bg-linear-to-br from-slate-900 to-emerald-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Why Waste-to-Energy Matters in Africa</h2>
          <p className="text-xl text-gray-300">The problem, the solution, and your role</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="bg-red-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Trash2 className="w-8 h-8 text-red-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Problem</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Africa generates 125M tons of waste annually
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Only 10% is properly managed
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                600M people lack reliable electricity
              </li>
              <li className="flex items-start">
                <span className="text-red-400 mr-2">•</span>
                Waste dumps release massive CO₂ emissions
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="bg-emerald-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-emerald-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">The Solution</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Convert waste into clean electricity
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Power 50+ homes per ton of waste
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Reduce landfill pollution by 90%
              </li>
              <li className="flex items-start">
                <span className="text-emerald-400 mr-2">•</span>
                Generate carbon credits for investors
              </li>
            </ul>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
              <TrendingUp className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Earn returns on investment
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Power thousands of homes
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Remove tons of waste from communities
              </li>
              <li className="flex items-start">
                <span className="text-blue-400 mr-2">•</span>
                Fight climate change measurably
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 text-center">
          <button className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
            Download Full Impact Report (PDF)
          </button>
        </div>
      </div>
    </section>
  );
}
