import React from 'react';
import { Leaf, Recycle, Users, DollarSign, Globe } from 'lucide-react';

export default function ImpactSection() {
  const stats = [
    {
      icon: Leaf,
      value: '10+',
      label: 'Projects Financed',
      target: 'Pilot Target'
    },
    {
      icon: Recycle,
      value: '100,000+',
      label: 'Tonnes of Waste Diverted',
      target: 'Pilot Target'
    },
    {
      icon: Users,
      value: '5,000+',
      label: 'Green Jobs Created',
      target: 'Pilot Target'
    },
    {
      icon: DollarSign,
      value: '$50M+',
      label: 'Capital Mobilized',
      target: 'Pilot Target'
    },
    {
      icon: Globe,
      value: '1M+',
      label: 'People Impacted',
      target: 'Pilot Target'
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          <div className="lg:w-[22%]">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">Impact We Create</div>
            <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight">
              Infrastructure.<br/>Measured.
            </h2>
          </div>

          <div className="lg:w-[78%] w-full">
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col border border-gray-200 rounded-xl p-5 shadow-xs bg-white hover:border-[#32d96c]/50 transition-colors">
                  {/* Top: Icon + Target Label */}
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#f4faf7] flex items-center justify-center">
                      <stat.icon className="w-4 h-4 text-[#009b4d]" strokeWidth={1.5} />
                    </div>
                    <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest leading-none">{stat.target}</span>
                  </div>
                  
                  {/* Number */}
                  <div className="text-[26px] md:text-[28px] font-bold text-[#009b4d] tracking-tight leading-none mb-2">
                    {stat.value}
                  </div>
                  
                  {/* Label */}
                  <div className="text-[12px] font-bold text-gray-800 leading-[1.4]">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
