import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/eco2.jpg';

export default function Navigation() {
  return (
    <nav className="bg-[#051a10] border-b border-white/10 sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <img src={Logo} alt="EcoBond Logo" className="w-8 h-8 object-contain rounded-sm" />
            <div className="flex flex-col justify-center">
              <span className="text-xl font-bold text-white tracking-tight leading-none mb-0.5">EcoBond</span>
              <span className="text-[9px] text-emerald-100/60 font-medium tracking-[0.05em] uppercase leading-none">Climate Infrastructure Finance</span>
            </div>
          </Link>
          
          {/* Main Links */}
          <div className="hidden lg:flex items-center space-x-10">
            {['About', 'Infrastructure', 'How It Works', 'Impact', 'Insights'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/investor-portal"
              className="px-6 py-2 rounded-lg text-[13px] font-semibold text-white border border-white/20 hover:border-white transition-all"
            >
              Investor Access
            </Link>
            <a
              href="#partner"
              className="px-6 py-2 rounded-lg text-[13px] font-semibold text-white bg-[#009b4d] hover:bg-emerald-500 transition-all shadow-xs"
            >
              Partner With Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button className="text-white hover:text-emerald-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
