'use client';

import Link from 'next/link';
import Image from 'next/image';

/**
 * VISUAL SUMMARY PAGE
 * 
 * Infographics summarizing the Western Region Growth Strategy
 * Generated using Nano Banana Pro (Gemini 3 Pro Image)
 * 
 * Last Updated: 2026-02-04
 */

const infographics = [
  {
    id: 1,
    title: 'Territory Engine',
    subtitle: 'The 4 Pistons of the Western Region',
    filename: '01-territory-engine.png',
    description: 'Each territory operates like a piston in the regional engine. Biotech Beach is high-performing, LA BioMed needs margin fixes, Biotech Bay is underpenetrated, Cascadia is greenfield.',
    linkedPage: '/territories',
    keyMetrics: ['Biotech Beach: 70.8% GP', 'LA BioMed: 23.9% GP', 'Biotech Bay: Underpenetrated', 'Cascadia: $0 pipeline'],
  },
  {
    id: 2,
    title: 'Partner Channel Gap',
    subtitle: 'USDM vs Industry Benchmarks',
    filename: '02-partner-gap.png',
    description: 'Partner-sourced revenue at USDM is 1.1% vs 28% industry average. Top performers get 58% from partners. Partner deals offer 40% higher value and 53% better close rates.',
    linkedPage: '/partner-overview',
    keyMetrics: ['USDM: 1.1%', 'Industry: 28%', 'Top Performers: 58%', 'Gap: 27 points'],
  },
  {
    id: 3,
    title: 'Seller Performance Variance',
    subtitle: '8.1x Gap Between Best and Worst',
    filename: '03-seller-variance.png',
    description: 'Dramatic performance variance across sellers. Justin Ott leads at 60.9% win rate, Mike Campbell needs coaching at 38.2%, Kim Guihen\'s 7.5% is a critical concern.',
    linkedPage: '/team-capacity',
    keyMetrics: ['Justin: 60.9%', 'Mike: 38.2%', 'Kim: 7.5%', 'Company avg: 41.6%'],
  },
  {
    id: 4,
    title: 'Pipeline Coverage Crisis',
    subtitle: '0.82x Coverage When 3x is Healthy',
    filename: '04-pipeline-crisis.png',
    description: 'Pipeline coverage is in crisis territory at 0.82x vs the 3x healthy target. 48% of pipeline is stale (over 180 days old) — this is CRM hygiene failure, not real pipeline.',
    linkedPage: '/critique/deep-analysis',
    keyMetrics: ['Coverage: 0.82x', 'Target: 3.0x', 'Stale (180+ days): 48%', 'Healthy: 23%'],
  },
  {
    id: 5,
    title: 'Margin Erosion',
    subtitle: 'The LA BioMed Problem',
    filename: '05-margin-problem.png',
    description: '4 mega-accounts are dragging West GP from 50%+ to 36.5%. Gilead, Kite, Amgen, and Enovis together represent $6.73M at just 20.5% GP.',
    linkedPage: '/margin-analysis',
    keyMetrics: ['Problem revenue: $6.73M', 'Problem GP: 20.5%', 'Star GP: 40%+', 'Impact: -15 points'],
  },
  {
    id: 6,
    title: 'GTM Prioritization',
    subtitle: 'From 13 Pillars to Top 5 Focus',
    filename: '06-gtm-focus.png',
    description: '13 GTM pillars is strategic sprawl for 2 sellers. Ruthless prioritization needed: Cloud Migration, AI Governance, Cell Therapy QA, Data Integrity, CSV for SaaS.',
    linkedPage: '/gtm-strategy',
    keyMetrics: ['Current: 13 pillars', 'Recommended: 5 pillars', 'Sellers: 2', 'Focus = Win'],
  },
  {
    id: 7,
    title: 'Turnaround Reality',
    subtitle: 'This is NOT a Growth Strategy',
    filename: '07-turnaround-reality.png',
    description: 'Revenue down 18%, win rate down 11 points. Expansion win rate (35.6%) dramatically lower than new logo (90.2%). We\'re better at landing than keeping customers.',
    linkedPage: '/critique/deep-analysis',
    keyMetrics: ['Revenue: -18%', 'Win Rate: 41.6% (was 52%)', 'Expansion: 35.6%', 'New Logo: 90.2%'],
  },
  {
    id: 8,
    title: 'Partner Investment ROI',
    subtitle: '$300K Investment → $4.8M Pipeline',
    filename: '08-investment-roi.png',
    description: 'The ask: $300K investment across 4 territories. Expected return: $4.8M partner-sourced pipeline. Target: 10% of West from partners by end of 2026.',
    linkedPage: '/partner-west',
    keyMetrics: ['Investment: $300K', 'Return: $4.8M', 'ROI: 16x', 'Target: 10% share'],
  },
];

export default function VisualSummary() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Visual Summary</h1>
          <Link href="/" className="text-blue-400 hover:text-blue-300">← Back</Link>
        </div>
        <p className="text-slate-300 mb-4 max-w-3xl text-lg">
          Key concepts from the Western Region Growth Strategy visualized for clarity.
        </p>
        <p className="text-slate-400 mb-12 max-w-3xl text-sm">
          Generated with Nano Banana Pro (Gemini 3 Pro Image) • Click any infographic for detailed analysis
        </p>

        {/* Infographics Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {infographics.map((info) => (
            <div key={info.id} className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-indigo-500/50 transition-all group">
              {/* Image */}
              <div className="relative aspect-video bg-slate-900 overflow-hidden">
                <Image
                  src={`/infographics/${info.filename}`}
                  alt={info.title}
                  fill
                  className="object-contain p-2"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-4">
                  <Link 
                    href={info.linkedPage}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-lg"
                  >
                    View Details →
                  </Link>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <h2 className="text-xl font-bold text-white">{info.id}. {info.title}</h2>
                    <p className="text-indigo-400 text-sm">{info.subtitle}</p>
                  </div>
                </div>
                <p className="text-slate-400 text-sm mb-4">{info.description}</p>
                
                {/* Key Metrics */}
                <div className="flex flex-wrap gap-2">
                  {info.keyMetrics.map((metric, i) => (
                    <span key={i} className="px-2 py-1 bg-slate-700/50 rounded text-xs text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Download Section */}
        <section className="mt-12 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📥 Download All Infographics</h2>
          <p className="text-slate-400 mb-4">
            Use these visuals in presentations, reports, and strategic discussions.
          </p>
          <div className="flex flex-wrap gap-3">
            {infographics.map((info) => (
              <a
                key={info.id}
                href={`/infographics/${info.filename}`}
                download
                className="px-3 py-2 bg-slate-700 hover:bg-slate-600 rounded text-sm text-slate-300 transition-colors"
              >
                {info.id}. {info.title}
              </a>
            ))}
          </div>
        </section>

        {/* Generation Info */}
        <section className="mt-8 text-center text-slate-500 text-sm">
          <p>Generated: 2026-02-04 • Tool: Nano Banana Pro (Gemini 3 Pro Image) • Resolution: 2K</p>
          <p>Data Sources: Sales MCP, Labor MCP, Finance MCP, Industry Research</p>
        </section>
      </main>
    </div>
  );
}
