import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ThreeInitiativesSection() {
  return (
    <section id="initiatives" className="py-20 bg-[#f4faf7] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">Delivery Model</div>
          <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight max-w-[640px] mb-4">
            One platform, operating across three delivery tracks.
          </h2>
          <p className="text-[14px] text-gray-600 leading-[1.6] max-w-[600px]">
            EcoBond works upstream to originate viable projects, applies institutional underwriting across four critical pillars, and connects them directly with commercial and blended capital.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Lane 1: Origination */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-xs group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#32d96c]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="Developer Origination" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">Origination</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Developer Network</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                We partner with operators, environmental engineers, and municipal agencies to source high-potential waste, recycling, and renewable infrastructure requiring expansion capital.
              </p>
              <a href="#developers" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Submit a project <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Lane 2: Underwriting */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-xs group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#009b4d]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" alt="Due Diligence" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">Underwriting</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">4-Pillar Assessment</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                Our team evaluates projects across Technical Feasibility, Financial Viability, Legal & Regulatory Structure, and ESG/Impact to ensure bankability before market presentation.
              </p>
              <a href="#how-it-works" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Explore methodology <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Lane 3: Capital Mobilization */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-xs group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#0a2f1d]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" alt="Capital Mobilization" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">Mobilization</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">Capital Partnerships</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                We structure project SPVs, design debt and blended finance instruments, and connect qualified opportunities with DFIs, infrastructure funds, and commercial banks.
              </p>
              <a href="#capital-providers" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Capital provider access <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
