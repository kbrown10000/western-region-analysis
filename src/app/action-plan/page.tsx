'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function ActionPlan() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-2">📋 Action Plan</h1>
          <p className="text-slate-400">90-day roadmap to reverse win rate decline and capture Western growth</p>
        </div>

        {/* Priority Matrix */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎯 Priority Matrix</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-red-900/20 rounded-xl p-6 border border-red-700/50">
              <h3 className="text-red-400 font-bold text-lg mb-4">🔥 Urgent & Important</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Win/loss analysis for 4.5 pt decline — schedule by Feb 14</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Rate review for Gilead, Kite, Amgen, Enovis — $1.68M margin at stake</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-400 mt-1">•</span>
                  <span>Address 8 critical churn signals — see Churn page</span>
                </li>
              </ul>
            </div>
            <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-700/50">
              <h3 className="text-yellow-400 font-bold text-lg mb-4">📅 Important, Not Urgent</h3>
              <ul className="space-y-3 text-slate-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Build Seattle market presence — greenfield opportunity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Develop managed services offering for cell therapy</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span>Identify top 10 target accounts for outreach</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* 30-60-90 Day Plan */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📆 30-60-90 Day Plan</h2>
          
          {/* Days 1-30 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center text-slate-900 font-bold">30</div>
              <h3 className="text-xl font-bold text-white">Days 1-30: Diagnose & Stabilize</h3>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 ml-6 border-l-4 border-l-cyan-500">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Week 1: Win/Loss Analysis Session</p>
                    <p className="text-slate-400 text-sm">Pull lost deal data from 2024-2025. Identify top 5 reasons for losses. Compare to competitors.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Sales Leadership | Due: Feb 14</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Week 2: Margin Audit for Problem Accounts</p>
                    <p className="text-slate-400 text-sm">Review Gilead, Kite, Amgen, Enovis contracts. Identify scope creep, underpriced services, excess hours.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Finance + Delivery | Due: Feb 21</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Week 3-4: Critical Churn Intervention</p>
                    <p className="text-slate-400 text-sm">Assign executive sponsors to 8 critical churn accounts. Schedule relationship calls. Document risks.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Account Management | Due: Feb 28</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Days 31-60 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold">60</div>
              <h3 className="text-xl font-bold text-white">Days 31-60: Execute & Expand</h3>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 ml-6 border-l-4 border-l-purple-500">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Rate Increase Negotiations</p>
                    <p className="text-slate-400 text-sm">Target 15% rate increase at next renewal for low-margin accounts. Prepare value justification decks.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Account Executives | Due: Mar 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Top 10 Target Account Outreach</p>
                    <p className="text-slate-400 text-sm">Select top 10 from target list. Research decision makers. Begin multi-touch outreach sequence.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: BD Team | Due: Mar 31</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Seattle Market Research</p>
                    <p className="text-slate-400 text-sm">Map Seattle ecosystem. Identify local events, conferences. Evaluate partnership opportunities.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Marketing | Due: Mar 31</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Days 61-90 */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">90</div>
              <h3 className="text-xl font-bold text-white">Days 61-90: Scale & Measure</h3>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 ml-6 border-l-4 border-l-green-500">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Managed Services Pilot</p>
                    <p className="text-slate-400 text-sm">Launch managed services pilot with 2-3 accounts. Document process, pricing model, and delivery framework.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Solutions Team | Due: Apr 30</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Q1 Win Rate Review</p>
                    <p className="text-slate-400 text-sm">Measure Q1 2026 win rate vs. Q1 2025. Target: +2 pts improvement. Document what's working.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Sales Ops | Due: Apr 15</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <input type="checkbox" className="mt-1.5 w-4 h-4 rounded" />
                  <div>
                    <p className="text-white font-semibold">Seattle Launch Decision</p>
                    <p className="text-slate-400 text-sm">Based on research, make go/no-go decision on Seattle expansion. Budget, hiring plan, timeline.</p>
                    <p className="text-cyan-400 text-xs mt-1">Owner: Leadership | Due: Apr 30</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Metrics */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">📊 Success Metrics</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-2">Win Rate Target</p>
              <p className="text-3xl font-bold text-cyan-400">38%</p>
              <p className="text-slate-500 text-xs">+2.4 pts from current</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-2">West GP% Target</p>
              <p className="text-3xl font-bold text-green-400">42%</p>
              <p className="text-slate-500 text-xs">+5.5 pts from current</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-2">New Logo Target</p>
              <p className="text-3xl font-bold text-purple-400">5</p>
              <p className="text-slate-500 text-xs">from target list</p>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 text-center">
              <p className="text-slate-400 text-sm mb-2">Margin Recovery</p>
              <p className="text-3xl font-bold text-yellow-400">$500K</p>
              <p className="text-slate-500 text-xs">from rate improvements</p>
            </div>
          </div>
        </section>

        {/* RACI */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">👥 Accountability (RACI)</h2>
          <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-slate-700">
                <tr>
                  <th className="py-3 px-4 text-left text-slate-300">Initiative</th>
                  <th className="py-3 px-4 text-center text-slate-300">Responsible</th>
                  <th className="py-3 px-4 text-center text-slate-300">Accountable</th>
                  <th className="py-3 px-4 text-center text-slate-300">Consulted</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-700">
                  <td className="py-3 px-4 text-white">Win Rate Recovery</td>
                  <td className="py-3 px-4 text-center text-cyan-400">Sales Ops</td>
                  <td className="py-3 px-4 text-center text-purple-400">VP Sales</td>
                  <td className="py-3 px-4 text-center text-slate-400">Marketing</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="py-3 px-4 text-white">Margin Improvement</td>
                  <td className="py-3 px-4 text-center text-cyan-400">Finance</td>
                  <td className="py-3 px-4 text-center text-purple-400">CFO</td>
                  <td className="py-3 px-4 text-center text-slate-400">Delivery</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="py-3 px-4 text-white">New Logo Acquisition</td>
                  <td className="py-3 px-4 text-center text-cyan-400">BD Team</td>
                  <td className="py-3 px-4 text-center text-purple-400">CRO</td>
                  <td className="py-3 px-4 text-center text-slate-400">Solutions</td>
                </tr>
                <tr className="border-t border-slate-700">
                  <td className="py-3 px-4 text-white">Seattle Expansion</td>
                  <td className="py-3 px-4 text-center text-cyan-400">BD Lead</td>
                  <td className="py-3 px-4 text-center text-purple-400">CEO</td>
                  <td className="py-3 px-4 text-center text-slate-400">Finance, HR</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="flex gap-4">
          <Link href="/appendix" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Appendix →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
