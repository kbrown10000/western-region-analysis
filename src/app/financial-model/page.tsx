'use client';

import { useState, useMemo } from 'react';

// 2025 BASELINE DATA (from MCP - Feb 2026)
const baseline2025 = {
  // Labor metrics
  deliveryResources: 680,
  deliveryUtilization: 83.3,
  billableHours: 2698514,
  avgBillRate: 175, // $/hr blended
  
  // Capacity constraints
  capacityResources: 50,
  overloadedPct: 80,
  avgCapacityUtil: 118.4,
  
  // Sales metrics
  totalPipeline: 54.8, // $M
  winRate: 41.6,
  avgDealSize: 127, // $K
  closedWonQ4: 6.76, // $M
  
  // Revenue & GP
  westRevenue: 17.19, // $M
  westGP: 6.19, // $M (36% margin)
  companyRevenue: 50.0, // $M (estimated)
  
  // Ratios
  gpMargin: 36.0, // % current
  targetGpMargin: 45.0, // % target
  revenuePerResource: 25.3, // $K per delivery FTE
};

// Scenario presets
const scenarios = {
  conservative: { name: 'Conservative', utilizationTarget: 85, hires: 5, winRateGain: 2, marginGain: 3, expansionRate: 10 },
  target: { name: 'Target', utilizationTarget: 88, hires: 10, winRateGain: 5, marginGain: 5, expansionRate: 15 },
  aggressive: { name: 'Aggressive', utilizationTarget: 92, hires: 20, winRateGain: 8, marginGain: 8, expansionRate: 20 },
};

export default function FinancialModelPage() {
  // Labor Optimization Sliders
  const [utilizationTarget, setUtilizationTarget] = useState(88);
  const [newHires, setNewHires] = useState(10);
  const [avgBillRate, setAvgBillRate] = useState(baseline2025.avgBillRate);
  
  // Sales Optimization Sliders
  const [winRateGain, setWinRateGain] = useState(5); // pts improvement
  const [expansionRate, setExpansionRate] = useState(15); // %
  const [newLogos, setNewLogos] = useState(15);
  
  // Margin Optimization
  const [marginGain, setMarginGain] = useState(5); // pts improvement

  // Calculated projections
  const projections = useMemo(() => {
    // Labor capacity calculations
    const totalResources = baseline2025.deliveryResources + newHires;
    const annualHoursPerFTE = 2080; // 52 weeks × 40 hrs
    const potentialBillableHours = totalResources * annualHoursPerFTE * (utilizationTarget / 100);
    const currentBillableHours = baseline2025.billableHours;
    const additionalCapacity = potentialBillableHours - currentBillableHours;
    
    // Revenue from labor optimization
    const laborRevenueBase = (potentialBillableHours * avgBillRate) / 1000000;
    const laborRevenueGain = (additionalCapacity * avgBillRate) / 1000000;
    
    // Sales-driven revenue
    const baseRevenue = baseline2025.westRevenue;
    const expansionRevenue = baseRevenue * (expansionRate / 100);
    const newLogoRevenue = (newLogos * baseline2025.avgDealSize) / 1000;
    const projectedBookings = baseRevenue + expansionRevenue + newLogoRevenue;
    
    // Win rate impact
    const newWinRate = baseline2025.winRate + winRateGain;
    const pipelineRequired = projectedBookings / (newWinRate / 100);
    const coverageRatio = baseline2025.totalPipeline / projectedBookings;
    
    // GP calculations
    const newGpMargin = baseline2025.gpMargin + marginGain;
    const projectedGP = projectedBookings * (newGpMargin / 100);
    const gpGain = projectedGP - baseline2025.westGP;
    
    // Revenue recognition (bookings → revenue over 12 months)
    const projectedRevenue = projectedBookings * 0.85; // ~85% recognized in year
    
    // ROI on new hires
    const hireCost = newHires * 180; // $180K avg fully loaded cost
    const hireRevenue = (newHires * annualHoursPerFTE * (utilizationTarget / 100) * avgBillRate) / 1000;
    const hireROI = hireRevenue / hireCost;
    
    return {
      totalResources,
      potentialBillableHours,
      additionalCapacity,
      laborRevenueBase,
      laborRevenueGain,
      projectedBookings,
      newWinRate,
      pipelineRequired,
      coverageRatio,
      newGpMargin,
      projectedGP,
      gpGain,
      projectedRevenue,
      hireCost,
      hireRevenue,
      hireROI,
      utilizationGain: utilizationTarget - baseline2025.deliveryUtilization,
    };
  }, [utilizationTarget, newHires, avgBillRate, winRateGain, expansionRate, newLogos, marginGain]);

  const loadScenario = (scenario: typeof scenarios.target) => {
    setUtilizationTarget(scenario.utilizationTarget);
    setNewHires(scenario.hires);
    setWinRateGain(scenario.winRateGain);
    setMarginGain(scenario.marginGain);
    setExpansionRate(scenario.expansionRate);
  };

  const formatCurrency = (value: number, decimals = 1) => {
    if (Math.abs(value) >= 1000) return `$${(value / 1000).toFixed(decimals)}B`;
    return `$${value.toFixed(decimals)}M`;
  };

  const formatNumber = (value: number) => value.toLocaleString();

  return (
    <div className="min-h-screen bg-slate-900">
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">
            2026 Growth Model: Labor → Bookings → GP → Revenue
          </h1>
          <p className="text-slate-400 text-lg">
            Interactive model showing how labor optimization flows through to revenue momentum
          </p>
          <div className="mt-4 flex flex-wrap gap-3 text-xs">
            <span className="bg-orange-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-orange-700/50">
              <span className="text-orange-400 font-semibold">Labor</span> = billable hours × rate
            </span>
            <span className="bg-cyan-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-cyan-700/50">
              <span className="text-cyan-400 font-semibold">Bookings</span> = won contracts at close
            </span>
            <span className="bg-green-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-green-700/50">
              <span className="text-green-400 font-semibold">GP</span> = bookings × margin
            </span>
            <span className="bg-blue-900/30 px-3 py-1.5 rounded-full text-slate-300 border border-blue-700/50">
              <span className="text-blue-400 font-semibold">Revenue</span> = recognized over time
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
                {scenario.utilizationTarget}% util • +{scenario.hires} hires • +{scenario.winRateGain}% WR
              </div>
            </button>
          ))}
        </div>

        {/* 2025 Baseline vs 2026 Projection Summary */}
        <div className="mb-8 bg-gradient-to-r from-slate-800 to-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📊 2025 Baseline → 2026 Projection</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">Bookings</div>
              <div className="text-slate-500 text-sm">{formatCurrency(baseline2025.westRevenue)} → </div>
              <div className="text-cyan-400 font-bold text-xl">{formatCurrency(projections.projectedBookings)}</div>
              <div className="text-green-400 text-xs">+{((projections.projectedBookings / baseline2025.westRevenue - 1) * 100).toFixed(0)}%</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">Gross Profit</div>
              <div className="text-slate-500 text-sm">{formatCurrency(baseline2025.westGP)} → </div>
              <div className="text-green-400 font-bold text-xl">{formatCurrency(projections.projectedGP)}</div>
              <div className="text-green-400 text-xs">+{formatCurrency(projections.gpGain)}</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">GP Margin</div>
              <div className="text-slate-500 text-sm">{baseline2025.gpMargin}% → </div>
              <div className="text-purple-400 font-bold text-xl">{projections.newGpMargin.toFixed(1)}%</div>
              <div className="text-green-400 text-xs">+{marginGain} pts</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">Win Rate</div>
              <div className="text-slate-500 text-sm">{baseline2025.winRate}% → </div>
              <div className="text-yellow-400 font-bold text-xl">{projections.newWinRate.toFixed(1)}%</div>
              <div className="text-green-400 text-xs">+{winRateGain} pts</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">Utilization</div>
              <div className="text-slate-500 text-sm">{baseline2025.deliveryUtilization}% → </div>
              <div className="text-orange-400 font-bold text-xl">{utilizationTarget}%</div>
              <div className="text-green-400 text-xs">+{projections.utilizationGain.toFixed(1)} pts</div>
            </div>
            <div className="text-center">
              <div className="text-xs text-slate-400 mb-1">Delivery FTEs</div>
              <div className="text-slate-500 text-sm">{baseline2025.deliveryResources} → </div>
              <div className="text-pink-400 font-bold text-xl">{projections.totalResources}</div>
              <div className="text-green-400 text-xs">+{newHires} hires</div>
            </div>
          </div>
        </div>

        {/* The Flow Visualization */}
        <div className="mb-8 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-6">🔄 Value Flow: Labor → Revenue</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Labor */}
            <div className="bg-orange-900/30 rounded-xl p-5 border border-orange-700/50 text-center flex-1">
              <div className="text-orange-400 font-bold text-sm mb-2">LABOR CAPACITY</div>
              <div className="text-2xl font-bold text-white">{formatNumber(Math.round(projections.potentialBillableHours))}</div>
              <div className="text-xs text-orange-300">billable hours/yr</div>
              <div className="text-xs text-slate-400 mt-2">{projections.totalResources} FTEs × {utilizationTarget}%</div>
            </div>
            <div className="text-4xl text-slate-600">→</div>
            {/* Bookings */}
            <div className="bg-cyan-900/30 rounded-xl p-5 border border-cyan-700/50 text-center flex-1">
              <div className="text-cyan-400 font-bold text-sm mb-2">BOOKINGS</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(projections.projectedBookings)}</div>
              <div className="text-xs text-cyan-300">contract value</div>
              <div className="text-xs text-slate-400 mt-2">{projections.newWinRate.toFixed(1)}% win rate</div>
            </div>
            <div className="text-4xl text-slate-600">→</div>
            {/* GP */}
            <div className="bg-green-900/30 rounded-xl p-5 border border-green-700/50 text-center flex-1">
              <div className="text-green-400 font-bold text-sm mb-2">GROSS PROFIT</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(projections.projectedGP)}</div>
              <div className="text-xs text-green-300">{projections.newGpMargin.toFixed(1)}% margin</div>
              <div className="text-xs text-slate-400 mt-2">+{formatCurrency(projections.gpGain)} vs 2025</div>
            </div>
            <div className="text-4xl text-slate-600">→</div>
            {/* Revenue */}
            <div className="bg-blue-900/30 rounded-xl p-5 border border-blue-700/50 text-center flex-1">
              <div className="text-blue-400 font-bold text-sm mb-2">REVENUE</div>
              <div className="text-2xl font-bold text-white">{formatCurrency(projections.projectedRevenue)}</div>
              <div className="text-xs text-blue-300">recognized (GAAP)</div>
              <div className="text-xs text-slate-400 mt-2">~85% in-year recognition</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* Labor Optimization */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-orange-400 mb-6">🔧 Labor Optimization</h2>
            
            <div className="space-y-6">
              {/* Utilization Target */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Target Utilization</label>
                  <span className="text-orange-400 font-bold text-lg">{utilizationTarget}%</span>
                </div>
                <input
                  type="range"
                  min="75"
                  max="95"
                  step="1"
                  value={utilizationTarget}
                  onChange={(e) => setUtilizationTarget(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>75% (underutilized)</span>
                  <span className="text-orange-400">Current: {baseline2025.deliveryUtilization}%</span>
                  <span>95% (overworked)</span>
                </div>
              </div>

              {/* New Hires */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">New Delivery Hires</label>
                  <span className="text-orange-400 font-bold text-lg">+{newHires} FTEs</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="50"
                  step="1"
                  value={newHires}
                  onChange={(e) => setNewHires(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>0 (no hires)</span>
                  <span>50 (aggressive)</span>
                </div>
              </div>

              {/* Bill Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Avg Bill Rate</label>
                  <span className="text-orange-400 font-bold text-lg">${avgBillRate}/hr</span>
                </div>
                <input
                  type="range"
                  min="150"
                  max="225"
                  step="5"
                  value={avgBillRate}
                  onChange={(e) => setAvgBillRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>$150/hr</span>
                  <span className="text-orange-400">Current: ${baseline2025.avgBillRate}/hr</span>
                  <span>$225/hr</span>
                </div>
              </div>

              {/* Labor Output */}
              <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-700/30">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-orange-300">Additional Capacity</div>
                    <div className="text-xl font-bold text-white">{formatNumber(Math.round(projections.additionalCapacity))} hrs</div>
                  </div>
                  <div>
                    <div className="text-xs text-orange-300">Revenue from Capacity</div>
                    <div className="text-xl font-bold text-white">+{formatCurrency(projections.laborRevenueGain)}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Sales Optimization */}
          <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-400 mb-6">📈 Sales Optimization</h2>
            
            <div className="space-y-6">
              {/* Win Rate Improvement */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Win Rate Improvement</label>
                  <span className="text-cyan-400 font-bold text-lg">+{winRateGain} pts → {projections.newWinRate.toFixed(1)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="15"
                  step="1"
                  value={winRateGain}
                  onChange={(e) => setWinRateGain(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>+0 pts (no change)</span>
                  <span className="text-cyan-400">Current: {baseline2025.winRate}%</span>
                  <span>+15 pts</span>
                </div>
              </div>

              {/* Expansion Rate */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">Expansion Rate (Existing)</label>
                  <span className="text-cyan-400 font-bold text-lg">{expansionRate}%</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={expansionRate}
                  onChange={(e) => setExpansionRate(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5%</span>
                  <span>30%</span>
                </div>
              </div>

              {/* New Logos */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="text-slate-300 font-medium">New Logo Target</label>
                  <span className="text-cyan-400 font-bold text-lg">{newLogos} accounts</span>
                </div>
                <input
                  type="range"
                  min="5"
                  max="30"
                  step="1"
                  value={newLogos}
                  onChange={(e) => setNewLogos(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-cyan-500"
                />
                <div className="flex justify-between text-xs text-slate-500 mt-1">
                  <span>5 logos</span>
                  <span>30 logos</span>
                </div>
              </div>

              {/* Sales Output */}
              <div className="bg-cyan-900/20 rounded-lg p-4 border border-cyan-700/30">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-xs text-cyan-300">Pipeline Required</div>
                    <div className="text-xl font-bold text-white">{formatCurrency(projections.pipelineRequired)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-cyan-300">Coverage Ratio</div>
                    <div className={`text-xl font-bold ${projections.coverageRatio >= 2.5 ? 'text-green-400' : projections.coverageRatio >= 2 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {projections.coverageRatio.toFixed(2)}x
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Margin & GP Optimization */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-green-400 mb-6">💰 Margin Optimization</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-slate-300 font-medium">GP Margin Improvement</label>
                <span className="text-green-400 font-bold text-lg">+{marginGain} pts → {projections.newGpMargin.toFixed(1)}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="15"
                step="1"
                value={marginGain}
                onChange={(e) => setMarginGain(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
              />
              <div className="flex justify-between text-xs text-slate-500 mt-1">
                <span>+0 pts (no change)</span>
                <span className="text-green-400">Current: {baseline2025.gpMargin}%</span>
                <span>+15 pts</span>
              </div>
              <div className="mt-4 text-sm text-slate-400">
                <div className="font-semibold text-white mb-2">How to improve margin:</div>
                <ul className="space-y-1 text-xs">
                  <li>• Shift from T&M to managed services</li>
                  <li>• Increase offshore/nearshore mix</li>
                  <li>• Improve utilization efficiency</li>
                  <li>• Negotiate better vendor terms</li>
                  <li>• Reduce scope creep with fixed-scope SOWs</li>
                </ul>
              </div>
            </div>

            {/* Problem Accounts */}
            <div className="bg-red-900/20 rounded-lg p-4 border border-red-700/30">
              <div className="text-red-400 font-bold mb-3">🔴 Problem Accounts (West)</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">Gilead</span>
                  <span className="text-red-400">22% GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Kite Pharma</span>
                  <span className="text-red-400">20% GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Amgen</span>
                  <span className="text-red-400">21% GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Enovis</span>
                  <span className="text-red-400">18% GP</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400">
                Target: Convert to managed services (65%+ GP)
              </div>
            </div>

            {/* High Margin Accounts */}
            <div className="bg-green-900/20 rounded-lg p-4 border border-green-700/30">
              <div className="text-green-400 font-bold mb-3">🟢 High Margin Models</div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-300">PTC (Managed)</span>
                  <span className="text-green-400">96.5% GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Harmony Bio (Managed)</span>
                  <span className="text-green-400">93.1% GP</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-300">Abbott (Managed)</span>
                  <span className="text-green-400">64.3% GP</span>
                </div>
              </div>
              <div className="mt-3 text-xs text-slate-400">
                100% managed services = 65-96% GP
              </div>
            </div>
          </div>
        </div>

        {/* Hire ROI Calculator */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-2xl font-bold text-pink-400 mb-6">👥 Hiring ROI</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-pink-500">
              <div className="text-slate-400 text-sm mb-1">Hire Investment</div>
              <div className="text-2xl font-bold text-white">${projections.hireCost}K</div>
              <div className="text-xs text-slate-500 mt-1">{newHires} × $180K fully loaded</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-green-500">
              <div className="text-slate-400 text-sm mb-1">Revenue Generated</div>
              <div className="text-2xl font-bold text-green-400">${projections.hireRevenue.toFixed(0)}K</div>
              <div className="text-xs text-slate-500 mt-1">@ {utilizationTarget}% utilization</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-yellow-500">
              <div className="text-slate-400 text-sm mb-1">ROI</div>
              <div className={`text-2xl font-bold ${projections.hireROI >= 2 ? 'text-green-400' : projections.hireROI >= 1.5 ? 'text-yellow-400' : 'text-red-400'}`}>
                {projections.hireROI.toFixed(1)}x
              </div>
              <div className="text-xs text-slate-500 mt-1">Target: 2.5x+</div>
            </div>
            <div className="bg-slate-900 rounded-lg p-5 border-l-4 border-purple-500">
              <div className="text-slate-400 text-sm mb-1">Break-Even</div>
              <div className="text-2xl font-bold text-white">{(12 / projections.hireROI).toFixed(1)} mo</div>
              <div className="text-xs text-slate-500 mt-1">Payback period</div>
            </div>
          </div>
        </div>

        {/* The Ask Summary */}
        <div className="mt-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50 rounded-xl p-6 border border-cyan-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">📋 The Ask: 2026 Investment Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-cyan-400">${projections.hireCost + 85}K</div>
              <div className="text-sm text-slate-300">Total Investment</div>
              <div className="text-xs text-slate-400">{newHires} hires + BDR + overhead</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-400">{formatCurrency(projections.projectedBookings)}</div>
              <div className="text-sm text-slate-300">2026 Bookings</div>
              <div className="text-xs text-slate-400">+{((projections.projectedBookings / baseline2025.westRevenue - 1) * 100).toFixed(0)}% vs 2025</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-400">{formatCurrency(projections.projectedGP)}</div>
              <div className="text-sm text-slate-300">2026 GP</div>
              <div className="text-xs text-slate-400">{projections.newGpMargin.toFixed(1)}% margin</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-yellow-400">{((projections.projectedBookings * 1000) / (projections.hireCost + 85)).toFixed(1)}x</div>
              <div className="text-sm text-slate-300">Investment ROI</div>
              <div className="text-xs text-slate-400">Bookings / Investment</div>
            </div>
          </div>
        </div>

        {/* Formula Reference */}
        <div className="mt-8 bg-slate-800 rounded-lg p-6 border border-slate-700">
          <h2 className="text-xl font-bold text-white mb-4">📐 Formula Reference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-orange-400 font-mono mb-1">Labor Capacity =</div>
              <div className="text-slate-300 pl-4">FTEs × 2,080 hrs × Utilization%</div>
            </div>
            <div>
              <div className="text-cyan-400 font-mono mb-1">Bookings =</div>
              <div className="text-slate-300 pl-4">Base × (1 + Expansion%) + (New Logos × Avg Deal)</div>
            </div>
            <div>
              <div className="text-green-400 font-mono mb-1">Gross Profit =</div>
              <div className="text-slate-300 pl-4">Bookings × GP Margin%</div>
            </div>
            <div>
              <div className="text-blue-400 font-mono mb-1">Revenue =</div>
              <div className="text-slate-300 pl-4">Bookings × ~85% (in-year recognition)</div>
            </div>
            <div>
              <div className="text-yellow-400 font-mono mb-1">Pipeline Required =</div>
              <div className="text-slate-300 pl-4">Bookings Target / Win Rate%</div>
            </div>
            <div>
              <div className="text-pink-400 font-mono mb-1">Hire ROI =</div>
              <div className="text-slate-300 pl-4">(FTE × 2,080 × Util% × Bill Rate) / Fully Loaded Cost</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
