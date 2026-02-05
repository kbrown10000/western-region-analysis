'use client';

import Link from 'next/link';

/**
 * PARTNER PLAYS PAGE
 * 
 * Joint solution plays, co-sell motions, and deal origination strategies
 * 
 * Research Sources:
 * - Partner2B: Partner-Sourced Pipeline, Co-Selling Best Practices
 * - Ebsta 2024: Win rates, deal velocity with partners
 * - Industry playbook templates for life sciences
 * 
 * Last Updated: 2026-02-04
 */

// Partner-originated vs influenced distinction
const dealTypes = {
  originated: {
    definition: 'Partner brings the lead/opportunity to USDM',
    value: 'Highest value - pure new business from partner network',
    typical: '10-30% of partner revenue',
    commission: '10-20% referral fee or rev share',
    examples: ['Partner introduces new biotech client', 'MSP refers validation project', 'VC portfolio referral']
  },
  influenced: {
    definition: 'Partner helps close a deal USDM already has',
    value: 'Accelerates deals, improves win rates',
    typical: '70-90% of partner revenue',
    commission: '5-10% influence fee or MDF credits',
    examples: ['AWS helps position cloud migration', 'Veeva references USDM for integration', 'Joint proposal with partner']
  },
  coSell: {
    definition: 'Partner and USDM sell together from discovery to close',
    value: 'Highest win rates (53%+ lift), fastest cycles',
    typical: 'Subset of both originated & influenced',
    commission: 'Revenue share based on contribution',
    examples: ['Joint AWS migration + validation bundle', 'Veeva implementation + CSV combo', 'Full lifecycle with partner']
  }
};

// Core partner plays - what we sell together
const partnerPlays = [
  {
    play: 'Cloud Migration + Validation',
    partner: 'AWS / Azure',
    description: 'Customer migrates GxP systems to cloud. Partner provides infrastructure, USDM provides validation and compliance.',
    usdmValue: '$150-500K',
    partnerValue: '$50-200K/year ARR',
    targetCustomer: 'Mid-size biotech moving from on-prem',
    winRate: '65%',
    icon: '☁️',
    priority: 'HIGH',
    westernOpportunity: 'Biotech Bay + Biotech Beach - 50+ targets with legacy on-prem systems'
  },
  {
    play: 'Veeva Implementation + CSV',
    partner: 'Veeva',
    description: 'Veeva provides platform, USDM does computer system validation (CSV) and compliance documentation.',
    usdmValue: '$75-200K',
    partnerValue: '$200K+ license',
    targetCustomer: 'Any biotech implementing Veeva Vault, QMS, or RIM',
    winRate: '70%',
    icon: '📦',
    priority: 'HIGH',
    westernOpportunity: 'LA BioMed large pharma accounts already on Veeva'
  },
  {
    play: 'AI Governance Framework',
    partner: 'AWS / Microsoft',
    description: 'Customer deploying ML/AI in regulated processes. Partner provides platform, USDM provides AI validation framework.',
    usdmValue: '$100-300K',
    partnerValue: '$100K+ platform',
    targetCustomer: 'Pharma/biotech using AI/ML in drug development',
    winRate: '50%',
    icon: '🤖',
    priority: 'EMERGING',
    westernOpportunity: 'Recursion, Insitro, 64x Bio - AI-native biotechs'
  },
  {
    play: 'Cell Therapy Manufacturing QA',
    partner: 'Cellares / Multiply Labs',
    description: 'Partner provides automation, USDM provides manufacturing QA, validation, and compliance.',
    usdmValue: '$200-500K',
    partnerValue: 'Equipment/platform',
    targetCustomer: 'Cell therapy companies scaling manufacturing',
    winRate: '60%',
    icon: '🧬',
    priority: 'HIGH',
    westernOpportunity: 'San Diego cluster - Poseida, Fate, Kite'
  },
  {
    play: 'Data Integrity Remediation',
    partner: 'QMS Vendors',
    description: 'FDA warning letter response. Partner provides QMS platform, USDM provides remediation services.',
    usdmValue: '$300-800K',
    partnerValue: 'QMS license + implementation',
    targetCustomer: 'Companies with FDA observations (483s, warning letters)',
    winRate: '80%',
    icon: '⚠️',
    priority: 'MEDIUM',
    westernOpportunity: 'LA BioMed large accounts with compliance issues'
  },
  {
    play: 'VC Portfolio Services',
    partner: 'Life Science VCs',
    description: 'VC refers portfolio companies for compliance. USDM becomes preferred vendor for portfolio.',
    usdmValue: '$50-150K per company',
    partnerValue: 'Portfolio company success',
    targetCustomer: 'Series A-C biotechs in VC portfolio',
    winRate: '75%',
    icon: '💰',
    priority: 'HIGH',
    westernOpportunity: 'Biotech Bay VC ecosystem - a16z, Arch, RA Capital'
  },
];

// Co-sell motion steps
const coSellMotion = [
  {
    stage: '1. Joint Opportunity Identification',
    salesAction: 'Share target account list with partner',
    partnerAction: 'Identify overlapping customers + net-new opportunities',
    tools: 'CRM integration, partner portal deal registration',
    kpi: 'Qualified opportunities shared'
  },
  {
    stage: '2. Joint Discovery',
    salesAction: 'Run discovery with partner present',
    partnerAction: 'Add technical context, platform roadmap',
    tools: 'Joint meeting, mutual NDA',
    kpi: 'Discovery calls with partner involvement'
  },
  {
    stage: '3. Solution Design',
    salesAction: 'Define USDM scope, build proposal',
    partnerAction: 'Define partner scope, reference architecture',
    tools: 'Joint solution template, pricing calculator',
    kpi: 'Joint proposals submitted'
  },
  {
    stage: '4. Executive Alignment',
    salesAction: 'Champion building, USDM exec sponsor',
    partnerAction: 'Partner exec engagement, customer success stories',
    tools: 'Executive briefing deck, reference calls',
    kpi: 'Exec meetings with partner support'
  },
  {
    stage: '5. Close & Launch',
    salesAction: 'Contract negotiation, SOW finalization',
    partnerAction: 'Partner agreement alignment, implementation planning',
    tools: 'Master partner agreement, joint kickoff template',
    kpi: 'Deals closed with partner influence'
  }
];

// How to drive partner-originated deals
const originationStrategies = [
  {
    strategy: 'Deal Registration Program',
    description: 'Partners register leads first, get protection and higher margins',
    howItWorks: 'Partner logs lead in portal → 30-day exclusivity → guaranteed 15% referral fee on close',
    investment: '$10K (portal setup)',
    expectedDeals: '5-10/quarter',
    icon: '📝'
  },
  {
    strategy: 'Partner Enablement Training',
    description: 'Train partner sales teams to identify USDM opportunities',
    howItWorks: 'Quarterly lunch & learns, cheat sheets, co-branded materials, certification program',
    investment: '$25K/quarter',
    expectedDeals: '10-15/quarter',
    icon: '📚'
  },
  {
    strategy: 'MDF / Co-Marketing',
    description: 'Fund partner marketing activities that generate leads',
    howItWorks: 'Joint webinars, co-sponsored events, content syndication, partner email campaigns',
    investment: '$50K/year',
    expectedDeals: '15-20/quarter',
    icon: '📣'
  },
  {
    strategy: 'VC Portfolio Program',
    description: 'Become preferred vendor for VC portfolio companies',
    howItWorks: 'Partner with 3-5 life science VCs, offer portfolio discounts, attend portfolio days',
    investment: '$30K/year',
    expectedDeals: '5-10/quarter',
    icon: '🏦'
  },
  {
    strategy: 'Partner SPIFFs',
    description: 'Direct incentives to partner sales reps for qualified referrals',
    howItWorks: '$500-2K per qualified meeting, $2-5K per closed deal to referring rep',
    investment: '$40K/year',
    expectedDeals: '15-25/quarter',
    icon: '💵'
  }
];

// Key metrics for partner plays
const partnerPlayMetrics = {
  targetOriginatedShare: 30, // 30% of partner revenue from originated (vs influenced)
  targetCoSellWinRate: 65, // Co-sell deals close at 65%+
  targetCycleReduction: 25, // 25% faster sales cycles
  targetDealSizeLift: 35, // 35% larger deals with partner involvement
};

export default function PartnerPlays() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Partner Plays</h1>
          <Link href="/partner-overview" className="text-purple-400 hover:text-purple-300">← Partner Hub</Link>
        </div>
        <p className="text-slate-300 mb-12 max-w-3xl">
          Joint solution plays, co-sell motions, and strategies to drive partner-originated revenue in the Western region.
        </p>

        {/* Deal Type Definitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Partner Deal Types</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {Object.entries(dealTypes).map(([key, type]) => (
              <div key={key} className={`bg-slate-800/50 rounded-xl p-6 border ${
                key === 'originated' ? 'border-green-700' : 
                key === 'coSell' ? 'border-purple-700' : 
                'border-slate-700'
              }`}>
                <h3 className={`text-lg font-bold mb-2 ${
                  key === 'originated' ? 'text-green-400' : 
                  key === 'coSell' ? 'text-purple-400' : 
                  'text-blue-400'
                }`}>
                  {key === 'originated' ? '🌟 Partner-Originated' : 
                   key === 'coSell' ? '🤝 Co-Sell' : 
                   '📈 Partner-Influenced'}
                </h3>
                <p className="text-slate-300 text-sm mb-3">{type.definition}</p>
                <div className="space-y-2 text-sm">
                  <div><span className="text-slate-500">Value: </span><span className="text-white">{type.value}</span></div>
                  <div><span className="text-slate-500">Typical: </span><span className="text-white">{type.typical}</span></div>
                  <div><span className="text-slate-500">Commission: </span><span className="text-yellow-400">{type.commission}</span></div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <div className="text-slate-500 text-xs mb-1">Examples:</div>
                  <ul className="text-xs text-slate-400 space-y-1">
                    {type.examples.map((ex, i) => <li key={i}>• {ex}</li>)}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Core Partner Plays */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎮 Core Partner Plays (Western Region)</h2>
          <div className="space-y-4">
            {partnerPlays.map((play, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-colors">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{play.icon}</span>
                    <div>
                      <h3 className="text-lg font-bold text-white">{play.play}</h3>
                      <div className="text-purple-400 text-sm">Partner: {play.partner}</div>
                    </div>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    play.priority === 'HIGH' ? 'bg-green-900 text-green-300' :
                    play.priority === 'EMERGING' ? 'bg-blue-900 text-blue-300' :
                    'bg-yellow-900 text-yellow-300'
                  }`}>
                    {play.priority}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-4">{play.description}</p>
                <div className="grid md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">USDM Value: </span>
                    <span className="text-green-400 font-bold">{play.usdmValue}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Partner Value: </span>
                    <span className="text-blue-400">{play.partnerValue}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Win Rate: </span>
                    <span className="text-yellow-400">{play.winRate}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Target: </span>
                    <span className="text-slate-300">{play.targetCustomer}</span>
                  </div>
                </div>
                <div className="mt-3 pt-3 border-t border-slate-700">
                  <span className="text-slate-500 text-sm">🗺️ Western Opportunity: </span>
                  <span className="text-purple-300 text-sm">{play.westernOpportunity}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Co-Sell Motion */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🤝 Co-Sell Motion: Stage-by-Stage</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-400">Stage</th>
                  <th className="text-left p-4 text-blue-400">USDM Sales Action</th>
                  <th className="text-left p-4 text-purple-400">Partner Action</th>
                  <th className="text-left p-4 text-slate-400">Tools</th>
                  <th className="text-left p-4 text-green-400">KPI</th>
                </tr>
              </thead>
              <tbody>
                {coSellMotion.map((stage, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50">
                    <td className="p-4 text-white font-medium">{stage.stage}</td>
                    <td className="p-4 text-slate-300 text-sm">{stage.salesAction}</td>
                    <td className="p-4 text-slate-300 text-sm">{stage.partnerAction}</td>
                    <td className="p-4 text-slate-400 text-sm">{stage.tools}</td>
                    <td className="p-4 text-green-400 text-sm">{stage.kpi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Origination Strategies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Driving Partner-Originated Deals</h2>
          <p className="text-slate-400 mb-6">
            Partner-originated deals are the gold standard - pure new business from your partner network. 
            Here&apos;s how to build a pipeline of partner-sourced opportunities:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {originationStrategies.map((strat, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{strat.icon}</span>
                  <h3 className="text-lg font-bold text-white">{strat.strategy}</h3>
                </div>
                <p className="text-slate-300 text-sm mb-3">{strat.description}</p>
                <div className="bg-slate-900/50 rounded-lg p-3 mb-3">
                  <div className="text-slate-500 text-xs mb-1">How It Works:</div>
                  <div className="text-slate-300 text-sm">{strat.howItWorks}</div>
                </div>
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="text-slate-500">Investment: </span>
                    <span className="text-yellow-400">{strat.investment}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Expected: </span>
                    <span className="text-green-400">{strat.expectedDeals} deals</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Target Metrics */}
        <section className="mb-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 border border-purple-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Partner Play Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">{partnerPlayMetrics.targetOriginatedShare}%</div>
              <div className="text-slate-400 text-sm">Partner-Originated Share</div>
              <div className="text-slate-500 text-xs">Target for 2026</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">{partnerPlayMetrics.targetCoSellWinRate}%</div>
              <div className="text-slate-400 text-sm">Co-Sell Win Rate</div>
              <div className="text-slate-500 text-xs">vs 41.6% company avg</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">{partnerPlayMetrics.targetCycleReduction}%</div>
              <div className="text-slate-400 text-sm">Cycle Reduction</div>
              <div className="text-slate-500 text-xs">Faster with partners</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">{partnerPlayMetrics.targetDealSizeLift}%</div>
              <div className="text-slate-400 text-sm">Deal Size Lift</div>
              <div className="text-slate-500 text-xs">Larger joint deals</div>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link href="/partner-ecosystem" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors">
              Technology Partners →
            </Link>
            <Link href="/partner-solutions" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Solutions Alignment →
            </Link>
            <Link href="/partner-west" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Western Plan →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
