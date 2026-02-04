'use client';

import Link from 'next/link';

// REAL DATA from Labor MCP - get_solutions_team_roster (Feb 2026)
const salesTeam = [
  { name: 'Justin Ott', role: 'Account Executive (Level 2)', territory: 'Biotech Beach', opps: 127, winRate: 74.8, avgDeal: 17102, status: 'star' as const },
  { name: 'Mike Campbell', role: 'Account Manager (Level 1)', territory: 'LA BioMed', opps: 77, winRate: 14.9, avgDeal: 27059, status: 'coaching' as const },
  { name: 'Scott Pallardy', role: 'Account Manager (Level 1)', territory: 'East', opps: 73, winRate: 75.6, avgDeal: 7483, status: 'star' as const },
  { name: 'Avani Macwan', role: 'Account Manager (Level 1)', territory: 'East', opps: 73, winRate: 41.1, avgDeal: 12174, status: 'ok' as const },
  { name: 'Marcus Dinan', role: 'Account Manager (Level 1)', territory: 'East', opps: 71, winRate: 46.1, avgDeal: 4195, status: 'ok' as const },
  { name: 'Joshua Ertmer', role: 'Staffing Account Manager', territory: 'National', opps: 76, winRate: 62.0, avgDeal: 106893, status: 'ok' as const },
  { name: 'James Macdonell', role: 'Account Executive (Level 2)', territory: 'East', opps: 66, winRate: 54.8, avgDeal: 14941, status: 'ok' as const },
  { name: 'Sherry DeLuca', role: 'Business Development', territory: 'National', opps: 48, winRate: 72.6, avgDeal: 9504, status: 'star' as const },
];

const solutionsTeam = [
  { name: 'John Petrakis', role: 'Pod Leader (Level 1)', opps: 22, winRate: 90.8, avgDeal: 131917, status: 'star' as const },
  { name: 'Rathinaswamy Govindaswamy', role: 'Pod Leader (Level 2)', opps: 28, winRate: 5.9, avgDeal: 30440, status: 'coaching' as const },
  { name: 'James Murray', role: 'Pod Leader (Level 1)', opps: 11, winRate: 98.3, avgDeal: 12794, status: 'star' as const },
  { name: 'David Blewitt', role: 'Pod Leader (Level 2)', opps: 10, winRate: 24.0, avgDeal: 5486, status: 'coaching' as const },
  { name: 'Joseph Cassella', role: 'Pod Leader (Level 2)', opps: 10, winRate: 40.3, avgDeal: 22031, status: 'ok' as const },
  { name: 'Vega Finucan', role: 'Pod Leader (Level 1)', opps: 9, winRate: 98.2, avgDeal: 14411, status: 'star' as const },
  { name: 'Brian Rankin', role: 'Pod Leader (Level 1)', opps: 8, winRate: 96.3, avgDeal: 130468, status: 'star' as const },
  { name: 'John Danese', role: 'Pod Leader (Level 1)', opps: 5, winRate: 87.0, avgDeal: 59500, status: 'star' as const },
];

const partnerTeam = [
  { name: 'Kim Guihen', role: 'Partner Leadership', opps: 8, winRate: 7.5, avgDeal: 47500, status: 'coaching' as const },
  { name: 'Meghan Rutkowski', role: 'Partner Channel Manager', opps: 11, winRate: 37.5, avgDeal: 11389, status: 'coaching' as const },
];

const leadershipTeam = [
  { name: 'Hovsep Kirikian', role: 'Growth Leadership', opps: 110, winRate: 69.3, avgDeal: 20307, status: 'star' as const },
  { name: 'Lisa Fry', role: 'Sales Leadership', opps: 63, winRate: 58.4, avgDeal: 65096, status: 'ok' as const },
  { name: 'Jeff Burton', role: 'Sales Leadership', opps: 25, winRate: 4.0, avgDeal: 16286, status: 'coaching' as const },
];

// Capacity metrics from Labor MCP
const capacityMetrics = {
  totalResources: 50,
  overloaded: 39,
  optimal: 11,
  underutilized: 0,
  avgUtilization: 118.4
};

const getStatusColor = (status: 'star' | 'ok' | 'coaching') => {
  switch(status) {
    case 'star': return 'bg-green-900/50 border-green-700';
    case 'ok': return 'bg-blue-900/50 border-blue-700';
    case 'coaching': return 'bg-red-900/50 border-red-700';
  }
};

const getStatusBadge = (status: 'star' | 'ok' | 'coaching') => {
  switch(status) {
    case 'star': return <span className="text-green-400">⭐ Star</span>;
    case 'ok': return <span className="text-blue-400">✓ On Track</span>;
    case 'coaching': return <span className="text-red-400">🎯 Coaching</span>;
  }
};

export default function TeamCapacity() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Team Capacity</h1>
          <span className="text-xs text-slate-400 bg-slate-800 px-3 py-1 rounded">Data: Labor MCP | Feb 2026</span>
        </div>
        <p className="text-slate-300 mb-12 max-w-3xl">
          Real performance data from USDM&apos;s Growth organization. Win rates, deal sizes, and territory coverage from the Fabric lakehouse.
        </p>

        {/* Capacity Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Delivery Capacity Overview</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700 text-center">
              <div className="text-3xl font-bold text-white">{capacityMetrics.totalResources}</div>
              <div className="text-sm text-slate-400">Total Resources</div>
            </div>
            <div className="bg-red-900/30 rounded-xl p-4 border border-red-700/50 text-center">
              <div className="text-3xl font-bold text-red-400">{capacityMetrics.overloaded}</div>
              <div className="text-sm text-red-300">Overloaded (&gt;100%)</div>
            </div>
            <div className="bg-green-900/30 rounded-xl p-4 border border-green-700/50 text-center">
              <div className="text-3xl font-bold text-green-400">{capacityMetrics.optimal}</div>
              <div className="text-sm text-green-300">Optimal</div>
            </div>
            <div className="bg-yellow-900/30 rounded-xl p-4 border border-yellow-700/50 text-center">
              <div className="text-3xl font-bold text-yellow-400">{capacityMetrics.underutilized}</div>
              <div className="text-sm text-yellow-300">Underutilized</div>
            </div>
            <div className="bg-orange-900/30 rounded-xl p-4 border border-orange-700/50 text-center">
              <div className="text-3xl font-bold text-orange-400">{capacityMetrics.avgUtilization.toFixed(1)}%</div>
              <div className="text-sm text-orange-300">Avg Utilization</div>
            </div>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            ⚠️ 78% of delivery resources are overloaded. Limited capacity for new project work without hiring.
          </p>
        </section>

        {/* Sales Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Sales Team Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 px-4 text-slate-300">Name</th>
                  <th className="py-3 px-4 text-slate-300">Role</th>
                  <th className="py-3 px-4 text-slate-300">Territory</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Opps</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Avg Deal</th>
                  <th className="py-3 px-4 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {salesTeam.map((person, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${getStatusColor(person.status)}`}>
                    <td className="py-3 px-4 text-white font-medium">{person.name}</td>
                    <td className="py-3 px-4 text-slate-300 text-xs">{person.role}</td>
                    <td className="py-3 px-4 text-slate-300">{person.territory}</td>
                    <td className="py-3 px-4 text-white text-right">{person.opps}</td>
                    <td className={`py-3 px-4 text-right font-bold ${person.winRate >= 60 ? 'text-green-400' : person.winRate >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {person.winRate.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4 text-white text-right">${(person.avgDeal / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4">{getStatusBadge(person.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Solutions Team */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-purple-400 mb-6">Solutions Team Performance</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 px-4 text-slate-300">Name</th>
                  <th className="py-3 px-4 text-slate-300">Role</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Opps</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Win Rate</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Avg Deal</th>
                  <th className="py-3 px-4 text-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                {solutionsTeam.map((person, i) => (
                  <tr key={i} className={`border-b border-slate-800 ${getStatusColor(person.status)}`}>
                    <td className="py-3 px-4 text-white font-medium">{person.name}</td>
                    <td className="py-3 px-4 text-slate-300 text-xs">{person.role}</td>
                    <td className="py-3 px-4 text-white text-right">{person.opps}</td>
                    <td className={`py-3 px-4 text-right font-bold ${person.winRate >= 60 ? 'text-green-400' : person.winRate >= 40 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {person.winRate.toFixed(1)}%
                    </td>
                    <td className="py-3 px-4 text-white text-right">${(person.avgDeal / 1000).toFixed(0)}K</td>
                    <td className="py-3 px-4">{getStatusBadge(person.status)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Partner & Leadership */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Partner Team */}
          <section>
            <h2 className="text-2xl font-bold text-orange-400 mb-6">Partner Team</h2>
            <div className="space-y-3">
              {partnerTeam.map((person, i) => (
                <div key={i} className={`rounded-xl p-4 border ${getStatusColor(person.status)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-white font-medium">{person.name}</div>
                      <div className="text-xs text-slate-400">{person.role}</div>
                    </div>
                    {getStatusBadge(person.status)}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div><span className="text-slate-400">Opps:</span> <span className="text-white">{person.opps}</span></div>
                    <div><span className="text-slate-400">Win:</span> <span className={person.winRate < 40 ? 'text-red-400' : 'text-white'}>{person.winRate}%</span></div>
                    <div><span className="text-slate-400">Avg:</span> <span className="text-white">${(person.avgDeal / 1000).toFixed(0)}K</span></div>
                  </div>
                </div>
              ))}
              <p className="text-sm text-red-300 mt-4">
                ⚠️ Partner channel underperforming. Combined 22.5% win rate needs immediate attention.
              </p>
            </div>
          </section>

          {/* Leadership */}
          <section>
            <h2 className="text-2xl font-bold text-yellow-400 mb-6">Growth Leadership</h2>
            <div className="space-y-3">
              {leadershipTeam.map((person, i) => (
                <div key={i} className={`rounded-xl p-4 border ${getStatusColor(person.status)}`}>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <div className="text-white font-medium">{person.name}</div>
                      <div className="text-xs text-slate-400">{person.role}</div>
                    </div>
                    {getStatusBadge(person.status)}
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-sm">
                    <div><span className="text-slate-400">Opps:</span> <span className="text-white">{person.opps}</span></div>
                    <div><span className="text-slate-400">Win:</span> <span className={person.winRate < 40 ? 'text-red-400' : 'text-white'}>{person.winRate.toFixed(1)}%</span></div>
                    <div><span className="text-slate-400">Avg:</span> <span className="text-white">${(person.avgDeal / 1000).toFixed(0)}K</span></div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Territory Alignment */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-cyan-400 mb-6">Western Territory Alignment (Recommended)</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-gradient-to-br from-green-900/30 to-green-800/30 rounded-xl p-5 border border-green-700/50">
              <div className="text-green-400 font-bold mb-2">Biotech Beach</div>
              <div className="text-white text-lg font-semibold mb-1">Justin Ott ⭐</div>
              <div className="text-sm text-slate-300 mb-3">San Diego | 74.8% win rate</div>
              <div className="text-xs text-green-300">Keep star on best territory</div>
            </div>
            <div className="bg-gradient-to-br from-red-900/30 to-red-800/30 rounded-xl p-5 border border-red-700/50">
              <div className="text-red-400 font-bold mb-2">LA BioMed</div>
              <div className="text-white text-lg font-semibold mb-1">Mike Campbell 🎯</div>
              <div className="text-sm text-slate-300 mb-3">Los Angeles | 14.9% win rate</div>
              <div className="text-xs text-red-300">Coaching focus on 8 key accounts</div>
            </div>
            <div className="bg-gradient-to-br from-yellow-900/30 to-yellow-800/30 rounded-xl p-5 border border-yellow-700/50">
              <div className="text-yellow-400 font-bold mb-2">Biotech Bay</div>
              <div className="text-white text-lg font-semibold mb-1">NEW HIRE NEEDED</div>
              <div className="text-sm text-slate-300 mb-3">San Francisco | No coverage</div>
              <div className="text-xs text-yellow-300">Biggest biotech market unserved</div>
            </div>
            <div className="bg-gradient-to-br from-blue-900/30 to-blue-800/30 rounded-xl p-5 border border-blue-700/50">
              <div className="text-blue-400 font-bold mb-2">Cascadia</div>
              <div className="text-white text-lg font-semibold mb-1">Partner Channel</div>
              <div className="text-sm text-slate-300 mb-3">Seattle | $0 pipeline</div>
              <div className="text-xs text-blue-300">$150K investment per &quot;The Ask&quot;</div>
            </div>
          </div>
        </section>

        {/* Coaching Priorities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-red-400 mb-6">🎯 Coaching Priorities</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-2">Mike Campbell</div>
              <div className="text-red-400 font-semibold mb-3">14.9% Win Rate | 77 Opps</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• 10 churn signals (Regression, SameDayFlip)</li>
                <li>• Holds 38% of West pipeline</li>
                <li>• Deal qualification training needed</li>
                <li>• Focus on 8 LA BioMed accounts</li>
              </ul>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-2">Kim Guihen</div>
              <div className="text-red-400 font-semibold mb-3">7.5% Win Rate | 8 Opps</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Partner channel underperforming</li>
                <li>• High avg deal ($47.5K) but low close</li>
                <li>• Review partner selection criteria</li>
                <li>• May need channel strategy refresh</li>
              </ul>
            </div>
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <div className="text-white font-bold text-lg mb-2">Jeff Burton</div>
              <div className="text-red-400 font-semibold mb-3">4.0% Win Rate | 25 Opps</div>
              <ul className="text-sm text-slate-300 space-y-2">
                <li>• Sales Leadership with lowest close rate</li>
                <li>• May be pursuing wrong opportunities</li>
                <li>• Evaluate deal mix and qualification</li>
                <li>• Consider territory/account reassignment</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Hiring Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-green-400 mb-6">📋 Recommended Hiring Plan</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-slate-700 text-left">
                  <th className="py-3 px-4 text-slate-300">Priority</th>
                  <th className="py-3 px-4 text-slate-300">Role</th>
                  <th className="py-3 px-4 text-slate-300">Territory</th>
                  <th className="py-3 px-4 text-slate-300">Rationale</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Est. Cost</th>
                  <th className="py-3 px-4 text-slate-300 text-right">Target Rev</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-800 bg-red-900/20">
                  <td className="py-3 px-4"><span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">P0</span></td>
                  <td className="py-3 px-4 text-white font-medium">Account Executive</td>
                  <td className="py-3 px-4 text-slate-300">Seattle/Cascadia</td>
                  <td className="py-3 px-4 text-slate-300">$0 presence in $2B+ market</td>
                  <td className="py-3 px-4 text-white text-right">$180K</td>
                  <td className="py-3 px-4 text-green-400 text-right">$1.5M</td>
                </tr>
                <tr className="border-b border-slate-800 bg-red-900/20">
                  <td className="py-3 px-4"><span className="bg-red-600 text-white px-2 py-0.5 rounded text-xs font-bold">P0</span></td>
                  <td className="py-3 px-4 text-white font-medium">BDR</td>
                  <td className="py-3 px-4 text-slate-300">Western Region</td>
                  <td className="py-3 px-4 text-slate-300">Pipeline coverage at 1.7x (need 3-4x)</td>
                  <td className="py-3 px-4 text-white text-right">$85K</td>
                  <td className="py-3 px-4 text-green-400 text-right">$750K</td>
                </tr>
                <tr className="border-b border-slate-800 bg-orange-900/20">
                  <td className="py-3 px-4"><span className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-bold">P1</span></td>
                  <td className="py-3 px-4 text-white font-medium">Solutions Consultant - AI/Data</td>
                  <td className="py-3 px-4 text-slate-300">Western Region</td>
                  <td className="py-3 px-4 text-slate-300">AI Governance is top GTM pillar</td>
                  <td className="py-3 px-4 text-white text-right">$200K</td>
                  <td className="py-3 px-4 text-green-400 text-right">$2M</td>
                </tr>
                <tr className="border-b border-slate-800 bg-orange-900/20">
                  <td className="py-3 px-4"><span className="bg-orange-600 text-white px-2 py-0.5 rounded text-xs font-bold">P1</span></td>
                  <td className="py-3 px-4 text-white font-medium">Customer Success Manager</td>
                  <td className="py-3 px-4 text-slate-300">Western Region</td>
                  <td className="py-3 px-4 text-slate-300">Drive expansion in low-GP accounts</td>
                  <td className="py-3 px-4 text-white text-right">$140K</td>
                  <td className="py-3 px-4 text-green-400 text-right">$1M</td>
                </tr>
                <tr className="border-b border-slate-800 bg-yellow-900/20">
                  <td className="py-3 px-4"><span className="bg-yellow-600 text-white px-2 py-0.5 rounded text-xs font-bold">P2</span></td>
                  <td className="py-3 px-4 text-white font-medium">Account Executive</td>
                  <td className="py-3 px-4 text-slate-300">Biotech Bay (SF)</td>
                  <td className="py-3 px-4 text-slate-300">$1.35M in largest biotech market</td>
                  <td className="py-3 px-4 text-white text-right">$180K</td>
                  <td className="py-3 px-4 text-green-400 text-right">$2M</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-slate-400 mt-4">
            Total investment: $785K → Projected revenue: $7.25M (9.2x ROI)
          </p>
        </section>

        {/* Navigation */}
        <div className="flex flex-wrap gap-4 mt-12">
          <Link href="/seller-performance" className="bg-cyan-700 hover:bg-cyan-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Seller Performance Detail
          </Link>
          <Link href="/territories" className="bg-purple-700 hover:bg-purple-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Territory Analysis
          </Link>
          <Link href="/financial-model" className="bg-green-700 hover:bg-green-600 px-6 py-3 rounded-lg text-white font-medium transition">
            → Financial Model
          </Link>
        </div>
      </main>
    </div>
  );
}
