import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
  AlertCircle,
  FileText,
  DollarSign,
  Building2,
  MapPin,
  Calendar,
  Save,
  CheckSquare,
  Award,
  Lock,
  Download,
  Info,
  Clock
} from 'lucide-react';

export default function InternalAssessmentWorkbench() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();

  const [project, setProject] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [saveSuccess, setSaveSuccess] = useState(false);

  // Assessment form state
  const [scores, setScores] = useState({
    technical_score: 80,
    technical_notes: '',
    financial_score: 80,
    financial_notes: '',
    legal_score: 80,
    legal_notes: '',
    impact_score: 80,
    impact_notes: ''
  });

  const [stage, setStage] = useState('assessing');

  useEffect(() => {
    loadData();
  }, [id]);

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
    setStage(proj.stage);
    setDocuments(ecobondDataService.getDocuments(proj.id));

    const existingAssessment = ecobondDataService.getAssessment(proj.id);
    if (existingAssessment) {
      setScores({
        technical_score: existingAssessment.technical_score,
        technical_notes: existingAssessment.technical_notes || '',
        financial_score: existingAssessment.financial_score,
        financial_notes: existingAssessment.financial_notes || '',
        legal_score: existingAssessment.legal_score,
        legal_notes: existingAssessment.legal_notes || '',
        impact_score: existingAssessment.impact_score,
        impact_notes: existingAssessment.impact_notes || ''
      });
    } else {
      // Defaults for initial underwriting
      setScores({
        technical_score: 75,
        technical_notes: 'Engineering schematics and supplier guarantees under review.',
        financial_score: 78,
        financial_notes: '10-year financial pro-forma demonstrates viable DSCR; FX sensitivity under evaluation.',
        legal_score: 72,
        legal_notes: 'Land lease validated; final ministerial generation permit pending.',
        impact_score: 85,
        impact_notes: 'High decarbonization additionality; verified alignment with IFC standards.'
      });
    }
  };

  const compositeScore = Math.round(
    (Number(scores.technical_score) +
      Number(scores.financial_score) +
      Number(scores.legal_score) +
      Number(scores.impact_score)) /
      4
  );

  const handleScoreChange = (pillar, value) => {
    const val = Math.max(0, Math.min(100, Number(value) || 0));
    setScores((prev) => ({ ...prev, [pillar]: val }));
  };

  const handleSave = (promoteToInvestmentReady = false) => {
    if (!project) return;

    const newStatus = promoteToInvestmentReady
      ? 'approved_investment_ready'
      : compositeScore >= 75
      ? 'approved_investment_ready'
      : 'in_review';

    ecobondDataService.saveAssessment(
      project.id,
      {
        ...scores,
        status: newStatus
      },
      user
    );

    if (promoteToInvestmentReady) {
      ecobondDataService.updateProjectStage(project.id, 'investment_ready');
      setStage('investment_ready');
    }

    setSaveSuccess(true);
    setTimeout(() => {
      setSaveSuccess(false);
    }, 2500);
  };

  if (!project) {
    return (
      <div className="p-8 text-center bg-white rounded-xl border border-gray-200">
        <p className="text-gray-500 mb-4">Project not found or loading...</p>
        <Link to="/app/internal/pipeline" className="text-purple-600 font-bold text-sm">
          ← Return to Diligence Queue
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Top Breadcrumb & Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <Link
          to="/app/internal/pipeline"
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Diligence Queue
        </Link>

        <div className="flex items-center gap-2">
          <span className="px-2.5 py-1 rounded text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-200">
            [DEMO 4-PILLAR UNDERWRITING WORKBENCH]
          </span>
          <span className="text-xs text-gray-400">Project ID: {project.id}</span>
        </div>
      </div>

      {/* Header Banner */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs">
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-purple-100 text-purple-800 uppercase tracking-wider">
                {project.sector?.replace('_', ' ')}
              </span>

              {stage === 'investment_ready' ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-emerald-100 text-emerald-800 border border-emerald-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> Investment-Ready
                </span>
              ) : stage === 'assessing' ? (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-600" /> In 4-Pillar Diligence
                </span>
              ) : (
                <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-800 border border-blue-300 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-600" /> Inbound Screening
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

          {/* Underwriting Composite Score Card */}
          <div className="bg-purple-900 text-white rounded-xl p-5 min-w-[240px] flex flex-col justify-between shadow-xs">
            <div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-purple-200">
                Composite Underwriting Score
              </div>
              <div className="text-3xl font-extrabold text-white mt-1 flex items-baseline gap-2">
                {compositeScore}
                <span className="text-sm font-normal text-purple-300">/ 100</span>
              </div>
              <div className="mt-2 text-[11px] text-purple-200">
                {compositeScore >= 75
                  ? '✓ Meets EcoBond Institutional Grade'
                  : '⚠ Requires Credit Enhancement / Subordination'}
              </div>
            </div>

            <div className="pt-3 border-t border-purple-800/80 mt-3 flex items-center justify-between text-[11px]">
              <span className="text-purple-300">Underwriting Threshold:</span>
              <span className="font-bold text-white">75 / 100</span>
            </div>
          </div>
        </div>
      </div>

      {/* Save Success Banner */}
      {saveSuccess && (
        <div className="bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl p-4 flex items-center gap-2.5 text-xs font-semibold shadow-xs">
          <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>Underwriting scorecard successfully updated and saved to EcoBond Pipeline!</span>
        </div>
      )}

      {/* 4 Pillars Underwriting Forms */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* PILLAR 1: Technical & Engineering */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Pillar 1</span>
              <h2 className="text-sm font-bold text-gray-900">Technical & Engineering Feasibility</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{scores.technical_score}</span>
              <span className="text-xs text-gray-400">/100</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Score Calibration</span>
              <span>{scores.technical_score}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scores.technical_score}
              onChange={(e) => handleScoreChange('technical_score', e.target.value)}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1.5 text-gray-600">
            <div className="font-bold text-gray-700 text-[11px]">Verification Checkpoints:</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Equipment Tier-1 bankability & OEM warranties</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Feedstock supply volume & seasonal variance audit</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ EPC construction track record & completion guarantees</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Analyst Technical Assessment Notes:
            </label>
            <textarea
              rows="3"
              value={scores.technical_notes}
              onChange={(e) => setScores({ ...scores, technical_notes: e.target.value })}
              className="w-full p-2.5 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Detail technology verification, equipment supply risk, and yield validation..."
            />
          </div>
        </div>

        {/* PILLAR 2: Financial Model & Revenue Structuring */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Pillar 2</span>
              <h2 className="text-sm font-bold text-gray-900">Financial Model & Revenue Structuring</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{scores.financial_score}</span>
              <span className="text-xs text-gray-400">/100</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Score Calibration</span>
              <span>{scores.financial_score}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scores.financial_score}
              onChange={(e) => handleScoreChange('financial_score', e.target.value)}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1.5 text-gray-600">
            <div className="font-bold text-gray-700 text-[11px]">Verification Checkpoints:</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Minimum DSCR ≥ 1.30x under baseline & downside stress</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Currency hedging / USD-linked tariff indexing mechanism</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Commercial off-taker creditworthiness & security deposit</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Analyst Financial Assessment Notes:
            </label>
            <textarea
              rows="3"
              value={scores.financial_notes}
              onChange={(e) => setScores({ ...scores, financial_notes: e.target.value })}
              className="w-full p-2.5 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Detail debt service coverage, currency hedging, tariff indexing, and IRR..."
            />
          </div>
        </div>

        {/* PILLAR 3: Legal & Regulatory Verification */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Pillar 3</span>
              <h2 className="text-sm font-bold text-gray-900">Legal, Land & Regulatory Compliance</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{scores.legal_score}</span>
              <span className="text-xs text-gray-400">/100</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Score Calibration</span>
              <span>{scores.legal_score}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scores.legal_score}
              onChange={(e) => handleScoreChange('legal_score', e.target.value)}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1.5 text-gray-600">
            <div className="font-bold text-gray-700 text-[11px]">Verification Checkpoints:</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Statutory generation / operational concession license</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Unencumbered freehold/leasehold land title & easements</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ National Environmental Agency clearance & permits</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Analyst Legal Assessment Notes:
            </label>
            <textarea
              rows="3"
              value={scores.legal_notes}
              onChange={(e) => setScores({ ...scores, legal_notes: e.target.value })}
              className="w-full p-2.5 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Detail land tenure status, regulatory concession approvals, and legal risks..."
            />
          </div>
        </div>

        {/* PILLAR 4: ESG & Impact Additionality */}
        <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
          <div className="flex items-center justify-between border-b border-gray-100 pb-3">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-600">Pillar 4</span>
              <h2 className="text-sm font-bold text-gray-900">ESG & Impact Additionality</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-lg font-bold text-gray-900">{scores.impact_score}</span>
              <span className="text-xs text-gray-400">/100</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between text-gray-600 font-medium">
              <span>Score Calibration</span>
              <span>{scores.impact_score}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="100"
              value={scores.impact_score}
              onChange={(e) => handleScoreChange('impact_score', e.target.value)}
              className="w-full accent-purple-600 cursor-pointer"
            />
          </div>

          <div className="bg-gray-50 rounded-lg p-3 text-xs space-y-1.5 text-gray-600">
            <div className="font-bold text-gray-700 text-[11px]">Verification Checkpoints:</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Quantified GHG carbon abatement methodology (tCO2e/yr)</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ IFC Performance Standards (E&S Risk Management)</div>
            <div className="flex items-center gap-1.5 text-[11px]">✓ Community benefit agreement & local job creation</div>
          </div>

          <div className="space-y-1">
            <label className="block text-xs font-semibold text-gray-700">
              Analyst ESG Assessment Notes:
            </label>
            <textarea
              rows="3"
              value={scores.impact_notes}
              onChange={(e) => setScores({ ...scores, impact_notes: e.target.value })}
              className="w-full p-2.5 border border-gray-200 rounded-lg text-xs focus:ring-1 focus:ring-purple-500 focus:outline-none"
              placeholder="Detail environmental additionality, carbon metrics, and community safeguards..."
            />
          </div>
        </div>

      </div>

      {/* Virtual Data Room Document Inspection */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-gray-100 pb-3">
          <div>
            <h2 className="text-sm font-bold text-gray-900">Virtual Data Room Document Ingestion</h2>
            <p className="text-xs text-gray-500">Submitted by developer sponsor for underwriter verification</p>
          </div>
          <span className="text-xs font-semibold text-gray-600">
            {documents.length} Files Uploaded
          </span>
        </div>

        <div className="divide-y divide-gray-100">
          {documents.map((doc) => (
            <div key={doc.id} className="py-3 flex items-center justify-between text-xs">
              <div className="flex items-center gap-3">
                <FileText className="w-4 h-4 text-purple-600 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900">{doc.title}</div>
                  <div className="text-[11px] text-gray-400 capitalize">
                    {doc.category?.replace('_', ' ')} · {doc.file_name} · {(doc.file_size_bytes / (1024 * 1024)).toFixed(1)} MB
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" /> Underwriter Verified
                </span>
                <button
                  onClick={() => alert(`Simulated secure preview of: ${doc.file_name}`)}
                  className="px-2.5 py-1 rounded border border-gray-200 hover:bg-gray-50 text-gray-700 transition-colors flex items-center gap-1"
                >
                  <Download className="w-3 h-3" /> View
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Underwriting Actions & Syndication Promotion Bar */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="text-xs text-gray-600">
          <span className="font-bold text-gray-900 block">EcoBond Structuring Recommendation:</span>
          {compositeScore >= 75 ? (
            <span className="text-emerald-700 font-semibold">
              Asset qualifies for immediate syndication to Institutional Capital Providers.
            </span>
          ) : (
            <span className="text-amber-700 font-semibold">
              Score below 75 threshold. Requires structural enhancement before DFI presentation.
            </span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <button
            type="button"
            onClick={() => handleSave(false)}
            className="px-4 py-2 rounded-lg border border-gray-300 text-gray-700 font-bold text-xs hover:bg-gray-50 transition-colors flex items-center gap-2"
          >
            <Save className="w-4 h-4" /> Save Diligence Draft
          </button>

          <button
            type="button"
            onClick={() => handleSave(true)}
            className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs transition-colors flex items-center gap-2 shadow-xs"
          >
            <Award className="w-4 h-4" /> Approve & Promote to Investment-Ready
          </button>
        </div>
      </div>

    </div>
  );
}
