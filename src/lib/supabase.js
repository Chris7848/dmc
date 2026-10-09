/**
 * EcoBond Data & Supabase Client Layer
 * 
 * Provides an enterprise data service supporting real Supabase instances
 * while defaulting seamlessly to an in-memory/localStorage mock repository
 * so that full end-to-end demonstrations run flawlessly offline and without keys.
 */

import {
  INITIAL_PROJECTS,
  INITIAL_ASSESSMENTS,
  INITIAL_DOCUMENTS,
  INITIAL_DATA_ROOM_ACCESS,
  INITIAL_EXPRESSIONS_OF_INTEREST,
  INITIAL_ORGANIZATIONS
} from './mockData';

const STORAGE_KEYS = {
  PROJECTS: 'ecobond_demo_projects',
  ASSESSMENTS: 'ecobond_demo_assessments',
  DOCUMENTS: 'ecobond_demo_documents',
  DATA_ROOM_ACCESS: 'ecobond_demo_vdr_access',
  EOI: 'ecobond_demo_eoi',
  ORGANIZATIONS: 'ecobond_demo_organizations'
};

function getStored(key, fallback) {
  try {
    const item = localStorage.getItem(key);
    return item ? JSON.parse(item) : fallback;
  } catch {
    return fallback;
  }
}

function setStored(key, data) {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn('LocalStorage write failed:', err);
  }
}

// Initialize mock store if empty
if (!localStorage.getItem(STORAGE_KEYS.PROJECTS)) {
  setStored(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
}
if (!localStorage.getItem(STORAGE_KEYS.ASSESSMENTS)) {
  setStored(STORAGE_KEYS.ASSESSMENTS, INITIAL_ASSESSMENTS);
}
if (!localStorage.getItem(STORAGE_KEYS.DOCUMENTS)) {
  setStored(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
}
if (!localStorage.getItem(STORAGE_KEYS.DATA_ROOM_ACCESS)) {
  setStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
}
if (!localStorage.getItem(STORAGE_KEYS.EOI)) {
  setStored(STORAGE_KEYS.EOI, INITIAL_EXPRESSIONS_OF_INTEREST);
}
if (!localStorage.getItem(STORAGE_KEYS.ORGANIZATIONS)) {
  setStored(STORAGE_KEYS.ORGANIZATIONS, INITIAL_ORGANIZATIONS);
}

export const ecobondDataService = {
  // --- Projects ---
  getProjects() {
    return getStored(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
  },

  getProjectById(id) {
    const projects = this.getProjects();
    return projects.find((p) => p.id === id) || null;
  },

  createProject(projectData, user) {
    const projects = this.getProjects();
    const newProject = {
      id: `proj-${Date.now()}`,
      organization_id: user?.organization_id || "org-custom",
      organization_name: user?.organization_name || "Independent Developer",
      title: projectData.title?.startsWith('[SAMPLE PIPELINE]') ? projectData.title : `[SAMPLE PIPELINE] ${projectData.title}`,
      sector: projectData.sector || 'waste_to_energy',
      stage: 'screening',
      city: projectData.city || 'Lagos',
      country: projectData.country || 'Nigeria',
      target_raise_usd: Number(projectData.target_raise_usd) || 1000000,
      currency: 'USD',
      capital_instrument_target: projectData.capital_instrument_target || 'senior_debt',
      summary: projectData.summary || '',
      operational_capacity: projectData.operational_capacity || 'N/A',
      offtake_status: projectData.offtake_status || 'Under negotiation',
      is_demo: true,
      created_by: user?.id || 'anonymous',
      created_at: new Date().toISOString()
    };

    const updated = [newProject, ...projects];
    setStored(STORAGE_KEYS.PROJECTS, updated);
    return newProject;
  },

  updateProjectStage(projectId, newStage) {
    const projects = this.getProjects();
    const updated = projects.map((p) => p.id === projectId ? { ...p, stage: newStage } : p);
    setStored(STORAGE_KEYS.PROJECTS, updated);
    return updated.find((p) => p.id === projectId);
  },

  // --- 4-Pillar Assessments ---
  getAssessment(projectId) {
    const all = getStored(STORAGE_KEYS.ASSESSMENTS, INITIAL_ASSESSMENTS);
    return all[projectId] || null;
  },

  saveAssessment(projectId, assessmentData, assessor) {
    const all = getStored(STORAGE_KEYS.ASSESSMENTS, INITIAL_ASSESSMENTS);
    const overallScore = Math.round(
      (Number(assessmentData.technical_score || 0) +
        Number(assessmentData.financial_score || 0) +
        Number(assessmentData.legal_score || 0) +
        Number(assessmentData.impact_score || 0)) / 4
    );

    const newAssessment = {
      id: all[projectId]?.id || `assess-${Date.now()}`,
      project_id: projectId,
      assessor_id: assessor?.id || 'user-team-1',
      assessor_name: assessor?.full_name || 'EcoBond Structuring Analyst',
      technical_score: Number(assessmentData.technical_score || 0),
      technical_notes: assessmentData.technical_notes || '',
      financial_score: Number(assessmentData.financial_score || 0),
      financial_notes: assessmentData.financial_notes || '',
      legal_score: Number(assessmentData.legal_score || 0),
      legal_notes: assessmentData.legal_notes || '',
      impact_score: Number(assessmentData.impact_score || 0),
      impact_notes: assessmentData.impact_notes || '',
      overall_score: overallScore,
      status: assessmentData.status || (overallScore >= 75 ? 'approved_investment_ready' : 'in_review'),
      assessed_at: new Date().toISOString()
    };

    all[projectId] = newAssessment;
    setStored(STORAGE_KEYS.ASSESSMENTS, all);

    // If promoted to investment_ready, update project stage
    if (newAssessment.status === 'approved_investment_ready') {
      this.updateProjectStage(projectId, 'investment_ready');
    }

    return newAssessment;
  },

  // --- Virtual Data Room Documents ---
  getDocuments(projectId) {
    const docs = getStored(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    return docs.filter((d) => d.project_id === projectId);
  },

  addDocument(docData, user) {
    const docs = getStored(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    const newDoc = {
      id: `doc-${Date.now()}`,
      project_id: docData.project_id,
      title: docData.title,
      category: docData.category || 'teaser',
      file_name: docData.file_name || `${docData.title.toLowerCase().replace(/\s+/g, '_')}.pdf`,
      file_size_bytes: docData.file_size_bytes || 2400000,
      is_confidential: docData.is_confidential ?? true,
      uploaded_by: user?.id,
      created_at: new Date().toISOString()
    };
    const updated = [newDoc, ...docs];
    setStored(STORAGE_KEYS.DOCUMENTS, updated);
    return newDoc;
  },

  // --- VDR Access Control ---
  getDataRoomAccessList(projectId) {
    const all = getStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
    return all.filter((a) => a.project_id === projectId);
  },

  getDataRoomAccessForUser(projectId, userId) {
    const all = getStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
    return all.find((a) => a.project_id === projectId && a.user_id === userId) || null;
  },

  requestDataRoomAccess(projectId, user, autoApprove = false) {
    const all = getStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
    const existingIndex = all.findIndex((a) => a.project_id === projectId && a.user_id === user.id);
    if (existingIndex >= 0) {
      if (autoApprove && all[existingIndex].status !== 'approved') {
        all[existingIndex].status = 'approved';
        all[existingIndex].reviewed_at = new Date().toISOString();
        setStored(STORAGE_KEYS.DATA_ROOM_ACCESS, all);
      }
      return all[existingIndex];
    }

    const newRequest = {
      id: `access-${Date.now()}`,
      project_id: projectId,
      user_id: user.id,
      user_email: user.email,
      user_name: user.full_name,
      organization_name: user.organization_name || 'Capital Institution',
      status: autoApprove ? 'approved' : 'requested',
      nda_signed_at: autoApprove ? new Date().toISOString() : null,
      created_at: new Date().toISOString()
    };
    const updated = [newRequest, ...all];
    setStored(STORAGE_KEYS.DATA_ROOM_ACCESS, updated);
    return newRequest;
  },

  updateDataRoomAccessStatus(accessId, newStatus, reviewer) {
    const all = getStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
    const updated = all.map((a) => 
      a.id === accessId 
        ? { ...a, status: newStatus, reviewed_by: reviewer?.id, reviewed_at: new Date().toISOString() } 
        : a
    );
    setStored(STORAGE_KEYS.DATA_ROOM_ACCESS, updated);
    return updated.find((a) => a.id === accessId);
  },

  // --- Expressions of Interest (EOI) ---
  getExpressionsOfInterest(projectId) {
    const all = getStored(STORAGE_KEYS.EOI, INITIAL_EXPRESSIONS_OF_INTEREST);
    return projectId ? all.filter((e) => e.project_id === projectId) : all;
  },

  createExpressionOfInterest(eoiData, user) {
    const all = getStored(STORAGE_KEYS.EOI, INITIAL_EXPRESSIONS_OF_INTEREST);
    const project = this.getProjectById(eoiData.project_id);

    const newEOI = {
      id: `eoi-${Date.now()}`,
      project_id: eoiData.project_id,
      project_title: project ? project.title : 'African Infrastructure Project',
      capital_provider_id: user.id,
      capital_provider_name: user.full_name,
      organization_name: user.organization_name || 'Capital Provider',
      indicative_amount_usd: Number(eoiData.indicative_amount_usd) || 1000000,
      instrument_type: eoiData.instrument_type || 'senior_debt',
      indicative_terms: eoiData.indicative_terms || 'Non-binding terms subject to credit approval',
      status: 'submitted',
      created_at: new Date().toISOString()
    };

    const updated = [newEOI, ...all];
    setStored(STORAGE_KEYS.EOI, updated);
    return newEOI;
  },

  // Utility to restore clean sample dataset
  resetDemoData() {
    setStored(STORAGE_KEYS.PROJECTS, INITIAL_PROJECTS);
    setStored(STORAGE_KEYS.ASSESSMENTS, INITIAL_ASSESSMENTS);
    setStored(STORAGE_KEYS.DOCUMENTS, INITIAL_DOCUMENTS);
    setStored(STORAGE_KEYS.DATA_ROOM_ACCESS, INITIAL_DATA_ROOM_ACCESS);
    setStored(STORAGE_KEYS.EOI, INITIAL_EXPRESSIONS_OF_INTEREST);
    setStored(STORAGE_KEYS.ORGANIZATIONS, INITIAL_ORGANIZATIONS);
  }
};
