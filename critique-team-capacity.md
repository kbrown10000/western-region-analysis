# Critique: Team Capacity

**Review Date:** February 4, 2026  
**Reviewer:** Strategy Review Board  
**Page:** `/team-capacity`

---

## Executive Summary

The Team Capacity page is the most data-rich and operationally honest section of the presentation. It correctly identifies critical issues: 77% stale pipeline, 17-18% win rates for two sellers, and massive seller concentration risk. However, the page presents these as "coaching opportunities" when several represent performance management situations requiring harder decisions.

---

## What's Strong

- **Real-time data attribution** — clear MCP sources for every metric
- **Win rate matrix** exposes the New Logo (90.2%) vs Existing (35.6%) paradox
- **Seller leaderboard** with status badging (star, coaching) drives accountability
- **Pipeline health alert** correctly flags 77% stale pipeline as crisis
- **LTE win rate insight** (89.1%) identifies expansion strategy that works
- **Western territory alignment grid** shows coverage gaps clearly
- **Partner channel performance** honestly shows anemic results

---

## Critical Gaps

### 1. **Three "Coaching" Sellers Are Performance Problems** — SEVERITY: HIGH
| Seller | Win Rate | Company Avg | Gap |
|--------|----------|-------------|-----|
| Marcus Dinan | 17.9% | 41.6% | -23.7 pts |
| Avani Macwan | 17.1% | 41.6% | -24.5 pts |
| Mike Campbell | 38.2% | 41.6% | -3.4 pts |

Marcus and Avani are converting less than half the company average. These aren't "coaching" situations — these are performance plans or separations. The page softpedals this reality.

### 2. **77% Stale Pipeline is Not Just "Aging"** — SEVERITY: HIGH
387 average days open means deals that should have closed in 2024 are still showing as pipeline. This is:
- CRM hygiene failure
- Deal qualification failure
- Or both

The $39.5M "at risk" pipeline likely includes $15-20M of effectively dead opportunities. Real healthy pipeline may be closer to $15M, not $54.8M.

### 3. **No Quota Attainment Data** — SEVERITY: HIGH
The leaderboard shows pipeline and closed-won but not:
- Individual quota assignments
- % to quota YTD
- Quota vs capacity mismatch

Without this, we can't assess if sellers are underperforming vs reasonable targets or if quotas are misaligned.

### 4. **Existing Customer Win Rate (35.6%) is a Strategic Crisis** — SEVERITY: HIGH
New Logo: 90.2% win rate
Existing Customer: 35.6% win rate

This is backwards. Usually expansion is easier than acquisition. A 35.6% expansion win rate suggests:
- Customer satisfaction issues
- Competitive displacement in existing accounts
- Poor account management/cross-sell execution

The page notes this but doesn't propose intervention.

### 5. **Justin Ott Dependency Unaddressed** — SEVERITY: MEDIUM
Justin Ott has:
- $6.9M pipeline (20% of company)
- $5.1M Q4 closed (highest by far)
- 60.9% win rate (exceptional)

But there's no:
- Retention strategy mentioned
- Succession plan
- Risk mitigation if he leaves

The Western region literally depends on one person.

### 6. **Partner Channel is Negligible** — SEVERITY: MEDIUM
Kim Guihen: $70K pipeline, $70K won (1 deal)
Meghan Rutkowski: $536K pipeline, $146K won (4 deals)

Combined partner contribution: $216K won on $606K pipeline = 0.3% of company bookings. The page shows this but doesn't question whether the partner channel is worth the investment.

### 7. **Coaching Priorities Don't Match Data** — SEVERITY: MEDIUM
The "Coaching Priorities" section highlights Mike Campbell (38.2%), Avani Macwan (17.1%), and Marcus Dinan (17.9%). But Marcus and Avani at sub-20% are 2x worse than Mike. Why is Mike listed first?

---

## Data Validation

| Claim | Site Value | Expected (from TOOLS.md) | Status |
|-------|------------|--------------------------|--------|
| Overall Win Rate | 41.6% | 41.6% (get_win_rate_matrix) | ✅ VERIFIED |
| LTE Win Rate | 89.1% | 89.1% (Sales MCP) | ✅ VERIFIED |
| Q4 Closed Won | $6.76M | $6.76M (53 deals) | ✅ VERIFIED |
| Pipeline Aging | 77% | 77% (get_pipeline_quality) | ✅ VERIFIED |
| Avg Days Open | 387 | 387 days (Sales MCP) | ✅ VERIFIED |
| Justin Ott Pipeline | $6.9M | ~$6.9M (get_pipeline_by_owner) | ✅ VERIFIED |
| Justin Ott Win Rate | 60.9% | ~60.9% (Sales MCP) | ✅ VERIFIED |

**Note:** Data integrity is strong. The issue is interpretation, not accuracy.

---

## Recommendations

### Immediate (Week 1-2)
1. **Performance plans for Marcus Dinan and Avani Macwan** — 17% win rates require formal improvement plans with 90-day milestones, not coaching
2. **Pipeline scrub sprint** — kill opportunities >180 days with no activity. Get to true pipeline number.
3. **Justin Ott retention conversation** — salary review, equity, title — whatever keeps this person

### Short-term (Q1 2026)
4. **Root cause analysis on existing customer win rate** — why are we losing 65% of expansion opportunities?
5. **Quota recalibration** — if quotas are unrealistic, fix them. If they're fair, enforce them.
6. **CRM hygiene standards** — opportunities >90 days require mandatory stage validation

### Medium-term (Q2-Q3 2026)
7. **Succession planning** — identify and develop 2 potential replacements for Justin Ott
8. **Partner channel ROI review** — is $216K won/year worth 2 FTEs? What's the counterfactual?
9. **Sales enablement investment** — can we improve the 35.6% existing customer win rate to 50%+?

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Justin Ott departure | Medium | Critical | Immediate retention action |
| Marcus/Avani continue underperforming | High | Medium | Performance plans with exit criteria |
| Pipeline is overstated by 50% | High | High | Pipeline scrub to true number |
| Existing customer churn accelerates | Medium | High | Account management intervention |
| Coaching fails to improve win rates | Medium | Medium | Escalation path to separation |

**Overall Assessment:** The Team Capacity page is the most operationally honest section and deserves credit for surfacing uncomfortable truths. However, it frames performance failures as "coaching opportunities" when the data suggests harder decisions are required. A 17% win rate is not a coaching issue — it's a hiring mistake or role misfit. The board should demand specific performance milestones with consequences for non-achievement, not open-ended coaching commitments.
