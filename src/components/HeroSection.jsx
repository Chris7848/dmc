import React from 'react';
import { Trash2, Recycle, Zap, Droplets } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0a2f1d] text-white lg:min-h-[670px] flex flex-col justify-between pt-10 lg:pt-0">
      
      {/* Background Image with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/2566852/pexels-photo-2566852.jpeg?auto=compress&cs=tinysrgb&w=2560" 
          alt="Modern African City Infrastructure" 
          className="w-full h-full object-cover opacity-30 mix-blend-luminosity"
        />
        {/* Base dark green gradient */}
        <div className="absolute inset-0 bg-linear-to-r from-[#031d10] via-[#031d10]/85 to-transparent"></div>
        {/* Soft top gradient to blend with header */}
        <div className="absolute inset-x-0 top-0 h-32 bg-linear-to-b from-[#051a10] to-transparent opacity-100"></div>
        {/* Bottom gradient to blend with next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-linear-to-t from-[#0a2f1d] to-transparent opacity-100"></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 py-12 flex-1 flex flex-col lg:flex-row items-center w-full">
        
        {/* Left Content (Text & CTAs) */}
        <div className="w-full lg:w-[44%] space-y-6 z-30 pt-8 lg:pt-0 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-[#32d96c] text-[11px] font-semibold tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-[#32d96c] animate-pulse"></span>
            Climate Infrastructure Finance
          </div>
          <h1 className="text-[34px] md:text-[44px] lg:text-[40px] xl:text-[48px] font-extrabold leading-[1.08] tracking-tight text-white drop-shadow-lg">
            BUILDING THE <br/>
            FINANCIAL INFRASTRUCTURE <br/>
            <span className="text-[#32d96c]">FOR AFRICA'S <br className="hidden lg:block"/> CLIMATE TRANSITION.</span>
          </h1>
          <p className="text-[14px] md:text-[15px] text-gray-300 max-w-[480px] font-medium leading-[1.65] mx-auto lg:mx-0 drop-shadow-md">
            We identify, assess, and structure operational and expansion-ready sustainability projects across recycling, renewable energy, and climate infrastructure — connecting them with debt, equity, and blended finance.
          </p>
          <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 justify-center lg:justify-start">
            <a 
              href="#developers" 
              className="px-7 py-3.5 rounded-md text-[13px] font-bold text-[#031d10] bg-[#32d96c] hover:bg-[#2bc45d] transition-all shadow-[0_0_20px_rgba(50,217,108,0.4)]"
            >
              Submit a Project
            </a>
            <a 
              href="#capital-providers" 
              className="px-7 py-3.5 rounded-md text-[13px] font-bold text-white border border-gray-400 hover:border-white hover:bg-white/10 transition-all backdrop-blur-sm"
            >
              Capital Provider Access
            </a>
          </div>
        </div>

        {/* Right Content - 5-Stage Lifecycle Organic Curve & Nodes */}
        <div className="w-full lg:w-[56%] relative mt-16 lg:mt-0 h-[520px] lg:h-[460px]">
          
          {/* ========================================================= */}
          {/* DESKTOP VIEW (5-Stage Horizontal Wavy Line)               */}
          {/* ========================================================= */}
          <div className="hidden lg:block absolute inset-0">
            {/* Glowing SVG Path */}
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 850 420" preserveAspectRatio="xMidYMid meet" fill="none">
              <path 
                d="M -40 210 L 50 210 C 120 210 160 310 230 310 C 310 310 340 105 415 105 C 490 105 530 295 610 295 C 680 295 710 135 780 135 L 900 135" 
                stroke="url(#desktopGlow5)" 
                strokeWidth="5" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(50,217,108,0.8)]"
              />
              <defs>
                <linearGradient id="desktopGlow5" x1="0" y1="0" x2="850" y2="0" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32d96c" stopOpacity="0" />
                  <stop offset="0.08" stopColor="#32d96c" />
                  <stop offset="0.92" stopColor="#32d96c" />
                  <stop offset="1" stopColor="#32d96c" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Stage 1: IDENTIFY (x=50, y=210) */}
            <div className="absolute flex flex-col items-center" style={{ left: '6%', top: '50%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[74px] h-[74px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&q=80" alt="Identify" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.14em] text-white drop-shadow-md uppercase">1. IDENTIFY</div>
            </div>

            {/* Stage 2: ASSESS (x=230, y=310) */}
            <div className="absolute flex flex-col items-center" style={{ left: '27%', top: '74%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[74px] h-[74px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=200&q=80" alt="Assess" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.14em] text-white drop-shadow-md uppercase">2. ASSESS</div>
            </div>

            {/* Stage 3: STRUCTURE (x=415, y=105) */}
            <div className="absolute flex flex-col items-center" style={{ left: '49%', top: '25%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[74px] h-[74px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=200&q=80" alt="Structure" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.14em] text-white drop-shadow-md uppercase">3. STRUCTURE</div>
            </div>

            {/* Stage 4: CONNECT CAPITAL (x=610, y=295) */}
            <div className="absolute flex flex-col items-center" style={{ left: '72%', top: '70%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[74px] h-[74px] rounded-full border-[3px] border-white/90 p-1 bg-[#0a2f1d] shadow-[0_10px_30px_rgba(0,0,0,0.6)] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80" alt="Connect Capital" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-2 text-[10px] font-bold tracking-[0.14em] text-white drop-shadow-md uppercase whitespace-nowrap">4. CONNECT CAPITAL</div>
            </div>

            {/* Stage 5: SCALE (x=780, y=135) */}
            <div className="absolute flex flex-col items-center" style={{ left: '92%', top: '32%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[96px] h-[96px] rounded-full border-[4px] border-[#32d96c]/90 p-1 shadow-[0_0_35px_rgba(50,217,108,0.7)] bg-[#0a2f1d] group hover:scale-105 transition-transform cursor-pointer">
                <div className="w-full h-full rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#32d96c]/20 mix-blend-multiply z-10"></div>
                  <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Scale Impact" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="mt-3 text-[11px] font-bold tracking-[0.15em] text-[#32d96c] drop-shadow-md uppercase whitespace-nowrap">5. SCALE</div>
            </div>
          </div>

          {/* ========================================================= */}
          {/* MOBILE VIEW (Vertical 5-Stage Winding Line)                */}
          {/* ========================================================= */}
          <div className="block lg:hidden absolute inset-0">
            <svg className="absolute inset-0 w-full h-full overflow-visible" viewBox="0 0 300 580" preserveAspectRatio="xMidYMid meet" fill="none">
              <path 
                d="M 150 -20 L 150 45 C 150 105 75 105 75 160 C 75 220 225 220 225 280 C 225 340 75 340 75 400 C 75 460 150 460 150 515 L 150 590" 
                stroke="url(#mobileGlow5)" 
                strokeWidth="5" 
                strokeLinecap="round"
                className="drop-shadow-[0_0_12px_rgba(50,217,108,0.8)]"
              />
              <defs>
                <linearGradient id="mobileGlow5" x1="0" y1="0" x2="0" y2="580" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#32d96c" stopOpacity="0" />
                  <stop offset="0.1" stopColor="#32d96c" />
                  <stop offset="0.9" stopColor="#32d96c" />
                  <stop offset="1" stopColor="#32d96c" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>

            {/* Mobile Node 1: IDENTIFY */}
            <div className="absolute flex items-center gap-3" style={{ left: '50%', top: '8%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[66px] h-[66px] rounded-full border-[2px] border-white/90 p-1 bg-[#0a2f1d] shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=200&q=80" alt="Identify" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">1. IDENTIFY</div>
            </div>

            {/* Mobile Node 2: ASSESS */}
            <div className="absolute flex flex-row-reverse items-center gap-3" style={{ left: '25%', top: '28%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[66px] h-[66px] rounded-full border-[2px] border-white/90 p-1 bg-[#0a2f1d] shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=200&q=80" alt="Assess" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">2. ASSESS</div>
            </div>

            {/* Mobile Node 3: STRUCTURE */}
            <div className="absolute flex items-center gap-3" style={{ left: '75%', top: '48%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[66px] h-[66px] rounded-full border-[2px] border-white/90 p-1 bg-[#0a2f1d] shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=200&q=80" alt="Structure" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs">3. STRUCTURE</div>
            </div>

            {/* Mobile Node 4: CONNECT CAPITAL */}
            <div className="absolute flex flex-row-reverse items-center gap-3" style={{ left: '25%', top: '69%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[66px] h-[66px] rounded-full border-[2px] border-white/90 p-1 bg-[#0a2f1d] shadow-md">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=200&q=80" alt="Connect Capital" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-white bg-black/50 px-2.5 py-1 rounded-full backdrop-blur-xs whitespace-nowrap">4. CONNECT CAPITAL</div>
            </div>

            {/* Mobile Node 5: SCALE */}
            <div className="absolute flex flex-col items-center gap-1.5" style={{ left: '50%', top: '89%', transform: 'translate(-50%, -50%)' }}>
              <div className="w-[78px] h-[78px] rounded-full border-[3px] border-[#32d96c]/90 p-1 shadow-[0_0_25px_rgba(50,217,108,0.5)] bg-[#0a2f1d]">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <img src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=200" alt="Scale" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-[11px] font-bold tracking-[0.1em] text-[#32d96c] bg-black/60 px-3 py-1 rounded-full backdrop-blur-xs">5. SCALE</div>
            </div>
          </div>
          
        </div>
      </div>

      {/* Bottom Bar Categories */}
      <div className="relative z-30 w-full bg-[#031d10]/95 backdrop-blur-md border-y border-white/10 py-5 mt-16 lg:mt-6">
        <div className="max-w-[1400px] mx-auto px-6 flex flex-wrap items-center justify-center lg:justify-start gap-x-8 lg:gap-x-12 gap-y-4">
          {[
            { icon: Trash2, label: 'Waste Infrastructure' },
            { icon: Recycle, label: 'Recycling Facilities' },
            { icon: Zap, label: 'Clean & Distributed Energy' },
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
