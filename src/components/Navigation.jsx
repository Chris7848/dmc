import React from 'react';
import Logo from '../assets/eco2.jpg';
import { Wallet } from 'lucide-react';

export default function Navigation({ walletConnected, setWalletConnected }) {
  return (
    <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
            <img
              src={Logo}
              alt="Logo"
              className="w-10 h-auto sm:w-12 md:w-16 lg:w-20"
            />
            <div className="flex flex-col">
              <div className="text-lg sm:text-xl md:text-2xl font-bold bg-linear-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                ECOBOND
              </div>
              <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
                Waste-to-Energy Bonds
              </div>
            </div>
          </div>
          
          <div className="hidden md:flex space-x-8">
            {['Dashboard', 'Invest', 'Impact', 'About'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          <button
            onClick={() => setWalletConnected(!walletConnected)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
              walletConnected
                ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                : 'bg-linear-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg'
            }`}
          >
            <Wallet className="w-5 h-5" />
            <span>{walletConnected ? '0x7a2b...9c4f' : 'Connect Wallet'}</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
