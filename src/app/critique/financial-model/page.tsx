'use client';

import Link from 'next/link';

const executiveSummary = {
  assessment: 'Financial model has good structure but the growth assumptions are aggressive. 118% utilization baseline suggests the team is already maxed out - growth requires hiring that isn\'t modeled.',
  severity: 'HIGH',
};

const strengths = [
  'Clear flow: Labor → Bookings → GP → Revenue',
  'Interactive sliders allow scenario modeling',
  'Uses real baseline data from MCP',
  'Acknowledges capacity constraints',
];

const criticalGaps = [
  {
    severity: 'HIGH',
    gap: 'Growth Without Hiring Plan',
    detail: 'Model shows 15-20% growth targets but team is at 118% utilization. Growth requires hiring, but hiring costs aren\'t in the model.',
    question: 'How many new hires needed to support growth? What\'s the ramp cost?',
    recommendation: 'Add hiring plan with ramp time and cost to the model',
  },
  {
    severity: 'HIGH',
    gap: 'Win Rate Assumption Too Optimistic',
    detail: 'Model assumes stable 41.6% win rate. But expansion win rate is declining (35.6%) and Mike Campbell is at 14.9%.',
    question: 'What if win rate drops to 35%?',
    recommendation: 'Add win rate sensitivity analysis',
  },
  {
    severity: 'MEDIUM',
    gap: 'No Downside Scenario',
    detail: 'Model only shows base and upside. No recession/downturn scenario where biotech funding tightens.',
    question: 'What happens if biotech funding falls 30%?',
    recommendation: 'Add downside scenario with trigger indicators',
  },
  {
    severity: 'MEDIUM',
    gap: 'GP Erosion Risk Not Modeled',
    detail: 'If margin pressure continues (Gilead, Amgen at 20%), blended GP could drop. Model assumes stable GP.',
    question: 'What if GP drops from 43% to 35%?',
    recommendation: 'Add GP sensitivity slider',
  },
];

const dataValidation = [
  { claim: 'Utilization: 118%', mcpResult: 'Labor MCP shows 118.4%', status: 'VALIDATED - CONCERNING' },
  { claim: 'Pipeline: $54.8M', mcpResult: '$54.8M company-wide', status: 'VALIDATED' },
  { claim: 'Win rate: 41.6%', mcpResult: '41.6% overall', status: 'VALIDATED' },
  { claim: 'Delivery resources: 680', mcpResult: '680 in gold_department_metrics', status: 'VALIDATED' },
];

const recommendations = [
  { priority: 1, action: 'Add hiring cost/ramp to model', rationale: 'Growth requires capacity, capacity requires hiring' },
  { priority: 2, action: 'Add win rate sensitivity (-10pts)', rationale: 'Show impact if expansion continues to struggle' },
  { priority: 3, action: 'Add downside scenario', rationale: 'Board needs to see risk bounds' },
  { priority: 4, action: 'Add GP sensitivity slider', rationale: 'Margin pressure is a known risk' },
];

export default function CritiqueFinancialModel() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: Financial Model</h1>
          <div className="flex gap-3">
            <Link href="/financial-model" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
            <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← All Critiques</Link>
          </div>
        </div>

        <section className="mb-8 bg-red-900/30 rounded-xl p-6 border border-red-700/50">
          <div className="flex items-start gap-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-red-900 text-red-300">{executiveSummary.severity}</span>
            <p className="text-slate-200 text-lg">{executiveSummary.assessment}</p>
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4">✅ What&apos;s Strong</h2>
          <ul className="space-y-2">
            {strengths.map((s, i) => <li key={i} className="text-slate-300 flex items-start gap-2"><span className="text-green-400">•</span> {s}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🚨 Critical Gaps</h2>
          <div className="space-y-4">
            {criticalGaps.map((gap, i) => (
              <div key={i} className={`rounded-xl p-5 border ${gap.severity === 'HIGH' ? 'bg-red-900/20 border-red-700/50' : 'bg-yellow-900/20 border-yellow-700/50'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${gap.severity === 'HIGH' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>{gap.severity}</span>
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
              <thead><tr className="border-b border-slate-700"><th className="text-left p-3 text-slate-400 text-sm">Claim</th><th className="text-left p-3 text-slate-400 text-sm">Result</th><th className="text-left p-3 text-slate-400 text-sm">Status</th></tr></thead>
              <tbody>
                {dataValidation.map((d, i) => (
                  <tr key={i} className="border-b border-slate-700/50">
                    <td className="p-3 text-white text-sm">{d.claim}</td>
                    <td className="p-3 text-slate-300 text-sm">{d.mcpResult}</td>
                    <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${d.status.includes('VALIDATED') ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{d.status}</span></td>
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
                <div className="flex items-center gap-3"><span className="w-6 h-6 rounded-full bg-purple-900 text-purple-300 text-sm flex items-center justify-center font-bold">{r.priority}</span><span className="text-white font-medium">{r.action}</span></div>
                <p className="text-slate-400 text-sm pl-9">{r.rationale}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
