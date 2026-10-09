import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import { PlusCircle, FileText, CheckCircle2, Clock, MapPin, DollarSign, Layers } from 'lucide-react';

export default function DeveloperDashboardShell() {
  const { user } = useAuth();
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const all = ecobondDataService.getProjects();
    // Developer views all projects created by their org
    setProjects(all);
  }, []);

  const getStageBadge = (stage) => {
    switch (stage) {
      case 'investment_ready':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300">Investment-Ready</span>;
      case 'assessing':
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300">4-Pillar Diligence</span>;
      default:
        return <span className="px-2.5 py-1 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300">In Screening</span>;
    }
  };

  return (
    <div className="space-y-6">
      
      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <div className="text-[11px] font-bold uppercase tracking-widest text-[#009b4d] mb-1">
            Project Developer Workspace
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user?.full_name}
          </h1>
          <p className="text-xs text-gray-500 mt-1">
            Organization: <strong className="text-gray-800">{user?.organization_name}</strong> · Lagos, Nigeria
          </p>
        </div>
        <Link
          to="/app/developer/submit"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 transition-all shadow-xs"
        >
          <PlusCircle className="w-4 h-4" /> Submit New Project
        </Link>
      </div>

      {/* Pipeline Summary Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Total Projects</span>
            <Layers className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-gray-900">{projects.length}</div>
          <div className="text-[11px] text-gray-500 mt-1">Expansion-ready pipeline</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>In 4-Pillar Underwriting</span>
            <Clock className="w-4 h-4 text-amber-600" />
          </div>
          <div className="text-2xl font-bold text-amber-600">
            {projects.filter(p => p.stage === 'assessing' || p.stage === 'screening').length}
          </div>
          <div className="text-[11px] text-gray-500 mt-1">Technical & legal screening</div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5 shadow-xs">
          <div className="flex items-center justify-between text-gray-500 text-xs font-semibold mb-2">
            <span>Investment-Ready Assets</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          </div>
          <div className="text-2xl font-bold text-emerald-600">
            {projects.filter(p => p.stage === 'investment_ready').length}
          </div>
          <div className="text-[11px] text-gray-500 mt-1">Live in Capital Provider pipeline</div>
        </div>
      </div>

      {/* Projects List */}
      <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-xs">
        <div className="px-6 py-4 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
          <h2 className="text-sm font-bold text-gray-900">Your Submitted Projects</h2>
          <span className="text-xs text-gray-400">Phase 2 Architecture Shell Active</span>
        </div>

        <div className="divide-y divide-gray-100">
          {projects.map((proj) => (
            <div key={proj.id} className="p-6 hover:bg-gray-50 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2.5">
                  <h3 className="text-base font-bold text-gray-900">{proj.title}</h3>
                  {getStageBadge(proj.stage)}
                </div>
                <p className="text-xs text-gray-600 line-clamp-2 max-w-3xl">
                  {proj.summary}
                </p>
                <div className="flex flex-wrap items-center gap-4 text-xs text-gray-500 pt-1">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-gray-400" /> {proj.city}, {proj.country}
                  </span>
                  <span className="flex items-center gap-1 font-medium text-emerald-700">
                    <DollarSign className="w-3.5 h-3.5" /> Target: ${Number(proj.target_raise_usd).toLocaleString()} USD
                  </span>
                  <span className="bg-gray-100 px-2 py-0.5 rounded text-[11px] font-semibold text-gray-700 capitalize">
                    {proj.sector.replace('_', ' ')}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-2 self-end md:self-center">
                <Link
                  to={`/app/developer/projects/${proj.id}`}
                  className="px-3.5 py-1.5 rounded text-xs font-semibold bg-emerald-50 border border-emerald-300 text-emerald-800 hover:bg-emerald-100 transition-colors flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5" /> View Workspace
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
