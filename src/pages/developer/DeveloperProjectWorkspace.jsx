import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import {
  ArrowLeft,
  FileText,
  Upload,
  CheckCircle2,
  Clock,
  AlertCircle,
  ShieldCheck,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
  FileCheck,
  Download,
  Plus,
  Info,
  Calendar,
  Lock
} from 'lucide-react';

export default function DeveloperProjectWorkspace() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [project, setProject] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview' | 'diligence' | 'vdr'

  // Document upload modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    title: '',
    category: 'technical_feasibility',
    is_confidential: true
  });
  const [uploadSuccess, setUploadSuccess] = useState(false);

  useEffect(() => {
    loadData();
  }, [id]);

  const loadData = () => {
    const proj = ecobondDataService.getProjectById(id);
    if (!proj) {
      // Fallback to first project if not found
      const all = ecobondDataService.getProjects();
      if (all.length > 0) {
        setProject(all[0]);
        setAssessment(ecobondDataService.getAssessment(all[0].id));
        setDocuments(ecobondDataService.getDocuments(all[0].id));
      }
      return;
    }
    setProject(proj);
    setAssessment(ecobondDataService.getAssessment(proj.id));
    setDocuments(ecobondDataService.getDocuments(proj.id));
  };

  const handleUploadSubmit = (e) => {
    e.preventDefault();
    if (!uploadForm.title.trim()) return;

    ecobondDataService.addDocument(
      {
        project_id: project.id,
        title: uploadForm.title,
        category: uploadForm.category,
        is_confidential: uploadForm.is_confidential,
        file_name: `${uploadForm.title.toLowerCase().replace(/[^a-z0-9]/g, '_')}.pdf`,
        file_size_bytes: 3100000
      },
      user
    );

    setUploadForm({ title: '', category: 'technical_feasibility', is_confidential: true });
    setUploadSuccess(true);
    setDocuments(ecobondDataService.getDocuments(project.id));
    setTimeout(() => {
      setUploadSuccess(false);
      setIsUploadOpen(false);
    }, 1500);
  };

  if (!project) {
    return (
      <div className="p-8 text-center bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500 mb-4">Project not found or loading...</p>
        <Link to="/app/developer" className="text-[#009b4d] font-bold text-sm">
          ← Return to Dashboard
        </Link>
      </div>
    );
  }

  // Determine stage progression
  const stages = [
    { key: 'submission', label: '1. Inbound Submission', status: 'complete' },
    {
      key: 'screening',
      label: '2. EcoBond Screening',
      status: project.stage === 'screening' ? 'current' : 'complete'
    },
    {
      key: 'assessing',
      label: '3. 4-Pillar Underwriting',
      status:
        project.stage === 'assessing'
          ? 'current'
          : project.stage === 'investment_ready'
          ? 'complete'
          : 'upcoming'
    },
    {
      key: 'investment_ready',
      label: '4. Investment-Ready Syndication',
      status: project.stage === 'investment_ready' ? 'current' : 'upcoming'
    }
  ];

  return (
    <div className="space-y-6">
      {/* Top Navigation & Breadcrumbs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to="/app/developer"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Submitted Pipeline
        </Link>
        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-200">
            [SAMPLE PIPELINE WORKSPACE]
          </span>
          <span className="text-xs text-gray-400">ID: {project.id}</span>
        </div>
      </div>

      {/* Project Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-100 text-[#009b4d] uppercase tracking-wider">
                {project.sector?.replace('_', ' ')}
              </span>
              {project.stage === 'investment_ready' ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" /> Investment-Ready
                </span>
              ) : project.stage === 'assessing' ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> 4-Pillar Diligence Underway
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> EcoBond Screening
                </span>
              )}
            </div>

            <h1 className="text-2xl font-bold text-gray-900 leading-tight">
              {project.title}
            </h1>

            <p className="text-xs text-gray-600 max-w-3xl leading-relaxed">
              {project.summary}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-xs text-gray-500 pt-2">
              <span className="flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-gray-400" /> {project.organization_name}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gray-400" /> {project.city}, {project.country}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                <DollarSign className="w-3.5 h-3.5" /> Target Raise: ${Number(project.target_raise_usd).toLocaleString()} USD
              </span>
              <span className="flex items-center gap-1.5 font-medium text-gray-600">
                <Calendar className="w-3.5 h-3.5 text-gray-400" /> Logged: {new Date(project.created_at).toLocaleDateString()}
              </span>
            </div>
          </div>

          <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 min-w-[220px] flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                Target Instrument
              </span>
              <div className="text-sm font-bold text-gray-900 capitalize">
                {project.capital_instrument_target?.replace('_', ' ') || 'Senior Debt'}
              </div>
            </div>
            <div className="border-t border-gray-200 my-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                Capacity / Output
              </span>
              <div className="text-xs font-semibold text-gray-800">
                {project.operational_capacity || 'N/A'}
              </div>
            </div>
            <div className="border-t border-gray-200 my-2 pt-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-gray-500">
                Off-take Structure
              </span>
              <div className="text-xs font-semibold text-gray-800">
                {project.offtake_status || 'Under negotiation'}
              </div>
            </div>
          </div>
        </div>

        {/* Lifecycle Stepper */}
        <div className="mt-8 pt-6 border-t border-gray-100">
          <div className="text-[11px] font-bold uppercase tracking-widest text-gray-400 mb-3">
            EcoBond Origination & Underwriting Lifecycle
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {stages.map((stg, idx) => (
              <div
                key={stg.key}
                className={`p-3 rounded-lg border text-xs transition-all ${
                  stg.status === 'complete'
                    ? 'bg-emerald-50/50 border-emerald-200 text-emerald-900'
                    : stg.status === 'current'
                    ? 'bg-blue-50 border-blue-300 text-blue-900 font-bold ring-1 ring-blue-300'
                    : 'bg-gray-50 border-gray-200 text-gray-400'
                }`}
              >
                <div className="flex items-center gap-2">
                  {stg.status === 'complete' ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  ) : stg.status === 'current' ? (
                    <Clock className="w-4 h-4 text-blue-600 shrink-0 animate-pulse" />
                  ) : (
                    <div className="w-4 h-4 rounded-full border border-gray-300 flex items-center justify-center text-[10px] text-gray-400">
                      {idx + 1}
                    </div>
                  )}
                  <span className="truncate">{stg.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200 flex gap-6 text-xs font-bold">
        <button
          onClick={() => setActiveTab('overview')}
          className={`pb-3 px-1 border-b-2 transition-colors ${
            activeTab === 'overview'
              ? 'border-[#009b4d] text-[#009b4d]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Project Specifications & Economics
        </button>
        <button
          onClick={() => setActiveTab('diligence')}
          className={`pb-3 px-1 border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'diligence'
              ? 'border-[#009b4d] text-[#009b4d]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          4-Pillar Diligence Review
          {assessment && (
            <span className="px-1.5 py-0.2 rounded text-[10px] bg-emerald-100 text-emerald-800 font-bold">
              {assessment.overall_score}/100
            </span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('vdr')}
          className={`pb-3 px-1 border-b-2 transition-colors flex items-center gap-1.5 ${
            activeTab === 'vdr'
              ? 'border-[#009b4d] text-[#009b4d]'
              : 'border-transparent text-gray-500 hover:text-gray-800'
          }`}
        >
          Virtual Data Room (VDR)
          <span className="px-1.5 py-0.2 rounded text-[10px] bg-gray-200 text-gray-700">
            {documents.length}
          </span>
        </button>
      </div>

      {/* Tab 1: Overview & Economics */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Technical & Commercial Highlights */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
                Technical & Operational Architecture
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <span className="text-gray-400 block text-[11px]">Primary Sector</span>
                  <span className="font-semibold text-gray-800 capitalize">
                    {project.sector?.replace('_', ' ')}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px]">Geographic Footprint</span>
                  <span className="font-semibold text-gray-800">
                    {project.city}, {project.country}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px]">Operating Capacity / Yield</span>
                  <span className="font-semibold text-gray-800">
                    {project.operational_capacity || 'N/A'}
                  </span>
                </div>
                <div>
                  <span className="text-gray-400 block text-[11px]">Commercial Offtaker</span>
                  <span className="font-semibold text-gray-800">
                    {project.offtake_status || 'Under negotiation'}
                  </span>
                </div>
              </div>
            </div>

            {/* Capital Requirement Breakdown */}
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-gray-900 border-b border-gray-100 pb-3">
                Capital Raise & Structuring Objectives
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-[10px] font-bold uppercase text-gray-500">Target Facility</span>
                  <div className="text-lg font-bold text-gray-900 mt-1">
                    ${Number(project.target_raise_usd).toLocaleString()} USD
                  </div>
                  <span className="text-[10px] text-gray-400">Expansion & equipment CAPEX</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-[10px] font-bold uppercase text-gray-500">Target Instrument</span>
                  <div className="text-lg font-bold text-gray-900 mt-1 capitalize">
                    {project.capital_instrument_target?.replace('_', ' ')}
                  </div>
                  <span className="text-[10px] text-gray-400">Fixed coupon or mezzanine</span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <span className="text-[10px] font-bold uppercase text-gray-500">Syndication Status</span>
                  <div className="text-lg font-bold text-emerald-700 mt-1">
                    {project.stage === 'investment_ready' ? 'Open to DFIs' : 'Under Assessment'}
                  </div>
                  <span className="text-[10px] text-gray-400">EcoBond matching desk</span>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Diligence Summary */}
          <div className="space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
              <h2 className="text-sm font-bold text-gray-900 flex items-center justify-between">
                <span>Diligence Status</span>
                <span className="text-[11px] text-emerald-600 font-semibold">Active</span>
              </h2>
              <p className="text-xs text-gray-600 leading-relaxed">
                EcoBond analysts review technical feasibility, financial models, regulatory licensing, and ESG additionality before packaging this project for institutional capital providers.
              </p>
              <div className="pt-2 border-t border-gray-100 space-y-2 text-xs">
                <div className="flex justify-between items-center text-gray-600">
                  <span>Assigned Analyst:</span>
                  <span className="font-semibold text-gray-900">
                    {assessment?.assessor_name || 'EcoBond Structuring Desk'}
                  </span>
                </div>
                <div className="flex justify-between items-center text-gray-600">
                  <span>Target Turnaround:</span>
                  <span className="font-semibold text-gray-900">5-7 Business Days</span>
                </div>
              </div>
            </div>

            <div className="bg-emerald-900 text-white rounded-xl p-6 space-y-3">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-300">
                <Info className="w-4 h-4" /> EcoBond GTM Advisory
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed">
                Need structuring support for off-taker credit enhancement or local-currency hedging? EcoBond coordinates blended finance facilities with partner DFIs.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: 4-Pillar Diligence Review */}
      {activeTab === 'diligence' && (
        <div className="space-y-6">
          {assessment ? (
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
                <div>
                  <h2 className="text-base font-bold text-gray-900">
                    EcoBond 4-Pillar Underwriting Scorecard
                  </h2>
                  <p className="text-xs text-gray-500 mt-0.5">
                    Assessed by {assessment.assessor_name} on {new Date(assessment.assessed_at).toLocaleDateString()}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-gray-400 block">
                      Overall Composite Score
                    </span>
                    <span className="text-2xl font-bold text-emerald-600">
                      {assessment.overall_score}/100
                    </span>
                  </div>
                  <div className="h-10 w-10 rounded-full bg-emerald-100 text-[#009b4d] flex items-center justify-center font-bold text-sm">
                    {assessment.overall_score}%
                  </div>
                </div>
              </div>

              {/* 4 Pillars Breakdown */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Pillar 1: Technical */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Pillar 1: Technical & Engineering
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      {assessment.technical_score}/100
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {assessment.technical_notes || 'Engineering verification completed.'}
                  </p>
                </div>

                {/* Pillar 2: Financial */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Pillar 2: Financial & Commercial
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      {assessment.financial_score}/100
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {assessment.financial_notes || 'Financial model, DSCR and offtake verified.'}
                  </p>
                </div>

                {/* Pillar 3: Legal */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Pillar 3: Legal & Regulatory
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      {assessment.legal_score}/100
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {assessment.legal_notes || 'Land tenure and environmental permits verified.'}
                  </p>
                </div>

                {/* Pillar 4: ESG & Impact */}
                <div className="border border-gray-200 rounded-xl p-5 bg-gray-50/50 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                      Pillar 4: ESG & Additionality
                    </h3>
                    <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                      {assessment.impact_score}/100
                    </span>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    {assessment.impact_notes || 'IFC performance standards and GHG methodology verified.'}
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl p-8 text-center space-y-3 shadow-xs">
              <Clock className="w-10 h-10 text-amber-500 mx-auto" />
              <h3 className="text-base font-bold text-gray-900">
                4-Pillar Underwriting In Progress
              </h3>
              <p className="text-xs text-gray-500 max-w-md mx-auto">
                This project has been submitted to the EcoBond Structuring Desk. Once the initial document review is completed, full technical, financial, legal, and impact scores will appear here.
              </p>
            </div>
          )}
        </div>
      )}

      {/* Tab 3: Virtual Data Room (VDR) */}
      {activeTab === 'vdr' && (
        <div className="space-y-6">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
              <div>
                <h2 className="text-base font-bold text-gray-900">
                  Virtual Data Room (VDR) Document Vault
                </h2>
                <p className="text-xs text-gray-500 mt-0.5">
                  Institutional-grade repository for audited models, permits, feasibility reports, and contracts.
                </p>
              </div>
              <button
                onClick={() => setIsUploadOpen(true)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 transition-colors shadow-xs"
              >
                <Plus className="w-4 h-4" /> Upload Document
              </button>
            </div>

            {/* Document Listing */}
            <div className="divide-y divide-gray-100">
              {documents.length > 0 ? (
                documents.map((doc) => (
                  <div
                    key={doc.id}
                    className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-gray-50/50 px-2 rounded-lg transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                        <FileText className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-xs font-bold text-gray-900">{doc.title}</h4>
                          {doc.is_confidential && (
                            <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-gray-100 text-gray-600 flex items-center gap-0.5">
                              <Lock className="w-2.5 h-2.5" /> Confidential
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-3 text-[11px] text-gray-400 mt-1">
                          <span className="capitalize">{doc.category?.replace('_', ' ')}</span>
                          <span>•</span>
                          <span>{doc.file_name}</span>
                          <span>•</span>
                          <span>{(doc.file_size_bytes / (1024 * 1024)).toFixed(1)} MB</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 self-end sm:self-center">
                      <button
                        onClick={() => alert(`Simulated secure preview: "${doc.file_name}"\nConfidentiality: ${doc.is_confidential ? 'NDA Protected' : 'Public Teaser'}`)}
                        className="px-3 py-1.5 rounded text-xs font-semibold border border-gray-200 hover:border-gray-300 text-gray-700 flex items-center gap-1.5 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" /> Download / View
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="py-8 text-center text-xs text-gray-400">
                  No documents in the Data Room yet. Click "Upload Document" to attach permits or models.
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Upload Document Modal */}
      {isUploadOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Upload className="w-4 h-4 text-[#009b4d]" /> Upload VDR Document
              </h3>
              <button
                onClick={() => setIsUploadOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {uploadSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-gray-900">Document Uploaded</h4>
                <p className="text-xs text-gray-500">Document added to the Virtual Data Room repository.</p>
              </div>
            ) : (
              <form onSubmit={handleUploadSubmit} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Document Title *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. 2025 Audited Financial Statement & Ratio Analysis"
                    value={uploadForm.title}
                    onChange={(e) => setUploadForm({ ...uploadForm, title: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                  />
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Document Classification
                  </label>
                  <select
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm({ ...uploadForm, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                  >
                    <option value="technical_feasibility">Technical Feasibility & Engineering</option>
                    <option value="financial_model">Financial Model / Pro-Forma Cashflows</option>
                    <option value="legal_permits">Legal Licenses, Land Tenure & Permits</option>
                    <option value="esg_impact">ESG & Environmental Impact Assessment (EIA)</option>
                    <option value="offtake_contract">Off-take Agreement / Commercial LOI</option>
                    <option value="teaser">Executive Summary / Teaser</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="confidential_check"
                    checked={uploadForm.is_confidential}
                    onChange={(e) => setUploadForm({ ...uploadForm, is_confidential: e.target.checked })}
                    className="rounded text-[#009b4d] focus:ring-[#009b4d]"
                  />
                  <label htmlFor="confidential_check" className="text-gray-700 font-medium">
                    Confidential (Restricted to approved Capital Providers with signed NDA)
                  </label>
                </div>

                <div className="p-3 border-2 border-dashed border-gray-300 rounded-lg text-center bg-gray-50">
                  <Upload className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                  <span className="text-gray-500 text-[11px] block">Simulated local file selection</span>
                  <span className="text-[10px] text-gray-400">PDF, XLSX, DOCX up to 50MB</span>
                </div>

                <div className="flex justify-end gap-2 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsUploadOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#009b4d] text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                  >
                    Save to Data Room
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
