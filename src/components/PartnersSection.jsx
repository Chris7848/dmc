import React from 'react';
import { Users, DollarSign, CheckCircle, Zap, Link as LinkIcon, Activity } from 'lucide-react';

const partners = [
  { name: "Lagos Municipal Authority", type: "Government", icon: <Users className="w-6 h-6" /> },
  { name: "African Development Bank", type: "Financial", icon: <DollarSign className="w-6 h-6" /> },
  { name: "UN Clean Development", type: "Verification", icon: <CheckCircle className="w-6 h-6" /> },
  { name: "Arbitrum Foundation", type: "Technology", icon: <Zap className="w-6 h-6" /> }
];

export default function PartnersSection() {
  return (
    <section className="py-16 bg-linear-to-br from-slate-50 to-emerald-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners & Verification</h2>
          <p className="text-xl text-gray-600">Trusted by governments & Brands like <a href="http://chanjadatti.com" target="_blank" rel="noopener noreferrer">CHANJA DATTI</a></p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {partners.map((partner, idx) => (
            <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
              <div className="flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-xl mb-4">
                  {partner.icon}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{partner.type}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">Blockchain Integration</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <LinkIcon className="w-6 h-6 text-purple-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Arbitrum Blockchain</h4>
                <p className="text-sm text-gray-600">Fast, low cost transactions</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <Activity className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">IoT Oracles</h4>
                <p className="text-sm text-gray-600">Real-time data feeds from WtE facilities</p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <DollarSign className="w-6 h-6 text-emerald-600 mt-1" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Yields</h4>
                <p className="text-sm text-gray-600">Get access to good interest</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
