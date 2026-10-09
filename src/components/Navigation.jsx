import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/eco2.jpg';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
          <div className="hidden lg:flex items-center space-x-8">
            <a href="/#about" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              About
            </a>
            <a href="/#infrastructure" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              Infrastructure
            </a>
            <a href="/#how-it-works" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              How It Works
            </a>
            <a href="/#initiatives" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              Delivery Tracks
            </a>
            <a href="/#impact" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              Impact Mandate
            </a>
            <Link to="/faq" className="text-[13px] font-semibold text-white/80 hover:text-emerald-400 transition-colors">
              FAQs
            </Link>
          </div>

          {/* Action Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link
              to="/login?role=capital_provider"
              className="px-4 py-2 rounded-lg text-[13px] font-semibold text-white border border-white/20 hover:border-emerald-400 hover:text-emerald-300 transition-all"
            >
              Capital Portal
            </Link>
            <Link
              to="/login?role=developer"
              className="px-5 py-2 rounded-lg text-[13px] font-semibold text-white bg-[#009b4d] hover:bg-emerald-500 transition-all shadow-xs"
            >
              Submit Project
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-white hover:text-emerald-400 p-1.5 rounded-md focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden pt-4 pb-3 border-t border-white/10 mt-3 space-y-3">
            <div className="flex flex-col space-y-2.5">
              <a
                href="/#about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                About
              </a>
              <a
                href="/#infrastructure"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                Infrastructure
              </a>
              <a
                href="/#how-it-works"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                How It Works
              </a>
              <a
                href="/#initiatives"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                Delivery Tracks
              </a>
              <a
                href="/#impact"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                Impact Mandate
              </a>
              <Link
                to="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-[14px] font-semibold text-white/90 hover:text-emerald-400 py-1"
              >
                FAQs
              </Link>
            </div>
            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <Link
                to="/login?role=capital_provider"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center px-4 py-2.5 rounded-lg text-[13px] font-semibold text-white border border-white/20 hover:border-emerald-400"
              >
                Capital Portal
              </Link>
              <Link
                to="/login?role=developer"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center px-4 py-2.5 rounded-lg text-[13px] font-semibold text-white bg-[#009b4d] hover:bg-emerald-500"
              >
                Submit Project
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
