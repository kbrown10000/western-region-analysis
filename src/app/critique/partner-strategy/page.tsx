'use client';

import Link from 'next/link';

/**
 * CRITIQUE: PARTNER STRATEGY
 * 
 * Critical analysis of Partner strategy pages and assumptions
 * HIGH SEVERITY - Major assumptions need validation
 * 
 * Source Pages: /partner-overview, /partner-plays, /partner-ecosystem, /partner-west
 */

const executiveSummary = {
  assessment: 'The partner strategy makes aggressive claims about industry benchmarks (58% of top performer revenue from partners) but USDM has no proof-of-concept wins to validate the model will work in life sciences consulting. The $300K investment → $4.8M pipeline (16x ROI) assumption is based on industry averages that may not apply.',
  severity: 'HIGH',
};

const strengths = [
  'Excellent research backing - cites specific sources (Partner2B, Ebsta, Forrester)',
  'Territory-specific strategies show understanding of market differences',
  'Honest about current state (1.1% from partners vs 28% industry)',
  'Clear investment ask with defined ROI expectations',
  'Technology partner alignment (AWS, Azure, Veeva) is logical',
];

const criticalGaps = [
  {
    severity: 'HIGH',
    gap: '16x ROI Assumption Unvalidated',
    detail: 'Claim: $300K investment → $4.8M pipeline. Industry benchmarks are for software/SaaS companies. Professional services (especially regulated industries) have different partner dynamics. No comparable life sciences consulting firm data cited.',
    question: 'What ROI do OTHER life sciences consulting firms see from partners?',
    recommendation: 'Research Deloitte, Accenture, smaller consulting firm partner programs in life sciences',
  },
  {
    severity: 'MEDIUM',
    gap: 'Partner Attribution Model Needs Refinement',
    detail: 'Partner managers source deals but AMs close them. Current attribution shows closer (AM) win rates, not partner-originated EGP. Kim\'s team has $319K partner-originated EGP — better metric than win rate.',
    question: 'Are we measuring partner success correctly?',
    recommendation: 'Track partner-originated pipeline and EGP, not closer win rates',
  },
  {
    severity: 'HIGH',
    gap: 'No Proof-of-Concept Planned',
    detail: 'Strategy jumps from 1.1% to 10% partner revenue without pilot testing. No mention of testing one territory or one partner before full investment.',
    question: 'Shouldn\'t we prove the model works before $300K commitment?',
    recommendation: 'Add Q1 2026 POC phase with 1 partner, 1 territory, $50K budget',
  },
  {
    severity: 'MEDIUM',
    gap: 'Cascadia Partner-First Strategy Risky',
    detail: '$150K investment in a market with ZERO current presence. Partners typically want to see vendor success before investing in referrals. Chicken-and-egg problem.',
    question: 'Will partners refer to a vendor with no local track record?',
    recommendation: 'Consider hybrid: 1 direct hire + partner development simultaneously',
  },
  {
    severity: 'MEDIUM',
    gap: 'VC Portfolio Program Untested',
    detail: 'Claims a16z, Arch, RA Capital as targets but no existing VC relationships documented. Getting into VC preferred vendor programs is highly competitive.',
    question: 'Do we have ANY VC relationships today?',
    recommendation: 'Start with tier-2 VCs where competition is lower',
  },
  {
    severity: 'MEDIUM',
    gap: 'Technology Partner Value Prop Unclear',
    detail: 'AWS/Azure sections focus on what THEY get (implementation revenue) but not why they would partner with USDM vs larger competitors (Deloitte, Accenture, Infosys).',
    question: 'Why would AWS choose USDM over larger partners?',
    recommendation: 'Define USDM\'s unique value prop for hyperscaler partnerships',
  },
  {
    severity: 'LOW',
    gap: 'Partner Portal Mentioned Without Scope',
    detail: 'Roadmap mentions "partner portal" in Q3 but no definition of features, cost, or build-vs-buy decision.',
    question: 'Is a portal necessary at this scale?',
    recommendation: 'Defer portal until partner program proves out',
  },
];

const dataValidation = [
  {
    claim: 'Partner pipeline: $606K (1.1%)',
    mcpResult: 'Kim: $70K + Meghan: $536K = $606K ✓',
    source: 'Sales MCP → get_team_performance',
    status: 'VALIDATED',
  },
  {
    claim: 'Partner-originated EGP: $319K',
    mcpResult: 'Kim\'s team: $319K EGP from partner-sourced deals',
    source: 'Sales MCP → partner pipeline attribution',
    status: 'VALIDATED - Note: Deals closed by AMs',
  },
  {
    claim: 'Company win rate: 41.6%',
    mcpResult: '41.6% (verified)',
    source: 'Sales MCP → get_win_rate_matrix',
    status: 'VALIDATED',
  },
  {
    claim: 'Industry benchmark: 28% from partners',
    mcpResult: 'N/A - External research claim',
    source: 'The Digital Bloom / Kyle Poyar (2025)',
    status: 'EXTERNAL - Cannot validate',
  },
  {
    claim: 'Top performers: 58% from partners',
    mcpResult: 'N/A - External research claim',
    source: 'Partner2B Industry Research',
    status: 'EXTERNAL - Applies to SaaS, not services',
  },
];

const recommendations = [
  {
    priority: 1,
    action: 'Diagnose Kim Guihen\'s 7.5% win rate FIRST',
    rationale: 'Don\'t scale a broken function. Either fix it or restructure the role.',
    effort: 'Medium - sales ops analysis + coaching plan',
  },
  {
    priority: 2,
    action: 'Run a 90-day POC with ONE partner',
    rationale: 'Prove the model before committing $300K. Suggest Veeva (existing relationship).',
    effort: 'Low - just formalize existing partnership',
  },
  {
    priority: 3,
    action: 'Research life sciences consulting partner benchmarks',
    rationale: 'Current benchmarks are SaaS-focused. Professional services may be different.',
    effort: 'Medium - industry research project',
  },
  {
    priority: 4,
    action: 'Define AWS/Azure differentiation vs larger competitors',
    rationale: 'Hyperscalers have many partner options. Why USDM?',
    effort: 'Medium - competitive analysis + value prop work',
  },
  {
    priority: 5,
    action: 'Reduce Cascadia investment to $75K with hybrid model',
    rationale: '$150K for partner-only entry in zero-presence market is risky',
    effort: 'Low - budget reallocation',
  },
];

const riskAssessment = [
  {
    risk: 'Partner program fails to generate pipeline',
    likelihood: 'MEDIUM',
    impact: 'HIGH',
    mitigation: 'POC phase with clear kill criteria',
  },
  {
    risk: 'Kim Guihen underperformance continues',
    likelihood: 'HIGH',
    impact: 'MEDIUM',
    mitigation: 'Performance improvement plan with 90-day milestones',
  },
  {
    risk: 'AWS/Azure partnerships don\'t materialize',
    likelihood: 'MEDIUM',
    impact: 'MEDIUM',
    mitigation: 'Focus on smaller tech partners first (Veeva, Box)',
  },
  {
    risk: 'Cascadia investment yields nothing',
    likelihood: 'MEDIUM',
    impact: 'LOW',
    mitigation: 'Reduce investment, require milestone-based funding',
  },
];

const challengeQuestions = [
  'If the partner function has 7.5% win rate today, why would it perform better at 3x the investment?',
  'What makes USDM more attractive to AWS than Deloitte, Accenture, or specialized life sciences SIs?',
  'Can you name ONE comparable life sciences consulting firm that gets 28% of revenue from partners?',
  'If Cascadia partners won\'t refer without local presence, and we won\'t hire without partners, how do we break the deadlock?',
  'The ROI assumptions are based on SaaS benchmarks. How do professional services partner economics differ?',
];

export default function CritiquePartnerStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: Partner Strategy</h1>
          <div className="flex gap-3">
            <Link href="/partner-overview" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
            <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← All Critiques</Link>
          </div>
        </div>

        {/* Assessment */}
        <section className="mb-8 bg-red-900/30 rounded-xl p-6 border border-red-700/50">
          <div className="flex items-start gap-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-red-900 text-red-300">{executiveSummary.severity}</span>
            <p className="text-slate-200 text-lg">{executiveSummary.assessment}</p>
          </div>
        </section>

        {/* Challenge Questions */}
        <section className="mb-8 bg-orange-900/20 rounded-xl p-6 border border-orange-700/50">
          <h2 className="text-xl font-bold text-orange-400 mb-4">❓ Questions the Board Will Ask</h2>
          <ul className="space-y-3">
            {challengeQuestions.map((q, i) => (
              <li key={i} className="text-slate-200 flex items-start gap-2">
                <span className="text-orange-400 font-bold">{i + 1}.</span> {q}
              </li>
            ))}
          </ul>
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
                  <th className="text-left p-3 text-slate-400 text-sm">Validation</th>
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
                        d.status.includes('EXTERNAL') ? 'bg-blue-900/50 text-blue-400' :
                        d.status.includes('CONCERNING') ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-slate-700 text-slate-300'
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
          <div className="grid md:grid-cols-2 gap-4">
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
