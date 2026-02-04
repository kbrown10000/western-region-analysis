'use client';

import Link from 'next/link';

type ExpansionPlay = {
  name: string;
  tagline: string;
  entry: string[];
  offer: string[];
  proof: string[];
  success: string[];
  attachTo: string[];
};

const plays: ExpansionPlay[] = [
  {
    name: 'Play 1 — AI Enablement in Regulated Content + Workflows',
    tagline: 'Use Cloud Assurance as the validation engine that makes “AI in regulated systems” safe to try.',
    entry: [
      'High volume of controlled docs/content (Box/Vault/eTMF/QMS/SOPs)',
      'Teams are already spending cycles on validation, testing, and release management',
      'Stakeholders want AI outcomes but fear audit exposure',
    ],
    offer: [
      '90-min use case triage (what to automate vs what to never automate)',
      '2–3 use cases + compliance boundaries (data, model, human-in-loop)',
      'POC plan with success metrics + validation approach',
    ],
    proof: [
      'Known content workflow with measurable pain (review time, errors, search, rework)',
      'Defined GxP boundary and traceability story (how we prove it works)',
    ],
    success: [
      'Paid workshop OR funded POC',
      'Validated compliance path (risk-based) + clear “go/no-go” gate',
    ],
    attachTo: ['Cloud Assurance testing automation', 'Release management', 'Continuous compliance reporting'],
  },
  {
    name: 'Play 2 — AI Governance + Vendor Assessment / TPRM',
    tagline: 'Make AI adoption defensible: policy, risk, and vendor controls — before a regulator asks.',
    entry: [
      'AI vendors/tools are being piloted without a consistent governance model',
      'Security/risk/procurement are becoming a bottleneck',
      'Quality wants a repeatable validation and monitoring plan',
    ],
    offer: [
      'AI governance framework (risk tiers, control objectives, RACI)',
      'Vendor assessment + TPRM package (evidence checklist + remediation backlog)',
      'Operating cadence: quarterly reviews, change control, audit-ready artifacts',
    ],
    proof: [
      'Inventory of AI use cases + vendors',
      'Agreement on risk model and what “acceptable” looks like',
    ],
    success: ['Signed assessment SOW', 'Prioritized remediation plan + executive readout'],
    attachTo: ['CA transparency & audit artifacts', 'Change control discipline', 'Ongoing monitoring'],
  },
  {
    name: 'Play 3 — Foundation for Analytics + AI (Data + Platform Readiness)',
    tagline: 'If the data platform isn’t inspection-ready, the AI program will stall. Fix the foundation first.',
    entry: [
      'Data fragmentation, unclear lineage, manual extracts, and brittle integrations',
      'Cloud programs exist, but “validated analytics” is not a solved problem',
      'AI leaders can’t get reliable, compliant data products to production',
    ],
    offer: [
      'Inspection-ready data architecture (lineage, access controls, retention)',
      'Validated analytics patterns (what needs validation vs what doesn’t)',
      'Phased roadmap: quick wins → scalable platform',
    ],
    proof: ['Target data products + consumers (R&D, Clinical, Quality)', 'Compliance requirements mapped to platform controls'],
    success: ['Architecture approved', 'Roadmap funded with owners + timeline'],
    attachTo: ['CA release controls', 'Automated testing', 'Platform sustainment'],
  },
  {
    name: 'Play 4 — Consolidate into Managed Services Umbrella',
    tagline: 'Turn fragmented subscriptions + SOWs into one team, one plan, one contract.',
    entry: [
      'Multiple parallel SOWs/subscriptions and unclear ownership',
      'Internal teams are overextended maintaining validated platforms',
      'Ticket volume/release cadence suggests ongoing operational need',
    ],
    offer: [
      'Current-state “fragmentation map” (contracts, services, owners, costs)',
      'Single managed services umbrella: governance + sustainment + validation + PMO',
      'Commercial model: multi-year with clear outcomes and SLAs',
    ],
    proof: ['Baseline run cost + backlog', 'Defined steady-state operating model + SLAs'],
    success: ['Consolidation proposal delivered', 'Multi-year expansion signed'],
    attachTo: ['CA as compliance engine', 'Unified release & testing', 'Single reporting layer'],
  },
];

export default function CloudAssuranceExpansionPlaybook() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex flex-wrap gap-6">
            <Link href="/gtm-strategy" className="text-slate-400 hover:text-white">GTM Strategy</Link>
            <Link href="/service-expansion" className="text-slate-400 hover:text-white">Service Expansion</Link>
            <Link href="/dashboard" className="text-slate-400 hover:text-white">Dashboard</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-900/30 border border-cyan-700/40 text-cyan-300 text-xs font-semibold">
            <span>☁️</span>
            <span>Western US Expansion Playbook</span>
            <span className="text-slate-400">|</span>
            <span>Cloud Assurance → AI Expansion</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-3">Cloud Assurance is the wedge. AI expansion is the outcome.</h1>
          <p className="text-lg text-slate-300 max-w-3xl">
            Turn existing <span className="text-white font-semibold">Cloud Assurance (CA)</span> subscriptions / SLAs into measurable expansion in
            <span className="text-white font-semibold"> AI-related services</span> (and adjacent managed services) — while strengthening compliance posture and stickiness.
          </p>
        </div>

        {/* Executive Summary */}
        <section className="mb-10">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">1) Executive Summary (working draft)</h2>
                <p className="text-slate-400 max-w-3xl">
                  This section becomes a live, region-level “account growth report” once we wire in CRM + delivery + contract data.
                </p>
              </div>
              <Link
                href="/dashboard"
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all"
              >
                View Financial Dashboard →
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">
              <Kpi title="Region" value="Western US" note="Biotech Bay • LA • San Diego • Cascadia" />
              <Kpi title="CA Accounts" value="(to load)" note="Pull from CRM/contracts" />
              <Kpi title="CA ARR / TCV" value="(to load)" note="Contracted CA baseline" />
              <Kpi title="12-mo Expansion Target" value="(to set)" note="AI + adjacent managed services" />
            </div>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
                <h3 className="text-white font-semibold mb-3">Primary expansion motions (pick 2–4)</h3>
                <ul className="space-y-2 text-slate-300">
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> AI enablement / use cases (regulated content + workflow)</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> GenAI governance + vendor assessment / TPRM</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Data strategy + analytics foundation for AI</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Managed services consolidation (one team, one SOW)</li>
                </ul>
              </div>
              <div className="bg-gradient-to-br from-emerald-900/25 to-cyan-900/15 rounded-xl p-5 border border-emerald-700/30">
                <h3 className="text-white font-semibold mb-3">Why this is a real lever</h3>
                <p className="text-slate-300">
                  Cloud Assurance is already sold as <span className="text-white font-semibold">continuous compliance</span> with automated testing and release management.
                  That means we’re not “introducing AI” — we’re <span className="text-white font-semibold">industrializing it</span> inside an inspection-ready delivery system.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  <Pill>Continuous compliance</Pill>
                  <Pill>Automated testing</Pill>
                  <Pill>Release management</Pill>
                  <Pill>Always-on transparency</Pill>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Wedge */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-2">2) What Cloud Assurance actually buys you (the wedge)</h2>
              <p className="text-slate-400 mb-5">Use this as the “permission to expand” narrative in exec conversations.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  title="A compliance engine, not a validation event"
                  bullets={[
                    'CA = end-to-end compliance upkeep through releases',
                    'Automated testing + traceability reduces the marginal cost of change',
                    'Transparency: you can show your work (and keep showing it)'
                  ]}
                />
                <Card
                  title="A consolidation magnet"
                  bullets={[
                    'Fragmented subscriptions + SOWs become expensive and brittle',
                    'CA provides a single delivery spine to attach more services',
                    'Managed services is the natural “umbrella”'
                  ]}
                />
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-900/30 to-fuchsia-900/10 rounded-2xl p-6 border border-purple-700/30">
              <h3 className="text-white font-semibold mb-3">Field line that lands</h3>
              <p className="text-slate-300 mb-4">
                “You already trust us to keep your cloud compliance continuous.
                The next step is to <span className="text-white font-semibold">make AI adoption continuous and defensible</span> the same way.”
              </p>
              <p className="text-slate-400 text-sm">Use as an opener for Tier 1 accounts.</p>
            </div>
          </div>
        </section>

        {/* Tiering */}
        <section className="mb-10">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">3) Research approach: not every account equally</h2>
            <p className="text-slate-400 mb-6">Research depth must match revenue potential and likelihood-to-buy.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <TierCard tier="Tier 1" who="Top ~15–25 accounts" how="Deep research" bullets={['Largest CA footprint', 'Best triggers', 'Clear expansion surface area']} />
              <TierCard tier="Tier 2" who="Next ~40–75 accounts" how="Medium research" bullets={['Some triggers', 'Smaller footprint', 'Programmatic plays']} />
              <TierCard tier="Tier 3" who="Everyone else" how="Light research" bullets={['Monitoring', 'Nurture motions', 'Trigger-based outreach']} />
            </div>

            <div className="mt-6 bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
              <h3 className="text-white font-semibold mb-2">Exit criteria (required)</h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Every CA account is tiered within <span className="text-white font-semibold">10 business days</span></li>
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Tier 1 list is approved by <span className="text-white font-semibold">Sales + Delivery leads</span></li>
              </ul>
            </div>
          </div>
        </section>

        {/* Inputs */}
        <section className="mb-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-2">4A) Internal inputs (must-have)</h2>
              <ol className="list-decimal list-inside text-slate-300 space-y-2">
                <li><span className="text-white font-semibold">Contract facts:</span> CA tier, renewal, SLA terms, add-ons, price, margin</li>
                <li><span className="text-white font-semibold">Services map:</span> what else we already deliver (OCM, integrations, validation, MS)</li>
                <li><span className="text-white font-semibold">Installed stack:</span> Veeva/Box/ServiceNow/Oracle/Azure/SSO/DocuSign…</li>
                <li><span className="text-white font-semibold">Stakeholder map:</span> IT, Quality, Compliance, Clinical, Regulatory</li>
                <li><span className="text-white font-semibold">Delivery signals:</span> ticket volume, releases, backlog, unresolved risks</li>
                <li><span className="text-white font-semibold">Fragmentation signals:</span> multiple subscriptions + multiple SOWs</li>
              </ol>
              <div className="mt-4">
                <Link href="/service-expansion" className="text-cyan-400 hover:text-cyan-300 font-semibold">
                  Tie this to the Service Expansion page →
                </Link>
              </div>
            </div>

            <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
              <h2 className="text-2xl font-bold text-white mb-2">4B) External inputs (Tier 1 required)</h2>
              <ul className="text-slate-300 space-y-2">
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Funding, M&A, layoffs, new facilities, clinical phase changes</li>
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Regulatory exposure (audits, public warning letters when applicable)</li>
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Hiring signals: AI/data/validation/quality systems roles</li>
                <li className="flex gap-2"><span className="text-cyan-400">→</span> Tech direction: platform migrations, analytics initiatives</li>
              </ul>

              <div className="mt-6 bg-gradient-to-br from-cyan-900/20 to-blue-900/10 rounded-xl p-5 border border-cyan-700/30">
                <h3 className="text-white font-semibold mb-2">Research quality bar</h3>
                <p className="text-slate-300">
                  Tier 1 accounts must each have an evidence-backed <span className="text-white font-semibold">“why now” trigger</span>, a buyer hypothesis,
                  and a wedge offer that starts small but scales.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Plays */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold text-white mb-2">5) Repeatable expansion plays (sell next)</h2>
          <p className="text-slate-400 mb-6">These are designed to attach directly to CA so the story stays coherent.</p>

          <div className="space-y-4">
            {plays.map((p) => (
              <div key={p.name} className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white">{p.name}</h3>
                    <p className="text-slate-400 mt-1">{p.tagline}</p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {p.attachTo.map((a) => (
                      <Pill key={a}>{a}</Pill>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
                  <MiniCard title="Entry conditions" items={p.entry} />
                  <MiniCard title="Offer" items={p.offer} />
                  <MiniCard title="Proof needed" items={p.proof} />
                  <MiniCard title="Success criteria" items={p.success} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Account Template */}
        <section className="mb-10">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">6) Account-by-account template (copy/paste)</h2>
            <p className="text-slate-400 mb-6">Use this for Tier 1 (required) and Tier 2 (recommended). Keep it binary: go/no-go.</p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
                <h3 className="text-white font-semibold mb-3">What we capture</h3>
                <ul className="text-slate-300 space-y-2">
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Profile + CA footprint + renewal date</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Evidence: systems, releases, pain, compliance risks</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Triggers: internal + external + budget timing</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Buyer map + champion hypothesis</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> Best next play (1–2) + proof + value</li>
                  <li className="flex gap-2"><span className="text-cyan-400">→</span> 30/60/90 plan + binary exit criteria</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-900/20 to-slate-900/20 rounded-xl p-5 border border-amber-700/30">
                <h3 className="text-white font-semibold mb-3">Binary gates (no vague “maybe”)</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-slate-900/40 rounded-lg p-4 border border-slate-700/60">
                    <p className="text-green-400 font-semibold">GO if all true</p>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• Confirmed exec priority</li>
                      <li>• Confirmed budget window</li>
                      <li>• Decision maker + sponsor identified</li>
                      <li>• Success metrics agreed</li>
                      <li>• Delivery can staff</li>
                    </ul>
                  </div>
                  <div className="bg-slate-900/40 rounded-lg p-4 border border-slate-700/60">
                    <p className="text-red-400 font-semibold">NO-GO if any true</p>
                    <ul className="text-slate-300 text-sm mt-2 space-y-1">
                      <li>• No trigger in 6 months</li>
                      <li>• No access to buyer</li>
                      <li>• No measurable outcome</li>
                      <li>• Cannot staff in window</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Dashboard */}
        <section className="mb-12">
          <div className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700">
            <h2 className="text-2xl font-bold text-white mb-2">7) Region-level dashboard (weekly)</h2>
            <p className="text-slate-400 mb-6">A lightweight operating cadence that keeps CA renewals safe while creating expansion pipeline.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <Card title="Progress" bullets={['# Tier 1 reports completed', '# exec meetings booked', '# workshops/assessments proposed + sold']} />
              <Card title="Commercial" bullets={['$ pipeline created from CA expansions', 'Win rate + sales cycle time', 'Renewal risk (CA) + saves']} />
              <Card title="Delivery" bullets={['Capacity constraints by capability', 'Time-to-staff for key roles', 'Backlog/ticket signals that justify MS']} />
            </div>
          </div>
        </section>

        <div className="flex flex-wrap gap-4">
          <Link href="/gtm-strategy" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to GTM Strategy
          </Link>
          <Link href="/service-expansion" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            Use this in Service Expansion →
          </Link>
        </div>
      </main>
    </div>
  );
}

function Kpi({ title, value, note }: { title: string; value: string; note: string }) {
  return (
    <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
      <p className="text-slate-400 text-xs uppercase tracking-wider">{title}</p>
      <p className="text-2xl font-bold text-white mt-1">{value}</p>
      <p className="text-slate-500 text-sm mt-1">{note}</p>
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs px-2 py-1 rounded-full bg-slate-700/60 border border-slate-600 text-slate-200">
      {children}
    </span>
  );
}

function Card({ title, bullets }: { title: string; bullets: string[] }) {
  return (
    <div className="bg-slate-900/40 rounded-xl p-5 border border-slate-700/60">
      <h4 className="text-white font-semibold mb-3">{title}</h4>
      <ul className="space-y-2 text-slate-300">
        {bullets.map((b) => (
          <li key={b} className="flex gap-2">
            <span className="text-cyan-400">→</span>
            <span>{b}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function MiniCard({ title, items }: { title: string; items: string[] }) {
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

function TierCard({ tier, who, how, bullets }: { tier: string; who: string; how: string; bullets: string[] }) {
  const accent = tier === 'Tier 1' ? 'border-cyan-700/50' : tier === 'Tier 2' ? 'border-amber-700/40' : 'border-slate-700';
  const badge = tier === 'Tier 1' ? 'bg-cyan-900/30 text-cyan-300 border-cyan-700/40' : tier === 'Tier 2' ? 'bg-amber-900/20 text-amber-300 border-amber-700/30' : 'bg-slate-900/30 text-slate-300 border-slate-700/60';

  return (
    <div className={`bg-slate-900/40 rounded-xl p-5 border ${accent}`}>
      <div className={`inline-flex px-2 py-1 rounded-full text-xs font-semibold border ${badge}`}>{tier}</div>
      <p className="text-white font-semibold mt-3">{how}</p>
      <p className="text-slate-400 text-sm">{who}</p>
      <ul className="text-slate-300 text-sm mt-3 space-y-1">
        {bullets.map((b) => (
          <li key={b}>• {b}</li>
        ))}
      </ul>
    </div>
  );
}
