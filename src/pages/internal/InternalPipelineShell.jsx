import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import {
  ShieldCheck,
  ClipboardCheck,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertCircle,
  ArrowUpRight,
  ExternalLink,
  ChevronRight,
  Layers,
  MapPin,
  DollarSign
} from 'lucide-react';

export default function InternalPipelineShell() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [stageFilter, setStageFilter] = useState('all'); // 'all' | 'screening' | 'assessing' | 'investment_ready'
  const [sectorFilter, setSectorFilter] = useState('all');

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = () => {
    const all = ecobondDataService.getProjects();
    setProjects(all);
  };

  const filteredProjects = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.organization_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.country.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.city.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesStage =
      stageFilter === 'all' ||
      (stageFilter === 'screening' && p.stage === 'screening') ||
      (stageFilter === 'assessing' && p.stage === 'assessing') ||
      (stageFilter === 'investment_ready' && p.stage === 'investment_ready');

    const matchesSector = sectorFilter === 'all' || p.sector === sectorFilter;

    return matchesSearch && matchesStage && matchesSector;
  });

  const handleQuickAdvance = (projectId, currentStage) => {
    const nextStage = currentStage === 'screening' ? 'assessing' : 'investment_ready';
    ecobondDataService.updateProjectStage(projectId, nextStage);
    loadProjects();
  };

  return (
    <div className="space-y-6">
      
      {/* Top Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-purple-700 mb-1 flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            EcoBond Underwriting & Structuring Desk
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Origination Queue & 4-Pillar Diligence
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Assessor: <strong className="text-gray-800">{user?.full_name}</strong> · Role: {user?.title} · Desk: Institutional Climate Underwriting
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-50 text-purple-900 border border-purple-200">
            [INTERNAL DESK PREVIEW]
          </span>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">Total Pipeline Assets</div>
          <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
          <div className="text-[11px] text-gray-400 mt-1">Sourced across African markets</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">In Initial Screening</div>
          <div className="text-2xl font-bold text-blue-600">
            {projects.filter(p => p.stage === 'screening').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">Intake triage & eligibility</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">In 4-Pillar Diligence</div>
          <div className="text-2xl font-bold text-amber-600">
            {projects.filter(p => p.stage === 'assessing').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">Technical, legal & ESG scoring</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">Published Investment-Ready</div>
          <div className="text-2xl font-bold text-emerald-600">
            {projects.filter(p => p.stage === 'investment_ready').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">Syndicated to DFIs & Funds</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by project name, developer sponsor, country, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-purple-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Stage Filter */}
          <select
            value={stageFilter}
            onChange={(e) => setStageFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="all">All Lifecycle Stages</option>
            <option value="screening">Stage: Screening Only</option>
            <option value="assessing">Stage: 4-Pillar Diligence</option>
            <option value="investment_ready">Stage: Investment-Ready</option>
          </select>

          {/* Sector Filter */}
          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="all">All Transition Sectors</option>
            <option value="waste_to_energy">Waste-to-Energy</option>
            <option value="mini_grids">Mini-Grids / Solar</option>
            <option value="clean_mobility">Clean Mobility</option>
            <option value="sustainable_biomass">Sustainable Biomass</option>
          </select>
        </div>
      </div>

      {/* Origination Queue Table */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Origination Deal Pipeline</h2>
            <p className="text-[11px] text-gray-500">Showing {filteredProjects.length} projects awaiting diligence & structuring</p>
          </div>
          <span className="text-[11px] font-semibold text-purple-700 bg-purple-50 px-2.5 py-1 rounded">
            4-Pillar Underwriting Standard
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="bg-gray-50 border-b border-gray-200 text-gray-500 font-bold uppercase text-[10px] tracking-wider">
              <tr>
                <th className="py-3 px-6">Project & Sponsor</th>
                <th className="py-3 px-4">Location & Sector</th>
                <th className="py-3 px-4">Target Raise & Instrument</th>
                <th className="py-3 px-4">Underwriting Status</th>
                <th className="py-3 px-4">4-Pillar Composite</th>
                <th className="py-3 px-6 text-right">Desk Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((proj) => {
                  const assessment = ecobondDataService.getAssessment(proj.id);
                  return (
                    <tr key={proj.id} className="hover:bg-gray-50/80 transition-colors">
                      <td className="py-4 px-6">
                        <div className="font-bold text-gray-900 text-sm hover:text-purple-700 transition-colors">
                          <Link to={`/app/internal/assess/${proj.id}`}>
                            {proj.title}
                          </Link>
                        </div>
                        <div className="text-[11px] text-gray-500 mt-0.5 flex items-center gap-1.5">
                          <span className="font-semibold text-gray-700">{proj.organization_name}</span>
                          <span>•</span>
                          <span>Cap: {proj.operational_capacity || 'N/A'}</span>
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div className="font-medium text-gray-800 flex items-center gap-1">
                          <MapPin className="w-3.5 h-3.5 text-gray-400" />
                          {proj.city}, {proj.country}
                        </div>
                        <div className="text-[11px] text-gray-500 capitalize mt-0.5">
                          {proj.sector?.replace('_', ' ')}
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        <div className="font-bold text-emerald-700">
                          ${Number(proj.target_raise_usd).toLocaleString()} USD
                        </div>
                        <div className="text-[11px] text-gray-500 capitalize mt-0.5">
                          {proj.capital_instrument_target?.replace('_', ' ') || 'Senior Debt'}
                        </div>
                      </td>

                      <td className="py-4 px-4">
                        {proj.stage === 'investment_ready' ? (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-200 inline-flex items-center gap-1">
                            <CheckCircle2 className="w-3 h-3 text-emerald-600" /> Investment-Ready
                          </span>
                        ) : proj.stage === 'assessing' ? (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-amber-100 text-amber-800 border border-amber-200 inline-flex items-center gap-1">
                            <Clock className="w-3 h-3 text-amber-600" /> 4-Pillar Diligence
                          </span>
                        ) : (
                          <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-200 inline-flex items-center gap-1">
                            <Clock className="w-3 h-3 text-blue-600" /> Inbound Screening
                          </span>
                        )}
                      </td>

                      <td className="py-4 px-4">
                        {assessment ? (
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-bold text-gray-900 text-sm">
                                {assessment.overall_score}/100
                              </span>
                              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div
                                  className={`h-full ${
                                    assessment.overall_score >= 75 ? 'bg-emerald-500' : 'bg-amber-500'
                                  }`}
                                  style={{ width: `${assessment.overall_score}%` }}
                                />
                              </div>
                            </div>
                            <div className="text-[10px] text-gray-400 mt-0.5">
                              T:{assessment.technical_score} · F:{assessment.financial_score} · L:{assessment.legal_score} · E:{assessment.impact_score}
                            </div>
                          </div>
                        ) : (
                          <span className="text-gray-400 italic">Scorecard Pending</span>
                        )}
                      </td>

                      <td className="py-4 px-6 text-right space-x-2">
                        <Link
                          to={`/app/internal/assess/${proj.id}`}
                          className="px-3 py-1.5 rounded-lg text-xs font-bold bg-purple-600 hover:bg-purple-700 text-white transition-colors inline-flex items-center gap-1.5 shadow-xs"
                        >
                          <ClipboardCheck className="w-3.5 h-3.5" />
                          <span>{assessment ? 'Review Scorecard' : 'Start Diligence'}</span>
                        </Link>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="6" className="py-8 text-center text-gray-400">
                    No projects found matching the current search criteria.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
