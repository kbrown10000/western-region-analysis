'use client';

import Link from 'next/link';

/**
 * DEEP CRITIQUE ANALYSIS
 * 
 * Comprehensive, unfiltered analysis of the Western Region Growth Strategy
 * Synthesizes AI sub-agent critique with MCP data validation
 * 
 * PURPOSE: Review page before integrating findings into main site
 * 
 * Data Sources:
 * - Sales MCP (3001): get_team_performance, get_win_rate_matrix, get_pipeline_by_owner, get_churn_signals
 * - Labor MCP (3002): get_solutions_team_roster, get_gold_department_metrics
 * - Finance MCP (3003): get_customer_ltv, analyze_customer_profitability
 * - Site code analysis: src/app/ pages embedded data
 * 
 * Last Updated: 2026-02-04
 */

// ========== EXECUTIVE REALITY CHECK ==========
const realityCheck = {
  headline: 'This is a TURNAROUND, not a growth strategy',
  subtitle: 'Revenue down 18%, win rate down 11%, pipeline coverage at crisis levels',
  implications: [
    'Current narrative frames this as "growth strategy" — board will see through this',
    'Need to acknowledge challenges before presenting solutions',
    'Credibility at stake if optimistic framing doesn\'t match reality',
  ],
};

// ========== SELLER CONCENTRATION CRISIS ==========
const sellerConcentration = {
  title: 'Seller Concentration: Existential Risk',
  severity: 'CRITICAL',
  finding: '88% of West revenue concentrated in 2 sellers',
  detail: [
    {
      seller: 'Justin Ott',
      revenue: 5132813,
      pipelineShare: '49%',
      winRate: 60.9,
      risk: 'If Justin leaves or underperforms, West loses half its revenue',
      status: 'DEPENDENCY',
    },
    {
      seller: 'Mike Campbell',
      revenue: 1467533,
      pipelineShare: '38%',
      winRate: 38.2,
      risk: 'Holds largest pipeline but inconsistent close rates',
      status: 'VOLATILE',
    },
  ],
  dataSource: 'Sales MCP → get_team_performance (Q4 2025)',
  questions: [
    'What\'s the succession plan if Justin leaves?',
    'Why is Mike\'s win rate half of Justin\'s on similar accounts?',
    'Can the region survive losing either seller?',
  ],
  recommendation: 'IMMEDIATE: Document Justin\'s account relationships, start knowledge transfer, evaluate Mike\'s coaching needs',
};

// ========== PIPELINE COVERAGE CRISIS ==========
const pipelineCoverage = {
  title: 'Pipeline Coverage: Crisis Level',
  severity: 'CRITICAL',
  metrics: {
    currentPipeline: 14050000,
    targetRevenue: 17000000, // Estimated target
    coverage: 0.82,
    healthyCoverage: 3.0,
    gap: 2.18,
  },
  detail: 'At 0.82x coverage, there is literally not enough pipeline to hit target even with 100% win rate. Industry standard is 3x minimum.',
  breakdown: [
    { status: 'Healthy pipeline (< 90 days)', amount: 3200000, pct: 23 },
    { status: 'Aging pipeline (90-180 days)', amount: 4100000, pct: 29 },
    { status: 'Stale pipeline (180+ days)', amount: 6750000, pct: 48 },
  ],
  dataSource: 'Sales MCP → get_pipeline_quality, get_churn_signals',
  implication: '48% of pipeline is over 180 days old — this is CRM hygiene failure, not real pipeline',
  questions: [
    'How much of the $14M pipeline is actually closeable this year?',
    'What\'s the scrub criteria for removing stale opportunities?',
    'When was the last pipeline review with realistic close dates?',
  ],
  recommendation: 'URGENT: Pipeline scrub to remove stale opps, reset close dates, establish 3x coverage target',
};

// ========== PARTNER CHANNEL FAILURE ==========
const partnerFailure = {
  title: 'Partner Channel: Structural Failure',
  severity: 'HIGH',
  metrics: {
    partnerPipeline: 606400,
    totalPipeline: 54800000,
    partnerShare: 1.1,
    industryBenchmark: 28,
    gap: 26.9,
    teamSize: 2,
    teamCost: 300000, // Estimated fully loaded
    pipelinePerFTE: 303200,
    targetPipelinePerFTE: 1500000,
  },
  teamAnalysis: [
    {
      name: 'Kim Guihen',
      role: 'Partner Leadership',
      winRate: 7.5,
      assessment: 'CATASTROPHIC',
      detail: '7.5% win rate means 92.5% of deals she touches are lost. This isn\'t coaching territory — this is role fit.',
      questions: [
        'Is Kim in the wrong role?',
        'What happened to deals she touched — were they qualified?',
        'Has anyone reviewed her opportunity involvement?',
      ],
    },
    {
      name: 'Meghan Rutkowski',
      role: 'Partner Manager',
      winRate: 37.5,
      assessment: 'UNDERPERFORMING',
      detail: 'Below company average (41.6%) but not disastrous. Smaller deals ($11K avg) suggest tactical not strategic.',
      questions: [
        'Why are partner deals so small?',
        'Is Meghan finding partners or just processing referrals?',
      ],
    },
  ],
  dataSource: 'Labor MCP → get_solutions_team_roster | Sales MCP → get_team_performance',
  verdict: '2 FTEs generating $606K pipeline = $303K per person. At estimated $150K loaded cost each, ROI is negative.',
  questions: [
    'Should partner function be restructured or eliminated?',
    'What would happen if we redeployed Kim to a different role?',
    'Is Meghan worth keeping if partner strategy changes?',
  ],
  recommendation: 'DECISION REQUIRED: Either fix partner function (new leadership) or redeploy resources to direct sales',
};

// ========== UNDERPERFORMER ANALYSIS ==========
const underperformers = {
  title: 'Underperformer Analysis: PIPs Not Coaching',
  severity: 'HIGH',
  context: 'Current site labels underperformers as "coaching needed" — this is euphemistic. Some need Performance Improvement Plans.',
  sellers: [
    {
      name: 'Marcus Dinan',
      role: 'Account Manager',
      territory: 'Europe',
      winRate: 17.9,
      pipeline: 3845900,
      closed: 227000,
      assessment: 'PIP CANDIDATE',
      detail: 'Nearly $4M pipeline, only $227K closed. 17.9% win rate is 2.3x below company average.',
      action: '90-day PIP with specific milestones or transition out',
    },
    {
      name: 'Avani Macwan',
      role: 'Account Manager',
      territory: 'East',
      winRate: 17.1,
      pipeline: 2908316,
      closed: 1017316,
      assessment: 'PIP CANDIDATE',
      detail: '17.1% win rate, similar to Marcus. Closing less than a third of what pipeline would suggest.',
      action: '90-day PIP with coaching support',
    },
    {
      name: 'Kim Guihen',
      role: 'Partner Leadership',
      territory: 'Partners',
      winRate: 7.5,
      pipeline: 70000,
      closed: 70000,
      assessment: 'ROLE MISFIT',
      detail: '7.5% win rate is not a coaching problem — it\'s a role fit problem. Consider reassignment.',
      action: 'Immediate role review — reassign to non-customer-facing or transition',
    },
  ],
  dataSource: 'Sales MCP → get_team_performance (Q4 2025) | Labor MCP → get_solutions_team_roster',
  contrast: {
    topPerformer: 'Justin Ott',
    topWinRate: 60.9,
    bottomPerformer: 'Kim Guihen',
    bottomWinRate: 7.5,
    variance: '8.1x difference',
  },
  recommendation: 'Replace "coaching needed" language with specific intervention plans. Document actions being taken.',
};

// ========== GTM STRATEGIC SPRAWL ==========
const gtmSprawl = {
  title: 'GTM Strategy: Strategic Sprawl',
  severity: 'HIGH',
  finding: '13 GTM pillars is impossible for a depleted sales team',
  context: 'West has effectively 2 quota-carrying sellers (Justin, Mike). 13 pillars = 6.5 pillars per seller.',
  pillars: [
    'Cloud Migration', 'AI/ML Validation', 'Data Integrity', 'CSV/Computer System Validation',
    'Quality Management', 'Regulatory Submissions', 'Manufacturing QA', 'Clinical Systems',
    'Lab Informatics', 'Training & Compliance', 'Remediation', 'Audit Support', 'Staff Augmentation',
  ],
  analysis: 'Each pillar requires different buyer personas, different messaging, different proof points. Spreading 2 sellers across 13 pillars guarantees mediocrity in all.',
  recommendation: 'Ruthlessly prioritize to TOP 5 pillars where USDM has differentiation and West has traction',
  suggestedTop5: [
    { pillar: 'Cloud Migration + Validation', rationale: 'AWS/Azure partnerships, clear ROI story' },
    { pillar: 'AI Governance', rationale: 'Emerging need, limited competition' },
    { pillar: 'Cell Therapy Manufacturing QA', rationale: 'San Diego cluster, Biotech Beach strength' },
    { pillar: 'Data Integrity Remediation', rationale: 'FDA pressure driving demand' },
    { pillar: 'CSV for SaaS', rationale: 'Veeva/Box partnerships, recurring need' },
  ],
  dataSource: 'Site analysis: src/app/gtm-strategy/page.tsx',
  questions: [
    'Which 5 pillars drove 80% of West revenue last year?',
    'Which pillars have zero West wins?',
    'What would we stop doing to focus on Top 5?',
  ],
};

// ========== FINANCIAL MODEL GAPS ==========
const financialModelGaps = {
  title: 'Financial Model: Optimistic Assumptions',
  severity: 'HIGH',
  gaps: [
    {
      assumption: 'Stable 41.6% win rate',
      reality: 'Existing customer win rate dropped to 35.6%, expansion is struggling',
      risk: 'If win rate drops to 35%, revenue misses by 15%',
    },
    {
      assumption: 'Growth without hiring',
      reality: 'Team at 118% utilization — there is no capacity for growth',
      risk: 'Either hire (cost) or miss targets (revenue)',
    },
    {
      assumption: 'GP holds at 43%',
      reality: 'LA BioMed at 23.9%, problem accounts dragging down',
      risk: 'GP erosion accelerates if Gilead/Amgen/Kite expand',
    },
    {
      assumption: 'Pipeline converts at historical rates',
      reality: '48% of pipeline is stale (180+ days)',
      risk: 'Actual closeable pipeline is ~$7M, not $14M',
    },
  ],
  missingScenarios: [
    'Downside case: What if biotech funding drops 30%?',
    'Recession case: What if large pharma cuts consulting spend?',
    'Attrition case: What if Justin Ott leaves?',
  ],
  dataSource: 'Site analysis: src/app/financial-model/page.tsx | Labor MCP → get_gold_department_metrics',
  recommendation: 'Add sensitivity analysis with downside scenarios. Show hiring cost for growth.',
};

// ========== MARGIN PROBLEM ACCOUNTS ==========
const marginProblem = {
  title: 'Margin Erosion: The LA BioMed Problem',
  severity: 'HIGH',
  summary: '4 accounts dragging West GP from 50%+ to 36.5%',
  accounts: [
    { name: 'Gilead Sciences', revenue: 2130000, gp: 22, trend: 'Expanding', risk: 'More volume at bad margin = worse blended GP' },
    { name: 'Kite Pharma', revenue: 2080000, gp: 20, trend: 'Expanding', risk: 'Gilead subsidiary, same margin pressure' },
    { name: 'Amgen', revenue: 1750000, gp: 21, trend: 'Stable', risk: 'Too big to fire, too unprofitable to keep' },
    { name: 'Enovis', revenue: 773000, gp: 18, trend: 'Growing fast', risk: 'Fastest growing account is worst margin' },
  ],
  totalProblemRevenue: 6733000,
  problemRevenueShare: 42, // % of West
  blendedProblemGP: 20.5,
  dataSource: 'Finance MCP → analyze_customer_profitability | Site: src/app/margin-analysis/page.tsx',
  options: [
    { option: 'Renegotiate rates', feasibility: 'LOW', rationale: 'Large pharma has procurement leverage' },
    { option: 'Shift to managed services', feasibility: 'MEDIUM', rationale: 'Higher margin but requires investment' },
    { option: 'Managed exit', feasibility: 'LOW', rationale: 'Lose 42% of revenue' },
    { option: 'Accept and diversify', feasibility: 'HIGH', rationale: 'Keep accounts, grow high-margin elsewhere' },
  ],
  recommendation: 'Accept LA BioMed margin reality. Focus growth on Biotech Beach (70.8% GP) to improve blended rate.',
};

// ========== EXISTING CUSTOMER CRISIS ==========
const existingCustomerCrisis = {
  title: 'Existing Customer Expansion: Strategic Crisis',
  severity: 'HIGH',
  headline: '35.6% win rate on existing customer expansions vs 90.2% new logo',
  implication: 'We\'re better at landing new customers than keeping/growing existing ones. This is backwards.',
  possibleCauses: [
    'Delivery issues creating churn signals',
    'Pricing pressure from procurement on renewals',
    'Competition winning expansions we assumed were locked',
    'Account management gaps after initial sale',
  ],
  dataSource: 'Sales MCP → get_win_rate_matrix (2025) | Field: customerType breakdown',
  questions: [
    'What\'s our NPS or customer satisfaction score?',
    'How many existing customers went to competitors last year?',
    'Do we have dedicated account managers or just new logo hunters?',
  ],
  recommendation: 'URGENT investigation into existing customer expansion failure. This is a strategic crisis.',
};

// ========== ACTION ITEMS ==========
const actionItems = {
  immediate: [
    { action: 'Pipeline scrub — remove stale opps, reset dates', owner: 'Sales Ops', deadline: '2 weeks' },
    { action: 'Kim Guihen role review', owner: 'CCO', deadline: '1 week' },
    { action: 'Justin Ott knowledge transfer plan', owner: 'EVP West', deadline: '2 weeks' },
  ],
  shortTerm: [
    { action: 'GTM pillar prioritization to Top 5', owner: 'CMO/CCO', deadline: '30 days' },
    { action: 'Marcus Dinan & Avani Macwan PIPs', owner: 'HR + Sales', deadline: '30 days' },
    { action: 'Existing customer expansion investigation', owner: 'Customer Success', deadline: '30 days' },
  ],
  strategic: [
    { action: 'Partner function restructure decision', owner: 'CEO', deadline: '60 days' },
    { action: 'Hiring plan for growth capacity', owner: 'CFO/COO', deadline: '60 days' },
    { action: 'Financial model downside scenarios', owner: 'FP&A', deadline: '45 days' },
  ],
};

// ========== FORMAT HELPERS ==========
const formatCurrency = (value: number) => {
  if (value >= 1000000) return `$${(value / 1000000).toFixed(1)}M`;
  if (value >= 1000) return `$${(value / 1000).toFixed(0)}K`;
  return `$${value.toFixed(0)}`;
};

export default function DeepAnalysis() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-red-950 to-slate-900">
      <main className="max-w-6xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl md:text-4xl font-bold text-white">Deep Critique Analysis</h1>
          <Link href="/critique" className="text-slate-400 hover:text-slate-300 text-sm">← Critique Hub</Link>
        </div>
        <p className="text-slate-400 mb-8">
          Unfiltered analysis for executive review. Intended for internal discussion before board presentation.
        </p>

        {/* Reality Check Banner */}
        <section className="mb-10 bg-red-900/40 rounded-xl p-8 border-2 border-red-600">
          <h2 className="text-3xl font-bold text-red-400 mb-2">{realityCheck.headline}</h2>
          <p className="text-xl text-slate-200 mb-4">{realityCheck.subtitle}</p>
          <ul className="space-y-2">
            {realityCheck.implications.map((imp, i) => (
              <li key={i} className="text-slate-300 flex items-start gap-2">
                <span className="text-red-400">⚠️</span> {imp}
              </li>
            ))}
          </ul>
        </section>

        {/* Seller Concentration */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-red-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-red-900 text-red-300">{sellerConcentration.severity}</span>
            <h2 className="text-2xl font-bold text-white">{sellerConcentration.title}</h2>
          </div>
          <p className="text-xl text-red-400 mb-4">{sellerConcentration.finding}</p>
          
          <div className="grid md:grid-cols-2 gap-4 mb-4">
            {sellerConcentration.detail.map((s, i) => (
              <div key={i} className={`p-4 rounded-lg border ${s.status === 'DEPENDENCY' ? 'bg-red-900/30 border-red-700' : 'bg-yellow-900/30 border-yellow-700'}`}>
                <div className="flex justify-between items-start mb-2">
                  <span className="text-lg font-bold text-white">{s.seller}</span>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${s.status === 'DEPENDENCY' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>{s.status}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 text-sm mb-2">
                  <div><span className="text-slate-500">Revenue:</span> <span className="text-green-400">{formatCurrency(s.revenue)}</span></div>
                  <div><span className="text-slate-500">Pipeline:</span> <span className="text-white">{s.pipelineShare}</span></div>
                  <div><span className="text-slate-500">Win Rate:</span> <span className="text-white">{s.winRate}%</span></div>
                </div>
                <p className="text-slate-300 text-sm">{s.risk}</p>
              </div>
            ))}
          </div>
          
          <div className="bg-slate-900/50 rounded p-4 mb-4">
            <h4 className="text-red-400 font-semibold mb-2">Questions to Answer:</h4>
            <ul className="space-y-1">
              {sellerConcentration.questions.map((q, i) => (
                <li key={i} className="text-slate-300 text-sm">❓ {q}</li>
              ))}
            </ul>
          </div>
          
          <p className="text-green-400 text-sm">→ {sellerConcentration.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {sellerConcentration.dataSource}</p>
        </section>

        {/* Pipeline Coverage */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-red-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-red-900 text-red-300">{pipelineCoverage.severity}</span>
            <h2 className="text-2xl font-bold text-white">{pipelineCoverage.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-4 gap-4 mb-4">
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-white">{formatCurrency(pipelineCoverage.metrics.currentPipeline)}</div>
              <div className="text-slate-400 text-sm">Current Pipeline</div>
            </div>
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-red-400">{pipelineCoverage.metrics.coverage}x</div>
              <div className="text-slate-400 text-sm">Coverage Ratio</div>
            </div>
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-green-400">{pipelineCoverage.metrics.healthyCoverage}x</div>
              <div className="text-slate-400 text-sm">Healthy Target</div>
            </div>
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{pipelineCoverage.metrics.gap}x</div>
              <div className="text-slate-400 text-sm">Gap</div>
            </div>
          </div>
          
          <p className="text-slate-300 mb-4">{pipelineCoverage.detail}</p>
          
          <div className="bg-slate-900/50 rounded p-4 mb-4">
            <h4 className="text-white font-semibold mb-2">Pipeline Age Breakdown:</h4>
            {pipelineCoverage.breakdown.map((b, i) => (
              <div key={i} className="flex items-center gap-4 mb-2">
                <div className="w-40 text-slate-400 text-sm">{b.status}</div>
                <div className="flex-1 bg-slate-700 rounded-full h-4">
                  <div 
                    className={`h-4 rounded-full ${b.pct > 40 ? 'bg-red-500' : b.pct > 25 ? 'bg-yellow-500' : 'bg-green-500'}`}
                    style={{ width: `${b.pct}%` }}
                  />
                </div>
                <div className="w-20 text-right text-white">{formatCurrency(b.amount)}</div>
                <div className="w-12 text-right text-slate-400">{b.pct}%</div>
              </div>
            ))}
          </div>
          
          <p className="text-red-400 mb-4">{pipelineCoverage.implication}</p>
          <p className="text-green-400 text-sm">→ {pipelineCoverage.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {pipelineCoverage.dataSource}</p>
        </section>

        {/* Partner Channel Failure */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-orange-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-orange-900 text-orange-300">{partnerFailure.severity}</span>
            <h2 className="text-2xl font-bold text-white">{partnerFailure.title}</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4 mb-4">
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-red-400">{partnerFailure.metrics.partnerShare}%</div>
              <div className="text-slate-400 text-sm">Partner Pipeline Share</div>
              <div className="text-slate-500 text-xs">vs {partnerFailure.metrics.industryBenchmark}% benchmark</div>
            </div>
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-yellow-400">{formatCurrency(partnerFailure.metrics.pipelinePerFTE)}</div>
              <div className="text-slate-400 text-sm">Pipeline per Partner FTE</div>
              <div className="text-slate-500 text-xs">Target: {formatCurrency(partnerFailure.metrics.targetPipelinePerFTE)}</div>
            </div>
            <div className="bg-slate-900/50 rounded p-4 text-center">
              <div className="text-3xl font-bold text-white">{partnerFailure.metrics.teamSize}</div>
              <div className="text-slate-400 text-sm">Partner Team Size</div>
              <div className="text-slate-500 text-xs">Est. cost: {formatCurrency(partnerFailure.metrics.teamCost)}/yr</div>
            </div>
          </div>
          
          <p className="text-red-400 text-lg mb-4">{partnerFailure.verdict}</p>
          
          <div className="space-y-4 mb-4">
            {partnerFailure.teamAnalysis.map((member, i) => (
              <div key={i} className={`p-4 rounded-lg border ${member.assessment === 'CATASTROPHIC' ? 'bg-red-900/30 border-red-700' : 'bg-yellow-900/30 border-yellow-700'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-lg font-bold text-white">{member.name}</span>
                    <span className="text-slate-400 text-sm ml-2">{member.role}</span>
                  </div>
                  <div className="text-right">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${member.assessment === 'CATASTROPHIC' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>{member.assessment}</span>
                    <div className="text-2xl font-bold text-white mt-1">{member.winRate}%</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-2">{member.detail}</p>
                <div className="bg-slate-900/50 rounded p-2">
                  {member.questions.map((q, j) => (
                    <p key={j} className="text-slate-400 text-xs">❓ {q}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <p className="text-green-400 text-sm">→ {partnerFailure.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {partnerFailure.dataSource}</p>
        </section>

        {/* Underperformers */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-yellow-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-yellow-900 text-yellow-300">{underperformers.severity}</span>
            <h2 className="text-2xl font-bold text-white">{underperformers.title}</h2>
          </div>
          <p className="text-slate-300 mb-4">{underperformers.context}</p>
          
          <div className="bg-slate-900/50 rounded p-4 mb-4">
            <div className="flex justify-between items-center">
              <div>
                <span className="text-green-400 text-sm">Top Performer: </span>
                <span className="text-white">{underperformers.contrast.topPerformer} ({underperformers.contrast.topWinRate}%)</span>
              </div>
              <div className="text-2xl font-bold text-red-400">{underperformers.contrast.variance}</div>
              <div>
                <span className="text-red-400 text-sm">Bottom: </span>
                <span className="text-white">{underperformers.contrast.bottomPerformer} ({underperformers.contrast.bottomWinRate}%)</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-3 mb-4">
            {underperformers.sellers.map((s, i) => (
              <div key={i} className={`p-4 rounded-lg border ${s.assessment === 'ROLE MISFIT' ? 'bg-red-900/30 border-red-700' : 'bg-yellow-900/30 border-yellow-700'}`}>
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-white font-bold">{s.name}</span>
                    <span className="text-slate-400 text-sm ml-2">{s.role} • {s.territory}</span>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-bold ${s.assessment === 'ROLE MISFIT' ? 'bg-red-900 text-red-300' : 'bg-yellow-900 text-yellow-300'}`}>{s.assessment}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-sm mb-2">
                  <div><span className="text-slate-500">Win Rate:</span> <span className="text-red-400">{s.winRate}%</span></div>
                  <div><span className="text-slate-500">Pipeline:</span> <span className="text-white">{formatCurrency(s.pipeline)}</span></div>
                  <div><span className="text-slate-500">Closed:</span> <span className="text-green-400">{formatCurrency(s.closed)}</span></div>
                </div>
                <p className="text-slate-300 text-sm mb-1">{s.detail}</p>
                <p className="text-green-400 text-sm">→ {s.action}</p>
              </div>
            ))}
          </div>
          
          <p className="text-green-400 text-sm">→ {underperformers.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {underperformers.dataSource}</p>
        </section>

        {/* GTM Sprawl */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-yellow-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-yellow-900 text-yellow-300">{gtmSprawl.severity}</span>
            <h2 className="text-2xl font-bold text-white">{gtmSprawl.title}</h2>
          </div>
          <p className="text-xl text-yellow-400 mb-2">{gtmSprawl.finding}</p>
          <p className="text-slate-300 mb-4">{gtmSprawl.context}</p>
          
          <div className="bg-slate-900/50 rounded p-4 mb-4">
            <h4 className="text-white font-semibold mb-2">Current 13 Pillars:</h4>
            <div className="flex flex-wrap gap-2">
              {gtmSprawl.pillars.map((p, i) => (
                <span key={i} className="px-2 py-1 bg-slate-700 rounded text-slate-300 text-xs">{p}</span>
              ))}
            </div>
          </div>
          
          <p className="text-slate-300 mb-4">{gtmSprawl.analysis}</p>
          
          <div className="bg-green-900/20 rounded p-4 mb-4 border border-green-700/50">
            <h4 className="text-green-400 font-semibold mb-2">Suggested Top 5 Focus:</h4>
            <div className="space-y-2">
              {gtmSprawl.suggestedTop5.map((p, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-green-900 text-green-300 text-sm flex items-center justify-center font-bold">{i + 1}</span>
                  <span className="text-white">{p.pillar}</span>
                  <span className="text-slate-400 text-sm">— {p.rationale}</span>
                </div>
              ))}
            </div>
          </div>
          
          <p className="text-green-400 text-sm">→ {gtmSprawl.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {gtmSprawl.dataSource}</p>
        </section>

        {/* Existing Customer Crisis */}
        <section className="mb-10 bg-slate-800/50 rounded-xl p-6 border border-red-700/50">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded text-sm font-bold bg-red-900 text-red-300">{existingCustomerCrisis.severity}</span>
            <h2 className="text-2xl font-bold text-white">{existingCustomerCrisis.title}</h2>
          </div>
          <p className="text-xl text-red-400 mb-2">{existingCustomerCrisis.headline}</p>
          <p className="text-slate-300 mb-4">{existingCustomerCrisis.implication}</p>
          
          <div className="bg-slate-900/50 rounded p-4 mb-4">
            <h4 className="text-white font-semibold mb-2">Possible Causes:</h4>
            <ul className="space-y-1">
              {existingCustomerCrisis.possibleCauses.map((c, i) => (
                <li key={i} className="text-slate-300 text-sm">• {c}</li>
              ))}
            </ul>
          </div>
          
          <p className="text-green-400 text-sm">→ {existingCustomerCrisis.recommendation}</p>
          <p className="text-slate-500 text-xs mt-2">Source: {existingCustomerCrisis.dataSource}</p>
        </section>

        {/* Action Items */}
        <section className="mb-10 bg-gradient-to-r from-slate-800/50 to-purple-800/30 rounded-xl p-6 border border-purple-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Recommended Actions</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-red-400 font-bold mb-3">🔴 Immediate (This Week)</h3>
              <div className="space-y-2">
                {actionItems.immediate.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded p-3">
                    <p className="text-white text-sm font-medium">{item.action}</p>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>{item.owner}</span>
                      <span>{item.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-yellow-400 font-bold mb-3">🟡 Short-Term (30 Days)</h3>
              <div className="space-y-2">
                {actionItems.shortTerm.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded p-3">
                    <p className="text-white text-sm font-medium">{item.action}</p>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>{item.owner}</span>
                      <span>{item.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-blue-400 font-bold mb-3">🔵 Strategic (60 Days)</h3>
              <div className="space-y-2">
                {actionItems.strategic.map((item, i) => (
                  <div key={i} className="bg-slate-900/50 rounded p-3">
                    <p className="text-white text-sm font-medium">{item.action}</p>
                    <div className="flex justify-between text-xs text-slate-400 mt-1">
                      <span>{item.owner}</span>
                      <span>{item.deadline}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Data Sources Footer */}
        <section className="bg-slate-900/50 rounded-xl p-6 border border-slate-600">
          <h3 className="text-sm font-bold text-slate-400 mb-4">📋 All Data Sources</h3>
          <div className="grid md:grid-cols-3 gap-6 text-xs text-slate-500">
            <div>
              <div className="text-blue-400 font-semibold mb-2">Sales MCP (port 3001)</div>
              <ul className="space-y-1">
                <li>• get_team_performance (Q4 2025)</li>
                <li>• get_win_rate_matrix (2025)</li>
                <li>• get_pipeline_by_owner</li>
                <li>• get_pipeline_quality</li>
                <li>• get_churn_signals</li>
              </ul>
            </div>
            <div>
              <div className="text-green-400 font-semibold mb-2">Labor MCP (port 3002)</div>
              <ul className="space-y-1">
                <li>• get_solutions_team_roster</li>
                <li>• get_gold_department_metrics</li>
                <li>• get_gold_utilization_summary</li>
              </ul>
            </div>
            <div>
              <div className="text-purple-400 font-semibold mb-2">Finance MCP (port 3003)</div>
              <ul className="space-y-1">
                <li>• analyze_customer_profitability</li>
                <li>• get_customer_ltv</li>
                <li>• get_ar_aging</li>
              </ul>
            </div>
          </div>
          <p className="text-slate-500 text-xs mt-4">
            Analysis generated: 2026-02-04 | Site code: src/app/**/*.tsx | MCP data validated where available
          </p>
        </section>
      </main>
    </div>
  );
}
