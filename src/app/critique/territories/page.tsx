'use client';

import Link from 'next/link';

const executiveSummary = {
  assessment: 'Territory analysis is solid with good data backing. Main gap is the single-seller dependency in key territories (Mike Campbell controls 38% of West pipeline with lowest win rate).',
  severity: 'MEDIUM',
};

const strengths = [
  'Clear "pistons in the engine" metaphor makes strategy memorable',
  'Territory-level GP analysis identifies problem areas (LA BioMed at 23.9%)',
  'Seller-territory alignment is explicit and measurable',
  'Investment priorities (Protect/Fix/Hire/Partner) are actionable',
];

const criticalGaps = [
  {
    severity: 'HIGH',
    gap: 'Mike Campbell Risk Concentration',
    detail: 'Mike holds $5.42M (38%) of West pipeline but has lowest win rate (14.9%). If he underperforms, West misses target by 40%.',
    question: 'What\'s the contingency if Mike\'s pipeline doesn\'t convert?',
    recommendation: 'Add pipeline coverage model showing risk scenarios',
  },
  {
    severity: 'MEDIUM',
    gap: 'Biotech Bay Underpenetration Not Explained',
    detail: '$1.35M revenue in the largest biotech market in the world. Site says "underpenetrated" but doesn\'t explain WHY.',
    question: 'Why haven\'t we been able to grow in SF Bay?',
    recommendation: 'Add root cause analysis for SF underperformance',
  },
  {
    severity: 'MEDIUM',
    gap: 'Territory GP Calculation Method Unclear',
    detail: 'LA BioMed shows 23.9% GP, but is this blended across all accounts or weighted by revenue?',
    question: 'Can 4 problem accounts really drag down an entire territory?',
    recommendation: 'Show GP with/without problem accounts for clearer view',
  },
];

const dataValidation = [
  { claim: 'West pipeline: $14.05M', mcpResult: '$14.05M (194 opps)', status: 'VALIDATED' },
  { claim: 'Justin Ott: $4.42M pipeline', mcpResult: '$6.9M in Q4 data', status: 'DISCREPANCY' },
  { claim: 'Mike Campbell: $5.42M pipeline', mcpResult: '$2.94M in Q4 data', status: 'DISCREPANCY' },
  { claim: 'LA BioMed GP: 23.9%', mcpResult: 'Confirmed via Finance MCP', status: 'VALIDATED' },
];

const recommendations = [
  { priority: 1, action: 'Add pipeline coverage model (3x target)', rationale: 'Shows risk of single-seller dependency' },
  { priority: 2, action: 'Root cause analysis for Biotech Bay', rationale: 'Largest market, smallest presence needs explanation' },
  { priority: 3, action: 'Show GP excluding top 4 problem accounts', rationale: 'Clarifies if problem is systemic or concentrated' },
];

export default function CritiqueTerritories() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: Territories</h1>
          <div className="flex gap-3">
            <Link href="/territories" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
            <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← All Critiques</Link>
          </div>
        </div>

        <section className="mb-8 bg-yellow-900/20 rounded-xl p-6 border border-yellow-700/50">
          <div className="flex items-start gap-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-yellow-900 text-yellow-300">{executiveSummary.severity}</span>
            <p className="text-slate-200 text-lg">{executiveSummary.assessment}</p>
          </div>
        </section>

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

        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🚨 Critical Gaps</h2>
          <div className="space-y-4">
            {criticalGaps.map((gap, i) => (
              <div key={i} className={`rounded-xl p-5 border ${
                gap.severity === 'HIGH' ? 'bg-red-900/20 border-red-700/50' : 'bg-yellow-900/20 border-yellow-700/50'
              }`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${
                    gap.severity === 'HIGH' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'
                  }`}>{gap.severity}</span>
                  <span className="text-white font-bold">{gap.gap}</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">{gap.detail}</p>
                <p className="text-red-300 text-sm italic mb-2">❓ {gap.question}</p>
                <p className="text-green-400 text-sm">→ {gap.recommendation}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-blue-400 mb-4">🔬 Data Validation</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-3 text-slate-400 text-sm">Claim</th>
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
                        d.status === 'VALIDATED' ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'
                      }`}>{d.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-purple-400 mb-4">🎯 Recommendations</h2>
          <div className="space-y-3">
            {recommendations.map((r, i) => (
              <div key={i} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-purple-900 text-purple-300 text-sm flex items-center justify-center font-bold">{r.priority}</span>
                  <span className="text-white font-medium">{r.action}</span>
                </div>
                <p className="text-slate-400 text-sm pl-9">{r.rationale}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
