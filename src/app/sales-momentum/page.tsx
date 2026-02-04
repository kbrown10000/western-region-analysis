'use client';

import Link from 'next/link';

type Metric = { label: string; value: string; note: string; tone?: 'good' | 'warn' | 'bad' | 'neutral' };

type Motion = {
  name: string;
  intent: 'Offense' | 'Defense';
  signal: string[];
  move: string[];
  output: string[];
};

const topMetrics: Metric[] = [
  { label: 'Qualified Opportunities vs. Customers', value: '(to load)', note: 'Goal: every strategic account has a qualified next step in motion', tone: 'neutral' },
  { label: 'Expansion Pipeline Created (90d)', value: '(to load)', note: 'AI + managed services + platform sustainment', tone: 'neutral' },
  { label: 'Renewal Risk (CA + MS)', value: '(to load)', note: 'If pipeline = 0, risk is usually rising', tone: 'warn' },
  { label: 'Coverage (Pipeline ÷ Target)', value: '(to load)', note: 'Target: 3.0× for 2–3 quarter horizon', tone: 'neutral' },
];

const motions: Motion[] = [
  {
    name: 'Offense: CA → AI Expansion (attach plays)',
    intent: 'Offense',
    signal: ['Existing CA/MS relationship', 'AI initiatives / vendor pilots', 'High release cadence + compliance overhead'],
    move: ['Pick 1 expansion play (AI enablement / AI governance / data foundation / MS umbrella)', 'Run a paid workshop or assessment with binary success criteria'],
    output: ['Qualified expansion opportunity with value range + sponsor', 'Delivery model confirmed (project vs managed services)'],
  },
  {
    name: 'Offense: One-Trick Pony conversion',
    intent: 'Offense',
    signal: ['Large revenue, narrow service mix (e.g., staffing only)', 'Low GP%', 'Multiple stakeholder groups not mapped'],
    move: ['Create “services-in-account map” + 2 adjacent offers', 'Bundle into a 90-day pilot → annualized managed services option'],
    output: ['2nd service sold OR MS pilot in flight', 'Margin lift plan agreed'],
  },
  {
    name: 'Defense: Pipeline gap = churn radar',
    intent: 'Defense',
    signal: ['Account has no qualified opps / next steps', 'Executive sponsor absent', 'Tickets/backlog rising; sentiment deteriorating'],
    move: ['Run a “save review” with delivery + sales', 'Create 30-day stabilization plan + exec check-in'],
    output: ['Renewal plan with named actions + owner', 'One tangible “save” deliverable (risk reduction, backlog burn-down, SLA fix)'],
  },
  {
    name: 'Defense: At-risk opportunity triage',
    intent: 'Defense',
    signal: ['Regression/Same-day flip/churn signals', 'Stalled stage duration', 'Competitive displacement signals'],
    move: ['Re-qualify: why now, why us, why change', 'Escalate sponsor / add executive air cover'],
    output: ['Clear re-plan OR clean no-go', 'Updated close plan + next meeting on calendar'],
  },
];

export default function SalesMomentum() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex flex-wrap gap-6">
            <Link href="/dashboard" className="text-slate-400 hover:text-white">Dashboard</Link>
            <Link href="/churn-signals" className="text-slate-400 hover:text-white">Churn Signals</Link>
            <Link href="/gtm-strategy" className="text-slate-400 hover:text-white">GTM Strategy</Link>
            <Link href="/service-expansion" className="text-slate-400 hover:text-white">Service Expansion</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-900/20 border border-emerald-700/30 text-emerald-200 text-xs font-semibold">
            <span>⚡</span>
            <span>Sales Momentum</span>
            <span className="text-slate-400">|</span>
            <span>Offense + Defense</span>
          </div>
          <h1 className="text-4xl font-bold text-white mt-4 mb-2">Sales Momentum (Western Region)</h1>
          <p className="text-xl text-slate-400 max-w-4xl">
            If we have a strong GTM and good plays, we should see an expanding pipeline. If we don’t have qualified opportunities against existing customers,
            it’s often a leading indicator of churn. This section operationalizes <span className="text-white font-semibold">both offense and defense</span>.
          </p>
        </div>

        {/* Core thesis */}
        <section className="mb-10">
          <div className="bg-gradient-to-br from-amber-900/20 to-slate-900/20 rounded-2xl p-6 border border-amber-700/30">
            <h2 className="text-2xl font-bold text-white mb-3">The thesis</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
                <p className="text-white font-semibold mb-2">Defense (Protect revenue)</p>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex gap-2"><span className="text-amber-400">→</span> No qualified opps / no next meeting = rising churn probability</li>
                  <li className="flex gap-2"><span className="text-amber-400">→</span> Ticket volume + backlog + sponsor drift are early warning signals</li>
                  <li className="flex gap-2"><span className="text-amber-400">→</span> Renewal saves are won 90–180 days before the renewal date</li>
                </ul>
              </div>
              <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
                <p className="text-white font-semibold mb-2">Offense (Create expansion)</p>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex gap-2"><span className="text-emerald-400">→</span> Every strategic account needs a named expansion motion</li>
                  <li className="flex gap-2"><span className="text-emerald-400">→</span> CA is the wedge: turn compliance sustainment into AI + MS growth</li>
                  <li className="flex gap-2"><span className="text-emerald-400">→</span> Pipeline should “replenish” every quarter if GTM is working</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-4">Region-level momentum dashboard (to wire to CRM/MCP)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topMetrics.map((m) => (
              <MetricCard key={m.label} {...m} />
            ))}
          </div>
          <p className="text-slate-500 text-sm mt-3">
            Next step: connect Sales data (pipeline, stage duration, churn signals) once Sales MCP aggregation tools are fully stable.
          </p>
        </section>

        {/* Coverage model */}
        <section className="mb-10">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">Coverage model (simple and ruthless)</h2>
            <p className="text-slate-400 mb-5">This makes the “pipeline gap = churn radar” visible and actionable.</p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
              <Card
                title="Account coverage"
                bullets={[
                  'Tier 1 accounts: must have at least 1 qualified opp or funded assessment in flight',
                  'Tier 2: must have a named play + next meeting scheduled',
                  'Tier 3: monitored with trigger-based outreach'
                ]}
              />
              <Card
                title="Pipeline hygiene"
                bullets={[
                  'No next step within 14 days → re-qualify or close out',
                  'Stage duration outliers → deal review + exec air cover',
                  'Expansion opps must include delivery model + success metrics'
                ]}
              />
              <Card
                title="Defense hygiene"
                bullets={[
                  '90–180 days pre-renewal: run a save review',
                  'If sentiment/tickets rising: stabilization plan + sponsor check-in',
                  'One measurable “save deliverable” per at-risk account'
                ]}
              />
            </div>
          </div>
        </section>

        {/* Motions */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">Repeatable motions (what we do weekly)</h2>
          <div className="space-y-4">
            {motions.map((m) => (
              <div key={m.name} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className={`text-xs px-2 py-1 rounded-full border ${m.intent === 'Offense' ? 'bg-emerald-900/20 text-emerald-200 border-emerald-700/30' : 'bg-amber-900/20 text-amber-200 border-amber-700/30'}`}>{m.intent}</span>
                      <h3 className="text-xl font-bold text-white">{m.name}</h3>
                    </div>
                  </div>
                  {m.name.includes('CA') ? (
                    <Link href="/cloud-assurance-expansion" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                      Open CA→AI Playbook →
                    </Link>
                  ) : null}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
                  <Mini title="Signals" items={m.signal} />
                  <Mini title="Moves" items={m.move} />
                  <Mini title="Outputs" items={m.output} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/churn-signals" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Churn Signals
          </Link>
          <Link href="/dashboard" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Financial Dashboard →
          </Link>
        </div>
      </main>
    </div>
  );
}

function toneToColor(tone?: Metric['tone']) {
  switch (tone) {
    case 'good':
      return 'text-emerald-400';
    case 'warn':
      return 'text-amber-400';
    case 'bad':
      return 'text-red-400';
    default:
      return 'text-cyan-400';
  }
}

function MetricCard({ label, value, note, tone }: Metric) {
  return (
    <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
      <p className="text-slate-400 text-sm mb-1">{label}</p>
      <p className={`text-3xl font-bold ${toneToColor(tone)}`}>{value}</p>
      <p className="text-slate-500 text-sm mt-2">{note}</p>
    </div>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2"><span className="text-cyan-400">→</span><span>{b}</span></li>
        ))}
      </ul>
    </div>
  );
}

function Mini({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-slate-900/40 rounded-xl p-4 border border-slate-700/60">
      <p className="text-slate-400 text-xs uppercase tracking-wider">{title}</p>
      <ul className="text-slate-300 text-sm mt-2 space-y-1">
        {items.map((i) => (
          <li key={i}>• {i}</li>
        ))}
      </ul>
    </div>
  );
}
