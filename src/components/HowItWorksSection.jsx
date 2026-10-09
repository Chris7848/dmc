import React from 'react';
import { Search, ClipboardCheck, Layers, Landmark, TrendingUp, Repeat, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'IDENTIFY',
      desc: 'Source operational and expansion-ready projects fitting EcoBond’s mandate.',
      icon: Search
    },
    {
      num: '02',
      title: 'ASSESS',
      desc: 'Execute 4-pillar underwriting: Technical, Financial, Legal, and ESG/Impact.',
      icon: ClipboardCheck
    },
    {
      num: '03',
      title: 'STRUCTURE',
      desc: 'Build bankable financial models, project SPVs, and blended capital stacks.',
      icon: Layers
    },
    {
      num: '04',
      title: 'CONNECT CAPITAL',
      desc: 'Match investment-ready projects with DFIs, climate funds, and banks.',
      icon: Landmark
    },
    {
      num: '05',
      title: 'SCALE',
      desc: 'Deploy capital, expand capacity, and verify real environmental outcomes.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-[#fafafa] border-y border-gray-200/60">
      <div className="max-w-[1500px] mx-auto px-6">
        
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-8 items-start mb-8">
          
          {/* Left Text */}
          <div className="pr-4">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">How It Works</div>
            <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 mb-4 leading-[1.15] tracking-tight">
              From Opportunity<br/>to Financeable Asset
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              EcoBond builds the missing bridge connecting viable infrastructure with the commercial, DFI, and blended capital required to scale.
            </p>
          </div>
          
          {/* Right Steps Process */}
          <div className="relative pt-6">
            <div className="flex flex-col md:flex-row items-start justify-between relative">
              
              {/* Connecting Background Line - Green Arrow Line */}
              <div className="hidden md:flex absolute top-[28px] left-8 right-[160px] h-[1.5px] bg-[#32d96c] -z-10 items-center justify-between">
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[15%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[35%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[55%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[75%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute right-0" strokeWidth={2} />
              </div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start text-left w-full md:w-[130px] mb-8 md:mb-0 pr-4">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 bg-[#fafafa] rounded-full flex items-center justify-center mb-5 z-10 transition-transform hover:scale-110 duration-300 group shadow-xs border border-gray-200">
                    <step.icon className="w-[26px] h-[26px] text-gray-700 group-hover:text-[#009b4d] transition-colors" strokeWidth={1.5} />
                  </div>
                  
                  {/* Content */}
                  <div className="text-gray-400 font-medium text-[11px] mb-2">{step.num}</div>
                  <h3 className="text-[11px] font-bold text-gray-900 mb-2 tracking-[0.05em] uppercase leading-tight">{step.title}</h3>
                  <p className="text-[11.5px] text-gray-500 leading-[1.5] font-medium">{step.desc}</p>
                  
                  {/* Mobile connecting arrow */}
                  {idx < steps.length - 1 && (
                    <ArrowRight className="w-4 h-4 text-[#32d96c] md:hidden my-4 self-center" strokeWidth={2} />
                  )}
                </div>
              ))}

              {/* Mobile connecting arrow before reinvest */}
              <ArrowRight className="w-4 h-4 text-[#32d96c] md:hidden my-4 self-center" strokeWidth={2} />

              {/* Reinvest Box */}
              <div className="w-full md:w-[130px] bg-[#0a2f1d] rounded-2xl p-5 text-center text-white shadow-xl flex flex-col items-center justify-center z-10 relative">
                <Repeat className="w-8 h-8 text-[#32d96c] mb-3" strokeWidth={1.75} />
                <h3 className="text-[11px] font-bold mb-2 tracking-[0.1em] uppercase">Scale & Repeat</h3>
                <p className="text-[10px] text-emerald-50/70 leading-[1.4] font-medium">
                  Successful execution generates repeat mandates and regional expansion.
                </p>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
