import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function PartnersSection() {
  const partners = [
    {
      title: 'GOVERNMENTS',
      description: 'Supporting municipal priorities and public-private partnerships to build essential infrastructure.',
      image: 'https://images.pexels.com/photos/2566852/pexels-photo-2566852.jpeg?auto=compress&cs=tinysrgb&w=400',
      link: '#governments'
    },
    {
      title: 'PROJECT DEVELOPERS',
      description: 'Empowering waste operators, recyclers, energy developers and infrastructure companies to grow.',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=400&q=80',
      link: '#developers'
    },
    {
      title: 'CAPITAL PROVIDERS',
      description: 'Connecting impact investors, climate funds, institutions and family offices to quality assets.',
      image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=400&q=80',
      link: '#capital'
    }
  ];

  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_3fr] gap-12 lg:gap-8 items-start">
          
          {/* Left Text */}
          <div className="pr-4">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase mb-3">Who We Work With</div>
            <h2 className="text-[32px] md:text-[36px] font-bold text-gray-900 leading-[1.15] tracking-tight">
              Partnerships<br/>That Build<br/>The Future
            </h2>
          </div>

          {/* Right Cards Grid */}
          <div>
            <div className="grid md:grid-cols-3 gap-5">
              {partners.map((partner, idx) => (
                <div key={idx} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-xs border border-gray-200 hover:shadow-md transition-shadow group">
                  <div className="h-[140px] overflow-hidden">
                    <img 
                      src={partner.image} 
                      alt={partner.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="p-5 flex flex-col flex-1">
                    <h3 className="text-[11px] font-bold text-gray-900 mb-2 tracking-widest">{partner.title}</h3>
                    <p className="text-[12px] text-gray-500 leading-[1.5] font-medium mb-4 flex-1">
                      {partner.description}
                    </p>
                    <a href={partner.link} className="inline-flex items-center text-[11px] font-bold text-[#009b4d] hover:text-[#32d96c] transition-colors tracking-wide uppercase">
                      Learn More <ArrowRight className="w-[14px] h-[14px] ml-1.5" />
                    </a>
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
