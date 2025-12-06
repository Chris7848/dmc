import React, { useState } from 'react';
import Logo from './assets/eco2.jpg'
import { Leaf, Zap, TrendingUp, Shield, Users, BarChart3, Wallet, Globe, Award, Clock, DollarSign, Factory, Wind, ArrowRight, CheckCircle, Lock, Activity, Target, Link as LinkIcon, Trash2, Battery, Home } from 'lucide-react';

export default function WtEGreenBondsPlatform() {
  const [activeTab, setActiveTab] = useState('overview');
  const [walletConnected, setWalletConnected] = useState(false);
  const [investAmount, setInvestAmount] = useState('100');

  // Real-time metrics (in production, these would come from IoT oracles)
  const liveMetrics = {
    wasteProcessed: "12,847",
    energyGenerated: "8.4",
    co2Reduced: "2,156",
    homesPowered: "3,240"
  };

  const bondDetails = {
    maturity: "5 Years",
    couponRate: "8%",
    minInvestment: "$10",
    totalRaised: "$2.4M",
    targetRaise: "$5M",
    investorsCount: "1,247",
    nextPayout: "15 Days"
  };

  const projectPhases = [
    { phase: "Phase 1: Lagos WtE Facility", status: "Coming soon", progress: 75, location: "Lagos, Nigeria", capacity: "500 tons/day" },
    { phase: "Phase 2: Nairobi Expansion", status: "Coming soon", progress: 100, location: "Nairobi, Kenya", capacity: "350 tons/day" },
    { phase: "Phase 3: Accra Plant", status: "Coming soon", progress: 45, location: "Accra, Ghana", capacity: "400 tons/day" }
  ];

  const impactBreakdown = [
    { amount: "$10", waste: "0.5 tons", homes: "2", co2: "0.3 tons" },
    { amount: "$50", waste: "2.5 tons", homes: "10", co2: "1.5 tons" },
    { amount: "$100", waste: "5 tons", homes: "20", co2: "3 tons" },
    { amount: "$500", waste: "25 tons", homes: "100", co2: "15 tons" }
  ];

  const partners = [
    { name: "Lagos Municipal Authority", type: "Government", icon: <Users className="w-6 h-6" /> },
    { name: "African Development Bank", type: "Financial", icon: <DollarSign className="w-6 h-6" /> },
    { name: "UN Clean Development", type: "Verification", icon: <CheckCircle className="w-6 h-6" /> },
    { name: "Solana Foundation", type: "Technology", icon: <Zap className="w-6 h-6" /> }
  ];

  const faqs = [
    {
      q: "How do I earn returns?",
      a: "You earn yields from the companies we invest in their infrastructure to your wallet, getting your principal back plus any accumulated carbon credits anytime you want."
    },
    {
      q: "What happens to my investment?",
      a: "Your funds finance WtE infrastructure. As waste is processed and energy sold, you earn returns. All transactions are transparent on Arbitrum blockchain."
    },
    {
      q: "Can I sell my bonds before maturity?",
      a: "Yes! Bonds are tokenized and tradeable on secondary markets. You can exit anytime through our marketplace."
    },
    {
      q: "What are the risks?",
      a: "Main risks include: project delays, revenue fluctuations from energy sales, and regulatory changes. All projects are insured and backed by government contracts."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-lg border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 sm:gap-3">
  <img
    src={Logo}
    alt="Logo"
    className="w-10 h-auto sm:w-12 md:w-16 lg:w-20"
  />

  <div className="flex flex-col">
    <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
      ECOBOND
    </div>
    <div className="text-[10px] sm:text-xs text-gray-500 leading-tight">
      Waste-to-Energy Bonds
    </div>
  </div>
</div>

            
            <div className="hidden md:flex space-x-8">
              {['Dashboard', 'Invest', 'Impact', 'About'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={() => setWalletConnected(!walletConnected)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-semibold transition-all ${
                walletConnected
                  ? 'bg-emerald-100 text-emerald-700 border-2 border-emerald-300'
                  : 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-lg'
              }`}
            >
              <Wallet className="w-5 h-5" />
              <span>{walletConnected ? '0x7a2b...9c4f' : 'Connect Wallet'}</span>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-teal-900 text-white py-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-500 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-block bg-emerald-500/20 border border-emerald-400/30 rounded-full px-4 py-2 text-sm font-semibold">
                🌍 Powered by Arbitrum
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Turn Africa's Waste into Power
              </h1>
              <p className="text-xl text-gray-300">
                Invest in tokenized green bonds that finance waste-to-energy infrastructure. 
                Earn <span className="text-emerald-400 font-bold">returns</span> while 
                powering communities and cleaning up waste.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#invest" className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl hover:shadow-2xl text-center">
                  Start from $10
                </a>
                <a href="#impact" className="border-2 border-white hover:bg-white hover:text-emerald-900 px-8 py-4 rounded-full font-bold text-lg transition-all text-center">
                  See Your Impact
                </a>
              </div>

              <div className="flex items-center space-x-6 pt-6">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">Insured Projects</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Lock className="w-5 h-5 text-emerald-400" />
                  <span className="text-sm">Blockchain Secured</span>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Live Impact Metrics</span>
                    <Activity className="w-5 h-5 text-emerald-400 animate-pulse" />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white/5 rounded-xl p-4">
                      <Trash2 className="w-8 h-8 text-emerald-400 mb-3" />
                      {/* <div className="text-2xl font-bold">{liveMetrics.wasteProcessed}</div> */}
                      <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm   font-semibold">
                       Coming Soon
                      </span>
                      <div className="text-sm text-gray-400 mt-2">Tons Processed</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <Zap className="w-8 h-8 text-yellow-400 mb-2" />
                      <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm   font-semibold">
                       Coming Soon
                      </span>
                      <div className="text-sm text-gray-400 mt-2">Clean Energy</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <Wind className="w-8 h-8 text-blue-400 mb-2" />
                      <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm   font-semibold">
                       Coming Soon
                      </span>
                      <div className="text-sm text-gray-400 mt-2">Tons CO₂ Saved</div>
                    </div>
                    <div className="bg-white/5 rounded-xl p-4">
                      <Home className="w-8 h-8 text-purple-400 mb-2" />
                     <span className="text-emerald-700 mb-3 bg-emerald-100 px-3 py-1 rounded-full text-sm   font-semibold">
                       Coming Soon
                      </span>
                      <div className="text-sm text-gray-400 mt-2">Homes Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Dashboard Section */}
      <section className="py-16 bg-white" id="dashboard">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Project Dashboard</h2>
            <p className="text-xl text-gray-600">Real-time transparency powered by IoT oracles</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Target className="w-10 h-10 text-emerald-600" />
                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  Coming soon
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.totalRaised}</div>
              <div className="text-gray-600 mb-4">Raised of {bondDetails.targetRaise} Target</div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 h-3 rounded-full" style={{width: '48%'}}></div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Users className="w-10 h-10 text-blue-600" />
                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  Coming soon
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.investorsCount}</div>
              <div className="text-gray-600 mb-2">Active Investors</div>
              <div className="text-sm text-blue-600 font-semibold">+47 this week</div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-6">
              <div className="flex items-center justify-between mb-4">
                <Clock className="w-10 h-10 text-purple-600" />
                <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                  Coming soon
                </span>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{bondDetails.couponRate}</div>
              <div className="text-gray-600 mb-2">Annual Returns</div>
              
            </div>
          </div>

          {/* Project Phases */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-4 sm:p-8">
  <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">
    Active Projects
  </h3>

  <div className="space-y-5 sm:space-y-6">
    {projectPhases.map((project, idx) => (
      <div 
        key={idx} 
        className="border-b border-gray-200 pb-5 sm:pb-6 last:border-b-0"
      >

        {/* TOP SECTION */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-0 mb-4">

          {/* LEFT SIDE */}
          <div className="flex-1">

            {/* Title + Status */}
            <div className="flex items-center space-x-2 sm:space-x-3 mb-2">
              <h4 className="text-base sm:text-lg font-bold text-gray-900">
                {project.phase}
              </h4>

              <span
                className={`px-2 py-0.5 rounded-full font-semibold text-[10px] sm:text-xs
                  ${
                    project.status === 'Active'
                      ? 'bg-green-100 text-green-700'
                      : project.status === 'Funded'
                      ? 'bg-blue-100 text-blue-700'
                      : 'bg-orange-100 text-orange-700'
                  }
                `}
              >
                {project.status}
              </span>
            </div>

            {/* Location + Capacity */}
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-gray-600">
              <span className="flex items-center space-x-1">
                <Globe className="w-4 h-4" />
                <span>{project.location}</span>
              </span>

              <span className="flex items-center space-x-1">
                <Factory className="w-4 h-4" />
                <span>{project.capacity}</span>
              </span>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="mt-2 md:mt-0 md:ml-8 text-left md:text-right">
            <div className="text-xl sm:text-2xl font-bold text-emerald-600">
              {project.progress}%
            </div>
            <div className="text-xs sm:text-sm text-gray-600">
              Complete
            </div>
          </div>
        </div>

        {/* PROGRESS BAR */}
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-gradient-to-r from-emerald-500 to-teal-600 h-2 rounded-full transition-all duration-500"
            style={{ width: `${project.progress}%` }}
          ></div>
        </div>
      </div>
    ))}
  </div>
</div>

        </div>
      </section>

      {/* Investment Section */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50" id="invest">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Invest in Green Bonds</h2>
            <p className="text-xl text-gray-600">Tokenized bonds on Solana - Start from just $10</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Investment Calculator */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
              <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
    Calculate Your Returns
  </h3>

  <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-3 py-1 rounded-full h-8 flex items-center justify-center">
    Coming soon
  </span>
</div>

              
              <div className="mb-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Investment Amount
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl font-bold text-gray-600">$</span>
                  <input
                    type="text"
                    value={investAmount}
                    onChange={(e) => setInvestAmount(e.target.value.replace(/[^0-9]/g, ''))}
                    className="w-full pl-10 pr-4 py-4 text-2xl font-bold border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none"
                    placeholder="100"
                  />
                </div>
                <div className="flex gap-2 mt-3">
                  {['10', '50', '100', '500'].map(amount => (
                    <button
                      key={amount}
                      onClick={() => setInvestAmount(amount)}
                      className="flex-1 py-2 text-sm font-semibold border-2 border-gray-300 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-colors"
                    >
                      ${parseInt(amount).toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6 mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Annual Return</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ${(parseInt(investAmount || 0) * 0.08).toLocaleString()}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">5-Year Total</div>
                    <div className="text-2xl font-bold text-emerald-600">
                      ${(parseInt(investAmount || 0) * 1.469).toLocaleString()}
                    </div>
                  </div>
                </div>
              </div>

              <button
                disabled={!walletConnected}
                className={`w-full py-4 rounded-xl font-bold text-lg transition-all ${
                  walletConnected
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white hover:shadow-xl transform hover:scale-105'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                }`}
              >
                {walletConnected ? 'Invest Now' : 'Connect Wallet to Invest'}
              </button>

              {!walletConnected && (
                <p className="text-sm text-center text-gray-600 mt-3">
                  Connect your Arbitrum wallet to start investing
                </p>
              )}
            </div>

            {/* Bond Details */}
            <div className="space-y-6">
              <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Bond Details</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Maturity Period</span>
                    <span className="font-bold text-gray-900">{bondDetails.maturity}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Annual Coupon Rate</span>
                    <span className="font-bold text-emerald-600 text-xl">{bondDetails.couponRate}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Minimum Investment</span>
                    <span className="font-bold text-gray-900">{bondDetails.minInvestment}</span>
                  </div>
                  <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                    <span className="text-gray-600">Payout Frequency</span>
                    <span className="font-bold text-gray-900">Quarterly</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Secondary Market</span>
                    <span className="font-bold text-blue-600">✓ Tradeable</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-6">
                <div className="flex items-start space-x-3">
                  <Shield className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Protection & Insurance</h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      All projects would be backed by relevant entities based on your religion.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Breakdown Section */}
      <section className="py-16 bg-white" id="impact">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Investment Impact</h2>
            <p className="text-xl text-gray-600">See exactly how your money powers change</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactBreakdown.map((impact, idx) => (
              <div key={idx} className="bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-2xl p-6 hover:shadow-xl transition-all transform hover:-translate-y-2">
                <div className="text-center mb-4">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">{impact.amount}</div>
                  <div className="text-sm text-gray-600">Investment</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center space-x-2 text-sm">
                    <Trash2 className="w-5 h-5 text-orange-500" />
                    <span className="text-gray-700"><strong>{impact.waste}</strong> waste removed</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Home className="w-5 h-5 text-blue-500" />
                    <span className="text-gray-700"><strong>{impact.homes}</strong> homes powered</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm">
                    <Wind className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700"><strong>{impact.co2}</strong> CO₂ saved</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Video Explainer Placeholder */}
          <div className="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold mb-4">How It Works</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Watch how your $100 investment transforms communities: removes 5 tons of waste, 
                  powers 20 homes for a year, and prevents 3 tons of CO₂ emissions.
                </p>
                <div className='flex gap-10 items-center'>
                  <button className="bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-semibold transition-all flex items-center space-x-2">
                  <span>Watch Video</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <span className="text-orange-700 flex space-x-2 bg-orange-200 px-6 py-3 rounded-full text-sm   font-semibold items-center justify-center">
                       Coming Soon
                      </span>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl aspect-video flex items-center justify-center border-2 border-white/20">
                <div className="text-center">
                  <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-white/30 transition-all">
                    <div className="w-0 h-0 border-l-[20px] border-l-white border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
                  </div>
                  <p className="text-gray-300">3:45 Impact Explainer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners & Governance */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Partners & Verification</h2>
            <p className="text-xl text-gray-600">Trusted by governments & Brands like <a href="chanjadatti.com"> CHANJA DATTI</a></p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {partners.map((partner, idx) => (
              <div key={idx} className="bg-white border-2 border-gray-200 rounded-2xl p-6 hover:shadow-lg transition-all">
                <div className="flex flex-col items-center text-center">
                  <div className="bg-emerald-100 p-4 rounded-xl mb-4">
                    {partner.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{partner.name}</h4>
                  <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">{partner.type}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Blockchain Integration</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-3">
                <LinkIcon className="w-6 h-6 text-purple-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Arbitrum Blockchain</h4>
                  <p className="text-sm text-gray-600">Fast, low cost transactions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Activity className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">IoT Oracles</h4>
                  <p className="text-sm text-gray-600">Real-time data feeds from WtE facilities</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <DollarSign className="w-6 h-6 text-emerald-600 mt-1" />
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Yields</h4>
                  <p className="text-sm text-gray-600">Get access to good interest</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">Everything you need to know about investing</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="bg-gradient-to-br from-slate-50 to-emerald-50 border-2 border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all">
                <h4 className="font-bold text-gray-900 mb-3 text-lg flex items-start">
                  <span className="bg-emerald-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm mr-3 flex-shrink-0 mt-0.5">
                    ?
                  </span>
                  {faq.q}
                </h4>
                <p className="text-gray-700 leading-relaxed ml-9">{faq.a}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Still Have Questions?</h3>
            <p className="text-gray-600 mb-6">Our team is here to help you understand your investment</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition-all">
                Schedule a Call
              </button>
              <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-semibold transition-all">
                Join Telegram Community
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-slate-900 to-emerald-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Why Waste-to-Energy Matters in Africa</h2>
            <p className="text-xl text-gray-300">The problem, the solution, and your role</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-red-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Trash2 className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Problem</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Africa generates 125M tons of waste annually
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Only 10% is properly managed
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  600M people lack reliable electricity
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">•</span>
                  Waste dumps release massive CO₂ emissions
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-emerald-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-8 h-8 text-emerald-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Solution</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Convert waste into clean electricity
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Power 50+ homes per ton of waste
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Reduce landfill pollution by 90%
                </li>
                <li className="flex items-start">
                  <span className="text-emerald-400 mr-2">•</span>
                  Generate carbon credits for investors
                </li>
              </ul>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="bg-blue-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Your Impact</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Earn returns on investment
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Power thousands of homes
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Remove tons of waste from communities
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Fight climate change measurably
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <button className="bg-white text-emerald-900 hover:bg-gray-100 px-10 py-4 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-xl">
              Download Full Impact Report (PDF)
            </button>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600">Proven WtE projects around the world</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-emerald-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-emerald-600" />
                <h3 className="text-2xl font-bold text-gray-900">Sweden's WtE Success</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Sweden converts 50% of household waste into energy, powering 1.3M homes and district heating 
                for 950,000 households. They even import waste from other countries.
              </p>
              <div className="flex items-center space-x-2 text-emerald-600 font-semibold">
                <Award className="w-5 h-5" />
                <span>99% waste diversion from landfills</span>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-4">
                <Globe className="w-8 h-8 text-blue-600" />
                <h3 className="text-2xl font-bold text-gray-900">Singapore's Model</h3>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                Despite limited land, Singapore processes 3M tons of waste annually through WtE, 
                generating 2-3% of national electricity needs while reducing landfill use by 90%.
              </p>
              <div className="flex items-center space-x-2 text-blue-600 font-semibold">
                <Award className="w-5 h-5" />
                <span>Extended landfill life to 2035+</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investor Portal Preview */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Your Investor Portal</h2>
            <p className="text-xl text-gray-600">Track everything in real-time once you invest</p>
          </div>

          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-2xl">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6">
                <BarChart3 className="w-8 h-8 text-emerald-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Portfolio Dashboard</h4>
                <p className="text-sm text-gray-600">Live view of all your holdings and performance</p>
              </div>
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6">
                <DollarSign className="w-8 h-8 text-blue-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Payout History</h4>
                <p className="text-sm text-gray-600">Track all quarterly payments and returns</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6">
                <Activity className="w-8 h-8 text-purple-600 mb-3" />
                <h4 className="font-bold text-gray-900 mb-2">Impact Metrics</h4>
                <p className="text-sm text-gray-600">Your personal environmental contribution</p>
              </div>
            </div>

            <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center bg-gray-50">
              <Lock className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Connect Wallet to Access Portal</h3>
              <p className="text-gray-600 mb-6">View detailed analytics, download tax reports, and manage your bonds</p>
              <button
                onClick={() => setWalletConnected(true)}
                className="bg-gradient-to-r from-emerald-500 to-teal-600 text-white px-8 py-3 rounded-full font-bold transition-all hover:shadow-xl transform hover:scale-105"
              >
                Connect Wallet
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-teal-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-6">Start Investing Today</h2>
          <p className="text-2xl mb-4 text-emerald-100">
            Join investors earning returns while powering Africa's future
          </p>
          <p className="text-xl mb-10 text-emerald-200">
            ✓ From $10  ✓ Good returns   ✓ Blockchain Secured  ✓ Tradeable Anytime
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#invest" className="bg-white text-emerald-600 hover:bg-gray-100 px-10 py-5 rounded-full font-bold text-xl transition-all transform hover:scale-105 shadow-2xl">
              Invest Now from $10
            </a>
            <button className="border-3 border-white hover:bg-white/10 px-10 py-5 rounded-full font-bold text-xl transition-all">
              Schedule Call with Team
            </button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            
            
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Carbon Verified</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="w-5 h-5" />
              <span>Audited Smart Contracts</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="bg-gradient-to-br from-emerald-500 to-teal-600 p-2 rounded-xl">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">GreenPower Africa</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Tokenized green bonds financing Africa's waste-to-energy revolution. Powered by Solana blockchain.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Platform</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#dashboard" className="hover:text-emerald-400 transition-colors">Dashboard</a></li>
                <li><a href="#invest" className="hover:text-emerald-400 transition-colors">Invest</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Marketplace</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Portfolio</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Documentation</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Whitepaper</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Impact Reports</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Risk Disclosure</a></li>
                <li><a href="#" className="hover:text-emerald-400 transition-colors">Compliance</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
            <p>© 2024 GreenPower Africa. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-emerald-400 transition-colors">Twitter</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Telegram</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">Discord</a>
              <a href="#" className="hover:text-emerald-400 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}