'use client';

import { useState } from 'react';

interface Scenario {
  name: string;
  baseRevenue: number;
  winRate: number;
  avgDealSize: number;
  newLogos: number;
  expansionRate: number;
}

const scenarios: Record<string, Scenario> = {
  conservative: {
    name: 'Conservative',
    baseRevenue: 17.19,
    winRate: 38,
    avgDealSize: 100,
    newLogos: 10,
    expansionRate: 10,
  },
  target: {
    name: 'Target',
    baseRevenue: 17.19,
    winRate: 42,
    avgDealSize: 100,
    newLogos: 15,
    expansionRate: 15,
  },
  aggressive: {
    name: 'Aggressive',
    baseRevenue: 17.19,
    winRate: 45,
    avgDealSize: 100,
    newLogos: 20,
    expansionRate: 20,
  },
};

export default function FinancialModelPage() {
  // Revenue model state
  const [baseRevenue, setBaseRevenue] = useState(17.19); // $M
  const [winRate, setWinRate] = useState(35.6); // %
  const [avgDealSize, setAvgDealSize] = useState(100); // $K
  const [newLogos, setNewLogos] = useState(15);
  const [expansionRate, setExpansionRate] = useState(15); // %

  // Bonus calculator state
  const [baseSalary, setBaseSalary] = useState(120); // $K

  // Calculate revenue projections
  const projectedRevenue = baseRevenue * (1 + expansionRate / 100) + (newLogos * avgDealSize) / 1000;
  const projectedGP = projectedRevenue * 0.40;
  const pipelineRequired = projectedRevenue / (winRate / 100);
  const coverageRatio = pipelineRequired / projectedRevenue;

  // Calculate bonus earnings
  const ote = baseSalary * 2;
  const commission = ote - baseSalary;

  const calculateEarnings = (quotaPercent: number) => {
    if (quotaPercent < 100) {
      return baseSalary + (commission * quotaPercent / 100);
    } else if (quotaPercent <= 110) {
      return baseSalary + commission + (commission * (quotaPercent - 100) / 100 * 1.5);
    } else if (quotaPercent <= 125) {
      return baseSalary + commission + (commission * 0.10 * 1.5) + (commission * (quotaPercent - 110) / 100 * 2);
    } else {
      return baseSalary + commission + (commission * 0.10 * 1.5) + (commission * 0.15 * 2) + (commission * (quotaPercent - 125) / 100 * 3);
    }
  };

  const achievementLevels = [80, 90, 100, 110, 125, 150, 175, 200];

  const loadScenario = (scenario: Scenario) => {
    setBaseRevenue(scenario.baseRevenue);
    setWinRate(scenario.winRate);
    setAvgDealSize(scenario.avgDealSize);
    setNewLogos(scenario.newLogos);
    setExpansionRate(scenario.expansionRate);
  };

  return (
    <div className="min-h-screen bg-slate-900">
      
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            Interactive 2026 Financial Model
          </h1>
          <p className="text-slate-400 text-lg">
            Adjust inputs to model bookings scenarios and compensation plans
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="bg-cyan-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-cyan-700/50">
              <span className="text-cyan-400 font-semibold">Pipeline</span> = open opp amount
            </span>
            <span className="bg-purple-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-purple-700/50">
              <span className="text-purple-400 font-semibold">Bookings</span> = won opp amount (contract value at close)
            </span>
            <span className="bg-blue-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-blue-700/50">
              <span className="text-blue-400 font-semibold">Revenue</span> = GAAP recognized (billed)
            </span>
            <span className="bg-green-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-green-700/50">
              <span className="text-green-400 font-semibold">EGP</span> = estimated gross profit
            </span>
          </div>
        </div>

        {/* Scenario Buttons */}
        <div className="mb-8 flex flex-wrap gap-4">
          {Object.entries(scenarios).map(([key, scenario]) => (
            <button
              key={key}
              onClick={() => loadScenario(scenario)}
              className="px-6 py-3 bg-slate-800 hover:bg-cyan-600 text-white rounded-lg transition-colors border border-slate-700 hover:border-cyan-500"
            >
              <div className="font-semibold">{scenario.name}</div>
              <div className="text-xs text-slate-400">
                {scenario.winRate}% WR • {scenario.newLogos} logos • {scenario.expansionRate}% exp
              </div>
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Revenue Model Inputs */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">Revenue Model Inputs</h2>
            
            <div className="space-y-6">
              {/* Base Revenue */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Base Revenue (2025 Actual)</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    ${baseRevenue.toFixed(2)}M
                  </span>
                </div>
                <input
                  type="range"
                  min="15"
                  max="25"
                  step="0.1"
                  value={baseRevenue}
                  onChange={(e) => setBaseRevenue(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$15M</span>
                  <span>$25M</span>
                </div>
              </div>

              {/* Win Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Win Rate</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    {winRate.toFixed(1)}%
                  </span>
                </div>
                <input
                  type="range"
                  min="25"
                  max="50"
                  step="0.1"
                  value={winRate}
                  onChange={(e) => setWinRate(parseFloat(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>25%</span>
                  <span>50%</span>
                </div>
              </div>

              {/* Average Deal Size */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Average Deal Size</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    ${avgDealSize}K
                  </span>
                </div>
                <input
                  type="range"
                  min="75"
                  max="150"
                  step="1"
                  value={avgDealSize}
                  onChange={(e) => setAvgDealSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$75K</span>
                  <span>$150K</span>
                </div>
              </div>

              {/* New Logo Target */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">New Logo Target</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    {newLogos} accounts
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={newLogos}
                  onChange={(e) => setNewLogos(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5</span>
                  <span>30</span>
                </div>
              </div>

              {/* Expansion Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Expansion Rate</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    {expansionRate}%
                  </span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={expansionRate}
                  onChange={(e) => setExpansionRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Calculated Outputs */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-6">2026 Projections</h2>
            
            <div className="space-y-6">
              <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-cyan-500">
                <div className="text-slate-400 text-sm mb-1">Projected Bookings</div>
                <div className="text-3xl font-bold text-white">
                  ${projectedRevenue.toFixed(2)}M
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Base: ${baseRevenue.toFixed(2)}M × (1 + {expansionRate}%) + ({newLogos} × ${avgDealSize}K)
                </div>
                <div className="text-xs text-cyan-400/70 mt-1">
                  Bookings = contract value at close
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-green-500">
                <div className="text-slate-400 text-sm mb-1">Estimated Gross Profit (EGP)</div>
                <div className="text-3xl font-bold text-green-400">
                  ${projectedGP.toFixed(2)}M
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  EGP = Revenue × 40% target margin
                </div>
                <div className="text-xs text-green-400/70 mt-1">
                  ⚡ EGP is the profit realized when contracts are delivered well
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-emerald-500">
                <div className="text-slate-400 text-sm mb-1">EGP per New Logo</div>
                <div className="text-3xl font-bold text-emerald-400">
                  ${(avgDealSize * 0.40).toFixed(0)}K
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  ${avgDealSize}K avg deal × 40% GP
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-yellow-500">
                <div className="text-slate-400 text-sm mb-1">Pipeline Required</div>
                <div className="text-3xl font-bold text-white">
                  ${pipelineRequired.toFixed(2)}M
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Revenue Target / {winRate.toFixed(1)}% Win Rate
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-purple-500">
                <div className="text-slate-400 text-sm mb-1">Coverage Ratio</div>
                <div className="text-3xl font-bold text-white">
                  {coverageRatio.toFixed(2)}x
                </div>
                <div className="text-xs text-slate-500 mt-2">
                  Pipeline / Revenue Target
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bonus Calculator */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-6">Sales Bonus Calculator</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Input */}
            <div>
              <div className="mb-6">
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Base Salary</label>
                  <span className="text-cyan-400 font-bold text-lg">
                    ${baseSalary}K
                  </span>
                </div>
                <input
                  type="range"
                  min="80"
                  max="200"
                  step="5"
                  value={baseSalary}
                  onChange={(e) => setBaseSalary(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer slider-thumb"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$80K</span>
                  <span>$200K</span>
                </div>
              </div>

              <div className="bg-slate-900 rounded-lg p-4">
                <div className="text-slate-400 text-sm mb-1">OTE (On-Target Earnings)</div>
                <div className="text-2xl font-bold text-white mb-3">
                  ${ote}K
                </div>
                <div className="text-xs text-slate-500">
                  Base: ${baseSalary}K<br />
                  Commission: ${commission}K
                </div>
              </div>
            </div>

            {/* Accelerators */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Accelerator Tiers</h3>
              <div className="space-y-3">
                <div className="bg-slate-900 rounded-lg p-4 border-l-4 border-blue-500">
                  <div className="font-semibold text-white">100-110% of Quota</div>
                  <div className="text-cyan-400 text-sm">1.5x multiplier</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 border-l-4 border-purple-500">
                  <div className="font-semibold text-white">110-125% of Quota</div>
                  <div className="text-cyan-400 text-sm">2x multiplier</div>
                </div>
                <div className="bg-slate-900 rounded-lg p-4 border-l-4 border-pink-500">
                  <div className="font-semibold text-white">125%+ of Quota</div>
                  <div className="text-cyan-400 text-sm">3x multiplier (uncapped)</div>
                </div>
              </div>
            </div>

            {/* Earnings Chart */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">Potential Earnings</h3>
              <div className="space-y-2">
                {achievementLevels.map((level) => {
                  const earnings = calculateEarnings(level);
                  const barWidth = (earnings / calculateEarnings(200)) * 100;
                  return (
                    <div key={level}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-slate-400 text-sm">{level}%</span>
                        <span className="text-white font-semibold">
                          ${earnings.toFixed(0)}K
                        </span>
                      </div>
                      <div className="w-full bg-slate-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full transition-all ${
                            level < 100 ? 'bg-red-500' :
                            level < 110 ? 'bg-blue-500' :
                            level < 125 ? 'bg-purple-500' :
                            'bg-pink-500'
                          }`}
                          style={{ width: `${barWidth}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Formula Reference */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">Formula Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-cyan-400 font-mono mb-1">Projected Revenue =</div>
              <div className="text-slate-300 pl-4">
                Base × (1 + Expansion Rate) + (New Logos × Avg Deal Size)
              </div>
            </div>
            <div>
              <div className="text-cyan-400 font-mono mb-1">Pipeline Required =</div>
              <div className="text-slate-300 pl-4">
                Revenue Target / Win Rate
              </div>
            </div>
            <div>
              <div className="text-cyan-400 font-mono mb-1">Projected GP =</div>
              <div className="text-slate-300 pl-4">
                Revenue × 0.40 (target GP margin)
              </div>
            </div>
            <div>
              <div className="text-cyan-400 font-mono mb-1">Coverage Ratio =</div>
              <div className="text-slate-300 pl-4">
                Pipeline / Revenue Target
              </div>
            </div>
          </div>
        </div>
      </main>

      <style jsx>{`
        .slider-thumb::-webkit-slider-thumb {
          appearance: none;
          width: 20px;
          height: 20px;
          background: #06b6d4;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #0e7490;
        }
        
        .slider-thumb::-moz-range-thumb {
          width: 20px;
          height: 20px;
          background: #06b6d4;
          cursor: pointer;
          border-radius: 50%;
          border: 2px solid #0e7490;
        }
        
        .slider-thumb::-webkit-slider-thumb:hover {
          background: #22d3ee;
        }
        
        .slider-thumb::-moz-range-thumb:hover {
          background: #22d3ee;
        }
      `}</style>
    </div>
  );
}
