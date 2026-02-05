'use client';

import Link from 'next/link';

/**
 * PARTNER ECOSYSTEM PAGE
 * 
 * Technology partners: AWS, Azure, Veeva, and strategic ecosystem
 * 
 * Research Sources:
 * - AWS Partner Network, Microsoft Partner Network programs
 * - Life sciences cloud adoption trends
 * - USDM service portfolio alignment
 * 
 * Last Updated: 2026-02-04
 */

// Cloud hyperscaler partnerships
const cloudPartners = [
  {
    name: 'Amazon Web Services',
    shortName: 'AWS',
    logo: '☁️',
    currentStatus: 'Limited engagement',
    opportunitySize: '$3-5M/year',
    partnerProgram: 'AWS Partner Network (APN)',
    relevantPrograms: [
      'AWS Life Sciences Competency',
      'AWS Migration Acceleration Program (MAP)',
      'AWS GxP Compliance Program',
    ],
    playAlignment: [
      { play: 'Cloud Migration + Validation', fit: 'PERFECT', notes: 'GxP workload migration' },
      { play: 'AI Governance', fit: 'HIGH', notes: 'SageMaker + AI validation' },
      { play: 'Data Lake Compliance', fit: 'MEDIUM', notes: 'S3/Glue + data integrity' },
    ],
    westernTargets: [
      'Recursion (AI-native, AWS-first)',
      'Insitro (ML platform)',
      'Freenome (genomics)',
      'Biotech Bay startups',
    ],
    investmentRequired: '$75K/year',
    expectedReturn: '$2M pipeline',
    nextSteps: [
      'Apply for APN Select tier',
      'Assign AWS partner manager',
      'Build AWS reference architecture for GxP',
      'Joint webinar: Cloud validation for biotech',
    ],
    priority: 'HIGH',
  },
  {
    name: 'Microsoft Azure',
    shortName: 'Azure',
    logo: '🔷',
    currentStatus: 'Some existing projects',
    opportunitySize: '$2-4M/year',
    partnerProgram: 'Microsoft Partner Network',
    relevantPrograms: [
      'Azure for Life Sciences',
      'Microsoft Cloud for Healthcare',
      'Azure Migrate Program',
    ],
    playAlignment: [
      { play: 'Cloud Migration + Validation', fit: 'PERFECT', notes: 'Azure migrate + CSV' },
      { play: 'Microsoft 365 Compliance', fit: 'HIGH', notes: 'SharePoint/Teams GxP' },
      { play: 'Copilot Governance', fit: 'EMERGING', notes: 'AI governance for M365 Copilot' },
    ],
    westernTargets: [
      'Large pharma (Gilead, Amgen - existing Azure)',
      'Enterprise biotech on M365',
      'Companies with Azure OpenAI interest',
    ],
    investmentRequired: '$50K/year',
    expectedReturn: '$1.5M pipeline',
    nextSteps: [
      'Activate Microsoft Cloud Partner status',
      'Build Copilot governance service offering',
      'Joint event at JPM Week 2027',
    ],
    priority: 'MEDIUM',
  },
];

// Industry-specific technology partners
const industryPartners = [
  {
    name: 'Veeva Systems',
    category: 'Life Sciences Platform',
    logo: '📦',
    currentStatus: 'Active relationship',
    description: 'Industry-leading cloud platform for life sciences (Vault, QMS, RIM, CRM)',
    opportunitySize: '$1.5-2.5M/year',
    playAlignment: [
      { play: 'Veeva Vault CSV', fit: 'PERFECT', notes: 'Core service' },
      { play: 'QMS Implementation', fit: 'HIGH', notes: 'Vault QMS + CSV bundle' },
      { play: 'Regulatory Compliance', fit: 'HIGH', notes: 'RIM + submissions' },
    ],
    westernTargets: [
      'LA BioMed large accounts already on Veeva',
      'New Vault implementations',
      'QMS modernization projects',
    ],
    investmentRequired: '$25K/year',
    expectedReturn: '$1M pipeline',
    nextSteps: [
      'Formalize services partner agreement',
      'Joint customer success stories',
      'Veeva Commercial Summit presence',
    ],
    priority: 'HIGH',
  },
  {
    name: 'Box',
    category: 'Content Cloud',
    logo: '📁',
    currentStatus: 'Active relationship',
    description: 'Secure content management for regulated industries',
    opportunitySize: '$500K-1M/year',
    playAlignment: [
      { play: 'Box Shield Compliance', fit: 'HIGH', notes: 'Security + compliance' },
      { play: 'ECM Migration', fit: 'MEDIUM', notes: 'Legacy ECM → Box' },
    ],
    westernTargets: ['Biotech companies standardizing on Box'],
    investmentRequired: '$15K/year',
    expectedReturn: '$400K pipeline',
    nextSteps: ['Maintain current relationship', 'Case study development'],
    priority: 'MEDIUM',
  },
  {
    name: 'DocuSign',
    category: 'Agreement Cloud',
    logo: '✍️',
    currentStatus: 'Active relationship',
    description: 'Electronic signatures and agreement workflows',
    opportunitySize: '$300-500K/year',
    playAlignment: [
      { play: '21 CFR Part 11 Signatures', fit: 'PERFECT', notes: 'E-sig compliance' },
      { play: 'Quality Agreement Workflows', fit: 'MEDIUM', notes: 'Supplier QA' },
    ],
    westernTargets: ['Any biotech needing compliant e-signatures'],
    investmentRequired: '$10K/year',
    expectedReturn: '$250K pipeline',
    nextSteps: ['Maintain relationship', 'Joint webinar'],
    priority: 'MEDIUM',
  },
];

// Emerging technology partners
const emergingPartners = [
  {
    name: 'Cellares',
    category: 'Cell Therapy Automation',
    logo: '🧬',
    currentStatus: 'Target partner',
    description: 'Automated cell therapy manufacturing platform',
    opportunitySize: '$500K-1M/year',
    relevance: 'USDM provides QA/validation for Cellares implementations',
    westernPresence: 'South San Francisco HQ',
    priority: 'HIGH',
    action: 'Initiate partnership discussion in Q1 2026',
  },
  {
    name: 'Multiply Labs',
    category: 'Robotic Manufacturing',
    logo: '🤖',
    currentStatus: 'Target partner',
    description: 'Robotic systems for pharmaceutical manufacturing',
    opportunitySize: '$300-500K/year',
    relevance: 'USDM validates robotic manufacturing systems',
    westernPresence: 'San Francisco',
    priority: 'MEDIUM',
    action: 'Explore partnership through cell therapy cluster',
  },
  {
    name: 'Benchling',
    category: 'Life Science R&D Cloud',
    logo: '🔬',
    currentStatus: 'Aware',
    description: 'R&D platform for biotech (ELN, LIMS, registry)',
    opportunitySize: '$400-700K/year',
    relevance: 'CSV for Benchling implementations',
    westernPresence: 'San Francisco HQ',
    priority: 'MEDIUM',
    action: 'Partner outreach in Q2 2026',
  },
];

// VC ecosystem partners for new logo acquisition
const vcPartners = [
  {
    name: 'a16z Bio',
    type: 'Venture Capital',
    focus: 'Bio + health tech',
    portfolioCount: '40+',
    westernPortfolio: ['Freenome', 'Devoted Health', 'Akili'],
    opportunityValue: '$500K-1M/year across portfolio',
    approach: 'Portfolio services program',
    priority: 'HIGH',
  },
  {
    name: 'Arch Venture Partners',
    type: 'Venture Capital',
    focus: 'Life sciences',
    portfolioCount: '100+',
    westernPortfolio: ['Grail', 'Beam', 'Prime Medicine'],
    opportunityValue: '$300-600K/year',
    approach: 'Speaking at portfolio days',
    priority: 'HIGH',
  },
  {
    name: 'RA Capital',
    type: 'Venture Capital',
    focus: 'Biotech crossover',
    portfolioCount: '80+',
    westernPortfolio: ['Day One Bio', 'Revolution Medicines'],
    opportunityValue: '$300-500K/year',
    approach: 'Compliance advisory service',
    priority: 'MEDIUM',
  },
  {
    name: 'Polaris Partners',
    type: 'Venture Capital',
    focus: 'Healthcare + tech',
    portfolioCount: '50+',
    westernPortfolio: ['Various biotech'],
    opportunityValue: '$200-400K/year',
    approach: 'Due diligence compliance services',
    priority: 'MEDIUM',
  },
];

// Partner tier structure
const partnerTiers = [
  {
    tier: 'Strategic',
    criteria: '>$500K/year pipeline, executive sponsor, joint marketing',
    benefits: ['Dedicated partner manager', 'Custom pricing', 'Priority support', 'Joint go-to-market'],
    examples: ['AWS', 'Azure', 'Veeva'],
    color: 'green',
  },
  {
    tier: 'Premier',
    criteria: '$100-500K/year pipeline, active co-sell',
    benefits: ['Named contact', 'Partner pricing', 'Co-marketing eligible', 'Deal registration'],
    examples: ['Box', 'DocuSign', 'Cellares'],
    color: 'blue',
  },
  {
    tier: 'Affiliate',
    criteria: '<$100K/year, referral relationship',
    benefits: ['Referral fees', 'Portal access', 'Training materials'],
    examples: ['Regional consultancies', 'VCs', 'Industry associations'],
    color: 'yellow',
  },
];

export default function PartnerEcosystem() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Technology Ecosystem</h1>
          <Link href="/partner-overview" className="text-purple-400 hover:text-purple-300">← Partner Hub</Link>
        </div>
        <p className="text-slate-300 mb-12 max-w-3xl">
          Strategic technology partnerships that drive pipeline and enable joint solutions for the Western region.
        </p>

        {/* Cloud Hyperscalers */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">☁️ Cloud Platform Partners</h2>
          <div className="space-y-6">
            {cloudPartners.map((partner, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-4xl">{partner.logo}</span>
                    <div>
                      <h3 className="text-xl font-bold text-white">{partner.name}</h3>
                      <div className="text-slate-400 text-sm">{partner.partnerProgram}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className={`px-3 py-1 rounded text-sm font-bold ${
                      partner.priority === 'HIGH' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                    }`}>
                      {partner.priority} PRIORITY
                    </span>
                    <div className="text-green-400 font-bold mt-2">{partner.opportunitySize}</div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Left Column */}
                  <div>
                    <div className="mb-4">
                      <span className="text-slate-500 text-sm">Current Status: </span>
                      <span className="text-yellow-400">{partner.currentStatus}</span>
                    </div>
                    
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Relevant Programs</h4>
                    <ul className="space-y-1 mb-4">
                      {partner.relevantPrograms.map((prog, i) => (
                        <li key={i} className="text-slate-300 text-sm">• {prog}</li>
                      ))}
                    </ul>

                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Western Targets</h4>
                    <ul className="space-y-1">
                      {partner.westernTargets.map((target, i) => (
                        <li key={i} className="text-blue-400 text-sm">• {target}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Right Column */}
                  <div>
                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Play Alignment</h4>
                    <div className="space-y-2 mb-4">
                      {partner.playAlignment.map((play, i) => (
                        <div key={i} className="flex items-center justify-between bg-slate-900/50 rounded p-2">
                          <span className="text-white text-sm">{play.play}</span>
                          <span className={`px-2 py-0.5 rounded text-xs ${
                            play.fit === 'PERFECT' ? 'bg-green-900 text-green-300' :
                            play.fit === 'HIGH' ? 'bg-blue-900 text-blue-300' :
                            play.fit === 'EMERGING' ? 'bg-purple-900 text-purple-300' :
                            'bg-slate-700 text-slate-300'
                          }`}>{play.fit}</span>
                        </div>
                      ))}
                    </div>

                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Next Steps</h4>
                    <ul className="space-y-1">
                      {partner.nextSteps.map((step, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-green-400">→</span> {step}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-700 flex justify-between text-sm">
                  <div><span className="text-slate-500">Investment: </span><span className="text-yellow-400">{partner.investmentRequired}</span></div>
                  <div><span className="text-slate-500">Expected Pipeline: </span><span className="text-green-400">{partner.expectedReturn}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Industry Partners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🏢 Industry Technology Partners</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {industryPartners.map((partner, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-3xl">{partner.logo}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                    <div className="text-slate-400 text-xs">{partner.category}</div>
                  </div>
                </div>
                <p className="text-slate-300 text-sm mb-3">{partner.description}</p>
                <div className="text-green-400 font-bold mb-3">{partner.opportunitySize}</div>
                
                <div className="space-y-2 mb-3">
                  {partner.playAlignment.slice(0, 2).map((play, i) => (
                    <div key={i} className="flex items-center justify-between text-sm">
                      <span className="text-slate-400">{play.play}</span>
                      <span className={`px-2 py-0.5 rounded text-xs ${
                        play.fit === 'PERFECT' ? 'bg-green-900 text-green-300' : 'bg-blue-900 text-blue-300'
                      }`}>{play.fit}</span>
                    </div>
                  ))}
                </div>
                
                <div className="pt-3 border-t border-slate-700 flex justify-between text-xs">
                  <span className={`px-2 py-1 rounded ${
                    partner.priority === 'HIGH' ? 'bg-green-900/50 text-green-400' : 'bg-yellow-900/50 text-yellow-400'
                  }`}>{partner.priority}</span>
                  <span className="text-slate-500">{partner.currentStatus}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Emerging Partners */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🚀 Emerging Technology Partners</h2>
          <div className="grid md:grid-cols-3 gap-4">
            {emergingPartners.map((partner, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-purple-700/50">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{partner.logo}</span>
                  <div>
                    <h3 className="text-lg font-bold text-white">{partner.name}</h3>
                    <div className="text-purple-400 text-xs">{partner.category}</div>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-2">{partner.description}</p>
                <div className="space-y-1 text-sm">
                  <div><span className="text-slate-500">Opportunity: </span><span className="text-green-400">{partner.opportunitySize}</span></div>
                  <div><span className="text-slate-500">Western: </span><span className="text-blue-400">{partner.westernPresence}</span></div>
                  <div><span className="text-slate-500">Action: </span><span className="text-yellow-400">{partner.action}</span></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* VC Ecosystem */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💰 VC Ecosystem Partners (New Logo Engine)</h2>
          <p className="text-slate-400 mb-6">
            VC partnerships unlock portfolio company referrals - warm introductions to 10-100+ biotechs per relationship.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full bg-slate-800/50 rounded-xl border border-slate-700">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="text-left p-4 text-slate-400">VC Partner</th>
                  <th className="text-left p-4 text-slate-400">Focus</th>
                  <th className="text-left p-4 text-slate-400">Portfolio Size</th>
                  <th className="text-left p-4 text-blue-400">Western Portfolio</th>
                  <th className="text-left p-4 text-green-400">Opportunity</th>
                  <th className="text-center p-4 text-slate-400">Priority</th>
                </tr>
              </thead>
              <tbody>
                {vcPartners.map((vc, idx) => (
                  <tr key={idx} className="border-b border-slate-700/50">
                    <td className="p-4 text-white font-medium">{vc.name}</td>
                    <td className="p-4 text-slate-400 text-sm">{vc.focus}</td>
                    <td className="p-4 text-slate-300">{vc.portfolioCount}</td>
                    <td className="p-4 text-blue-400 text-sm">{vc.westernPortfolio.join(', ')}</td>
                    <td className="p-4 text-green-400">{vc.opportunityValue}</td>
                    <td className="p-4 text-center">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${
                        vc.priority === 'HIGH' ? 'bg-green-900 text-green-300' : 'bg-yellow-900 text-yellow-300'
                      }`}>{vc.priority}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Partner Tiers */}
        <section className="mb-12 bg-gradient-to-r from-slate-800/50 to-blue-800/30 rounded-xl p-8 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">🏆 Partner Tier Structure</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {partnerTiers.map((tier, idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${
                tier.color === 'green' ? 'bg-green-900/20 border-green-700' :
                tier.color === 'blue' ? 'bg-blue-900/20 border-blue-700' :
                'bg-yellow-900/20 border-yellow-700'
              }`}>
                <h3 className={`text-xl font-bold mb-2 ${
                  tier.color === 'green' ? 'text-green-400' :
                  tier.color === 'blue' ? 'text-blue-400' :
                  'text-yellow-400'
                }`}>{tier.tier}</h3>
                <p className="text-slate-400 text-sm mb-4">{tier.criteria}</p>
                <h4 className="text-white text-sm font-semibold mb-2">Benefits:</h4>
                <ul className="space-y-1 mb-4">
                  {tier.benefits.map((b, i) => (
                    <li key={i} className="text-slate-300 text-sm">✓ {b}</li>
                  ))}
                </ul>
                <div className="pt-3 border-t border-slate-700">
                  <span className="text-slate-500 text-xs">Examples: </span>
                  <span className="text-slate-400 text-xs">{tier.examples.join(', ')}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Next Steps */}
        <section className="text-center">
          <div className="inline-flex gap-4 flex-wrap justify-center">
            <Link href="/partner-solutions" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-lg transition-colors">
              Solutions Alignment →
            </Link>
            <Link href="/partner-plays" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-bold rounded-lg transition-colors">
              Partner Plays →
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
