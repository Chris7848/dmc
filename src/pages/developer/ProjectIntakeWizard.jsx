import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import { 
  Building2, 
  MapPin, 
  DollarSign, 
  FileText, 
  Upload, 
  CheckCircle2, 
  ArrowLeft, 
  ArrowRight, 
  AlertCircle,
  Leaf
} from 'lucide-react';

export default function ProjectIntakeWizard() {
  const { user } = useAuth();
  const navigate = useNavigate();

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedProject, setSubmittedProject] = useState(null);

  // Form State
  const [formData, setFormData] = useState({
    // Step 1: Organization
    company_name: user?.organization_name || 'CleanCycle Energy Africa',
    country: 'Nigeria',
    operating_years: '4',
    contact_name: user?.full_name || 'Amina Bello',
    contact_email: user?.email || 'amina.bello@cleancycle.africa',
    company_overview: 'Operational climate infrastructure developer with focus on municipal solid waste and circular recovery.',

    // Step 2: Project Specifications
    title: '',
    sector: 'waste_to_energy',
    city: 'Lagos',
    state_region: 'Lagos State',
    operational_capacity: '',
    operational_status: 'operational_expansion',

    // Step 3: Capital Requirements
    target_raise_usd: '3500000',
    capital_instrument_target: 'senior_debt',
    tenor_years: '7',
    offtake_status: '20-year industrial bilateral off-take MoU in negotiation',
    use_of_proceeds: 'Procurement of sorting equipment, civil works for boiler installation, and working capital.',

    // Step 4: Summary & Impact
    summary: '',
    projected_waste_diverted_tonnes: '80000',
    projected_clean_energy_mwh: '25000',
    projected_jobs: '240',
    attached_documents: [
      { title: 'Project Executive Presentation', category: 'teaser', file_name: 'Executive_Pitch_Deck.pdf' },
      { title: 'Historical Financials & 5-Year Forecast', category: 'financial_model', file_name: 'Financial_Projections_v1.xlsx' }
    ]
  });

  const [errors, setErrors] = useState({});

  const validateStep = (step) => {
    const newErrors = {};
    if (step === 1) {
      if (!formData.company_name.trim()) newErrors.company_name = 'Organization name is required';
      if (!formData.contact_name.trim()) newErrors.contact_name = 'Primary contact name is required';
    }
    if (step === 2) {
      if (!formData.title.trim()) newErrors.title = 'Project title is required';
      if (!formData.operational_capacity.trim()) newErrors.operational_capacity = 'Operational capacity is required (e.g. 300 tons/day)';
    }
    if (step === 3) {
      if (!formData.target_raise_usd || Number(formData.target_raise_usd) <= 0) {
        newErrors.target_raise_usd = 'Please enter a valid capital raise amount in USD';
      }
      if (!formData.use_of_proceeds.trim()) newErrors.use_of_proceeds = 'Please specify use of proceeds';
    }
    if (step === 4) {
      if (!formData.summary.trim() || formData.summary.length < 20) {
        newErrors.summary = 'Please provide an executive summary (minimum 20 characters)';
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateStep(4)) return;

    setIsSubmitting(true);

    try {
      // 1. Create project in mock data service
      const projectPayload = {
        title: formData.title,
        sector: formData.sector,
        city: formData.city,
        country: formData.country,
        target_raise_usd: Number(formData.target_raise_usd),
        capital_instrument_target: formData.capital_instrument_target,
        summary: formData.summary,
        operational_capacity: formData.operational_capacity,
        offtake_status: formData.offtake_status
      };

      const newProj = ecobondDataService.createProject(projectPayload, user);

      // 2. Attach initial diligence documents
      formData.attached_documents.forEach((doc) => {
        ecobondDataService.addDocument({
          project_id: newProj.id,
          title: doc.title,
          category: doc.category,
          file_name: doc.file_name,
          is_confidential: true
        }, user);
      });

      setSubmittedProject(newProj);
    } catch (err) {
      console.error('Project submission failed:', err);
      alert('Submission failed. Please check form inputs.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Submission Success View
  if (submittedProject) {
    return (
      <div className="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 md:p-12 shadow-sm text-center">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#009b4d] flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="text-[11px] font-bold uppercase tracking-widest text-[#009b4d] mb-2">
          Project Origination Complete
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
          Project Successfully Submitted for Screening
        </h1>
        <p className="text-sm text-gray-600 max-w-lg mx-auto leading-relaxed mb-6">
          Your project <strong className="text-gray-900 font-bold">{submittedProject.title}</strong> has been enrolled in EcoBond's origination queue. Our structuring team has been notified to commence preliminary 4-pillar due diligence.
        </p>

        <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 max-w-md mx-auto text-left text-xs space-y-2 mb-8">
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Project ID:</span>
            <span className="font-mono font-bold text-gray-800">{submittedProject.id}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Target Capital:</span>
            <span className="font-bold text-emerald-700">${submittedProject.target_raise_usd.toLocaleString()} USD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Stage Status:</span>
            <span className="font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded">In Screening</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500 font-medium">Assessor Desk:</span>
            <span className="font-bold text-gray-800">David Uyot / Wigwe & Partners (Legal)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={() => navigate(`/app/developer/projects/${submittedProject.id}`)}
            className="px-6 py-3 rounded-lg text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 transition-all shadow-xs"
          >
            Open Project Workspace & Data Room
          </button>
          <Link
            to="/app/developer"
            className="px-6 py-3 rounded-lg text-xs font-bold text-gray-700 border border-gray-300 hover:bg-gray-50 transition-all"
          >
            Back to Developer Dashboard
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      
      {/* Wizard Header */}
      <div className="flex items-center justify-between">
        <div>
          <Link to="/app/developer" className="text-xs text-gray-500 hover:text-gray-900 flex items-center gap-1 mb-1">
            <ArrowLeft className="w-3.5 h-3.5" /> Back to Dashboard
          </Link>
          <h1 className="text-2xl font-bold text-gray-900">Project Origination Intake Wizard</h1>
          <p className="text-xs text-gray-500">
            Submit your climate infrastructure project for EcoBond's 4-pillar underwriting and capital matching.
          </p>
        </div>
        <div className="text-right">
          <span className="text-xs font-bold text-[#009b4d]">Step {currentStep} of 4</span>
        </div>
      </div>

      {/* Progress Steps Strip */}
      <div className="grid grid-cols-4 gap-2 text-xs font-bold">
        {[
          { num: 1, label: '1. Organization' },
          { num: 2, label: '2. Project Specs' },
          { num: 3, label: '3. Capital Stack' },
          { num: 4, label: '4. Summary & Files' }
        ].map((s) => (
          <div
            key={s.num}
            className={`py-2 text-center rounded-md border transition-all ${
              currentStep === s.num
                ? 'bg-emerald-50 border-[#009b4d] text-[#009b4d]'
                : currentStep > s.num
                ? 'bg-gray-100 border-gray-200 text-gray-800'
                : 'bg-white border-gray-200 text-gray-400'
            }`}
          >
            {s.label}
          </div>
        ))}
      </div>

      {/* Main Wizard Form Card */}
      <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-xs">
        <form onSubmit={handleSubmit}>
          
          {/* ================= STEP 1: ORGANIZATION PROFILE ================= */}
          {currentStep === 1 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Step 1: Project Sponsor & Organization</h2>
                <p className="text-xs text-gray-500">Provide legal entity details and operational experience of the sponsor.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company / Sponsor Name *</label>
                  <input
                    type="text"
                    value={formData.company_name}
                    onChange={(e) => setFormData({ ...formData, company_name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. CleanCycle Energy Africa Ltd"
                  />
                  {errors.company_name && <p className="text-[11px] text-red-500 mt-1">{errors.company_name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Country of Incorporation *</label>
                  <select
                    value={formData.country}
                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  >
                    <option value="Nigeria">Nigeria</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="South Africa">South Africa</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Primary Contact Name *</label>
                  <input
                    type="text"
                    value={formData.contact_name}
                    onChange={(e) => setFormData({ ...formData, contact_name: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. Amina Bello"
                  />
                  {errors.contact_name && <p className="text-[11px] text-red-500 mt-1">{errors.contact_name}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Operating History (Years) *</label>
                  <input
                    type="number"
                    min="1"
                    max="50"
                    value={formData.operating_years}
                    onChange={(e) => setFormData({ ...formData, operating_years: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Company Background & Track Record</label>
                  <textarea
                    rows={2}
                    value={formData.company_overview}
                    onChange={(e) => setFormData({ ...formData, company_overview: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="Briefly describe your existing operating infrastructure, management team, and commercial partners."
                  />
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 2: PROJECT SPECIFICATIONS ================= */}
          {currentStep === 2 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Step 2: Project Specifications & Facility</h2>
                <p className="text-xs text-gray-500">Define the climate infrastructure asset, location, and operational throughput.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Project Title *</label>
                  <input
                    type="text"
                    value={formData.title}
                    onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. Ibadan Circular Polymer Recovery & Extrusion Hub"
                  />
                  {errors.title && <p className="text-[11px] text-red-500 mt-1">{errors.title}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Sector Vertical *</label>
                  <select
                    value={formData.sector}
                    onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  >
                    <option value="waste_to_energy">Waste-to-Energy (Thermal / Biogas)</option>
                    <option value="waste_recycling">Waste & Recycling / Material Recovery</option>
                    <option value="distributed_energy">Clean & Distributed Energy (Mini-grids / Solar)</option>
                    <option value="climate_resilience">Climate Resilience Infrastructure</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Project Maturity / Stage *</label>
                  <select
                    value={formData.operational_status}
                    onChange={(e) => setFormData({ ...formData, operational_status: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  >
                    <option value="operational_expansion">Operational Facility Seeking Expansion Capital</option>
                    <option value="construction_ready">Fully Permitted Greenfield Ready for Construction</option>
                    <option value="pilot_scaling">Pilot Stage with Proven Feedstock Contracts</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">City / Municipal Location *</label>
                  <input
                    type="text"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. Ibadan"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Operational Capacity & Throughput *</label>
                  <input
                    type="text"
                    value={formData.operational_capacity}
                    onChange={(e) => setFormData({ ...formData, operational_capacity: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. 350 tons/day feedstock · 3.5 MW clean power"
                  />
                  {errors.operational_capacity && <p className="text-[11px] text-red-500 mt-1">{errors.operational_capacity}</p>}
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 3: FINANCING STACK ================= */}
          {currentStep === 3 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Step 3: Financing Stack & Capital Requirement</h2>
                <p className="text-xs text-gray-500">Specify the capital requested and targeted financial structure.</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Target Raise (USD) *</label>
                  <div className="relative">
                    <span className="absolute left-3 top-2 text-gray-400 font-bold">$</span>
                    <input
                      type="number"
                      value={formData.target_raise_usd}
                      onChange={(e) => setFormData({ ...formData, target_raise_usd: e.target.value })}
                      className="w-full border border-gray-300 rounded-lg pl-7 pr-3 py-2 text-xs text-gray-900 font-semibold focus:outline-none focus:border-[#009b4d]"
                      placeholder="e.g. 3500000"
                    />
                  </div>
                  {errors.target_raise_usd && <p className="text-[11px] text-red-500 mt-1">{errors.target_raise_usd}</p>}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Target Instrument *</label>
                  <select
                    value={formData.capital_instrument_target}
                    onChange={(e) => setFormData({ ...formData, capital_instrument_target: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  >
                    <option value="senior_debt">Senior Project Debt</option>
                    <option value="blended_finance">Blended Finance (Concessional Debt + Commercial)</option>
                    <option value="subordinated_debt">Mezzanine / Subordinated Debt</option>
                    <option value="equity">Growth Equity / SPV Equity</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Off-Take & Revenue Model *</label>
                  <input
                    type="text"
                    value={formData.offtake_status}
                    onChange={(e) => setFormData({ ...formData, offtake_status: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="e.g. 15-year industrial PPA signed with local brewery at $0.09/kWh"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">Use of Proceeds *</label>
                  <textarea
                    rows={2}
                    value={formData.use_of_proceeds}
                    onChange={(e) => setFormData({ ...formData, use_of_proceeds: e.target.value })}
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                    placeholder="Describe specific CAPEX allocations (e.g. 60% technology acquisition, 25% civil works, 15% commissioning)."
                  />
                  {errors.use_of_proceeds && <p className="text-[11px] text-red-500 mt-1">{errors.use_of_proceeds}</p>}
                </div>
              </div>
            </div>
          )}

          {/* ================= STEP 4: SUMMARY & DILIGENCE FILES ================= */}
          {currentStep === 4 && (
            <div className="space-y-5 animate-fadeIn">
              <div>
                <h2 className="text-lg font-bold text-gray-900 mb-1">Step 4: Summary Narrative & Initial Diligence</h2>
                <p className="text-xs text-gray-500">Provide an executive summary and verify initial diligence documents.</p>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">Executive Summary *</label>
                <textarea
                  rows={3}
                  value={formData.summary}
                  onChange={(e) => setFormData({ ...formData, summary: e.target.value })}
                  className="w-full border border-gray-300 rounded-lg px-3 py-2 text-xs text-gray-900 focus:outline-none focus:border-[#009b4d]"
                  placeholder="Summarize the core commercial, technical, and environmental value proposition of this project for EcoBond assessors and capital providers."
                />
                {errors.summary && <p className="text-[11px] text-red-500 mt-1">{errors.summary}</p>}
              </div>

              {/* Environmental Metrics Strip */}
              <div className="bg-[#f4faf7] border border-emerald-200 rounded-xl p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block mb-2">
                  Estimated Environmental & Social Projections
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  <div>
                    <label className="block text-[11px] text-gray-600 mb-1">Waste Diverted (Tons/Yr)</label>
                    <input
                      type="number"
                      value={formData.projected_waste_diverted_tonnes}
                      onChange={(e) => setFormData({ ...formData, projected_waste_diverted_tonnes: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-600 mb-1">Clean Energy (MWh/Yr)</label>
                    <input
                      type="number"
                      value={formData.projected_clean_energy_mwh}
                      onChange={(e) => setFormData({ ...formData, projected_clean_energy_mwh: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-900"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-gray-600 mb-1">Direct Green Jobs</label>
                    <input
                      type="number"
                      value={formData.projected_jobs}
                      onChange={(e) => setFormData({ ...formData, projected_jobs: e.target.value })}
                      className="w-full bg-white border border-gray-300 rounded px-2.5 py-1.5 text-xs text-gray-900"
                    />
                  </div>
                </div>
              </div>

              {/* Preliminary Attached Documents */}
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-2">
                  Initial Diligence Files Enrolled into Virtual Data Room (VDR)
                </label>
                <div className="space-y-2">
                  {formData.attached_documents.map((doc, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg bg-gray-50 text-xs">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-emerald-600" />
                        <div>
                          <div className="font-bold text-gray-900">{doc.title}</div>
                          <div className="text-[10.5px] text-gray-500 font-mono">{doc.file_name}</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                        Ready for VDR
                      </span>
                    </div>
                  ))}
                </div>
                <p className="text-[11px] text-gray-400 mt-2">
                  * Full engineering studies, audited financial statements, EIA certificates, and legal concession documents can be added directly inside your Project Workspace.
                </p>
              </div>

            </div>
          )}

          {/* Wizard Controls */}
          <div className="mt-8 pt-4 border-t border-gray-100 flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-5 py-2.5 rounded-lg text-xs font-bold text-gray-700 border border-gray-300 hover:bg-gray-50 flex items-center gap-1.5"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Previous Step
              </button>
            ) : <div />}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-6 py-2.5 rounded-lg text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 flex items-center gap-1.5 shadow-xs"
              >
                Proceed to Step {currentStep + 1} <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-2.5 rounded-lg text-xs font-bold text-white bg-[#009b4d] hover:bg-emerald-600 flex items-center gap-2 shadow-xs disabled:opacity-50"
              >
                {isSubmitting ? 'Enrolling Project...' : 'Submit Project for Screening'}
                <CheckCircle2 className="w-4 h-4" />
              </button>
            )}
          </div>

        </form>
      </div>

    </div>
  );
}
