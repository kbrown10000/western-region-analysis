'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, Legend, AreaChart, Area } from 'recharts';
import ltvData from '../../../data/customer-ltv.json';

const COLORS = ['#06b6d4', '#8b5cf6', '#eab308', '#22c55e', '#ef4444', '#f97316'];

const trendColors: Record<string, string> = {
  growing: '#22c55e',
  stable: '#eab308',
  declining: '#ef4444',
};

const trendIcons: Record<string, string> = {
  growing: '↗',
  stable: '→',
  declining: '↘',
};

export default function LTVPage() {
  const { top20Customers, ltvByYear, ltvDistribution } = ltvData;
  
  const totalLTV = top20Customers.reduce((sum, c) => sum + c.ltv, 0);
  const growingCount = top20Customers.filter(c => c.trend === 'growing').length;
  const decliningCount = top20Customers.filter(c => c.trend === 'declining').length;

  const distributionData = [
    { name: 'Tier 1 (>$5M)', value: ltvDistribution.tier1_over5M.count, ltv: ltvDistribution.tier1_over5M.totalLtv },
    { name: 'Tier 2 ($2-5M)', value: ltvDistribution.tier2_2to5M.count, ltv: ltvDistribution.tier2_2to5M.totalLtv },
    { name: 'Tier 3 ($1-2M)', value: ltvDistribution.tier3_1to2M.count, ltv: ltvDistribution.tier3_1to2M.totalLtv },
    { name: 'Tier 4 (<$1M)', value: ltvDistribution.tier4_under1M.count, ltv: ltvDistribution.tier4_under1M.totalLtv },
  ];

  const chartData = top20Customers.slice(0, 10).map(c => ({
    name: c.name.length > 15 ? c.name.substring(0, 15) + '...' : c.name,
    ltv: c.ltv / 1000000,
    avgRevenue: c.avgAnnualRevenue / 1000,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex gap-6">
            <Link href="/executive-summary" className="text-slate-400 hover:text-white">Summary</Link>
            <Link href="/map" className="text-slate-400 hover:text-white">Map</Link>
            <Link href="/margin-analysis" className="text-slate-400 hover:text-white">Margins</Link>
            <Link href="/churn-signals" className="text-slate-400 hover:text-white">Churn</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Customer Lifetime Value</h1>
        <p className="text-slate-400 mb-8">Top 20 customers ranked by LTV with trend analysis</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total LTV (Top 20)</p>
            <p className="text-4xl font-bold text-cyan-400">${(totalLTV / 1000000).toFixed(1)}M</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Avg Customer LTV</p>
            <p className="text-4xl font-bold text-white">${(totalLTV / top20Customers.length / 1000000).toFixed(2)}M</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
            <p className="text-green-400 text-sm mb-1">Growing Accounts</p>
            <p className="text-4xl font-bold text-green-400">{growingCount}</p>
            <p className="text-slate-500 text-sm">↗ trending up</p>
          </div>
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">Declining Accounts</p>
            <p className="text-4xl font-bold text-red-400">{decliningCount}</p>
            <p className="text-slate-500 text-sm">↘ at risk</p>
          </div>
        </div>

        {/* LTV Over Time Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📈 LTV Growth Over Time</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <ResponsiveContainer width="100%" height={300}>
              <AreaChart data={ltvByYear}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis stroke="#94a3b8" tickFormatter={(val) => `$${val/1000000}M`} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value) => value != null ? [`$${(Number(value)/1000000).toFixed(1)}M`, 'Total LTV'] : ['N/A', 'Total LTV']}
                />
                <Area 
                  type="monotone" 
                  dataKey="totalLtv" 
                  stroke="#06b6d4" 
                  fill="url(#colorLtv)" 
                  strokeWidth={2}
                />
                <defs>
                  <linearGradient id="colorLtv" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#06b6d4" stopOpacity={0.3}/>
                    <stop offset="95%" stopColor="#06b6d4" stopOpacity={0}/>
                  </linearGradient>
                </defs>
              </AreaChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-8 mt-4 text-sm text-slate-400">
              <span>2020-2025 CAGR: <span className="text-cyan-400 font-semibold">12.2%</span></span>
              <span>2025 Total LTV: <span className="text-cyan-400 font-semibold">$68.5M</span></span>
            </div>
          </div>
        </section>

        {/* Top 10 Chart */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🏆 Top 10 by LTV</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" stroke="#94a3b8" tickFormatter={(val) => `$${val}M`} />
                <YAxis type="category" dataKey="name" width={120} stroke="#94a3b8" tick={{ fontSize: 12 }} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                  formatter={(value, name) => {
                    const v = Number(value) || 0;
                    return [
                      name === 'ltv' ? `$${v.toFixed(2)}M` : `$${v.toFixed(0)}K/yr`,
                      name === 'ltv' ? 'Lifetime Value' : 'Avg Annual Revenue'
                    ];
                  }}
                />
                <Bar dataKey="ltv" fill="#06b6d4" name="ltv" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Distribution & Full List */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
          {/* Distribution Pie Chart */}
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">LTV Distribution</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={distributionData}
                  dataKey="ltv"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  label={({ percent }) => `${((percent || 0) * 100).toFixed(0)}%`}
                >
                  {distributionData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(1)}M`, 'LTV']}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-cyan-400">Tier 1 (&gt;$5M)</span>
                <span className="text-white">{ltvDistribution.tier1_over5M.count} customers, {ltvDistribution.tier1_over5M.pctOfTotal}% LTV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-400">Tier 2 ($2-5M)</span>
                <span className="text-white">{ltvDistribution.tier2_2to5M.count} customers, {ltvDistribution.tier2_2to5M.pctOfTotal}% LTV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-yellow-400">Tier 3 ($1-2M)</span>
                <span className="text-white">{ltvDistribution.tier3_1to2M.count} customers, {ltvDistribution.tier3_1to2M.pctOfTotal}% LTV</span>
              </div>
              <div className="flex justify-between">
                <span className="text-orange-400">Tier 4 (&lt;$1M)</span>
                <span className="text-white">{ltvDistribution.tier4_under1M.count} customers, {ltvDistribution.tier4_under1M.pctOfTotal}% LTV</span>
              </div>
            </div>
          </div>

          {/* Full Customer List */}
          <div className="lg:col-span-2 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h3 className="text-lg font-bold text-white mb-4">Top 20 Customers</h3>
            <div className="overflow-x-auto max-h-[500px] overflow-y-auto">
              <table className="w-full text-sm">
                <thead className="sticky top-0 bg-slate-800">
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-left text-slate-400">#</th>
                    <th className="py-2 px-3 text-left text-slate-400">Customer</th>
                    <th className="py-2 px-3 text-right text-slate-400">LTV</th>
                    <th className="py-2 px-3 text-right text-slate-400">Avg Annual</th>
                    <th className="py-2 px-3 text-center text-slate-400">Tenure</th>
                    <th className="py-2 px-3 text-center text-slate-400">Trend</th>
                  </tr>
                </thead>
                <tbody>
                  {top20Customers.map((customer) => (
                    <tr key={customer.rank} className="border-b border-slate-800 hover:bg-slate-700/30">
                      <td className="py-3 px-3 text-slate-500">{customer.rank}</td>
                      <td className="py-3 px-3">
                        <div className="text-white font-medium">{customer.name}</div>
                        <div className="text-slate-500 text-xs">{customer.territory} | {customer.gp}% GP</div>
                      </td>
                      <td className="py-3 px-3 text-right text-cyan-400 font-semibold">
                        ${(customer.ltv / 1000000).toFixed(2)}M
                      </td>
                      <td className="py-3 px-3 text-right text-slate-300">
                        ${(customer.avgAnnualRevenue / 1000).toFixed(0)}K
                      </td>
                      <td className="py-3 px-3 text-center text-slate-400">{customer.tenure}</td>
                      <td className="py-3 px-3 text-center">
                        <span 
                          className="inline-flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold"
                          style={{ 
                            backgroundColor: `${trendColors[customer.trend]}20`,
                            color: trendColors[customer.trend]
                          }}
                        >
                          {trendIcons[customer.trend]} {customer.trend}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-cyan-400 font-bold mb-2">Top 5 = 50% of LTV</h3>
              <p className="text-slate-300 text-sm">Gilead, Kite, Amgen, Genentech, and Abbott alone represent over half of total LTV. Critical to retain.</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-700/30">
              <h3 className="text-green-400 font-bold mb-2">9 Growing Accounts</h3>
              <p className="text-slate-300 text-sm">Jazz, BioMarin, Vertex, Sarepta showing strong upward trends. Expand service footprint.</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl p-6 border border-red-700/30">
              <h3 className="text-red-400 font-bold mb-2">3 Declining Accounts</h3>
              <p className="text-slate-300 text-sm">Amgen, Enovis, Illumina trending down. Intervention needed - see Churn Signals page.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex gap-4">
          <Link href="/churn-signals" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Churn Signals →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
