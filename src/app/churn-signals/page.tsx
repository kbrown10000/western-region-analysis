'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import churnData from '../../../data/churn-signals.json';

const riskLevelColors: Record<string, { bg: string; text: string; border: string }> = {
  critical: { bg: 'bg-red-500/20', text: 'text-red-400', border: 'border-red-500/50' },
  warning: { bg: 'bg-yellow-500/20', text: 'text-yellow-400', border: 'border-yellow-500/50' },
  watch: { bg: 'bg-slate-500/20', text: 'text-slate-400', border: 'border-slate-500/50' },
};

const flagColors: Record<string, string> = {
  SameDayFlip: '#ef4444',
  Regression: '#f97316',
  Stalled: '#eab308',
  PriceNegotiation: '#a855f7',
  ChampionLoss: '#ec4899',
  CompetitorMentioned: '#06b6d4',
};

const statusColors: Record<string, { bg: string; text: string }> = {
  pending: { bg: 'bg-slate-500/20', text: 'text-slate-400' },
  'in-progress': { bg: 'bg-cyan-500/20', text: 'text-cyan-400' },
  scheduled: { bg: 'bg-green-500/20', text: 'text-green-400' },
  recurring: { bg: 'bg-purple-500/20', text: 'text-purple-400' },
};

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6'];

export default function ChurnSignals() {
  const [riskFilter, setRiskFilter] = useState('All');
  const { summary, riskFactors, atRiskOpportunities, actionItems } = churnData;

  const filteredOpportunities = atRiskOpportunities.filter(
    opp => riskFilter === 'All' || opp.riskLevel === riskFilter
  );

  const riskFactorChartData = riskFactors.map(f => ({
    name: f.factor,
    count: f.count,
    impact: f.impact === 'critical' ? 3 : f.impact === 'high' ? 2 : 1,
  }));

  const riskDistribution = [
    { name: 'Critical', value: summary.criticalCount, color: '#ef4444' },
    { name: 'Warning', value: summary.warningCount, color: '#eab308' },
    { name: 'Watch', value: summary.watchCount, color: '#6b7280' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Churn Signals</h1>
        <p className="text-slate-400 mb-8">{summary.totalAtRisk} at-risk opportunities totaling ${(summary.totalValue / 1000000).toFixed(2)}M</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">At-Risk Deals</p>
            <p className="text-4xl font-bold text-red-400">{summary.totalAtRisk}</p>
            <p className="text-slate-500 text-sm">opportunities flagged</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">At-Risk Value</p>
            <p className="text-4xl font-bold text-white">${(summary.totalValue / 1000000).toFixed(2)}M</p>
            <p className="text-slate-500 text-sm">potential revenue</p>
          </div>
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">Critical</p>
            <p className="text-4xl font-bold text-red-400">{summary.criticalCount}</p>
            <p className="text-slate-500 text-sm">immediate action needed</p>
          </div>
          <div className="bg-yellow-900/30 rounded-xl p-6 border border-yellow-700/50">
            <p className="text-yellow-400 text-sm mb-1">Warning</p>
            <p className="text-4xl font-bold text-yellow-400">{summary.warningCount}</p>
            <p className="text-slate-500 text-sm">monitor closely</p>
          </div>
        </div>

        {/* Risk Factors Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚨 Risk Factor Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Risk Factor Chart */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Risk Signals by Type</h3>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={riskFactorChartData} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" stroke="#94a3b8" />
                  <YAxis type="category" dataKey="name" width={130} stroke="#94a3b8" tick={{ fontSize: 11 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    labelStyle={{ color: '#f1f5f9' }}
                  />
                  <Bar dataKey="count" radius={[0, 4, 4, 0]}>
                    {riskFactorChartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={Object.values(flagColors)[index] || '#6b7280'} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Risk Distribution Pie */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Risk Level Distribution</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={riskDistribution}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={90}
                    label={({ name, value }) => `${name}: ${value}`}
                  >
                    {riskDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  />
                </PieChart>
              </ResponsiveContainer>
              <div className="flex justify-center gap-6 mt-2">
                {riskDistribution.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }}></div>
                    <span className="text-slate-400 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Risk Factor Descriptions */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {riskFactors.map((factor, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: Object.values(flagColors)[idx] }}></div>
                  <span className="text-white font-semibold">{factor.factor}</span>
                  <span className={`text-xs px-2 py-0.5 rounded ${
                    factor.impact === 'critical' ? 'bg-red-500/20 text-red-400' :
                    factor.impact === 'high' ? 'bg-orange-500/20 text-orange-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {factor.impact}
                  </span>
                </div>
                <p className="text-slate-400 text-sm">{factor.description}</p>
                <p className="text-white font-semibold mt-2">{factor.count} deals</p>
              </div>
            ))}
          </div>
        </section>

        {/* At-Risk Opportunities */}
        <section className="mb-12">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-white">⚠️ At-Risk Opportunities</h2>
            <select 
              value={riskFilter}
              onChange={(e) => setRiskFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Risk Levels</option>
              <option value="critical">Critical Only</option>
              <option value="warning">Warning Only</option>
              <option value="watch">Watch Only</option>
            </select>
          </div>

          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-800">
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-left text-slate-400">Account</th>
                    <th className="py-3 px-4 text-left text-slate-400">Deal</th>
                    <th className="py-3 px-4 text-right text-slate-400">Value</th>
                    <th className="py-3 px-4 text-center text-slate-400">Stage</th>
                    <th className="py-3 px-4 text-center text-slate-400">Risk</th>
                    <th className="py-3 px-4 text-left text-slate-400">Flags</th>
                    <th className="py-3 px-4 text-center text-slate-400">Days Idle</th>
                    <th className="py-3 px-4 text-left text-slate-400">Owner</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredOpportunities.map((opp) => {
                    const riskStyle = riskLevelColors[opp.riskLevel];
                    return (
                      <tr key={opp.id} className={`border-b border-slate-800 hover:bg-slate-700/30 ${opp.riskLevel === 'critical' ? 'bg-red-900/10' : ''}`}>
                        <td className="py-3 px-4 text-white font-medium">{opp.account}</td>
                        <td className="py-3 px-4 text-slate-300">{opp.dealName}</td>
                        <td className="py-3 px-4 text-right text-cyan-400 font-semibold">
                          ${(opp.value / 1000).toFixed(0)}K
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className="px-2 py-1 bg-slate-700 text-slate-300 rounded text-xs">
                            {opp.stage}
                          </span>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={`px-2 py-1 rounded text-xs font-semibold ${riskStyle.bg} ${riskStyle.text} border ${riskStyle.border}`}>
                            {opp.riskLevel.toUpperCase()}
                          </span>
                        </td>
                        <td className="py-3 px-4">
                          <div className="flex flex-wrap gap-1">
                            {opp.flags.map((flag, idx) => (
                              <span 
                                key={idx} 
                                className="px-1.5 py-0.5 rounded text-xs text-white"
                                style={{ backgroundColor: flagColors[flag] || '#6b7280' }}
                              >
                                {flag}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td className="py-3 px-4 text-center">
                          <span className={opp.daysSinceActivity > 30 ? 'text-red-400 font-semibold' : 'text-slate-400'}>
                            {opp.daysSinceActivity}d
                          </span>
                        </td>
                        <td className="py-3 px-4 text-slate-400">{opp.owner}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <p className="text-slate-500 text-sm mt-2">Showing {filteredOpportunities.length} of {atRiskOpportunities.length} opportunities</p>
        </section>

        {/* Action Items */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">✅ Action Items</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="space-y-4">
              {actionItems.map((item) => {
                const statusStyle = statusColors[item.status] || statusColors.pending;
                return (
                  <div key={item.priority} className="flex items-start gap-4 p-4 bg-slate-900/50 rounded-lg border border-slate-800 hover:border-slate-700 transition-all">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-cyan-500/20 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-sm">{item.priority}</span>
                    </div>
                    <div className="flex-grow">
                      <p className="text-white font-medium">{item.action}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm">
                        <span className="text-slate-500">Owner: <span className="text-slate-300">{item.owner}</span></span>
                        <span className="text-slate-500">Due: <span className="text-slate-300">{item.dueDate}</span></span>
                        <span className={`px-2 py-0.5 rounded text-xs ${statusStyle.bg} ${statusStyle.text}`}>
                          {item.status}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Quick Wins</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl p-6 border border-red-700/30">
              <h3 className="text-red-400 font-bold mb-3">This Week</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Call Gilead exec - CSV extension</li>
                <li>• Enovis stakeholder meeting</li>
                <li>• Seagen deal rescue call</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-amber-900/20 rounded-xl p-6 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-bold mb-3">Next Week</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Champion replacement at Illumina</li>
                <li>• BioMarin pricing justification</li>
                <li>• Amgen stakeholder mapping</li>
              </ul>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-cyan-400 font-bold mb-3">Process Improvements</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Weekly stalled deals review</li>
                <li>• Automated regression alerts</li>
                <li>• Competitor intel tracking</li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-8 flex gap-4">
          <Link href="/targets" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Target Companies →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
