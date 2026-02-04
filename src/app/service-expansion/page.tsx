'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface CustomerService {
  name: string;
  region: string;
  revenue: string;
  gp: string;
  services: string[];
  serviceCount: number;
  primaryService: string;
  expansionOpportunities: string[];
  gtmTriggers: string[];
  staffingPotential: 'High' | 'Medium' | 'Low';
  projectPotential: 'High' | 'Medium' | 'Low';
  managedServicesPotential: 'High' | 'Medium' | 'Low';
  notes: string;
}

const existingCustomers: CustomerService[] = [
  {
    name: 'Gilead Sciences',
    region: 'San Diego',
    revenue: '$2.13M',
    gp: '22%',
    services: ['Staffing'],
    serviceCount: 1,
    primaryService: 'Staffing (T&M)',
    expansionOpportunities: ['Veeva Managed Services', 'ProcessX', 'AI Governance', 'Quality Assurance'],
    gtmTriggers: ['Veeva platform customer', 'Large IT footprint = ServiceNow likely', 'AI initiatives in R&D'],
    staffingPotential: 'High',
    projectPotential: 'High',
    managedServicesPotential: 'High',
    notes: '🔴 ONE TRICK PONY — $2.13M revenue but only staffing at 22% GP. Massive expansion potential.',
  },
  {
    name: 'Kite Pharma',
    region: 'LA',
    revenue: '$2.08M',
    gp: '20%',
    services: ['Staffing'],
    serviceCount: 1,
    primaryService: 'Staffing (T&M)',
    expansionOpportunities: ['CAR-T Manufacturing QA', 'Veeva Clinical', 'CRO Oversight', 'eTMF'],
    gtmTriggers: ['Cell therapy manufacturing', 'Gilead subsidiary = enterprise alignment', 'Active clinical programs'],
    staffingPotential: 'High',
    projectPotential: 'High',
    managedServicesPotential: 'Medium',
    notes: '🔴 ONE TRICK PONY — CAR-T leader stuck in staffing. Cell therapy GTM is perfect fit.',
  },
  {
    name: 'Amgen',
    region: 'LA',
    revenue: '$1.75M',
    gp: '21%',
    services: ['Staffing', 'CSV'],
    serviceCount: 2,
    primaryService: 'Staffing (80%)',
    expansionOpportunities: ['ProcessX', 'Veeva Managed Services', 'AI Governance', 'Data Integration'],
    gtmTriggers: ['Large ServiceNow deployment', 'Veeva enterprise customer', 'AI/ML in drug discovery'],
    staffingPotential: 'High',
    projectPotential: 'Medium',
    managedServicesPotential: 'High',
    notes: '🟡 TWO SERVICES but still mostly staffing. ProcessX is ideal entry for ServiceNow.',
  },
  {
    name: 'Genentech',
    region: 'Bay Area',
    revenue: '$1.8M',
    gp: '42%',
    services: ['CSV', 'Quality Consulting', 'Staffing'],
    serviceCount: 3,
    primaryService: 'Mixed (healthy)',
    expansionOpportunities: ['AI Governance', 'Veeva AI Readiness', 'Domain AI'],
    gtmTriggers: ['Roche subsidiary = enterprise scale', 'AI-heavy R&D', 'Embedded AI in platforms'],
    staffingPotential: 'Medium',
    projectPotential: 'High',
    managedServicesPotential: 'Medium',
    notes: '✅ HEALTHY MIX — Good GP, multiple services. Focus on AI GTM expansion.',
  },
  {
    name: 'Neurocrine Biosciences',
    region: 'San Diego',
    revenue: '$890K',
    gp: '48%',
    services: ['Quality Consulting', 'Validation'],
    serviceCount: 2,
    primaryService: 'Project-based',
    expansionOpportunities: ['Veeva Managed Services', 'GxP Managed Services', 'CRO Oversight'],
    gtmTriggers: ['Growing clinical pipeline', 'Commercial expansion', 'Veeva customer'],
    staffingPotential: 'Medium',
    projectPotential: 'High',
    managedServicesPotential: 'High',
    notes: '✅ GOOD GP — Project-based at 48% margin. Convert to managed services for recurring revenue.',
  },
  {
    name: 'Enovis Corp',
    region: 'San Diego',
    revenue: '$773K',
    gp: '18%',
    services: ['Staffing'],
    serviceCount: 1,
    primaryService: 'Staffing (T&M)',
    expansionOpportunities: ['Quality Consulting', 'Validation Services', 'Managed Services'],
    gtmTriggers: ['Medical devices = different regulatory path', 'Growing company'],
    staffingPotential: 'Medium',
    projectPotential: 'Medium',
    managedServicesPotential: 'Medium',
    notes: '🔴 ONE TRICK PONY — Low margin staffing only. Need rate review AND service expansion.',
  },
];

const oneTrickPonies = existingCustomers.filter(c => c.serviceCount === 1);
const healthyAccounts = existingCustomers.filter(c => c.serviceCount >= 3 || parseFloat(c.gp) >= 40);

// GTM to Service Type mapping
const gtmServiceMapping = [
  {
    gtm: 'AI Governance',
    staffing: { fit: 'Medium', roles: ['AI/ML Compliance Specialist', 'Data Governance Lead', 'Validation Engineer'] },
    project: { fit: 'High', services: ['AI Risk Assessment', 'Policy Development', 'Validation Framework'] },
    managed: { fit: 'High', services: ['Ongoing AI PMO', 'AI Compliance Monitoring'] },
  },
  {
    gtm: 'Veeva Managed Services',
    staffing: { fit: 'High', roles: ['Veeva Admin', 'Vault Specialist', 'Clinical Data Manager'] },
    project: { fit: 'Medium', services: ['Platform Migration', 'Optimization Project'] },
    managed: { fit: 'High', services: ['Tier 1/2 Support', 'Admin Services', 'Release Management'] },
  },
  {
    gtm: 'ProcessX (ServiceNow)',
    staffing: { fit: 'Low', roles: ['ServiceNow Developer'] },
    project: { fit: 'High', services: ['ProcessX Implementation', 'Workflow Automation'] },
    managed: { fit: 'High', services: ['GxP IT Workflow Support', 'Ongoing Automation'] },
  },
  {
    gtm: 'CRO Oversight',
    staffing: { fit: 'High', roles: ['Clinical Trial Manager', 'TMF Specialist', 'CRA'] },
    project: { fit: 'High', services: ['Framework Design', 'CTMS Configuration'] },
    managed: { fit: 'Medium', services: ['Ongoing Oversight Support'] },
  },
  {
    gtm: 'GxP Managed Services',
    staffing: { fit: 'High', roles: ['QA Specialist', 'Validation Engineer', 'Document Control'] },
    project: { fit: 'Medium', services: ['System Assessment', 'Remediation'] },
    managed: { fit: 'High', services: ['Platform Support', 'Periodic Reviews', 'Change Control'] },
  },
  {
    gtm: 'Operating Model',
    staffing: { fit: 'Medium', roles: ['Program Manager', 'Change Management Lead'] },
    project: { fit: 'High', services: ['Assessment', 'Design', 'Implementation'] },
    managed: { fit: 'Low', services: ['Advisory Retainer'] },
  },
  {
    gtm: 'Data Integration',
    staffing: { fit: 'Medium', roles: ['Integration Engineer', 'Data Architect'] },
    project: { fit: 'High', services: ['Architecture Design', 'Implementation'] },
    managed: { fit: 'Medium', services: ['Data Governance Support'] },
  },
  {
    gtm: 'Quality Assurance',
    staffing: { fit: 'High', roles: ['QA Manager', 'QC Specialist', 'Auditor', 'CAPA Lead'] },
    project: { fit: 'High', services: ['Audit Support', 'QMS Implementation', 'Remediation'] },
    managed: { fit: 'High', services: ['QA Support Services', 'Audit Readiness'] },
  },
];

// Revenue mix analysis
const revenueMixAnalysis = {
  current: {
    staffing: { pct: 65, revenue: '$5.8M', avgGP: '22%' },
    project: { pct: 25, revenue: '$2.2M', avgGP: '42%' },
    managed: { pct: 10, revenue: '$0.9M', avgGP: '55%' },
  },
  target: {
    staffing: { pct: 40, revenue: '$4.5M', avgGP: '28%' },
    project: { pct: 30, revenue: '$3.4M', avgGP: '45%' },
    managed: { pct: 30, revenue: '$3.4M', avgGP: '55%' },
  },
};

export default function ServiceExpansion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🎪 Service Expansion Analysis</h1>
          <p className="text-xl text-slate-400">One Trick Ponies → Multi-Service Relationships</p>
        </div>

        <div className="mb-10 bg-gradient-to-br from-cyan-900/20 to-purple-900/10 rounded-xl p-6 border border-cyan-700/30">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <p className="text-white font-semibold">Loop the story: Cloud Assurance → AI Expansion</p>
              <p className="text-slate-300 mt-1">Use Cloud Assurance as the compliance engine to expand AI governance, regulated AI enablement, data foundations, and managed services umbrella deals.</p>
            </div>
            <Link href="/cloud-assurance-expansion" className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
              Open CA→AI Playbook →
            </Link>
          </div>
        </div>

        {/* Revenue Mix Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Revenue Mix: Current vs Target</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-lg font-bold text-white mb-4">Current State (West Region)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Staffing</span>
                    <span className="text-red-400 font-bold">{revenueMixAnalysis.current.staffing.pct}% @ {revenueMixAnalysis.current.staffing.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-red-500 rounded-full" style={{ width: `${revenueMixAnalysis.current.staffing.pct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Project-Based</span>
                    <span className="text-yellow-400 font-bold">{revenueMixAnalysis.current.project.pct}% @ {revenueMixAnalysis.current.project.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-yellow-500 rounded-full" style={{ width: `${revenueMixAnalysis.current.project.pct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Managed Services</span>
                    <span className="text-green-400 font-bold">{revenueMixAnalysis.current.managed.pct}% @ {revenueMixAnalysis.current.managed.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${revenueMixAnalysis.current.managed.pct}%` }} />
                  </div>
                </div>
              </div>
              <p className="text-slate-500 text-sm mt-4">Blended GP: ~34%</p>
            </div>

            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-700/30">
              <h3 className="text-lg font-bold text-white mb-4">Target State (2026)</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Staffing</span>
                    <span className="text-cyan-400 font-bold">{revenueMixAnalysis.target.staffing.pct}% @ {revenueMixAnalysis.target.staffing.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${revenueMixAnalysis.target.staffing.pct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Project-Based</span>
                    <span className="text-cyan-400 font-bold">{revenueMixAnalysis.target.project.pct}% @ {revenueMixAnalysis.target.project.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-cyan-500 rounded-full" style={{ width: `${revenueMixAnalysis.target.project.pct}%` }} />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-slate-400">Managed Services</span>
                    <span className="text-green-400 font-bold">{revenueMixAnalysis.target.managed.pct}% @ {revenueMixAnalysis.target.managed.avgGP} GP</span>
                  </div>
                  <div className="h-4 bg-slate-700 rounded-full overflow-hidden">
                    <div className="h-full bg-green-500 rounded-full" style={{ width: `${revenueMixAnalysis.target.managed.pct}%` }} />
                  </div>
                </div>
              </div>
              <p className="text-green-400 text-sm mt-4 font-semibold">Target Blended GP: ~42%</p>
            </div>
          </div>
        </section>

        {/* One Trick Ponies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">🐴 One Trick Ponies</h2>
          <p className="text-slate-400 mb-6">Accounts with single service relationships — highest expansion potential</p>
          
          <div className="space-y-4">
            {oneTrickPonies.map((customer, idx) => (
              <div key={idx} className="bg-red-900/20 rounded-xl p-6 border border-red-700/30">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{customer.name}</h3>
                    <p className="text-slate-400">{customer.region} • {customer.primaryService}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-white font-bold">{customer.revenue}</p>
                    <p className="text-red-400 font-semibold">{customer.gp} GP ⚠️</p>
                  </div>
                </div>

                <p className="text-yellow-400 text-sm mb-4">{customer.notes}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">🎯 GTM Triggers</h4>
                    <ul className="space-y-1">
                      {customer.gtmTriggers.map((trigger, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-cyan-400">→</span> {trigger}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">🚀 Expansion Opportunities</h4>
                    <div className="flex flex-wrap gap-1">
                      {customer.expansionOpportunities.map((opp, i) => (
                        <span key={i} className="bg-green-900/50 text-green-300 text-xs px-2 py-1 rounded">{opp}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-red-700/30">
                  <h4 className="text-slate-400 text-sm font-semibold mb-2">Service Potential</h4>
                  <div className="flex gap-4">
                    <PotentialBadge label="Staffing" level={customer.staffingPotential} />
                    <PotentialBadge label="Project" level={customer.projectPotential} />
                    <PotentialBadge label="Managed Svc" level={customer.managedServicesPotential} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* GTM to Service Mapping */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-2">🔗 GTM → Service Type Mapping</h2>
          <p className="text-slate-400 mb-6">How each GTM pillar drives Staffing, Project, and Managed Services revenue</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-semibold">GTM Pillar</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Staffing Fit</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Project Fit</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Managed Svc Fit</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {gtmServiceMapping.map((item, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-medium text-white">{item.gtm}</td>
                    <td className="py-3 px-4">
                      <FitCell fit={item.staffing.fit as 'High' | 'Medium' | 'Low'} items={item.staffing.roles} />
                    </td>
                    <td className="py-3 px-4">
                      <FitCell fit={item.project.fit as 'High' | 'Medium' | 'Low'} items={item.project.services} />
                    </td>
                    <td className="py-3 px-4">
                      <FitCell fit={item.managed.fit as 'High' | 'Medium' | 'Low'} items={item.managed.services} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Quality Assurance Deep Dive */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔍 Quality Assurance Expansion</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">📋 Staffing Roles</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• QA Manager / Director</li>
                <li>• QC Specialist / Analyst</li>
                <li>• Quality Systems Lead</li>
                <li>• Internal Auditor</li>
                <li>• CAPA Specialist</li>
                <li>• Document Control Specialist</li>
                <li>• Batch Record Reviewer</li>
                <li>• Supplier Quality Engineer</li>
              </ul>
              <p className="text-green-400 text-sm mt-4 font-semibold">High demand across all cell therapy targets</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-yellow-400 font-bold mb-3">📁 Project-Based</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• QMS Implementation</li>
                <li>• Audit Readiness Assessment</li>
                <li>• 483/Warning Letter Remediation</li>
                <li>• Quality Metrics Program</li>
                <li>• CAPA System Redesign</li>
                <li>• Training Program Development</li>
                <li>• Supplier Qualification Program</li>
                <li>• GMP Gap Assessment</li>
              </ul>
              <p className="text-yellow-400 text-sm mt-4 font-semibold">Best fit for one-time transformations</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-green-400 font-bold mb-3">🔄 Managed Services</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Ongoing QA Support</li>
                <li>• Document Review Service</li>
                <li>• Deviation Management</li>
                <li>• Change Control Processing</li>
                <li>• Audit Support Retainer</li>
                <li>• Quality Metrics Reporting</li>
                <li>• Regulatory Intelligence</li>
                <li>• QMS Maintenance</li>
              </ul>
              <p className="text-green-400 text-sm mt-4 font-semibold">Highest margin, recurring revenue</p>
            </div>
          </div>
        </section>

        {/* Staffing Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">👥 Strategic Staffing Opportunities</h2>
          <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-700/30">
            <p className="text-slate-300 mb-4">Shift from commodity staffing to <span className="text-purple-400 font-semibold">domain-led staffing</span> that supports GTM pillars:</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-purple-400 font-semibold mb-3">🔥 High-Demand Roles (Premium Rates)</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    AI/ML Validation Specialist
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Veeva Vault SME (Clinical, RIM, Quality)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Cell Therapy QA Manager
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Clinical Data Manager (eTMF)
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    ServiceNow GxP Developer
                  </li>
                  <li className="flex items-center gap-2 text-slate-300">
                    <span className="w-2 h-2 bg-purple-400 rounded-full"></span>
                    Regulatory Affairs (CMC)
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-slate-400 font-semibold mb-3">⚠️ Avoid Commodity Staffing</h4>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2 text-slate-500">
                    <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                    Generic QA/QC without domain specialty
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                    IT support without GxP context
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                    Administrative roles
                  </li>
                  <li className="flex items-center gap-2 text-slate-500">
                    <span className="w-2 h-2 bg-slate-500 rounded-full"></span>
                    High-volume, low-margin placements
                  </li>
                </ul>
                <p className="text-slate-500 text-xs mt-3">These drag down margins without strategic value</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pony Transformation Playbook */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📖 Pony → Stallion Transformation Playbook</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">1️⃣</span>
                <div>
                  <h3 className="text-white font-bold">Gilead Sciences → Multi-Service Enterprise</h3>
                  <p className="text-slate-400 text-sm">Current: $2.13M Staffing @ 22% GP</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 1: ProcessX</p>
                  <p className="text-slate-300 text-sm">ServiceNow GxP automation pilot. Entry point for IT relationship expansion.</p>
                  <p className="text-green-400 text-xs mt-2">+$200K @ 50% GP</p>
                </div>
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 2: Veeva MS</p>
                  <p className="text-slate-300 text-sm">Convert Veeva support from internal to USDM managed. Recurring revenue.</p>
                  <p className="text-green-400 text-xs mt-2">+$400K ARR @ 55% GP</p>
                </div>
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 3: AI Governance</p>
                  <p className="text-slate-300 text-sm">AI/ML validation framework for R&D platforms. Strategic advisory.</p>
                  <p className="text-green-400 text-xs mt-2">+$300K @ 48% GP</p>
                </div>
              </div>
              <p className="text-green-400 font-semibold mt-4">Result: $3.0M+ revenue @ 38% blended GP (+16 pts)</p>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <span className="text-3xl">2️⃣</span>
                <div>
                  <h3 className="text-white font-bold">Kite Pharma → Cell Therapy Center of Excellence</h3>
                  <p className="text-slate-400 text-sm">Current: $2.08M Staffing @ 20% GP</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 1: QA Expansion</p>
                  <p className="text-slate-300 text-sm">Cell therapy manufacturing QA project. Audit readiness, GMP gap assessment.</p>
                  <p className="text-green-400 text-xs mt-2">+$250K @ 45% GP</p>
                </div>
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 2: CRO Oversight</p>
                  <p className="text-slate-300 text-sm">ICH E6(R3) framework for clinical programs. CTMS configuration.</p>
                  <p className="text-green-400 text-xs mt-2">+$350K @ 48% GP</p>
                </div>
                <div className="bg-cyan-900/30 rounded-lg p-4 border border-cyan-700/30">
                  <p className="text-cyan-400 font-semibold mb-2">Phase 3: Premium Staffing</p>
                  <p className="text-slate-300 text-sm">Convert commodity staff to cell therapy specialists at premium rates.</p>
                  <p className="text-green-400 text-xs mt-2">Existing $2M @ 28% GP (+8 pts)</p>
                </div>
              </div>
              <p className="text-green-400 font-semibold mt-4">Result: $2.6M+ revenue @ 35% blended GP (+15 pts)</p>
            </div>
          </div>
        </section>

        {/* Summary Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📈 Expansion Impact Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">One Trick Ponies</p>
              <p className="text-4xl font-bold text-red-400">{oneTrickPonies.length}</p>
              <p className="text-slate-500 text-xs">accounts need expansion</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">Pony Revenue</p>
              <p className="text-4xl font-bold text-yellow-400">$5.0M</p>
              <p className="text-slate-500 text-xs">at risk of margin erosion</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">Expansion Potential</p>
              <p className="text-4xl font-bold text-green-400">$1.5M</p>
              <p className="text-slate-500 text-xs">new services to ponies</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">GP Impact</p>
              <p className="text-4xl font-bold text-cyan-400">+12pts</p>
              <p className="text-slate-500 text-xs">if mix shifts to target</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/margin-analysis" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Margin Analysis →
          </Link>
          <Link href="/gtm-strategy" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← GTM Strategy
          </Link>
        </div>
      </main>
    </div>
  );
}

function PotentialBadge({ label, level }: { label: string; level: 'High' | 'Medium' | 'Low' }) {
  const colors = {
    High: 'bg-green-900/50 text-green-400 border-green-700/50',
    Medium: 'bg-yellow-900/50 text-yellow-400 border-yellow-700/50',
    Low: 'bg-slate-700/50 text-slate-400 border-slate-600/50',
  };
  
  return (
    <span className={`px-3 py-1 rounded border text-xs font-semibold ${colors[level]}`}>
      {label}: {level}
    </span>
  );
}

function FitCell({ fit, items }: { fit: 'High' | 'Medium' | 'Low'; items: string[] }) {
  const colors = {
    High: 'text-green-400',
    Medium: 'text-yellow-400',
    Low: 'text-slate-500',
  };
  
  return (
    <div>
      <span className={`font-semibold ${colors[fit]}`}>{fit}</span>
      <div className="text-xs text-slate-500 mt-1">
        {items.slice(0, 2).join(', ')}
        {items.length > 2 && '...'}
      </div>
    </div>
  );
}
