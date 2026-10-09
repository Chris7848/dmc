import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import {
  Landmark,
  ShieldCheck,
  MapPin,
  DollarSign,
  Lock,
  Unlock,
  FileSearch,
  Filter,
  Search,
  ArrowRight,
  TrendingUp,
  Sparkles,
  Building2,
  Clock
} from 'lucide-react';

export default function CapitalPipelineShell() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sectorFilter, setSectorFilter] = useState('all');
  const [instrumentFilter, setInstrumentFilter] = useState('all');
  const [countryFilter, setCountryFilter] = useState('all');

  useEffect(() => {
    loadPipeline();
  }, []);

  const loadPipeline = () => {
    const all = ecobondDataService.getProjects();
    setProjects(all);
  };

  const filtered = projects.filter((p) => {
    const matchesSearch =
      p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.organization_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.country.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesSector = sectorFilter === 'all' || p.sector === sectorFilter;
    const matchesInstrument =
      instrumentFilter === 'all' || p.capital_instrument_target === instrumentFilter;
    const matchesCountry = countryFilter === 'all' || p.country === countryFilter;

    return matchesSearch && matchesSector && matchesInstrument && matchesCountry;
  });

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-blue-600 mb-1 flex items-center gap-1.5">
            <Landmark className="w-4 h-4 text-blue-600" />
            Institutional Capital Provider Portal
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Curated Climate Deal Flow Pipeline
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Active Institution: <strong className="text-gray-800">{user?.organization_name}</strong> · Representative: {user?.full_name} ({user?.title})
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 text-blue-900 border border-blue-200">
            [INSTITUTIONAL PIPELINE · SAMPLE DATA]
          </span>
        </div>
      </div>

      {/* Summary KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">Available Investment Pipeline</div>
          <div className="text-2xl font-bold text-gray-900">
            ${(projects.reduce((acc, p) => acc + (p.target_raise_usd || 0), 0) / 1000000).toFixed(1)}M USD
          </div>
          <div className="text-[11px] text-gray-400 mt-1">{projects.length} Total Transition Assets</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">Investment-Ready Assets</div>
          <div className="text-2xl font-bold text-emerald-600">
            {projects.filter(p => p.stage === 'investment_ready').length}
          </div>
          <div className="text-[11px] text-gray-400 mt-1">Underwritten with Grade A Scorecard</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="text-xs font-semibold text-gray-500 mb-1">Target Instruments</div>
          <div className="text-2xl font-bold text-blue-600">Senior Debt & Mezzanine</div>
          <div className="text-[11px] text-gray-400 mt-1">Blended finance de-risking structures</div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-4 shadow-xs flex flex-col md:flex-row justify-between items-stretch md:items-center gap-3">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Search by project title, developer sponsor, country, or city..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2 border border-gray-200 rounded-lg text-xs focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          {/* Sector Filter */}
          <select
            value={sectorFilter}
            onChange={(e) => setSectorFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Sectors</option>
            <option value="waste_to_energy">Waste-to-Energy</option>
            <option value="mini_grids">Mini-Grids / Solar</option>
            <option value="clean_mobility">Clean Mobility</option>
            <option value="sustainable_biomass">Sustainable Biomass</option>
          </select>

          {/* Instrument Filter */}
          <select
            value={instrumentFilter}
            onChange={(e) => setInstrumentFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Instruments</option>
            <option value="senior_debt">Senior Debt</option>
            <option value="subordinated_debt">Subordinated / Mezzanine</option>
            <option value="blended_finance">Blended Finance</option>
            <option value="equity">Equity</option>
          </select>

          {/* Country Filter */}
          <select
            value={countryFilter}
            onChange={(e) => setCountryFilter(e.target.value)}
            className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-medium text-gray-700 bg-white focus:outline-none focus:ring-1 focus:ring-blue-500"
          >
            <option value="all">All Countries</option>
            <option value="Nigeria">Nigeria</option>
            <option value="Kenya">Kenya</option>
            <option value="Ghana">Ghana</option>
            <option value="Rwanda">Rwanda</option>
          </select>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.length > 0 ? (
          filtered.map((proj) => {
            const assessment = ecobondDataService.getAssessment(proj.id);
            const isInvestmentReady = proj.stage === 'investment_ready';

            return (
              <div
                key={proj.id}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Top Card Strip */}
                  <div className="p-5 pb-3">
                    <div className="flex justify-between items-start gap-2 mb-2">
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-blue-50 text-blue-700 border border-blue-200">
                        {proj.sector.replace('_', ' ')}
                      </span>
                      {isInvestmentReady ? (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                          <ShieldCheck className="w-3 h-3 text-emerald-600" /> Investment-Ready
                        </span>
                      ) : (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wide bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                          <Clock className="w-3 h-3 text-amber-600" /> In Due Diligence
                        </span>
                      )}
                    </div>

                    <h3 className="text-base font-bold text-gray-900 leading-snug line-clamp-2">
                      <Link
                        to={`/app/capital/projects/${proj.id}`}
                        className="hover:text-blue-700 transition-colors"
                      >
                        {proj.title}
                      </Link>
                    </h3>

                    <div className="text-[11px] text-gray-500 mt-1 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-gray-400" /> {proj.city}, {proj.country} · {proj.organization_name}
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="px-5 pb-4">
                    <p className="text-xs text-gray-600 line-clamp-3 leading-relaxed">
                      {proj.summary}
                    </p>
                  </div>

                  {/* Key Metrics Strip */}
                  <div className="bg-gray-50 px-5 py-3 border-y border-gray-100 grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Target Raise</span>
                      <span className="font-bold text-gray-900 text-sm flex items-center">
                        <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
                        ${(proj.target_raise_usd / 1000000).toFixed(1)}M USD
                      </span>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase font-bold text-gray-400 block">Instrument Target</span>
                      <span className="font-semibold text-gray-800 capitalize">
                        {proj.capital_instrument_target?.replace('_', ' ') || 'Senior Debt'}
                      </span>
                    </div>
                  </div>

                  {/* Assessment Badge */}
                  {assessment && (
                    <div className="px-5 py-2.5 bg-emerald-50/40 border-b border-emerald-100 flex justify-between items-center text-xs">
                      <span className="text-emerald-800 font-semibold text-[11px]">EcoBond 4-Pillar Score:</span>
                      <span className="font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded text-[11px]">
                        {assessment.overall_score}/100 Grade A
                      </span>
                    </div>
                  )}
                </div>

                {/* Actions Footer */}
                <div className="p-4 bg-white flex items-center justify-between gap-2 border-t border-gray-100">
                  <Link
                    to={`/app/capital/projects/${proj.id}`}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-gray-700 hover:text-gray-900 border border-gray-200 hover:border-gray-300 transition-colors flex items-center justify-center gap-1.5"
                  >
                    <FileSearch className="w-3.5 h-3.5" /> View Teaser
                  </Link>

                  <Link
                    to={`/app/capital/projects/${proj.id}`}
                    className="flex-1 py-2 px-3 rounded-lg text-xs font-bold text-white bg-blue-600 hover:bg-blue-700 transition-colors flex items-center justify-center gap-1.5 shadow-2xs"
                  >
                    <Lock className="w-3.5 h-3.5" /> Deal Room & VDR
                  </Link>
                </div>

              </div>
            );
          })
        ) : (
          <div className="col-span-3 py-12 text-center text-gray-400 bg-white rounded-xl border border-gray-200">
            No projects found matching the selected filters.
          </div>
        )}
      </div>

    </div>
  );
}
