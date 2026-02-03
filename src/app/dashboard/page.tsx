'use client';

import Link from 'next/link';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, ComposedChart, Line, Area, Treemap } from 'recharts';

// Revenue by region data
const revenueByRegion = [
  { region: 'NorCal (Bay Area)', revenue: 8200000, gp: 42.5, customers: 28 },
  { region: 'SoCal (San Diego)', revenue: 7800000, gp: 28.2, customers: 22 },
  { region: 'SoCal (LA)', revenue: 3100000, gp: 24.8, customers: 8 },
  { region: 'PNW (Seattle)', revenue: 2400000, gp: 48.3, customers: 12 },
  { region: 'Other West', revenue: 1200000, gp: 45.1, customers: 6 },
];

// GP% heatmap data by customer
const gpHeatmapData = [
  { name: 'PTC Inc.', gp: 96.5, revenue: 1270, tier: 'Elite' },
  { name: 'Abbott Labs', gp: 64.3, revenue: 1940, tier: 'A-Tier' },
  { name: 'Neurocrine', gp: 48.0, revenue: 890, tier: 'A-Tier' },
  { name: 'Genentech', gp: 42.0, revenue: 1800, tier: 'B-Tier' },
  { name: 'BioMarin', gp: 38.5, revenue: 720, tier: 'B-Tier' },
  { name: 'Jazz Pharma', gp: 35.2, revenue: 820, tier: 'B-Tier' },
  { name: 'Vertex', gp: 33.8, revenue: 680, tier: 'B-Tier' },
  { name: 'Gilead', gp: 22.0, revenue: 2130, tier: 'C-Tier' },
  { name: 'Amgen', gp: 21.1, revenue: 1750, tier: 'C-Tier' },
  { name: 'Kite Pharma', gp: 19.9, revenue: 2080, tier: 'C-Tier' },
  { name: 'Enovis', gp: 18.3, revenue: 773, tier: 'C-Tier' },
];

// Practice area breakdown
const practiceAreaData = [
  { name: 'Staffing CBA', revenue: 22100000, margin: 30, color: '#ef4444' },
  { name: 'DocuSign CBA', revenue: 2000000, margin: 65, color: '#22c55e' },
  { name: 'Box CBA', revenue: 1900000, margin: 65, color: '#06b6d4' },
  { name: 'PTC CBA', revenue: 1500000, margin: 70, color: '#8b5cf6' },
  { name: 'QA Consulting', revenue: 1800000, margin: 52, color: '#eab308' },
  { name: 'Validation', revenue: 1400000, margin: 48, color: '#f97316' },
];

// Monthly revenue trend
const monthlyTrend = [
  { month: 'Jan', revenue: 4200, gp: 38.2 },
  { month: 'Feb', revenue: 4100, gp: 37.8 },
  { month: 'Mar', revenue: 4500, gp: 39.1 },
  { month: 'Apr', revenue: 4300, gp: 36.5 },
  { month: 'May', revenue: 4800, gp: 38.9 },
  { month: 'Jun', revenue: 5100, gp: 40.2 },
  { month: 'Jul', revenue: 4600, gp: 37.4 },
  { month: 'Aug', revenue: 4900, gp: 38.8 },
  { month: 'Sep', revenue: 5200, gp: 41.1 },
  { month: 'Oct', revenue: 5000, gp: 39.5 },
  { month: 'Nov', revenue: 4700, gp: 38.0 },
  { month: 'Dec', revenue: 4400, gp: 36.8 },
];

const COLORS = ['#ef4444', '#22c55e', '#06b6d4', '#8b5cf6', '#eab308', '#f97316'];

const getGPColor = (gp: number) => {
  if (gp >= 50) return '#22c55e';
  if (gp >= 40) return '#06b6d4';
  if (gp >= 30) return '#eab308';
  return '#ef4444';
};

const getTierColor = (tier: string) => {
  switch (tier) {
    case 'Elite': return '#22c55e';
    case 'A-Tier': return '#06b6d4';
    case 'B-Tier': return '#eab308';
    case 'C-Tier': return '#ef4444';
    default: return '#6b7280';
  }
};

export default function Dashboard() {
  const totalRevenue = revenueByRegion.reduce((sum, r) => sum + r.revenue, 0);
  const avgGP = revenueByRegion.reduce((sum, r) => sum + r.gp * r.revenue, 0) / totalRevenue;
  const totalCustomers = revenueByRegion.reduce((sum, r) => sum + r.customers, 0);

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
        <h1 className="text-4xl font-bold text-white mb-2">Financial Dashboard</h1>
        <p className="text-slate-400 mb-8">Western Region performance overview with drill-down analytics</p>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Revenue (West)</p>
            <p className="text-4xl font-bold text-cyan-400">${(totalRevenue / 1000000).toFixed(1)}M</p>
            <p className="text-slate-500 text-sm">FY 2025</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Avg GP%</p>
            <p className="text-4xl font-bold text-yellow-400">{avgGP.toFixed(1)}%</p>
            <p className="text-slate-500 text-sm">vs 51.5% East</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Active Customers</p>
            <p className="text-4xl font-bold text-white">{totalCustomers}</p>
            <p className="text-slate-500 text-sm">across West</p>
          </div>
          <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
            <p className="text-red-400 text-sm mb-1">Margin Gap</p>
            <p className="text-4xl font-bold text-red-400">$1.7M</p>
            <p className="text-slate-500 text-sm">potential recovery</p>
          </div>
        </div>

        {/* Revenue by Region */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📍 Revenue by Region</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Chart */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <ResponsiveContainer width="100%" height={350}>
                <ComposedChart data={revenueByRegion}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="region" stroke="#94a3b8" tick={{ fontSize: 11 }} angle={-20} textAnchor="end" height={80} />
                  <YAxis yAxisId="left" stroke="#94a3b8" tickFormatter={(val) => `$${val/1000000}M`} />
                  <YAxis yAxisId="right" orientation="right" stroke="#22c55e" domain={[0, 60]} />
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    labelStyle={{ color: '#f1f5f9' }}
                    formatter={(value, name) => {
                      const v = Number(value) || 0;
                      return [
                        name === 'revenue' ? `$${(v/1000000).toFixed(2)}M` : `${v}%`,
                        name === 'revenue' ? 'Revenue' : 'GP%'
                      ];
                    }}
                  />
                  <Legend />
                  <Bar yAxisId="left" dataKey="revenue" fill="#06b6d4" name="Revenue" radius={[4, 4, 0, 0]} />
                  <Line yAxisId="right" type="monotone" dataKey="gp" stroke="#22c55e" strokeWidth={3} name="GP%" dot={{ r: 5 }} />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Region Cards */}
            <div className="space-y-4">
              {revenueByRegion.map((region, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="text-white font-semibold">{region.region}</h3>
                      <p className="text-slate-400 text-sm">{region.customers} customers</p>
                    </div>
                    <div className="text-right">
                      <p className="text-cyan-400 font-bold">${(region.revenue / 1000000).toFixed(2)}M</p>
                      <p className={`text-sm font-semibold ${region.gp >= 40 ? 'text-green-400' : region.gp >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {region.gp}% GP
                      </p>
                    </div>
                  </div>
                  <div className="mt-2 h-2 bg-slate-700 rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${(region.revenue / totalRevenue) * 100}%`,
                        backgroundColor: getGPColor(region.gp)
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* GP% Heatmap */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🌡️ GP% Heatmap by Customer</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              {['Elite (≥50%)', 'A-Tier (40-50%)', 'B-Tier (30-40%)', 'C-Tier (<30%)'].map((tier, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded" style={{ backgroundColor: [getTierColor('Elite'), getTierColor('A-Tier'), getTierColor('B-Tier'), getTierColor('C-Tier')][idx] }}></div>
                  <span className="text-slate-400 text-sm">{tier}</span>
                </div>
              ))}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {gpHeatmapData.sort((a, b) => b.gp - a.gp).map((customer, idx) => (
                <div 
                  key={idx} 
                  className="relative p-4 rounded-lg border transition-all hover:scale-105"
                  style={{ 
                    backgroundColor: `${getTierColor(customer.tier)}15`,
                    borderColor: `${getTierColor(customer.tier)}50`
                  }}
                >
                  <p className="text-white font-semibold text-sm truncate">{customer.name}</p>
                  <p className="text-2xl font-bold" style={{ color: getTierColor(customer.tier) }}>{customer.gp}%</p>
                  <p className="text-slate-400 text-xs">${(customer.revenue / 1000).toFixed(0)}K rev</p>
                  <div 
                    className="absolute top-2 right-2 w-2 h-2 rounded-full"
                    style={{ backgroundColor: getTierColor(customer.tier) }}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Practice Area Breakdown */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Practice Area Breakdown</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pie Chart */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <ResponsiveContainer width="100%" height={350}>
                <PieChart>
                  <Pie
                    data={practiceAreaData}
                    dataKey="revenue"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={120}
                    label={({ name, percent }) => `${(name || '').split(' ')[0]} ${((percent || 0) * 100).toFixed(0)}%`}
                    labelLine={{ stroke: '#94a3b8' }}
                  >
                    {practiceAreaData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                    formatter={(value) => [`$${(Number(value || 0)/1000000).toFixed(1)}M`, 'Revenue']}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            {/* Practice Area Cards */}
            <div className="space-y-3">
              {practiceAreaData.map((area, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-slate-700">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 rounded-full" style={{ backgroundColor: area.color }}></div>
                      <span className="text-white font-semibold">{area.name}</span>
                    </div>
                    <span className="text-cyan-400 font-bold">${(area.revenue / 1000000).toFixed(1)}M</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="flex-grow h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${area.margin}%`,
                          backgroundColor: area.margin >= 50 ? '#22c55e' : area.margin >= 40 ? '#eab308' : '#ef4444'
                        }}
                      ></div>
                    </div>
                    <span className={`text-sm font-semibold ${area.margin >= 50 ? 'text-green-400' : area.margin >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {area.margin}% margin
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Monthly Trend */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📈 Monthly Performance Trend</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={monthlyTrend}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="month" stroke="#94a3b8" />
                <YAxis yAxisId="left" stroke="#94a3b8" tickFormatter={(val) => `$${val}K`} />
                <YAxis yAxisId="right" orientation="right" stroke="#22c55e" domain={[30, 50]} />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569' }}
                  labelStyle={{ color: '#f1f5f9' }}
                />
                <Legend />
                <Area yAxisId="left" type="monotone" dataKey="revenue" fill="#06b6d4" fillOpacity={0.2} stroke="#06b6d4" strokeWidth={2} name="Revenue ($K)" />
                <Line yAxisId="right" type="monotone" dataKey="gp" stroke="#22c55e" strokeWidth={3} name="GP%" dot={{ r: 4 }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Quick Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 Key Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-cyan-400 font-bold mb-2">NorCal Leads Revenue</h3>
              <p className="text-slate-300 text-sm">Bay Area generates 36% of West revenue with healthiest margins (42.5% GP). Protect and grow.</p>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-orange-900/20 rounded-xl p-6 border border-red-700/30">
              <h3 className="text-red-400 font-bold mb-2">SoCal Margin Crisis</h3>
              <p className="text-slate-300 text-sm">San Diego + LA = 48% of revenue but only 26.8% blended GP. Four accounts drag down entire region.</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-700/30">
              <h3 className="text-green-400 font-bold mb-2">PNW Opportunity</h3>
              <p className="text-slate-300 text-sm">Seattle has best GP% (48.3%) but lowest revenue. Under-penetrated market with growth potential.</p>
            </div>
          </div>
        </section>

        <div className="mt-8 flex gap-4">
          <Link href="/margin-analysis" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Deep Dive: Margin Analysis →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
