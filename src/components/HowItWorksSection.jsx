import React from 'react';
import { Search, FileText, Users, Building2, BarChart3, Infinity as InfinityIcon, ArrowRight } from 'lucide-react';

export default function HowItWorksSection() {
  const steps = [
    {
      num: '01',
      title: 'IDENTIFY',
      desc: 'We identify viable infrastructure projects with measurable impact.',
      icon: Search
    },
    {
      num: '02',
      title: 'STRUCTURE',
      desc: 'We develop the financial, operational and investment structure to make it investable.',
      icon: FileText
    },
    {
      num: '03',
      title: 'MOBILIZE',
      desc: 'We connect projects with the right capital partners.',
      icon: Users
    },
    {
      num: '04',
      title: 'BUILD',
      desc: 'Capital is deployed into real-world infrastructure.',
      icon: Building2
    },
    {
      num: '05',
      title: 'MEASURE',
      desc: 'We track performance, financial returns and environmental impact.',
      icon: BarChart3
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
              From Opportunity<br/>to Lasting Impact
            </h2>
            <p className="text-[14px] text-gray-600 leading-relaxed">
              We build the pathway that connects viable projects with the capital they need to thrive.
            </p>
          </div>
          
          {/* Right Steps Process */}
          <div className="relative pt-6">
            <div className="flex flex-col md:flex-row items-start justify-between relative">
              
              {/* Connecting Background Line - Green Arrow Line */}
              <div className="hidden md:flex absolute top-[28px] left-8 right-[160px] h-[1.5px] bg-[#32d96c] -z-10 items-center justify-between">
                {/* Small arrows along the line */}
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[15%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[35%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[55%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute left-[75%]" strokeWidth={2} />
                <ArrowRight className="w-4 h-4 text-[#32d96c] absolute right-0" strokeWidth={2} />
              </div>

              {steps.map((step, idx) => (
                <div key={idx} className="relative flex flex-col items-start text-left w-full md:w-[130px] mb-8 md:mb-0 pr-4">
                  {/* Icon Circle */}
                  <div className="w-14 h-14 bg-[#fafafa] rounded-full flex items-center justify-center mb-5 z-10 transition-transform hover:scale-110 duration-300 group">
                    <step.icon className="w-[28px] h-[28px] text-gray-700 group-hover:text-[#009b4d] transition-colors" strokeWidth={1} />
                  </div>
                  
                  {/* Content */}
                  <div className="text-gray-400 font-medium text-[11px] mb-2">{step.num}</div>
                  <h3 className="text-[11px] font-bold text-gray-900 mb-2 tracking-[0.05em] uppercase">{step.title}</h3>
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
                <InfinityIcon className="w-9 h-9 text-[#32d96c] mb-3" strokeWidth={1.5} />
                <h3 className="text-[11px] font-bold mb-2 tracking-[0.1em] uppercase">Reinvest</h3>
                <p className="text-[10px] text-emerald-50/70 leading-[1.4] font-medium">
                  Sustainable returns create more impact at scale.
                </p>
              </div>

            </div>
          </div>
          
        </div>

      </div>
    </section>
  );
}
