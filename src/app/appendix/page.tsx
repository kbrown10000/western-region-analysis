'use client';

import Link from 'next/link';

export default function Appendix() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📎 Appendix</h1>
          <p className="text-slate-400">Data sources, methodology, and additional reference materials</p>
        </div>

        {/* Data Sources */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Data Sources</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="space-y-4">
              <div className="border-b border-slate-700 pb-4">
                <h3 className="text-cyan-400 font-bold mb-2">Internal Data (via Finance MCP)</h3>
                <ul className="text-slate-300 space-y-1 text-sm ml-4">
                  <li>• <span className="text-white">Customer Profitability</span> — 339 accounts with GAAP revenue, labor costs, GP%, hours</li>
                  <li>• <span className="text-white">Revenue Concentration</span> — HHI analysis, Gini coefficient, customer distribution</li>
                  <li>• <span className="text-white">Customer LTV</span> — 375 accounts with lifetime value and YoY trends</li>
                  <li>• <span className="text-white">Churn Signals</span> — 54 at-risk opportunities with flag types</li>
                  <li>• <span className="text-white">AR Aging</span> — Receivables by aging bucket with risk assessment</li>
                  <li>• <span className="text-white">Cash Position</span> — Working capital, liquidity ratios</li>
                </ul>
              </div>
              <div className="border-b border-slate-700 pb-4">
                <h3 className="text-cyan-400 font-bold mb-2">Sales MCP Data</h3>
                <ul className="text-slate-300 space-y-1 text-sm ml-4">
                  <li>• <span className="text-white">Win/Loss Analysis</span> — 2024-2025 deal outcomes, win rates, EGP</li>
                  <li>• <span className="text-white">Pipeline Summary</span> — Active opportunities by stage</li>
                  <li>• <span className="text-white">Stage Duration</span> — P25/50/75/90 days in each stage</li>
                </ul>
              </div>
              <div>
                <h3 className="text-cyan-400 font-bold mb-2">External Research</h3>
                <ul className="text-slate-300 space-y-1 text-sm ml-4">
                  <li>• <span className="text-white">Biotech Company Data</span> — Crunchbase, PitchBook, company websites</li>
                  <li>• <span className="text-white">Funding Rounds</span> — SEC filings, press releases, VC announcements</li>
                  <li>• <span className="text-white">Market Statistics</span> — JLL Life Sciences, CBRE, BIO industry reports</li>
                  <li>• <span className="text-white">Employment Data</span> — BLS, state labor departments</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔬 Methodology</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">Target Prioritization</h3>
              <p className="text-slate-300 text-sm mb-3">Companies scored on 5 factors (1-5 scale):</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• Funding level (recent rounds, total raised)</li>
                <li>• Development stage (clinical = higher)</li>
                <li>• Service fit (QA, validation, IT needs)</li>
                <li>• Growth trajectory (headcount, news)</li>
                <li>• Competitive landscape (existing vendors)</li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">Strategic ≥20 | High 15-19 | Medium 10-14 | Watch &lt;10</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">GP% Targets</h3>
              <p className="text-slate-300 text-sm mb-3">Margin tiers based on service mix:</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <span className="text-green-400">Elite (≥50%)</span> — Managed services, SaaS-like</li>
                <li>• <span className="text-cyan-400">A-Tier (40-50%)</span> — Healthy, target range</li>
                <li>• <span className="text-yellow-400">B-Tier (30-40%)</span> — Acceptable, room to improve</li>
                <li>• <span className="text-red-400">C-Tier (&lt;30%)</span> — Below target, action needed</li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">West average: 36.5% | East average: 51.5%</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">Churn Risk Scoring</h3>
              <p className="text-slate-300 text-sm mb-3">Opportunities flagged by signal type:</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• <span className="text-red-400">SameDayFlip</span> — Stage changed twice in 24h</li>
                <li>• <span className="text-red-400">Regression</span> — Moved backward in pipeline</li>
                <li>• <span className="text-yellow-400">Stalled</span> — No activity 30+ days</li>
                <li>• <span className="text-yellow-400">ChampionLoss</span> — Contact left company</li>
                <li>• <span className="text-orange-400">CompetitorMentioned</span> — Competitor in notes</li>
                <li>• <span className="text-orange-400">PriceNegotiation</span> — Pricing pushback</li>
              </ul>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">Revenue Concentration</h3>
              <p className="text-slate-300 text-sm mb-3">Measured via Herfindahl-Hirschman Index:</p>
              <ul className="text-slate-400 text-sm space-y-1">
                <li>• HHI = Σ(market share²) × 10,000</li>
                <li>• <span className="text-green-400">&lt;1,000</span> — Low concentration (healthy)</li>
                <li>• <span className="text-yellow-400">1,000-2,500</span> — Moderate concentration</li>
                <li>• <span className="text-red-400">&gt;2,500</span> — High concentration (risky)</li>
              </ul>
              <p className="text-slate-500 text-xs mt-3">USDM West HHI: 164 (very healthy)</p>
            </div>
          </div>
        </section>

        {/* Key Definitions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📖 Glossary</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
              <div>
                <p className="text-cyan-400 font-semibold">GP% (Gross Profit %)</p>
                <p className="text-slate-400">(Revenue - Direct Costs) / Revenue × 100</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">LTV (Lifetime Value)</p>
                <p className="text-slate-400">Total revenue from customer since inception</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">EGP (Expected Gross Profit)</p>
                <p className="text-slate-400">Forecasted GP based on deal size and mix</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">CBA (Consulting Business Area)</p>
                <p className="text-slate-400">USDM practice area / service line</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Managed Services</p>
                <p className="text-slate-400">Fixed-fee ongoing support contracts</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">Staffing CBA</p>
                <p className="text-slate-400">Time & materials contractor placement</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">DSO (Days Sales Outstanding)</p>
                <p className="text-slate-400">Average days to collect receivables</p>
              </div>
              <div>
                <p className="text-cyan-400 font-semibold">CAR-T</p>
                <p className="text-slate-400">Chimeric Antigen Receptor T-cell therapy</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📬 Report Information</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <p className="text-slate-400 mb-1">Report Generated</p>
                <p className="text-white">February 3, 2026</p>
              </div>
              <div>
                <p className="text-slate-400 mb-1">Data Current As Of</p>
                <p className="text-white">January 31, 2026</p>
              </div>
              <div>
                <p className="text-slate-400 mb-1">Analysis Period</p>
                <p className="text-white">FY 2024-2025</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-700">
              <p className="text-slate-400 text-sm">
                This analysis was generated using USDM internal data systems (Finance MCP, Sales MCP) combined with external market research. 
                Target company information sourced from public filings, press releases, and industry databases.
                For questions or updates, contact the Strategy & Analytics team.
              </p>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔗 Quick Links</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link href="/executive-summary" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
              <p className="text-cyan-400 font-semibold">Executive Summary</p>
            </Link>
            <Link href="/margin-analysis" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
              <p className="text-cyan-400 font-semibold">Margin Analysis</p>
            </Link>
            <Link href="/churn-signals" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
              <p className="text-cyan-400 font-semibold">Churn Signals</p>
            </Link>
            <Link href="/action-plan" className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 hover:border-cyan-500/50 transition-all text-center">
              <p className="text-cyan-400 font-semibold">Action Plan</p>
            </Link>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
