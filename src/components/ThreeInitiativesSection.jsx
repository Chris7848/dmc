import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function ThreeInitiativesSection() {
  return (
    <section className="py-20 bg-[#f4faf7] border-t border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        
        <div className="mb-12">
          <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">Three Initiatives</div>
          <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight max-w-[640px] mb-4">
            One mission, running on three parallel tracks.
          </h2>
          <p className="text-[14px] text-gray-600 leading-[1.6] max-w-[600px]">
            EcoBond scouts and verifies the builders. EcoWatch runs the operational engine. Talent Collective brings in the people. Together, they're how climate action becomes an economy.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Lane 1 */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-sm group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#32d96c]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80" alt="EcoBond Scout" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">EcoBond</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">The Scout</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                We identify and verify revenue-generating waste-to-energy, recycling, and renewable operators — then channel them to capital ready to fund them at scale.
              </p>
              <a href="#operators" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Apply as an operator <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Lane 2 */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-sm group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#009b4d]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=600&q=80" alt="EcoWatch Engine" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">EcoWatch</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">The Engine</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                We sort waste, pay communities in cash for verified work, clean unmonitored dump sites, and build toward owning our own recycling hubs.
              </p>
              <a href="#ecowatch" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Join a cleanup crew <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

          {/* Lane 3 */}
          <div className="bg-white border border-gray-200 rounded-xl relative shadow-sm group overflow-hidden flex flex-col">
            <div className="h-32 w-full overflow-hidden relative">
              <div className="absolute inset-0 bg-[#0a2f1d]/10 mix-blend-multiply z-10"></div>
              <img src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" alt="Talent Collective" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" />
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="font-bold text-[10px] tracking-widest uppercase text-[#009b4d] mb-4">Talent Collective</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">The People</h3>
              <p className="text-[13px] text-gray-500 leading-[1.6] font-medium mb-6 flex-1">
                We train and pay young creators, researchers, and legal minds — turning unpaid climate passion into real, structured careers.
              </p>
              <a href="#talent" className="inline-flex items-center text-[12px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase mt-auto">
                Get onboarded <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
