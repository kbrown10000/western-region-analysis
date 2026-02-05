'use client';

import Link from 'next/link';

/**
 * PARTNER OVERVIEW - HUB PAGE
 * 
 * Research Sources:
 * - 2025 B2B GTM Benchmarks (The Digital Bloom, Kyle Poyar, ICONIQ Capital)
 * - Partner2B: 13 B2B Trends Driving Ecosystem Growth 2025
 * - Ebsta 2024 B2B Sales Benchmark Report
 * - Forrester Partner Ecosystem Research
 * - Dreamdata B2B Benchmarks
 * 
 * Internal Sources:
 * - Labor MCP: get_solutions_team_roster
 * - Sales MCP: get_team_performance, get_win_rate_matrix
 * 
 * Last Updated: 2026-02-04
 */

// Industry benchmark data from research
const industryBenchmarks = {
  partnerRevenue2024: 18, // 18-20% in 2024
  partnerRevenue2025: 28, // 26-28% in 2025
  topPerformerPartnerRevenue: 58, // 58% for top performers
  partnerDealAOVLift: 40, // 40% higher AOV
  partnerCloseRateLift: 53, // 53% more likely to close
  partnerConversionSpeedLift: 46, // 46% faster conversion
  partnerCACSavings: 72, // 72% report lower CAC
  coSellObjectionHandling: 843, // 843% more likely to overcome objections
  coMarketingAttendanceLift: 53, // 53% higher webinar attendance
};

// USDM current state
const usdmPartnerState = {
  currentPartnerRevenue: 1.1, // ~1.1% of pipeline
  targetPartnerRevenue: 10, // 10% goal for 2026
  gap: 8.9,
  pipelineValue: 606400,
  directPipeline: 54800000,
  teamSize: 2,
  avgWinRate: 22.5,
  companyWinRate: 41.6,
};

// Partner section links
const partnerSections = [
  {
    title: 'Partner Plays',
    href: '/partner-plays',
    description: 'Joint solution plays, co-sell motions, and deal origination strategies',
    icon: '🎯',
    highlight: 'NEW',
  },
  {
    title: 'Technology Ecosystem',
    href: '/partner-ecosystem',
    description: 'AWS, Azure, Veeva, and strategic technology partnerships',
    icon: '☁️',
    highlight: null,
  },
  {
    title: 'Solutions Alignment',
    href: '/partner-solutions',
    description: 'How solutions team enables partner success and deal acceleration',
    icon: '🔧',
    highlight: 'CRITICAL',
  },
  {
    title: 'Partner Metrics',
    href: '/partner-strategy',
    description: 'Current performance, team analysis, and gap assessment',
    icon: '📊',
    highlight: null,
  },
  {
    title: 'Western Partner Plan',
    href: '/partner-west',
    description: 'Territory-specific partner strategy for West region',
    icon: '🗺️',
    highlight: null,
  },
];

// Why partners matter - the business case
const partnerValueDrivers = [
  {
    metric: '40% Higher Deal Value',
    description: 'Partner-sourced deals average 40% higher AOV than direct',
    source: 'Ebsta 2024 B2B Sales Benchmark',
    icon: '💰',
  },
  {
    metric: '53% Better Close Rates',
    description: 'Warm introductions from trusted partners dramatically increase win probability',
    source: 'Partner2B Industry Research',
    icon: '✅',
  },
  {
    metric: '46% Faster Cycles',
    description: 'Partner pre-qualification reduces discovery and validation time',
    source: 'Partner2B Industry Research',
    icon: '⚡',
  },
  {
    metric: '72% Lower CAC',
    description: 'Leveraging partner networks reduces customer acquisition costs',
    source: 'Forrester Partner Ecosystem Study',
    icon: '📉',
  },
  {
    metric: '843% Objection Handling',
    description: 'Co-selling partners help overcome buyer objections 8.4x more effectively',
    source: 'Forrester Research',
    icon: '🛡️',
  },
  {
    metric: 'New Logo Access',
    description: 'Partners provide credibility and introductions to accounts you cannot reach directly',
    source: 'Industry Best Practice',
    icon: '🚪',
  },
];

// Current gap analysis
const gapAnalysis = [
  {
    dimension: 'Pipeline Share',
    current: '1.1%',
    benchmark: '28%',
    topPerformer: '58%',
    gap: 'CRITICAL',
  },
  {
    dimension: 'Win Rate',
    current: '22.5%',
    benchmark: '41.6%',
    topPerformer: '53%+',
    gap: 'HIGH',
  },
  {
    dimension: 'Team Size',
    current: '2',
    benchmark: '4-6',
    topPerformer: '8-12',
    gap: 'HIGH',
  },
  {
    dimension: 'Deal Size',
    current: '$29K',
    benchmark: '$127K',
    topPerformer: '$180K+',
    gap: 'HIGH',
  },
  {
    dimension: 'Active Partners',
    current: '3-5',
    benchmark: '15-20',
    topPerformer: '50+',
    gap: 'MEDIUM',
  },
];

export default function PartnerOverview() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Partner-Led Growth</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back</Link>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl text-lg">
          The partner-led revolution is here. <span className="text-purple-400 font-semibold">58% of top-performing B2B revenue</span> now comes through partners.
          USDM is at <span className="text-red-400 font-semibold">1.1%</span>.
        </p>
        <p className="text-slate-400 mb-12 max-w-3xl">
          This section outlines our strategy to build a world-class partner channel that drives revenue, opens new logos, 
          and strengthens our market position in the Western region.
        </p>

        {/* Industry Benchmark Hero */}
        <section className="mb-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-2xl p-8 border border-purple-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">📈 The Partner-Led Revolution (2025 Industry Data)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">{industryBenchmarks.partnerRevenue2024}%</div>
              <div className="text-slate-400 text-sm">Partner Revenue (2024)</div>
            </div>
            <div className="text-center relative">
              <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 text-green-400 text-xs">↑ 10pts</div>
              <div className="text-4xl font-bold text-green-400">{industryBenchmarks.partnerRevenue2025}%</div>
              <div className="text-slate-400 text-sm">Partner Revenue (2025)</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-400">{industryBenchmarks.topPerformerPartnerRevenue}%</div>
              <div className="text-slate-400 text-sm">Top Performers</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-400">{usdmPartnerState.currentPartnerRevenue}%</div>
              <div className="text-slate-400 text-sm">USDM Today</div>
            </div>
          </div>
          <div className="mt-6 text-center text-slate-400 text-sm">
            Source: 2025 B2B GTM Benchmarks (Kyle Poyar/Growth Unhinged, ICONIQ Capital, Dreamdata) - 195 software companies
          </div>
        </section>

        {/* Section Navigation */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🧭 Partner Strategy Sections</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {partnerSections.map((section, idx) => (
              <Link key={idx} href={section.href} className="group">
                <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all hover:shadow-lg hover:shadow-purple-500/20 h-full">
                  <div className="flex items-start justify-between mb-2">
                    <span className="text-3xl">{section.icon}</span>
                    {section.highlight && (
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        section.highlight === 'NEW' ? 'bg-green-900 text-green-300' :
                        section.highlight === 'CRITICAL' ? 'bg-red-900 text-red-300' :
                        'bg-blue-900 text-blue-300'
                      }`}>
                        {section.highlight}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">{section.title}</h3>
                  <p className="text-slate-400 text-sm mt-2">{section.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Partners Matter */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 Why Partners Matter: The Business Case</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {partnerValueDrivers.map((driver, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-2xl">{driver.icon}</span>
                  <span className="text-lg font-bold text-white">{driver.metric}</span>
                </div>
                <p className="text-slate-300 text-sm mb-2">{driver.description}</p>
                <p className="text-slate-500 text-xs">Source: {driver.source}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Gap Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 USDM Gap Analysis vs. Industry</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-400">Dimension</th>
                  <th className="text-center p-4 text-red-400">USDM Today</th>
                  <th className="text-center p-4 text-yellow-400">Industry Avg</th>
                  <th className="text-center p-4 text-green-400">Top Performers</th>
                  <th className="text-center p-4 text-slate-400">Gap Level</th>
                </tr>
              </thead>
              <tbody>
                {gapAnalysis.map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50">
                    <td className="p-4 text-white font-medium">{row.dimension}</td>
                    <td className="p-4 text-center text-red-400 font-bold">{row.current}</td>
                    <td className="p-4 text-center text-yellow-400">{row.benchmark}</td>
                    <td className="p-4 text-center text-green-400">{row.topPerformer}</td>
                    <td className="p-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        row.gap === 'CRITICAL' ? 'bg-red-900 text-red-300' :
                        row.gap === 'HIGH' ? 'bg-orange-900 text-orange-300' :
                        'bg-yellow-900 text-yellow-300'
                      }`}>
                        {row.gap}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* The Opportunity */}
        <section className="mb-12 bg-gradient-to-r from-green-900/30 to-blue-900/30 rounded-xl p-8 border border-green-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">🚀 The Opportunity: Western Region Partner-Led Growth</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">What Success Looks Like (2026)</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>10% of West pipeline</strong> ($6M+) from partner-sourced deals</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Partner win rate at 45%+</strong> (above company average)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>Cascadia market entry</strong> via partner channel (zero direct today)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>5+ active technology partnerships</strong> (AWS, Azure, Veeva, etc.)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">✓</span>
                  <span><strong>New logo acceleration</strong> through VC/PE portfolio referrals</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-blue-400 mb-3">Investment Required</h3>
              <div className="space-y-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Team Expansion</span>
                    <span className="text-yellow-400 font-bold">1-2 FTE</span>
                  </div>
                  <div className="text-slate-500 text-sm">Partner Development Manager (West)</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Partner Program</span>
                    <span className="text-yellow-400 font-bold">$200K/year</span>
                  </div>
                  <div className="text-slate-500 text-sm">Portal, enablement, co-marketing, events</div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Expected ROI</span>
                    <span className="text-green-400 font-bold">15-20x</span>
                  </div>
                  <div className="text-slate-500 text-sm">$300K investment → $5M+ pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link href="/partner-plays" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors">
              Explore Partner Plays →
            </Link>
            <Link href="/partner-ecosystem" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Technology Partners →
            </Link>
            <Link href="/partner-solutions" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Solutions Alignment →
            </Link>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mt-12 bg-slate-900/50 rounded-xl p-6 border border-slate-600">
          <h3 className="text-sm font-bold text-slate-400 mb-3">📋 Research Sources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <ul className="space-y-1">
              <li>• 2025 B2B GTM Benchmarks (Digital Bloom, Kyle Poyar, Maja Voje) - 195 companies</li>
              <li>• ICONIQ Capital State of GTM 2025</li>
              <li>• Dreamdata B2B Benchmarks</li>
            </ul>
            <ul className="space-y-1">
              <li>• Partner2B: 13 B2B Trends Driving Ecosystem Growth 2025</li>
              <li>• Ebsta 2024 B2B Sales Benchmark Report</li>
              <li>• Forrester Partner Ecosystem/Channel Marketing Study 2024</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
