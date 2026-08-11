import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import ProjectDashboard from './components/ProjectDashboard';
import BondDetails from './components/BondDetails';
import ImpactSection from './components/ImpactSection';
import PartnersSection from './components/PartnersSection';
import FAQSection from './components/FAQSection';
import EducationSection from './components/EducationSection';
import CaseStudiesSection from './components/CaseStudiesSection';
import InvestorPortal from './components/InvestorPortal';
import Footer from './components/Footer';

export default function EcoBondPlatform() {
  const [walletConnected, setWalletConnected] = useState(false);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-emerald-50">
      <Navigation walletConnected={walletConnected} setWalletConnected={setWalletConnected} />
      <HeroSection />
      <ProjectDashboard />
      <BondDetails />
      <ImpactSection />
      <PartnersSection />
      <FAQSection />
      <EducationSection />
      <CaseStudiesSection />
      <InvestorPortal setWalletConnected={setWalletConnected} />
      <Footer />
    </div>
  );
}
