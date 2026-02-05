# Critique Task for Codex

You are a critical business strategist reviewing the USDM Western Region Growth Strategy site.

## YOUR TASK
Critique this entire site rigorously. Challenge assumptions, identify gaps, and suggest improvements. Be constructively harsh - this is for the executive team.

## MCP DATA ACCESS
You have access to real data via HTTP POST to MCP servers. Use curl to query them:

### SALES MCP (port 3001)
```bash
curl -s -X POST http://localhost:3001/api/mcp/sales/execute \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_team_performance","arguments":{"time_period":"Q4 2025"}},"id":1}'
```

Working Sales tools:
- get_team_performance (time_period)
- get_win_rate_matrix (time_period) 
- get_pipeline_by_owner (time_period)
- get_closed_won_summary (time_period)
- get_churn_signals
- get_pipeline_quality

### LABOR MCP (port 3002)
```bash
curl -s -X POST http://localhost:3002/api/mcp/labor/execute \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_solutions_team_roster","arguments":{}},"id":1}'
```

Working Labor tools:
- get_gold_department_metrics
- get_gold_utilization_summary  
- get_solutions_team_roster

### FINANCE MCP (port 3003)
```bash
curl -s -X POST http://localhost:3003/api/mcp/finance/execute \
  -H 'Content-Type: application/json' \
  -d '{"jsonrpc":"2.0","method":"tools/call","params":{"name":"get_customer_ltv","arguments":{}},"id":1}'
```

Working Finance tools:
- get_customer_ltv
- get_ar_aging
- analyze_customer_profitability

## PROCESS
1. Read key pages in src/app/ (executive-summary, partner-overview, territories, gtm-strategy, team-capacity, financial-model, margin-analysis)
2. Query MCPs to get real data
3. Compare site claims to MCP data
4. Write critique markdown files

## OUTPUT
Create these files in the project root:
1. critique-executive-summary.md
2. critique-partner-strategy.md  
3. critique-territories.md
4. critique-gtm-strategy.md
5. critique-financial-model.md
6. critique-team-capacity.md

Each file format:
```markdown
# Critique: [Section Name]

## Executive Summary
2-3 sentences on the overall assessment.

## What's Strong
- Point 1
- Point 2

## Critical Gaps
1. **[HIGH]** Gap description
2. **[MEDIUM]** Gap description  
3. **[LOW]** Gap description

## Data Validation
Compare specific claims from the site to MCP query results.

## Recommendations
1. Priority recommendation
2. Second priority

## Risk Assessment
What could go wrong with this strategy?
```

## WHEN DONE
After creating all critique files, run:
```bash
openclaw gateway wake --text "Codex critique complete" --mode now
```
