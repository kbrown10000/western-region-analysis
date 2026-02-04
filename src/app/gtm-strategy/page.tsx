'use client';

import Link from 'next/link';
import targetsData from '../../../data/biotech-targets.json';

interface GTMPillar {
  id: string;
  name: string;
  icon: string;
  color: string;
  triggers: string[];
  entryPoint: string;
  expansion: string;
  targetCriteria: string[];
  westernTargets: string[];
  existingCustomerPlay: string;
}

const gtmPillars: GTMPillar[] = [
  {
    id: 'ai-governance',
    name: 'AI Governance & Risk',
    icon: '🤖',
    color: 'purple',
    triggers: ['"How do we validate AI?"', 'Recent 483 observations', 'AI projects stalled', 'Board pressure on AI risk'],
    entryPoint: 'AI Risk Assessment',
    expansion: 'Policy → Validation Framework → Ongoing AI PMO',
    targetCriteria: ['AI drug discovery companies', 'ML/AI in job postings', 'Using platforms with embedded AI'],
    westernTargets: ['Numerion Labs (ex-Atomwise)', 'Deep Genomics', 'Anagenex', 'A-Alpha Bio', 'Arzeda', 'GRAIL', 'Color Health'],
    existingCustomerPlay: 'Cross-reference with Veeva/Box/ServiceNow customers for embedded AI exposure',
  },
  {
    id: 'embedded-ai',
    name: 'Embedded AI Adoption',
    icon: '🔌',
    color: 'cyan',
    triggers: ['Vendor AI feature releases', 'IT vs QA conflict on AI', 'Platform upgrades with AI'],
    entryPoint: 'Platform AI Assessment',
    expansion: 'Feature Validation → AI Change Control → Ongoing Governance',
    targetCriteria: ['Veeva customers', 'Box customers', 'ServiceNow customers', 'M365 heavy users'],
    westernTargets: ['All existing Veeva customers', 'Gilead', 'Amgen', 'Neurocrine', 'BioMarin'],
    existingCustomerPlay: 'Audit all MSA accounts for Veeva/Box/ServiceNow — high correlation with opportunity',
  },
  {
    id: 'domain-ai',
    name: 'Domain-Led AI Agents',
    icon: '🧠',
    color: 'green',
    triggers: ['Failed AI pilots', 'High-cost manual processes', 'Data quality blocking AI'],
    entryPoint: 'Process Assessment',
    expansion: 'Use Case ID → POC → Production → Optimization',
    targetCriteria: ['Companies with process inefficiencies', 'Prior USDM process consulting clients', 'Firms frustrated with generic AI vendors'],
    westernTargets: ['National Resilience', 'Cellares', '64x Bio', 'Allogene'],
    existingCustomerPlay: 'Target accounts where USDM has delivered process consulting — foundation for AI enablement',
  },
  {
    id: 'veeva-sme',
    name: 'Veeva SME Advisory',
    icon: '📊',
    color: 'blue',
    triggers: ['Veeva support complaints', 'Low feature adoption', 'Upcoming renewals'],
    entryPoint: 'Advisory Engagement',
    expansion: 'Health Check → Optimization Roadmap → Retainer → Managed Services',
    targetCriteria: ['Emerging/mid-size pharma (<$1B)', '12-24 months post-implementation', 'Low module utilization'],
    westernTargets: ['Emerging biotechs scaling past Series C', 'Tune Therapeutics', 'Sana Biotechnology', 'Fate Therapeutics'],
    existingCustomerPlay: 'Segment MSA accounts by size and Veeva footprint — identify renewal dates',
  },
  {
    id: 'veeva-managed',
    name: 'Veeva Managed Services',
    icon: '🛠️',
    color: 'orange',
    triggers: ['Veeva MS pricing complaints', 'Internal admin turnover', 'Support quality escalations'],
    entryPoint: 'Support Assessment',
    expansion: 'Pilot (3-6 mo) → Full MS → Additional Products',
    targetCriteria: ['Current Veeva MS customers', 'Frustrated with Veeva pricing', 'Internal capability gaps'],
    westernTargets: ['All existing Veeva customers in West'],
    existingCustomerPlay: 'Develop competitive pricing analysis vs. Veeva managed services',
  },
  {
    id: 'veeva-ai',
    name: 'Veeva AI Readiness',
    icon: '✨',
    color: 'pink',
    triggers: ['Questions about Veeva AI validation', 'Veeva promoting AI features', 'AI governance seeking platform guidance'],
    entryPoint: 'AI Readiness Assessment',
    expansion: 'Veeva AI Validation → Governance Integration → Ongoing Enablement',
    targetCriteria: ['Veeva customers on modern Vault', 'AI governance initiatives', 'Postponed AI feature enablement'],
    westernTargets: ['All Veeva customers planning upgrades'],
    existingCustomerPlay: 'Cross-reference Veeva accounts with AI governance opportunities',
  },
  {
    id: 'cro-oversight',
    name: 'CRO Oversight & CTMS',
    icon: '🔬',
    color: 'teal',
    triggers: ['ICH E6(R3) readiness', 'Clinical inspection findings', 'CTMS projects', 'CRO performance frustration'],
    entryPoint: 'Oversight Assessment',
    expansion: 'Framework Design → CTMS Config → Ongoing Support',
    targetCriteria: ['Sponsors with CRO-outsourced clinical ops', 'Active clinical programs', 'Vault Clinical implementations'],
    westernTargets: ['Sana Biotechnology', 'Fate Therapeutics', 'Tune Therapeutics', 'Allogene', 'Artiva', 'Boundless Bio'],
    existingCustomerPlay: 'Identify MSA accounts with active clinical programs and CRO relationships',
  },
  {
    id: 'etmf-2027',
    name: 'eTMF Reference Model 2027',
    icon: '📁',
    color: 'yellow',
    triggers: ['eTMF Reference Model questions', 'System upgrade planning', 'TMF audit observations'],
    entryPoint: 'Readiness Assessment',
    expansion: 'Gap Analysis → Remediation → Implementation → Training',
    targetCriteria: ['Established eTMF operations', 'Large active TMF portfolios', 'System upgrades 2025-2027'],
    westernTargets: ['All clinical-stage biotechs with active trials'],
    existingCustomerPlay: 'Target accounts with Veeva Vault Clinical or other eTMF systems',
  },
  {
    id: 'processx',
    name: 'ProcessX (ServiceNow)',
    icon: '⚙️',
    color: 'emerald',
    triggers: ['Manual periodic review complaints', 'IT compliance audit findings', 'ServiceNow expansion'],
    entryPoint: 'Process Assessment',
    expansion: 'Single Workflow Pilot → Additional Workflows → Enterprise → MS',
    targetCriteria: ['ServiceNow deployments', 'Manual GxP IT processes', 'Upcoming computer system inspections'],
    westernTargets: ['Large pharma with ServiceNow (Gilead, Amgen)', 'Scale-ups building IT infrastructure'],
    existingCustomerPlay: 'Map MSA accounts with ServiceNow deployments',
  },
  {
    id: 'gxp-managed',
    name: 'GxP Managed Services',
    icon: '🏢',
    color: 'slate',
    triggers: ['Audit findings on maintenance', 'Team turnover', 'Strategic initiative capacity', 'Budget predictability needs'],
    entryPoint: 'MS Assessment',
    expansion: 'Single Platform → Portfolio → Strategic Advisory',
    targetCriteria: ['Small internal teams vs. large system portfolio', 'Retention challenges', 'Post-implementation customers'],
    westernTargets: ['All implementation customers', 'National Resilience', 'Cellares'],
    existingCustomerPlay: 'Natural extension from USDM implementation work',
  },
  {
    id: 'operating-model',
    name: 'Operating Model Transformation',
    icon: '🔄',
    color: 'indigo',
    triggers: ['Regulatory deadline pressure', 'Significant inspection findings', 'M&A/restructuring', 'Modernization initiatives'],
    entryPoint: 'Operating Model Assessment',
    expansion: 'Target State Design → Roadmap → Execution → Advisory',
    targetCriteria: ['Regulatory deadline exposure', 'Recent inspection observations', 'Organizational transformation'],
    westernTargets: ['Cell therapy companies facing complex regulatory path', 'Tune', 'Outpace', 'Umoja', 'Sana'],
    existingCustomerPlay: 'Track regulatory deadlines (ICH E6(R3), EU AI Act) against account priorities',
  },
  {
    id: 'data-integration',
    name: 'Data Integration & Digital Foundations',
    icon: '🔗',
    color: 'sky',
    triggers: ['Data quality complaints', 'UDI compliance', 'Analytics project planning', 'System integration needs'],
    entryPoint: 'Data Foundation Assessment',
    expansion: 'Architecture → Implementation → Governance → Ongoing',
    targetCriteria: ['Manual data reconciliation', 'Multiple disconnected systems', 'UDI compliance needs'],
    westernTargets: ['Manufacturing scale-ups', 'National Resilience', 'Cellares', 'Companies with multi-site ops'],
    existingCustomerPlay: 'Target accounts with multiple USDM-supported systems',
  },
  {
    id: 'tprm',
    name: 'Third-Party Risk Management',
    icon: '🛡️',
    color: 'red',
    triggers: ['Vendor management audit findings', 'AI vendor risk questions', 'TPRM program needs'],
    entryPoint: 'TPRM Assessment',
    expansion: 'Black Kite → vCISO Advisory → AI Vendor Risk → Managed TPRM',
    targetCriteria: ['Limited TPRM maturity', 'Large vendor ecosystems', 'AI adoption with vendor concerns'],
    westernTargets: ['AI drug discovery companies with multiple AI vendors', 'Numerion Labs', 'Deep Genomics'],
    existingCustomerPlay: 'Position as bundle with existing compliance or security engagements',
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string }> = {
  purple: { bg: 'bg-purple-900/30', border: 'border-purple-700/50', text: 'text-purple-400' },
  cyan: { bg: 'bg-cyan-900/30', border: 'border-cyan-700/50', text: 'text-cyan-400' },
  green: { bg: 'bg-green-900/30', border: 'border-green-700/50', text: 'text-green-400' },
  blue: { bg: 'bg-blue-900/30', border: 'border-blue-700/50', text: 'text-blue-400' },
  orange: { bg: 'bg-orange-900/30', border: 'border-orange-700/50', text: 'text-orange-400' },
  pink: { bg: 'bg-pink-900/30', border: 'border-pink-700/50', text: 'text-pink-400' },
  teal: { bg: 'bg-teal-900/30', border: 'border-teal-700/50', text: 'text-teal-400' },
  yellow: { bg: 'bg-yellow-900/30', border: 'border-yellow-700/50', text: 'text-yellow-400' },
  emerald: { bg: 'bg-emerald-900/30', border: 'border-emerald-700/50', text: 'text-emerald-400' },
  slate: { bg: 'bg-slate-800/50', border: 'border-slate-600/50', text: 'text-slate-300' },
  indigo: { bg: 'bg-indigo-900/30', border: 'border-indigo-700/50', text: 'text-indigo-400' },
  sky: { bg: 'bg-sky-900/30', border: 'border-sky-700/50', text: 'text-sky-400' },
  red: { bg: 'bg-red-900/30', border: 'border-red-700/50', text: 'text-red-400' },
};

export default function GTMStrategy() {
  const allTargets = targetsData.targets;
  const strategicTargets = allTargets.filter(t => t.priority === 'strategic' || t.priority === 'high');

  // Map targets to GTM pillars
  const aiTargets = allTargets.filter(t => 
    t.focus.toLowerCase().includes('ai') || 
    t.focus.toLowerCase().includes('machine learning') ||
    t.focus.toLowerCase().includes('computational')
  );
  
  const cellTherapyTargets = allTargets.filter(t => 
    t.focus.toLowerCase().includes('cell therapy') || 
    t.focus.toLowerCase().includes('car-t') ||
    t.focus.toLowerCase().includes('gene therapy')
  );

  const manufacturingTargets = allTargets.filter(t => 
    t.focus.toLowerCase().includes('manufacturing') || 
    t.focus.toLowerCase().includes('cdmo') ||
    t.focus.toLowerCase().includes('scale')
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎯 GTM Strategy Alignment</h1>
          <p className="text-xl text-slate-400">Mapping Western targets to USDM 2026 Go-To-Market pillars</p>
        </div>

        <div className="mb-10 bg-gradient-to-br from-cyan-900/20 to-purple-900/10 rounded-xl p-6 border border-cyan-700/30">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-white font-semibold">New: Cloud Assurance → AI Expansion Playbook</p>
              <p className="text-slate-300 mt-1">A repeatable CA-led motion to convert existing compliance subscriptions into AI governance, enablement, and managed services expansion.</p>
            </div>
            <Link href="/cloud-assurance-expansion" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
              Open Playbook →
            </Link>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">GTM Pillars</p>
            <p className="text-4xl font-bold text-cyan-400">13</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">AI Targets</p>
            <p className="text-4xl font-bold text-purple-400">{aiTargets.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Cell Therapy</p>
            <p className="text-4xl font-bold text-green-400">{cellTherapyTargets.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Manufacturing</p>
            <p className="text-4xl font-bold text-orange-400">{manufacturingTargets.length}</p>
          </div>
        </div>

        {/* Priority GTMs for Western Region */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔥 Highest-Impact GTMs for Western Region</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-purple-900/40 to-pink-900/20 rounded-xl p-6 border border-purple-500/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🤖</span>
                <h3 className="text-xl font-bold text-white">AI Governance</h3>
              </div>
              <p className="text-slate-300 mb-4">52% of Bay Area biotech funding goes to AI companies. Massive governance gap.</p>
              <div className="space-y-2">
                <p className="text-purple-400 font-semibold text-sm">Top Targets:</p>
                <div className="flex flex-wrap gap-1">
                  {['Numerion Labs', 'Deep Genomics', 'Anagenex', 'A-Alpha Bio'].map(t => (
                    <span key={t} className="bg-purple-900/50 text-purple-300 text-xs px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 rounded-xl p-6 border border-green-500/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔬</span>
                <h3 className="text-xl font-bold text-white">Cell Therapy Scale-Up</h3>
              </div>
              <p className="text-slate-300 mb-4">12+ funded cell therapy companies need GxP manufacturing support as they scale.</p>
              <div className="space-y-2">
                <p className="text-green-400 font-semibold text-sm">Top Targets:</p>
                <div className="flex flex-wrap gap-1">
                  {['Sana Bio', 'Tune', 'Cellares', 'Fate', 'Allogene'].map(t => (
                    <span key={t} className="bg-green-900/50 text-green-300 text-xs px-2 py-1 rounded">{t}</span>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-cyan-900/40 to-blue-900/20 rounded-xl p-6 border border-cyan-500/50">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📊</span>
                <h3 className="text-xl font-bold text-white">Veeva Ecosystem</h3>
              </div>
              <p className="text-slate-300 mb-4">Existing customers + new targets need SME advisory, managed services, and AI readiness.</p>
              <div className="space-y-2">
                <p className="text-cyan-400 font-semibold text-sm">Opportunity:</p>
                <p className="text-slate-400 text-sm">All existing West customers are Veeva opportunities for MS expansion + AI enablement</p>
              </div>
            </div>
          </div>
        </section>

        {/* Western Target → GTM Mapping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Strategic Targets × GTM Alignment</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-semibold">Target</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Region</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Primary GTM</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Secondary GTM</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Entry Point</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { name: 'Sana Biotechnology', region: 'Seattle', primary: 'Cell Therapy Scale-Up', secondary: 'CRO Oversight', entry: 'Operating Model Assessment' },
                  { name: 'Tune Therapeutics', region: 'Seattle', primary: 'Operating Model', secondary: 'CRO Oversight', entry: 'Regulatory Strategy' },
                  { name: 'National Resilience', region: 'San Diego', primary: 'GxP Managed Services', secondary: 'ProcessX', entry: 'MS Assessment' },
                  { name: 'Numerion Labs', region: 'Bay Area', primary: 'AI Governance', secondary: 'TPRM', entry: 'AI Risk Assessment (Win-Back)' },
                  { name: 'Cellares', region: 'Bay Area', primary: 'Domain-Led AI', secondary: 'GxP MS', entry: 'Process Assessment' },
                  { name: 'Deep Genomics', region: 'Bay Area', primary: 'AI Governance', secondary: 'Data Integration', entry: 'AI Risk Assessment' },
                  { name: 'Fate Therapeutics', region: 'San Diego', primary: 'CRO Oversight', secondary: 'eTMF 2027', entry: 'Oversight Assessment' },
                  { name: 'Outpace Bio', region: 'Seattle', primary: 'Operating Model', secondary: 'Veeva SME', entry: 'Regulatory Strategy' },
                  { name: 'Boundless Bio', region: 'San Diego', primary: 'Clinical Stage Support', secondary: 'Regulatory', entry: 'QMS Assessment' },
                  { name: 'A-Alpha Bio', region: 'Seattle', primary: 'AI Governance', secondary: 'Domain AI', entry: 'AI Risk Assessment' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                    <td className="py-3 px-4">{row.region}</td>
                    <td className="py-3 px-4 text-cyan-400">{row.primary}</td>
                    <td className="py-3 px-4 text-slate-400">{row.secondary}</td>
                    <td className="py-3 px-4 text-green-400">{row.entry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* All GTM Pillars */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📚 Full GTM Pillar Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {gtmPillars.map((pillar) => {
              const colors = colorClasses[pillar.color];
              return (
                <div key={pillar.id} className={`${colors.bg} rounded-xl p-5 border ${colors.border}`}>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-2xl">{pillar.icon}</span>
                    <h3 className={`font-bold ${colors.text}`}>{pillar.name}</h3>
                  </div>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Triggers</p>
                      <p className="text-slate-300">{pillar.triggers.slice(0, 2).join(' • ')}</p>
                    </div>
                    
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Entry → Expansion</p>
                      <p className="text-slate-300">{pillar.entryPoint} → {pillar.expansion.split('→')[1]?.trim() || pillar.expansion}</p>
                    </div>
                    
                    <div>
                      <p className="text-slate-500 text-xs uppercase tracking-wide mb-1">Western Targets</p>
                      <div className="flex flex-wrap gap-1">
                        {pillar.westernTargets.slice(0, 4).map((t, i) => (
                          <span key={i} className="bg-slate-700/50 text-slate-300 text-xs px-2 py-0.5 rounded">{t}</span>
                        ))}
                        {pillar.westernTargets.length > 4 && (
                          <span className="text-slate-500 text-xs">+{pillar.westernTargets.length - 4} more</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Existing Customer Plays */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💼 Existing Customer GTM Plays</h2>
          <div className="space-y-4">
            <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
              <h3 className="text-red-400 font-bold mb-3">⚠️ Margin Recovery + Service Expansion</h3>
              <p className="text-slate-300 mb-3">Low-margin mega-customers (Gilead, Kite, Amgen, Enovis at ~20% GP) are prime candidates for:</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold">Veeva Managed Services</p>
                  <p className="text-slate-400 text-sm">Convert T&M to managed services for predictable revenue + better margins</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold">Embedded AI Adoption</p>
                  <p className="text-slate-400 text-sm">All are Veeva customers — AI feature enablement is immediate opportunity</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-green-400 font-semibold">ProcessX</p>
                  <p className="text-slate-400 text-sm">Large pharma = ServiceNow deployments = ProcessX opportunity</p>
                </div>
              </div>
            </div>

            <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
              <h3 className="text-green-400 font-bold mb-3">✅ High-Margin Expansion</h3>
              <p className="text-slate-300 mb-3">High-margin customers (PTC 96%, Abbott 64%, Harmony 93%) — protect and expand:</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-cyan-400 font-semibold">Veeva AI Readiness</p>
                  <p className="text-slate-400 text-sm">Help them adopt Vault AI safely — maintains trusted advisor status</p>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <p className="text-purple-400 font-semibold">AI Governance Program</p>
                  <p className="text-slate-400 text-sm">Establish governance frameworks before they go elsewhere</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Territory Planning Actions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📍 Western Territory Planning Actions</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <span className="bg-cyan-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
                <div>
                  <h4 className="text-white font-semibold">Map MSA accounts against AI initiatives</h4>
                  <p className="text-slate-400 text-sm">Check press releases, LinkedIn, job postings for "AI" or "ML" roles. Cross-reference with Veeva/Box/ServiceNow customers.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-cyan-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
                <div>
                  <h4 className="text-white font-semibold">Identify accounts with recent FDA inspections</h4>
                  <p className="text-slate-400 text-sm">Public 483s, warning letters = immediate qualification trigger for AI Governance and Operating Model.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-cyan-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
                <div>
                  <h4 className="text-white font-semibold">Segment by Veeva footprint and renewal dates</h4>
                  <p className="text-slate-400 text-sm">Approaching renewals = leverage point for Managed Services and SME Advisory conversations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-cyan-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
                <div>
                  <h4 className="text-white font-semibold">Seattle market development trip Q1 2026</h4>
                  <p className="text-slate-400 text-sm">Zero presence in fastest-growing market. Target Sana, Tune, Outpace, Umoja, A-Alpha Bio.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="bg-cyan-500 text-slate-900 w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">5</span>
                <div>
                  <h4 className="text-white font-semibold">Develop cell therapy manufacturing package</h4>
                  <p className="text-slate-400 text-sm">Bundle: Operating Model + CRO Oversight + GxP Managed Services for clinical-to-commercial scale-up.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Reference */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">⚡ GTM Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-3 text-slate-400 font-semibold">Pillar</th>
                  <th className="py-3 px-3 text-slate-400 font-semibold">Primary Trigger</th>
                  <th className="py-3 px-3 text-slate-400 font-semibold">Entry Point</th>
                  <th className="py-3 px-3 text-slate-400 font-semibold">Expansion</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {[
                  { pillar: 'AI Governance', trigger: '"How do we validate AI?"', entry: 'AI Risk Assessment', expansion: 'Governance Program' },
                  { pillar: 'Embedded AI', trigger: 'Platform AI releases', entry: 'Platform AI Assessment', expansion: 'Feature Validation' },
                  { pillar: 'Domain AI', trigger: 'Failed AI pilots', entry: 'Process Assessment', expansion: 'POC to Production' },
                  { pillar: 'Veeva SME', trigger: 'Support complaints', entry: 'Advisory Engagement', expansion: 'Managed Services' },
                  { pillar: 'Veeva MS', trigger: 'Pricing/service gaps', entry: 'Support Assessment', expansion: 'Full Managed Services' },
                  { pillar: 'Veeva AI', trigger: 'AI enablement questions', entry: 'AI Readiness Assessment', expansion: 'Feature Enablement' },
                  { pillar: 'CRO Oversight', trigger: 'ICH E6(R3) readiness', entry: 'Oversight Assessment', expansion: 'CTMS Configuration' },
                  { pillar: 'eTMF 2027', trigger: 'System upgrade planning', entry: 'Readiness Assessment', expansion: 'Full Remediation' },
                  { pillar: 'ProcessX', trigger: 'Manual process complaints', entry: 'Process Assessment', expansion: 'Enterprise Rollout' },
                  { pillar: 'GxP MS', trigger: 'Team capacity constraints', entry: 'MS Assessment', expansion: 'Portfolio Expansion' },
                  { pillar: 'Operating Model', trigger: 'Regulatory deadlines', entry: 'Assessment', expansion: 'Transformation' },
                  { pillar: 'Data Integration', trigger: 'Data quality complaints', entry: 'Foundation Assessment', expansion: 'Full Integration' },
                  { pillar: 'TPRM', trigger: 'Vendor audit findings', entry: 'TPRM Assessment', expansion: 'Managed TPRM' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-slate-800">
                    <td className="py-2 px-3 font-medium text-white">{row.pillar}</td>
                    <td className="py-2 px-3 text-slate-400">{row.trigger}</td>
                    <td className="py-2 px-3 text-cyan-400">{row.entry}</td>
                    <td className="py-2 px-3 text-green-400">{row.expansion}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/action-plan" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Action Plan →
          </Link>
          <Link href="/targets" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← View All Targets
          </Link>
        </div>
      </main>
    </div>
  );
}
