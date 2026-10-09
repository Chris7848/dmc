import React, { useState } from 'react';
import { ArrowRight, Landmark, HardHat, Building2, CheckCircle2, Mail } from 'lucide-react';

export default function CTASection() {
  const [selectedPersona, setSelectedPersona] = useState(null);
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', organization: '', email: '', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    setInquirySubmitted(true);
  };

  return (
    <section id="partner" className="py-20 bg-[#0a2f1d] text-white">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-center justify-between mb-8">
          
          <div className="lg:w-[40%] space-y-3">
            <div className="text-[#32d96c] font-bold tracking-[0.1em] text-[11px] uppercase">Work With EcoBond</div>
            <h2 className="text-[32px] md:text-[38px] font-bold leading-[1.15] tracking-tight">
              Let's <span className="text-[#32d96c]">structure</span> what Africa needs.
            </h2>
            <p className="text-[13px] text-emerald-50/70 font-medium leading-[1.6]">
              Partner with EcoBond to turn operational and expansion-ready sustainability projects into bankable, scalable climate infrastructure.
            </p>
          </div>

          <div className="lg:w-[60%] w-full flex flex-col md:flex-row gap-4">
            
            {/* Capital Provider Card */}
            <div 
              id="capital-providers"
              onClick={() => { setSelectedPersona('Capital Provider'); setInquirySubmitted(false); }}
              className={`flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-5 flex items-center justify-between group transition-all shadow-lg cursor-pointer ${selectedPersona === 'Capital Provider' ? 'ring-2 ring-[#32d96c]' : ''}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center shrink-0">
                  <Landmark className="w-5 h-5 text-[#009b4d]" />
                </div>
                <div>
                  <span className="font-bold text-[13px] leading-tight block">I'm a<br/>Capital Provider</span>
                  <span className="text-[10px] text-gray-500 font-medium">DFIs, Funds, Banks</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </div>

            {/* Project Developer Card */}
            <div 
              id="developers"
              onClick={() => { setSelectedPersona('Project Developer'); setInquirySubmitted(false); }}
              className={`flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-5 flex items-center justify-between group transition-all shadow-lg cursor-pointer ${selectedPersona === 'Project Developer' ? 'ring-2 ring-[#32d96c]' : ''}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center shrink-0">
                  <HardHat className="w-5 h-5 text-[#009b4d]" />
                </div>
                <div>
                  <span className="font-bold text-[13px] leading-tight block">I'm a<br/>Project Developer</span>
                  <span className="text-[10px] text-gray-500 font-medium">Waste, Solar, Infra</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </div>

            {/* Institutional Partner Card */}
            <div 
              onClick={() => { setSelectedPersona('Institutional Partner'); setInquirySubmitted(false); }}
              className={`flex-1 bg-white hover:bg-[#f4faf7] text-gray-900 rounded-lg p-5 flex items-center justify-between group transition-all shadow-lg cursor-pointer ${selectedPersona === 'Institutional Partner' ? 'ring-2 ring-[#32d96c]' : ''}`}
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 bg-[#e8f8ef] rounded-md flex items-center justify-center shrink-0">
                  <Building2 className="w-5 h-5 text-[#009b4d]" />
                </div>
                <div>
                  <span className="font-bold text-[13px] leading-tight block">Institutional /<br/>Public Partner</span>
                  <span className="text-[10px] text-gray-500 font-medium">Agencies, Programs</span>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-[#009b4d] transition-colors transform group-hover:translate-x-1" />
            </div>

          </div>
          
        </div>

        {/* Interactive Direct Intake Drawer */}
        {selectedPersona && (
          <div className="mt-8 bg-[#051d10] border border-white/15 rounded-xl p-6 md:p-8 transition-all duration-300 animate-fadeIn">
            <div className="flex justify-between items-start mb-6">
              <div>
                <span className="text-[10px] font-bold tracking-widest text-[#32d96c] uppercase">Direct Engagement Channel</span>
                <h3 className="text-xl font-bold text-white mt-1">Connect with EcoBond: {selectedPersona}</h3>
                <p className="text-[12px] text-gray-300 mt-1">
                  {selectedPersona === 'Capital Provider' && "Access our screened, investment-ready pipeline across recycling, waste-to-energy, and renewable energy."}
                  {selectedPersona === 'Project Developer' && "Submit your project for EcoBond's 4-pillar technical, financial, legal, and impact screening."}
                  {selectedPersona === 'Institutional Partner' && "Partner with EcoBond on municipal pipelines, strategic origination, and de-risking frameworks."}
                </p>
              </div>
              <button 
                onClick={() => setSelectedPersona(null)}
                className="text-gray-400 hover:text-white text-xs font-semibold px-2 py-1"
              >
                Close ✕
              </button>
            </div>

            {inquirySubmitted ? (
              <div className="p-6 bg-emerald-950/60 border border-[#32d96c]/40 rounded-lg text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#32d96c] mx-auto" />
                <h4 className="text-base font-bold text-white">Inquiry Registered</h4>
                <p className="text-xs text-gray-300 max-w-md mx-auto">
                  Thank you. The EcoBond partnerships and structuring team (contact: <span className="text-emerald-400 font-mono">uyotdavid@gmail.com</span>) will review your parameters and follow up promptly.
                </p>
                <button
                  onClick={() => { setInquirySubmitted(false); setSelectedPersona(null); }}
                  className="mt-3 text-xs font-bold text-[#32d96c] hover:underline"
                >
                  Submit another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-1">Your Full Name</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Uyot"
                    className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-1">Organization / Company</label>
                  <input
                    type="text"
                    required
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Wigwe & Partners / DFI"
                    className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-medium text-gray-300 mb-1">Corporate Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@organization.com"
                    className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
                  />
                </div>
                <div className="md:col-span-3">
                  <label className="block text-[11px] font-medium text-gray-300 mb-1">
                    {selectedPersona === 'Project Developer' ? 'Project Overview (Sector, Location, CAPEX required)' : 'Investment / Partnership Mandate'}
                  </label>
                  <textarea
                    rows={2}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    placeholder={
                      selectedPersona === 'Project Developer'
                        ? 'e.g. 500 tons/day Waste-to-Energy facility in Lagos seeking $5M debt/equity expansion'
                        : 'e.g. Mandate for small-scale African renewable & waste infrastructure, ticket size $1M–$10M'
                    }
                    className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
                  />
                </div>
                <div className="md:col-span-3 flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setSelectedPersona(null)}
                    className="px-4 py-2 rounded-md text-xs font-semibold text-gray-400 hover:text-white"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 rounded-md text-xs font-bold text-[#031d10] bg-[#32d96c] hover:bg-[#2bc45d] transition-all flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    Submit {selectedPersona} Inquiry
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
