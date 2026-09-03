import React from 'react';
import { ArrowRight, Wallet, HardHat, Landmark } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-16 bg-[#0a2f1d] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between">
          
          <div className="lg:w-[40%] space-y-3">
            <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-tight">
              Let's <span className="text-[#32d96c]">build</span> what communities need.
            </h2>
            <p className="text-[13px] text-emerald-50/70 font-medium leading-[1.6]">
              Partner with EcoBond to finance infrastructure that creates impact for people, planet and profit.
            </p>
          </div>

          <div className="lg:w-[60%] w-full flex flex-col md:flex-row gap-4">
            
            <a href="#investor" className="flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-4 flex items-center justify-between group transition-colors shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center">
                  <Wallet className="w-5 h-5 text-[#009b4d]" />
                </div>
                <span className="font-bold text-[13px] leading-tight">I'm an<br/>Investor</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </a>

            <a href="#developer" className="flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-4 flex items-center justify-between group transition-colors shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center">
                  <HardHat className="w-5 h-5 text-[#009b4d]" />
                </div>
                <span className="font-bold text-[13px] leading-tight">I'm a<br/>Project Developer</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </a>

            <a href="#partner" className="flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-4 flex items-center justify-between group transition-colors shadow-lg">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center">
                  <Landmark className="w-5 h-5 text-[#009b4d]" />
                </div>
                <span className="font-bold text-[13px] leading-tight">I'm a Government /<br/>Institutional Partner</span>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </a>

          </div>
          
        </div>
      </div>
    </section>
  );
}
