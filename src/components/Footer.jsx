import React from 'react';
import Logo from '../assets/eco2.jpg';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className=" p-2 rounded-xl">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-10 h-auto sm:w-12 md:w-16 lg:w-20"
                />
              </div>
              <span className="text-xl font-bold">ECOBOND</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Tokenized green bonds financing Africa's waste-to-energy revolution. Powered by Arbitrum blockchain.
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">Platform</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a></li>
              <li><a href="#invest" className="hover:text-emerald-400 transition-colors">Invest</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Marketplace</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Whitepaper</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Reports</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Risk Disclosure</a></li>
              <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 EcoBond. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Telegram</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">Discord</a>
            <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
