'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface TeamMember {
  role: string;
  name: string;
  territory: string;
  accounts: number;
  pipeline: string;
  quota: string;
  attainment: string;
  status: 'green' | 'yellow' | 'red';
}

// Placeholder - replace with MCP data when bridge is stable
const currentTeam: TeamMember[] = [
  { role: 'Regional VP', name: 'TBD - Pull from Labor MCP', territory: 'Western Region', accounts: 55, pipeline: '$4.2M', quota: '$8M', attainment: '52%', status: 'yellow' },
  { role: 'Account Executive', name: 'TBD', territory: 'Biotech Bay (SF)', accounts: 20, pipeline: '$1.8M', quota: '$2.5M', attainment: '48%', status: 'yellow' },
  { role: 'Account Executive', name: 'TBD', territory: 'Biotech Beach (SD)', accounts: 18, pipeline: '$1.5M', quota: '$2.5M', attainment: '55%', status: 'yellow' },
  { role: 'Account Executive', name: 'TBD', territory: 'Seattle/PNW', accounts: 0, pipeline: '$0', quota: 'N/A', attainment: 'NEW', status: 'red' },
  { role: 'Solutions Consultant', name: 'TBD', territory: 'Western Region', accounts: 38, pipeline: 'Support', quota: 'N/A', attainment: 'N/A', status: 'green' },
];

interface CapacityMetric {
  metric: string;
  current: string;
  benchmark: string;
  gap: string;
  status: 'green' | 'yellow' | 'red';
}

const capacityMetrics: CapacityMetric[] = [
  { metric: 'Target Accounts per AE', current: '19', benchmark: '15-20', gap: 'At capacity', status: 'yellow' },
  { metric: 'Pipeline Coverage Ratio', current: '1.7x', benchmark: '3-4x', gap: '-1.3x to -2.3x', status: 'red' },
  { metric: 'Win Rate', current: '23.7%', benchmark: '35-40%', gap: '-11 to -16 pts', status: 'red' },
  { metric: 'Avg Deal Size', current: '$185K', benchmark: '$150K+', gap: '+$35K ✓', status: 'green' },
  { metric: 'Sales Cycle (days)', current: '127', benchmark: '90-120', gap: '+7 to +37 days', status: 'yellow' },
  { metric: 'SE:AE Ratio', current: '1:2', benchmark: '1:2-3', gap: 'At benchmark', status: 'green' },
  { metric: 'Seattle Coverage', current: '0 FTE', benchmark: '1+ FTE', gap: '-1 FTE', status: 'red' },
];

interface HiringPlan {
  role: string;
  priority: 'P0' | 'P1' | 'P2';
  quarter: string;
  territory: string;
  rationale: string;
  expectedImpact: string;
  annualCost: string;
  revenueTarget: string;
  roi: string;
}

const hiringPlan: HiringPlan[] = [
  {
    role: 'Account Executive - Seattle',
    priority: 'P0',
    quarter: 'Q1 2026',
    territory: 'Cascadia Corridor (Seattle/PNW)',
    rationale: '$0 current presence in $2B+ market with 15+ qualified targets (Tune, Sana, Outpace, Umoja, A-Alpha Bio)',
    expectedImpact: 'Open new market, 3-5 new logos in Year 1',
    annualCost: '$180K OTE',
    revenueTarget: '$1.5M',
    roi: '8.3x',
  },
  {
    role: 'Business Development Rep (BDR)',
    priority: 'P0',
    quarter: 'Q1 2026',
    territory: 'Western Region',
    rationale: 'Pipeline coverage at 1.7x vs 3-4x benchmark. Need dedicated prospecting to fill funnel.',
    expectedImpact: '+$3M qualified pipeline annually, 15-20 SQLs/month',
    annualCost: '$85K OTE',
    revenueTarget: '$750K influenced',
    roi: '8.8x',
  },
  {
    role: 'Solutions Consultant - AI/Data',
    priority: 'P1',
    quarter: 'Q2 2026',
    territory: 'Western Region (AI Governance focus)',
    rationale: 'AI Governance is top GTM pillar. Need specialized SE to support complex AI validation deals.',
    expectedImpact: 'Improve win rate on AI deals by 10pts, enable $500K+ deal sizes',
    annualCost: '$200K OTE',
    revenueTarget: '$2M influenced',
    roi: '10x',
  },
  {
    role: 'Customer Success Manager',
    priority: 'P1',
    quarter: 'Q2 2026',
    territory: 'Western Region',
    rationale: 'One Trick Ponies (Gilead, Kite, Enovis) need expansion. CSM to drive upsell/cross-sell.',
    expectedImpact: 'Expand 4 accounts from Staffing-only to Managed Services (+15pts margin)',
    annualCost: '$140K OTE',
    revenueTarget: '$1M expansion',
    roi: '7.1x',
  },
  {
    role: 'Account Executive - SF Expansion',
    priority: 'P2',
    quarter: 'Q3 2026',
    territory: 'Biotech Bay (SF) - Growth',
    rationale: 'Current AE at capacity (20 accounts). New logos need dedicated hunter.',
    expectedImpact: '5+ new logos including Tier 1 targets (Cellares, GRAIL, Freenome)',
    annualCost: '$180K OTE',
    revenueTarget: '$2M',
    roi: '11x',
  },
  {
    role: 'Marketing Manager - Field',
    priority: 'P2',
    quarter: 'Q3 2026',
    territory: 'Western Region',
    rationale: 'Execute ABM campaigns, regional events, Seattle market entry support.',
    expectedImpact: '+50 MQLs/quarter, 2 regional events, brand awareness in Seattle',
    annualCost: '$150K + $100K budget',
    revenueTarget: '$1.5M influenced',
    roi: '6x',
  },
];

const revenueModel = {
  current: {
    headcount: 4,
    quota: '$8M',
    pipeline: '$4.2M',
    projected: '$3.2M',
  },
  q2_2026: {
    headcount: 6,
    quota: '$11.5M',
    pipeline: '$8M',
    projected: '$5.5M',
  },
  q4_2026: {
    headcount: 8,
    quota: '$16M',
    pipeline: '$14M',
    projected: '$9M',
  },
  fy_2027: {
    headcount: 10,
    quota: '$22M',
    pipeline: '$20M',
    projected: '$14M',
  },
};

export default function TeamCapacity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">👥 Team & Capacity Planning</h1>
          <p className="text-xl text-slate-400">Current state, gaps, and hiring roadmap for Western Region growth</p>
          <div className="mt-4 p-3 bg-yellow-900/30 border border-yellow-700/50 rounded-lg">
            <p className="text-yellow-400 text-sm">⚠️ <strong>Data Integration Pending:</strong> Team member names to be pulled from Labor MCP when bridge is stable. Current data based on capacity modeling.</p>
          </div>
        </div>

        {/* Current Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Current Team Structure</h2>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-800">
                <tr>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Role</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Name</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Territory</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-center">Accounts</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-right">Pipeline</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-right">Quota</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold text-center">Attainment</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {currentTeam.map((member, idx) => (
                  <tr key={idx} className="border-t border-slate-700">
                    <td className="py-3 px-4 font-medium">{member.role}</td>
                    <td className="py-3 px-4 text-slate-500 italic">{member.name}</td>
                    <td className="py-3 px-4">{member.territory}</td>
                    <td className="py-3 px-4 text-center">{member.accounts}</td>
                    <td className="py-3 px-4 text-right text-cyan-400">{member.pipeline}</td>
                    <td className="py-3 px-4 text-right">{member.quota}</td>
                    <td className="py-3 px-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        member.status === 'green' ? 'bg-green-900/50 text-green-400' :
                        member.status === 'yellow' ? 'bg-yellow-900/50 text-yellow-400' :
                        'bg-red-900/50 text-red-400'
                      }`}>{member.attainment}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Capacity Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Capacity Analysis vs Benchmarks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {capacityMetrics.map((metric, idx) => (
              <div key={idx} className={`rounded-xl p-5 border ${
                metric.status === 'green' ? 'bg-green-900/20 border-green-700/50' :
                metric.status === 'yellow' ? 'bg-yellow-900/20 border-yellow-700/50' :
                'bg-red-900/20 border-red-700/50'
              }`}>
                <h3 className="text-slate-400 text-sm font-semibold mb-2">{metric.metric}</h3>
                <div className="flex items-end justify-between">
                  <div>
                    <p className={`text-2xl font-bold ${
                      metric.status === 'green' ? 'text-green-400' :
                      metric.status === 'yellow' ? 'text-yellow-400' :
                      'text-red-400'
                    }`}>{metric.current}</p>
                    <p className="text-slate-500 text-xs">Benchmark: {metric.benchmark}</p>
                  </div>
                  <p className={`text-sm font-medium ${
                    metric.status === 'green' ? 'text-green-400' :
                    metric.status === 'yellow' ? 'text-yellow-400' :
                    'text-red-400'
                  }`}>{metric.gap}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Gaps */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚨 Critical Capacity Gaps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-4xl mb-3">🗺️</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Zero Seattle Presence</h3>
              <p className="text-slate-300 text-sm mb-3">$0 revenue from Cascadia Corridor despite 15+ qualified targets worth $2B+ TAM.</p>
              <p className="text-red-400 font-semibold">→ Need: 1 AE immediately</p>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-4xl mb-3">📉</div>
              <h3 className="text-xl font-bold text-red-400 mb-2">Pipeline Starvation</h3>
              <p className="text-slate-300 text-sm mb-3">1.7x coverage vs 3-4x benchmark. Not enough deals to hit quota even with improved win rates.</p>
              <p className="text-red-400 font-semibold">→ Need: 1 BDR + marketing support</p>
            </div>
            <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-700/50">
              <div className="text-4xl mb-3">🔄</div>
              <h3 className="text-xl font-bold text-yellow-400 mb-2">One Trick Ponies</h3>
              <p className="text-slate-300 text-sm mb-3">Gilead, Kite, Enovis at 18-22% GP (staffing-only). No CSM to drive expansion to managed services.</p>
              <p className="text-yellow-400 font-semibold">→ Need: 1 CSM for expansion</p>
            </div>
          </div>
        </section>

        {/* Hiring Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Role-Based Hiring Plan</h2>
          <div className="space-y-4">
            {hiringPlan.map((role, idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${
                role.priority === 'P0' ? 'bg-gradient-to-r from-red-900/30 to-orange-900/20 border-red-700/50' :
                role.priority === 'P1' ? 'bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border-yellow-700/50' :
                'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <div className="flex items-center gap-3 mb-1">
                      <span className={`text-xs font-bold px-2 py-1 rounded ${
                        role.priority === 'P0' ? 'bg-red-500 text-white' :
                        role.priority === 'P1' ? 'bg-yellow-500 text-slate-900' :
                        'bg-slate-600 text-white'
                      }`}>{role.priority}</span>
                      <span className="text-slate-400 text-sm">{role.quarter}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{role.role}</h3>
                    <p className="text-cyan-400 text-sm">{role.territory}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-green-400 font-bold text-lg">{role.roi} ROI</p>
                    <p className="text-slate-500 text-xs">{role.annualCost} → {role.revenueTarget}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1">Rationale</h4>
                    <p className="text-slate-300 text-sm">{role.rationale}</p>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-1">Expected Impact</h4>
                    <p className="text-slate-300 text-sm">{role.expectedImpact}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Revenue Projection */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📈 Revenue Capacity Model</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {Object.entries(revenueModel).map(([period, data], idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${
                idx === 0 ? 'bg-slate-800/50 border-slate-700' : 
                'bg-gradient-to-b from-cyan-900/30 to-blue-900/20 border-cyan-700/50'
              }`}>
                <h3 className="text-slate-400 text-sm font-semibold mb-4">
                  {period === 'current' ? 'Current State' : 
                   period === 'q2_2026' ? 'Q2 2026' :
                   period === 'q4_2026' ? 'Q4 2026' : 'FY 2027'}
                </h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-slate-500 text-xs">Headcount</p>
                    <p className="text-white font-bold text-lg">{data.headcount} FTE</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Total Quota</p>
                    <p className="text-white font-bold">{data.quota}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Pipeline</p>
                    <p className="text-cyan-400 font-bold">{data.pipeline}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Projected Revenue</p>
                    <p className="text-green-400 font-bold text-xl">{data.projected}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-blue-900/30 rounded-lg border border-blue-700/50">
            <p className="text-blue-400 font-semibold mb-2">💡 Key Assumptions</p>
            <ul className="text-slate-300 text-sm space-y-1">
              <li>• Win rate improves from 23.7% to 35% with better coverage + SE support</li>
              <li>• Seattle AE ramps to $1.5M in Year 1 (conservative for new market)</li>
              <li>• BDR generates 3x pipeline coverage by Q3 2026</li>
              <li>• CSM-driven expansion adds 15pts margin to One Trick Pony accounts</li>
              <li>• Average deal size holds at $185K with AI Governance driving larger deals</li>
            </ul>
          </div>
        </section>

        {/* Investment Summary */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💰 Investment Summary</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-2">Total Investment (FY 2026)</p>
              <p className="text-4xl font-bold text-white">$1.035M</p>
              <p className="text-slate-500 text-xs mt-1">6 new hires + marketing budget</p>
            </div>
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50 text-center">
              <p className="text-slate-400 text-sm mb-2">Projected Revenue Lift</p>
              <p className="text-4xl font-bold text-green-400">+$5.8M</p>
              <p className="text-slate-500 text-xs mt-1">From $3.2M → $9M by Q4 2026</p>
            </div>
            <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-700/50 text-center">
              <p className="text-slate-400 text-sm mb-2">Blended ROI</p>
              <p className="text-4xl font-bold text-cyan-400">5.6x</p>
              <p className="text-slate-500 text-xs mt-1">Revenue lift / investment</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/gtm-strategy" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View GTM Strategy →
          </Link>
          <Link href="/marketing-alignment" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Marketing Alignment
          </Link>
        </div>
      </main>
    </div>
  );
}
