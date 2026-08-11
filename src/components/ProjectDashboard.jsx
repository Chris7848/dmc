import React from 'react';
import { Target, Users, Clock, Globe, Factory } from 'lucide-react';

const bondDetails = {
  totalRaised: "$2.4M",
  targetRaise: "$5M",
  investorsCount: "1,247",
  couponRate: "8%"
};

const projectPhases = [
  { phase: "Phase 1: Lagos WtE Facility", status: "Coming soon", progress: 75, location: "Lagos, Nigeria", capacity: "500 tons/day" },
  { phase: "Phase 2: Nairobi Expansion", status: "Coming soon", progress: 100, location: "Nairobi, Kenya", capacity: "350 tons/day" },
  { phase: "Phase 3: Accra Plant", status: "Coming soon", progress: 45, location: "Accra, Ghana", capacity: "400 tons/day" }
];

export default function ProjectDashboard() {
  return (
    <section className="py-16 bg-white" id="dashboard">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Dashboard</h2>
          <p className="text-xl text-gray-600">Real-time transparency powered by IoT oracles</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-linear-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Target className="w-10 h-10 text-emerald-600" />
              <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.totalRaised}</div>
            <div className="text-gray-600 mb-4">Raised of {bondDetails.targetRaise} Target</div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div className="bg-linear-to-r from-emerald-500 to-teal-600 h-3 rounded-full" style={{width: '48%'}}></div>
            </div>
          </div>

          <div className="bg-linear-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Users className="w-10 h-10 text-blue-600" />
              <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.investorsCount}</div>
            <div className="text-gray-600 mb-2">Active Investors</div>
            <div className="text-sm text-blue-600 font-semibold">+47 this week</div>
          </div>

          <div className="bg-linear-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
            <div className="flex items-center justify-between mb-4">
              <Clock className="w-10 h-10 text-purple-600" />
              <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                Coming soon
              </span>
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.couponRate}</div>
            <div className="text-gray-600 mb-2">Annual Returns</div>
          </div>
        </div>

        {/* Project Phases */}
        <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-8">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
            Active Projects
          </h3>

          <div className="space-y-5 sm:space-y-6">
            {projectPhases.map((project, idx) => (
              <div 
                key={idx} 
                className="border-b border-gray-200 pb-5 sm:pb-6 last:border-b-0"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-0 mb-4">
                  <div className="flex-1">
                   <div className="flex items-center gap-2 sm:gap-3 mb-1 sm:mb-2 w-full sm:w-[300px] whitespace-nowrap">
                      <h4 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 leading-tight truncate">
                        {project.phase}
                      </h4>
                      <span className={`px-2 py-[3px] rounded-full font-semibold shrink-0 text-[10px] sm:text-xs lg:text-sm ${
                            project.status === 'Active' ? 'bg-green-100 text-green-700' : 
                            project.status === 'Funded' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'
                          }`}>
                        <span className="sm:hidden">Coming soon</span>
                        <span className="hidden sm:inline">{project.status}</span>
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
                      <span className="flex items-center space-x-1">
                        <Globe className="w-4 h-4" />
                        <span>{project.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Factory className="w-4 h-4" />
                        <span>{project.capacity}</span>
                      </span>
                    </div>
                  </div>

                  <div className="mt-2 md:mt-0 md:ml-8 text-left md:text-right">
                    <div className="text-xl sm:text-2xl font-bold text-emerald-600">
                      {project.progress}%
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600">
                      Complete
                    </div>
                  </div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-linear-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${project.progress}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
