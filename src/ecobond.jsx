import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import LedgerTicker from './components/LedgerTicker';
import ProblemSection from './components/ProblemSection';
import ThreeInitiativesSection from './components/ThreeInitiativesSection';
import WhatWeFinanceSection from './components/WhatWeFinanceSection';
import HowItWorksSection from './components/HowItWorksSection';
import ImpactSection from './components/ImpactSection';
import PartnersSection from './components/PartnersSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function EcoBondPlatform() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-[#32d96c]/30 selection:text-[#009b4d]">
      {/* Pilot Demonstration Notice Bar */}
      <div className="bg-[#031d10] border-b border-emerald-900/60 text-emerald-200/80 text-[11px] py-1.5 px-4 text-center font-medium">
        <span className="font-bold text-[#32d96c] mr-1.5">DEMO & PILOT PLATFORM:</span>
        Market figures reflect official macroeconomic research. Pipeline and mandate indicators are illustrative sample representations for platform demonstration.
      </div>

      <Navigation />
      
      <main>
        <HeroSection />
        <LedgerTicker />
        <ProblemSection />
        <ThreeInitiativesSection />
        <WhatWeFinanceSection />
        <HowItWorksSection />
        <ImpactSection />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
