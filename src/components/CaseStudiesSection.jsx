import React from 'react';
import { Globe, Award } from 'lucide-react';

export default function CaseStudiesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Proven WtE projects around the world</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-green-50 to-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-emerald-600" />
              <h3 className="text-2xl font-bold text-gray-900">Sweden's WtE Success</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Sweden converts 50% of household waste into energy, powering 1.3M homes and district heating 
              for 950,000 households. They even import waste from other countries.
            </p>
            <div className="flex items-center space-x-2 text-emerald-600 font-semibold">
              <Award className="w-5 h-5" />
              <span>99% waste diversion from landfills</span>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
            <div className="flex items-center space-x-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h3 className="text-2xl font-bold text-gray-900">Singapore's Model</h3>
            </div>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Despite limited land, Singapore processes 3M tons of waste annually through WtE, 
              generating 2-3% of national electricity needs while reducing landfill use by 90%.
            </p>
            <div className="flex items-center space-x-2 text-blue-600 font-semibold">
              <Award className="w-5 h-5" />
              <span>Extended landfill life to 2035+</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
