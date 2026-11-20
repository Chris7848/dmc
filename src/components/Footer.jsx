import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Youtube, Mail, ArrowRight } from 'lucide-react';
import Logo from '../assets/eco2.jpg';

function XIcon({ className = "w-[16px] h-[16px]" }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className={className} fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-[#03110a] text-white pt-16 pb-8 border-t border-[#123624]">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          
          {/* Logo & Copyright (Left) */}
          <div className="lg:col-span-2 flex flex-col h-full">
            <div className="flex items-center gap-2 mb-8">
              <img src={Logo} alt="EcoBond Logo" className="w-8 h-8 object-contain rounded-sm bg-white p-0.5" />
              <div className="flex flex-col justify-center">
                <span className="text-xl font-bold tracking-tight leading-none mb-0.5">EcoBond</span>
                <span className="text-[9px] text-gray-400 font-medium tracking-[0.05em] uppercase leading-none">Climate Infrastructure Finance</span>
              </div>
            </div>
            <div className="text-[11px] text-gray-500 mt-auto hidden lg:block font-medium">
              &copy; 2025 EcoBond.<br/>All rights reserved.
            </div>
          </div>

          {/* About */}
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold mb-4 uppercase tracking-[0.1em] text-gray-400">About EcoBond</h4>
            <p className="text-[12px] text-gray-400 leading-[1.6] font-medium pr-2">
              We unlock capital for the infrastructure Africa needs to build a cleaner, more resilient future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold mb-4 uppercase tracking-[0.1em] text-gray-400">Quick Links</h4>
            <ul className="space-y-2.5 text-[12px] font-medium text-gray-400">
              <li><a href="/#about" className="hover:text-[#32d96c] transition-colors">About</a></li>
              <li><a href="/#infrastructure" className="hover:text-[#32d96c] transition-colors">Infrastructure</a></li>
              <li><a href="/#how-it-works" className="hover:text-[#32d96c] transition-colors">How It Works</a></li>
              <li><a href="/#initiatives" className="hover:text-[#32d96c] transition-colors">Delivery Tracks</a></li>
              <li><a href="/#impact" className="hover:text-[#32d96c] transition-colors">Impact Mandate</a></li>
              <li><Link to="/faq" className="hover:text-[#32d96c] transition-colors">FAQs</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="lg:col-span-1">
            <h4 className="text-[10px] font-bold mb-4 uppercase tracking-[0.1em] text-gray-400">Connect</h4>
            <p className="text-[11px] text-gray-400 mb-2 leading-relaxed">
              Deal & Partnership Inquiries:
            </p>
            <a href="mailto:uyotdavid@gmail.com" className="text-[11px] text-[#32d96c] hover:underline font-mono block mb-4">
              uyotdavid@gmail.com
            </a>
            <div className="flex space-x-3.5">
              <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-[#32d96c] transition-colors"><Linkedin className="w-[18px] h-[18px]" strokeWidth={1.5} /></a>
              <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-[#32d96c] transition-colors"><Twitter className="w-[18px] h-[18px]" strokeWidth={1.5} /></a>
              <a href="#" aria-label="YouTube" className="text-gray-400 hover:text-[#32d96c] transition-colors"><Youtube className="w-[18px] h-[18px]" strokeWidth={1.5} /></a>
              <a href="mailto:uyotdavid@gmail.com" aria-label="Email" className="text-gray-400 hover:text-[#32d96c] transition-colors"><Mail className="w-[18px] h-[18px]" strokeWidth={1.5} /></a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="lg:col-span-1"> 
            <h4 className="text-[10px] font-bold mb-4 uppercase tracking-[0.1em] text-gray-400">Newsletter</h4>
            <p className="text-[11px] font-medium text-gray-400 mb-3 leading-[1.5]">
              Stay updated on African climate infrastructure insights.
            </p>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter work email" 
                className="bg-[#0a1f14] text-[12px] text-white px-3 py-2 rounded-l-md focus:outline-hidden focus:ring-1 focus:ring-[#32d96c] w-full border border-[#163b27] placeholder-gray-600"
              />
              <button 
                type="submit" 
                className="bg-[#009b4d] hover:bg-[#32d96c] text-white px-3 py-2 rounded-r-md transition-colors flex items-center justify-center border border-[#009b4d]"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-6 border-t border-[#123624] text-[11px] text-gray-500 font-medium space-y-3">
          <p className="text-[10.5px] leading-relaxed text-gray-500">
            <strong>Disclaimer:</strong> EcoBond operates as a climate infrastructure origination, structuring, and capital mobilization platform. Market figures cited reflect published macroeconomic and development finance data. Demonstration pipelines, targets, and sample models are presented for illustrative pilot demonstration purposes.
          </p>
          <div className="flex flex-col md:flex-row justify-between items-center pt-2">
            <div>
              &copy; 2025 EcoBond. Building the financial infrastructure for Africa's climate transition.
            </div>
            <div className="flex space-x-4 mt-2 md:mt-0">
              <Link to="/faq" className="hover:text-gray-300 transition-colors">FAQs</Link>
              <Link to="/education" className="hover:text-gray-300 transition-colors">Research</Link>
              <Link to="/case-studies" className="hover:text-gray-300 transition-colors">Case Models</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
