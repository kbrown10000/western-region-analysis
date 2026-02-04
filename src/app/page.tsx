'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              Western Region
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Growth Strategy
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto mb-4">
              USDM Life Sciences Account Growth Plan 2026
            </p>
            <p className="text-sm text-cyan-400 mb-8">Board Presentation | February 2026</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/executive-summary" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all transform hover:scale-105">
                Executive Summary
              </Link>
              <Link href="/gtm-strategy" className="px-8 py-4 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all transform hover:scale-105">
                GTM Strategy
              </Link>
              <Link href="/dashboard" className="px-8 py-4 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all border border-slate-600">
                Financial Dashboard
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Key Metrics Section - CORRECTED 2025 DATA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">2025 West Region Performance</h2>
          <p className="text-slate-500 text-center mb-12 text-sm">Source: Finance MCP + Sales MCP | Verified Feb 4, 2026 | 160 customers</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <MetricCard 
              title="2025 Revenue" 
              value="$17.19M" 
              trend="down"
              description="-12.4% YoY"
            />
            <MetricCard 
              title="Blended GP%" 
              value="34.3%" 
              trend="neutral"
              description="$5.90M gross profit"
            />
            <MetricCard 
              title="West Customers" 
              value="160" 
              trend="neutral"
              description="Active accounts"
            />
            <MetricCard 
              title="Open Pipeline" 
              value="$14.05M" 
              trend="up"
              description="194 opps | Coverage: 0.82x"
            />
          </div>
        </div>
      </section>

      {/* Regional Overview */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Western Region Overview</h2>
          <p className="text-slate-400 text-center mb-16 max-w-2xl mx-auto">
            Four powerhouse biotech clusters with distinct opportunities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <RegionCard 
              region="Biotech Bay"
              companies="250+"
              funding="$58B+ in 2025"
              focus="AI Drug Discovery, Gene Therapy"
              highlights={["Genentech Ecosystem", "Stanford/UCSF Network", "VC Capital Hub"]}
              link="/bay-area-deep-dive"
            />
            <RegionCard 
              region="LA BioMed"
              companies="50+"
              funding="NantWorks Empire"
              focus="CAR-T, Immunotherapy"
              highlights={["Kite/Gilead Mfg", "ImmunityBio", "Academic Hubs"]}
              link="/la-deep-dive"
            />
            <RegionCard 
              region="Biotech Beach"
              companies="2,000+"
              funding="$56B Economic Output"
              focus="Manufacturing, Cell Therapy"
              highlights={["Scripps/Salk Research", "CRDMO Growth", "La Jolla Cluster"]}
              link="/san-diego-deep-dive"
            />
            <RegionCard 
              region="Cascadia Corridor"
              companies="500+"
              funding="$9B+ Total Raised"
              focus="Cell Therapy, Epigenetics"
              highlights={["24% Employment Growth", "UW/Allen Institute", "In Vivo CAR-T"]}
              link="/seattle-deep-dive"
            />
          </div>
        </div>
      </section>

      {/* Target Companies Preview */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">Priority Target Companies</h2>
          <p className="text-slate-400 text-center mb-16">Early-stage biotechs primed for USDM partnership</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TargetCard company="National Resilience" location="San Diego" funding="$2B" focus="Biomanufacturing" />
            <TargetCard company="Tune Therapeutics" location="Seattle" funding="$175M" focus="Epigenetics" />
            <TargetCard company="Cellares" location="Bay Area" funding="$257M" focus="Cell Therapy Manufacturing" />
            <TargetCard company="Outpace Bio" location="Seattle" funding="$144M" focus="AI-Powered CAR-T" />
            <TargetCard company="Aurion Biotech" location="Seattle" funding="$120M" focus="Corneal Cell Therapy" />
            <TargetCard company="Umoja Biopharma" location="Seattle" funding="$100M" focus="In Vivo CAR-T" />
          </div>
          <div className="text-center mt-12">
            <Link href="/targets" className="px-8 py-4 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all inline-block">
              View All 60+ Target Companies →
            </Link>
          </div>
        </div>
      </section>

      {/* THE ASK - Board Decision Points */}
      <section className="py-20 px-6 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-4">📋 The Ask</h2>
          <p className="text-slate-400 text-center mb-12">Investment decisions for board approval</p>
          
          <div className="space-y-6">
            <div className="bg-slate-800/80 rounded-xl p-6 border-l-4 border-cyan-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">1. Seattle Market Development</h3>
                <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-semibold">$150K</span>
              </div>
              <p className="text-slate-300 mb-3">Fund dedicated sales coverage + Q1 market trip to establish presence in fastest-growing Western market (24% employment growth, zero current coverage).</p>
              <p className="text-slate-500 text-sm">Target ROI: 5 new accounts @ $200K avg = $1M pipeline</p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border-l-4 border-purple-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">2. AI Governance Service Launch</h3>
                <span className="bg-purple-500/20 text-purple-400 px-3 py-1 rounded-full text-sm font-semibold">$75K</span>
              </div>
              <p className="text-slate-300 mb-3">Develop AI risk assessment toolkit and training. 52% of Bay Area funding goes to AI companies — massive unmet need.</p>
              <p className="text-slate-500 text-sm">Target ROI: 8 engagements @ $150K avg = $1.2M revenue</p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border-l-4 border-green-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">3. Cell Therapy Manufacturing Package</h3>
                <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">$50K</span>
              </div>
              <p className="text-slate-300 mb-3">Bundle Operating Model + CRO Oversight + GxP MS for clinical-to-commercial scale-up. 12+ funded cell therapy targets.</p>
              <p className="text-slate-500 text-sm">Target ROI: 4 bundled deals @ $500K avg = $2M pipeline</p>
            </div>

            <div className="bg-slate-800/80 rounded-xl p-6 border-l-4 border-red-500">
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-bold text-white">4. Win Rate Recovery Program</h3>
                <span className="bg-red-500/20 text-red-400 px-3 py-1 rounded-full text-sm font-semibold">URGENT</span>
              </div>
              <p className="text-slate-300 mb-3">Win rate dropped 4.5 pts (40.1% → 35.6%). Approve win/loss analysis, competitive intel, and sales enablement refresh.</p>
              <p className="text-slate-500 text-sm">Impact: Each 1% improvement = $500K recovered revenue</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="text-2xl font-bold text-white">Total Investment: <span className="text-cyan-400">$275K</span></p>
            <p className="text-slate-400 mt-2">Projected Pipeline Impact: <span className="text-green-400 font-semibold">$4.2M</span></p>
          </div>
        </div>
      </section>

      {/* Strategic Recommendations Preview */}
      <section className="py-20 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Strategic Recommendations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <RecommendationCard 
              number="01"
              title="Address Win Rate Decline"
              description="Win rate dropped 4.5 points YoY. Analyze lost deals, strengthen value proposition, and improve sales enablement."
              urgency="high"
            />
            <RecommendationCard 
              number="02"
              title="Target Cell Therapy Boom"
              description="12+ funded cell therapy companies in Western region need GxP services. Position for manufacturing scale-up support."
              urgency="medium"
            />
            <RecommendationCard 
              number="03"
              title="AI/ML Drug Discovery Wave"
              description="Companies like Atomwise, Anagenex, and Deep Genomics generating massive data. Data management opportunity."
              urgency="medium"
            />
            <RecommendationCard 
              number="04"
              title="Seattle Expansion"
              description="24% biotech employment growth + major funding rounds. Under-penetrated market with high potential."
              urgency="high"
            />
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-16">Full Report Sections</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NavCard title="Executive Summary" link="/executive-summary" highlight />
            <NavCard title="🎯 GTM Strategy" link="/gtm-strategy" highlight />
            <NavCard title="☁️ CA → AI Expansion" link="/cloud-assurance-expansion" highlight />
            <NavCard title="💎 Account Rationale" link="/account-rationale" highlight />
            <NavCard title="📊 Market Analysis" link="/market-analysis" highlight />
            <NavCard title="📍 Interactive Map" link="/map" highlight />
            <NavCard title="📊 Financial Dashboard" link="/dashboard" highlight />
            <NavCard title="📈 Margin Analysis" link="/margin-analysis" highlight />
            <NavCard title="🎪 Service Expansion" link="/service-expansion" highlight />
            <NavCard title="⚡ Sales Momentum" link="/sales-momentum" highlight />
            <NavCard title="📣 Marketing Alignment" link="/marketing-alignment" highlight />
            <NavCard title="👥 Team & Capacity" link="/team-capacity" highlight />
            <NavCard title="💰 Customer LTV" link="/ltv" highlight />
            <NavCard title="⚠️ Churn Signals" link="/churn-signals" highlight />
            <NavCard title="🎯 Target Companies" link="/targets" highlight />
            <NavCard title="Biotech Bay Deep Dive" link="/bay-area-deep-dive" />
            <NavCard title="LA BioMed Deep Dive" link="/la-deep-dive" />
            <NavCard title="Biotech Beach Deep Dive" link="/san-diego-deep-dive" />
            <NavCard title="Cascadia Deep Dive" link="/seattle-deep-dive" />
            <NavCard title="Action Plan" link="/action-plan" />
            <NavCard title="Appendix" link="/appendix" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">USDM Life Sciences | Western Region Growth Strategy 2026</p>
          <p className="text-slate-500 text-sm mt-2">Board Presentation | February 2026</p>
          <p className="text-slate-600 text-xs mt-4">Data verified via Fabric MCP (Sales, Labor, Finance) | Last refresh: Feb 4, 2026</p>
        </div>
      </footer>
    </div>
  );
}

function MetricCard({ title, value, trend, description }: { title: string; value: string; trend: 'up' | 'down' | 'neutral' | 'baseline'; description: string }) {
  const trendColors = {
    up: 'text-green-400',
    down: 'text-red-400',
    neutral: 'text-yellow-400',
    baseline: 'text-slate-400'
  };
  
  return (
    <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
      <h3 className="text-slate-400 text-sm uppercase tracking-wider mb-2">{title}</h3>
      <p className={`text-4xl font-bold ${trendColors[trend]} mb-2`}>{value}</p>
      <p className="text-slate-500 text-sm">{description}</p>
    </div>
  );
}

function RegionCard({ region, companies, funding, focus, highlights, link }: { region: string; companies: string; funding: string; focus: string; highlights: string[]; link: string }) {
  return (
    <Link href={link} className="bg-slate-800/80 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all group">
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">{region}</h3>
      <div className="space-y-3 mb-6">
        <div className="flex justify-between">
          <span className="text-slate-400">Companies:</span>
          <span className="text-white font-semibold">{companies}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Funding/Output:</span>
          <span className="text-white font-semibold">{funding}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-slate-400">Key Focus:</span>
          <span className="text-cyan-400 font-semibold">{focus}</span>
        </div>
      </div>
      <ul className="space-y-2">
        {highlights.map((h, i) => (
          <li key={i} className="text-slate-300 flex items-center gap-2">
            <span className="text-cyan-500">→</span> {h}
          </li>
        ))}
      </ul>
    </Link>
  );
}

function TargetCard({ company, location, funding, focus }: { company: string; location: string; funding: string; focus: string }) {
  return (
    <div className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
      <h3 className="text-xl font-bold text-white mb-2">{company}</h3>
      <div className="flex gap-2 mb-3">
        <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">{location}</span>
        <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded">{funding}</span>
      </div>
      <p className="text-slate-400 text-sm">{focus}</p>
    </div>
  );
}

function RecommendationCard({ number, title, description, urgency }: { number: string; title: string; description: string; urgency: 'high' | 'medium' | 'low' }) {
  const urgencyColors = {
    high: 'from-red-500 to-orange-500',
    medium: 'from-yellow-500 to-amber-500',
    low: 'from-green-500 to-emerald-500'
  };
  
  return (
    <div className="bg-slate-800/80 rounded-xl p-8 border border-slate-700 hover:border-cyan-500/50 transition-all">
      <div className="flex items-start gap-4">
        <span className={`text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${urgencyColors[urgency]}`}>{number}</span>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-slate-400">{description}</p>
        </div>
      </div>
    </div>
  );
}

function NavCard({ title, link, highlight }: { title: string; link: string; highlight?: boolean }) {
  return (
    <Link href={link} className={`rounded-lg p-4 border transition-all text-center ${
      highlight 
        ? 'bg-gradient-to-br from-cyan-900/40 to-blue-900/30 border-cyan-700/50 hover:border-cyan-500 hover:shadow-lg hover:shadow-cyan-500/10' 
        : 'bg-slate-800/80 border-slate-700 hover:border-slate-600 hover:bg-slate-700/50'
    }`}>
      <span className="text-white font-medium">{title}</span>
    </Link>
  );
}
