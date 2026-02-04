'use client';

import Link from 'next/link';
import targetsData from '../../../data/biotech-targets.json';

const priorityColors: Record<string, string> = {
  strategic: 'bg-purple-500',
  high: 'bg-red-500',
  medium: 'bg-yellow-500',
  watch: 'bg-slate-500',
};

const priorityLabels: Record<string, string> = {
  strategic: 'Strategic',
  high: 'High Priority',
  medium: 'Medium',
  watch: 'Watch List',
};

export default function BayAreaDeepDive() {
  const bayAreaTargets = targetsData.targets.filter(t => t.region === 'NorCal');
  const customers = targetsData.existingCustomers.filter(c => c.region === 'NorCal');
  
  const strategicCount = bayAreaTargets.filter(t => t.priority === 'strategic').length;
  const highCount = bayAreaTargets.filter(t => t.priority === 'high').length;
  const totalFunding = bayAreaTargets.reduce((sum, t) => {
    const match = t.funding.match(/\$(\d+(?:\.\d+)?)(M|B)/);
    if (match) {
      const value = parseFloat(match[1]);
      return sum + (match[2] === 'B' ? value * 1000 : value);
    }
    return sum;
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">🌉 Biotech Bay</h1>
          <p className="text-xl text-cyan-400 mb-2">San Francisco Bay Area</p>
          <p className="text-slate-400">The birthplace of biotech — South San Francisco, Berkeley, and the peninsula</p>
        </div>

        {/* Key Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Target Companies</p>
            <p className="text-4xl font-bold text-cyan-400">{bayAreaTargets.length}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Strategic + High</p>
            <p className="text-4xl font-bold text-white">{strategicCount + highCount}</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Total Funding</p>
            <p className="text-4xl font-bold text-green-400">${(totalFunding / 1000).toFixed(1)}B+</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <p className="text-slate-400 text-sm mb-1">Existing Customers</p>
            <p className="text-4xl font-bold text-purple-400">{customers.length}</p>
          </div>
        </div>

        {/* Market Overview */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Market Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-cyan-900/30 to-blue-900/20 rounded-xl p-6 border border-cyan-700/30">
              <h3 className="text-cyan-400 font-bold mb-2">250+ Biotech Companies</h3>
              <p className="text-slate-300 text-sm">South San Francisco alone hosts 12M sq ft of dedicated lab space — more than any city in the world.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-900/30 to-pink-900/20 rounded-xl p-6 border border-purple-700/30">
              <h3 className="text-purple-400 font-bold mb-2">AI Drug Discovery Hub</h3>
              <p className="text-slate-300 text-sm">52% of Bay Area biotech funding now goes to AI-driven companies. Numerion Labs (ex-Atomwise), Deep Genomics, Anagenex leading the way.</p>
            </div>
            <div className="bg-gradient-to-br from-green-900/30 to-emerald-900/20 rounded-xl p-6 border border-green-700/30">
              <h3 className="text-green-400 font-bold mb-2">UCSF/Stanford Pipeline</h3>
              <p className="text-slate-300 text-sm">World-class research institutions feeding a steady stream of spinouts and scientific talent.</p>
            </div>
          </div>
        </section>

        {/* Existing Customers */}
        {customers.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6">💼 Existing Customers</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {customers.map((customer, idx) => (
                <div key={idx} className="bg-slate-800/50 rounded-xl p-6 border border-purple-500/50">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-white font-bold text-lg">{customer.name}</h3>
                    <span className="text-purple-400 font-semibold">{customer.revenue}</span>
                  </div>
                  <p className="text-slate-400 text-sm mb-2">{customer.city}</p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-500">GP%:</span>
                    <span className={`font-semibold ${parseFloat(customer.gp) >= 40 ? 'text-green-400' : parseFloat(customer.gp) >= 30 ? 'text-yellow-400' : 'text-red-400'}`}>
                      {customer.gp}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Target Companies */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Target Companies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {bayAreaTargets.filter(t => !t.isCustomer).map((target, idx) => (
              <div key={idx} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700 hover:border-cyan-500/50 transition-all">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-white font-bold">{target.name}</h3>
                  <span className={`${priorityColors[target.priority]} text-white text-xs px-2 py-1 rounded-full`}>
                    {priorityLabels[target.priority]}
                  </span>
                </div>
                <p className="text-cyan-400 text-sm mb-2">{target.focus}</p>
                <div className="flex flex-wrap gap-2 text-xs text-slate-400">
                  <span className="bg-slate-700 px-2 py-1 rounded">{target.city}</span>
                  <span className="bg-slate-700 px-2 py-1 rounded">{target.funding}</span>
                  <span className="bg-slate-700 px-2 py-1 rounded">{target.stage}</span>
                </div>
                {target.employees && (
                  <p className="text-slate-500 text-xs mt-2">{target.employees} employees</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Key Opportunities */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">💡 Key Opportunities</h2>
          <div className="space-y-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-2">1. Cell Therapy Manufacturing Scale-Up</h3>
              <p className="text-slate-300">Cellares, Allogene, and 64x Bio all need GxP manufacturing support as they scale. Position for quality systems, validation, and CMC consulting.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-2">2. AI Platform Data Management</h3>
              <p className="text-slate-300">Numerion Labs (churned - win back!), Deep Genomics, Anagenex generating massive datasets. Compliance, data governance, and 21 CFR Part 11 expertise needed.</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <h3 className="text-cyan-400 font-bold mb-2">3. Commercial Launch Support</h3>
              <p className="text-slate-300">GRAIL, Color Health, and Cofactor moving to commercial scale. Quality systems for commercial ops, post-market compliance.</p>
            </div>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/san-diego-deep-dive" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Biotech Beach →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
