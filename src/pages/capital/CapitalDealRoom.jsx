import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import {
  ArrowLeft,
  ShieldCheck,
  Building2,
  MapPin,
  DollarSign,
  TrendingUp,
  FileText,
  Lock,
  Unlock,
  Download,
  CheckCircle2,
  AlertCircle,
  FileCheck,
  Send,
  Calendar,
  Layers,
  Award,
  Clock,
  Briefcase
} from 'lucide-react';

export default function CapitalDealRoom() {
  const { id } = useParams();
  const { user } = useAuth();

  const [project, setProject] = useState(null);
  const [assessment, setAssessment] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [vdrAccess, setVdrAccess] = useState(null);
  const [userEoi, setUserEoi] = useState(null);

  // NDA modal state
  const [isNdaModalOpen, setIsNdaModalOpen] = useState(false);
  const [ndaConfirmed, setNdaConfirmed] = useState(false);

  // EOI modal state
  const [isEoiModalOpen, setIsEoiModalOpen] = useState(false);
  const [eoiForm, setEoiForm] = useState({
    indicative_amount_usd: '',
    instrument_type: 'senior_debt',
    indicative_terms: '',
    disbursement_timeline: 'Q2 2026',
    indicative_pricing: 'SOFR + 600 bps'
  });
  const [eoiSuccess, setEoiSuccess] = useState(false);

  useEffect(() => {
    loadData();
  }, [id, user]);

  const loadData = () => {
    const proj = ecobondDataService.getProjectById(id);
    if (!proj) {
      const all = ecobondDataService.getProjects();
      if (all.length > 0) {
        initProjectData(all[0]);
      }
      return;
    }
    initProjectData(proj);
  };

  const initProjectData = (proj) => {
    setProject(proj);
    setAssessment(ecobondDataService.getAssessment(proj.id));
    setDocuments(ecobondDataService.getDocuments(proj.id));

    if (user) {
      const access = ecobondDataService.getDataRoomAccessForUser(proj.id, user.id);
      setVdrAccess(access);

      const allEois = ecobondDataService.getExpressionsOfInterest(proj.id);
      const existingEoi = allEois.find((e) => e.capital_provider_id === user.id);
      setUserEoi(existingEoi || null);

      if (!eoiForm.indicative_amount_usd) {
        setEoiForm((prev) => ({
          ...prev,
          indicative_amount_usd: Math.round(proj.target_raise_usd * 0.5)
        }));
      }
    }
  };

  const handleSignNda = () => {
    if (!project || !user) return;
    const access = ecobondDataService.requestDataRoomAccess(project.id, user, true);
    setVdrAccess(access);
    setIsNdaModalOpen(false);
    setNdaConfirmed(true);
    setTimeout(() => setNdaConfirmed(false), 4000);
  };

  const handleSubmitEoi = (e) => {
    e.preventDefault();
    if (!project || !user) return;

    const fullTerms = `${eoiForm.indicative_pricing} · Timeline: ${eoiForm.disbursement_timeline}. Notes: ${eoiForm.indicative_terms || 'Standard covenants subject to institutional credit committee approval.'}`;

    const newEoi = ecobondDataService.createExpressionOfInterest(
      {
        project_id: project.id,
        indicative_amount_usd: eoiForm.indicative_amount_usd,
        instrument_type: eoiForm.instrument_type,
        indicative_terms: fullTerms
      },
      user
    );

    setUserEoi(newEoi);
    setEoiSuccess(true);
    setTimeout(() => {
      setEoiSuccess(false);
      setIsEoiModalOpen(false);
    }, 2000);
  };

  if (!project) {
    return (
      <div className="p-8 text-center bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500 mb-4">Project not found or loading...</p>
        <Link to="/app/capital" className="text-blue-600 font-bold text-sm">
          ← Return to Capital Pipeline
        </Link>
      </div>
    );
  }

  const isUnlocked = vdrAccess?.status === 'approved';

  return (
    <div className="space-y-6">
      
      {/* Top Navigation */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to="/app/capital"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Deal Flow Pipeline
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
            [INSTITUTIONAL DEAL ROOM · SAMPLE DATA]
          </span>
          <span className="text-xs text-gray-400">Project Ref: {project.id}</span>
        </div>
      </div>

      {/* NDA Confirmation Banner */}
      {ndaConfirmed && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-4 flex items-center gap-2.5 text-xs font-semibold shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Bilateral Non-Disclosure Agreement executed successfully. All confidential documents and models unlocked!</span>
        </div>
      )}

      {/* Main Deal Summary Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-100 text-blue-800 uppercase tracking-wider">
                {project.sector?.replace('_', ' ')}
              </span>

              {project.stage === 'investment_ready' ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> EcoBond Investment-Ready
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> In Final Diligence
                </span>
              )}

              {isUnlocked ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <Unlock className="w-3 h-3 text-emerald-600" /> VDR Access Active
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-gray-100 text-gray-600 border border-gray-300 flex items-center gap-1">
                  <Lock className="w-3 h-3 text-gray-500" /> VDR Gated by NDA
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
                <Building2 className="w-3.5 h-3.5 text-gray-400" /> Sponsor: {project.organization_name}
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <MapPin className="w-3.5 h-3.5 text-gray-400" /> {project.city}, {project.country}
              </span>
              <span className="flex items-center gap-1.5 font-medium text-emerald-700">
                <DollarSign className="w-3.5 h-3.5" /> Target Facility: ${Number(project.target_raise_usd).toLocaleString()} USD
              </span>
            </div>
          </div>

          {/* Quick Actions Panel */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-2.5 min-w-[220px]">
            {userEoi ? (
              <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-xl text-xs space-y-1">
                <div className="flex items-center gap-1.5 text-emerald-800 font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>EOI Registered</span>
                </div>
                <div className="text-gray-900 font-bold">
                  ${Number(userEoi.indicative_amount_usd).toLocaleString()} USD
                </div>
                <div className="text-[11px] text-gray-500 capitalize">
                  {userEoi.instrument_type?.replace('_', ' ')}
                </div>
              </div>
            ) : (
              <button
                onClick={() => setIsEoiModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 transition-colors flex items-center justify-center gap-2 shadow-xs"
              >
                <Send className="w-3.5 h-3.5" /> Submit Expression of Interest
              </button>
            )}

            {!isUnlocked && (
              <button
                onClick={() => setIsNdaModalOpen(true)}
                className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-blue-700 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors flex items-center justify-center gap-2"
              >
                <Lock className="w-3.5 h-3.5" /> Sign NDA to Unlock VDR
              </button>
            )}
          </div>
        </div>

        {/* Financial & Operating Metric Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-gray-100 text-xs">
          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-[10px] font-bold uppercase text-gray-400 block">Instrument</span>
            <span className="font-bold text-gray-900 text-sm capitalize">
              {project.capital_instrument_target?.replace('_', ' ') || 'Senior Debt'}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-[10px] font-bold uppercase text-gray-400 block">Operational Capacity</span>
            <span className="font-bold text-gray-900 text-sm">
              {project.operational_capacity || 'N/A'}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-[10px] font-bold uppercase text-gray-400 block">Commercial Off-take</span>
            <span className="font-bold text-gray-900 text-sm">
              {project.offtake_status || 'Under negotiation'}
            </span>
          </div>

          <div className="bg-gray-50 rounded-lg p-3">
            <span className="text-[10px] font-bold uppercase text-gray-400 block">Underwriting Score</span>
            <span className="font-bold text-emerald-700 text-sm">
              {assessment ? `${assessment.overall_score}/100 Grade A` : 'Pending'}
            </span>
          </div>
        </div>
      </div>

      {/* 4-Pillar Underwriting Scorecard Inspection */}
      {assessment && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-[#009b4d] mb-0.5">
                Institutional Diligence Memorandum
              </div>
              <h2 className="text-base font-bold text-gray-900">
                EcoBond 4-Pillar Underwriting Scorecard
              </h2>
              <p className="text-xs text-gray-500">
                Independent assessment conducted by {assessment.assessor_name}
              </p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-right">
                <span className="text-[10px] font-bold uppercase text-gray-400 block">Composite Rating</span>
                <span className="text-2xl font-bold text-emerald-600">{assessment.overall_score}/100</span>
              </div>
              <div className="w-11 h-11 rounded-full bg-emerald-100 text-[#009b4d] flex items-center justify-center font-bold text-sm">
                Grade A
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Pillar 1 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  1. Technical & Engineering
                </h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                  {assessment.technical_score}/100
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {assessment.technical_notes}
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  2. Financial Model & Cash Flows
                </h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                  {assessment.financial_score}/100
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {assessment.financial_notes}
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  3. Legal, Land & Regulatory
                </h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                  {assessment.legal_score}/100
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {assessment.legal_notes}
              </p>
            </div>

            {/* Pillar 4 */}
            <div className="p-4 rounded-xl border border-gray-200 bg-gray-50/50 space-y-2">
              <div className="flex items-center justify-between">
                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  4. ESG & Impact Additionality
                </h3>
                <span className="px-2 py-0.5 rounded text-xs font-bold bg-emerald-100 text-emerald-800">
                  {assessment.impact_score}/100
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                {assessment.impact_notes}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Virtual Data Room (VDR) Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-100 gap-3">
          <div>
            <h2 className="text-base font-bold text-gray-900">
              Virtual Data Room (VDR) Vault
            </h2>
            <p className="text-xs text-gray-500">
              Confidential diligence documentation, audited pro-forma models, and statutory permits.
            </p>
          </div>

          {isUnlocked ? (
            <span className="px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200 flex items-center gap-1.5">
              <Unlock className="w-3.5 h-3.5 text-emerald-600" />
              Full VDR Access Active
            </span>
          ) : (
            <button
              onClick={() => setIsNdaModalOpen(true)}
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-600 hover:bg-blue-700 text-white transition-colors flex items-center gap-1.5 shadow-2xs"
            >
              <Lock className="w-3.5 h-3.5" /> Sign NDA to Unlock All Files
            </button>
          )}
        </div>

        {/* Documents Listing */}
        <div className="divide-y divide-gray-100">
          {documents.map((doc) => {
            const isRestricted = doc.is_confidential && !isUnlocked;

            return (
              <div
                key={doc.id}
                className="py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 hover:bg-gray-50/50 px-2 rounded-lg transition-colors"
              >
                <div className="flex items-start gap-3">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 mt-0.5 ${
                      isRestricted
                        ? 'bg-gray-100 text-gray-400'
                        : 'bg-blue-50 text-blue-700'
                    }`}
                  >
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="text-xs font-bold text-gray-900">{doc.title}</h4>
                      {doc.is_confidential ? (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-gray-100 text-gray-600 flex items-center gap-0.5">
                          <Lock className="w-2.5 h-2.5" /> NDA Gated
                        </span>
                      ) : (
                        <span className="px-1.5 py-0.2 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 flex items-center gap-0.5">
                          Public Teaser
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
                  {isRestricted ? (
                    <button
                      onClick={() => setIsNdaModalOpen(true)}
                      className="px-3 py-1.5 rounded text-xs font-semibold bg-gray-100 hover:bg-gray-200 text-gray-600 flex items-center gap-1.5 transition-colors"
                    >
                      <Lock className="w-3.5 h-3.5 text-gray-400" /> Unlock via NDA
                    </button>
                  ) : (
                    <button
                      onClick={() =>
                        alert(
                          `Simulated institutional secure preview:\nDocument: "${doc.file_name}"\nConfidentiality: ${
                            doc.is_confidential ? 'NDA Protected' : 'Public Teaser'
                          }`
                        )
                      }
                      className="px-3 py-1.5 rounded text-xs font-semibold border border-gray-200 hover:border-gray-300 text-gray-700 flex items-center gap-1.5 transition-colors"
                    >
                      <Download className="w-3.5 h-3.5" /> Download / View
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* NDA Modal */}
      {isNdaModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-600" /> Bilateral Non-Disclosure Agreement
              </h3>
              <button
                onClick={() => setIsNdaModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 text-xs space-y-2 text-gray-700 max-h-56 overflow-y-auto">
              <p className="font-semibold text-gray-900">
                EcoBond Institutional Data Room Access & Confidentiality Terms
              </p>
              <p>
                By executing this agreement, <strong className="text-gray-900">{user?.organization_name || 'Capital Institution'}</strong> agrees to keep confidential all proprietary financial models, commercial offtake contracts, technical engineering specifications, and corporate documentation pertaining to <strong>{project.title}</strong>.
              </p>
              <p>
                1. <strong>Purpose:</strong> Documentation will be utilized solely for investment diligence, co-financing appraisal, and credit structuring.
              </p>
              <p>
                2. <strong>Non-Circumvention:</strong> Capital providers agree not to circumvent EcoBond or directly approach the project sponsor without EcoBond coordination.
              </p>
              <p>
                3. <strong>Term:</strong> This obligation remains binding for a period of twenty-four (24) months from execution.
              </p>
            </div>

            <div className="text-xs text-gray-600 space-y-1">
              <div>Signatory: <strong className="text-gray-900">{user?.full_name}</strong> ({user?.title || 'Investment Director'})</div>
              <div>Entity: <strong className="text-gray-900">{user?.organization_name}</strong></div>
            </div>

            <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
              <button
                type="button"
                onClick={() => setIsNdaModalOpen(false)}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold text-xs hover:bg-gray-50"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSignNda}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg font-bold text-xs hover:bg-blue-700 transition-colors flex items-center gap-1.5"
              >
                <Unlock className="w-3.5 h-3.5" /> Sign NDA & Unlock VDR
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Expression of Interest (EOI) Modal */}
      {isEoiModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl space-y-4">
            <div className="flex items-center justify-between border-b border-gray-100 pb-3">
              <h3 className="text-sm font-bold text-gray-900 flex items-center gap-2">
                <Send className="w-4 h-4 text-[#009b4d]" /> Submit Expression of Interest (EOI)
              </h3>
              <button
                onClick={() => setIsEoiModalOpen(false)}
                className="text-gray-400 hover:text-gray-600 text-sm font-bold"
              >
                ✕
              </button>
            </div>

            {eoiSuccess ? (
              <div className="py-6 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-sm font-bold text-gray-900">Expression of Interest Submitted</h4>
                <p className="text-xs text-gray-500">
                  EcoBond structuring desk has registered your indicative commitment and will facilitate the direct syndication syndicate.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitEoi} className="space-y-4 text-xs">
                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Indicative Ticket Size ($ USD) *
                  </label>
                  <input
                    type="number"
                    required
                    min="100000"
                    step="50000"
                    value={eoiForm.indicative_amount_usd}
                    onChange={(e) =>
                      setEoiForm({ ...eoiForm, indicative_amount_usd: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                  />
                  <span className="text-[10px] text-gray-400 mt-0.5 block">
                    Target Facility: ${Number(project.target_raise_usd).toLocaleString()} USD
                  </span>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Preferred Financing Instrument
                  </label>
                  <select
                    value={eoiForm.instrument_type}
                    onChange={(e) =>
                      setEoiForm({ ...eoiForm, instrument_type: e.target.value })
                    }
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                  >
                    <option value="senior_debt">Senior Project Debt</option>
                    <option value="subordinated_debt">Subordinated / Mezzanine Debt</option>
                    <option value="blended_finance">Blended Concession / First-Loss Facility</option>
                    <option value="equity">Equity Co-Investment</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Indicative Pricing
                    </label>
                    <input
                      type="text"
                      value={eoiForm.indicative_pricing}
                      onChange={(e) =>
                        setEoiForm({ ...eoiForm, indicative_pricing: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                      placeholder="e.g. SOFR + 600 bps"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-1">
                      Disbursement Target
                    </label>
                    <input
                      type="text"
                      value={eoiForm.disbursement_timeline}
                      onChange={(e) =>
                        setEoiForm({ ...eoiForm, disbursement_timeline: e.target.value })
                      }
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                      placeholder="e.g. Q2 2026"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-1">
                    Preliminary Conditions & Covenants
                  </label>
                  <textarea
                    rows="3"
                    value={eoiForm.indicative_terms}
                    onChange={(e) =>
                      setEoiForm({ ...eoiForm, indicative_terms: e.target.value })
                    }
                    placeholder="e.g. Subject to DFI co-guarantee, audited 2025 financials, and local currency escrow mechanism."
                    className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#009b4d]"
                  />
                </div>

                <div className="flex justify-end gap-2 pt-2 border-t border-gray-100">
                  <button
                    type="button"
                    onClick={() => setIsEoiModalOpen(false)}
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 font-semibold hover:bg-gray-50"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-2 bg-[#009b4d] text-white rounded-lg font-bold hover:bg-emerald-600 transition-colors"
                  >
                    Transmit Non-Binding EOI
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
