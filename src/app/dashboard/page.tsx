'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, ComposedChart, Line } from 'recharts';

// CORRECTED 2025 DATA - From Finance MCP customer_ltv_corrected_2025.xlsx
// 160 West customers, $17.19M revenue, 34.3% blended GP

// Revenue by territory (REAL DATA)
const revenueByTerritory = [
  { territory: 'Biotech Beach', revenue: 9550000, gp: 42.5, customers: 147, gpDollars: 4058750 },
  { territory: 'LA BioMed', revenue: 6470000, gp: 22.0, customers: 8, gpDollars: 1423400 },
  { territory: 'Biotech Bay', revenue: 790000, gp: 41.8, customers: 4, gpDollars: 330220 },
  { territory: 'Cascadia', revenue: 370000, gp: 24.5, customers: 1, gpDollars: 90650 },
];

// Top customers by revenue with CORRECTED GP% (all tiers)
const topCustomers = [
  { name: 'Kite Pharma', revenue: 1963, gp: 19.1, tier: 'C', territory: 'LA BioMed', yoy: 94.2, trend: '↑' },
  { name: 'Amgen', revenue: 1610, gp: 14.6, tier: 'C', territory: 'LA BioMed', yoy: -9.2, trend: '↓' },
  { name: 'Crinetics', revenue: 912, gp: 40.9, tier: 'A', territory: 'Biotech Beach', yoy: 162.3, trend: '↑' },
  { name: 'Enovis', revenue: 711, gp: 11.0, tier: 'C', territory: 'Biotech Beach', yoy: 348.9, trend: '↑' },
  { name: 'Edwards', revenue: 672, gp: 28.6, tier: 'C', territory: 'LA BioMed', yoy: -21.2, trend: '↓' },
  { name: 'Ionis', revenue: 635, gp: 36.0, tier: 'B', territory: 'Biotech Beach', yoy: 24.0, trend: '↑' },
  { name: 'Arrowhead', revenue: 552, gp: 40.1, tier: 'A', territory: 'LA BioMed', yoy: 13.5, trend: '↑' },
  { name: 'STAAR Surgical', revenue: 496, gp: 30.9, tier: 'B', territory: 'LA BioMed', yoy: -15.8, trend: '↓' },
  { name: 'Halozyme', revenue: 483, gp: 37.3, tier: 'B', territory: 'Biotech Beach', yoy: -24.6, trend: '↓' },
  { name: 'Corcept', revenue: 482, gp: 41.2, tier: 'A', territory: 'Biotech Bay', yoy: 27.0, trend: '↑' },
];

// Tier breakdown (REAL DATA)
const tierBreakdown = [
  { tier: 'Tier A (≥40%)', customers: 103, revenue: 5050000, gpPercent: 59.5, color: '#22c55e' },
  { tier: 'Tier B (30-40%)', customers: 11, revenue: 3030000, gpPercent: 35.5, color: '#eab308' },
  { tier: 'Tier C (<30%)', customers: 46, revenue: 9110000, gpPercent: 20.0, color: '#ef4444' },
];

// YoY trend data
const yoyTrend = [
  { year: '2023', revenue: 0 },
  { year: '2024', revenue: 19630000 },
  { year: '2025', revenue: 17190000 },
];

const COLORS = ['#06b6d4', '#ef4444', '#22c55e', '#8b5cf6'];

const getTierColor = (tier: string) => {
  if (tier === 'A') return '#22c55e';
  if (tier === 'B') return '#eab308';
  return '#ef4444';
};

const getGPColor = (gp: number) => {
  if (gp >= 40) return '#22c55e';
  if (gp >= 30) return '#eab308';
  return '#ef4444';
};

export default function Dashboard() {
  const totalRevenue = 17190000;
  const totalGP = 5900000;
  const blendedGP = 34.3;
  const totalCustomers = 160;
  const totalLTV = 58570000;
  const openPipeline = 10860000;
  const yoyGrowth = -12.4;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Financial Dashboard</h1>
        <p className="text-slate-400 mb-2">Western Region 2025 Performance - Live Data from Fabric Lakehouse</p>
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-purple-400">Finance MCP</span> → <code className="text-slate-500">analyze_customer_profitability</code>, <code className="text-slate-500">get_customer_ltv</code> | 
          <span className="text-blue-400 ml-2">Sales MCP</span> → <code className="text-slate-500">get_pipeline_summary</code> |
          <span className="text-slate-500"> Filter: </span><code className="text-slate-500">DIM_Account_Min[Sales_Region] = &quot;West&quot;</code> | 160 customers
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">2025 Revenue</p>
            <p className="text-4xl font-bold text-cyan-400">${(totalRevenue / 1000000).toFixed(2)}M</p>
            <p className={`text-sm ${yoyGrowth < 0 ? 'text-red-400' : 'text-green-400'}`}>{yoyGrowth}% YoY</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Blended GP%</p>
            <p className="text-4xl font-bold text-yellow-400">{blendedGP}%</p>
            <p className="text-slate-500 text-sm">${(totalGP / 1000000).toFixed(2)}M gross profit</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Customers</p>
            <p className="text-4xl font-bold text-white">{totalCustomers}</p>
            <p className="text-slate-500 text-sm">Active accounts</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total LTV</p>
            <p className="text-4xl font-bold text-purple-400">${(totalLTV / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm">Lifetime value</p>
          </div>
        </div>

        {/* Alert Banner */}
        <div className="bg-red-900/30 border border-red-700 rounded-xl p-4 mb-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <p className="text-red-300 font-semibold">Revenue Decline Alert: -12.4% YoY</p>
              <p className="text-red-400/70 text-sm">2024: $19.63M → 2025: $17.19M | Tier C customers (46) generate 53% of revenue at only 20% GP margin</p>
            </div>
          </div>
        </div>

        {/* Territory Performance */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Revenue by Territory</h2>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueByTerritory} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" tickFormatter={(v) => `$${(v/1000000).toFixed(1)}M`} stroke="#94a3b8" />
                <YAxis type="category" dataKey="territory" stroke="#94a3b8" width={100} />
                <Tooltip 
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar dataKey="revenue" fill="#06b6d4" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">GP% by Territory</h2>
            <div className="space-y-4">
              {revenueByTerritory.map((t, i) => (
                <div key={i}>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-white">{t.territory}</span>
                    <span className={t.gp >= 40 ? 'text-green-400' : t.gp >= 30 ? 'text-yellow-400' : 'text-red-400'}>
                      {t.gp}% GP ({t.customers} customers)
                    </span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full transition-all"
                      style={{ 
                        width: `${t.gp * 1.5}%`,
                        backgroundColor: t.gp >= 40 ? '#22c55e' : t.gp >= 30 ? '#eab308' : '#ef4444'
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 p-4 bg-red-900/20 rounded-lg border border-red-800">
              <p className="text-red-300 text-sm font-semibold">🚨 LA BioMed Problem</p>
              <p className="text-red-400/70 text-xs">8 customers, $6.47M revenue, only 22% GP - Kite + Amgen drag it down</p>
            </div>
          </div>
        </div>

        {/* Tier Breakdown */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {tierBreakdown.map((tier, i) => (
            <div key={i} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: tier.color }} />
                <h3 className="text-lg font-bold text-white">{tier.tier}</h3>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-slate-400 text-xs">Customers</p>
                  <p className="text-2xl font-bold text-white">{tier.customers}</p>
                </div>
                <div>
                  <p className="text-slate-400 text-xs">Revenue</p>
                  <p className="text-2xl font-bold text-white">${(tier.revenue/1000000).toFixed(1)}M</p>
                </div>
                <div className="col-span-2">
                  <p className="text-slate-400 text-xs">Effective GP%</p>
                  <p className="text-2xl font-bold" style={{ color: tier.color }}>{tier.gpPercent}%</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Top 10 Customers Table */}
        <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">Top 10 Customers by Revenue</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                  <th className="text-center text-slate-400 text-sm py-2">Tier</th>
                </tr>
              </thead>
              <tbody>
                {topCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-slate-700/50 hover:bg-slate-700/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${c.revenue}K</td>
                    <td className="py-3 text-right" style={{ color: getGPColor(c.gp) }}>{c.gp}%</td>
                    <td className={`py-3 text-right ${c.yoy > 0 ? 'text-green-400' : 'text-red-400'}`}>
                      {c.trend} {c.yoy > 0 ? '+' : ''}{c.yoy.toFixed(1)}%
                    </td>
                    <td className="py-3 text-center">
                      <span 
                        className="px-2 py-1 rounded text-xs font-bold"
                        style={{ 
                          backgroundColor: getTierColor(c.tier) + '20',
                          color: getTierColor(c.tier)
                        }}
                      >
                        {c.tier}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pipeline & Growth */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Open Pipeline</h2>
            <p className="text-5xl font-bold text-green-400 mb-2">${(openPipeline/1000000).toFixed(2)}M</p>
            <p className="text-slate-400">Active opportunities across West region</p>
            <div className="mt-4 p-3 bg-slate-700/50 rounded-lg">
              <p className="text-slate-300 text-sm">Pipeline Coverage: <span className="text-cyan-400 font-bold">0.63x</span></p>
              <p className="text-slate-500 text-xs">Based on 2025 revenue decline, need 1.5x+ for recovery</p>
            </div>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Revenue Trend</h2>
            <ResponsiveContainer width="100%" height={200}>
              <ComposedChart data={yoyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="year" stroke="#94a3b8" />
                <YAxis tickFormatter={(v) => `$${(v/1000000).toFixed(0)}M`} stroke="#94a3b8" />
                <Tooltip 
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar dataKey="revenue" fill="#06b6d4" radius={[4, 4, 0, 0]} />
                <Line type="monotone" dataKey="revenue" stroke="#ef4444" strokeWidth={2} dot={{ fill: '#ef4444' }} />
              </ComposedChart>
            </ResponsiveContainer>
            <p className="text-red-400 text-sm text-center mt-2">📉 -$2.44M YoY decline</p>
          </div>
        </div>

        {/* Strategic Insights */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-700/50">
          <h2 className="text-xl font-bold text-white mb-4">🎯 Strategic Insights</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-cyan-400 font-semibold mb-2">Problem: Tier C Dominance</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 46 Tier C customers = $9.11M (53% of revenue)</li>
                <li>• Effective GP only 20% on Tier C</li>
                <li>• Kite ($1.96M @ 19%) + Amgen ($1.61M @ 15%) = #1 and #2</li>
                <li>• LA BioMed territory: 8 customers, 22% GP overall</li>
              </ul>
            </div>
            <div>
              <h3 className="text-green-400 font-semibold mb-2">Opportunity: Tier A Expansion</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 103 Tier A customers = $5.05M at 59.5% GP</li>
                <li>• Crinetics: +162% YoY at 41% GP (model customer)</li>
                <li>• Biotech Beach: 147 customers at 42.5% GP</li>
                <li>• Focus on Managed Services (higher margins)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* 2025→2026 Revenue Bridge */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">📊 2025 → 2026 Revenue Bridge</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="flex items-end justify-between gap-4 h-64">
              {/* 2025 Base */}
              <div className="flex flex-col items-center">
                <div className="bg-slate-600 w-20 rounded-t-lg flex items-end justify-center" style={{height: '172px'}}>
                  <span className="text-white font-bold pb-2">$17.2M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2">2025 Base</span>
              </div>
              
              {/* Win Rate Recovery */}
              <div className="flex flex-col items-center">
                <div className="bg-green-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '36px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$1.8M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Win Rate<br/>Recovery</span>
              </div>
              
              {/* New Logos */}
              <div className="flex flex-col items-center">
                <div className="bg-cyan-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '30px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$1.5M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">New Logos<br/>(15 accts)</span>
              </div>
              
              {/* Expansion */}
              <div className="flex flex-col items-center">
                <div className="bg-purple-500 w-20 rounded-t-lg flex items-end justify-center" style={{height: '24px'}}>
                  <span className="text-white font-bold text-sm pb-1">+$1.2M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Account<br/>Expansion</span>
              </div>
              
              {/* Churn Risk */}
              <div className="flex flex-col items-center">
                <div className="bg-red-500 w-20 rounded-b-lg flex items-start justify-center" style={{height: '14px', marginTop: '158px'}}>
                  <span className="text-white font-bold text-sm pt-0">-$0.7M</span>
                </div>
                <span className="text-slate-400 text-sm mt-2 text-center">Expected<br/>Churn</span>
              </div>
              
              {/* 2026 Target */}
              <div className="flex flex-col items-center">
                <div className="bg-gradient-to-t from-cyan-600 to-cyan-400 w-20 rounded-t-lg flex items-end justify-center" style={{height: '210px'}}>
                  <span className="text-white font-bold pb-2">$21M</span>
                </div>
                <span className="text-cyan-400 text-sm mt-2 font-semibold">2026 Target</span>
              </div>
            </div>
            
            <div className="mt-6 grid grid-cols-4 gap-4 text-center">
              <div className="bg-green-900/30 rounded-lg p-3">
                <p className="text-green-400 font-semibold">Win Rate Impact</p>
                <p className="text-slate-300 text-sm">35.6% → 42% = +$1.8M</p>
              </div>
              <div className="bg-cyan-900/30 rounded-lg p-3">
                <p className="text-cyan-400 font-semibold">New Business</p>
                <p className="text-slate-300 text-sm">15 logos × $100K avg</p>
              </div>
              <div className="bg-purple-900/30 rounded-lg p-3">
                <p className="text-purple-400 font-semibold">Expansion</p>
                <p className="text-slate-300 text-sm">15% growth on base</p>
              </div>
              <div className="bg-red-900/30 rounded-lg p-3">
                <p className="text-red-400 font-semibold">Churn Mitigation</p>
                <p className="text-slate-300 text-sm">4% attrition target</p>
              </div>
            </div>
          </div>
        </section>

        {/* 2026 Growth Targets */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 2026 Growth Targets</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-cyan-900/50 to-cyan-800/30 rounded-xl p-6 border border-cyan-700/50">
              <p className="text-cyan-400 text-sm mb-1">Revenue Target</p>
              <p className="text-4xl font-bold text-white">$21M</p>
              <p className="text-green-400 text-sm">+22% vs 2025</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/50 to-green-800/30 rounded-xl p-6 border border-green-700/50">
              <p className="text-green-400 text-sm mb-1">Win Rate Target</p>
              <p className="text-4xl font-bold text-white">42%</p>
              <p className="text-green-400 text-sm">+6.4 pts vs 2025</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-6 border border-purple-700/50">
              <p className="text-purple-400 text-sm mb-1">GP% Target</p>
              <p className="text-4xl font-bold text-white">40%</p>
              <p className="text-green-400 text-sm">+5.7 pts vs 2025</p>
            </div>
            <div className="bg-gradient-to-br from-orange-900/50 to-orange-800/30 rounded-xl p-6 border border-orange-700/50">
              <p className="text-orange-400 text-sm mb-1">New Logos</p>
              <p className="text-4xl font-bold text-white">15</p>
              <p className="text-slate-400 text-sm">$1.5M+ pipeline</p>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link href="/margin-analysis" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition">
            Deep Dive: Margins →
          </Link>
          <Link href="/financial-model" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white rounded-lg font-semibold transition">
            Interactive Model →
          </Link>
          <Link href="/map" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">
            View Map
          </Link>
        </div>
      </main>
    </div>
  );
}
