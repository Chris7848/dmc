import { Routes, Route } from 'react-router-dom'
import EcoBondPlatform from './ecobond.jsx'
import ProjectDashboard from './components/ProjectDashboard'
import BondDetails from './components/BondDetails'
import InvestorPortal from './components/InvestorPortal'
import FAQSection from './components/FAQSection'
import EducationSection from './components/EducationSection'
import CaseStudiesSection from './components/CaseStudiesSection'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<EcoBondPlatform />} />
      <Route path="/dashboard" element={<ProjectDashboard />} />
      <Route path="/bond-details" element={<BondDetails />} />
      <Route path="/investor-portal" element={<InvestorPortal setWalletConnected={() => {}} />} />
      <Route path="/faq" element={<FAQSection />} />
      <Route path="/education" element={<EducationSection />} />
      <Route path="/case-studies" element={<CaseStudiesSection />} />
    </Routes>
  )
}

export default App