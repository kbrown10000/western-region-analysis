# Critique: Financial Model

**Review Date:** February 4, 2026  
**Reviewer:** Strategy Review Board  
**Page:** `/financial-model`

---

## Executive Summary

The Financial Model page is the strongest analytical tool in the presentation, with well-designed interactive sliders and clear value-flow visualization. However, the model's assumptions are optimistic, the baseline data has discrepancies with other pages, and the "Target" scenario requires simultaneous improvement across 6+ variables — a level of execution precision that conflicts with current organizational performance.

---

## What's Strong

- **Interactive scenario modeling** allows board to stress-test assumptions
- **Labor → Bookings → GP → Revenue flow** correctly represents value chain
- **Hire ROI calculator** is a useful tool for investment decisions
- **Problem account identification** (Gilead, Kite, Amgen, Enovis at 18-22% GP)
- **Three-scenario structure** (Conservative, Target, Aggressive) provides range
- **Formula reference section** increases transparency

---

## Critical Gaps

### 1. **Baseline Revenue Doesn't Match Other Pages** — SEVERITY: HIGH
| Source | 2025 West Revenue |
|--------|-------------------|
| Financial Model "baseline2025" | $17.19M |
| Homepage Metric Card | $17.19M |
| Territories Sum | $16.40M |
| Executive Summary (company) | $49.68M |

The $790K discrepancy between homepage and territories needs reconciliation. Which is correct?

### 2. **Target Scenario Requires 6 Simultaneous Improvements** — SEVERITY: HIGH
The "Target" scenario assumes:
- Utilization: 83.3% → 88% (+5 pts)
- New Hires: +10 FTEs
- Win Rate: +5 pts (35.6% → 40.6%)
- Expansion Rate: 15%
- New Logos: 15 accounts
- GP Margin: +5 pts (36% → 41%)

Achieving ALL of these simultaneously while also fixing:
- Mike Campbell's performance
- 4 problem account margins
- Biotech Bay vacancy
- Cascadia zero-pipeline situation

...is unrealistic. The model doesn't account for execution risk.

### 3. **Win Rate Improvement Has No Plan** — SEVERITY: HIGH
The slider allows +5 pts win rate gain, but the model doesn't explain how. Win rate improved is not a dial you turn — it requires:
- Root cause analysis (not done)
- Competitive positioning work (not planned)
- Sales training (not budgeted)
- Deal qualification improvements (no metrics)

### 4. **"$180K Fully Loaded Cost" May Be Low** — SEVERITY: MEDIUM
The hire ROI uses $180K fully loaded cost per FTE. In Bay Area/San Diego biotech consulting:
- Base salary: $120-150K
- Benefits (25%): $30-37K
- Equipment/overhead: $10-15K
- Recruiting cost (amortized): $10-20K

Realistic fully loaded cost is likely $170-220K. The model may overstate hire ROI.

### 5. **Pipeline Coverage Ratio Requirement Not Highlighted** — SEVERITY: MEDIUM
Current coverage is 0.82x (shown on homepage). Model shows "Coverage Ratio" output but doesn't flag that below 2.5x is unhealthy. At target bookings of $21.7M with 46.6% win rate, required pipeline is $46.6M — current pipeline is $14.05M.

**Where does $32.5M of new pipeline come from?**

### 6. **No Sensitivity Analysis on GP Margin** — SEVERITY: MEDIUM
The model assumes GP margin can improve 5 pts through T&M → MS conversion. But:
- LA's 4 problem accounts are $6.7M at ~20% GP
- Converting them to managed services assumes they'll accept 65%+ pricing
- What if they refuse and churn?

The model doesn't show the downside scenario where margin improvement fails and accounts leave.

### 7. **Labor Capacity Calculation Assumes 100% Sell-Through** — SEVERITY: LOW
The formula `FTEs × 2,080 hrs × Utilization%` assumes all capacity converts to billable work. Reality includes:
- Non-billable time (admin, training)
- Bench time between projects
- Utilization target vs. actual achievement

---

## Data Validation

| Claim | Site Value | Expected (from TOOLS.md) | Status |
|-------|------------|--------------------------|--------|
| Delivery Resources | 680 | ~680 (Labor MCP gold_department_metrics) | ✅ VERIFIED |
| Delivery Utilization | 83.3% | ~83% (Labor MCP) | ✅ VERIFIED |
| Total Pipeline | $54.8M | $54.8M (Sales MCP company-wide) | ✅ VERIFIED |
| Win Rate | 41.6% | 41.6% (Sales MCP company-wide) | ✅ VERIFIED |
| West Revenue | $17.19M | $17.19M (stated, territories don't match) | ⚠️ DISCREPANCY |
| West GP | $6.19M | $5.90M on homepage (34.3%) | ⚠️ MINOR MISMATCH |

---

## Recommendations

### Immediate (Week 1-2)
1. **Reconcile revenue figures** — territories sum vs homepage vs financial model
2. **Add execution risk discount** — target scenario should show 70% probability-weighted outcome
3. **Validate fully loaded cost** — $180K may be low for Bay Area talent

### Short-term (Q1 2026)
4. **Model pipeline generation required** — if target needs $46M pipeline and we have $14M, that's a $32M gap
5. **Create margin improvement sensitivity analysis** — what if problem accounts churn instead of convert?
6. **Add milestone checkpoints** — quarterly actuals vs model to course-correct

### Medium-term (Q2-Q3 2026)
7. **Probabilistic scenario modeling** — Monte Carlo simulation would be more honest than point estimates
8. **Constraint analysis** — which variable is the binding constraint? (Probably sales capacity)
9. **Downside scenario** — show what happens if win rate stays flat and margin improvement fails

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Revenue baseline is wrong | Medium | Medium | Reconcile before board presentation |
| Target scenario is overoptimistic | High | High | Add probability weighting |
| Pipeline gap not addressed | High | Critical | Explicit pipeline generation plan |
| Problem accounts churn vs convert | Medium | High | Model both scenarios |
| Hire ROI overstated | Medium | Medium | Update cost assumptions |

**Overall Assessment:** The Financial Model is the most sophisticated tool in the presentation but suffers from optimism bias. The "Target" scenario requires winning on 6 fronts simultaneously with no margin for error. The board should demand a probability-weighted forecast (e.g., 30% Conservative, 50% Target, 20% Aggressive blend) and explicit pipeline generation plan to close the $32M gap between current pipeline and target requirements.
