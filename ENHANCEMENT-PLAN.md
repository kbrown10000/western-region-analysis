# Western Region Growth Strategy - Enhancement Plan
**Generated**: February 3, 2026  
**Data Sources**: Sales MCP, Labor MCP, Finance MCP (live)

---

## 🎯 Executive Summary

USDM has a **$47.9M customer base** across 375 accounts, with **10 Western Region biotech targets already customers**. The opportunity is to:
1. **Expand existing relationships** (Kyverna 175% growth, Caribou 59% growth)
2. **Win back churned accounts** (Atomwise, Ultragenyx)
3. **Land new logos** in cell therapy & AI drug discovery

---

## 📊 Live MCP Data Summary

### From Finance MCP (port 3003)
| Metric | Value |
|--------|-------|
| Total Customer LTV | **$47.9M** |
| Total Accounts | 375 |
| Average GP% | 55.8% |
| AR Total | $4.7M |
| AR Current (healthy) | 95.2% |
| High-Risk AR Customers | 16 |

### From Labor MCP (port 3002)
| Metric | Value |
|--------|-------|
| Delivery Resources | **680** |
| Avg Utilization | 83.3% |
| Overloaded Resources | 39 (118% avg capacity) |
| Optimal | 11 |
| Underutilized | 0 |

### From Sales MCP (port 3001)
| Metric | Value |
|--------|-------|
| At-Risk Opportunities | **52** |
| SameDayFlip flags | 40 |
| Regression flags | 8 |
| ResurrectedFromLost | 4 |

---

## 🔥 KEY DISCOVERY: Western Targets Already Customers!

From cross-referencing our 68 targets with LTV data:

### Expansion Opportunities (Growing Customers)
| Company | LTV | YoY Growth | GP% | Status | Action |
|---------|-----|------------|-----|--------|--------|
| **Kyverna Therapeutics** | $23.0K | **+175.6%** | 99.6% | 🚀 Hot | Expand CAR-T services |
| **Caribou Biosciences** | $35.0K | **+59.3%** | 72.5% | 🚀 Growing | Add CRISPR manufacturing |
| **Protagonist Therapeutics** | $20.9K | +32.4% | 93.0% | ✅ Healthy | Cross-sell AI governance |
| **Neumora Therapeutics** | $51.6K | +26.2% | 95.9% | ✅ Healthy | Expand neuro services |

### At-Risk / Churned (Need Attention)
| Company | LTV | YoY Growth | GP% | Status | Action |
|---------|-----|------------|-----|--------|--------|
| **Maze Therapeutics** | $49.5K | **-62.2%** | 78.3% | ⚠️ Declining | Win-back campaign |
| **VIR Biotechnology** | $34.1K | **-61.9%** | 95.7% | ⚠️ Declining | QBR intervention |
| **Atomwise/Numerion** | $15.0K | -100% | 81.3% | 🔴 Churned | Re-engage (rebranded) |
| **Ultragenyx** | $11.7K | -100% | 100% | 🔴 Churned | Win-back campaign |
| **Guardant Health** | $8.2K | N/A | 93.5% | 🟡 Dormant | Reactive outreach |
| **National Resilience** | $6.7K | N/A | 100% | 🟡 Small | Massive expansion opp! |

---

## 📍 Regional Breakdown

### Biotech Bay (NorCal) - 23 Targets
**Existing Customers**: Kyverna, Caribou, Numerion (ex-Atomwise), Maze, VIR, Neumora, Ultragenyx, Guardant  
**Hot New Logos**: Cellares ($257M Series D), Insitro ($400M+), Freenome (IPO), 64x Bio  
**Focus**: Cell therapy manufacturing, AI drug discovery, multi-cancer detection

### Biotech Beach (San Diego) - 19 Targets
**Existing Customers**: Gilead ($2.13M, 22% GP), Neurocrine ($890K, 48% GP), Enovis ($773K, 18% GP)  
**Hot New Logos**: National Resilience ($825M funding!), Element Bio, Fate Therapeutics  
**Focus**: CDMO services, radiopharmaceuticals, sequencing platforms  
**⚠️ MARGIN ISSUE**: Gilead, Enovis at ~20% GP (should be 50%+)

### LA/SoCal - 7 Targets
**Existing Customers**: Amgen ($1.75M, 21% GP), Kite ($2.08M, 20% GP)  
**Hot New Logos**: ImmunityBio, NantHealth, Fulgent Genetics  
**⚠️ MARGIN ISSUE**: Amgen, Kite at ~20% GP

### Cascadia Corridor (PNW/Seattle) - 15 Targets
**Existing Customers**: None identified  
**Hot New Logos**: Tune Therapeutics ($175M), Sana Biotechnology, Adaptive Bio, Umoja  
**🚨 GAP**: $0 revenue from Seattle market!

---

## 🏗️ Site Enhancement Plan

### Page: `/executive-summary` 
**Current**: Static performance metrics  
**Enhancement**: 
- [ ] Add live "Pulse" section with MCP data
- [ ] AR health widget (95.2% current)
- [ ] Team capacity alert (118% - overloaded!)
- [ ] Churn signals count (52 at-risk)

### Page: `/team-capacity`
**Current**: Placeholder hiring roadmap  
**Enhancement**:
- [ ] Pull real utilization from `get_gold_department_metrics`
- [ ] Show capacity forecast (39 overloaded!)
- [ ] Regional delivery team breakdown
- [ ] Hiring needs calculator based on capacity

### Page: `/churn-signals` (NEW)
**Current**: Doesn't use live data  
**Enhancement**:
- [ ] Pull real signals from `get_churn_signals`
- [ ] 52 at-risk deals with flag types
- [ ] Filter by Western region accounts
- [ ] Drill-down to specific opportunities

### Page: `/ltv` (NEW)
**Current**: Basic concept  
**Enhancement**:
- [ ] Pull from `get_customer_ltv`
- [ ] $47.9M total LTV visualization
- [ ] Western targets cross-reference
- [ ] Growth vs declining accounts
- [ ] Expand/win-back recommendations

### Page: `/margin-analysis`
**Current**: Static data  
**Enhancement**:
- [ ] Highlight problem accounts (Gilead, Amgen, Kite at ~20% GP)
- [ ] Regional GP comparison (West 36.5% vs East 51.5%)
- [ ] Managed services upsell opportunities
- [ ] PTC case study (96.5% GP from managed services)

### Page: `/targets`
**Current**: 68 targets, basic info  
**Enhancement**:
- [ ] Add "Already Customer" badge for 10 accounts
- [ ] Show LTV/growth data for existing customers
- [ ] "Expansion Opportunity" vs "New Logo" segmentation
- [ ] Acquisition tracking (Capstan, Poseida removed)

### Page: `/seattle-deep-dive`
**Current**: Market overview  
**Enhancement**:
- [ ] Emphasize $0 USDM presence
- [ ] Tune Therapeutics deep-dive (new CEO from Gilead)
- [ ] Sana litigation warning
- [ ] First-mover advantage in cell therapy hub

### Page: `/dashboard` (NEW)
**Create**: Real-time MCP dashboard  
- [ ] Live AR aging donut chart
- [ ] Capacity gauge (83% util → 118% overload)
- [ ] Churn signal trends
- [ ] Western vs Eastern comparison
- [ ] Auto-refresh every 5 minutes

---

## 🎯 Strategic Priorities (Data-Driven)

### 1. Expand Kyverna (175% growth!)
- Current: $23K LTV, 99.6% GP
- Opportunity: Autoimmune CAR-T manufacturing scale-up
- Action: Executive QBR, propose multi-year deal

### 2. Win Back Maze & VIR (-62% decline)
- Combined lost revenue: ~$25K annually
- Root cause analysis needed
- Action: Executive outreach, new services pitch

### 3. Land National Resilience
- Current: $6.7K (tiny engagement)
- Company: $825M funding, 2000+ employees, CDMO leader
- Opportunity: Multi-million dollar potential
- Action: C-suite introduction, facility tour

### 4. Fix Margin Bleed (Gilead, Amgen, Kite)
- Combined revenue: $6M at ~20% GP
- Target: 50%+ GP through managed services
- Lost margin: ~$1.8M annually
- Action: Managed services conversion proposals

### 5. Enter Seattle Market
- Current: $0 revenue
- Targets: 15 companies, $2B+ in funding
- Action: Hire PNW account exec, Tune Therapeutics focus

---

## 📈 Success Metrics for 2026

| Metric | Current | Target | Source |
|--------|---------|--------|--------|
| Western Win Rate | 35.6% | 42% | Sales MCP |
| Average GP% (West) | 36.5% | 45% | Finance MCP |
| Delivery Utilization | 83% | 78% | Labor MCP |
| At-Risk Opportunities | 52 | <30 | Sales MCP |
| Seattle Revenue | $0 | $500K | New |
| Kyverna LTV | $23K | $100K | Finance MCP |
| Churned Win-Back | 0 | 3 accounts | Finance MCP |

---

## 🔧 Technical Implementation

### API Integration (Priority)
```typescript
// pages/api/mcp/[domain].ts
export async function getMCPData(domain: 'sales' | 'labor' | 'finance', tool: string) {
  const port = { sales: 3001, labor: 3002, finance: 3003 }[domain];
  const response = await fetch(`http://localhost:${port}/api/mcp/${domain}/execute`, {
    method: 'POST',
    body: JSON.stringify({
      jsonrpc: '2.0',
      method: 'tools/call',
      params: { name: tool, arguments: {} },
      id: 1
    })
  });
  return response.json();
}
```

### Data Refresh Strategy
- Finance data: Cache 1 hour (stable)
- Labor data: Cache 15 min (utilization changes)
- Sales churn: Real-time (urgent alerts)

### Fallback for Bridge Crashes
- Bridges timeout after ~5 min idle
- Implement health check ping
- Cache last-known-good data
- Show "Data as of X" timestamp

---

## Next Steps

1. **Immediate**: Update target list with "Already Customer" flags
2. **This Week**: Build `/dashboard` with live MCP widgets
3. **This Week**: Create Kyverna expansion proposal
4. **Next Week**: Maze/VIR win-back campaign
5. **Q1 2026**: Seattle market entry plan

---
*Generated by Magentic from live MCP data*
