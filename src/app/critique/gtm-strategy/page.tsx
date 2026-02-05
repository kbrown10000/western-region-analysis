'use client';

import Link from 'next/link';

const executiveSummary = {
  assessment: 'GTM pillars are well-structured with clear triggers and expansion paths. Main weakness is treating all 60+ targets equally without prioritization framework for resource allocation.',
  severity: 'MEDIUM',
};

const strengths = [
  '13 GTM pillars cover major life sciences compliance needs',
  'Trigger-based selling approach is customer-centric',
  'Entry point → expansion path is well defined',
  'Target account list is research-backed',
];

const criticalGaps = [
  {
    severity: 'MEDIUM',
    gap: 'No Target Prioritization',
    detail: '60+ targets treated equally. No scoring system to focus limited sales resources.',
    question: 'Which 10 targets should get most attention?',
    recommendation: 'Add target scoring: (market size × fit × timing × accessibility)',
  },
  {
    severity: 'MEDIUM',
    gap: 'Cloud Assurance → AI Leap Assumption',
    detail: 'Strategy assumes cloud customers will naturally expand to AI governance. No validation that existing customers want AI services.',
    question: 'Do current cloud customers actually need AI governance?',
    recommendation: 'Survey existing customers on AI plans',
  },
  {
    severity: 'LOW',
    gap: 'Competition Not Addressed',
    detail: 'No mention of Deloitte, Accenture, NNE, or other life sciences consultancies competing for same accounts.',
    question: 'Who else is pursuing these targets?',
    recommendation: 'Add competitive positioning per target',
  },
];

const dataValidation = [
  { claim: '60+ target accounts', mcpResult: '67 accounts in biotech-targets.json', status: 'VALIDATED' },
  { claim: 'Target TAM figures', mcpResult: 'Not validated against external data', status: 'UNVERIFIED' },
  { claim: 'Existing customer overlap', mcpResult: 'Some targets already customers (Kyverna, Resilience)', status: 'PARTIAL OVERLAP' },
];

const recommendations = [
  { priority: 1, action: 'Create target account scoring model', rationale: 'Focus limited resources on highest-probability targets' },
  { priority: 2, action: 'Survey cloud customers on AI needs', rationale: 'Validate the CA→AI expansion assumption' },
  { priority: 3, action: 'Add competitive intel per major target', rationale: 'Know who else is calling on key accounts' },
];

export default function CritiqueGTMStrategy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-900/20 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Critique: GTM Strategy</h1>
          <div className="flex gap-3">
            <Link href="/gtm-strategy" className="text-blue-400 hover:text-blue-300 text-sm">View Original →</Link>
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
            {strengths.map((s, i) => <li key={i} className="text-slate-300 flex items-start gap-2"><span className="text-green-400">•</span> {s}</li>)}
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🚨 Critical Gaps</h2>
          <div className="space-y-4">
            {criticalGaps.map((gap, i) => (
              <div key={i} className={`rounded-xl p-5 border ${gap.severity === 'HIGH' ? 'bg-red-900/20 border-red-700/50' : gap.severity === 'MEDIUM' ? 'bg-yellow-900/20 border-yellow-700/50' : 'bg-slate-800/50 border-slate-700'}`}>
                <div className="flex items-center gap-3 mb-2">
                  <span className={`px-2 py-0.5 rounded text-xs font-bold ${gap.severity === 'MEDIUM' ? 'bg-yellow-900 text-yellow-300' : 'bg-slate-700 text-slate-300'}`}>{gap.severity}</span>
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
                    <td className="p-3"><span className={`px-2 py-1 rounded text-xs ${d.status === 'VALIDATED' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'}`}>{d.status}</span></td>
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
