'use client';

import Link from 'next/link';

/**
 * PARTNER & ALLIANCE STRATEGY PAGE
 * 
 * Data Sources:
 * - Labor MCP: get_solutions_team_roster (Growth - Partnership and Alliances department)
 * - Sales MCP: get_team_performance, get_win_rate_matrix (Q4 2025)
 * - Direct calculation from opportunity data
 * 
 * Tools Used:
 * - get_solutions_team_roster: Returns all team members with role, department, win rate, avg deal size
 *   Filter: department = "Growth - Partnership and Alliances"
 *   Fields: name, roleFunction, opportunitiesTouched, winRate, avgDealSize
 * 
 * - get_team_performance: Returns pipeline, won, EGP by seller
 *   Filter: time_period = "Q4 2025"
 *   Fields: pipeline, pipelineEGP, closedWon, closedWonEGP, deals, wonDeals
 * 
 * Known Issue: Sales MCP partner tools (get_partner_performance, get_partner_scorecard) 
 * return 400 errors due to schema-map bug using wrong table name ('dbo DIM_Opportunity' 
 * instead of correct schema). Use team/roster tools as workaround.
 * 
 * Last Updated: 2026-02-04
 */

// Partner Team Data from Labor MCP get_solutions_team_roster
// Filter: department = "Growth - Partnership and Alliances"
// Source: http://localhost:3002/api/mcp/labor/execute
// Tool: get_solutions_team_roster, fields: name, department, roleFunction, opportunitiesTouched, winRate, avgDealSize
const partnerTeam = [
  {
    name: 'Kim Guihen',
    role: 'Partner Leadership',
    department: 'Growth - Partnership and Alliances',
    // From Labor MCP get_solutions_team_roster
    opportunitiesTouched: 8,
    winRate: 7.5,          // 7.5% - very low, needs investigation
    avgDealSize: 47500,    // $47.5K average
    // From Sales MCP get_team_performance (Q4 2025)
    pipeline: 70000,
    pipelineEGP: 31500,
    closedWon: 70000,
    closedWonEGP: 31500,
    deals: 1,
    wonDeals: 1,
    status: 'concern' as const,
    notes: 'Very low win rate (7.5%) suggests deal sourcing/qualification issues, not closing'
  },
  {
    name: 'Meghan Rutkowski',
    role: 'Partner Channel Manager',
    department: 'Growth - Partnership and Alliances',
    // From Labor MCP get_solutions_team_roster
    opportunitiesTouched: 11,
    winRate: 37.5,         // 37.5% - better than Kim but below company avg (41.6%)
    avgDealSize: 11389,    // ~$11.4K average (smaller deals)
    // From Sales MCP get_team_performance (Q4 2025)
    pipeline: 536400,
    pipelineEGP: 287660,
    closedWon: 146400,
    closedWonEGP: 99160,
    deals: 12,
    wonDeals: 4,
    status: 'ok' as const,
    notes: 'Better conversion (37.5%) but smaller deal sizes. Focus on deal size expansion'
  }
];

// Current partner channel metrics (calculated)
const partnerChannelMetrics = {
  totalTeamSize: 2,
  totalOppsManaged: 19,
  totalPipeline: 606400,         // $606K combined
  totalPipelineEGP: 319160,
  totalWon: 216400,              // $216K won
  totalWonEGP: 130660,
  avgWinRate: 22.5,              // Blended (7.5 + 37.5) / 2
  avgDealSize: 29445,            // ~$29K
  // Compare to direct sales
  directSalesPipeline: 54800000, // $54.8M
  partnerPipelineShare: 1.1,     // Partner = 1.1% of total pipeline
};

// Partner type strategy (from industry best practices + USDM context)
const partnerTypes = [
  {
    type: 'Technology Partners',
    description: 'Cloud platforms and software vendors where USDM provides implementation/compliance services',
    examples: ['AWS', 'Microsoft Azure', 'Salesforce', 'Veeva', 'DocuSign'],
    currentPartners: ['Veeva', 'DocuSign', 'Box'],
    opportunity: 'Expand cloud assurance → AI governance services on AWS/Azure',
    priority: 'High',
    investmentRequired: '$150K/year',
    expectedReturn: '$2-3M pipeline/year'
  },
  {
    type: 'Implementation Partners',
    description: 'Regional consulting firms who refer complex compliance/validation work',
    examples: ['Regional life science consultancies', 'Big 4 validation practices'],
    currentPartners: ['Limited'],
    opportunity: 'Build referral relationships for overflow/specialized work',
    priority: 'Medium',
    investmentRequired: '$50K/year',
    expectedReturn: '$500K-1M pipeline/year'
  },
  {
    type: 'Industry Associations',
    description: 'Trade groups and professional associations for brand awareness and lead generation',
    examples: ['BIO', 'ISPE', 'DIA', 'RAPS', 'PDA'],
    currentPartners: ['ISPE (member)', 'PDA (sponsor)'],
    opportunity: 'Thought leadership → speaking slots → lead generation',
    priority: 'Medium',
    investmentRequired: '$100K/year',
    expectedReturn: 'Brand awareness, 50-100 MQLs/year'
  },
  {
    type: 'Reseller/OEM Partners',
    description: 'Partners who embed USDM services in their offerings',
    examples: ['CDMO platforms', 'QMS vendors', 'LIMS providers'],
    currentPartners: ['None active'],
    opportunity: 'White-label validation services for platform vendors',
    priority: 'Low (future)',
    investmentRequired: 'TBD',
    expectedReturn: 'Scale opportunity'
  }
];

// Territory-specific partner recommendations
const territoryPartnerStrategy = [
  {
    territory: 'Biotech Beach',
    region: 'San Diego',
    strategy: 'Technology partners for cell therapy manufacturing',
    targetPartners: ['Cellares', 'Multiply Labs'],
    rationale: 'Cell therapy cluster needs specialized manufacturing QA',
    investment: 'Included in direct sales'
  },
  {
    territory: 'LA BioMed',
    region: 'Los Angeles / Thousand Oaks',
    strategy: 'Large pharma vendor programs',
    targetPartners: ['Amgen preferred vendor', 'Gilead partner program'],
    rationale: 'Improve margin on large accounts via preferred vendor status',
    investment: '$25K/year in relationship management'
  },
  {
    territory: 'Biotech Bay',
    region: 'SF / South SF',
    strategy: 'VC ecosystem partnerships',
    targetPartners: ['a16z Bio', 'Arch Ventures', 'RA Capital'],
    rationale: 'Portfolio company referrals at Series B+',
    investment: '$50K/year (events + sponsorships)'
  },
  {
    territory: 'Cascadia',
    region: 'Seattle / PNW',
    strategy: 'Partner-first market entry (zero direct pipeline)',
    targetPartners: ['Regional consultancies', 'UW research partnerships'],
    rationale: 'Per "The Ask" - $150K partner investment → $2.5M TAM access',
    investment: '$150K/year'
  }
];

// 2026 Partner Program Roadmap
const roadmap = [
  {
    quarter: 'Q1 2026',
    initiatives: [
      'Audit current partner relationships (Veeva, DocuSign, Box)',
      'Define partner tier criteria (deal volume, GP margin, engagement)',
      'Launch Cascadia partner outreach (target: 2 signed partners)'
    ],
    investment: '$25K',
    targetPipeline: '$500K'
  },
  {
    quarter: 'Q2 2026',
    initiatives: [
      'AWS/Azure partnership formalization',
      'Kim Guihen coaching plan (improve 7.5% → 25% win rate)',
      'First Cascadia partner deals in pipeline'
    ],
    investment: '$50K',
    targetPipeline: '$1M cumulative'
  },
  {
    quarter: 'Q3 2026',
    initiatives: [
      'Partner portal launch (deal registration, training)',
      'Industry association speaking circuit (ISPE, BIO)',
      'Biotech Bay VC outreach program'
    ],
    investment: '$75K',
    targetPipeline: '$2M cumulative'
  },
  {
    quarter: 'Q4 2026',
    initiatives: [
      'Annual partner summit (virtual)',
      'Partner-sourced revenue target: 10% of West bookings',
      '2027 partner program budget approval'
    ],
    investment: '$50K',
    targetPipeline: '$3M cumulative (5% of West target)'
  }
];

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
};

const getStatusColor = (status: 'star' | 'ok' | 'concern') => {
  switch(status) {
    case 'star': return 'bg-green-900/50 border-green-700';
    case 'ok': return 'bg-blue-900/50 border-blue-700';
    case 'concern': return 'bg-red-900/50 border-red-700';
  }
};

export default function PartnerStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Partner & Alliance Strategy</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back</Link>
        </div>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Building the partner channel from 1% to 10% of Western Region pipeline
        </p>

        {/* Current State */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">📊 Current Partner Channel (Q4 2025)</h2>
          
          {/* Summary Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="text-slate-400 text-sm">Team Size</div>
              <div className="text-2xl font-bold text-white">{partnerChannelMetrics.totalTeamSize}</div>
              <div className="text-red-400 text-xs">Severely understaffed</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="text-slate-400 text-sm">Partner Pipeline</div>
              <div className="text-2xl font-bold text-yellow-400">{formatCurrency(partnerChannelMetrics.totalPipeline)}</div>
              <div className="text-red-400 text-xs">{partnerChannelMetrics.partnerPipelineShare}% of total</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="text-slate-400 text-sm">Blended Win Rate</div>
              <div className="text-2xl font-bold text-red-400">{partnerChannelMetrics.avgWinRate}%</div>
              <div className="text-slate-400 text-xs">vs 41.6% company avg</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
              <div className="text-slate-400 text-sm">Avg Deal Size</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(partnerChannelMetrics.avgDealSize)}</div>
              <div className="text-slate-400 text-xs">vs $127K direct</div>
            </div>
          </div>

          {/* Partner Team Members */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-semibold text-white mb-4">Partner Team Members</h3>
            <div className="space-y-4">
              {partnerTeam.map((member, idx) => (
                <div key={idx} className={`p-4 rounded-lg border ${getStatusColor(member.status)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-lg font-bold text-white">{member.name}</div>
                      <div className="text-slate-400 text-sm">{member.role}</div>
                    </div>
                    <div className={`text-sm font-bold ${member.winRate < 20 ? 'text-red-400' : member.winRate < 40 ? 'text-yellow-400' : 'text-green-400'}`}>
                      {member.winRate}% Win Rate
                    </div>
                  </div>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <span className="text-slate-400">Opps: </span>
                      <span className="text-white">{member.opportunitiesTouched}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Pipeline: </span>
                      <span className="text-white">{formatCurrency(member.pipeline)}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Won: </span>
                      <span className="text-green-400">{formatCurrency(member.closedWon)}</span>
                    </div>
                    <div>
                      <span className="text-slate-400">Avg Deal: </span>
                      <span className="text-white">{formatCurrency(member.avgDealSize)}</span>
                    </div>
                  </div>
                  <div className="mt-2 text-xs text-slate-400 italic">{member.notes}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Partner Types */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🤝 Partner Type Strategy</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {partnerTypes.map((pt, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{pt.type}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    pt.priority === 'High' ? 'bg-green-900 text-green-300' :
                    pt.priority === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-slate-700 text-slate-300'
                  }`}>
                    {pt.priority} Priority
                  </span>
                </div>
                <p className="text-slate-400 text-sm mb-3">{pt.description}</p>
                <div className="space-y-2 text-sm">
                  <div>
                    <span className="text-slate-500">Current: </span>
                    <span className="text-white">{pt.currentPartners.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Opportunity: </span>
                    <span className="text-blue-400">{pt.opportunity}</span>
                  </div>
                  <div className="flex justify-between mt-3 pt-3 border-t border-slate-700">
                    <span className="text-slate-400">Investment: {pt.investmentRequired}</span>
                    <span className="text-green-400">Return: {pt.expectedReturn}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Territory Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🗺️ Territory-Specific Partner Strategy</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-400">Territory</th>
                  <th className="text-left p-4 text-slate-400">Strategy</th>
                  <th className="text-left p-4 text-slate-400">Target Partners</th>
                  <th className="text-left p-4 text-slate-400">Investment</th>
                </tr>
              </thead>
              <tbody>
                {territoryPartnerStrategy.map((t, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50">
                    <td className="p-4">
                      <div className="font-bold text-white">{t.territory}</div>
                      <div className="text-slate-400 text-sm">{t.region}</div>
                    </td>
                    <td className="p-4">
                      <div className="text-white">{t.strategy}</div>
                      <div className="text-slate-400 text-xs">{t.rationale}</div>
                    </td>
                    <td className="p-4 text-blue-400">{t.targetPartners.join(', ')}</td>
                    <td className="p-4 text-yellow-400">{t.investment}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 2026 Roadmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">📅 2026 Partner Program Roadmap</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {roadmap.map((q, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="text-xl font-bold text-blue-400 mb-4">{q.quarter}</div>
                <ul className="space-y-2 mb-4">
                  {q.initiatives.map((init, i) => (
                    <li key={i} className="text-sm text-slate-300 flex items-start">
                      <span className="text-green-400 mr-2">•</span>
                      {init}
                    </li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-700 space-y-1">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Investment:</span>
                    <span className="text-yellow-400">{q.investment}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Target Pipeline:</span>
                    <span className="text-green-400">{q.targetPipeline}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-12 bg-slate-900/50 rounded-xl p-6 border border-slate-600">
          <h2 className="text-lg font-bold text-slate-400 mb-4">📋 Data Sources & Methodology</h2>
          <div className="grid md:grid-cols-2 gap-6 text-sm">
            <div>
              <h3 className="text-white font-semibold mb-2">Partner Team Data</h3>
              <ul className="space-y-1 text-slate-400">
                <li>• <span className="text-blue-400">Labor MCP</span> → get_solutions_team_roster</li>
                <li>  Filter: department = &quot;Growth - Partnership and Alliances&quot;</li>
                <li>  Fields: opportunitiesTouched, winRate, avgDealSize</li>
                <li>• <span className="text-blue-400">Sales MCP</span> → get_team_performance (Q4 2025)</li>
                <li>  Fields: pipeline, closedWon, EGP, deals</li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-2">Known Issues</h3>
              <ul className="space-y-1 text-slate-400">
                <li>• <span className="text-red-400">get_partner_performance</span>: 400 error (schema bug)</li>
                <li>• <span className="text-red-400">get_partner_scorecard</span>: 400 error (schema bug)</li>
                <li>• Root cause: schema-map.ts uses &apos;dbo DIM_Opportunity&apos; instead of correct table</li>
                <li>• Workaround: Use get_solutions_team_roster + get_team_performance</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Key Recommendations */}
        <section className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-xl p-6 border border-blue-700/50">
          <h2 className="text-xl font-bold text-white mb-4">🎯 Key Recommendations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="text-blue-400 font-semibold">Immediate (Q1 2026)</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Diagnose Kim Guihen&apos;s 7.5% win rate</li>
                <li>• Launch Cascadia partner outreach</li>
                <li>• Define partner tier criteria</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-purple-400 font-semibold">Medium-term (Q2-Q3)</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• AWS/Azure partnership formalization</li>
                <li>• Partner portal for deal registration</li>
                <li>• Industry speaking circuit (ISPE, BIO)</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-green-400 font-semibold">2026 Target</h3>
              <ul className="text-sm text-slate-300 space-y-1">
                <li>• Partner-sourced: 10% of West pipeline</li>
                <li>• $3M cumulative partner pipeline</li>
                <li>• 5+ active partner relationships</li>
              </ul>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
