import React from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import { Mail, ArrowRight } from 'lucide-react';

const faqs = [
  {
    q: "What is EcoBond's role in African climate infrastructure?",
    a: "EcoBond operates as the missing origination and structuring layer. Africa faces a >$240B annual climate-finance gap, yet capital remains unallocated because many projects lack the rigorous assessment, financial structuring, and investment readiness required by institutional funders. EcoBond identifies, de-risks, and structures expansion-ready projects so capital can be deployed efficiently."
  },
  {
    q: "What is the 4-Pillar Assessment methodology?",
    a: "Every project undergoes structured underwriting across four pillars: Technical Feasibility (engineering viability, equipment warranties, supply continuity), Financial Viability (revenue models, debt service coverage, unit economics), Legal & Regulatory (permits, land titles, SPV structuring), and ESG/Impact (verified emissions avoidance, waste diversion, job creation)."
  },
  {
    q: "What financing instruments and capital providers does EcoBond work with?",
    a: "We structure bankable capital stacks incorporating senior project debt, mezzanine loans, equity, and concessional/blended finance. We match these structured assets with Development Finance Institutions (DFIs), infrastructure funds, climate funds, commercial banks, and impact investors."
  },
  {
    q: "What sectors does EcoBond prioritize?",
    a: "Our mandate concentrates on four operational and expansion-ready verticals: Waste Infrastructure, Recycling Facilities & Materials Recovery, Clean & Distributed Renewable Energy (such as mini-grids and micro-solar), and Climate Resilience Infrastructure."
  },
  {
    q: "What is EcoBond's commercial business model?",
    a: "EcoBond operates a transparent commercial model: milestone-based Project Structuring fees during preparation, a 4% Success Fee upon successful capital mobilization at financial close, and an ongoing 0.5%–1% annual platform and project servicing fee for continued monitoring and impact verification."
  },
  {
    q: "How do capital providers access confidential project data rooms?",
    a: "Qualified institutional capital providers can browse vetted project teasers and request controlled Virtual Data Room (VDR) access to review comprehensive Investment Memoranda, audited financials, technical feasibility reports, and legal documentation under confidentiality terms."
  }
];

export default function FAQSection() {
  return (
    <div className="min-h-screen bg-white flex flex-col justify-between">
      <Navigation />

      <main className="py-16 flex-1">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="text-[#009b4d] font-bold tracking-[0.1em] text-[11px] uppercase mb-2">Institutional FAQs</div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base text-gray-600 max-w-xl mx-auto">
              Everything you need to know about EcoBond's origination, 4-pillar assessment, and capital mobilization process.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-[#fafafa] border border-gray-200 rounded-xl p-6 hover:border-emerald-300 transition-all shadow-2xs">
                <h2 className="font-bold text-gray-900 mb-3 text-base flex items-start">
                  <span className="bg-[#009b4d] text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-3 shrink-0 mt-0.5">
                    ?
                  </span>
                  {faq.q}
                </h2>
                <p className="text-[13.5px] text-gray-600 leading-relaxed ml-8">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-linear-to-br from-[#0a2f1d] to-[#051a10] text-white rounded-2xl p-8 text-center shadow-lg">
            <h3 className="text-2xl font-bold mb-3">Looking to Partner or Deploy Capital?</h3>
            <p className="text-sm text-emerald-100/80 mb-6 max-w-md mx-auto">
              Our partnerships and structuring team is available to discuss project origination mandates, DFI engagement, and capital provider requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/#partner"
                className="bg-[#32d96c] hover:bg-[#2bc45d] text-[#031d10] px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5"
              >
                Submit Partnership Inquiry <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="mailto:uyotdavid@gmail.com"
                className="border border-white/30 hover:border-white text-white px-6 py-3 rounded-lg font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center gap-1.5"
              >
                <Mail className="w-4 h-4" /> Contact Deal Team
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
