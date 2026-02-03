'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line, Area } from 'recharts';

const problemCustomers = [
  { name: 'Gilead Sciences', revenue: 2130000, gp: 22.0, hours: 19090, rate: 112 },
  { name: 'Kite Pharma', revenue: 2080000, gp: 19.9, hours: 13610, rate: 153 },
  { name: 'Amgen Inc.', revenue: 1750000, gp: 21.1, hours: 11571, rate: 151 },
  { name: 'Enovis Corp', revenue: 773000, gp: 18.3, hours: 4087, rate: 189 },
];

const regionComparison = [
  { region: 'West Region', gp: 36.5, target: 45, benchmark: 51.5 },
  { region: 'East Region', gp: 51.5, target: 45, benchmark: 51.5 },
  { region: 'Industry Avg', gp: 48.0, target: 45, benchmark: 51.5 },
];

const serviceMixData = [
  { name: 'Staffing CBA', revenue: 22100000, timeBased: 97, managedSvcs: 3, margin: 30 },
  { name: 'DocuSign CBA', revenue: 2000000, timeBased: 0, managedSvcs: 100, margin: 65 },
  { name: 'Box CBA', revenue: 1900000, timeBased: 0, managedSvcs: 100, margin: 65 },
  { name: 'PTC CBA', revenue: 1500000, timeBased: 2, managedSvcs: 98, margin: 70 },
];

const eastHighMarginExamples = [
  { name: 'PTC Inc.', revenue: 1270000, gp: 96.5, type: 'Managed Services' },
  { name: 'Abbott Labs', revenue: 1940000, gp: 64.3, type: 'Managed Services' },
];

const COLORS = ['#ef4444', '#f97316', '#eab308', '#22c55e', '#06b6d4', '#8b5cf6'];

export default function MarginAnalysis() {
  const totalProblemRevenue = problemCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalHours = problemCustomers.reduce((sum, c) => sum + c.hours, 0);
  const avgGP = problemCustomers.reduce((sum, c) => sum + c.gp, 0) / problemCustomers.length;
  const missingMargin = totalProblemRevenue * (0.45 - 0.20); // Target 45% vs actual ~20%

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex gap-6">
            <Link href="/executive-summary" className="text-slate-400 hover:text-white">Summary</Link>
            <Link href="/map" className="text-slate-400 hover:text-white">Map</Link>
            <Link href="/ltv" className="text-slate-400 hover:text-white">LTV</Link>
            <Link href="/churn-signals" className="text-slate-400 hover:text-white">Churn</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Margin Analysis</h1>
        <p className="text-slate-400 mb-8">Root cause analysis: 15-point GP gap between West (36.5%) and East (51.5%)</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">GP Gap</p>
            <p className="text-4xl font-bold text-red-400">15 pts</p>
            <p className="text-slate-500 text-sm mt-1">West vs East</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Problem Account Revenue</p>
            <p className="text-4xl font-bold text-white">${(totalProblemRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm mt-1">4 accounts</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Avg GP% (Problem)</p>
            <p className="text-4xl font-bold text-yellow-400">{avgGP.toFixed(1)}%</p>
            <p className="text-slate-500 text-sm mt-1">vs 45% target</p>
          </div>
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">Missing Margin</p>
            <p className="text-4xl font-bold text-red-400">${(missingMargin / 1000000).toFixed(2)}M</p>
            <p className="text-slate-500 text-sm mt-1">annual impact</p>
          </div>
        </div>

        {/* Problem Customers Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚨 Problem Customers</h2>
          <p className="text-slate-400 mb-6">These 4 accounts represent ~32% of West revenue at only ~20% GP, dragging down the entire region.</p>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Customer Cards */}
            <div className="space-y-4">
              {problemCustomers.map((customer, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-red-700/30 hover:border-red-500/50 transition-all">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{customer.name}</h3>
                      <p className="text-slate-400">${(customer.revenue / 1000000).toFixed(2)}M revenue</p>
                    </div>
                    <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm font-semibold">
                      {customer.gp}% GP
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Labor Hours</p>
                      <p className="text-white font-semibold">{customer.hours.toLocaleString()} hrs</p>
                    </div>
                    <div>
                      <p className="text-slate-500">Blended Rate</p>
                      <p className="text-yellow-400 font-semibold">${customer.rate}/hr</p>
                    </div>
                  </div>
                  <div className="mt-4 pt-4 border-t border-slate-700">
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-red-500 to-yellow-500"
                        style={{ width: `${customer.gp}%` }}
                      ></div>
                    </div>
                    <p className="text-xs text-slate-500 mt-1">GP% (target: 45%)</p>
                  </div>
                </div>
              ))}
            </div>

            {/* GP Comparison Chart */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">GP% by Customer</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={problemCustomers} layout="vertical">
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis type="number" domain={[0, 50]} stroke="#94a3b8" />
                  <YAxis type="category" dataKey="name" width={100} stroke="#94a3b8" tick={{ fontSize: 12 }} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    labelStyle={{ color: '#f1f5f9' }}
                  />
                  <Bar dataKey="gp" fill="#ef4444" name="GP%" radius={[0, 4, 4, 0]}>
                    {problemCustomers.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.gp < 20 ? '#ef4444' : '#f97316'} />
                    ))}
                  </Bar>
                  {/* Target line */}
                </BarChart>
              </ResponsiveContainer>
              <div className="flex items-center gap-2 mt-2 text-sm text-slate-400">
                <div className="w-3 h-0.5 bg-cyan-500"></div>
                <span>Target: 45%</span>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Regional GP% Comparison</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={regionComparison}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="region" stroke="#94a3b8" />
                  <YAxis domain={[0, 60]} stroke="#94a3b8" />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    labelStyle={{ color: '#f1f5f9' }}
                  />
                  <Bar dataKey="gp" fill="#06b6d4" name="Actual GP%" radius={[4, 4, 0, 0]}>
                    <Cell fill="#ef4444" />
                    <Cell fill="#22c55e" />
                    <Cell fill="#eab308" />
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Why East Outperforms</h3>
              <div className="space-y-4">
                <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
                  <h4 className="text-green-400 font-semibold mb-2">High-Margin East Accounts</h4>
                  {eastHighMarginExamples.map((ex, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-green-900/30 last:border-0">
                      <span className="text-white">{ex.name}</span>
                      <div className="text-right">
                        <span className="text-green-400 font-bold">{ex.gp}% GP</span>
                        <span className="text-slate-500 text-sm ml-2">({ex.type})</span>
                      </div>
                    </div>
                  ))}
                </div>
                <p className="text-slate-300">
                  PTC and Abbott are <span className="text-cyan-400 font-semibold">almost entirely Managed Services</span> — fixed-fee arrangements with predictable costs and high margins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Service Mix Analysis */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📈 Service Mix Analysis</h2>
          
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 mb-6">The <span className="text-red-400 font-semibold">Staffing CBA ($22.1M)</span> dominates West region revenue — this is structurally low-margin work.</p>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-3 px-4 text-left text-slate-400 font-semibold">Practice Area</th>
                    <th className="py-3 px-4 text-right text-slate-400 font-semibold">Revenue</th>
                    <th className="py-3 px-4 text-right text-slate-400 font-semibold">Time-Based</th>
                    <th className="py-3 px-4 text-right text-slate-400 font-semibold">Managed Svcs</th>
                    <th className="py-3 px-4 text-right text-slate-400 font-semibold">Implied Margin</th>
                  </tr>
                </thead>
                <tbody>
                  {serviceMixData.map((service, idx) => (
                    <tr key={idx} className="border-b border-slate-800">
                      <td className="py-3 px-4 text-white font-medium">{service.name}</td>
                      <td className="py-3 px-4 text-right text-slate-300">${(service.revenue / 1000000).toFixed(1)}M</td>
                      <td className="py-3 px-4 text-right">
                        <span className={service.timeBased > 50 ? 'text-red-400' : 'text-slate-400'}>
                          {service.timeBased}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={service.managedSvcs > 50 ? 'text-green-400' : 'text-slate-400'}>
                          {service.managedSvcs}%
                        </span>
                      </td>
                      <td className="py-3 px-4 text-right">
                        <span className={`px-2 py-1 rounded ${service.margin > 50 ? 'bg-green-500/20 text-green-400' : 'bg-red-500/20 text-red-400'}`}>
                          ~{service.margin}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Recommendations */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Recommendations</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl p-6 border border-red-700/30">
              <h3 className="text-lg font-bold text-red-400 mb-4">Immediate Actions (Q1 2026)</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400">1.</span>
                  <span><strong>Rate review</strong> for Gilead, Amgen, Kite, Enovis — target 15% rate increase at next renewal</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">2.</span>
                  <span><strong>Scope creep audit</strong> — review last 6 months of hours vs. contracted scope</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400">3.</span>
                  <span>Shift T&M to <strong>fixed-fee</strong> where possible</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-lg font-bold text-cyan-400 mb-4">Strategic Shifts (2026)</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">1.</span>
                  <span><strong>Managed Services Push</strong> — target 25% of new West revenue as managed services</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">2.</span>
                  <span><strong>Customer Profitability Tiering</strong> — A-tier: &gt;45% GP, B-tier: 30-45%, C-tier: &lt;30%</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">3.</span>
                  <span><strong>New Account Qualification</strong> — minimum 40% GP threshold for new business</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        <div className="mt-8 flex gap-4">
          <Link href="/ltv" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Customer LTV →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
