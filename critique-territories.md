# Critique: Western Territories

**Review Date:** February 4, 2026  
**Reviewer:** Strategy Review Board  
**Page:** `/territories`

---

## Executive Summary

The Territories page provides the clearest operational view of Western Region dynamics but reveals a business dangerously concentrated in two sellers. Justin Ott (Biotech Beach) and Mike Campbell (LA BioMed) represent 87% of territory revenue but with wildly different performance profiles. The "pistons in an engine" metaphor is apt — two pistons are firing, two are dead.

---

## What's Strong

- **Territory-as-ecosystem framing** is strategically sound (city clusters, not states)
- **Clear status badging** (HEALTHY, MARGIN CRISIS, UNDERPENETRATED, GREENFIELD)
- **Account-level detail** with revenue and GP% for key accounts
- **Honest seller status indicators** (star, coaching, vacant, partner)
- **Investment priorities are correct**: Protect Biotech Beach, Fix LA margins, Hire for Bay, Partner in Cascadia
- **Risk/opportunity sections per territory** are actionable

---

## Critical Gaps

### 1. **Revenue Concentration Risk is Extreme** — SEVERITY: HIGH
| Territory | Revenue | % of West |
|-----------|---------|-----------|
| Biotech Beach | $7.98M | 48.6% |
| LA BioMed | $6.47M | 39.4% |
| Biotech Bay | $1.35M | 8.2% |
| Cascadia | $0.60M | 3.7% |

Justin Ott and Mike Campbell control 88% of Western revenue. If either leaves, the region collapses. **No succession plan is mentioned.**

### 2. **LA BioMed GP% is Actually Worse Than Shown** — SEVERITY: HIGH
Page shows LA at 23.9% GP, but the key accounts reveal the damage:
- Gilead: 22% GP
- Kite: 20% GP
- Amgen: 21% GP
- Enovis: 18% GP

These 4 accounts represent $6.73M revenue at ~20% GP. That's **$5.4M of revenue at unacceptable margins** dragging down the entire region.

### 3. **Biotech Bay "Underpenetrated" is Charitable** — SEVERITY: HIGH
$1.35M revenue from the largest biotech market in North America is not "underpenetrated" — it's a complete failure to compete. The page lists Genentech/Roche, BioMarin, Arcus as "targets" with $0 revenue. These aren't targets — they're evidence of competitive loss.

**Who owns these accounts now?** Deloitte? Accenture? McKinsey? The page doesn't say.

### 4. **Cascadia Pipeline is ZERO, Not "Greenfield Opportunity"** — SEVERITY: HIGH
The page shows:
- Pipeline: $0
- Pipeline EGP: $0
- Win Rate: 0%
- Closed Won Q4: $0

This isn't a greenfield opportunity — it's a non-existent market presence. The $150K partner investment is proposed with no validation that partners can actually penetrate this market.

### 5. **Mike Campbell's 38.2% Win Rate + 23.9% GP = Coaching Escalation** — SEVERITY: MEDIUM
Mike has:
- $2.94M pipeline
- $1.47M closed won Q4
- 38.2% win rate (below company 41.6%)
- 23.9% territory GP (well below 34.3% West average)

This isn't a "coaching" situation — this is a performance management conversation. The 4 problem accounts are all in his territory.

### 6. **Justin Ott Dependency** — SEVERITY: MEDIUM
Justin Ott's Biotech Beach shows:
- 60.9% win rate (exceptional)
- 70.8% GP (excellent)
- $6.92M pipeline
- $5.13M closed won Q4

But if Justin Ott leaves, 49% of West revenue and the only healthy territory disappears. What's the retention strategy? What's the succession plan?

### 7. **Territory Revenue Adds to $16.4M, Not $17.19M** — SEVERITY: LOW
Homepage shows West revenue as $17.19M but territories sum to $16.4M ($7.98 + $6.47 + $1.35 + $0.60). Where's the $790K discrepancy?

---

## Data Validation

| Claim | Site Value | Expected (from TOOLS.md) | Status |
|-------|------------|--------------------------|--------|
| Justin Ott Pipeline | $6.92M | $6.92M (get_pipeline_by_owner) | ✅ VERIFIED |
| Justin Ott Win Rate | 60.9% | ~60.9% (get_team_performance) | ✅ VERIFIED |
| Mike Campbell Pipeline | $2.94M | ~$2.94M (get_pipeline_by_owner) | ✅ VERIFIED |
| Mike Campbell Win Rate | 38.2% | ~38.2% (get_team_performance) | ✅ VERIFIED |
| Total West Pipeline | $10.95M | Sum of territories | ⚠️ BELOW $14.05M TOTAL |
| Biotech Bay Pipeline | $1.09M | Plausible | ✅ REASONABLE |

**Note:** Territory pipeline totals ($10.95M) don't match homepage pipeline ($14.05M). Discrepancy may be unassigned opportunities.

---

## Recommendations

### Immediate (Week 1-2)
1. **Justin Ott retention package** — whatever it costs, retain this person. They ARE the Western region.
2. **Mike Campbell performance review** — 38.2% win rate + 23.9% GP on $6.47M revenue requires accountability, not just coaching.
3. **Account margin review** — can Gilead, Kite, Amgen, Enovis contracts be renegotiated or should they be de-prioritized?

### Short-term (Q1 2026)
4. **Biotech Bay competitive analysis** — before hiring an AE, understand who owns Genentech, BioMarin, Arcus. We may be too late.
5. **Territory succession planning** — if Justin leaves, who takes Biotech Beach? If Mike needs to be replaced, who's ready?
6. **Reconcile revenue discrepancy** — why does territory sum differ from homepage?

### Medium-term (Q2-Q3 2026)
7. **LA account intervention program** — dedicated margin recovery effort for the 4 problem accounts
8. **Biotech Bay AE hire** — but only after competitive analysis validates opportunity
9. **Cascadia milestone gates** — $150K investment with quarterly pipeline milestones; kill if not tracking

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Justin Ott departure | Medium | Critical | Retention package + succession plan |
| Mike Campbell termination | Medium | High | Hiring pipeline, account transition plan |
| LA accounts stay at 20% GP | High | High | Contract renegotiation or de-prioritization |
| Biotech Bay hire fails | Medium | Medium | Pre-hire competitive analysis |
| Cascadia partner investment fails | Medium | Medium | Staged funding with milestones |

**Overall Assessment:** The Territories page is the most operationally honest in the presentation, revealing a region dependent on a single star performer (Justin Ott) while carrying a significant margin liability (LA BioMed). The two "opportunity" territories (Bay and Cascadia) are presented optimistically when they may represent markets already lost to competitors. The board should demand retention and succession plans before approving any expansion investments.
