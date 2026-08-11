import React from 'react';
import { Shield } from 'lucide-react';

const bondDetails = {
  maturity: "5 Years",
  couponRate: "8%",
  minInvestment: "$10",
  nextPayout: "15 Days"
};

export default function BondDetails() {
  return (
    <section className="py-16 bg-linear-to-br from-slate-50 to-emerald-50" id="invest">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Green Bond Details</h2>
          <p className="text-xl text-gray-600">Tokenized bonds on Arbitrum</p>
        </div>

        <div className="space-y-6">
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Bond Information</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Maturity Period</span>
                <span className="font-bold text-gray-900">{bondDetails.maturity}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Annual Coupon Rate</span>
                <span className="font-bold text-emerald-600 text-xl">{bondDetails.couponRate}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Minimum Investment</span>
                <span className="font-bold text-gray-900">{bondDetails.minInvestment}</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-600">Payout Frequency</span>
                <span className="font-bold text-gray-900">Quarterly</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Secondary Market</span>
                <span className="font-bold text-blue-600">✓ Tradeable</span>
              </div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 text-blue-600 mt-1 shrink-0" />
              <div>
                <h4 className="font-bold text-gray-900 mb-2">Protection & Insurance</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  All projects would be backed by relevant entities based on your religion.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
