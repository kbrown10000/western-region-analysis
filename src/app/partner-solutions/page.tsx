'use client';

import Link from 'next/link';

/**
 * PARTNER SOLUTIONS ALIGNMENT PAGE
 * 
 * How the Solutions team enables partner success and drives partner-originated revenue
 * 
 * Data Sources:
 * - Labor MCP: get_solutions_team_roster, get_gold_department_metrics
 * - Sales MCP: get_team_performance
 * - Industry best practices for partner enablement
 * 
 * Last Updated: 2026-02-04
 */

// Solutions team members with partner-relevant skills
const solutionsTeam = [
  {
    name: 'John Petrakis',
    role: 'Solutions Director',
    winRate: 90.8,
    opportunitiesTouched: 65,
    avgDealSize: 185000,
    specialties: ['Cloud Migration', 'AI/ML Validation', 'Enterprise Architecture'],
    partnerAlignment: ['AWS', 'Azure', 'Veeva'],
    territory: 'Company-wide',
    status: 'star',
  },
  {
    name: 'Chris Martinez',
    role: 'Solutions Engineer',
    winRate: 78.5,
    opportunitiesTouched: 42,
    avgDealSize: 125000,
    specialties: ['Cell Therapy', 'Manufacturing QA', 'Equipment Validation'],
    partnerAlignment: ['Cellares', 'Multiply Labs'],
    territory: 'West',
    status: 'ok',
  },
  {
    name: 'Sarah Kim',
    role: 'Solutions Engineer',
    winRate: 82.3,
    opportunitiesTouched: 38,
    avgDealSize: 98000,
    specialties: ['CSV', 'Data Integrity', 'SaaS Validation'],
    partnerAlignment: ['Veeva', 'Box', 'DocuSign'],
    territory: 'West',
    status: 'ok',
  },
  {
    name: 'David Chen',
    role: 'Solutions Engineer',
    winRate: 71.2,
    opportunitiesTouched: 29,
    avgDealSize: 145000,
    specialties: ['AI Governance', 'ML Ops', 'Data Science Platforms'],
    partnerAlignment: ['AWS SageMaker', 'Azure ML', 'Databricks'],
    territory: 'West',
    status: 'ok',
  },
];

// Partner enablement activities
const partnerEnablementActivities = [
  {
    activity: 'Joint Discovery Calls',
    description: 'Solutions team joins partner sales calls to add technical depth',
    impact: '+35% win rate lift on co-sell deals',
    frequency: '5-10/month target',
    owner: 'Solutions Director',
    kpi: 'Partner discovery calls completed',
    status: 'active',
  },
  {
    activity: 'Partner Technical Training',
    description: 'Quarterly sessions to train partner sales on USDM capabilities',
    impact: 'Partners can self-qualify and position opportunities',
    frequency: 'Quarterly per partner',
    owner: 'Solutions Team',
    kpi: 'Partner reps trained, self-qualified leads',
    status: 'needed',
  },
  {
    activity: 'Reference Architecture Development',
    description: 'Pre-built solution blueprints for common partner scenarios',
    impact: 'Faster proposal generation, consistent positioning',
    frequency: '2-3/year per major partner',
    owner: 'Solutions Director',
    kpi: 'Reference architectures published',
    status: 'in-progress',
  },
  {
    activity: 'Partner Demo Environment',
    description: 'Sandbox environments for partners to demo joint solutions',
    impact: 'Partner can demo without USDM presence',
    frequency: 'Always available',
    owner: 'Solutions Engineering',
    kpi: 'Partner demo usage',
    status: 'needed',
  },
  {
    activity: 'Partner Certification Program',
    description: 'Certify partner sales/technical resources on USDM solutions',
    impact: 'Trusted partner reps can position and scope deals',
    frequency: 'Ongoing enrollment',
    owner: 'Solutions Team',
    kpi: 'Certified partner reps',
    status: 'planned',
  },
  {
    activity: 'Joint Proposal Support',
    description: 'Solutions helps partners build joint proposals and SOWs',
    impact: 'Higher quality proposals, faster turnaround',
    frequency: 'As needed',
    owner: 'Solutions Engineering',
    kpi: 'Joint proposals submitted',
    status: 'active',
  },
];

// Partner engagement process
const partnerEngagementProcess = [
  {
    stage: '1. Partner Inbound',
    trigger: 'Partner registers lead or requests support',
    solutionsAction: 'Review opportunity, assess fit, assign SE',
    timeline: '24-48 hours',
    sla: 'Respond within 24 hours',
    tools: 'Partner portal, Salesforce',
  },
  {
    stage: '2. Qualification',
    trigger: 'Partner provides context on opportunity',
    solutionsAction: 'Technical qualification, scope validation, resource planning',
    timeline: '1-3 days',
    sla: 'Qualification complete within 3 days',
    tools: 'Qualification checklist, scoping tool',
  },
  {
    stage: '3. Joint Discovery',
    trigger: 'Qualified opportunity ready for customer engagement',
    solutionsAction: 'Join partner call, lead technical discussion, build rapport',
    timeline: 'As scheduled',
    sla: 'Solutions available within 1 week',
    tools: 'Discovery questionnaire, demo environment',
  },
  {
    stage: '4. Solution Design',
    trigger: 'Discovery complete, customer needs understood',
    solutionsAction: 'Build solution architecture, estimate effort, draft approach',
    timeline: '3-5 days',
    sla: 'Solution design within 1 week',
    tools: 'Reference architectures, estimation templates',
  },
  {
    stage: '5. Proposal Support',
    trigger: 'Customer ready for proposal',
    solutionsAction: 'Review SOW, validate pricing, support partner presentation',
    timeline: '2-3 days',
    sla: 'Proposal support within 48 hours',
    tools: 'SOW templates, pricing calculator',
  },
  {
    stage: '6. Close Support',
    trigger: 'Customer evaluating proposal',
    solutionsAction: 'Answer technical questions, provide references, demo as needed',
    timeline: 'Ongoing',
    sla: 'Response within 24 hours',
    tools: 'Reference library, demo environment',
  },
];

// Key metrics for solutions-partner alignment
const solutionsPartnerMetrics = {
  current: {
    partnerCallsPerMonth: 8,
    avgResponseTime: '48 hours',
    partnerDealsSupported: 12,
    winRateOnPartnerDeals: 55,
    trainedPartnerReps: 5,
  },
  target: {
    partnerCallsPerMonth: 25,
    avgResponseTime: '24 hours',
    partnerDealsSupported: 40,
    winRateOnPartnerDeals: 65,
    trainedPartnerReps: 30,
  },
};

// Solutions team capacity for partner support
const capacityAnalysis = {
  currentHeadcount: 4,
  partnerSupportAllocation: 15, // 15% of time today
  targetPartnerAllocation: 30, // 30% target
  hoursPerMonthCurrent: 96, // 4 SEs × 160 hrs × 15%
  hoursPerMonthTarget: 192, // 4 SEs × 160 hrs × 30%
  gapToClose: 'Either double time allocation or add 1 SE dedicated to partners',
};

const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
};

export default function PartnerSolutions() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Solutions Alignment</h1>
          <Link href="/partner-overview" className="text-purple-400 hover:text-purple-300">← Partner Hub</Link>
        </div>
        <p className="text-slate-300 mb-12 max-w-3xl">
          How the Solutions team enables partner success, accelerates deal velocity, and drives partner-originated revenue.
        </p>

        {/* Key Insight */}
        <section className="mb-12 bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-xl p-8 border border-indigo-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">💡 Why Solutions Alignment is Critical</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400">+35%</div>
              <div className="text-slate-300">Win Rate Lift</div>
              <div className="text-slate-500 text-sm">When Solutions joins partner calls</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-400">843%</div>
              <div className="text-slate-300">Objection Handling</div>
              <div className="text-slate-500 text-sm">Better outcomes with SE support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400">25%</div>
              <div className="text-slate-300">Faster Close</div>
              <div className="text-slate-500 text-sm">Technical pre-qualification saves time</div>
            </div>
          </div>
        </section>

        {/* Solutions Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">👥 Solutions Team (Partner-Ready Resources)</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {solutionsTeam.map((member, idx) => (
              <div key={idx} className={`bg-slate-800/50 rounded-xl p-5 border ${
                member.status === 'star' ? 'border-green-700' : 'border-slate-700'
              }`}>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-white">{member.name}</h3>
                    <div className="text-slate-400 text-sm">{member.role} • {member.territory}</div>
                  </div>
                  <div className={`text-lg font-bold ${member.winRate >= 85 ? 'text-green-400' : member.winRate >= 70 ? 'text-blue-400' : 'text-yellow-400'}`}>
                    {member.winRate}% Win
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm mb-3">
                  <div>
                    <span className="text-slate-500">Opps Touched: </span>
                    <span className="text-white">{member.opportunitiesTouched}</span>
                  </div>
                  <div>
                    <span className="text-slate-500">Avg Deal: </span>
                    <span className="text-green-400">{formatCurrency(member.avgDealSize)}</span>
                  </div>
                </div>
                <div className="space-y-2">
                  <div>
                    <span className="text-slate-500 text-xs">Specialties: </span>
                    <span className="text-blue-400 text-xs">{member.specialties.join(', ')}</span>
                  </div>
                  <div>
                    <span className="text-slate-500 text-xs">Partner Aligned: </span>
                    <span className="text-purple-400 text-xs">{member.partnerAlignment.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-4">
            Source: Labor MCP → get_solutions_team_roster | Sales MCP → get_team_performance
          </p>
        </section>

        {/* Partner Enablement Activities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Partner Enablement Activities</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {partnerEnablementActivities.map((activity, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-bold text-white">{activity.activity}</h3>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${
                    activity.status === 'active' ? 'bg-green-900 text-green-300' :
                    activity.status === 'in-progress' ? 'bg-blue-900 text-blue-300' :
                    activity.status === 'needed' ? 'bg-red-900 text-red-300' :
                    'bg-yellow-900 text-yellow-300'
                  }`}>
                    {activity.status.toUpperCase()}
                  </span>
                </div>
                <p className="text-slate-300 text-sm mb-3">{activity.description}</p>
                <div className="space-y-1 text-sm">
                  <div><span className="text-slate-500">Impact: </span><span className="text-green-400">{activity.impact}</span></div>
                  <div><span className="text-slate-500">Frequency: </span><span className="text-white">{activity.frequency}</span></div>
                  <div><span className="text-slate-500">KPI: </span><span className="text-blue-400">{activity.kpi}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Partner Engagement Process */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Partner Engagement Process</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-400">Stage</th>
                  <th className="text-left p-4 text-slate-400">Trigger</th>
                  <th className="text-left p-4 text-blue-400">Solutions Action</th>
                  <th className="text-left p-4 text-green-400">SLA</th>
                </tr>
              </thead>
              <tbody>
                {partnerEngagementProcess.map((stage, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50">
                    <td className="p-4 text-white font-medium">{stage.stage}</td>
                    <td className="p-4 text-slate-400 text-sm">{stage.trigger}</td>
                    <td className="p-4 text-slate-300 text-sm">{stage.solutionsAction}</td>
                    <td className="p-4 text-green-400 text-sm">{stage.sla}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Metrics Dashboard */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Solutions-Partner Metrics</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Current State */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-red-700/50">
              <h3 className="text-lg font-bold text-red-400 mb-4">Current State</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Partner calls/month</span>
                  <span className="text-white font-bold">{solutionsPartnerMetrics.current.partnerCallsPerMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg response time</span>
                  <span className="text-white font-bold">{solutionsPartnerMetrics.current.avgResponseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Partner deals supported</span>
                  <span className="text-white font-bold">{solutionsPartnerMetrics.current.partnerDealsSupported}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Win rate on partner deals</span>
                  <span className="text-white font-bold">{solutionsPartnerMetrics.current.winRateOnPartnerDeals}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trained partner reps</span>
                  <span className="text-white font-bold">{solutionsPartnerMetrics.current.trainedPartnerReps}</span>
                </div>
              </div>
            </div>
            
            {/* Target State */}
            <div className="bg-slate-800/50 rounded-xl p-6 border border-green-700/50">
              <h3 className="text-lg font-bold text-green-400 mb-4">2026 Target</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-slate-400">Partner calls/month</span>
                  <span className="text-green-400 font-bold">{solutionsPartnerMetrics.target.partnerCallsPerMonth}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Avg response time</span>
                  <span className="text-green-400 font-bold">{solutionsPartnerMetrics.target.avgResponseTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Partner deals supported</span>
                  <span className="text-green-400 font-bold">{solutionsPartnerMetrics.target.partnerDealsSupported}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Win rate on partner deals</span>
                  <span className="text-green-400 font-bold">{solutionsPartnerMetrics.target.winRateOnPartnerDeals}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Trained partner reps</span>
                  <span className="text-green-400 font-bold">{solutionsPartnerMetrics.target.trainedPartnerReps}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Capacity Gap */}
        <section className="mb-12 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-xl p-8 border border-yellow-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">⚠️ Capacity Analysis</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-yellow-400 mb-3">Current Allocation</h3>
              <div className="space-y-2 text-sm">
                <div><span className="text-slate-400">Team Size: </span><span className="text-white">{capacityAnalysis.currentHeadcount} SEs</span></div>
                <div><span className="text-slate-400">Partner Time: </span><span className="text-red-400">{capacityAnalysis.partnerSupportAllocation}%</span></div>
                <div><span className="text-slate-400">Hours/Month: </span><span className="text-white">{capacityAnalysis.hoursPerMonthCurrent} hrs</span></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-green-400 mb-3">Target Allocation</h3>
              <div className="space-y-2 text-sm">
                <div><span className="text-slate-400">Partner Time: </span><span className="text-green-400">{capacityAnalysis.targetPartnerAllocation}%</span></div>
                <div><span className="text-slate-400">Hours/Month: </span><span className="text-white">{capacityAnalysis.hoursPerMonthTarget} hrs</span></div>
                <div><span className="text-slate-400">Gap: </span><span className="text-yellow-400">{capacityAnalysis.gapToClose}</span></div>
              </div>
            </div>
          </div>
          <div className="mt-6 p-4 bg-slate-900/50 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Recommendation</h4>
            <p className="text-slate-300 text-sm">
              To achieve partner growth targets, either (a) increase partner allocation from 15% → 30% for existing team, 
              or (b) hire 1 SE dedicated to partner enablement ($150-180K fully loaded). 
              Option B preferred for sustainable growth.
            </p>
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link href="/partner-west" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors">
              Western Partner Plan →
            </Link>
            <Link href="/partner-plays" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Partner Plays →
            </Link>
          </div>
        </section>

        {/* Data Sources */}
        <section className="mt-12 bg-slate-900/50 rounded-xl p-6 border border-slate-600">
          <h3 className="text-sm font-bold text-slate-400 mb-3">📋 Data Sources</h3>
          <div className="grid md:grid-cols-2 gap-4 text-xs text-slate-500">
            <ul className="space-y-1">
              <li>• Labor MCP → get_solutions_team_roster</li>
              <li>• Labor MCP → get_gold_department_metrics</li>
              <li>• Sales MCP → get_team_performance (Q4 2025)</li>
            </ul>
            <ul className="space-y-1">
              <li>• Win rate lift: Ebsta 2024 B2B Sales Benchmark</li>
              <li>• Objection handling: Forrester Research</li>
              <li>• Capacity analysis: Internal planning estimates</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
}
