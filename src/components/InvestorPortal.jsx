import React from 'react';
import { BarChart3, DollarSign, Activity, Lock, CheckCircle } from 'lucide-react';

export default function InvestorPortal({ setWalletConnected }) {
  return (
    <>
      <section className="py-16 bg-linear-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Investor Portal</h2>
            <p className="text-xl text-gray-600">Track everything in real-time once you invest</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-linear-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                <BarChart3 className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Portfolio Dashboard</h4>
                <p className="text-sm text-gray-600">Live view of all your holdings and performance</p>
              </div>
              <div className="bg-linear-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Payout History</h4>
                <p className="text-sm text-gray-600">Track all quarterly payments and returns</p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <Activity className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Impact Metrics</h4>
                <p className="text-sm text-gray-600">Your personal environmental contribution</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50">
              <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Wallet to Access Portal</h3>
              <p className="text-gray-600 mb-6">View detailed analytics, download tax reports, and manage your bonds</p>
              <button
                onClick={() => setWalletConnected(true)}
                className="bg-linear-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-xl transform hover:scale-105"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-linear-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Start Investing Today</h2>
          <p className="text-2xl mb-4 text-emerald-100">
            Join investors earning returns while powering Africa's future
          </p>
          <p className="text-xl mb-10 text-emerald-200">
            ✓ From $10  ✓ Good returns   ✓ Blockchain Secured  ✓ Tradeable Anytime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#invest" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
              Invest Now from $10
            </a>
            <button className="border-3 border-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xl transition-all">
              Schedule Call with Team
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Carbon Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Audited Smart Contracts</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
