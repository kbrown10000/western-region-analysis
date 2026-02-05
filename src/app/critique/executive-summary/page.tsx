'use client';

import Link from 'next/link';

/**
 * CRITIQUE: EXECUTIVE SUMMARY
 * 
 * Critical analysis of the Executive Summary page claims and metrics
 * 
 * Source Page: /executive-summary
 * Validation: Sales MCP, Finance MCP queries
 */

const executiveSummary = {
  assessment: 'The Executive Summary presents solid headline metrics but lacks critical context on margin compression and seller performance variance that board members will ask about.',
  severity: 'MEDIUM',
};

const strengths = [
  'Clear terminology definitions (Pipeline vs Bookings vs Revenue) - prevents confusion',
  'Good use of EGP (Estimated Gross Profit) alongside revenue - shows margin awareness',
  'Visual hierarchy makes key metrics scannable for executives',
  'Data source citations add credibility',
];

const criticalGaps = [
  {
    severity: 'HIGH',
    gap: 'Win Rate Decline Not Addressed',
    detail: 'Site shows 41.6% overall win rate but doesn\'t highlight the DECLINE from prior years. New Logo is 90.2%, but Existing Customer expansions dropped to 35.6%. This expansion weakness is buried.',
    question: 'Why are we losing 64.4% of expansion deals?',
    recommendation: 'Add year-over-year win rate trend and expansion-specific analysis',
  },
  {
    severity: 'HIGH',
    gap: 'Seller Variance Hidden',
    detail: 'Justin Ott (74.8% win rate) vs Mike Campbell (14.9%) represents a 5x performance gap. Executive summary aggregates hide this critical coaching need.',
    question: 'Why does one seller have 5x the win rate of another?',
    recommendation: 'Add seller performance distribution chart to exec summary',
  },
  {
    severity: 'MEDIUM',
    gap: 'Pipeline Age Crisis Understated',
    detail: 'Site mentions 77% aging but doesn\'t explain the business impact. At 387 average days open, most pipeline is likely stale and inflated.',
    question: 'What percentage of "pipeline" is actually closeable this year?',
    recommendation: 'Add pipeline quality score and realistic close forecast',
  },
  {
    severity: 'MEDIUM',
    gap: 'West vs East Comparison Missing',
    detail: 'Western Region presented in isolation. No benchmark against East region (51.5% GP vs West 36.5%) or Europe.',
    question: 'Is West underperforming relative to other regions?',
    recommendation: 'Add regional comparison table',
  },
  {
    severity: 'LOW',
    gap: 'Target Account Progress Not Tracked',
    detail: '60+ target accounts identified but no conversion funnel showing how many have been contacted, qualified, or converted.',
    question: 'What\'s our hit rate on target accounts?',
    recommendation: 'Add target account funnel metrics',
  },
];

const dataValidation = [
  {
    claim: 'Open Pipeline: $14.05M (West)',
    mcpResult: '$14.05M (194 opps)',
    source: 'Sales MCP → DAX query with West region filter',
    status: 'VALIDATED',
  },
  {
    claim: 'Win Rate: 41.6% overall',
    mcpResult: '41.6% (1,488 won / 3,573 total)',
    source: 'Sales MCP → get_win_rate_matrix',
    status: 'VALIDATED',
  },
  {
    claim: 'West GP: ~36.5%',
    mcpResult: 'Blended 43.6%, but LA BioMed at 23.9%',
    source: 'Finance MCP → analyze_customer_profitability',
    status: 'PARTIALLY VALIDATED - Territory variance needs detail',
  },
  {
    claim: 'Justin Ott win rate: 74.8%',
    mcpResult: '60.9% in Q4 2025 data',
    source: 'Sales MCP → get_team_performance',
    status: 'DISCREPANCY - Different time periods?',
  },
  {
    claim: 'Mike Campbell win rate: 14.9%',
    mcpResult: '38.2% in Q4 2025 data',
    source: 'Sales MCP → get_team_performance',
    status: 'DISCREPANCY - Needs investigation',
  },
];

const recommendations = [
  {
    priority: 1,
    action: 'Add seller performance variance chart',
    rationale: 'Board will ask "who\'s carrying the region?" - answer it proactively',
    effort: 'Low - data already available',
  },
  {
    priority: 2,
    action: 'Show win rate trend (2023→2024→2025)',
    rationale: 'Declining expansion win rates signal account health issues',
    effort: 'Medium - need historical data pull',
  },
  {
    priority: 3,
    action: 'Add pipeline quality score',
    rationale: '77% aging makes raw pipeline number misleading',
    effort: 'Medium - need weighted calculation',
  },
  {
    priority: 4,
    action: 'Reconcile win rate data discrepancies',
    rationale: 'Different numbers across pages creates credibility risk',
    effort: 'Low - verify data sources',
  },
];

const riskAssessment = [
  {
    risk: 'Board questions seller variance',
    likelihood: 'HIGH',
    impact: 'MEDIUM',
    mitigation: 'Prepare coaching plan documentation',
  },
  {
    risk: 'Pipeline inflation skepticism',
    likelihood: 'HIGH',
    impact: 'HIGH',
    mitigation: 'Add committed vs upside breakout',
  },
  {
    risk: 'GP erosion continues',
    likelihood: 'MEDIUM',
    impact: 'HIGH',
    mitigation: 'Show margin recovery plan for problem accounts',
  },
];

export default function CritiqueExecutiveSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: Executive Summary</h1>
          <div className="flex gap-3">
            <Link href="/executive-summary" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
            <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← All Critiques</Link>
          </div>
        </div>

        {/* Assessment */}
        <section className="mb-8 bg-yellow-900/20 rounded-xl p-6 border border-yellow-700/50">
          <div className="flex items-start gap-4">
            <span className={`px-3 py-1 rounded text-sm font-bold ${
              executiveSummary.severity === 'HIGH' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
            }`}>{executiveSummary.severity}</span>
            <p className="text-slate-200 text-lg">{executiveSummary.assessment}</p>
          </div>
        </section>

        {/* Strengths */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4">✅ What&apos;s Strong</h2>
          <ul className="space-y-2">
            {strengths.map((s, i) => (
              <li key={i} className="text-slate-300 flex items-start gap-2">
                <span className="text-green-400">•</span> {s}
              </li>
            ))}
          </ul>
        </section>

        {/* Critical Gaps */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🚨 Critical Gaps</h2>
          <div className="space-y-4">
            {criticalGaps.map((gap, i) => (
              <div key={i} className={`rounded-xl p-5 border ${
                gap.severity === 'HIGH' ? 'bg-red-900/20 border-red-700/50' :
                gap.severity === 'MEDIUM' ? 'bg-yellow-900/20 border-yellow-700/50' :
                'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    gap.severity === 'HIGH' ? 'bg-red-900 text-red-300' :
                    gap.severity === 'MEDIUM' ? 'bg-yellow-900 text-yellow-300' :
                    'bg-slate-700 text-slate-300'
                  }`}>{gap.severity}</span>
                  <span className="text-white font-bold">{i + 1}. {gap.gap}</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">{gap.detail}</p>
                <p className="text-red-300 text-sm italic mb-2">❓ {gap.question}</p>
                <p className="text-green-400 text-sm">→ {gap.recommendation}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Data Validation */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">🔬 Data Validation</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-400 text-sm">Site Claim</th>
                  <th className="text-left p-3 text-slate-400 text-sm">MCP Result</th>
                  <th className="text-left p-3 text-slate-400 text-sm">Status</th>
                </tr>
              </thead>
              <tbody>
                {dataValidation.map((d, i) => (
                  <tr key={i} className="border-b border-slate-700/50">
                    <td className="p-3 text-white text-sm">{d.claim}</td>
                    <td className="p-3 text-slate-300 text-sm">{d.mcpResult}</td>
                    <td className="p-3">
                      <span className={`px-2 py-1 rounded text-xs ${
                        d.status === 'VALIDATED' ? 'bg-green-900/50 text-green-400' :
                        d.status.includes('DISCREPANCY') ? 'bg-red-900/50 text-red-400' :
                        'bg-yellow-900/50 text-yellow-400'
                      }`}>{d.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4">🎯 Recommendations</h2>
          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <div key={i} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-3 mb-1">
                  <span className="w-6 h-6 rounded-full bg-purple-900 text-purple-300 text-sm flex items-center justify-center font-bold">{r.priority}</span>
                  <span className="text-white font-medium">{r.action}</span>
                  <span className="text-slate-500 text-xs ml-auto">{r.effort}</span>
                </div>
                <p className="text-slate-400 text-sm pl-9">{r.rationale}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Risk Assessment */}
        <section className="mb-8">
          <h2 className="text-xl font-bold text-orange-400 mb-4">⚠️ Risk Assessment</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {riskAssessment.map((r, i) => (
              <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700">
                <h3 className="text-white font-medium mb-2">{r.risk}</h3>
                <div className="flex gap-4 text-xs mb-2">
                  <span className={`${r.likelihood === 'HIGH' ? 'text-red-400' : 'text-yellow-400'}`}>
                    Likelihood: {r.likelihood}
                  </span>
                  <span className={`${r.impact === 'HIGH' ? 'text-red-400' : 'text-yellow-400'}`}>
                    Impact: {r.impact}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">Mitigation: {r.mitigation}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
