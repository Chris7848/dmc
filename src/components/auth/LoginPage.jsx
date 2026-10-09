import React, { useState } from 'react';
import { useNavigate, useSearchParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Logo from '../../assets/eco2.jpg';
import { Briefcase, Landmark, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const preselectRole = searchParams.get('role');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSelectRole = (roleKey) => {
    login(roleKey);
    if (roleKey === 'developer') navigate('/app/developer');
    else if (roleKey === 'capital_provider') navigate('/app/capital');
    else if (roleKey === 'internal_analyst') navigate('/app/internal/pipeline');
    else navigate('/app');
  };

  const handleStandardSubmit = (e) => {
    e.preventDefault();
    handleSelectRole(preselectRole || 'developer');
  };

  return (
    <div className="min-h-screen bg-[#051a10] text-white flex flex-col justify-between selection:bg-[#32d96c]/30 selection:text-[#009b4d]">
      
      {/* Top Bar */}
      <div className="max-w-[1400px] mx-auto w-full px-6 py-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <img src={Logo} alt="EcoBond" className="w-8 h-8 object-contain rounded-sm" />
          <div>
            <span className="text-xl font-bold text-white tracking-tight leading-none block">EcoBond</span>
            <span className="text-[9px] text-[#32d96c] uppercase font-bold tracking-widest leading-none block mt-0.5">
              Climate Infrastructure Finance
            </span>
          </div>
        </Link>
        <Link to="/" className="text-xs text-gray-300 hover:text-white flex items-center gap-1.5 transition-colors">
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Marketing Site
        </Link>
      </div>

      {/* Main Login Body */}
      <div className="max-w-4xl mx-auto w-full px-6 py-8 flex-1 flex flex-col justify-center">
        <div className="text-center mb-8">
          <span className="text-[11px] font-bold uppercase tracking-widest text-[#32d96c] block mb-2">
            Platform Gateway
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white mb-2">
            Access EcoBond Deal Platform
          </h1>
          <p className="text-sm text-gray-300 max-w-lg mx-auto">
            Choose your stakeholder role below to explore the authenticated deal workflows, or log in with corporate credentials.
          </p>
        </div>

        {/* 1-Click Fast Persona Cards */}
        <div className="grid md:grid-cols-3 gap-5 mb-8">
          
          {/* Card 1: Developer */}
          <div
            onClick={() => handleSelectRole('developer')}
            className="bg-white/5 border border-white/15 hover:border-[#32d96c] rounded-xl p-6 transition-all cursor-pointer group flex flex-col justify-between hover:bg-white/10"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-500/20 text-[#32d96c] flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Briefcase className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-[#32d96c] transition-colors">Project Developer</h2>
              <div className="text-[11px] font-semibold text-emerald-300 mb-3">CleanCycle Energy Africa</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Submit waste-to-energy, recycling, and solar projects; manage SPV data rooms and track 4-pillar review progress.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-[#32d96c]">
              <span>Enter Developer Portal</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 2: Capital Provider */}
          <div
            onClick={() => handleSelectRole('capital_provider')}
            className="bg-white/5 border border-white/15 hover:border-blue-400 rounded-xl p-6 transition-all cursor-pointer group flex flex-col justify-between hover:bg-white/10"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Landmark className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">Capital Provider</h2>
              <div className="text-[11px] font-semibold text-blue-300 mb-3">Climate Infrastructure Fund</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Browse curated, investment-ready pipelines, unlock Virtual Data Rooms, and submit Expressions of Interest (EOI).
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-blue-400">
              <span>Enter Capital Portal</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

          {/* Card 3: Assessor */}
          <div
            onClick={() => handleSelectRole('internal_analyst')}
            className="bg-white/5 border border-white/15 hover:border-purple-400 rounded-xl p-6 transition-all cursor-pointer group flex flex-col justify-between hover:bg-white/10"
          >
            <div>
              <div className="w-10 h-10 rounded-lg bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h2 className="text-lg font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">EcoBond Assessor</h2>
              <div className="text-[11px] font-semibold text-purple-300 mb-3">Deal Structuring Desk</div>
              <p className="text-xs text-gray-300 leading-relaxed mb-4">
                Screen inbound developer submissions, execute 4-pillar diligence scorecards, and promote deals to market.
              </p>
            </div>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-bold text-purple-400">
              <span>Enter Assessor Desk</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </div>
          </div>

        </div>

        {/* Alternative Standard Credentials Login */}
        <div className="bg-[#03140c] border border-white/10 rounded-xl p-6 max-w-lg mx-auto w-full">
          <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-4 text-center">
            Or Sign In With Corporate Credentials
          </h3>
          <form onSubmit={handleStandardSubmit} className="space-y-3.5">
            <div>
              <label className="block text-[11px] font-medium text-gray-300 mb-1">Corporate Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@organization.com"
                className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
              />
            </div>
            <div>
              <label className="block text-[11px] font-medium text-gray-300 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-[#0a2f1d] border border-white/20 rounded-md px-3 py-2 text-xs text-white placeholder-gray-500 focus:outline-none focus:border-[#32d96c]"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2.5 rounded-md text-xs font-bold text-[#031d10] bg-[#32d96c] hover:bg-[#2bc45d] transition-all"
            >
              Sign In to Platform
            </button>
          </form>
        </div>

      </div>

      {/* Footer */}
      <div className="py-4 text-center text-xs text-gray-500 border-t border-white/10">
        EcoBond Deal Platform Demonstration &copy; 2025. All sample assets are illustrative representations.
      </div>
    </div>
  );
}
