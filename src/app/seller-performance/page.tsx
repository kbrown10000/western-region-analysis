'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

export default function SellerPerformance() {
  const sellers = [
    {
      name: 'Mike Campbell',
      opportunities: 87,
      pipeline: 5.42,
      winRate: 14.9,
      status: 'critical',
      statusIcon: '🔴',
      coachingNeeds: [
        'Deal qualification training required',
        'High volume with low conversion suggests spray-and-pray approach',
        'Review discovery methodology and qualification criteria',
        'Focus on fewer, higher-quality opportunities',
      ],
      churnSignals: 15,
      avgDealSize: 62300,
    },
    {
      name: 'Justin Ott',
      opportunities: 61,
      pipeline: 4.42,
      winRate: 74.8,
      status: 'excellent',
      statusIcon: '✅',
      coachingNeeds: [
        'Top performer - document and share best practices',
        'Strong qualification and closing skills',
        'Potential mentor for other team members',
        'Consider expanding territory or deal size targets',
      ],
      churnSignals: 2,
      avgDealSize: 72500,
    },
    {
      name: 'Scott Pallardy',
      opportunities: 28,
      pipeline: 2.31,
      winRate: 75.6,
      status: 'excellent',
      statusIcon: '✅',
      coachingNeeds: [
        'Strong performer with excellent conversion',
        'Lower volume suggests capacity for growth',
        'Consider expanding lead generation activities',
      ],
      churnSignals: 1,
      avgDealSize: 82500,
    },
    {
      name: 'John Petrakis',
      opportunities: 18,
      pipeline: 1.90,
      winRate: 90.8,
      status: 'excellent',
      statusIcon: '✅',
      coachingNeeds: [
        'Solutions specialist with exceptional win rate',
        'Focus on complex, high-value engagements',
        'Partner with other sellers on strategic accounts',
      ],
      churnSignals: 0,
      avgDealSize: 105600,
    },
  ];

  const pipelineDistribution = sellers.map(s => ({
    name: s.name.split(' ')[0],
    value: s.pipeline,
    color: s.status === 'critical' ? '#dc2626' : s.status === 'excellent' ? '#10b981' : '#f59e0b',
  }));

  const performanceComparison = sellers.map(s => ({
    name: s.name.split(' ')[0],
    'Win Rate': s.winRate,
    'Opps': s.opportunities,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Seller Performance Dashboard</h1>
          <p className="text-slate-400 text-lg">Western Region sales team performance analysis and coaching recommendations</p>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Total Pipeline</div>
            <div className="text-3xl font-bold text-white">$14.05M</div>
            <div className="text-slate-500 text-sm mt-1">194 opportunities</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Avg Win Rate</div>
            <div className="text-3xl font-bold text-white">35.6%</div>
            <div className="text-red-400 text-sm mt-1">↓ vs 40.1% prior year</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">At-Risk Deals</div>
            <div className="text-3xl font-bold text-orange-400">53</div>
            <div className="text-slate-500 text-sm mt-1">Churn signals flagged</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-slate-400 text-sm mb-2">Team Size</div>
            <div className="text-3xl font-bold text-white">4</div>
            <div className="text-slate-500 text-sm mt-1">Active sellers</div>
          </div>
        </div>

        {/* Seller Scorecards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          {sellers.map((seller) => (
            <div
              key={seller.name}
              className={`rounded-xl p-6 border-2 ${
                seller.status === 'critical'
                  ? 'bg-red-900/20 border-red-800'
                  : seller.status === 'excellent'
                  ? 'bg-green-900/20 border-green-800'
                  : 'bg-yellow-900/20 border-yellow-800'
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white">{seller.name}</h3>
                  <p className="text-slate-400">West Region Sales</p>
                </div>
                <span className="text-4xl">{seller.statusIcon}</span>
              </div>

              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-xs mb-1">Opportunities</div>
                  <div className="text-2xl font-bold text-white">{seller.opportunities}</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-xs mb-1">Pipeline</div>
                  <div className="text-2xl font-bold text-white">${seller.pipeline}M</div>
                </div>
                <div className="bg-slate-900/50 rounded-lg p-4">
                  <div className="text-slate-400 text-xs mb-1">Win Rate</div>
                  <div
                    className={`text-2xl font-bold ${
                      seller.winRate < 30 ? 'text-red-400' : seller.winRate > 60 ? 'text-green-400' : 'text-yellow-400'
                    }`}
                  >
                    {seller.winRate}%
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-slate-900/30 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Avg Deal Size</div>
                  <div className="text-lg font-semibold text-white">${(seller.avgDealSize / 1000).toFixed(1)}K</div>
                </div>
                <div className="bg-slate-900/30 rounded-lg p-3">
                  <div className="text-slate-400 text-xs mb-1">Churn Signals</div>
                  <div
                    className={`text-lg font-semibold ${
                      seller.churnSignals > 10 ? 'text-red-400' : seller.churnSignals > 3 ? 'text-orange-400' : 'text-green-400'
                    }`}
                  >
                    {seller.churnSignals} flagged
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-700 pt-4">
                <h4 className="text-sm font-semibold text-slate-300 mb-2">
                  {seller.status === 'critical' ? '⚠️ Coaching Priority' : '💡 Development Notes'}
                </h4>
                <ul className="space-y-2">
                  {seller.coachingNeeds.map((need, idx) => (
                    <li key={idx} className="text-sm text-slate-400 flex items-start">
                      <span className="mr-2">•</span>
                      <span>{need}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Pipeline Distribution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Pipeline Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={pipelineDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: $${value.toFixed(2)}M`}
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
            <h2 className="text-2xl font-bold text-white mb-6">Win Rate vs Volume</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={performanceComparison}>
                <XAxis dataKey="name" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" />
                <Tooltip
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#e2e8f0' }}
                />
                <Legend />
                <Bar dataKey="Win Rate" fill="#10b981" />
                <Bar dataKey="Opps" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Churn Signals Alert */}
        <div className="bg-gradient-to-r from-orange-900/50 to-red-900/50 rounded-xl p-8 border border-orange-800/50 mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">⚠️ Churn Signal Analysis</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">SameDayFlip Patterns</h3>
              <p className="text-slate-300 text-sm">
                Opportunities changing stage multiple times in one day indicates deal volatility and poor qualification. Mike Campbell shows highest concentration (12 instances).
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">Regression Signals</h3>
              <p className="text-slate-300 text-sm">
                Deals moving backwards in pipeline suggest objections not handled or buying committee changes. Requires immediate follow-up and re-qualification.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-orange-300 mb-3">Recommended Actions</h3>
              <ul className="text-slate-300 text-sm space-y-2">
                <li>• Weekly pipeline review with Mike Campbell</li>
                <li>• Implement MEDDIC qualification framework</li>
                <li>• Require executive sponsor confirmation</li>
                <li>• Review all deals with 3+ stage changes</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Mike Campbell Focus Area */}
        <div className="bg-red-900/30 rounded-xl p-8 border-2 border-red-800 mb-12">
          <div className="flex items-start gap-4 mb-6">
            <span className="text-5xl">🎯</span>
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Priority: Mike Campbell Development Plan</h2>
              <p className="text-slate-300">Immediate intervention required to improve qualification and conversion</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-red-400 mb-4">🔴 Critical Issues</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▸</span>
                  <span><strong>14.9% win rate</strong> — 60% below team average</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▸</span>
                  <span><strong>87 opportunities</strong> — highest volume, suggesting poor filtering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▸</span>
                  <span><strong>15 churn signals</strong> — deals moving erratically through pipeline</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-400 mr-2">▸</span>
                  <span><strong>$62K avg deal</strong> — smallest on team, may be taking low-value deals</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-900/50 rounded-lg p-6">
              <h3 className="text-xl font-bold text-green-400 mb-4">✅ 30-Day Action Plan</h3>
              <ol className="space-y-3 text-slate-300">
                <li className="flex items-start">
                  <span className="bg-green-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mr-3">1</span>
                  <div>
                    <strong>Week 1:</strong> Shadow Justin Ott on 3 discovery calls to observe qualification methodology
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mr-3">2</span>
                  <div>
                    <strong>Week 2:</strong> Implement MEDDIC framework on all new opportunities. Manager approval required before advancing to proposal.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mr-3">3</span>
                  <div>
                    <strong>Week 3:</strong> Review and close/disqualify bottom 50% of current pipeline. Focus on fewer, higher-quality deals.
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="bg-green-500 text-slate-900 w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 mr-3">4</span>
                  <div>
                    <strong>Week 4:</strong> Weekly pipeline review with sales manager. Target: reduce opportunity count to 50, increase avg deal size to $75K+
                  </div>
                </li>
              </ol>
            </div>
          </div>

          <div className="mt-6 bg-slate-900/30 rounded-lg p-6">
            <h4 className="text-lg font-semibold text-white mb-3">📚 Training Resources</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <div className="font-semibold text-cyan-400 mb-1">MEDDIC Training</div>
                <div className="text-slate-400">Comprehensive qualification framework</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-cyan-400 mb-1">Discovery Playbook</div>
                <div className="text-slate-400">Question templates and objection handling</div>
              </div>
              <div className="text-sm">
                <div className="font-semibold text-cyan-400 mb-1">Deal Review Template</div>
                <div className="text-slate-400">Standardized qualification checklist</div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 flex-wrap">
          <Link href="/team-capacity" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Team Capacity →
          </Link>
          <Link href="/churn-signals" className="px-6 py-3 bg-orange-500 hover:bg-orange-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Churn Signals Data →
          </Link>
          <Link href="/executive-summary" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Executive Summary
          </Link>
        </div>
      </main>
    </div>
  );
}
