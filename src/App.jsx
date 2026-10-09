import { Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import EcoBondPlatform from './ecobond.jsx';
import FAQSection from './components/FAQSection';
import EducationSection from './components/EducationSection';
import CaseStudiesSection from './components/CaseStudiesSection';

import LoginPage from './components/auth/LoginPage';
import ProtectedRoute from './components/auth/ProtectedRoute';
import AppLayout from './components/layout/AppLayout';
import PlatformRootRedirector from './pages/PlatformRootRedirector';
import DeveloperDashboardShell from './pages/developer/DeveloperDashboardShell';
import ProjectIntakeWizard from './pages/developer/ProjectIntakeWizard';
import DeveloperProjectWorkspace from './pages/developer/DeveloperProjectWorkspace';
import CapitalPipelineShell from './pages/capital/CapitalPipelineShell';
import CapitalDealRoom from './pages/capital/CapitalDealRoom';
import InternalPipelineShell from './pages/internal/InternalPipelineShell';
import InternalAssessmentWorkbench from './pages/internal/InternalAssessmentWorkbench';

import './index.css';

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Surface A: Public Marketing Surface */}
        <Route path="/" element={<EcoBondPlatform />} />
        <Route path="/faq" element={<FAQSection />} />
        <Route path="/education" element={<EducationSection />} />
        <Route path="/case-studies" element={<CaseStudiesSection />} />
        
        {/* Gateway & Persona Selection */}
        <Route path="/login" element={<LoginPage />} />

        {/* Surface B: Authenticated Deal Platform */}
        <Route
          path="/app"
          element={
            <ProtectedRoute>
              <PlatformRootRedirector />
            </ProtectedRoute>
          }
        />
        
        {/* Developer Portal */}
        <Route
          path="/app/developer"
          element={
            <ProtectedRoute allowedRoles={['developer', 'internal_analyst']}>
              <AppLayout>
                <DeveloperDashboardShell />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/developer/submit"
          element={
            <ProtectedRoute allowedRoles={['developer', 'internal_analyst']}>
              <AppLayout>
                <ProjectIntakeWizard />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/developer/projects/:id"
          element={
            <ProtectedRoute allowedRoles={['developer', 'internal_analyst']}>
              <AppLayout>
                <DeveloperProjectWorkspace />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Capital Provider Portal */}
        <Route
          path="/app/capital"
          element={
            <ProtectedRoute allowedRoles={['capital_provider', 'internal_analyst']}>
              <AppLayout>
                <CapitalPipelineShell />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/capital/projects/:id"
          element={
            <ProtectedRoute allowedRoles={['capital_provider', 'internal_analyst']}>
              <AppLayout>
                <CapitalDealRoom />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Internal Structuring & Assessor Desk */}
        <Route
          path="/app/internal/pipeline"
          element={
            <ProtectedRoute allowedRoles={['internal_analyst']}>
              <AppLayout>
                <InternalPipelineShell />
              </AppLayout>
            </ProtectedRoute>
          }
        />
        <Route
          path="/app/internal/assess/:id"
          element={
            <ProtectedRoute allowedRoles={['internal_analyst']}>
              <AppLayout>
                <InternalAssessmentWorkbench />
              </AppLayout>
            </ProtectedRoute>
          }
        />

        {/* Legacy Prototype Redirects */}
        <Route path="/dashboard" element={<Navigate to="/app" replace />} />
        <Route path="/bond-details" element={<Navigate to="/" replace />} />
        <Route path="/investor-portal" element={<Navigate to="/login?role=capital_provider" replace />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  );
}