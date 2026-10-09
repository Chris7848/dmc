/**
 * EcoBond Platform — Initial Mock Data Store
 * All pipeline data is illustrative sample data created for platform demonstration.
 * Strictly adheres to pitch deck taxonomy and parameters.
 */

export const INITIAL_ORGANIZATIONS = [
  {
    id: "org-dev-1",
    name: "CleanCycle Energy Africa",
    org_type: "developer",
    country: "Nigeria",
    website: "https://cleancycle-demo.africa"
  },
  {
    id: "org-dev-2",
    name: "Sahel Solar & Mini-Grids",
    org_type: "developer",
    country: "Nigeria",
    website: "https://sahelsolar-demo.ng"
  },
  {
    id: "org-cap-1",
    name: "Climate Transition Infrastructure Fund",
    org_type: "climate_fund",
    country: "International",
    website: "https://climatetransition-fund-demo.org"
  },
  {
    id: "org-cap-2",
    name: "Pan-African Development Finance Institution",
    org_type: "dfi",
    country: "Regional",
    website: "https://panafrican-dfi-demo.org"
  },
  {
    id: "org-team",
    name: "EcoBond Deal Origination & Structuring Desk",
    org_type: "advisory",
    country: "Nigeria",
    website: "https://ecobond.africa"
  }
];

export const DEMO_USERS = {
  developer: {
    id: "user-dev-1",
    email: "amina.bello@cleancycle.africa",
    full_name: "Amina Bello",
    role: "developer",
    organization_id: "org-dev-1",
    organization_name: "CleanCycle Energy Africa",
    title: "Managing Director"
  },
  capital_provider: {
    id: "user-cap-1",
    email: "marcus.thorne@climatetransition.org",
    full_name: "Marcus Thorne",
    role: "capital_provider",
    organization_id: "org-cap-1",
    organization_name: "Climate Transition Infrastructure Fund",
    title: "Investment Director — African Climate Assets"
  },
  internal_analyst: {
    id: "user-team-1",
    email: "david.uyot@ecobond.africa",
    full_name: "David Uyot",
    role: "internal_analyst",
    organization_id: "org-team",
    organization_name: "EcoBond Deal Structuring Desk",
    title: "Head of Partnerships & Origination"
  }
};

export const INITIAL_PROJECTS = [
  {
    id: "proj-1",
    organization_id: "org-dev-1",
    organization_name: "CleanCycle Energy Africa",
    title: "[SAMPLE PIPELINE] Lagos 500 TPD Waste-to-Energy Facility",
    sector: "waste_to_energy",
    stage: "investment_ready",
    city: "Lagos",
    country: "Nigeria",
    target_raise_usd: 5000000,
    currency: "USD",
    capital_instrument_target: "senior_debt",
    summary: "Expansion of an operational municipal solid waste recovery hub into a 500 tons/day thermal recovery and baseload clean power generation plant with commercial industrial offtake.",
    operational_capacity: "500 metric tons/day feedstock · 4.8 MW generation",
    offtake_status: "20-year Power Purchase Agreement (PPA) with industrial manufacturing cluster",
    is_demo: true,
    created_by: "user-dev-1",
    created_at: "2026-08-15T10:00:00Z"
  },
  {
    id: "proj-2",
    organization_id: "org-dev-2",
    organization_name: "Sahel Solar & Mini-Grids",
    title: "[SAMPLE PIPELINE] Kano Decentralized Solar Mini-Grid Cluster",
    sector: "distributed_energy",
    stage: "assessing",
    city: "Kano",
    country: "Nigeria",
    target_raise_usd: 2400000,
    currency: "USD",
    capital_instrument_target: "blended_finance",
    summary: "Deployment of 12 commercial-grade solar mini-grids powering agricultural cold storage, milling facilities, and market hubs across peri-urban Northern Nigeria.",
    operational_capacity: "2.4 MWp aggregate capacity · 1,800 commercial connections",
    offtake_status: "Prepaid productive-use tariff framework with local agro-processors",
    is_demo: true,
    created_by: "user-dev-1",
    created_at: "2026-09-02T14:30:00Z"
  },
  {
    id: "proj-3",
    organization_id: "org-dev-1",
    organization_name: "CleanCycle Energy Africa",
    title: "[SAMPLE PIPELINE] Port Harcourt Plastics Circularity & Washing Hub",
    sector: "waste_recycling",
    stage: "origination",
    city: "Port Harcourt",
    country: "Nigeria",
    target_raise_usd: 1200000,
    currency: "USD",
    capital_instrument_target: "equity",
    summary: "Upgrading an existing post-consumer plastic sorting network with high-speed automated flake washing and food-grade rPET extrusion lines.",
    operational_capacity: "1,200 metric tons/month recycled polymer output",
    offtake_status: "Offtake Memorandum of Understanding with FMCG packaging producers",
    is_demo: true,
    created_by: "user-dev-1",
    created_at: "2026-09-20T09:15:00Z"
  }
];

export const INITIAL_ASSESSMENTS = {
  "proj-1": {
    id: "assess-1",
    project_id: "proj-1",
    assessor_id: "user-team-1",
    assessor_name: "David Uyot (EcoBond Structuring Team)",
    technical_score: 88,
    technical_notes: "Proven feedstock supply contracts; 3 years historical operational runtime; Tier-1 European sorting and gasification boiler components with comprehensive OEM warranties.",
    financial_score: 85,
    financial_notes: "Strong unit economics ($42/ton net margin); 1.45x projected Debt Service Coverage Ratio (DSCR); project IRR modeled at 18.2% under conservative tariff assumptions.",
    legal_score: 90,
    legal_notes: "30-year industrial lease secured; state environmental permit and waste concession active; SPV legal structuring reviewed by Wigwe & Partners.",
    impact_score: 92,
    impact_notes: "45,000 tCO2e annual greenhouse gas avoidance; 90%+ municipal waste diverted from dumpsites; 350 direct permanent green jobs created.",
    overall_score: 88,
    status: "approved_investment_ready",
    assessed_at: "2026-09-10T11:00:00Z"
  },
  "proj-2": {
    id: "assess-2",
    project_id: "proj-2",
    assessor_id: "user-team-1",
    assessor_name: "Etim Antigha (ESG Advisor)",
    technical_score: 78,
    technical_notes: "Engineering layout complete; preliminary solar irradiance data verified; battery energy storage sizing undergoing optimization.",
    financial_score: 74,
    financial_notes: "Viable business model requiring concessional subordinate grant tranche to achieve 15% private equity hurdle rate.",
    legal_score: 82,
    legal_notes: "NERC mini-grid registration submitted; community right-of-way memorandums executed.",
    impact_score: 89,
    impact_notes: "Displaces 2.1M liters of diesel annually; provides reliable baseload power to 1,800 local agro-enterprises.",
    overall_score: 80,
    status: "in_review",
    assessed_at: "2026-09-25T16:00:00Z"
  }
};

export const INITIAL_DOCUMENTS = [
  {
    id: "doc-1",
    project_id: "proj-1",
    title: "Executive Investment Memorandum (IM)",
    category: "investment_memo",
    file_name: "Lagos_WtE_Project_IM_Executive_Summary.pdf",
    file_size_bytes: 4200000,
    is_confidential: true,
    created_at: "2026-08-20T10:00:00Z"
  },
  {
    id: "doc-2",
    project_id: "proj-1",
    title: "3-Statement Project Finance Model (Excel)",
    category: "financial_model",
    file_name: "Lagos_WtE_Financial_Model_v3.4.xlsx",
    file_size_bytes: 6800000,
    is_confidential: true,
    created_at: "2026-08-22T14:00:00Z"
  },
  {
    id: "doc-3",
    project_id: "proj-1",
    title: "Technical Feasibility & Calorific Value Study",
    category: "technical_feasibility",
    file_name: "Technical_Engineering_Feedstock_Audit_Report.pdf",
    file_size_bytes: 8400000,
    is_confidential: true,
    created_at: "2026-08-25T09:30:00Z"
  },
  {
    id: "doc-4",
    project_id: "proj-1",
    title: "Environmental & Social Impact Assessment (EIA)",
    category: "eia_esg",
    file_name: "Federal_Ministry_Environment_EIA_Clearance.pdf",
    file_size_bytes: 5100000,
    is_confidential: true,
    created_at: "2026-08-28T16:45:00Z"
  },
  {
    id: "doc-5",
    project_id: "proj-1",
    title: "SPV Concession & Land Title Opinion",
    category: "legal_opinion",
    file_name: "Wigwe_Partners_Legal_Structuring_Opinion.pdf",
    file_size_bytes: 3200000,
    is_confidential: true,
    created_at: "2026-09-01T12:00:00Z"
  }
];

export const INITIAL_DATA_ROOM_ACCESS = [
  {
    id: "access-1",
    project_id: "proj-1",
    user_id: "user-cap-1",
    user_email: "marcus.thorne@climatetransition.org",
    user_name: "Marcus Thorne",
    organization_name: "Climate Transition Infrastructure Fund",
    status: "approved",
    reviewed_by: "user-team-1",
    reviewed_at: "2026-09-12T14:00:00Z",
    created_at: "2026-09-11T10:00:00Z"
  }
];

export const INITIAL_EXPRESSIONS_OF_INTEREST = [
  {
    id: "eoi-1",
    project_id: "proj-1",
    project_title: "[SAMPLE PIPELINE] Lagos 500 TPD Waste-to-Energy Facility",
    capital_provider_id: "user-cap-1",
    capital_provider_name: "Marcus Thorne",
    organization_name: "Climate Transition Infrastructure Fund",
    indicative_amount_usd: 2500000,
    instrument_type: "senior_debt",
    indicative_terms: "7-year tenor, 2-year grace period on principal repayment; indicative coupon SOFR + 650 bps subject to final credit committee and DFI co-guarantee clearance.",
    status: "submitted",
    created_at: "2026-09-18T15:30:00Z"
  }
];
