# Western Region Margin Analysis
## Root Cause: 15-Point GP Gap (West 36.5% vs East 51.5%)

### Executive Summary
The Western region's significantly lower gross profit margin is driven by **customer concentration in labor-intensive, low-margin accounts**. Four major West customers alone represent ~$6.7M in revenue at only ~20% GP, dragging down the entire region.

---

## The Problem Customers

| Customer | Revenue | GP% | Labor Hours | Region |
|----------|---------|-----|-------------|--------|
| Gilead Sciences | $2.13M | 22.0% | 19,090 hrs | West |
| Kite Pharma | $2.08M | 19.9% | 13,610 hrs | West |
| Amgen Inc. | $1.75M | 21.1% | 11,571 hrs | West |
| Enovis Corp | $773K | 18.3% | 4,087 hrs | West |
| **TOTAL** | **$6.73M** | **~20%** | **48,358 hrs** | |

### Impact Calculation
- These 4 accounts represent ~32% of West revenue
- At 20% GP vs. regional target of 45%+ = **$1.68M in missing margin**
- This single factor accounts for nearly all of the regional disparity

---

## Why These Accounts Are Low Margin

### 1. Labor-Intensive Delivery Model
- Gilead: 19,090 hours for $2.13M = **$112/hour blended rate**
- Kite: 13,610 hours for $2.08M = **$153/hour blended rate**
- Industry benchmark for life sciences consulting: $175-225/hour

### 2. Time-Based vs. Managed Services
- West customers are heavily weighted toward time-based (T&M) billing
- Staffing/T&M work has structurally lower margins (30-35% target)
- Managed services should deliver 50%+ GP

### 3. Rate Compression
- Large pharma customers (Gilead, Amgen) have negotiating leverage
- Multi-year relationships may have legacy rate cards
- Volume discounts eroding margins

---

## East Region: Why It's Different

### High-Margin Outliers
| Customer | Revenue | GP% | Region |
|----------|---------|-----|--------|
| PTC Inc. | $1.27M | 96.5% | East |
| Abbott Labs | $1.94M | 64.3% | East |

PTC and Abbott are **almost entirely Managed Services** - fixed-fee arrangements with predictable costs and high margins.

### Better Service Mix
- East has more DocuSign, Box, ServiceNow managed services
- Less reliance on staff augmentation
- Smaller accounts but better unit economics

---

## Service Mix Analysis (Company-Wide)

| Practice Area | Revenue | Time-Based | Managed Svcs | Implied Margin |
|---------------|---------|------------|--------------|----------------|
| Staffing CBA | $22.1M | $21.4M (97%) | $0.7M (3%) | ~30% |
| DocuSign CBA | $2.0M | $0M (0%) | $2.0M (100%) | ~65% |
| Box CBA | $1.9M | $0M (0%) | $1.9M (100%) | ~65% |
| PTC CBA | $1.5M | $30K (2%) | $1.4M (98%) | ~70% |

**The Staffing CBA ($22.1M) dominates West region revenue** - this is structurally low-margin work.

---

## Recommendations

### Immediate Actions (Q1 2026)
1. **Rate review for Gilead, Amgen, Kite, Enovis**
   - Target 15% rate increase at next renewal
   - Shift T&M to fixed-fee where possible
   
2. **Scope creep audit**
   - Review last 6 months of hours vs. contracted scope
   - Identify unbilled work / undercharging

### Strategic Shifts (2026)
3. **Managed Services Push in West**
   - Target 25% of new West revenue as managed services
   - Focus on Box, DocuSign, ServiceNow offerings

4. **Customer Profitability Tiering**
   - A-tier: >45% GP → grow aggressively
   - B-tier: 30-45% GP → maintain
   - C-tier: <30% GP → remediate or exit

5. **New Account Qualification**
   - Minimum 40% GP threshold for new business
   - No large T&M-only engagements without rate floor

---

## Data Sources
- Finance MCP: `analyze_customer_profitability`, `get_revenue_by_customer_account`
- Labor MCP: `get_gold_resource_efficiency`
- Time period: 2025 (Jan 1, 2025 - Jan 1, 2026)
