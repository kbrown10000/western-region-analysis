'use client';

import Link from 'next/link';

/**
 * WESTERN REGION PARTNER PLAN
 * 
 * Territory-specific partner strategy with regional flavor
 * 
 * Data Sources:
 * - Labor MCP: get_solutions_team_roster (partner team)
 * - Sales MCP: get_team_performance, get_pipeline_by_owner
 * - Territory analysis from Western Region Strategy
 * - Industry research on regional biotech ecosystems
 * 
 * Last Updated: 2026-02-04
 */

// Territory-specific partner strategies
const territoryPlans = [
  {
    territory: 'Biotech Beach',
    nickname: 'San Diego',
    geography: 'San Diego, Irvine, Orange County',
    marketCharacter: 'High-volume cell therapy cluster, excellent margins, startup density',
    currentRevenue: 7980000,
    currentGP: 70.8,
    currentPartnerPipeline: 150000,
    directPipeline: 7900000,
    partnerShare: 1.9,
    icon: '🏖️',
    primaryStrategy: 'Cell Therapy Manufacturing Partners',
    rationale: 'San Diego has the highest concentration of cell therapy companies in the world. Manufacturing QA is their #1 compliance need.',
    targetPartners: [
      { name: 'Cellares', type: 'Technology', opportunity: '$200-400K/year', status: 'Target', action: 'Q1 outreach' },
      { name: 'Multiply Labs', type: 'Technology', opportunity: '$100-200K/year', status: 'Target', action: 'Q1 outreach' },
      { name: 'Resilience', type: 'CDMO', opportunity: '$150-300K/year', status: 'Existing customer', action: 'Partner conversion' },
    ],
    plays: ['Cell Therapy Manufacturing QA', 'Equipment Validation', 'GMP Facility Startup'],
    investmentRequired: '$50K/year (included in direct sales support)',
    targetPartnerPipeline: 800000,
    seller: 'Justin Ott',
    sellerWinRate: 74.8,
  },
  {
    territory: 'LA BioMed',
    nickname: 'Los Angeles',
    geography: 'Los Angeles, Thousand Oaks, Glendale',
    marketCharacter: 'Large pharma accounts, MARGIN CRISIS (23.9% GP), vendor program opportunity',
    currentRevenue: 6470000,
    currentGP: 23.9,
    currentPartnerPipeline: 50000,
    directPipeline: 1610000,
    partnerShare: 3.0,
    icon: '🎬',
    primaryStrategy: 'Preferred Vendor Programs',
    rationale: 'Gilead, Amgen, Kite are pulling margins down to ~20%. Getting into their preferred vendor programs improves margin and volume.',
    targetPartners: [
      { name: 'Amgen Preferred Vendor', type: 'Enterprise', opportunity: '$300-500K/year', status: 'Target', action: 'Q2 application' },
      { name: 'Gilead Partner Program', type: 'Enterprise', opportunity: '$250-400K/year', status: 'Target', action: 'Q2 application' },
      { name: 'Kite Pharma (Gilead)', type: 'Enterprise', opportunity: '$200-300K/year', status: 'Existing customer', action: 'Preferred status' },
    ],
    plays: ['Data Integrity Remediation', 'QMS Implementation', 'Validation Services'],
    investmentRequired: '$25K/year (relationship management)',
    targetPartnerPipeline: 500000,
    seller: 'Mike Campbell',
    sellerWinRate: 14.9,
  },
  {
    territory: 'Biotech Bay',
    nickname: 'SF / South SF',
    geography: 'San Francisco, South San Francisco, Palo Alto, Redwood City',
    marketCharacter: 'UNDERPENETRATED - largest biotech market, minimal USDM presence',
    currentRevenue: 1350000,
    currentGP: 36.2,
    currentPartnerPipeline: 100000,
    directPipeline: 1090000,
    partnerShare: 9.2,
    icon: '🌉',
    primaryStrategy: 'VC Portfolio Partnerships',
    rationale: 'SF Bay Area has 200+ biotechs and all major life science VCs. One VC relationship = 20-50 portfolio company intros.',
    targetPartners: [
      { name: 'a16z Bio', type: 'VC', opportunity: '$500K-1M/year (portfolio)', status: 'Target', action: 'Q1 outreach' },
      { name: 'Arch Ventures', type: 'VC', opportunity: '$300-600K/year', status: 'Target', action: 'Q1 outreach' },
      { name: 'RA Capital', type: 'VC', opportunity: '$300-500K/year', status: 'Target', action: 'Q2 outreach' },
      { name: 'AWS SF Team', type: 'Cloud', opportunity: '$400-700K/year', status: 'Target', action: 'Partner manager intro' },
    ],
    plays: ['Cloud Migration + Validation', 'AI Governance', 'VC Portfolio Services'],
    investmentRequired: '$75K/year (events + sponsorships)',
    targetPartnerPipeline: 2000000,
    seller: 'NEW HIRE NEEDED',
    sellerWinRate: null,
  },
  {
    territory: 'Cascadia',
    nickname: 'Seattle / PNW',
    geography: 'Seattle, Bellevue, Portland',
    marketCharacter: 'GREENFIELD - zero current pipeline, partner-first entry strategy',
    currentRevenue: 600000,
    currentGP: 43.4,
    currentPartnerPipeline: 0,
    directPipeline: 0,
    partnerShare: 0,
    icon: '🏔️',
    primaryStrategy: 'Partner-First Market Entry',
    rationale: 'No direct presence. Use partners to establish foothold before hiring. "Per The Ask" - $150K investment → $2.5M TAM.',
    targetPartners: [
      { name: 'Regional Consultancies', type: 'Referral', opportunity: '$200-400K/year', status: 'Target', action: 'Identify 2-3 targets' },
      { name: 'UW Research Partnerships', type: 'Academic', opportunity: '$100-200K/year', status: 'Target', action: 'Outreach Q2' },
      { name: 'Fred Hutch Network', type: 'Research', opportunity: '$150-300K/year', status: 'Target', action: 'Network mapping' },
      { name: 'Seattle Life Sciences Firms', type: 'Referral', opportunity: '$100-200K/year', status: 'Target', action: 'Local hiring ramp' },
    ],
    plays: ['Partner Referral Network', 'Academic Partnerships', 'Regional Consulting Alliances'],
    investmentRequired: '$150K/year (per The Ask)',
    targetPartnerPipeline: 1500000,
    seller: 'Partner Channel (Kim/Meghan)',
    sellerWinRate: 22.5,
  },
];

// Partner team assigned to Western territories
const westernPartnerTeam = [
  {
    name: 'Kim Guihen',
    role: 'Partner Leadership',
    territories: ['All Western'],
    winRate: 7.5,
    status: 'concern',
    focus: 'Strategic partner relationships, executive alignment',
    coaching: 'Win rate needs immediate attention - focus on deal qualification over sourcing',
  },
  {
    name: 'Meghan Rutkowski',
    role: 'Partner Channel Manager',
    territories: ['Cascadia', 'Biotech Bay'],
    winRate: 37.5,
    status: 'ok',
    focus: 'Day-to-day partner management, deal registration, enablement',
    coaching: 'Strong performer - increase deal size focus',
  },
];

// Western partner program 2026 roadmap
const westernRoadmap = [
  {
    quarter: 'Q1 2026',
    theme: 'Foundation Building',
    focus: ['Cascadia partner identification', 'Cell therapy partner outreach (SD)', 'VC ecosystem mapping (SF)'],
    targetPipeline: 500000,
    investment: 50000,
    kpis: ['3+ partner meetings', '1 signed Cascadia partner', 'AWS/Cellares intro'],
  },
  {
    quarter: 'Q2 2026',
    theme: 'Pipeline Activation',
    focus: ['First Cascadia partner deals', 'Amgen/Gilead vendor program apps', 'a16z Bio relationship'],
    targetPipeline: 1200000,
    investment: 50000,
    kpis: ['$500K partner pipeline', '2+ Cascadia deals registered', 'VC portfolio intro'],
  },
  {
    quarter: 'Q3 2026',
    theme: 'Scale & Prove',
    focus: ['Partner deal wins (proof points)', 'Expand VC portfolio access', 'Cell therapy wins with Cellares'],
    targetPipeline: 2500000,
    investment: 50000,
    kpis: ['$1M partner-influenced won', '5+ portfolio referrals', 'SF market traction'],
  },
  {
    quarter: 'Q4 2026',
    theme: 'Systemize',
    focus: ['Partner program formalization', 'Training/certification launch', 'Budget for 2027'],
    targetPipeline: 4000000,
    investment: 50000,
    kpis: ['$3M total partner pipeline', '10% of West from partners', 'Dedicated partner SE hire'],
  },
];

// Investment summary
const investmentSummary = {
  biotechBeach: 50000,
  laBioMed: 25000,
  biotechBay: 75000,
  cascadia: 150000,
  total: 300000,
  expectedPipeline: 4800000,
  roi: 16, // 16x ROI
};

// Format helpers
const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
};

export default function PartnerWest() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Western Partner Plan</h1>
          <Link href="/partner-overview" className="text-purple-400 hover:text-purple-300">← Partner Hub</Link>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl text-lg">
          Territory-by-territory partner strategy for the Western Region.
          Each market has unique characteristics requiring tailored partner approaches.
        </p>
        <p className="text-emerald-400 mb-12 max-w-3xl font-semibold">
          🎯 2026 Target: 10% of West pipeline from partners = $6M+ partner-sourced
        </p>

        {/* Investment Summary */}
        <section className="mb-12 bg-gradient-to-r from-emerald-900/50 to-blue-900/50 rounded-xl p-8 border border-emerald-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">💰 The Ask: 2026 Partner Investment</h2>
          <div className="grid md:grid-cols-5 gap-4 mb-6">
            <div className="text-center">
              <div className="text-xl font-bold text-blue-400">{formatCurrency(investmentSummary.biotechBeach)}</div>
              <div className="text-slate-400 text-sm">🏖️ Biotech Beach</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-orange-400">{formatCurrency(investmentSummary.laBioMed)}</div>
              <div className="text-slate-400 text-sm">🎬 LA BioMed</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-purple-400">{formatCurrency(investmentSummary.biotechBay)}</div>
              <div className="text-slate-400 text-sm">🌉 Biotech Bay</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-emerald-400">{formatCurrency(investmentSummary.cascadia)}</div>
              <div className="text-slate-400 text-sm">🏔️ Cascadia</div>
            </div>
            <div className="text-center border-l border-slate-600 pl-4">
              <div className="text-2xl font-bold text-white">{formatCurrency(investmentSummary.total)}</div>
              <div className="text-slate-400 text-sm">Total Investment</div>
            </div>
          </div>
          <div className="flex justify-center gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-green-400">{formatCurrency(investmentSummary.expectedPipeline)}</div>
              <div className="text-slate-400 text-sm">Expected Pipeline</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-yellow-400">{investmentSummary.roi}x</div>
              <div className="text-slate-400 text-sm">Expected ROI</div>
            </div>
          </div>
        </section>

        {/* Territory Plans */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🗺️ Territory Partner Plans</h2>
          <div className="space-y-6">
            {territoryPlans.map((territory, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-emerald-500/50 transition-colors">
                {/* Territory Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <span className="text-4xl">{territory.icon}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{territory.territory}</h3>
                      <div className="text-slate-400 text-sm">{territory.nickname} • {territory.geography}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{formatCurrency(territory.currentRevenue)} Revenue</div>
                    <div className={`text-sm ${territory.currentGP >= 50 ? 'text-green-400' : territory.currentGP >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {territory.currentGP}% GP
                    </div>
                  </div>
                </div>

                {/* Market Character */}
                <div className="bg-slate-900/50 rounded-lg p-4 mb-4">
                  <div className="text-slate-500 text-xs mb-1">Market Character</div>
                  <div className="text-white">{territory.marketCharacter}</div>
                </div>

                {/* Strategy */}
                <div className="grid md:grid-cols-2 gap-6 mb-4">
                  <div>
                    <h4 className="text-emerald-400 font-semibold mb-2">🎯 Primary Strategy: {territory.primaryStrategy}</h4>
                    <p className="text-slate-300 text-sm mb-3">{territory.rationale}</p>
                    
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Target Partners</h4>
                    <div className="space-y-2">
                      {territory.targetPartners.map((partner, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-800/50 rounded p-2 text-sm">
                          <div>
                            <span className="text-white">{partner.name}</span>
                            <span className="text-slate-500 ml-2">({partner.type})</span>
                          </div>
                          <span className="text-green-400">{partner.opportunity}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Partner Plays</h4>
                    <ul className="space-y-1 mb-4">
                      {territory.plays.map((play, i) => (
                        <li key={i} className="text-blue-400 text-sm">• {play}</li>
                      ))}
                    </ul>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Current Partner Pipeline:</span>
                        <span className="text-red-400">{formatCurrency(territory.currentPartnerPipeline)} ({territory.partnerShare}%)</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Target Partner Pipeline:</span>
                        <span className="text-green-400">{formatCurrency(territory.targetPartnerPipeline)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Investment Required:</span>
                        <span className="text-yellow-400">{territory.investmentRequired}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Seller */}
                <div className="pt-4 border-t border-slate-700 flex items-center justify-between">
                  <div>
                    <span className="text-slate-500 text-sm">Territory Seller: </span>
                    <span className={`font-bold ${territory.seller === 'NEW HIRE NEEDED' ? 'text-red-400' : 'text-white'}`}>
                      {territory.seller}
                    </span>
                    {territory.sellerWinRate && (
                      <span className={`ml-2 text-sm ${territory.sellerWinRate >= 50 ? 'text-green-400' : territory.sellerWinRate >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                        ({territory.sellerWinRate}% win rate)
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">👥 Western Partner Team</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {westernPartnerTeam.map((member, idx) => (
              <div key={idx} className={`bg-slate-800/50 rounded-xl p-6 border ${
                member.status === 'concern' ? 'border-red-700' : 'border-slate-700'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <div className="text-slate-400 text-sm">{member.role}</div>
                  </div>
                  <div className={`text-lg font-bold ${member.winRate < 20 ? 'text-red-400' : member.winRate < 40 ? 'text-yellow-400' : 'text-green-400'}`}>
                    {member.winRate}% Win Rate
                  </div>
                </div>
                <div className="space-y-2 text-sm">
                  <div><span className="text-slate-500">Territories: </span><span className="text-white">{member.territories.join(', ')}</span></div>
                  <div><span className="text-slate-500">Focus: </span><span className="text-blue-400">{member.focus}</span></div>
                  <div className={`p-2 rounded ${member.status === 'concern' ? 'bg-red-900/30' : 'bg-green-900/30'}`}>
                    <span className="text-slate-400">Coaching: </span>
                    <span className={member.status === 'concern' ? 'text-red-300' : 'text-green-300'}>{member.coaching}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 2026 Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📅 2026 Western Partner Roadmap</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {westernRoadmap.map((q, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-xl font-bold text-emerald-400 mb-1">{q.quarter}</div>
                <div className="text-white font-semibold mb-4">{q.theme}</div>
                
                <h4 className="text-slate-400 text-xs font-semibold mb-2">FOCUS AREAS</h4>
                <ul className="space-y-1 mb-4">
                  {q.focus.map((f, i) => (
                    <li key={i} className="text-slate-300 text-sm">• {f}</li>
                  ))}
                </ul>
                
                <h4 className="text-slate-400 text-xs font-semibold mb-2">KPIs</h4>
                <ul className="space-y-1 mb-4">
                  {q.kpis.map((kpi, i) => (
                    <li key={i} className="text-blue-400 text-sm">✓ {kpi}</li>
                  ))}
                </ul>
                
                <div className="pt-3 border-t border-slate-700 space-y-1 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Pipeline Target:</span>
                    <span className="text-green-400">{formatCurrency(q.targetPipeline)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Investment:</span>
                    <span className="text-yellow-400">{formatCurrency(q.investment)}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Success Factors */}
        <section className="mb-12 bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-8 border border-blue-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">🔑 Western Partner Success Factors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-blue-400 font-semibold mb-3">Must Win</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>✓ First Cascadia partner deals (proof of model)</li>
                <li>✓ AWS/Azure partnership formalization</li>
                <li>✓ Kim Guihen win rate improvement</li>
                <li>✓ VC portfolio relationship (a16z or Arch)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-purple-400 font-semibold mb-3">Watch Items</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>⚠️ SF market hiring (AE needed for Biotech Bay)</li>
                <li>⚠️ Cell therapy partner exclusivity (Cellares)</li>
                <li>⚠️ LA vendor program approval timelines</li>
                <li>⚠️ Solutions team partner capacity</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold mb-3">Quick Wins Available</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>→ Resilience partnership (existing customer → partner)</li>
                <li>→ Kite preferred vendor status (already embedded)</li>
                <li>→ AWS partner manager intro (low effort)</li>
                <li>→ DocuSign/Box co-marketing (existing relationships)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTAs */}
        <section className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link href="/partner-plays" className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-lg transition-colors">
              Partner Plays →
            </Link>
            <Link href="/partner-ecosystem" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Technology Partners →
            </Link>
            <Link href="/territories" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Territory Analysis →
            </Link>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mt-12 bg-slate-900/50 rounded-xl p-6 border border-slate-600">
          <h3 className="text-sm font-bold text-slate-400 mb-3">📋 Data Sources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <ul className="space-y-1">
              <li>• Territory revenue: Finance MCP → analyze_customer_profitability</li>
              <li>• GP margins: Finance MCP → by region filter</li>
              <li>• Pipeline: Sales MCP → get_pipeline_by_owner + region filter</li>
            </ul>
            <ul className="space-y-1">
              <li>• Partner team: Labor MCP → get_solutions_team_roster</li>
              <li>• Win rates: Sales MCP → get_win_rate_matrix</li>
              <li>• Investment estimates: Internal planning + industry benchmarks</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
