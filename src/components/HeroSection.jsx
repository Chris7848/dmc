import React from 'react';
import { Trash2, Recycle, Zap, Droplets, BarChart2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a2f1d] text-white lg:min-h-[650px] flex flex-col justify-between pt-10 lg:pt-0">
      
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2566852/pexels-photo-2566852.jpeg?auto=compress&cs=tinysrgb&w=2560" 
          alt="Modern African City Infrastructure" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Base dark green gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#031d10] via-[#031d10]/80 to-transparent"></div>
        {/* Soft top gradient to blend with header */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#051a10] to-transparent opacity-100"></div>
        {/* Bottom gradient to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a2f1d] to-transparent opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 flex-1 flex flex-col lg:flex-row items-center w-full">
        
        {/* Left Content (Text & CTAs) */}
        <div className="w-full lg:w-[45%] space-y-6 z-30 pt-8 lg:pt-0 text-center lg:text-left">
          <h1 className="text-[36px] md:text-[46px] lg:text-[42px] xl:text-[50px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-lg">
            BUILDING THE <br/>
            FINANCIAL INFRASTRUCTURE <br/>
            <span className="text-[#32d96c]">FOR AFRICA'S <br className="hidden lg:block"/> GREEN TRANSITION.</span>
          </h1>
          <p className="text-[15px] md:text-[16px] text-gray-300 max-w-[480px] font-medium leading-[1.6] mx-auto lg:mx-0 drop-shadow-md">
            EcoBond unlocks capital for the waste, recycling, renewable energy and climate infrastructure projects that traditional finance struggles to fund.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <a href="#explore" className="px-8 py-3.5 rounded-md text-[14px] font-bold text-[#031d10] bg-[#32d96c] hover:bg-[#2bc45d] transition-all shadow-[0_0_20px_rgba(50,217,108,0.4)]">
              Explore EcoBond
            </a>
            <a href="#partner" className="px-8 py-3.5 rounded-md text-[14px] font-bold text-white border border-gray-400 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm">
              Partner With Us
            </a>
          </div>
        </div>

        {/* Right Content - Organic Curve & Nodes */}
        <div className="w-full lg:w-[55%] relative mt-16 lg:mt-0 h-[500px] lg:h-[450px]">
          
          {/* ========================================================= */}
          {/* DESKTOP VIEW (Horizontal Wavy Line)                       */}
          {/* ========================================================= */}
          <div className="hidden lg:block absolute inset-0">
            {/* Glowing SVG Path */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet" fill="none">
              <path 
                d="M -50 150 L 50 150 C 150 150 200 320 300 320 C 400 320 450 80 550 80 C 650 80 700 130 750 130 L 900 130" 
                stroke="url(#desktopGlow)" 
                strokeWidth="5" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(50,217,108,0.8)]"
              />
              <defs>
                <linearGradient id="desktopGlow" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32d96c" stopOpacity="0" />
                  <stop offset="0.1" stopColor="#32d96c" />
                  <stop offset="0.9" stopColor="#32d96c" />
                  <stop offset="1" stopColor="#32d96c" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Nodes precisely positioned on the SVG path coordinates */}
            {/* Node 1: COLLECT (x=50, y=150) -> (6.25%, 37.5%) */}
            <div className="absolute flex flex-col items-center" style={{ left: '6.25%', top: '37.5%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[85px] h-[85px] xl:w-[95px] xl:h-[95px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&q=80" alt="Collect" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-white drop-shadow-md">COLLECT</div>
            </div>

            {/* Node 2: RECOVER (x=300, y=320) -> (37.5%, 80%) */}
            <div className="absolute flex flex-col items-center" style={{ left: '37.5%', top: '80%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[85px] h-[85px] xl:w-[95px] xl:h-[95px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=200&q=80" alt="Recover" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-white drop-shadow-md">RECOVER</div>
            </div>

            {/* Node 3: TRANSFORM (x=550, y=80) -> (68.75%, 20%) */}
            <div className="absolute flex flex-col items-center" style={{ left: '68.75%', top: '20%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[85px] h-[85px] xl:w-[95px] xl:h-[95px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=200&q=80" alt="Transform" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-white drop-shadow-md">TRANSFORM</div>
            </div>

            {/* Node 4: FINANCE IMPACT (x=750, y=130) -> (93.75%, 32.5%) */}
            <div className="absolute flex flex-col items-center" style={{ left: '93.75%', top: '32.5%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[110px] h-[110px] xl:w-[130px] xl:h-[130px] rounded-full border-[4px] border-[#32d96c]/80 p-1 shadow-[0_0_40px_rgba(50,217,108,0.6)] bg-[#0a2f1d] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#32d96c]/30 mix-blend-multiply z-10"></div>
                  <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Finance Impact" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-4 text-[12px] font-bold tracking-[0.15em] text-[#32d96c] drop-shadow-md">FINANCE IMPACT</div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE VIEW (Vertical Winding Line)                       */}
          {/* ========================================================= */}
          <div className="block lg:hidden absolute inset-0">
            {/* Glowing SVG Path for Mobile */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 500" preserveAspectRatio="xMidYMid meet" fill="none">
              <path 
                d="M 150 -50 L 150 50 C 150 120 70 150 70 220 C 70 290 230 320 230 390 C 230 460 150 480 150 550" 
                stroke="url(#mobileGlow)" 
                strokeWidth="6" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(50,217,108,0.8)]"
              />
              <defs>
                <linearGradient id="mobileGlow" x1="0" y1="0" x2="0" y2="500" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32d96c" stopOpacity="0" />
                  <stop offset="0.1" stopColor="#32d96c" />
                  <stop offset="0.9" stopColor="#32d96c" />
                  <stop offset="1" stopColor="#32d96c" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mobile Nodes */}
            {/* Node 1: COLLECT (x=150, y=50) -> (50%, 10%) */}
            <div className="absolute flex items-center gap-4" style={{ left: '50%', top: '10%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&q=80" alt="Collect" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[12px] font-bold tracking-[0.15em] text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs">COLLECT</div>
            </div>

            {/* Node 2: RECOVER (x=70, y=220) -> (23.3%, 44%) */}
            <div className="absolute flex flex-row-reverse items-center gap-4" style={{ left: '23.3%', top: '44%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1611284446314-60a58ac0deb9?auto=format&fit=crop&w=200&q=80" alt="Recover" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[12px] font-bold tracking-[0.15em] text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs">RECOVER</div>
            </div>

            {/* Node 3: TRANSFORM (x=230, y=390) -> (76.6%, 78%) */}
            <div className="absolute flex items-center gap-4" style={{ left: '76.6%', top: '78%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[80px] h-[80px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=200&q=80" alt="Transform" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[12px] font-bold tracking-[0.15em] text-white bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs">TRANSFORM</div>
            </div>

            {/* Node 4: FINANCE IMPACT (x=150, y=550) -> (50%, 110%) */}
            <div className="absolute flex flex-col items-center gap-2" style={{ left: '50%', top: '105%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[100px] h-[100px] rounded-full border-[3px] border-[#32d96c]/80 p-1 shadow-[0_0_30px_rgba(50,217,108,0.5)] bg-[#0a2f1d]">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#32d96c]/30 mix-blend-multiply z-10"></div>
                  <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Finance Impact" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[12px] font-bold tracking-[0.15em] text-[#32d96c] bg-black/40 px-3 py-1.5 rounded-full backdrop-blur-xs text-center">FINANCE<br/>IMPACT</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar Categories */}
      <div className="relative z-30 w-full bg-[#031d10]/95 backdrop-blur-md border-y border-white/10 py-5 mt-16 lg:mt-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 lg:gap-x-12 gap-y-4">
          {[
            { icon: Trash2, label: 'Waste Infrastructure' },
            { icon: Recycle, label: 'Recycling' },
            { icon: Zap, label: 'Clean Energy' },
            { icon: Droplets, label: 'Climate Resilience' }
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors cursor-pointer group">
              <div className="w-7 h-7 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-[#32d96c]/20 transition-colors">
                <item.icon className="w-3.5 h-3.5 text-[#32d96c]" />
              </div>
              <span className="text-[13px] font-medium tracking-wide">{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
