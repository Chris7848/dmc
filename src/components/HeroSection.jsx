import React from 'react';
import { Shield, Lock, Activity, Trash2, Zap, Wind, Home } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-slate-900 via-emerald-900 to-teal-900 text-white py-20">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 text-sm font-semibold">
              🌍 Powered by Arbitrum
            </div>
            <h1 className="text-2xl md:text-6xl font-bold ">
              Performance-based financing for climate infrastructure
            </h1>
            <p className="text-xl text-gray-300">
              Connect waste-to-energy, recycling, and renewable projects with impact-conscious investors. Real<span className="text-emerald-400 font-bold">returns</span>. Real accountability. Real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a href="#invest" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center">
                Explore as investor
              </a>
              <a href="#impact" className="border-2 border-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                Explore as project
              </a>
            </div>

            <div className="flex items-center space-x-6 pt-6">
              <div className="flex items-center space-x-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Insured Projects</span>
              </div>
              <div className="flex items-center space-x-2">
                <Lock className="w-5 h-5 text-emerald-400" />
                <span className="text-sm">Blockchain Secured</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Live Impact Metrics</span>
                  <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/5 rounded-xl p-4">
                    <Trash2 className="w-8 h-8 text-emerald-400 mb-3" />
                    <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold">
                     Coming Soon
                    </span>
                    <div className="text-sm text-gray-400 mt-2">Tons Processed</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                    <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold">
                     Coming Soon
                    </span>
                    <div className="text-sm text-gray-400 mt-2">Clean Energy</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <Wind className="w-8 h-8 text-blue-400 mb-2" />
                    <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold">
                     Coming Soon
                    </span>
                    <div className="text-sm text-gray-400 mt-2">Tons CO₂ Saved</div>
                  </div>
                  <div className="bg-white/5 rounded-xl p-4">
                    <Home className="w-8 h-8 text-purple-400 mb-2" />
                   <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm font-semibold">
                     Coming Soon
                    </span>
                    <div className="text-sm text-gray-400 mt-2">Homes Powered</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
