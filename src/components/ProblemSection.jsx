import React from 'react';
import { CheckCircle2 } from 'lucide-react';

export default function ProblemSection() {
  return (
    <section id="about" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          
          {/* Left Text Content */}
          <div className="lg:col-span-4 space-y-5">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase">The Problem</div>
            <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight">
              Africa doesn't lack ideas.<br/>
              It lacks infrastructure capital.
            </h2>
            <p className="text-[15px] text-gray-600 leading-[1.6] max-w-[90%]">
              Billions are needed for climate infrastructure, yet most projects are too small, too early or too complex for traditional finance.
            </p>
          </div>

          {/* Right Diagram Content */}
          <div className="lg:col-span-8">
            <div className="flex flex-col md:flex-row items-stretch justify-between w-full gap-4 lg:gap-0 relative">
              
              {/* Traditional Finance Box */}
              <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex-1 relative z-10">
                <div className="text-center mb-6">
                  <div className="text-emerald-800 font-bold text-[11px] tracking-widest leading-none mb-1">TRADITIONAL</div>
                  <div className="text-gray-900 font-bold text-sm tracking-widest leading-none">FINANCE</div>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Large ticket size',
                    'Established track record',
                    'Collateralized',
                    'Lower risk'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-[13px] text-gray-600 font-medium">
                      <CheckCircle2 className="w-[14px] h-[14px] text-[#32d96c] mr-2.5 shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow 1 */}
              <div className="flex justify-center items-center py-2 lg:py-0 lg:px-4 z-0">
                <svg className="w-6 h-10 text-gray-300 lg:hidden" fill="none" viewBox="0 0 24 40">
                  <path d="M12 0v36M7 31l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="hidden lg:block w-12 h-6 text-gray-300" fill="none" viewBox="0 0 48 24">
                  <path d="M0 12h44M39 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Financing Gap Center */}
              <div className="bg-[#f4faf7] border border-dashed border-[#bce8cf] rounded-xl p-6 flex-1 text-center relative z-10 flex flex-col justify-center">
                <div className="text-gray-500 font-bold text-[10px] tracking-[0.15em] mb-4 uppercase">The Financing Gap</div>
                <ul className="space-y-2.5 text-[13px] text-gray-700 font-medium">
                  <li>Community scale projects</li>
                  <li>Early stage | Underserved</li>
                  <li>High impact | High potential</li>
                </ul>
              </div>

              {/* Arrow 2 */}
              <div className="flex justify-center items-center py-2 lg:py-0 lg:px-4 z-0">
                <svg className="w-6 h-10 text-gray-300 lg:hidden" fill="none" viewBox="0 0 24 40">
                  <path d="M12 0v36M7 31l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <svg className="hidden lg:block w-12 h-6 text-gray-300" fill="none" viewBox="0 0 48 24">
                  <path d="M0 12h44M39 7l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeDasharray="4 4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* EcoBond Box */}
              <div className="bg-[#0a2f1d] text-white rounded-xl p-6 shadow-lg flex-1 relative z-10">
                <div className="text-center mb-8 mt-1">
                   <div className="text-white font-bold text-sm tracking-widest">ECOBOND</div>
                </div>
                <ul className="space-y-3.5">
                  {[
                    'Project identification',
                    'Financial structuring',
                    'Capital mobilization',
                    'Scalable impact'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-[13px] text-emerald-50 font-medium">
                      <CheckCircle2 className="w-[14px] h-[14px] text-[#32d96c] mr-2.5 shrink-0" strokeWidth={2.5} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
            </div>
          </div>
          
        </div>

        {/* Market Data Strip */}
        <div className="mt-20 pt-16 border-t border-gray-100 grid md:grid-cols-3 gap-8">
          
          <div className="bg-white border border-gray-200 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
             <div className="h-36 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-[#0a2f1d]/20 mix-blend-multiply z-10"></div>
               <img src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Renewable Energy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
             </div>
             <div className="p-8 flex-1 flex flex-col">
               <div className="absolute top-0 left-0 w-full h-[4px] bg-[#32d96c] z-20"></div>
               <div className="font-bold text-[10px] tracking-widest uppercase text-gray-400 mb-4">Renewable Energy</div>
               <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#009b4d] transition-colors">$7.5–15B</div>
               <p className="text-[13px] text-gray-500 leading-[1.6] font-medium">Addressable annual gap in small-scale renewable infrastructure across Africa, against 85M Nigerians without grid access.</p>
             </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
             <div className="h-36 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-[#0a2f1d]/20 mix-blend-multiply z-10"></div>
               <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80" alt="Waste & Recycling" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
             </div>
             <div className="p-8 flex-1 flex flex-col">
               <div className="absolute top-0 left-0 w-full h-[4px] bg-[#009b4d] z-20"></div>
               <div className="font-bold text-[10px] tracking-widest uppercase text-gray-400 mb-4">Waste & Recycling</div>
               <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#009b4d] transition-colors">$2.3B</div>
               <p className="text-[13px] text-gray-500 leading-[1.6] font-medium">Nigeria's waste management market, growing 5.2% annually — with less than 30% of waste formally collected today.</p>
             </div>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.03)] relative overflow-hidden group hover:shadow-md transition-shadow flex flex-col">
             <div className="h-36 w-full overflow-hidden relative">
               <div className="absolute inset-0 bg-[#0a2f1d]/20 mix-blend-multiply z-10"></div>
               <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80" alt="Agro-Processing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
             </div>
             <div className="p-8 flex-1 flex flex-col">
               <div className="absolute top-0 left-0 w-full h-[4px] bg-[#0a2f1d] z-20"></div>
               <div className="font-bold text-[10px] tracking-widest uppercase text-gray-400 mb-4">Agro-Processing</div>
               <div className="text-4xl font-bold text-gray-900 mb-3 tracking-tight group-hover:text-[#009b4d] transition-colors">$182B</div>
               <p className="text-[13px] text-gray-500 leading-[1.6] font-medium">Nigeria's agricultural financing gap — with 90% of agro goods exported raw, forfeiting most of the sector's value.</p>
             </div>
          </div>

        </div>

      </div>
    </section>
  );
}
