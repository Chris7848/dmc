import React from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import LedgerTicker from './components/LedgerTicker';
import ProblemSection from './components/ProblemSection';
import ThreeInitiativesSection from './components/ThreeInitiativesSection';
import WhatWeFinanceSection from './components/WhatWeFinanceSection';
import HowItWorksSection from './components/HowItWorksSection';
import EcoWatchSection from './components/EcoWatchSection';
import ImpactSection from './components/ImpactSection';
import PartnersSection from './components/PartnersSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export default function EcoBondPlatform() {
  return (
    <div className="min-h-screen font-sans bg-white text-gray-900 selection:bg-[#32d96c]/30 selection:text-[#009b4d]">
      <Navigation />
      
      <main>
        <HeroSection />
        <LedgerTicker />
        <ProblemSection />
        <ThreeInitiativesSection />
        <WhatWeFinanceSection />
        <HowItWorksSection />
        <EcoWatchSection />
        <ImpactSection />
        <PartnersSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
