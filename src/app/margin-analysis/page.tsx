'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ComposedChart, Line } from 'recharts';

// CORRECTED 2025 DATA - All 160 West customers
// Problem customers - TOP revenue, LOW margin (Tier C dominance)
const problemCustomers = [
  { name: 'Kite Pharma', revenue: 1962685, gp: 19.1, gpDollars: 374141, hours: 14313, trend: '+94%', territory: 'LA BioMed' },
  { name: 'Amgen Inc.', revenue: 1610100, gp: 14.6, gpDollars: 234846, hours: 11571, trend: '-9%', territory: 'LA BioMed' },
  { name: 'Enovis Corp', revenue: 710560, gp: 11.0, gpDollars: 78502, hours: 4088, trend: '+349%', territory: 'Biotech Beach' },
  { name: 'Edwards Lifesciences', revenue: 671546, gp: 28.6, gpDollars: 192155, hours: 5549, trend: '-21%', territory: 'LA BioMed' },
  { name: 'Kite (Gilead Sub)', revenue: 308843, gp: 6.5, gpDollars: 19981, hours: 2325, trend: '-75%', territory: 'LA BioMed' },
  { name: 'Pfizer', revenue: 453371, gp: 27.0, gpDollars: 122605, hours: 4180, trend: '-46%', territory: 'LA BioMed' },
];

// High-margin stars (Tier A examples)
const starCustomers = [
  { name: 'Crinetics', revenue: 911795, gp: 40.9, gpDollars: 372851, hours: 6126, trend: '+162%', territory: 'Biotech Beach' },
  { name: 'Arrowhead', revenue: 551694, gp: 40.1, gpDollars: 221415, hours: 3326, trend: '+14%', territory: 'LA BioMed' },
  { name: 'Corcept', revenue: 481861, gp: 41.2, gpDollars: 198650, hours: 3042, trend: '+27%', territory: 'Biotech Bay' },
  { name: 'Tarsus', revenue: 366193, gp: 41.5, gpDollars: 152101, hours: 2295, trend: '+191%', territory: 'Biotech Beach' },
  { name: 'Eikon', revenue: 189450, gp: 43.1, gpDollars: 81611, hours: 1008, trend: '-29%', territory: 'Biotech Beach' },
  { name: 'BioMarin', revenue: 133018, gp: 72.1, gpDollars: 95886, hours: 735, trend: '-43%', territory: 'Biotech Bay' },
];

// Territory comparison - REAL DATA
const territoryComparison = [
  { territory: 'Biotech Beach', revenue: 9550000, gp: 42.5, customers: 147 },
  { territory: 'Biotech Bay', revenue: 790000, gp: 41.8, customers: 4 },
  { territory: 'LA BioMed', revenue: 6470000, gp: 22.0, customers: 8 },
  { territory: 'Cascadia', revenue: 370000, gp: 24.5, customers: 1 },
];

// Tier analysis
const tierData = [
  { tier: 'Tier A (≥40%)', customers: 103, revenue: 5050000, gpDollars: 3005000, effectiveGP: 59.5, color: '#22c55e' },
  { tier: 'Tier B (30-40%)', customers: 11, revenue: 3030000, gpDollars: 1076000, effectiveGP: 35.5, color: '#eab308' },
  { tier: 'Tier C (<30%)', customers: 46, revenue: 9110000, gpDollars: 1822000, effectiveGP: 20.0, color: '#ef4444' },
];

const COLORS = ['#22c55e', '#eab308', '#ef4444', '#06b6d4'];

const getGPColor = (gp: number) => {
  if (gp >= 40) return '#22c55e';
  if (gp >= 30) return '#eab308';
  return '#ef4444';
};

export default function MarginAnalysis() {
  const totalProblemRevenue = problemCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalProblemGP = problemCustomers.reduce((sum, c) => sum + c.gpDollars, 0);
  const problemGPPercent = (totalProblemGP / totalProblemRevenue * 100).toFixed(1);
  
  const totalStarRevenue = starCustomers.reduce((sum, c) => sum + c.revenue, 0);
  const totalStarGP = starCustomers.reduce((sum, c) => sum + c.gpDollars, 0);
  const starGPPercent = (totalStarGP / totalStarRevenue * 100).toFixed(1);

  // If problem customers had 40% GP instead of current ~17%
  const potentialGPGain = totalProblemRevenue * 0.40 - totalProblemGP;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <h1 className="text-4xl font-bold text-white mb-2">Margin Analysis</h1>
        <p className="text-slate-400 mb-2">Root cause: Tier C customers (46) generate 53% of revenue at 20% GP</p>
        <p className="text-xs text-slate-500 mb-8">Source: customer_ltv_corrected_2025.xlsx | 160 West customers</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">West Blended GP</p>
            <p className="text-4xl font-bold text-red-400">34.3%</p>
            <p className="text-slate-500 text-sm mt-1">$5.90M / $17.19M</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Tier C Revenue</p>
            <p className="text-4xl font-bold text-white">$9.11M</p>
            <p className="text-slate-500 text-sm mt-1">53% of West total</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Tier C GP%</p>
            <p className="text-4xl font-bold text-red-400">20.0%</p>
            <p className="text-slate-500 text-sm mt-1">vs 40% target</p>
          </div>
          <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
            <p className="text-green-400 text-sm mb-1">Potential GP Gain</p>
            <p className="text-4xl font-bold text-green-400">${(potentialGPGain / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm mt-1">if problems hit 40%</p>
          </div>
        </div>

        {/* Problem Accounts */}
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🚨 Problem Accounts (Tier C, High Revenue)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-red-800/50">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP $</th>
                  <th className="text-right text-slate-400 text-sm py-2">Hours</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                </tr>
              </thead>
              <tbody>
                {problemCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-red-800/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${(c.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-red-400 font-bold">{c.gp}%</td>
                    <td className="py-3 text-right text-slate-300">${(c.gpDollars / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-slate-400">{c.hours.toLocaleString()}</td>
                    <td className={`py-3 text-right ${c.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{c.trend}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-red-700">
                  <td className="py-3 text-red-400 font-bold">Total</td>
                  <td></td>
                  <td className="py-3 text-right text-cyan-400 font-bold">${(totalProblemRevenue / 1000000).toFixed(2)}M</td>
                  <td className="py-3 text-right text-red-400 font-bold">{problemGPPercent}%</td>
                  <td className="py-3 text-right text-slate-300 font-bold">${(totalProblemGP / 1000).toFixed(0)}K</td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Star Accounts */}
        <div className="bg-green-900/20 rounded-xl p-6 border border-green-700/50 mb-8">
          <h2 className="text-xl font-bold text-green-400 mb-4">⭐ Star Accounts (Tier A - Model Customers)</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-green-800/50">
                  <th className="text-left text-slate-400 text-sm py-2">Customer</th>
                  <th className="text-left text-slate-400 text-sm py-2">Territory</th>
                  <th className="text-right text-slate-400 text-sm py-2">Revenue</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP%</th>
                  <th className="text-right text-slate-400 text-sm py-2">GP $</th>
                  <th className="text-right text-slate-400 text-sm py-2">Hours</th>
                  <th className="text-right text-slate-400 text-sm py-2">YoY</th>
                </tr>
              </thead>
              <tbody>
                {starCustomers.map((c, i) => (
                  <tr key={i} className="border-b border-green-800/30">
                    <td className="py-3 text-white font-medium">{c.name}</td>
                    <td className="py-3 text-slate-400 text-sm">{c.territory}</td>
                    <td className="py-3 text-right text-cyan-400">${(c.revenue / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-green-400 font-bold">{c.gp}%</td>
                    <td className="py-3 text-right text-slate-300">${(c.gpDollars / 1000).toFixed(0)}K</td>
                    <td className="py-3 text-right text-slate-400">{c.hours.toLocaleString()}</td>
                    <td className={`py-3 text-right ${c.trend.startsWith('+') ? 'text-green-400' : 'text-red-400'}`}>{c.trend}</td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="border-t border-green-700">
                  <td className="py-3 text-green-400 font-bold">Total</td>
                  <td></td>
                  <td className="py-3 text-right text-cyan-400 font-bold">${(totalStarRevenue / 1000000).toFixed(2)}M</td>
                  <td className="py-3 text-right text-green-400 font-bold">{starGPPercent}%</td>
                  <td className="py-3 text-right text-slate-300 font-bold">${(totalStarGP / 1000).toFixed(0)}K</td>
                  <td colSpan={2}></td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        {/* Territory Comparison */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">GP% by Territory</h2>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={territoryComparison} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis type="number" domain={[0, 50]} tickFormatter={(v) => `${v}%`} stroke="#94a3b8" />
                <YAxis type="category" dataKey="territory" stroke="#94a3b8" width={100} />
                <Tooltip 
                  formatter={(value) => [`${Number(value || 0)}%`, 'GP%']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
                <Bar 
                  dataKey="gp" 
                  radius={[0, 4, 4, 0]}
                  label={{ position: 'right', fill: '#fff', formatter: (v) => `${v}%` }}
                >
                  {territoryComparison.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={getGPColor(entry.gp)} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <h2 className="text-xl font-bold text-white mb-4">Tier Distribution (Revenue)</h2>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={tierData}
                  cx="50%"
                  cy="50%"
                  innerRadius={50}
                  outerRadius={80}
                  paddingAngle={2}
                  dataKey="revenue"
                  label={({ name, value }) => `${String(name || '').split(' ')[1] || ''}`}
                  labelLine={false}
                >
                  {tierData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(2)}M`, 'Revenue']}
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                />
              </PieChart>
            </ResponsiveContainer>
            <div className="flex justify-center gap-4 mt-2">
              {tierData.map((t, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: t.color }} />
                  <span className="text-slate-400">{t.tier.split(' ')[1]}: {t.customers}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* The Math */}
        <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border border-cyan-700/50 mb-8">
          <h2 className="text-xl font-bold text-white mb-4">📊 The Math: Why West GP Is Low</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-slate-400 mb-2">Tier C Revenue</p>
              <p className="text-4xl font-bold text-red-400">$9.11M</p>
              <p className="text-slate-500 text-sm">53% of total at 20% GP</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Tier A Revenue</p>
              <p className="text-4xl font-bold text-green-400">$5.05M</p>
              <p className="text-slate-500 text-sm">29% of total at 59.5% GP</p>
            </div>
            <div className="text-center">
              <p className="text-slate-400 mb-2">Result</p>
              <p className="text-4xl font-bold text-yellow-400">34.3%</p>
              <p className="text-slate-500 text-sm">Blended GP margin</p>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-800/50 rounded-lg">
            <p className="text-cyan-300 font-semibold">The Fix:</p>
            <p className="text-slate-300 text-sm mt-1">
              Either (1) renegotiate Tier C contracts for higher margins, or (2) shift revenue mix toward Tier A customers.
              Moving just $2M from Tier C to Tier A service mix would add ~$800K in GP annually.
            </p>
          </div>
        </div>

        {/* LA BioMed Deep Dive */}
        <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50 mb-8">
          <h2 className="text-xl font-bold text-red-400 mb-4">🔍 LA BioMed: The Problem Territory</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <p className="text-slate-300 mb-4">8 customers generate $6.47M at only 22% GP — the worst territory margin.</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="text-white">Kite Pharma:</span> $1.96M @ 19.1% GP (biggest customer!)</li>
                <li>• <span className="text-white">Amgen:</span> $1.61M @ 14.6% GP (declining -9% YoY)</li>
                <li>• <span className="text-white">Edwards:</span> $672K @ 28.6% GP (declining -21%)</li>
                <li>• <span className="text-white">Kite/Gilead:</span> $309K @ 6.5% GP (!)</li>
              </ul>
            </div>
            <div>
              <p className="text-slate-300 mb-4">Bright spot in LA BioMed:</p>
              <ul className="text-slate-400 text-sm space-y-2">
                <li>• <span className="text-green-400">Arrowhead:</span> $552K @ 40.1% GP (+14% YoY)</li>
                <li>• <span className="text-yellow-400">STAAR Surgical:</span> $496K @ 30.9% GP</li>
              </ul>
              <p className="text-slate-500 text-sm mt-4">
                Arrowhead shows high-margin work IS possible in LA BioMed — need to replicate across territory.
              </p>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <Link href="/dashboard" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-semibold transition">
            ← Dashboard
          </Link>
          <Link href="/la-deep-dive" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition">
            LA BioMed Deep Dive →
          </Link>
        </div>
      </main>
    </div>
  );
}
