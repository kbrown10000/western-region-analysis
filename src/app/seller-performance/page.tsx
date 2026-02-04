'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

// VERIFIED DATA: Sales MCP → get_team_performance | Feb 4, 2026
// Note: John Petrakis removed - not an opportunity owner in Salesforce

export default function SellerPerformance() {
  const sellers = [
    {
      name: 'Justin Ott',
      role: 'EVP West',
      territory: 'Biotech Beach',
      opportunities: 69,
      wonDeals: 42,
      pipeline: 6.92,
      pipelineEGP: 2.63,
      closedWon: 5.13,
      closedWonEGP: 1.89,
      winRate: 60.9,
      status: 'star',
      statusIcon: '⭐',
      coachingNeeds: [
        'Top performer - document and share best practices',
        'Strong qualification and closing skills',
        'Potential mentor for other team members',
        'Consider expanding into Biotech Bay territory',
      ],
      churnSignals: 2,
      avgDealSize: 122000,
    },
    {
      name: 'Josh Ertmer',
      role: 'Staffing AM',
      territory: 'National',
      opportunities: 45,
      wonDeals: 28,
      pipeline: 5.60,
      pipelineEGP: 1.44,
      closedWon: 3.35,
      closedWonEGP: 0.87,
      winRate: 62.2,
      status: 'star',
      statusIcon: '⭐',
      coachingNeeds: [
        'Strong performer in staffing deals',
        'Excellent conversion rate',
        'Lower EGP margin suggests staffing focus',
        'Consider cross-selling managed services',
      ],
      churnSignals: 3,
      avgDealSize: 119700,
    },
    {
      name: 'Mike Campbell',
      role: 'Account Manager',
      territory: 'LA BioMed',
      opportunities: 34,
      wonDeals: 13,
      pipeline: 2.94,
      pipelineEGP: 1.23,
      closedWon: 1.47,
      closedWonEGP: 0.55,
      winRate: 38.2,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Win rate below target (38% vs 50% goal)',
        'Large accounts but low margins (Gilead, Kite, Amgen)',
        'Focus on deal qualification',
        'Convert T&M to Managed Services for margin lift',
      ],
      churnSignals: 8,
      avgDealSize: 113000,
    },
    {
      name: 'Scott Pallardy',
      role: 'Account Manager',
      territory: 'East',
      opportunities: 36,
      wonDeals: 12,
      pipeline: 3.42,
      pipelineEGP: 1.71,
      closedWon: 0.85,
      closedWonEGP: 0.36,
      winRate: 33.3,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Win rate needs improvement',
        'Good pipeline EGP ratio',
        'Focus on closing existing opportunities',
        'Review qualification criteria',
      ],
      churnSignals: 4,
      avgDealSize: 70500,
    },
    {
      name: 'Lisa Burgese Fry',
      role: 'EVP East',
      territory: 'East',
      opportunities: 25,
      wonDeals: 10,
      pipeline: 2.50,
      pipelineEGP: 0.96,
      closedWon: 1.14,
      closedWonEGP: 0.47,
      winRate: 40.0,
      status: 'ok',
      statusIcon: '✅',
      coachingNeeds: [
        'Solid performer at target win rate',
        'Leadership role - mentor junior AMs',
        'Focus on larger strategic deals',
      ],
      churnSignals: 2,
      avgDealSize: 114000,
    },
    {
      name: 'Hovsep Kirikian',
      role: 'CGO',
      territory: 'National',
      opportunities: 15,
      wonDeals: 6,
      pipeline: 1.77,
      pipelineEGP: 1.05,
      closedWon: 0.62,
      closedWonEGP: 0.29,
      winRate: 40.0,
      status: 'ok',
      statusIcon: '✅',
      coachingNeeds: [
        'Executive-level deals with strong EGP',
        'Strategic account focus',
        'Continue high-value positioning',
      ],
      churnSignals: 1,
      avgDealSize: 103000,
    },
    {
      name: 'Marcus Dinan',
      role: 'Account Manager',
      territory: 'Europe',
      opportunities: 39,
      wonDeals: 7,
      pipeline: 3.85,
      pipelineEGP: 1.83,
      closedWon: 0.23,
      closedWonEGP: 0.16,
      winRate: 17.9,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Lowest win rate on team - urgent attention',
        'Europe market challenges',
        'Large pipeline not converting',
        'Review territory strategy',
      ],
      churnSignals: 6,
      avgDealSize: 32800,
    },
    {
      name: 'Avani Macwan',
      role: 'Account Manager',
      territory: 'East',
      opportunities: 35,
      wonDeals: 6,
      pipeline: 2.91,
      pipelineEGP: 1.24,
      closedWon: 1.02,
      closedWonEGP: 0.37,
      winRate: 17.1,
      status: 'coaching',
      statusIcon: '🎯',
      coachingNeeds: [
        'Lowest win rate on team',
        'Strong pipeline but poor conversion',
        'Opportunity scoring needed',
        'Weekly deal reviews required',
      ],
      churnSignals: 7,
      avgDealSize: 170000,
    },
  ];

  const formatCurrency = (value: number) => {
    if (value >= 1) return `$${value.toFixed(2)}M`;
    return `$${(value * 1000).toFixed(0)}K`;
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'star': return 'bg-green-900/30 border-green-700';
      case 'ok': return 'bg-blue-900/30 border-blue-700';
      case 'coaching': return 'bg-red-900/30 border-red-700';
      default: return 'bg-slate-800/50 border-slate-700';
    }
  };

  const getWinRateColor = (rate: number) => {
    if (rate >= 50) return 'text-green-400';
    if (rate >= 35) return 'text-yellow-400';
    return 'text-red-400';
  };

  const pipelineDistribution = sellers.map(s => ({
    name: s.name.split(' ')[0],
    value: s.pipeline,
    color: s.status === 'star' ? '#22c55e' : s.status === 'ok' ? '#3b82f6' : '#ef4444',
  }));

  const performanceComparison = sellers.slice(0, 6).map(s => ({
    name: s.name.split(' ')[0],
    'Win Rate': s.winRate,
    'Pipeline ($M)': s.pipeline,
  }));

  const totalPipeline = sellers.reduce((sum, s) => sum + s.pipeline, 0);
  const totalWon = sellers.reduce((sum, s) => sum + s.closedWon, 0);
  const totalEGP = sellers.reduce((sum, s) => sum + s.closedWonEGP, 0);
  const avgWinRate = sellers.reduce((sum, s) => sum + s.winRate, 0) / sellers.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">Seller Performance</h1>
            <p className="text-slate-400 text-lg">Sales team performance analysis with coaching recommendations</p>
          </div>
          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded border border-green-700/50">
            🔴 LIVE | Sales MCP V2 | Feb 4, 2026
          </span>
        </div>
        
        {/* Data Source */}
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-blue-400">Sales MCP</span> → <code className="text-slate-500">get_team_performance</code>, <code className="text-slate-500">get_win_rate_matrix</code> |
          <span className="text-slate-500"> 8 opportunity owners verified</span>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Total Pipeline</div>
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(totalPipeline)}</div>
            <div className="text-slate-500 text-sm mt-1">{sellers.reduce((sum, s) => sum + s.opportunities, 0)} opportunities</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Q4 Closed Won</div>
            <div className="text-3xl font-bold text-green-400">{formatCurrency(totalWon)}</div>
            <div className="text-slate-500 text-sm mt-1">{formatCurrency(totalEGP)} EGP</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Avg Win Rate</div>
            <div className={`text-3xl font-bold ${getWinRateColor(avgWinRate)}`}>{avgWinRate.toFixed(1)}%</div>
            <div className="text-slate-500 text-sm mt-1">Target: 50%</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Team Size</div>
            <div className="text-3xl font-bold text-white">{sellers.length}</div>
            <div className="text-slate-500 text-sm mt-1">Opportunity owners</div>
          </div>
        </div>

        {/* Leaderboard Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Seller Leaderboard</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                  <th className="py-3 px-4 text-slate-300">Seller</th>
                  <th className="py-3 px-4 text-slate-300">Territory</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Q4 Won</th>
                  <th className="py-3 px-4 text-slate-300 text-right">EGP</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                  <th className="py-3 px-4 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {sellers.sort((a, b) => b.closedWon - a.closedWon).map((seller, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${getStatusColor(seller.status)} hover:bg-slate-700/30 transition`}>
                    <td className="py-3 px-4">
                      <div className="text-white font-medium">{seller.name}</div>
                      <div className="text-xs text-slate-400">{seller.role}</div>
                    </td>
                    <td className="py-3 px-4 text-slate-300">{seller.territory}</td>
                    <td className="py-3 px-4 text-cyan-400 text-right font-medium">{formatCurrency(seller.pipeline)}</td>
                    <td className="py-3 px-4 text-green-400 text-right font-medium">{formatCurrency(seller.closedWon)}</td>
                    <td className="py-3 px-4 text-green-300 text-right text-xs">{formatCurrency(seller.closedWonEGP)}</td>
                    <td className={`py-3 px-4 text-right font-bold text-lg ${getWinRateColor(seller.winRate)}`}>
                      {seller.winRate.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-lg">{seller.statusIcon}</span>
                      <span className={`text-xs ml-2 ${seller.status === 'star' ? 'text-green-400' : seller.status === 'ok' ? 'text-blue-400' : 'text-red-400'}`}>
                        {seller.status === 'star' ? 'STAR' : seller.status === 'ok' ? 'On Track' : 'COACHING'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Coaching Priorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-6">🎯 Coaching Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {sellers.filter(s => s.status === 'coaching').slice(0, 3).map((seller, i) => (
              <div key={i} className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">{seller.name}</div>
                    <div className="text-red-400 text-sm">{seller.territory} | {seller.winRate.toFixed(1)}% Win Rate</div>
                  </div>
                  <span className="text-2xl">{seller.statusIcon}</span>
                </div>
                <ul className="text-xs text-slate-300 space-y-2">
                  {seller.coachingNeeds.map((need, idx) => (
                    <li key={idx}>• {need}</li>
                  ))}
                </ul>
                <div className="mt-4 pt-4 border-t border-red-700/30 flex justify-between text-xs">
                  <span className="text-slate-400">Churn Signals: <span className="text-red-400 font-bold">{seller.churnSignals}</span></span>
                  <span className="text-slate-400">Pipeline: <span className="text-cyan-400">{formatCurrency(seller.pipeline)}</span></span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Star Performers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">⭐ Star Performers</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {sellers.filter(s => s.status === 'star').map((seller, i) => (
              <div key={i} className="bg-green-900/20 rounded-xl p-6 border border-green-700/50">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="text-white font-bold text-lg">{seller.name}</div>
                    <div className="text-green-400 text-sm">{seller.role} | {seller.territory}</div>
                  </div>
                  <span className="text-2xl">{seller.statusIcon}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div>
                    <div className="text-xs text-slate-400">Pipeline</div>
                    <div className="text-cyan-400 font-semibold">{formatCurrency(seller.pipeline)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Q4 Won</div>
                    <div className="text-green-400 font-semibold">{formatCurrency(seller.closedWon)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-slate-400">Win Rate</div>
                    <div className="text-green-400 font-bold text-xl">{seller.winRate.toFixed(1)}%</div>
                  </div>
                </div>
                <ul className="text-xs text-slate-300 space-y-1">
                  {seller.coachingNeeds.slice(0, 2).map((need, idx) => (
                    <li key={idx}>• {need}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Pipeline Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${Number(value).toFixed(1)}M`}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {pipelineDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => value !== undefined ? `$${Number(value).toFixed(2)}M` : ''} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-6">Win Rate vs Pipeline (Top 6)</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceComparison}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="Win Rate" fill="#22c55e" />
                <Bar dataKey="Pipeline ($M)" fill="#06b6d4" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 flex-wrap">
          <Link href="/team-capacity" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold rounded-lg transition-all">
            Team Capacity →
          </Link>
          <Link href="/churn-signals" className="px-6 py-3 bg-orange-600 hover:bg-orange-500 text-white font-semibold rounded-lg transition-all">
            Churn Signals →
          </Link>
          <Link href="/territories" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-semibold rounded-lg transition-all">
            Territory Analysis →
          </Link>
        </div>
      </main>
    </div>
  );
}
