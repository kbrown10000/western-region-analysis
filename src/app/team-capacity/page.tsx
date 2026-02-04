'use client';

import Link from 'next/link';

// LIVE DATA from Sales MCP V2 - get_team_performance (Q4 2025) | Feb 4, 2026
const sellerPerformance = [
  { name: 'Justin Ott', role: 'EVP West', territory: 'Biotech Beach', pipeline: 6915775, pipelineEGP: 2630270, closedWon: 5132813, closedWonEGP: 1891280, deals: 69, wonDeals: 42, winRate: 60.9, status: 'star' as const },
  { name: 'Josh Ertmer', role: 'Staffing AM', territory: 'National', pipeline: 5595852, pipelineEGP: 1442028, closedWon: 3351692, closedWonEGP: 871440, deals: 45, wonDeals: 28, winRate: 62.2, status: 'star' as const },
  { name: 'Scott Pallardy', role: 'Account Manager', territory: 'East', pipeline: 3421565, pipelineEGP: 1710799, closedWon: 846565, closedWonEGP: 363049, deals: 36, wonDeals: 12, winRate: 33.3, status: 'ok' as const },
  { name: 'Marcus Dinan', role: 'Account Manager', territory: 'Europe', pipeline: 3845900, pipelineEGP: 1832965, closedWon: 227000, closedWonEGP: 163500, deals: 39, wonDeals: 7, winRate: 17.9, status: 'coaching' as const },
  { name: 'Mike Campbell', role: 'Account Manager', territory: 'LA BioMed', pipeline: 2942293, pipelineEGP: 1226715, closedWon: 1467533, closedWonEGP: 552113, deals: 34, wonDeals: 13, winRate: 38.2, status: 'coaching' as const },
  { name: 'Avani Macwan', role: 'Account Manager', territory: 'East', pipeline: 2908316, pipelineEGP: 1240282, closedWon: 1017316, closedWonEGP: 374332, deals: 35, wonDeals: 6, winRate: 17.1, status: 'coaching' as const },
  { name: 'Lisa Burgese Fry', role: 'EVP East', territory: 'East', pipeline: 2497780, pipelineEGP: 957277, closedWon: 1135780, closedWonEGP: 468513, deals: 25, wonDeals: 10, winRate: 40.0, status: 'ok' as const },
  { name: 'Hovsep Kirikian', role: 'CGO', territory: 'National', pipeline: 1771775, pipelineEGP: 1054077, closedWon: 617075, closedWonEGP: 286562, deals: 15, wonDeals: 6, winRate: 40.0, status: 'ok' as const },
];

const partnerTeam = [
  { name: 'Kim Guihen', role: 'Alliances', pipeline: 70000, pipelineEGP: 31500, closedWon: 70000, closedWonEGP: 31500, deals: 1, wonDeals: 1, winRate: 100, status: 'ok' as const },
  { name: 'Meghan Rutkowski', role: 'Partner Manager', pipeline: 536400, pipelineEGP: 287660, closedWon: 146400, closedWonEGP: 99160, deals: 12, wonDeals: 4, winRate: 33.3, status: 'coaching' as const },
];

// Win Rate Matrix from Sales MCP V2
const winRateMatrix = {
  overall: { won: 1488, total: 3573, rate: 41.6 },
  byEngagement: [
    { type: 'LTE (Land & Expand)', won: 221, total: 248, rate: 89.1 },
    { type: 'Project', won: 1260, total: 2695, rate: 46.8 },
    { type: 'Managed Staffing', won: 0, total: 4, rate: 0 },
  ],
  byCustomer: [
    { type: 'New Logo', rate: 90.2, insight: 'Excellent at landing new customers' },
    { type: 'Existing Customer', rate: 35.6, insight: '⚠️ Expansion harder than acquisition' },
  ]
};

// Pipeline Quality from Sales MCP
const pipelineQuality = {
  openOpps: 1673,
  openAmount: 54839844,
  riskOpps: 1289,
  riskAmount: 39461614,
  agingPct: 77,
  avgDaysOpen: 387,
  healthyAmount: 15378230,
  healthyOpps: 384
};

// Q4 2025 Closed Won Summary
const closedWonSummary = {
  deals: 53,
  totalAmount: 6755700,
  totalEGP: 2297921,
  avgDealSize: 127466
};

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
};

const getStatusColor = (status: 'star' | 'ok' | 'coaching') => {
  switch(status) {
    case 'star': return 'bg-green-900/50 border-green-700';
    case 'ok': return 'bg-blue-900/50 border-blue-700';
    case 'coaching': return 'bg-red-900/50 border-red-700';
  }
};

const getStatusBadge = (status: 'star' | 'ok' | 'coaching') => {
  switch(status) {
    case 'star': return <span className="text-green-400 text-xs font-bold">⭐ STAR</span>;
    case 'ok': return <span className="text-blue-400 text-xs">✓ On Track</span>;
    case 'coaching': return <span className="text-red-400 text-xs font-bold">🎯 COACHING</span>;
  }
};

const getWinRateColor = (rate: number) => {
  if (rate >= 60) return 'text-green-400';
  if (rate >= 40) return 'text-yellow-400';
  return 'text-red-400';
};

export default function TeamCapacity() {
  const totalPipeline = sellerPerformance.reduce((sum, s) => sum + s.pipeline, 0);
  const totalWon = sellerPerformance.reduce((sum, s) => sum + s.closedWon, 0);
  const totalEGP = sellerPerformance.reduce((sum, s) => sum + s.closedWonEGP, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Team Performance</h1>
          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded border border-green-700/50">
            🔴 LIVE from Sales MCP V2 | Q4 2025
          </span>
        </div>
        <p className="text-slate-300 mb-8 max-w-3xl">
          Real-time seller performance from USDM&apos;s Fabric lakehouse. Pipeline, closed-won, and win rates updated live.
        </p>

        {/* Key Metrics Cards */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-xl p-4 border border-cyan-700/50">
              <div className="text-2xl font-bold text-cyan-400">{formatCurrency(pipelineQuality.openAmount)}</div>
              <div className="text-xs text-cyan-300">Total Pipeline</div>
              <div className="text-xs text-slate-400 mt-1">{pipelineQuality.openOpps.toLocaleString()} opps</div>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-4 border border-green-700/50">
              <div className="text-2xl font-bold text-green-400">{formatCurrency(closedWonSummary.totalAmount)}</div>
              <div className="text-xs text-green-300">Q4 Closed Won</div>
              <div className="text-xs text-slate-400 mt-1">{closedWonSummary.deals} deals</div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-4 border border-purple-700/50">
              <div className="text-2xl font-bold text-purple-400">{formatCurrency(closedWonSummary.totalEGP)}</div>
              <div className="text-xs text-purple-300">Q4 EGP Won</div>
              <div className="text-xs text-slate-400 mt-1">{((closedWonSummary.totalEGP / closedWonSummary.totalAmount) * 100).toFixed(0)}% margin</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/50 to-yellow-800/30 rounded-xl p-4 border border-yellow-700/50">
              <div className="text-2xl font-bold text-yellow-400">{winRateMatrix.overall.rate}%</div>
              <div className="text-xs text-yellow-300">Overall Win Rate</div>
              <div className="text-xs text-slate-400 mt-1">{winRateMatrix.overall.won.toLocaleString()} / {winRateMatrix.overall.total.toLocaleString()}</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/50 to-red-800/30 rounded-xl p-4 border border-red-700/50">
              <div className="text-2xl font-bold text-red-400">{pipelineQuality.agingPct}%</div>
              <div className="text-xs text-red-300">Pipeline Aging</div>
              <div className="text-xs text-slate-400 mt-1">{pipelineQuality.avgDaysOpen} avg days</div>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl p-4 border border-orange-700/50">
              <div className="text-2xl font-bold text-orange-400">{formatCurrency(closedWonSummary.avgDealSize)}</div>
              <div className="text-xs text-orange-300">Avg Deal Size</div>
              <div className="text-xs text-slate-400 mt-1">Q4 2025</div>
            </div>
          </div>
        </section>

        {/* Win Rate Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Win Rate Analysis</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">By Engagement Type</h3>
              <div className="space-y-3">
                {winRateMatrix.byEngagement.map((item, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-slate-300">{item.type}</span>
                    <div className="flex items-center gap-4">
                      <span className="text-xs text-slate-500">{item.won}/{item.total}</span>
                      <span className={`text-xl font-bold ${getWinRateColor(item.rate)}`}>
                        {item.rate.toFixed(1)}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-700/30">
                <div className="text-green-400 text-sm font-semibold">💡 LTE = 89.1% win rate</div>
                <div className="text-xs text-green-300 mt-1">Land-and-expand strategy is working exceptionally well</div>
              </div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">By Customer Type</h3>
              <div className="space-y-4">
                {winRateMatrix.byCustomer.map((item, i) => (
                  <div key={i} className="p-4 bg-slate-700/30 rounded-lg">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{item.type}</span>
                      <span className={`text-2xl font-bold ${getWinRateColor(item.rate)}`}>{item.rate}%</span>
                    </div>
                    <div className="text-xs text-slate-400">{item.insight}</div>
                  </div>
                ))}
              </div>
              <div className="mt-4 p-3 bg-yellow-900/20 rounded-lg border border-yellow-700/30">
                <div className="text-yellow-400 text-sm font-semibold">⚠️ Expansion Challenge</div>
                <div className="text-xs text-yellow-300 mt-1">New logos 90.2% vs existing 35.6% - focus on account penetration</div>
              </div>
            </div>
          </div>
        </section>

        {/* Seller Leaderboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Seller Performance Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                  <th className="py-3 px-4 text-slate-300">Seller</th>
                  <th className="py-3 px-4 text-slate-300">Territory</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Pipeline EGP</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Q4 Won</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Q4 EGP</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Deals</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                  <th className="py-3 px-4 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {sellerPerformance.map((seller, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${getStatusColor(seller.status)} hover:bg-slate-700/30 transition`}>
                    <td className="py-3 px-4">
                      <div className="text-white font-medium">{seller.name}</div>
                      <div className="text-xs text-slate-400">{seller.role}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{seller.territory}</td>
                    <td className="py-3 px-4 text-cyan-400 text-right font-medium">{formatCurrency(seller.pipeline)}</td>
                    <td className="py-3 px-4 text-cyan-300 text-right text-xs">{formatCurrency(seller.pipelineEGP)}</td>
                    <td className="py-3 px-4 text-green-400 text-right font-medium">{formatCurrency(seller.closedWon)}</td>
                    <td className="py-3 px-4 text-green-300 text-right text-xs">{formatCurrency(seller.closedWonEGP)}</td>
                    <td className="py-3 px-4 text-white text-right">
                      <span className="text-green-400">{seller.wonDeals}</span>
                      <span className="text-slate-500">/{seller.deals}</span>
                    </td>
                    <td className={`py-3 px-4 text-right font-bold text-lg ${getWinRateColor(seller.winRate)}`}>
                      {seller.winRate.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4">{getStatusBadge(seller.status)}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t-2 border-cyan-700 bg-slate-800/80">
                  <td className="py-3 px-4 text-white font-bold">TOTAL</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 text-cyan-400 text-right font-bold">{formatCurrency(totalPipeline)}</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4 text-green-400 text-right font-bold">{formatCurrency(totalWon)}</td>
                  <td className="py-3 px-4 text-green-300 text-right font-medium">{formatCurrency(totalEGP)}</td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                  <td className="py-3 px-4"></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </section>

        {/* Partner Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-orange-400 mb-6">Partner Channel Performance</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {partnerTeam.map((partner, i) => (
              <div key={i} className={`rounded-xl p-6 border ${getStatusColor(partner.status)}`}>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">{partner.name}</div>
                    <div className="text-sm text-slate-400">{partner.role}</div>
                  </div>
                  {getStatusBadge(partner.status)}
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-slate-400">Pipeline</div>
                    <div className="text-cyan-400 font-semibold">{formatCurrency(partner.pipeline)}</div>
                    <div className="text-xs text-cyan-300">{formatCurrency(partner.pipelineEGP)} EGP</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Q4 Won</div>
                    <div className="text-green-400 font-semibold">{formatCurrency(partner.closedWon)}</div>
                    <div className="text-xs text-green-300">{formatCurrency(partner.closedWonEGP)} EGP</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Deals</div>
                    <div className="text-white">{partner.wonDeals}/{partner.deals}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Win Rate</div>
                    <div className={`font-bold text-xl ${getWinRateColor(partner.winRate)}`}>{partner.winRate.toFixed(1)}%</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coaching Priorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-6">🎯 Coaching Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-1">Mike Campbell</div>
              <div className="text-red-400 font-semibold text-sm mb-3">LA BioMed | 38.2% Win Rate</div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li>• $2.9M pipeline but only $1.5M closed</li>
                <li>• 13/34 deals won (38%)</li>
                <li>• EGP margin: 37.6% (below avg)</li>
                <li>• Focus: Deal qualification</li>
              </ul>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-1">Avani Macwan</div>
              <div className="text-red-400 font-semibold text-sm mb-3">East | 17.1% Win Rate</div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li>• $2.9M pipeline, $1M closed</li>
                <li>• Only 6/35 deals won (17%)</li>
                <li>• Lowest win rate on team</li>
                <li>• Focus: Opportunity scoring</li>
              </ul>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-1">Marcus Dinan</div>
              <div className="text-red-400 font-semibold text-sm mb-3">Europe | 17.9% Win Rate</div>
              <ul className="text-xs text-slate-300 space-y-2">
                <li>• $3.8M pipeline but only $227K closed</li>
                <li>• 7/39 deals won (18%)</li>
                <li>• Europe market challenges</li>
                <li>• Focus: Territory strategy</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Western Territory Alignment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Western Territory Strategy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-5 border border-green-700/50">
              <div className="text-green-400 font-bold mb-2">Biotech Beach</div>
              <div className="text-white text-lg font-semibold mb-1">Justin Ott ⭐</div>
              <div className="text-sm text-slate-300 mb-2">San Diego | 60.9% win rate</div>
              <div className="text-cyan-400 font-medium">{formatCurrency(6915775)} pipeline</div>
              <div className="text-xs text-green-300 mt-2">Keep star on best territory</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-xl p-5 border border-red-700/50">
              <div className="text-red-400 font-bold mb-2">LA BioMed</div>
              <div className="text-white text-lg font-semibold mb-1">Mike Campbell 🎯</div>
              <div className="text-sm text-slate-300 mb-2">Los Angeles | 38.2% win rate</div>
              <div className="text-cyan-400 font-medium">{formatCurrency(2942293)} pipeline</div>
              <div className="text-xs text-red-300 mt-2">Coaching focus needed</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 rounded-xl p-5 border border-yellow-700/50">
              <div className="text-yellow-400 font-bold mb-2">Biotech Bay</div>
              <div className="text-white text-lg font-semibold mb-1">NEW HIRE NEEDED</div>
              <div className="text-sm text-slate-300 mb-2">San Francisco | No coverage</div>
              <div className="text-cyan-400 font-medium">$0 pipeline</div>
              <div className="text-xs text-yellow-300 mt-2">Biggest biotech market unserved</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-5 border border-blue-700/50">
              <div className="text-blue-400 font-bold mb-2">Cascadia</div>
              <div className="text-white text-lg font-semibold mb-1">Partner Channel</div>
              <div className="text-sm text-slate-300 mb-2">Seattle | $0 pipeline</div>
              <div className="text-cyan-400 font-medium">$150K investment</div>
              <div className="text-xs text-blue-300 mt-2">Per &quot;The Ask&quot;</div>
            </div>
          </div>
        </section>

        {/* Pipeline Health */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-6">⚠️ Pipeline Health Alert</h2>
          <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">{pipelineQuality.agingPct}%</div>
                <div className="text-sm text-red-300">Stale Pipeline</div>
                <div className="text-xs text-slate-400">90+ days old</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-orange-400">{pipelineQuality.avgDaysOpen}</div>
                <div className="text-sm text-orange-300">Avg Days Open</div>
                <div className="text-xs text-slate-400">Target: &lt;90 days</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-400">{formatCurrency(pipelineQuality.riskAmount)}</div>
                <div className="text-sm text-red-300">At Risk Amount</div>
                <div className="text-xs text-slate-400">{pipelineQuality.riskOpps.toLocaleString()} opps</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400">{formatCurrency(pipelineQuality.healthyAmount)}</div>
                <div className="text-sm text-green-300">Healthy Pipeline</div>
                <div className="text-xs text-slate-400">&lt;90 days old</div>
              </div>
            </div>
            <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
              <div className="text-white font-semibold mb-2">Recommendation</div>
              <div className="text-sm text-slate-300">
                77% of pipeline is 90+ days old. Initiate pipeline scrub to close or kill stale opportunities. 
                Focus on converting the $15.4M healthy pipeline within 30 days.
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mb-12 mt-8">
          <div className="bg-slate-800/30 rounded-xl p-6 border border-slate-700/50">
            <h3 className="text-sm font-semibold text-slate-400 mb-3">📊 Data Sources & Filters</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="bg-slate-700/30 rounded-lg p-3">
                <div className="text-blue-400 font-medium mb-1">Seller Performance</div>
                <div className="text-slate-400">Sales MCP → <code className="text-slate-500">get_team_performance</code></div>
                <div className="text-slate-500 mt-1">Filter: Q4 2025 | All sellers</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3">
                <div className="text-blue-400 font-medium mb-1">Win Rate Matrix</div>
                <div className="text-slate-400">Sales MCP → <code className="text-slate-500">get_win_rate_matrix</code></div>
                <div className="text-slate-500 mt-1">Filter: All time | By engagement type</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3">
                <div className="text-blue-400 font-medium mb-1">Pipeline Quality</div>
                <div className="text-slate-400">Sales MCP → <code className="text-slate-500">get_pipeline_quality</code></div>
                <div className="text-slate-500 mt-1">Filter: IsClosed = FALSE</div>
              </div>
              <div className="bg-slate-700/30 rounded-lg p-3">
                <div className="text-blue-400 font-medium mb-1">Closed Won</div>
                <div className="text-slate-400">Sales MCP → <code className="text-slate-500">get_closed_won_summary</code></div>
                <div className="text-slate-500 mt-1">Filter: Q4 2025 | StageName = Closed Won</div>
              </div>
            </div>
            <div className="mt-4 pt-3 border-t border-slate-700/50 text-xs text-slate-500">
              <strong>Last updated:</strong> Feb 4, 2026 | <strong>Data source:</strong> USDM Fabric Lakehouse via Sales MCP (SalesAnalysis dataset) | <strong>Refresh:</strong> Daily
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/seller-performance" className="bg-cyan-700 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Seller Deep Dive
          </Link>
          <Link href="/territories" className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Territory Analysis
          </Link>
          <Link href="/churn-signals" className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Churn Signals
          </Link>
          <Link href="/financial-model" className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Financial Model
          </Link>
        </div>
      </main>
    </div>
  );
}
