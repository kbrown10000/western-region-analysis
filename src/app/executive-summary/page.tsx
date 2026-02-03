'use client';

import Link from 'next/link';

export default function ExecutiveSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex gap-6">
            <Link href="/market-analysis" className="text-slate-400 hover:text-white">Market Analysis</Link>
            <Link href="/gtm-strategy" className="text-slate-400 hover:text-white">GTM Strategy</Link>
            <Link href="/targets" className="text-slate-400 hover:text-white">Targets</Link>
            <Link href="/action-plan" className="text-slate-400 hover:text-white">Action Plan</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-16">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-8">Executive Summary</h1>
        
        <div className="prose prose-invert prose-lg max-w-none">
          {/* Overview */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Strategic Overview</h2>
            <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700 mb-8">
              <p className="text-slate-300 leading-relaxed">
                The Western United States represents a <span className="text-cyan-400 font-semibold">$150+ billion life sciences market</span> with three distinct biotech clusters: San Francisco Bay Area, San Diego, and Seattle/Pacific Northwest. This report analyzes USDM Life Sciences' 2024-2025 customer performance and identifies strategic growth opportunities across 60+ early-stage biotech companies poised for rapid expansion.
              </p>
            </div>
          </section>

          {/* Key Findings */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Key Findings</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-red-900/30 rounded-xl p-6 border border-red-800/50">
                <h3 className="text-red-400 font-bold mb-3">⚠️ Critical: Win Rate Decline</h3>
                <p className="text-slate-300">Win rate dropped from <span className="font-bold">40.1% (2024)</span> to <span className="font-bold">35.6% (2025)</span> — a 4.5 percentage point decline requiring immediate analysis and corrective action.</p>
              </div>
              
              <div className="bg-green-900/30 rounded-xl p-6 border border-green-800/50">
                <h3 className="text-green-400 font-bold mb-3">✅ Positive: Deal Size Growth</h3>
                <p className="text-slate-300">Average won deal increased from <span className="font-bold">$86,708</span> to <span className="font-bold">$100,359</span> — a 15.7% increase indicating stronger value capture per engagement.</p>
              </div>
              
              <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-800/50">
                <h3 className="text-yellow-400 font-bold mb-3">📊 Pipeline Health Concerns</h3>
                <p className="text-slate-300">Churn signals show <span className="font-bold">SameDayFlip</span> and <span className="font-bold">Regression</span> patterns indicating deal volatility. 84 open deals worth $7.4M in current pipeline.</p>
              </div>
              
              <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-800/50">
                <h3 className="text-cyan-400 font-bold mb-3">🎯 Market Opportunity</h3>
                <p className="text-slate-300">Western biotech experiencing <span className="font-bold">$70B+</span> in recent funding. Cell therapy, AI drug discovery, and manufacturing scale-up are prime USDM service areas.</p>
              </div>
            </div>
          </section>

          {/* Performance Comparison */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">2024 vs 2025 Performance</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-4 px-4 text-slate-400 font-semibold">Metric</th>
                    <th className="py-4 px-4 text-slate-400 font-semibold">2024</th>
                    <th className="py-4 px-4 text-slate-400 font-semibold">2025</th>
                    <th className="py-4 px-4 text-slate-400 font-semibold">Change</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Total Deals</td>
                    <td className="py-4 px-4">1,751</td>
                    <td className="py-4 px-4">1,392</td>
                    <td className="py-4 px-4 text-red-400">-20.5%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Won Deals</td>
                    <td className="py-4 px-4">702</td>
                    <td className="py-4 px-4">495</td>
                    <td className="py-4 px-4 text-red-400">-29.5%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Win Rate</td>
                    <td className="py-4 px-4">40.1%</td>
                    <td className="py-4 px-4">35.6%</td>
                    <td className="py-4 px-4 text-red-400">-4.5 pts</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Total Won Revenue</td>
                    <td className="py-4 px-4">$60.87M</td>
                    <td className="py-4 px-4">$49.68M</td>
                    <td className="py-4 px-4 text-red-400">-18.4%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Won EGP</td>
                    <td className="py-4 px-4">$25.65M</td>
                    <td className="py-4 px-4">$21.80M</td>
                    <td className="py-4 px-4 text-red-400">-15.0%</td>
                  </tr>
                  <tr className="border-b border-slate-800">
                    <td className="py-4 px-4 font-medium">Avg Won Deal</td>
                    <td className="py-4 px-4">$86,708</td>
                    <td className="py-4 px-4">$100,359</td>
                    <td className="py-4 px-4 text-green-400">+15.7%</td>
                  </tr>
                  <tr>
                    <td className="py-4 px-4 font-medium">Avg Won Deal EGP</td>
                    <td className="py-4 px-4">$36,540</td>
                    <td className="py-4 px-4">$44,039</td>
                    <td className="py-4 px-4 text-green-400">+20.5%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Regional Opportunities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Regional Market Opportunities</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">🌉 San Francisco Bay Area</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <span className="font-semibold">250+ biotech companies</span> with 12M sq ft dedicated space</li>
                  <li>• AI drug discovery boom — 52% of startup funding in AI</li>
                  <li>• Key targets: Atomwise, Anagenex, Deep Genomics, Cellares</li>
                  <li>• Strong UCSF/Stanford research pipeline</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">🌴 San Diego</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <span className="font-semibold">$56B economic output</span> from ~2,000 life science companies</li>
                  <li>• Manufacturing and CRDMO growth center</li>
                  <li>• Key targets: National Resilience ($2B), Capstan ($165M), Aspen Neuro</li>
                  <li>• Scripps Research / Salk Institute ecosystem</li>
                </ul>
              </div>
              
              <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <h3 className="text-xl font-bold text-white mb-3">🌲 Seattle / Pacific Northwest</h3>
                <ul className="space-y-2 text-slate-300">
                  <li>• <span className="font-semibold">24% employment growth</span> in biotech over 5 years</li>
                  <li>• In vivo cell therapy innovation hub</li>
                  <li>• Key targets: Tune Therapeutics ($175M), Outpace Bio ($144M), Umoja ($100M)</li>
                  <li>• UW Institute for Protein Design (Nobel Prize 2024)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Strategic Priorities */}
          <section className="mb-16">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Strategic Priorities for 2026</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <span className="text-3xl font-bold text-cyan-400">1</span>
                <div>
                  <h3 className="text-lg font-bold text-white">Diagnose & Reverse Win Rate Decline</h3>
                  <p className="text-slate-400">Conduct win/loss analysis, identify competitive gaps, and strengthen value proposition. Target return to 40%+ win rate by Q3 2026.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <span className="text-3xl font-bold text-cyan-400">2</span>
                <div>
                  <h3 className="text-lg font-bold text-white">Penetrate Cell Therapy Manufacturing</h3>
                  <p className="text-slate-400">12+ funded cell therapy companies need GxP support. Position for manufacturing scale-up, quality systems, and regulatory affairs.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <span className="text-3xl font-bold text-cyan-400">3</span>
                <div>
                  <h3 className="text-lg font-bold text-white">Expand Seattle Market Presence</h3>
                  <p className="text-slate-400">Under-penetrated market with fastest growth. Establish local relationships with Tune, Outpace, Umoja, Aurion.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <span className="text-3xl font-bold text-cyan-400">4</span>
                <div>
                  <h3 className="text-lg font-bold text-white">Develop AI/Data Services Offering</h3>
                  <p className="text-slate-400">AI drug discovery companies generating massive datasets. Build data management, compliance, and analytics service line.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">Recommended Next Steps</h2>
            
            <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-xl p-8 border border-cyan-800/50">
              <ol className="space-y-4 text-slate-300">
                <li className="flex items-start gap-3">
                  <span className="bg-cyan-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">1</span>
                  <span>Schedule sales team win/loss review session within 2 weeks</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-cyan-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">2</span>
                  <span>Identify top 10 priority target accounts from this report for immediate outreach</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-cyan-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">3</span>
                  <span>Plan Seattle market development trip in Q1 2026</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-cyan-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">4</span>
                  <span>Develop cell therapy manufacturing service package</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="bg-cyan-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">5</span>
                  <span>Review competitive positioning against key regional competitors</span>
                </li>
              </ol>
            </div>
          </section>
        </div>

        <div className="mt-16 flex gap-4">
          <Link href="/market-analysis" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Continue to Market Analysis →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
