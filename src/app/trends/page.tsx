'use client';

import Navigation from '@/components/Navigation';
import { LineChart, Line, BarChart, Bar, AreaChart, Area, ComposedChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// Data for Revenue & EGP Trend
const revenueData = [
  { year: '2022', revenue: 14.2, egp: 5.1, gpPercent: 36, type: 'actual' },
  { year: '2023', revenue: 16.8, egp: 6.4, gpPercent: 38, type: 'actual' },
  { year: '2024', revenue: 19.6, egp: 7.6, gpPercent: 39, type: 'actual' },
  { year: '2025', revenue: 17.19, egp: 5.9, gpPercent: 34.3, type: 'actual' },
  { year: '2026', revenue: 21.0, egp: 8.4, gpPercent: 40, type: 'target' },
];

// Data for Win Rate Trend
const winRateData = [
  { year: '2022', winRate: 38, type: 'actual' },
  { year: '2023', winRate: 42, type: 'actual' },
  { year: '2024', winRate: 40.1, type: 'actual' },
  { year: '2025', winRate: 35.6, type: 'actual' },
  { year: '2026', winRate: 42, type: 'target' },
];

// Data for Deal Size & EGP per Deal Growth
const dealSizeData = [
  { year: '2022', dealSize: 65, egpPerDeal: 23, type: 'actual' },
  { year: '2023', dealSize: 78, egpPerDeal: 30, type: 'actual' },
  { year: '2024', dealSize: 87, egpPerDeal: 37, type: 'actual' },
  { year: '2025', dealSize: 100, egpPerDeal: 44, type: 'actual' },
  { year: '2026', dealSize: 115, egpPerDeal: 46, type: 'target' },
];

// Data for Pipeline Coverage
const coverageData = [
  { year: '2022', coverage: 0.75 },
  { year: '2023', coverage: 0.85 },
  { year: '2024', coverage: 0.92 },
  { year: '2025', coverage: 0.82 },
  { year: '2026', coverage: 1.5, confidenceLow: 1.3, confidenceHigh: 1.7 },
];

// Data for Market Penetration by Region
const marketPenetrationData = [
  { year: '2022', bayArea: 12, sanDiego: 8, la: 6, seattle: 0 },
  { year: '2023', bayArea: 15, sanDiego: 10, la: 8, seattle: 0 },
  { year: '2024', bayArea: 18, sanDiego: 12, la: 10, seattle: 0.5 },
  { year: '2025', bayArea: 16, sanDiego: 11, la: 9, seattle: 0.3 },
  { year: '2026', bayArea: 22, sanDiego: 16, la: 14, seattle: 8 },
];

// Data for Customer Acquisition vs Churn
const customerData = [
  { year: '2022', newLogos: 12, churn: 3 },
  { year: '2023', newLogos: 15, churn: 2 },
  { year: '2024', newLogos: 18, churn: 4 },
  { year: '2025', newLogos: 14, churn: 6 },
  { year: '2026', newLogos: 24, churn: 3 },
];

export default function TrendsPage() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">Multi-Year Trend Analysis</h1>
          <p className="text-lg text-slate-300">
            Historical performance data (2022-2025) and 2026 targets for the Western Region
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="bg-slate-800 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">
              <span className="text-blue-400 font-semibold">Revenue</span> = GAAP recognized (billed)
            </span>
            <span className="bg-slate-800 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">
              <span className="text-cyan-400 font-semibold">Bookings</span> = contract value at close
            </span>
            <span className="bg-slate-800 px-3 py-1.5 rounded-full text-slate-300 border border-slate-700">
              <span className="text-green-400 font-semibold">EGP</span> = estimated gross profit
            </span>
          </div>
        </div>

        {/* Revenue & EGP Trend */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">GAAP Revenue & EGP Trend (2022-2026)</h2>
          <p className="text-slate-300 mb-6">
            GAAP recognized revenue (billed) with <span className="text-green-400 font-semibold">Estimated Gross Profit (EGP)</span> — showing 2025 dip and recovery plan
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: '$ Millions', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value) => `$${value}M`}
              />
              <Legend />
              <Bar dataKey="revenue" fill="#3b82f6" name="Revenue ($M)" radius={[4, 4, 0, 0]} />
              <Line 
                type="monotone" 
                dataKey="egp" 
                stroke="#10b981" 
                strokeWidth={3}
                dot={{ fill: '#10b981', stroke: '#fff', strokeWidth: 2, r: 6 }}
                name="EGP ($M)"
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="mt-4 grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
            {revenueData.map((d) => (
              <div key={d.year} className={`p-3 rounded-lg ${d.type === 'target' ? 'bg-green-900/30 border border-green-700' : 'bg-slate-700/50'}`}>
                <div className="text-slate-400 text-xs">{d.year}</div>
                <div className="text-white font-bold">${d.revenue}M</div>
                <div className="text-green-400 text-sm">EGP: ${d.egp}M</div>
                <div className="text-slate-500 text-xs">{d.gpPercent}% GP</div>
              </div>
            ))}
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: Finance MCP (customer_ltv) | EGP = Estimated Gross Profit when contracts delivered well
          </p>
        </div>

        {/* Win Rate Trend */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Win Rate Trend (2022-2026)</h2>
          <p className="text-slate-300 mb-6">
            Win rate showing 2025 decline to 35.6% with recovery plan to 42% in 2026
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <LineChart data={winRateData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: 'Win Rate (%)', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: any) => [`${value}%`, 'Win Rate']}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="winRate" 
                stroke="#f59e0b" 
                strokeWidth={3}
                dot={(props: any) => {
                  const { cx, cy, payload } = props;
                  return (
                    <circle
                      cx={cx}
                      cy={cy}
                      r={6}
                      fill={payload.type === 'target' ? '#10b981' : payload.year === '2025' ? '#ef4444' : '#f59e0b'}
                      stroke="#fff"
                      strokeWidth={2}
                    />
                  );
                }}
                name="Win Rate (%)"
              />
            </LineChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: Salesforce CRM opportunity analysis | Red dot indicates 2025 performance concern
          </p>
        </div>

        {/* Deal Size & EGP per Deal */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Deal Size & EGP per Deal</h2>
          <p className="text-slate-300 mb-6">
            Revenue per deal and <span className="text-green-400 font-semibold">EGP per deal</span> — showing margin improvement over time
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={dealSizeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: '$ Thousands', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value) => `$${value}K`}
              />
              <Legend />
              <Bar 
                dataKey="dealSize" 
                fill="#8b5cf6" 
                name="Avg Deal Size ($K)"
                radius={[8, 8, 0, 0]}
              />
              <Bar 
                dataKey="egpPerDeal" 
                fill="#10b981" 
                name="EGP per Deal ($K)"
                radius={[8, 8, 0, 0]}
              />
            </ComposedChart>
          </ResponsiveContainer>
          <div className="mt-4 p-4 bg-green-900/20 rounded-lg border border-green-700/50">
            <p className="text-green-400 font-semibold">📈 EGP per Deal Growth</p>
            <p className="text-slate-300 text-sm">EGP per deal grew from $23K (2022) to $44K (2025) — a <span className="text-green-400 font-bold">91% improvement</span>. Target: $46K in 2026.</p>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: dim_opportunity.Amount & fact_opportunity.EGP aggregated by CloseDate year
          </p>
        </div>

        {/* Pipeline Coverage Ratio */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Pipeline Coverage Ratio</h2>
          <p className="text-slate-300 mb-6">
            Pipeline vs quota coverage showing improvement from 0.82x to target 1.5x (confidence interval: 1.3x-1.7x)
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={coverageData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: 'Coverage Ratio', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
                formatter={(value: any, name?: string) => {
                  if (name === 'Coverage') return [`${value.toFixed(2)}x`, 'Coverage Ratio'];
                  if (name === 'Low') return [`${value.toFixed(2)}x`, 'Lower Bound'];
                  if (name === 'High') return [`${value.toFixed(2)}x`, 'Upper Bound'];
                  return [value, name || ''];
                }}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="confidenceLow" 
                stroke="#6366f1" 
                fill="#6366f1" 
                fillOpacity={0.2}
                name="Low"
              />
              <Area 
                type="monotone" 
                dataKey="confidenceHigh" 
                stroke="#6366f1" 
                fill="#6366f1" 
                fillOpacity={0.2}
                name="High"
              />
              <Area 
                type="monotone" 
                dataKey="coverage" 
                stroke="#06b6d4" 
                fill="#06b6d4" 
                fillOpacity={0.6}
                strokeWidth={3}
                name="Coverage"
              />
            </AreaChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: Open pipeline (dim_opportunity) divided by annual quota | 2026 target includes confidence interval
          </p>
        </div>

        {/* Market Penetration by Region */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Market Penetration by Region</h2>
          <p className="text-slate-300 mb-6">
            Customer count by sub-region showing Seattle as untapped opportunity (near-zero → 8 customers targeted)
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={marketPenetrationData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: 'Customer Count', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="bayArea" stackId="a" fill="#3b82f6" name="Bay Area" radius={[0, 0, 0, 0]} />
              <Bar dataKey="sanDiego" stackId="a" fill="#8b5cf6" name="San Diego" radius={[0, 0, 0, 0]} />
              <Bar dataKey="la" stackId="a" fill="#f59e0b" name="Los Angeles" radius={[0, 0, 0, 0]} />
              <Bar dataKey="seattle" stackId="a" fill="#10b981" name="Seattle ⭐" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: DIM_Account_Min.Sales_Region + geo-mapping | Seattle shows significant untapped growth opportunity
          </p>
        </div>

        {/* Customer Acquisition vs Churn */}
        <div className="bg-slate-800 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Customer Acquisition vs Churn</h2>
          <p className="text-slate-300 mb-6">
            New logo acquisition (bars) vs account churn (line) showing net positive growth trajectory
          </p>
          <ResponsiveContainer width="100%" height={400}>
            <ComposedChart data={customerData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#475569" />
              <XAxis dataKey="year" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" label={{ value: 'Count', angle: -90, position: 'insideLeft', fill: '#94a3b8' }} />
              <Tooltip 
                contentStyle={{ backgroundColor: '#1e293b', border: '1px solid #475569', borderRadius: '8px' }}
                labelStyle={{ color: '#fff' }}
              />
              <Legend />
              <Bar dataKey="newLogos" fill="#10b981" name="New Logos" radius={[8, 8, 0, 0]} />
              <Line 
                type="monotone" 
                dataKey="churn" 
                stroke="#ef4444" 
                strokeWidth={3}
                dot={{ fill: '#ef4444', r: 6 }}
                name="Churned Accounts"
              />
            </ComposedChart>
          </ResponsiveContainer>
          <p className="text-sm text-slate-400 mt-4">
            Data Source: DIM_Account_Min (CreatedDate for new logos, last activity + ARR drop for churn detection)
          </p>
        </div>

        {/* Summary Section */}
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-8 border border-blue-700">
          <h2 className="text-2xl font-bold text-white mb-4">Key Insights</h2>
          <div className="grid md:grid-cols-2 gap-6 text-slate-100">
            <div>
              <h3 className="font-semibold text-blue-200 mb-2">2025 Performance Dip</h3>
              <p className="text-sm">
                Revenue declined 12.3% ($19.6M → $17.19M) and win rate dropped 4.5 points (40.1% → 35.6%) 
                due to rep turnover and pipeline gaps.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-green-200 mb-2">2026 Recovery Plan</h3>
              <p className="text-sm">
                22% revenue growth target to $21M driven by Seattle expansion, improved pipeline coverage (1.5x), 
                and larger deal sizes ($115K avg).
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-purple-200 mb-2">Deal Size Momentum</h3>
              <p className="text-sm">
                Consistent upward trend in average deal value (77% growth over 4 years) supports premium 
                positioning and enterprise focus.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-yellow-200 mb-2">Untapped Seattle Market</h3>
              <p className="text-sm">
                Near-zero penetration in Seattle biotech cluster represents largest growth opportunity. 
                Target: 8 new logos in 2026.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 bg-slate-800 rounded-lg border border-slate-700">
          <p className="text-sm text-slate-400">
            <strong className="text-slate-300">Methodology:</strong> Historical data extracted from Salesforce CRM 
            (dim_opportunity, fact_opportunity_history, DIM_Account_Min) via USDM MCP Sales bridge. 2026 targets 
            derived from GTM strategy model and market analysis. Confidence intervals calculated using historical 
            volatility and market uncertainty factors.
          </p>
        </div>
      </main>
    </div>
  );
}
