'use client';

import Link from 'next/link';

const executiveSummary = {
  assessment: 'Team capacity page has excellent seller-level detail but some data discrepancies between pages need resolution. The 5x win rate variance (Justin vs Mike) is the elephant in the room.',
  severity: 'MEDIUM',
};

const strengths = [
  'Seller-level pipeline and won data is granular and actionable',
  'Win rate by seller enables targeted coaching',
  'EGP shown alongside revenue - margin-aware view',
  'Clear coaching indicators (star/ok/coaching status)',
];

const criticalGaps = [
  {
    severity: 'HIGH',
    gap: 'Win Rate Data Inconsistency',
    detail: 'Team-capacity shows Justin at 60.9%, other pages show 74.8%. Mike shows 38.2% here vs 14.9% elsewhere. Data sources need reconciliation.',
    question: 'Which win rate numbers are correct?',
    recommendation: 'Standardize on single data source and time period',
  },
  {
    severity: 'HIGH',
    gap: 'No Coaching Plan for Underperformers',
    detail: 'Page identifies Mike, Marcus, Avani as "coaching" status but doesn\'t explain what coaching means or timeline.',
    question: 'What specific coaching interventions are planned?',
    recommendation: 'Add 90-day coaching plan for each flagged seller',
  },
  {
    severity: 'MEDIUM',
    gap: 'Partner Team Buried at Bottom',
    detail: 'Kim (7.5% win rate) and Meghan hidden in small section. Partner underperformance needs same visibility as direct sales.',
    question: 'Why isn\'t Kim\'s 7.5% flagged as a crisis?',
    recommendation: 'Move partner team to main view with same coaching flags',
  },
  {
    severity: 'MEDIUM',
    gap: 'No Quota vs Attainment',
    detail: 'Shows pipeline and won but not quota. Can\'t assess if sellers are on track.',
    question: 'Are sellers hitting quota?',
    recommendation: 'Add quota and % attainment column',
  },
];

const dataValidation = [
  { claim: 'Justin Ott: 60.9% win rate', mcpResult: 'Q4 2025 data shows 60.9%', status: 'VALIDATED' },
  { claim: 'Mike Campbell: 38.2% win rate', mcpResult: 'Q4 2025 shows 38.2%', status: 'VALIDATED - Different from other pages' },
  { claim: 'Kim Guihen: 7.5% win rate', mcpResult: 'Labor MCP confirms 7.5%', status: 'VALIDATED - CRITICAL' },
  { claim: 'Total pipeline by sellers', mcpResult: 'Matches MCP get_team_performance', status: 'VALIDATED' },
];

const recommendations = [
  { priority: 1, action: 'Reconcile win rate data across all pages', rationale: 'Credibility risk if board sees different numbers' },
  { priority: 2, action: 'Document specific coaching plans', rationale: '"Coaching needed" isn\'t actionable' },
  { priority: 3, action: 'Add quota attainment column', rationale: 'Pipeline doesn\'t matter if quota is missed' },
  { priority: 4, action: 'Elevate Kim Guihen analysis', rationale: '7.5% win rate is a business risk' },
];

export default function CritiqueTeamCapacity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: Team Capacity</h1>
          <div className="flex gap-3">
            <Link href="/team-capacity" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
            <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← All Critiques</Link>
          </div>
        </div>

        <section className="mb-8 bg-yellow-900/20 rounded-xl p-6 border border-yellow-700/50">
          <div className="flex items-start gap-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-yellow-900 text-yellow-300">{executiveSummary.severity}</span>
            <p className="text-slate-200 text-lg">{executiveSummary.assessment}</p>
          </div>
        </section>

        <section className="mb-8 bg-red-900/20 rounded-xl p-6 border border-red-700/50">
          <h2 className="text-xl font-bold text-red-400 mb-4">⚠️ Data Reconciliation Needed</h2>
          <p className="text-slate-300 mb-4">Different pages show different win rates for the same sellers. This MUST be fixed before board presentation.</p>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-white font-medium">Justin Ott</div>
              <div className="text-slate-400">Team Capacity: 60.9% | Other pages: 74.8%</div>
            </div>
            <div className="bg-slate-900/50 rounded p-3">
              <div className="text-white font-medium">Mike Campbell</div>
              <div className="text-slate-400">Team Capacity: 38.2% | Other pages: 14.9%</div>
            </div>
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
                    <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${d.status.includes('VALIDATED') && !d.status.includes('Different') && !d.status.includes('CRITICAL') ? 'bg-green-900/50 text-green-400' : d.status.includes('CRITICAL') ? 'bg-red-900/50 text-red-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{d.status}</span></td>
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
