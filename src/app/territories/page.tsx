'use client';

import Link from 'next/link';

// Type definitions
interface KeyAccount {
  name: string;
  revenue: number;
  gp: number;
  problem?: boolean;
  target?: boolean;
}

interface Territory {
  id: string;
  name: string;
  aka: string;
  geography: string[];
  seller: string;
  sellerRole: string;
  sellerStatus: 'star' | 'coaching' | 'vacant' | 'partner';
  revenue2025: number;
  gpPercent: number;
  pipeline: number;
  pipelineEGP: number;
  closedWonQ4: number;
  closedWonEGPQ4: number;
  winRate: number;
  deals: number;
  character: string;
  color: string;
  status: 'healthy' | 'warning' | 'critical' | 'greenfield';
  keyAccounts: KeyAccount[];
  opportunities: string[];
  risks: string[];
}

// LIVE DATA from Sales MCP + Memory (Feb 2026)
const territories: Territory[] = [
  {
    id: 'biotech-beach',
    name: 'Biotech Beach',
    aka: 'San Diego',
    geography: ['San Diego', 'Irvine', 'Orange County'],
    seller: 'Justin Ott',
    sellerRole: 'EVP West',
    sellerStatus: 'star',
    revenue2025: 7.98,
    gpPercent: 70.8,
    pipeline: 6.92, // from get_pipeline_by_owner
    pipelineEGP: 2.63,
    closedWonQ4: 5.13,
    closedWonEGPQ4: 1.89,
    winRate: 60.9,
    deals: 69,
    character: 'High volume, excellent margins',
    color: 'green',
    status: 'healthy',
    keyAccounts: [
      { name: 'Crinetics Pharmaceuticals', revenue: 1.05, gp: 52.9 },
      { name: 'Glaukos Corporation', revenue: 0.86, gp: 37.5 },
      { name: 'Halozyme', revenue: 0.33, gp: 26.0 },
      { name: 'Fate Therapeutics', revenue: 0.01, gp: 0 },
    ],
    opportunities: [
      'Cell therapy manufacturing',
      'AI Governance for clinical trials',
      'Veeva ecosystem expansion',
    ],
    risks: [
      'Competitor activity (Deloitte, Accenture)',
    ],
  },
  {
    id: 'la-biomed',
    name: 'LA BioMed',
    aka: 'Los Angeles',
    geography: ['Los Angeles', 'Thousand Oaks', 'Pasadena'],
    seller: 'Mike Campbell',
    sellerRole: 'Account Manager',
    sellerStatus: 'coaching',
    revenue2025: 6.47,
    gpPercent: 23.9,
    pipeline: 2.94,
    pipelineEGP: 1.23,
    closedWonQ4: 1.47,
    closedWonEGPQ4: 0.55,
    winRate: 38.2,
    deals: 34,
    character: 'Big accounts, MARGIN CRISIS',
    color: 'red',
    status: 'critical',
    keyAccounts: [
      { name: 'Gilead Sciences', revenue: 2.13, gp: 22.0, problem: true },
      { name: 'Kite Pharma', revenue: 2.08, gp: 20.0, problem: true },
      { name: 'Amgen', revenue: 1.75, gp: 21.0, problem: true },
      { name: 'Enovis', revenue: 0.77, gp: 18.0, problem: true },
    ],
    opportunities: [
      'Convert T&M to Managed Services',
      'AI Governance positioning',
      'Compliance automation',
    ],
    risks: [
      '4 accounts at ~20% GP dragging down region',
      'Mike Campbell 38% win rate needs coaching',
      'Competitor lock-in at Gilead',
    ],
  },
  {
    id: 'biotech-bay',
    name: 'Biotech Bay',
    aka: 'NorCal / San Francisco',
    geography: ['San Francisco', 'South San Francisco', 'Palo Alto', 'Emeryville'],
    seller: 'NEW HIRE NEEDED',
    sellerRole: 'Account Executive',
    sellerStatus: 'vacant',
    revenue2025: 1.35,
    gpPercent: 36.2,
    pipeline: 1.09,
    pipelineEGP: 0.49,
    closedWonQ4: 0,
    closedWonEGPQ4: 0,
    winRate: 0,
    deals: 0,
    character: 'UNDERPENETRATED - Largest biotech market',
    color: 'yellow',
    status: 'warning',
    keyAccounts: [
      { name: 'Genentech/Roche', revenue: 0, gp: 0, target: true },
      { name: 'Gilead (HQ)', revenue: 0.5, gp: 36.0 },
      { name: 'BioMarin', revenue: 0, gp: 0, target: true },
      { name: 'Arcus Biosciences', revenue: 0, gp: 0, target: true },
    ],
    opportunities: [
      'Massive TAM - $2B+ biotech market',
      'Cell/Gene therapy manufacturing',
      'AI/ML governance for drug discovery',
      'Startup ecosystem (Series B+)',
    ],
    risks: [
      'No dedicated seller coverage',
      'Minimal brand awareness',
      'Established competitor relationships',
    ],
  },
  {
    id: 'cascadia',
    name: 'Cascadia',
    aka: 'Seattle / PNW',
    geography: ['Seattle', 'Bothell', 'Portland', 'Vancouver WA'],
    seller: 'Partner Channel',
    sellerRole: 'Via Alliances',
    sellerStatus: 'partner',
    revenue2025: 0.60,
    gpPercent: 43.4,
    pipeline: 0,
    pipelineEGP: 0,
    closedWonQ4: 0,
    closedWonEGPQ4: 0,
    winRate: 0,
    deals: 0,
    character: 'GREENFIELD - Zero pipeline',
    color: 'blue',
    status: 'greenfield',
    keyAccounts: [
      { name: 'Seattle Genetics/Seagen', revenue: 0, gp: 0, target: true },
      { name: 'Adaptive Biotechnologies', revenue: 0, gp: 0, target: true },
      { name: 'Fred Hutch', revenue: 0, gp: 0, target: true },
      { name: 'Sana Biotechnology', revenue: 0, gp: 0, target: true },
    ],
    opportunities: [
      'Immunotherapy corridor',
      'Academic partnerships (UW, Fred Hutch)',
      'Cell therapy manufacturing boom',
      'AI/ML in drug discovery',
    ],
    risks: [
      'Zero current presence',
      'Amazon talent competition',
      'Need $150K partner investment',
    ],
  },
];

const getStatusColor = (status: 'healthy' | 'warning' | 'critical' | 'greenfield') => {
  switch(status) {
    case 'healthy': return 'from-green-900/50 to-green-800/30 border-green-700/50';
    case 'warning': return 'from-yellow-900/50 to-yellow-800/30 border-yellow-700/50';
    case 'critical': return 'from-red-900/50 to-red-800/30 border-red-700/50';
    case 'greenfield': return 'from-blue-900/50 to-blue-800/30 border-blue-700/50';
  }
};

const getStatusBadge = (status: 'healthy' | 'warning' | 'critical' | 'greenfield') => {
  switch(status) {
    case 'healthy': return <span className="bg-green-600 text-white px-2 py-0.5 rounded text-xs font-bold">HEALTHY</span>;
    case 'warning': return <span className="bg-yellow-600 text-white px-2 py-0.5 rounded text-xs font-bold">UNDERPENETRATED</span>;
    case 'critical': return <span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">MARGIN CRISIS</span>;
    case 'greenfield': return <span className="bg-blue-600 text-white px-2 py-0.5 rounded text-xs font-bold">GREENFIELD</span>;
  }
};

const getSellerBadge = (status: 'star' | 'coaching' | 'vacant' | 'partner') => {
  switch(status) {
    case 'star': return <span className="text-green-400">⭐</span>;
    case 'coaching': return <span className="text-red-400">🎯</span>;
    case 'vacant': return <span className="text-yellow-400">⚠️</span>;
    case 'partner': return <span className="text-blue-400">🤝</span>;
  }
};

const formatCurrency = (value: number) => {
  if (value >= 1) return `$${value.toFixed(2)}M`;
  if (value > 0) return `$${(value * 1000).toFixed(0)}K`;
  return '$0';
};

export default function TerritoriesPage() {
  const totalRevenue = territories.reduce((sum, t) => sum + t.revenue2025, 0);
  const totalPipeline = territories.reduce((sum, t) => sum + t.pipeline, 0);
  const avgGP = territories.reduce((sum, t) => sum + t.gpPercent * t.revenue2025, 0) / totalRevenue;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold text-white">Western Territories</h1>
            <p className="text-xl text-cyan-400 mt-2">Pistons in the Regional Engine</p>
          </div>
          <span className="text-xs text-green-400 bg-green-900/30 px-3 py-1 rounded border border-green-700/50">
            🔴 LIVE | Sales MCP | Feb 2026
          </span>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl">
          Each territory is a geographic zone grouping accounts by regional biotech ecosystem — 
          city clusters, not states. Like pistons in an engine, they fire in sequence to drive growth.
        </p>
        <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 mb-8 inline-block">
          <span className="text-blue-400">Sales MCP</span> → <code className="text-slate-500">get_pipeline_by_owner</code>, <code className="text-slate-500">get_team_performance</code> | 
          <span className="text-purple-400 ml-2">Finance MCP</span> → <code className="text-slate-500">analyze_customer_profitability</code> | 
          <span className="text-slate-500"> Filter: </span><code className="text-slate-500">DIM_Account_Min[Sales_Region] = &quot;West&quot;</code>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-cyan-400">{formatCurrency(totalRevenue)}</div>
            <div className="text-sm text-slate-400">2025 Revenue</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-green-400">{formatCurrency(totalPipeline)}</div>
            <div className="text-sm text-slate-400">Open Pipeline</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-purple-400">{avgGP.toFixed(1)}%</div>
            <div className="text-sm text-slate-400">Blended GP%</div>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 text-center">
            <div className="text-3xl font-bold text-yellow-400">4</div>
            <div className="text-sm text-slate-400">Territories</div>
          </div>
        </div>

        {/* Territory Comparison Table */}
        <div className="mb-12 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-slate-700 text-left bg-slate-800/50">
                <th className="py-3 px-4 text-slate-300">Territory</th>
                <th className="py-3 px-4 text-slate-300">Seller</th>
                <th className="py-3 px-4 text-slate-300 text-right">2025 Rev</th>
                <th className="py-3 px-4 text-slate-300 text-right">GP%</th>
                <th className="py-3 px-4 text-slate-300 text-right">Pipeline</th>
                <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                <th className="py-3 px-4 text-slate-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {territories.map((t) => (
                <tr key={t.id} className="border-b border-slate-800 hover:bg-slate-800/30 transition">
                  <td className="py-3 px-4">
                    <div className="text-white font-medium">{t.name}</div>
                    <div className="text-xs text-slate-400">{t.aka}</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center gap-2">
                      {getSellerBadge(t.sellerStatus)}
                      <div>
                        <div className="text-white">{t.seller}</div>
                        <div className="text-xs text-slate-400">{t.sellerRole}</div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4 text-cyan-400 text-right font-medium">{formatCurrency(t.revenue2025)}</td>
                  <td className={`py-3 px-4 text-right font-bold ${t.gpPercent >= 50 ? 'text-green-400' : t.gpPercent >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {t.gpPercent.toFixed(1)}%
                  </td>
                  <td className="py-3 px-4 text-green-400 text-right font-medium">{formatCurrency(t.pipeline)}</td>
                  <td className={`py-3 px-4 text-right font-bold ${t.winRate >= 50 ? 'text-green-400' : t.winRate >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                    {t.winRate > 0 ? `${t.winRate.toFixed(1)}%` : '—'}
                  </td>
                  <td className="py-3 px-4">{getStatusBadge(t.status)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Territory Deep Dives */}
        <div className="space-y-8">
          {territories.map((t) => (
            <div key={t.id} className={`bg-gradient-to-br ${getStatusColor(t.status)} rounded-xl p-6 border`}>
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                {/* Left: Territory Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h2 className="text-2xl font-bold text-white">{t.name}</h2>
                    {getStatusBadge(t.status)}
                  </div>
                  <p className="text-slate-300 mb-4">{t.character}</p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div>
                      <div className="text-xs text-slate-400">2025 Revenue</div>
                      <div className="text-xl font-bold text-cyan-400">{formatCurrency(t.revenue2025)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">GP Margin</div>
                      <div className={`text-xl font-bold ${t.gpPercent >= 50 ? 'text-green-400' : t.gpPercent >= 35 ? 'text-yellow-400' : 'text-red-400'}`}>
                        {t.gpPercent.toFixed(1)}%
                      </div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Pipeline</div>
                      <div className="text-xl font-bold text-green-400">{formatCurrency(t.pipeline)}</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-400">Win Rate</div>
                      <div className={`text-xl font-bold ${t.winRate >= 50 ? 'text-green-400' : t.winRate >= 35 ? 'text-yellow-400' : 'text-slate-500'}`}>
                        {t.winRate > 0 ? `${t.winRate.toFixed(1)}%` : '—'}
                      </div>
                    </div>
                  </div>

                  {/* Seller Assignment */}
                  <div className="bg-slate-800/50 rounded-lg p-4 mb-4">
                    <div className="flex items-center gap-3">
                      {getSellerBadge(t.sellerStatus)}
                      <div>
                        <div className="text-white font-medium">{t.seller}</div>
                        <div className="text-xs text-slate-400">{t.sellerRole}</div>
                      </div>
                      {t.closedWonQ4 > 0 && (
                        <div className="ml-auto text-right">
                          <div className="text-green-400 font-semibold">{formatCurrency(t.closedWonQ4)} Q4 Won</div>
                          <div className="text-xs text-green-300">{formatCurrency(t.closedWonEGPQ4)} EGP</div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Geography */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {t.geography.map((geo) => (
                      <span key={geo} className="bg-slate-700/50 text-slate-300 px-2 py-1 rounded text-xs">
                        📍 {geo}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right: Key Accounts */}
                <div className="lg:w-80">
                  <h3 className="text-lg font-bold text-white mb-3">Key Accounts</h3>
                  <div className="space-y-2">
                    {t.keyAccounts.map((account) => (
                      <div 
                        key={account.name} 
                        className={`flex justify-between items-center p-2 rounded ${
                          account.problem ? 'bg-red-900/30 border border-red-700/30' : 
                          account.target ? 'bg-yellow-900/30 border border-yellow-700/30' : 
                          'bg-slate-800/50'
                        }`}
                      >
                        <div>
                          <div className="text-white text-sm">{account.name}</div>
                          {account.problem && <div className="text-xs text-red-400">⚠️ Low margin</div>}
                          {account.target && <div className="text-xs text-yellow-400">🎯 Target</div>}
                        </div>
                        <div className="text-right">
                          {account.revenue > 0 && (
                            <>
                              <div className="text-cyan-400 text-sm">{formatCurrency(account.revenue)}</div>
                              <div className={`text-xs ${account.gp >= 40 ? 'text-green-400' : account.gp >= 25 ? 'text-yellow-400' : 'text-red-400'}`}>
                                {account.gp.toFixed(0)}% GP
                              </div>
                            </>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Opportunities & Risks */}
              <div className="grid md:grid-cols-2 gap-6 mt-6 pt-6 border-t border-slate-700/50">
                <div>
                  <h4 className="text-green-400 font-bold mb-2">💡 Opportunities</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {t.opportunities.map((opp, i) => (
                      <li key={i}>• {opp}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-red-400 font-bold mb-2">⚠️ Risks</h4>
                  <ul className="text-sm text-slate-300 space-y-1">
                    {t.risks.map((risk, i) => (
                      <li key={i}>• {risk}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* The Investment Ask */}
        <div className="mt-12 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-xl p-6 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Territory Investment Priorities</h2>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-green-900/30 rounded-lg p-4 border border-green-700/30">
              <div className="text-green-400 font-bold">Biotech Beach</div>
              <div className="text-white text-lg font-semibold">PROTECT</div>
              <div className="text-xs text-slate-300 mt-2">Keep Justin Ott, expand cell therapy</div>
            </div>
            <div className="bg-red-900/30 rounded-lg p-4 border border-red-700/30">
              <div className="text-red-400 font-bold">LA BioMed</div>
              <div className="text-white text-lg font-semibold">FIX MARGINS</div>
              <div className="text-xs text-slate-300 mt-2">Coach Mike, convert 4 accounts to managed</div>
            </div>
            <div className="bg-yellow-900/30 rounded-lg p-4 border border-yellow-700/30">
              <div className="text-yellow-400 font-bold">Biotech Bay</div>
              <div className="text-white text-lg font-semibold">HIRE AE</div>
              <div className="text-xs text-slate-300 mt-2">$180K investment → $2M+ TAM</div>
            </div>
            <div className="bg-blue-900/30 rounded-lg p-4 border border-blue-700/30">
              <div className="text-blue-400 font-bold">Cascadia</div>
              <div className="text-white text-lg font-semibold">PARTNER</div>
              <div className="text-xs text-slate-300 mt-2">$150K partner investment → $1.5M TAM</div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/team-capacity" className="bg-cyan-700 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Team Performance
          </Link>
          <Link href="/margin-analysis" className="bg-red-700 hover:bg-red-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Margin Analysis
          </Link>
          <Link href="/targets" className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Target Accounts
          </Link>
          <Link href="/financial-model" className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Financial Model
          </Link>
        </div>
      </main>
    </div>
  );
}
