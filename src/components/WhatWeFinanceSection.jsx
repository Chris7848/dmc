import React from 'react';
import { Trash2, Zap, Sun, Droplets } from 'lucide-react';

export default function WhatWeFinanceSection() {
  const cards = [
    {
      title: 'Waste & Recycling',
      description: 'Collection infrastructure, recycling facilities, material recovery and circular economy projects.',
      icon: Trash2,
      image: 'https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Waste-to-Energy',
      description: 'Projects that transform waste into productive energy and reduce environmental impact.',
      icon: Zap,
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=600&q=80'
    },
    {
      title: 'Distributed Energy',
      description: 'Micro-solar, mini-grids and decentralized renewable energy infrastructure.',
      icon: Sun,
      image: 'https://images.pexels.com/photos/159397/solar-panel-array-power-sun-electricity-159397.jpeg?auto=compress&cs=tinysrgb&w=600'
    },
    {
      title: 'Climate Resilience',
      description: 'Infrastructure that strengthens communities and makes cities more resilient to climate impacts.',
      icon: Droplets,
      image: 'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=600&q=80'
    }
  ];

  return (
    <section id="infrastructure" className="py-20 bg-white">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Header */}
        <div className="mb-10">
          <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">What We Finance</div>
          <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight">
            Infrastructure Where<br/>
            Capital Meets Impact
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="flex flex-col group cursor-pointer border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] rounded-lg pb-4 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-all">
              {/* Image Container */}
              <div className="relative h-44 mb-5 rounded-t-lg overflow-hidden">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Icon overlapping bottom-left */}
                <div className="absolute -bottom-1 left-4 w-10 h-10 bg-white rounded-t-lg flex items-center justify-center">
                  <div className="w-7 h-7 bg-[#e8f8ef] rounded-full flex items-center justify-center">
                     <card.icon className="w-3.5 h-3.5 text-[#009b4d]" />
                  </div>
                </div>
              </div>
              
              {/* Text Content */}
              <div className="px-5">
                <h3 className="text-[17px] font-bold text-gray-900 mb-2">{card.title}</h3>
                <p className="text-[13px] text-gray-500 leading-[1.6] font-medium">{card.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
