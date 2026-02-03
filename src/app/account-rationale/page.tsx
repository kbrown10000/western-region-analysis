'use client';

import Link from 'next/link';

interface AccountScore {
  name: string;
  region: string;
  totalScore: number;
  tier: 'Platinum' | 'Gold' | 'Silver';
  scores: {
    funding: number;
    timing: number;
    gtmFit: number;
    expansion: number;
    competition: number;
  };
  rationale: string[];
  gtmPillars: string[];
  entryPoint: string;
  estimatedDealSize: string;
  estimatedMargin: string;
  urgency: 'Immediate' | 'Q1 2026' | 'Q2 2026' | 'Monitor';
  news: string;
}

const topAccounts: AccountScore[] = [
  {
    name: 'Cellares',
    region: 'Bay Area',
    totalScore: 94,
    tier: 'Platinum',
    scores: { funding: 20, timing: 20, gtmFit: 20, expansion: 18, competition: 16 },
    rationale: [
      '$257M Series D (Jan 2026) — fresh capital, expanding operations',
      'FDA Advanced Manufacturing Technology designation — regulatory validation',
      'BMS $380M capacity agreement — working with top pharma',
      'IPO preparation announced — compliance documentation needs surge',
      'New CCO hired (Dec 2025) — leadership transition creates entry point',
      'IDMO (Integrated Drug Manufacturing Organization) — category creator',
    ],
    gtmPillars: ['GxP Managed Services', 'Operating Model', 'AI Governance', 'Domain AI'],
    entryPoint: 'QMS/Documentation for IPO readiness',
    estimatedDealSize: '$500K - $2M',
    estimatedMargin: '45-55%',
    urgency: 'Immediate',
    news: 'IPO prep, FDA AMT designation, BMS partnership',
  },
  {
    name: 'National Resilience',
    region: 'San Diego',
    totalScore: 92,
    tier: 'Platinum',
    scores: { funding: 20, timing: 18, gtmFit: 20, expansion: 18, competition: 16 },
    rationale: [
      '$825M financing (Oct 2025) — massive growth capital',
      'New CEO William Marth (Dec 2024) — fresh leadership, new initiatives',
      'Multi-site CDMO expansion — enterprise-scale needs',
      'CARGO Therapeutics, Parvus partnerships — complex modality manufacturing',
      'Domestic pharma ingredient manufacturing push — regulatory alignment',
      'Strategic CDMO for cell/gene therapy — perfect USDM fit',
    ],
    gtmPillars: ['GxP Managed Services', 'ProcessX', 'Data Integration', 'Operating Model'],
    entryPoint: 'Enterprise QMS for multi-site operations',
    estimatedDealSize: '$1M - $3M',
    estimatedMargin: '40-50%',
    urgency: 'Immediate',
    news: '$825M financing, new CEO, facility expansion',
  },
  {
    name: 'Tune Therapeutics',
    region: 'Seattle',
    totalScore: 89,
    tier: 'Platinum',
    scores: { funding: 18, timing: 20, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      '$175M Series B (Jan 2025) — well-funded for clinical push',
      'New CEO John McHutchison (Mar 2025) — ex-Gilead, knows quality',
      'Hong Kong clinical trial approved (Jan 2025) — global regulatory needs',
      'First-in-class epigenetic silencer — novel modality, complex path',
      'Seattle market — USDM greenfield, first-mover advantage',
      'TUNE-401 moving to clinic — GxP systems needed now',
    ],
    gtmPillars: ['CRO Oversight', 'Operating Model', 'Veeva SME', 'GxP Managed Services'],
    entryPoint: 'Clinical manufacturing QC, IND support',
    estimatedDealSize: '$300K - $800K',
    estimatedMargin: '48-55%',
    urgency: 'Immediate',
    news: 'New CEO, $175M funding, clinical trials starting',
  },
  {
    name: 'Freenome',
    region: 'Bay Area',
    totalScore: 87,
    tier: 'Gold',
    scores: { funding: 18, timing: 18, gtmFit: 17, expansion: 18, competition: 16 },
    rationale: [
      'Going public via SPAC (Dec 2025) — IPO compliance surge',
      'Roche exclusive partnership (Nov 2025) — pharma-grade requirements',
      'Exact Sciences license (Aug 2025) — commercial scale validation',
      'New CEO + CFO (Apr-May 2025) — leadership building infrastructure',
      'NVIDIA AI partnership (Jan 2026) — AI governance needs',
      'Multi-cancer early detection — high regulatory scrutiny',
    ],
    gtmPillars: ['AI Governance', 'Operating Model', 'GxP Managed Services', 'Data Integration'],
    entryPoint: 'IPO readiness, partnership compliance documentation',
    estimatedDealSize: '$400K - $1M',
    estimatedMargin: '45-52%',
    urgency: 'Q1 2026',
    news: 'SPAC IPO, Roche + Exact Sciences partnerships',
  },
  {
    name: 'Deep Genomics',
    region: 'Bay Area',
    totalScore: 85,
    tier: 'Gold',
    scores: { funding: 16, timing: 18, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      'REPRESS AI foundation model launched (May 2025) — AI-native company',
      'Executive hires (Apr 2025) — building out leadership',
      'TechBio leader, Stevie Award winner — credibility',
      'AI for RNA biology — perfect AI governance fit',
      'Clinical-stage programs — GxP needs emerging',
      '$180M funding — well-capitalized',
    ],
    gtmPillars: ['AI Governance', 'Domain AI', 'Data Integration', 'TPRM'],
    entryPoint: 'AI governance framework, model validation',
    estimatedDealSize: '$250K - $600K',
    estimatedMargin: '50-58%',
    urgency: 'Q1 2026',
    news: 'REPRESS AI model launch, exec hires',
  },
  {
    name: '64x Bio',
    region: 'Bay Area',
    totalScore: 84,
    tier: 'Gold',
    scores: { funding: 15, timing: 18, gtmFit: 18, expansion: 17, competition: 16 },
    rationale: [
      'AAV Apex Suite launched (Jun 2025) — manufacturing platform product',
      'George Church spinout — scientific credibility',
      'AI-powered cell line engineering — AI governance fit',
      'Gene therapy manufacturing focus — high-growth segment',
      'CEO Alexis Rovner "20 Under 40" — growing visibility',
      'Brisbane HQ — Bay Area presence',
    ],
    gtmPillars: ['AI Governance', 'GxP Managed Services', 'Domain AI', 'Operating Model'],
    entryPoint: 'Manufacturing platform validation, GxP systems',
    estimatedDealSize: '$200K - $500K',
    estimatedMargin: '48-55%',
    urgency: 'Q1 2026',
    news: 'AAV Apex Suite product launch',
  },
  {
    name: 'Kyverna Therapeutics',
    region: 'Bay Area',
    totalScore: 82,
    tier: 'Gold',
    scores: { funding: 16, timing: 16, gtmFit: 17, expansion: 17, competition: 16 },
    rationale: [
      'First-mover in autoimmune CAR-T — novel indication',
      'Went public 2024 — building public company infrastructure',
      'New CFO (Jun 2025) — finance/compliance focus',
      'Active clinical programs (lupus, MS, MG) — regulatory needs',
      'Securities litigation — creates compliance urgency',
      'Emeryville location — Bay Area coverage',
    ],
    gtmPillars: ['CRO Oversight', 'Operating Model', 'Veeva AI', 'GxP Managed Services'],
    entryPoint: 'Post-IPO compliance, clinical oversight',
    estimatedDealSize: '$250K - $600K',
    estimatedMargin: '45-52%',
    urgency: 'Q1 2026',
    news: 'Autoimmune CAR-T leader, new CFO',
  },
  {
    name: 'GRAIL',
    region: 'Bay Area',
    totalScore: 80,
    tier: 'Silver',
    scores: { funding: 16, timing: 15, gtmFit: 16, expansion: 17, competition: 16 },
    rationale: [
      'PATHFINDER 2 results (Oct 2025) — 7x cancer detection improvement',
      'Galleri test commercial scale — LDT/IVD compliance needs',
      'Multi-cancer early detection leader — high visibility',
      'Public company (NASDAQ: GRAL) — infrastructure in place',
      'Regulatory pathway navigation — FDA engagement',
      'Diagnostic AI platform — AI governance fit',
    ],
    gtmPillars: ['AI Governance', 'Operating Model', 'Data Integration', 'GxP Managed Services'],
    entryPoint: 'Commercial operations quality, regulatory support',
    estimatedDealSize: '$300K - $700K',
    estimatedMargin: '42-50%',
    urgency: 'Q2 2026',
    news: 'PATHFINDER 2 results, Galleri commercialization',
  },
  {
    name: 'Insitro',
    region: 'Bay Area',
    totalScore: 79,
    tier: 'Silver',
    scores: { funding: 17, timing: 14, gtmFit: 17, expansion: 16, competition: 15 },
    rationale: [
      'Founded by Daphne Koller — AI/ML pioneer from Stanford',
      '$400M+ raised — well-funded platform',
      'Machine learning for biology — AI governance natural fit',
      'Speaking at Fortune Brainstorm AI (Dec 2025) — visibility',
      'South San Francisco HQ — Bay Area presence',
      'High-profile, may have existing vendor relationships',
    ],
    gtmPillars: ['AI Governance', 'Domain AI', 'Data Integration', 'TPRM'],
    entryPoint: 'AI governance assessment, model validation',
    estimatedDealSize: '$200K - $500K',
    estimatedMargin: '48-55%',
    urgency: 'Q2 2026',
    news: 'AI drug discovery leader',
  },
  {
    name: 'Sana Biotechnology',
    region: 'Seattle',
    totalScore: 75,
    tier: 'Silver',
    scores: { funding: 18, timing: 12, gtmFit: 16, expansion: 15, competition: 14 },
    rationale: [
      '$700M+ funding — well-capitalized',
      'Gene/cell therapy platform — complex modality',
      'Seattle market leader — anchor for PNW strategy',
      'Active clinical programs — GxP needs',
      '⚠️ Securities fraud litigation (May 2025) — legal risk',
      'Monitor closely — potential compliance needs from litigation',
    ],
    gtmPillars: ['Operating Model', 'CRO Oversight', 'GxP Managed Services'],
    entryPoint: 'Compliance remediation (if needed post-litigation)',
    estimatedDealSize: '$400K - $1M',
    estimatedMargin: '40-48%',
    urgency: 'Monitor',
    news: '⚠️ Securities litigation active - monitor',
  },
];

const scoringCriteria = [
  { name: 'Funding & Runway', weight: '20%', description: 'Recent funding, runway, ability to invest in services' },
  { name: 'Timing Signals', weight: '20%', description: 'New leadership, clinical milestones, regulatory deadlines, IPO prep' },
  { name: 'GTM Fit', weight: '20%', description: 'Alignment with USDM service pillars and delivery capabilities' },
  { name: 'Expansion Potential', weight: '20%', description: 'Multi-year engagement potential, cross-sell opportunities' },
  { name: 'Competitive Position', weight: '20%', description: 'Incumbent advantage, relationship access, win probability' },
];

const tierColors = {
  Platinum: { bg: 'bg-gradient-to-br from-slate-300 to-slate-400', text: 'text-slate-900', border: 'border-slate-300' },
  Gold: { bg: 'bg-gradient-to-br from-yellow-500 to-amber-600', text: 'text-slate-900', border: 'border-yellow-500' },
  Silver: { bg: 'bg-gradient-to-br from-slate-400 to-slate-500', text: 'text-slate-900', border: 'border-slate-400' },
};

const urgencyColors = {
  'Immediate': 'bg-red-500 text-white',
  'Q1 2026': 'bg-orange-500 text-white',
  'Q2 2026': 'bg-yellow-500 text-slate-900',
  'Monitor': 'bg-slate-500 text-white',
};

export default function AccountRationale() {
  const platinumAccounts = topAccounts.filter(a => a.tier === 'Platinum');
  const goldAccounts = topAccounts.filter(a => a.tier === 'Gold');
  const silverAccounts = topAccounts.filter(a => a.tier === 'Silver');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex gap-6">
            <Link href="/gtm-strategy" className="text-slate-400 hover:text-white">GTM Strategy</Link>
            <Link href="/targets" className="text-slate-400 hover:text-white">All Targets</Link>
            <Link href="/action-plan" className="text-slate-400 hover:text-white">Action Plan</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">💎 Account Value & Rationale</h1>
          <p className="text-xl text-slate-400">Strategic prioritization of Western region targets</p>
        </div>

        {/* Scoring Methodology */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Scoring Methodology</h2>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-300 mb-4">Each account is scored 0-100 based on five weighted criteria:</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {scoringCriteria.map((criteria, idx) => (
                <div key={idx} className="bg-slate-700/50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-white font-semibold text-sm">{criteria.name}</span>
                    <span className="text-cyan-400 font-bold">{criteria.weight}</span>
                  </div>
                  <p className="text-slate-400 text-xs">{criteria.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-4 flex gap-4 justify-center">
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Platinum.bg} ${tierColors.Platinum.text}`}>Platinum</span>
                <span className="text-slate-400 text-sm">90-100</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Gold.bg} ${tierColors.Gold.text}`}>Gold</span>
                <span className="text-slate-400 text-sm">80-89</span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierColors.Silver.bg} ${tierColors.Silver.text}`}>Silver</span>
                <span className="text-slate-400 text-sm">70-79</span>
              </div>
            </div>
          </div>
        </section>

        {/* Platinum Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Platinum.bg} ${tierColors.Platinum.text}`}>Platinum</span>
            Highest Value Accounts
          </h2>
          <div className="space-y-6">
            {platinumAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Gold Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Gold.bg} ${tierColors.Gold.text}`}>Gold</span>
            High Value Accounts
          </h2>
          <div className="space-y-6">
            {goldAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Silver Tier */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className={`px-4 py-1 rounded-full text-sm font-bold ${tierColors.Silver.bg} ${tierColors.Silver.text}`}>Silver</span>
            Developing Opportunities
          </h2>
          <div className="space-y-6">
            {silverAccounts.map((account, idx) => (
              <AccountCard key={idx} account={account} />
            ))}
          </div>
        </section>

        {/* Summary Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📋 Quick Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-3 px-4 text-slate-400 font-semibold">Account</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Score</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Urgency</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Est. Deal Size</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Est. Margin</th>
                  <th className="py-3 px-4 text-slate-400 font-semibold">Entry Point</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                {topAccounts.map((account, idx) => (
                  <tr key={idx} className="border-b border-slate-800 hover:bg-slate-800/30">
                    <td className="py-3 px-4 font-medium text-white">{account.name}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-bold ${tierColors[account.tier].bg} ${tierColors[account.tier].text}`}>
                        {account.totalScore}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${urgencyColors[account.urgency]}`}>
                        {account.urgency}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-green-400">{account.estimatedDealSize}</td>
                    <td className="py-3 px-4 text-cyan-400">{account.estimatedMargin}</td>
                    <td className="py-3 px-4 text-slate-400 text-xs">{account.entryPoint}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/gtm-strategy" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View GTM Strategy →
          </Link>
          <Link href="/targets" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← All Targets
          </Link>
        </div>
      </main>
    </div>
  );
}

function AccountCard({ account }: { account: AccountScore }) {
  const tierStyle = tierColors[account.tier];
  
  return (
    <div className={`bg-slate-800/50 rounded-xl border ${tierStyle.border}/30 overflow-hidden`}>
      <div className="p-6">
        {/* Header */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <div className="flex items-center gap-3 mb-1">
              <h3 className="text-xl font-bold text-white">{account.name}</h3>
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${tierStyle.bg} ${tierStyle.text}`}>
                {account.totalScore}
              </span>
              <span className={`px-2 py-1 rounded text-xs font-semibold ${urgencyColors[account.urgency]}`}>
                {account.urgency}
              </span>
            </div>
            <p className="text-slate-400">{account.region}</p>
          </div>
          <div className="text-right">
            <p className="text-green-400 font-bold">{account.estimatedDealSize}</p>
            <p className="text-slate-400 text-sm">{account.estimatedMargin} GP</p>
          </div>
        </div>

        {/* Score Breakdown */}
        <div className="grid grid-cols-5 gap-2 mb-4">
          {Object.entries(account.scores).map(([key, value]) => (
            <div key={key} className="text-center">
              <div className="text-xs text-slate-500 capitalize mb-1">{key}</div>
              <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-cyan-500 rounded-full" 
                  style={{ width: `${value * 5}%` }}
                />
              </div>
              <div className="text-xs text-slate-400 mt-1">{value}/20</div>
            </div>
          ))}
        </div>

        {/* News Banner */}
        <div className="bg-slate-700/50 rounded-lg px-4 py-2 mb-4">
          <span className="text-cyan-400 text-sm font-medium">📰 </span>
          <span className="text-slate-300 text-sm">{account.news}</span>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Rationale */}
          <div>
            <h4 className="text-slate-400 text-sm font-semibold mb-2">Why This Account</h4>
            <ul className="space-y-1">
              {account.rationale.map((reason, idx) => (
                <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>{reason}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* GTM & Entry */}
          <div>
            <h4 className="text-slate-400 text-sm font-semibold mb-2">GTM Alignment</h4>
            <div className="flex flex-wrap gap-1 mb-4">
              {account.gtmPillars.map((pillar, idx) => (
                <span key={idx} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                  {pillar}
                </span>
              ))}
            </div>
            
            <h4 className="text-slate-400 text-sm font-semibold mb-2">Recommended Entry Point</h4>
            <p className="text-white text-sm bg-cyan-900/30 border border-cyan-700/30 rounded-lg px-3 py-2">
              {account.entryPoint}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
