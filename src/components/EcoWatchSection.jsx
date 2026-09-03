import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function EcoWatchSection() {
  const steps = [
    { title: 'CLEAR', desc: 'Dump site is cleared', img: 'https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=150&q=80' },
    { title: 'INSTALL', desc: 'Eco Watch station is installed', img: 'https://images.pexels.com/photos/327394/pexels-photo-327394.jpeg?auto=compress&cs=tinysrgb&w=150' },
    { title: 'COLLECT', desc: 'Waste is properly disposed', img: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=150&q=80' },
    { title: 'PROCESS', desc: 'Waste is sorted and processed', img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=150&q=80' },
    { title: 'RECOVER', desc: 'Resources are recovered', img: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=150&q=80' }
  ];

  return (
    <section className="relative py-20 bg-[#0a2f1d] text-white overflow-hidden border-b-[6px] border-[#32d96c]">
      {/* Subtle background overlay */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="relative z-10 max-w-[1500px] mx-auto px-6">
        <div className="flex flex-col xl:flex-row xl:items-center gap-12 xl:gap-8">
          
          {/* Left Text Content */}
          <div className="xl:w-1/4 space-y-5">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[10px] uppercase">Eco Watch</div>
            <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.15] tracking-tight text-white pr-4">
              Infrastructure that keeps communities clean.
            </h2>
            <p className="text-[13px] text-emerald-50/70 font-medium leading-[1.6]">
              Eco Watch is a community waste station designed to stop cleared dump sites from becoming dump sites again.
            </p>
            <div className="pt-2">
              <a href="#ecowatch" className="inline-block px-5 py-2.5 rounded-md text-[13px] font-bold text-[#0a2f1d] bg-[#009b4d] hover:bg-[#32d96c] transition-colors">
                Learn More About Eco Watch
              </a>
            </div>
          </div>

          {/* Middle Process Timeline */}
          <div className="xl:w-2/4 flex overflow-x-auto pb-4 xl:pb-0 hide-scrollbar items-start xl:justify-center">
            <div className="flex items-start gap-3 min-w-max">
              {steps.map((step, idx) => (
                <React.Fragment key={idx}>
                  <div className="flex flex-col w-[110px]">
                    <div className="w-full aspect-[4/3] rounded-lg overflow-hidden border border-[#32d96c] mb-3 shadow-[0_4px_12px_rgba(0,155,77,0.2)]">
                      <img src={step.img} alt={step.title} className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity" />
                    </div>
                    <h4 className="text-[10px] font-bold tracking-widest text-[#32d96c] mb-1">{step.title}</h4>
                    <p className="text-[10px] text-emerald-100/60 leading-[1.4] font-medium pr-1">{step.desc}</p>
                  </div>
                  {idx < steps.length - 1 && (
                    <div className="flex flex-col justify-center h-[80px] px-1">
                      <ArrowRight className="w-4 h-4 text-[#32d96c]/70" />
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Right Content - Large Image */}
          <div className="xl:w-1/4 h-full hidden xl:block">
            <div className="w-full h-[260px] rounded-xl overflow-hidden border border-[#32d96c]/30 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
               <img src="https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Eco Watch Container" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
