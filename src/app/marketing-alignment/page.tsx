'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

interface CampaignTheme {
  gtmPillar: string;
  campaignName: string;
  targetSegment: string;
  contentAssets: string[];
  pardotJourney: string;
  callToAction: string;
  westernTargets: string[];
  leadScoreBoost: number;
}

const campaignThemes: CampaignTheme[] = [
  {
    gtmPillar: 'AI Governance',
    campaignName: 'AI in Regulated Life Sciences',
    targetSegment: 'AI/ML-focused biotechs, companies with AI job postings',
    contentAssets: [
      'Whitepaper: "Validating AI in GxP Environments"',
      'Webinar: "FDA Expectations for AI/ML in Drug Development"',
      'Checklist: "AI Governance Readiness Assessment"',
      'Case Study: "Establishing AI Validation Frameworks"',
    ],
    pardotJourney: 'AI Governance Nurture → Assessment Offer → Sales Handoff',
    callToAction: 'Free AI Risk Assessment',
    westernTargets: ['Numerion Labs (ex-Atomwise)', 'Deep Genomics', 'Insitro', 'Recursion', 'GRAIL', 'Freenome'],
    leadScoreBoost: 25,
  },
  {
    gtmPillar: 'Cell Therapy Manufacturing',
    campaignName: 'Scale-Up Ready',
    targetSegment: 'Cell/gene therapy companies moving to clinical or commercial',
    contentAssets: [
      'Guide: "GxP Requirements for Cell Therapy Manufacturing"',
      'Webinar: "From Pilot to Production: Scaling CAR-T"',
      'Infographic: "Manufacturing Quality Milestones"',
      'Case Study: "Building QMS for Cell Therapy Scale-Up"',
    ],
    pardotJourney: 'Scale-Up Content → Manufacturing Assessment → Consultation',
    callToAction: 'Manufacturing Readiness Assessment',
    westernTargets: ['Cellares', 'Tune Therapeutics', 'Sana Bio', 'Fate Therapeutics', 'Allogene', 'Kyverna'],
    leadScoreBoost: 30,
  },
  {
    gtmPillar: 'Veeva Ecosystem',
    campaignName: 'Maximize Your Veeva Investment',
    targetSegment: 'Veeva customers, especially emerging/mid-size pharma',
    contentAssets: [
      'Guide: "Getting More from Veeva Without Enterprise Pricing"',
      'Webinar: "Veeva AI Features: Ready or Not?"',
      'ROI Calculator: "Veeva Managed Services Value"',
      'Checklist: "Veeva Renewal Preparation"',
    ],
    pardotJourney: 'Veeva Pain Point → Value Assessment → MS Proposal',
    callToAction: 'Veeva Health Check',
    westernTargets: ['All existing Veeva customers', 'Emerging biotechs post-Series B'],
    leadScoreBoost: 20,
  },
  {
    gtmPillar: 'ProcessX / ServiceNow',
    campaignName: 'Automate GxP IT',
    targetSegment: 'Companies with ServiceNow, manual periodic review pain',
    contentAssets: [
      'Demo: "ProcessX Live Walkthrough"',
      'Whitepaper: "Automating Periodic Reviews in ServiceNow"',
      'ROI Calculator: "Time Saved with ProcessX"',
      'Case Study: "From Manual to Automated GxP Workflows"',
    ],
    pardotJourney: 'Pain Point Content → Demo Request → Pilot Proposal',
    callToAction: 'ProcessX Demo',
    westernTargets: ['Gilead', 'Amgen', 'Large pharma with ServiceNow'],
    leadScoreBoost: 35,
  },
  {
    gtmPillar: 'Seattle Market Entry',
    campaignName: 'Pacific Northwest Life Sciences',
    targetSegment: 'Seattle/PNW biotech companies',
    contentAssets: [
      'Report: "Cascadia Corridor: Biotech Opportunity Analysis"',
      'Event: "USDM Seattle Meet & Greet" (Q1 2026)',
      'Email Series: "Why Seattle Biotechs Choose USDM"',
      'LinkedIn Campaign: PNW-targeted ads',
    ],
    pardotJourney: 'Regional Content → Event Invite → Consultation',
    callToAction: 'Seattle Event RSVP',
    westernTargets: ['Tune', 'Sana', 'Outpace', 'Umoja', 'A-Alpha Bio', 'Aurion'],
    leadScoreBoost: 15,
  },
];

const abmTiers = [
  {
    tier: '1:1 ABM',
    accounts: ['Cellares', 'National Resilience', 'Tune Therapeutics'],
    tactics: [
      'Custom landing pages per account',
      'Personalized content journey',
      'Executive-level outreach',
      'Custom event invitations',
      'Account-specific case studies',
    ],
    investment: 'High',
    expectedReturn: '$500K+ per account',
  },
  {
    tier: '1:Few ABM',
    accounts: ['Freenome', 'Deep Genomics', '64x Bio', 'Kyverna', 'GRAIL', 'Insitro'],
    tactics: [
      'Segment-specific landing pages',
      'Industry vertical content',
      'Targeted LinkedIn ads',
      'Webinar invitations',
      'Nurture sequences by GTM fit',
    ],
    investment: 'Medium',
    expectedReturn: '$150-300K per account',
  },
  {
    tier: '1:Many ABM',
    accounts: ['All other Western targets (50+ companies)'],
    tactics: [
      'Programmatic display ads',
      'Email nurture campaigns',
      'Content syndication',
      'Event promotion',
      'General awareness',
    ],
    investment: 'Low (scaled)',
    expectedReturn: '$50-150K per account',
  },
];

const zoomInfoFilters = [
  { field: 'Industry', values: ['Biotechnology', 'Pharmaceuticals', 'Medical Devices'] },
  { field: 'Location', values: ['California', 'Washington', 'Oregon'] },
  { field: 'Employee Count', values: ['50-500 (emerging)', '500-5000 (growth)', '5000+ (enterprise)'] },
  { field: 'Funding Stage', values: ['Series B+', 'IPO', 'Public'] },
  { field: 'Technologies', values: ['Veeva', 'Salesforce', 'ServiceNow', 'AWS', 'Azure'] },
  { field: 'Intent Signals', values: ['Compliance', 'Validation', 'Quality', 'AI', 'Clinical Trials'] },
];

const leadScoringModel = [
  { category: 'Firmographic', criteria: 'Western region biotech/pharma', points: 10 },
  { category: 'Firmographic', criteria: 'Series B+ or Public', points: 15 },
  { category: 'Firmographic', criteria: 'Cell/gene therapy focus', points: 20 },
  { category: 'Firmographic', criteria: 'Veeva customer (known)', points: 15 },
  { category: 'Behavioral', criteria: 'Downloaded AI governance content', points: 25 },
  { category: 'Behavioral', criteria: 'Attended webinar', points: 20 },
  { category: 'Behavioral', criteria: 'Requested assessment/demo', points: 40 },
  { category: 'Behavioral', criteria: 'Visited pricing page', points: 15 },
  { category: 'Behavioral', criteria: 'Multiple site visits (3+)', points: 10 },
  { category: 'Intent', criteria: 'ZoomInfo intent signal: Compliance', points: 30 },
  { category: 'Intent', criteria: 'ZoomInfo intent signal: AI/ML', points: 25 },
  { category: 'Intent', criteria: 'Recent funding announcement', points: 20 },
  { category: 'Intent', criteria: 'New C-level hire', points: 15 },
  { category: 'Timing', criteria: 'FDA inspection scheduled', points: 35 },
  { category: 'Timing', criteria: 'IPO preparation', points: 30 },
  { category: 'Timing', criteria: 'Clinical trial initiation', points: 25 },
];

const salesforceFields = [
  { object: 'Account', field: 'Western_GTM_Score__c', description: 'Composite GTM alignment score (0-100)' },
  { object: 'Account', field: 'Primary_GTM_Pillar__c', description: 'Best-fit GTM pillar for account' },
  { object: 'Account', field: 'Service_Expansion_Potential__c', description: 'One Trick Pony / Multi-Service' },
  { object: 'Account', field: 'Recent_News__c', description: 'Latest funding/leadership/clinical news' },
  { object: 'Account', field: 'Target_Tier__c', description: 'Platinum / Gold / Silver' },
  { object: 'Lead', field: 'Western_Target_Account__c', description: 'Boolean: Is on Western target list' },
  { object: 'Lead', field: 'GTM_Trigger_Match__c', description: 'Which GTM triggers matched' },
  { object: 'Opportunity', field: 'GTM_Pillar__c', description: 'Which GTM pillar the opp aligns to' },
  { object: 'Opportunity', field: 'Service_Type__c', description: 'Staffing / Project / Managed Services' },
];

export default function MarketingAlignment() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📣 Marketing Alignment</h1>
          <p className="text-xl text-slate-400">Salesforce + Pardot + ZoomInfo → Western Growth</p>
        </div>

        {/* Tech Stack Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔧 Marketing Tech Alignment</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-900/30 rounded-xl p-6 border border-blue-700/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">☁️</span>
                <h3 className="text-xl font-bold text-blue-400">Salesforce</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Account scoring with GTM alignment</li>
                <li>• Custom fields for Western targets</li>
                <li>• Opportunity tracking by service type</li>
                <li>• Dashboard for regional pipeline</li>
                <li>• Integration with Pardot engagement</li>
              </ul>
            </div>

            <div className="bg-orange-900/30 rounded-xl p-6 border border-orange-700/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">📧</span>
                <h3 className="text-xl font-bold text-orange-400">Pardot</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• GTM-aligned nurture journeys</li>
                <li>• Lead scoring by behavior + intent</li>
                <li>• Campaign tracking by pillar</li>
                <li>• Engagement studio automations</li>
                <li>• Form handlers for assessments</li>
              </ul>
            </div>

            <div className="bg-purple-900/30 rounded-xl p-6 border border-purple-700/30">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🔍</span>
                <h3 className="text-xl font-bold text-purple-400">ZoomInfo</h3>
              </div>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li>• Intent data for GTM triggers</li>
                <li>• Contact enrichment for targets</li>
                <li>• Technographic data (Veeva, ServiceNow)</li>
                <li>• Funding/leadership alerts</li>
                <li>• Western region targeting</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ABM Strategy */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Account-Based Marketing Tiers</h2>
          <div className="space-y-4">
            {abmTiers.map((tier, idx) => (
              <div key={idx} className={`rounded-xl p-6 border ${
                idx === 0 ? 'bg-gradient-to-r from-purple-900/40 to-pink-900/20 border-purple-500/50' :
                idx === 1 ? 'bg-gradient-to-r from-yellow-900/30 to-amber-900/20 border-yellow-500/50' :
                'bg-slate-800/50 border-slate-700'
              }`}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{tier.tier}</h3>
                    <p className="text-slate-400 text-sm">Investment: {tier.investment} | Expected: {tier.expectedReturn}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Target Accounts</h4>
                    <div className="flex flex-wrap gap-1">
                      {tier.accounts.map((account, i) => (
                        <span key={i} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{account}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Tactics</h4>
                    <ul className="space-y-1">
                      {tier.tactics.map((tactic, i) => (
                        <li key={i} className="text-slate-300 text-sm flex items-start gap-2">
                          <span className="text-cyan-400">→</span> {tactic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Campaign Themes */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📢 GTM-Aligned Campaigns</h2>
          <div className="space-y-4">
            {campaignThemes.map((campaign, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <span className="text-cyan-400 text-sm font-semibold">{campaign.gtmPillar}</span>
                    <h3 className="text-xl font-bold text-white">{campaign.campaignName}</h3>
                    <p className="text-slate-400 text-sm">{campaign.targetSegment}</p>
                  </div>
                  <div className="text-right">
                    <span className="bg-green-900/50 text-green-400 text-xs px-3 py-1 rounded-full font-semibold">
                      +{campaign.leadScoreBoost} Lead Score
                    </span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Content Assets</h4>
                    <ul className="space-y-1">
                      {campaign.contentAssets.map((asset, i) => (
                        <li key={i} className="text-slate-300 text-xs">• {asset}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Pardot Journey</h4>
                    <p className="text-cyan-400 text-sm">{campaign.pardotJourney}</p>
                    <h4 className="text-slate-400 text-sm font-semibold mt-3 mb-2">CTA</h4>
                    <span className="bg-cyan-900/50 text-cyan-300 text-sm px-3 py-1 rounded">{campaign.callToAction}</span>
                  </div>
                  <div>
                    <h4 className="text-slate-400 text-sm font-semibold mb-2">Western Targets</h4>
                    <div className="flex flex-wrap gap-1">
                      {campaign.westernTargets.slice(0, 5).map((target, i) => (
                        <span key={i} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{target}</span>
                      ))}
                      {campaign.westernTargets.length > 5 && (
                        <span className="text-slate-500 text-xs">+{campaign.westernTargets.length - 5} more</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Lead Scoring */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">⚡ Lead Scoring Model (Pardot)</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">MQL Threshold: <span className="text-green-400 font-bold">100 points</span> | SQL Threshold: <span className="text-cyan-400 font-bold">150 points</span></p>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-slate-400 font-semibold">Category</th>
                    <th className="py-2 px-3 text-slate-400 font-semibold">Criteria</th>
                    <th className="py-2 px-3 text-slate-400 font-semibold text-right">Points</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {leadScoringModel.map((item, idx) => (
                    <tr key={idx} className="border-b border-slate-800">
                      <td className="py-2 px-3">
                        <span className={`text-xs px-2 py-0.5 rounded ${
                          item.category === 'Firmographic' ? 'bg-blue-900/50 text-blue-400' :
                          item.category === 'Behavioral' ? 'bg-green-900/50 text-green-400' :
                          item.category === 'Intent' ? 'bg-purple-900/50 text-purple-400' :
                          'bg-yellow-900/50 text-yellow-400'
                        }`}>{item.category}</span>
                      </td>
                      <td className="py-2 px-3">{item.criteria}</td>
                      <td className="py-2 px-3 text-right font-bold text-cyan-400">+{item.points}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ZoomInfo Filters */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔍 ZoomInfo Targeting Filters</h2>
          <div className="bg-purple-900/20 rounded-xl p-6 border border-purple-700/30">
            <p className="text-slate-300 mb-4">Recommended filters for Western region target list building:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {zoomInfoFilters.map((filter, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-lg p-4">
                  <h4 className="text-purple-400 font-semibold mb-2">{filter.field}</h4>
                  <div className="flex flex-wrap gap-1">
                    {filter.values.map((val, i) => (
                      <span key={i} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">{val}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4 p-4 bg-purple-900/30 rounded-lg">
              <h4 className="text-purple-400 font-semibold mb-2">🎯 Intent Topic Keywords</h4>
              <p className="text-slate-300 text-sm">Configure ZoomInfo Intent for: "CSV", "Computer System Validation", "21 CFR Part 11", "Veeva Vault", "Quality Management System", "GxP", "Cell Therapy Manufacturing", "AI Validation", "Clinical Trial Management"</p>
            </div>
          </div>
        </section>

        {/* Salesforce Custom Fields */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">☁️ Salesforce Custom Fields</h2>
          <div className="bg-blue-900/20 rounded-xl p-6 border border-blue-700/30">
            <p className="text-slate-300 mb-4">Recommended custom fields to support Western growth tracking:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-slate-700">
                    <th className="py-2 px-3 text-slate-400 font-semibold">Object</th>
                    <th className="py-2 px-3 text-slate-400 font-semibold">Field API Name</th>
                    <th className="py-2 px-3 text-slate-400 font-semibold">Purpose</th>
                  </tr>
                </thead>
                <tbody className="text-slate-300">
                  {salesforceFields.map((field, idx) => (
                    <tr key={idx} className="border-b border-slate-800">
                      <td className="py-2 px-3">
                        <span className="bg-blue-900/50 text-blue-400 text-xs px-2 py-0.5 rounded">{field.object}</span>
                      </td>
                      <td className="py-2 px-3 font-mono text-cyan-400 text-xs">{field.field}</td>
                      <td className="py-2 px-3">{field.description}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Marketing Calendar */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📅 Q1 2026 Marketing Calendar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">February 2026</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">📧</span>
                  <span>Launch AI Governance email campaign</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">🎯</span>
                  <span>ZoomInfo list build for Western targets</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">📝</span>
                  <span>Publish AI validation whitepaper</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">🔧</span>
                  <span>Configure Salesforce custom fields</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">March 2026</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">🎤</span>
                  <span>Webinar: "FDA & AI in Drug Development"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">✈️</span>
                  <span>Seattle market development trip</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">🎪</span>
                  <span>Seattle biotech networking event</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">📊</span>
                  <span>Launch Cell Therapy campaign</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-3">April 2026</h3>
              <ul className="space-y-2 text-slate-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-cyan-400">🎤</span>
                  <span>Webinar: "Veeva AI Features"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-purple-400">📧</span>
                  <span>ProcessX campaign to ServiceNow accounts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-400">📈</span>
                  <span>Q1 campaign performance review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">🎯</span>
                  <span>Refine ABM targeting based on Q1 data</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Marketing Success Metrics</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">MQLs from Western</p>
              <p className="text-4xl font-bold text-cyan-400">50</p>
              <p className="text-slate-500 text-xs">Target Q1 2026</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">SQLs from ABM</p>
              <p className="text-4xl font-bold text-green-400">15</p>
              <p className="text-slate-500 text-xs">Target Q1 2026</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">Pipeline Generated</p>
              <p className="text-4xl font-bold text-purple-400">$2M</p>
              <p className="text-slate-500 text-xs">Target Q1 2026</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-1">Seattle Meetings</p>
              <p className="text-4xl font-bold text-yellow-400">10</p>
              <p className="text-slate-500 text-xs">Target Q1 2026</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/gtm-strategy" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View GTM Strategy →
          </Link>
          <Link href="/account-rationale" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Account Rationale
          </Link>
        </div>
      </main>
    </div>
  );
}
