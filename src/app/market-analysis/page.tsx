'use client';

import Link from 'next/link';
import targetsData from '../../../data/biotech-targets.json';

function calculateFunding(targets: typeof targetsData.targets): number {
  return targets.reduce((sum, t) => {
    const match = t.funding.match(/\$(\d+(?:\.\d+)?)(M|B)/);
    if (match) {
      const value = parseFloat(match[1]);
      return sum + (match[2] === 'B' ? value * 1000 : value);
    }
    return sum;
  }, 0);
}

export default function MarketAnalysis() {
  const bayAreaTargets = targetsData.targets.filter(t => t.region === 'NorCal');
  const sanDiegoTargets = targetsData.targets.filter(t => t.region === 'SanDiego');
  const seattleTargets = targetsData.targets.filter(t => t.region === 'PNW');
  
  const bayAreaCustomers = targetsData.existingCustomers.filter(c => c.region === 'NorCal');
  const sanDiegoCustomers = targetsData.existingCustomers.filter(c => c.region === 'SanDiego');
  
  const regions = [
    {
      name: 'San Francisco Bay Area',
      nickname: 'Biotech Bay',
      emoji: '🌉',
      link: '/bay-area-deep-dive',
      targets: bayAreaTargets.length,
      customers: bayAreaCustomers.length,
      funding: calculateFunding(bayAreaTargets),
      strategic: bayAreaTargets.filter(t => t.priority === 'strategic').length,
      high: bayAreaTargets.filter(t => t.priority === 'high').length,
      marketSize: '$80B+',
      growth: '12%',
      strengths: ['AI Drug Discovery', 'Cell Therapy', 'Genomics'],
      color: 'cyan',
    },
    {
      name: 'San Diego',
      nickname: 'Biotech Beach',
      emoji: '🏖️',
      link: '/san-diego-deep-dive',
      targets: sanDiegoTargets.length,
      customers: sanDiegoCustomers.length,
      funding: calculateFunding(sanDiegoTargets),
      strategic: sanDiegoTargets.filter(t => t.priority === 'strategic').length,
      high: sanDiegoTargets.filter(t => t.priority === 'high').length,
      marketSize: '$56B',
      growth: '15%',
      strengths: ['Manufacturing', 'CDMO/CRDMO', 'Cell Therapy'],
      color: 'orange',
    },
    {
      name: 'Seattle / Pacific Northwest',
      nickname: 'Cascadia Corridor',
      emoji: '🌲',
      link: '/seattle-deep-dive',
      targets: seattleTargets.length,
      customers: 0,
      funding: calculateFunding(seattleTargets),
      strategic: seattleTargets.filter(t => t.priority === 'strategic').length,
      high: seattleTargets.filter(t => t.priority === 'high').length,
      marketSize: '$15B+',
      growth: '24%',
      strengths: ['In Vivo Cell Therapy', 'AI Protein Design', 'Gene Therapy'],
      color: 'green',
    },
  ];

  const totalTargets = targetsData.targets.length;
  const totalFunding = calculateFunding(targetsData.targets);
  const totalStrategic = targetsData.targets.filter(t => t.priority === 'strategic').length;
  const totalHigh = targetsData.targets.filter(t => t.priority === 'high').length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📊 Western Market Analysis</h1>
          <p className="text-xl text-slate-400 mb-3">Three biotech powerhouses. $150B+ combined market. One unified strategy.</p>
          <div className="bg-slate-800/30 rounded-lg px-4 py-2 text-xs text-slate-400 inline-block">
            Targets: <code className="text-slate-500">biotech-targets.json</code> | 
            Customers: <span className="text-purple-400">Finance MCP</span> → <code className="text-slate-500">get_customer_ltv</code> | 
            Market data: Crunchbase, PitchBook, SEC filings
          </div>
        </div>

        {/* Aggregate Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Targets</p>
            <p className="text-4xl font-bold text-cyan-400">{totalTargets}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Strategic + High</p>
            <p className="text-4xl font-bold text-purple-400">{totalStrategic + totalHigh}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Funding</p>
            <p className="text-4xl font-bold text-green-400">${(totalFunding / 1000).toFixed(1)}B+</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Market Size</p>
            <p className="text-4xl font-bold text-white">$150B+</p>
          </div>
        </div>

        {/* Regional Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Regional Comparison</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="py-4 px-4 text-slate-400 font-semibold">Region</th>
                  <th className="py-4 px-4 text-slate-400 font-semibold">Market Size</th>
                  <th className="py-4 px-4 text-slate-400 font-semibold">Growth</th>
                  <th className="py-4 px-4 text-slate-400 font-semibold">Targets</th>
                  <th className="py-4 px-4 text-slate-400 font-semibold">Funding</th>
                  <th className="py-4 px-4 text-slate-400 font-semibold">USDM Presence</th>
                </tr>
              </thead>
              <tbody className="text-slate-300">
                <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-medium">
                    <span className="text-xl mr-2">🌉</span>
                    Bay Area
                  </td>
                  <td className="py-4 px-4 text-cyan-400">$80B+</td>
                  <td className="py-4 px-4">12%</td>
                  <td className="py-4 px-4">{bayAreaTargets.length}</td>
                  <td className="py-4 px-4 text-green-400">${(calculateFunding(bayAreaTargets) / 1000).toFixed(1)}B</td>
                  <td className="py-4 px-4 text-yellow-400">{bayAreaCustomers.length} customers</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-medium">
                    <span className="text-xl mr-2">🏖️</span>
                    San Diego
                  </td>
                  <td className="py-4 px-4 text-cyan-400">$56B</td>
                  <td className="py-4 px-4">15%</td>
                  <td className="py-4 px-4">{sanDiegoTargets.length}</td>
                  <td className="py-4 px-4 text-green-400">${(calculateFunding(sanDiegoTargets) / 1000).toFixed(1)}B</td>
                  <td className="py-4 px-4 text-yellow-400">{sanDiegoCustomers.length} customers</td>
                </tr>
                <tr className="border-b border-slate-800 hover:bg-slate-800/30">
                  <td className="py-4 px-4 font-medium">
                    <span className="text-xl mr-2">🌲</span>
                    Seattle
                  </td>
                  <td className="py-4 px-4 text-cyan-400">$15B+</td>
                  <td className="py-4 px-4 text-green-400 font-semibold">24% 🚀</td>
                  <td className="py-4 px-4">{seattleTargets.length}</td>
                  <td className="py-4 px-4 text-green-400">${(calculateFunding(seattleTargets) / 1000).toFixed(1)}B</td>
                  <td className="py-4 px-4 text-red-400">No presence ⚠️</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Region Cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">Regional Deep Dives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {regions.map((region, idx) => (
              <Link 
                key={idx} 
                href={region.link}
                className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all group"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-4xl">{region.emoji}</span>
                  <div>
                    <h3 className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">{region.nickname}</h3>
                    <p className="text-slate-400 text-sm">{region.name}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div>
                    <p className="text-slate-500 text-xs">Targets</p>
                    <p className="text-cyan-400 font-bold">{region.targets}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Funding</p>
                    <p className="text-green-400 font-bold">${(region.funding / 1000).toFixed(1)}B</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Growth</p>
                    <p className={`font-bold ${region.growth === '24%' ? 'text-green-400' : 'text-slate-300'}`}>{region.growth}</p>
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs">Customers</p>
                    <p className={`font-bold ${region.customers === 0 ? 'text-red-400' : 'text-purple-400'}`}>
                      {region.customers || 'None'}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {region.strengths.map((str, i) => (
                    <span key={i} className="bg-slate-700 text-slate-300 text-xs px-2 py-1 rounded">
                      {str}
                    </span>
                  ))}
                </div>

                <div className="mt-4 text-cyan-400 text-sm group-hover:translate-x-1 transition-transform">
                  Explore {region.nickname} →
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Market Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🔥 Key Market Trends</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-700/30">
              <h3 className="text-purple-400 font-bold text-lg mb-3">AI Drug Discovery Boom</h3>
              <p className="text-slate-300 mb-3">52% of Bay Area biotech funding now goes to AI-driven companies. Data management, compliance, and 21 CFR Part 11 expertise critical.</p>
              <p className="text-slate-500 text-sm">Key targets: Numerion Labs (win-back!), Deep Genomics, Anagenex, A-Alpha Bio</p>
            </div>
            
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-cyan-400 font-bold text-lg mb-3">Cell Therapy Manufacturing Scale-Up</h3>
              <p className="text-slate-300 mb-3">12+ well-funded companies moving from clinical to commercial scale. GxP manufacturing, quality systems, validation needs exploding.</p>
              <p className="text-slate-500 text-sm">Key targets: Cellares, National Resilience, Fate Therapeutics, Sana Bio</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-700/30">
              <h3 className="text-green-400 font-bold text-lg mb-3">In Vivo Cell Therapy Revolution</h3>
              <p className="text-slate-300 mb-3">Seattle pioneering next-gen CAR-T that doesn't require ex vivo manufacturing. Massive regulatory complexity = consulting opportunity.</p>
              <p className="text-slate-500 text-sm">Key targets: Tune Therapeutics, Outpace Bio, Umoja Biopharma</p>
            </div>
            
            <div className="bg-gradient-to-br from-yellow-900/30 to-orange-900/20 rounded-xl p-6 border border-yellow-700/30">
              <h3 className="text-yellow-400 font-bold text-lg mb-3">CDMO/CRDMO Expansion</h3>
              <p className="text-slate-300 mb-3">San Diego becoming the manufacturing hub of the West. National Resilience ($2B), BioDuro-Sundia, and emerging players building capacity.</p>
              <p className="text-slate-500 text-sm">Key targets: National Resilience, Cellares, Boundless Bio</p>
            </div>
          </div>
        </section>

        {/* Strategic Insights */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 Strategic Insights</h2>
          <div className="space-y-4">
            <div className="bg-green-900/30 rounded-xl p-6 border border-green-700/50">
              <h3 className="text-green-400 font-bold mb-2">🎯 Biggest Opportunity: Seattle</h3>
              <p className="text-slate-300">Zero USDM presence in the fastest-growing biotech hub (24% growth). $1.5B+ in recent funding across 14 targets. Projected 48%+ GP on new business. First-mover advantage available.</p>
            </div>
            
            <div className="bg-red-900/30 rounded-xl p-6 border border-red-700/50">
              <h3 className="text-red-400 font-bold mb-2">⚠️ Margin Recovery Needed: San Diego</h3>
              <p className="text-slate-300">Four mega-customers (Gilead, Kite, Amgen, Enovis) at ~20% GP dragging down West region. $1M+ margin recovery potential through rate review and managed services migration.</p>
            </div>
            
            <div className="bg-cyan-900/30 rounded-xl p-6 border border-cyan-700/50">
              <h3 className="text-cyan-400 font-bold mb-2">📈 Defend & Expand: Bay Area</h3>
              <p className="text-slate-300">Existing customer base provides foundation. Focus on expansion into AI drug discovery (Numerion Labs - churned, Deep Genomics) and cell therapy manufacturing (Cellares, 64x Bio).</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/targets" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View All Targets →
          </Link>
          <Link href="/executive-summary" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Exec Summary
          </Link>
        </div>
      </main>
    </div>
  );
}
