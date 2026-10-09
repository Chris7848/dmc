import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ecobondDataService } from '../../lib/supabase';
import Logo from '../../assets/eco2.jpg';
import { 
  Building2, 
  ArrowLeft, 
  LogOut, 
  RefreshCw, 
  ShieldCheck, 
  Briefcase, 
  Landmark, 
  FileText, 
  Layers
} from 'lucide-react';

export default function AppLayout({ children }) {
  const { user, role, switchRole, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const handleReset = () => {
    if (window.confirm("Reset all platform data back to initial sample state?")) {
      ecobondDataService.resetDemoData();
      window.location.reload();
    }
  };

  const getRoleBadge = () => {
    switch (role) {
      case 'developer':
        return {
          title: 'Project Developer',
          color: 'bg-emerald-500/15 text-emerald-400 border-emerald-500/30',
          icon: Briefcase
        };
      case 'capital_provider':
        return {
          title: 'Capital Provider',
          color: 'bg-blue-500/15 text-blue-400 border-blue-500/30',
          icon: Landmark
        };
      case 'internal_analyst':
        return {
          title: 'EcoBond Assessor',
          color: 'bg-purple-500/15 text-purple-400 border-purple-500/30',
          icon: ShieldCheck
        };
      default:
        return {
          title: 'User',
          color: 'bg-gray-500/15 text-gray-400 border-gray-500/30',
          icon: Building2
        };
    }
  };

  const roleInfo = getRoleBadge();
  const RoleIcon = roleInfo.icon;

  return (
    <div className="min-h-screen bg-[#f8faf9] text-gray-900 flex flex-col font-sans">
      {/* Top Demo Disclaimer Banner */}
      <div className="bg-[#031d10] border-b border-emerald-950 text-emerald-300 text-[11px] py-1.5 px-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <span className="font-bold text-[#32d96c] tracking-wider uppercase">Demo Platform Environment:</span>
          <span>Sample pipeline assets and 4-pillar scores are illustrative representations.</span>
        </div>
        <button
          onClick={handleReset}
          className="hover:text-white flex items-center gap-1 text-[10px] font-semibold text-emerald-400/80 hover:underline"
          title="Restore pristine sample data"
        >
          <RefreshCw className="w-3 h-3" /> Reset Demo State
        </button>
      </div>

      {/* Main Platform Header */}
      <header className="bg-[#051a10] border-b border-white/10 sticky top-0 z-40 text-white shadow-md">
        <div className="max-w-[1440px] mx-auto px-6 py-3.5 flex justify-between items-center">
          
          {/* Left: Brand & Surface Return */}
          <div className="flex items-center space-x-6">
            <Link to="/app" className="flex items-center gap-2.5">
              <img src={Logo} alt="EcoBond" className="w-7 h-7 object-contain rounded-sm" />
              <div>
                <span className="text-lg font-bold text-white tracking-tight leading-none block">EcoBond</span>
                <span className="text-[9px] text-[#32d96c] uppercase font-bold tracking-widest leading-none block mt-0.5">
                  Deal Platform
                </span>
              </div>
            </Link>

            <Link
              to="/"
              className="hidden sm:inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-white border border-white/15 hover:border-white/30 px-3 py-1.5 rounded-md transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" /> Back to Public Site
            </Link>
          </div>

          {/* Right: Role Persona Switcher & User Profile */}
          <div className="flex items-center space-x-4">
            
            {/* Quick Demo Persona Switcher */}
            <div className="hidden md:flex items-center bg-black/40 border border-white/10 rounded-lg p-1 text-xs">
              <span className="text-[10px] uppercase font-bold text-gray-400 px-2 tracking-wider">Switch Persona:</span>
              <button
                onClick={() => { switchRole('developer'); navigate('/app/developer'); }}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  role === 'developer' ? 'bg-[#009b4d] text-white shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Developer
              </button>
              <button
                onClick={() => { switchRole('capital_provider'); navigate('/app/capital'); }}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  role === 'capital_provider' ? 'bg-blue-600 text-white shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Capital Provider
              </button>
              <button
                onClick={() => { switchRole('internal_analyst'); navigate('/app/internal/pipeline'); }}
                className={`px-2.5 py-1 rounded text-xs font-semibold transition-all ${
                  role === 'internal_analyst' ? 'bg-purple-600 text-white shadow-xs' : 'text-gray-300 hover:text-white'
                }`}
              >
                Assessor Desk
              </button>
            </div>

            {/* Current User Badge */}
            <div className="flex items-center gap-3 pl-2 border-l border-white/10">
              <div className="text-right hidden sm:block">
                <div className="text-xs font-bold text-white leading-tight">{user?.full_name}</div>
                <div className="text-[10.5px] text-gray-400 truncate max-w-[160px]">{user?.organization_name}</div>
              </div>
              <div className={`px-2 py-1 rounded-md border flex items-center gap-1.5 text-[11px] font-bold ${roleInfo.color}`}>
                <RoleIcon className="w-3 h-3" />
                <span className="hidden sm:inline">{roleInfo.title}</span>
              </div>
              <button
                onClick={() => { logout(); navigate('/login'); }}
                className="text-gray-400 hover:text-red-400 p-1.5 transition-colors"
                title="Log out"
              >
                <LogOut className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

        {/* Role-Specific Secondary Navigation Tabs */}
        <div className="bg-[#03140c] border-t border-white/5 px-6">
          <div className="max-w-[1440px] mx-auto flex space-x-6 text-xs font-semibold">
            {role === 'developer' && (
              <>
                <Link
                  to="/app/developer"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname === '/app/developer' || location.pathname.startsWith('/app/developer/projects')
                      ? 'border-[#32d96c] text-[#32d96c]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> My Submitted Projects
                </Link>
                <Link
                  to="/app/developer/submit"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname === '/app/developer/submit'
                      ? 'border-[#32d96c] text-[#32d96c]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <FileText className="w-3.5 h-3.5" /> Submit New Project
                </Link>
              </>
            )}

            {role === 'capital_provider' && (
              <>
                <Link
                  to="/app/capital"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname.startsWith('/app/capital')
                      ? 'border-blue-400 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" /> Curated Deal Pipeline & VDRs
                </Link>
              </>
            )}

            {role === 'internal_analyst' && (
              <>
                <Link
                  to="/app/internal/pipeline"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname.startsWith('/app/internal')
                      ? 'border-purple-400 text-purple-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <ShieldCheck className="w-3.5 h-3.5" /> Origination Review & 4-Pillar Workbench
                </Link>
                <Link
                  to="/app/capital"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname.startsWith('/app/capital')
                      ? 'border-blue-400 text-blue-400'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Landmark className="w-3.5 h-3.5" /> Capital Deal View
                </Link>
                <Link
                  to="/app/developer"
                  className={`py-2.5 border-b-2 flex items-center gap-1.5 transition-colors ${
                    location.pathname === '/app/developer' || location.pathname.startsWith('/app/developer/projects')
                      ? 'border-[#32d96c] text-[#32d96c]'
                      : 'border-transparent text-gray-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-3.5 h-3.5" /> Developer Pipeline View
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-[1440px] w-full mx-auto px-6 py-8">
        {children}
      </main>

      {/* Surface B Footer */}
      <footer className="bg-white border-t border-gray-200 py-4 text-xs text-gray-500">
        <div className="max-w-[1440px] mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2">
          <div>
            EcoBond Climate Infrastructure Deal Platform &copy; 2025. Pre-seed Pilot Stage.
          </div>
          <div className="flex items-center space-x-4">
            <span className="font-mono text-[11px] text-gray-400">
              Active User: {user?.email} ({role})
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
