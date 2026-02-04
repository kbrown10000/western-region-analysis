'use client';

import React from 'react';

interface DataSourceProps {
  source: 'sales' | 'labor' | 'finance' | 'multiple';
  tool?: string;
  filters?: string[];
  asOf?: string;
  className?: string;
}

const sourceLabels = {
  sales: 'Sales MCP',
  labor: 'Labor MCP', 
  finance: 'Finance MCP',
  multiple: 'Multiple MCPs'
};

const sourceColors = {
  sales: 'text-blue-400',
  labor: 'text-green-400',
  finance: 'text-purple-400',
  multiple: 'text-amber-400'
};

export function DataSource({ source, tool, filters, asOf, className = '' }: DataSourceProps) {
  return (
    <div className={`text-xs text-gray-500 mt-2 pt-2 border-t border-gray-700/50 ${className}`}>
      <span className="font-medium">Source:</span>{' '}
      <span className={sourceColors[source]}>{sourceLabels[source]}</span>
      {tool && (
        <>
          {' → '}
          <code className="bg-gray-800 px-1 py-0.5 rounded text-gray-400">{tool}</code>
        </>
      )}
      {filters && filters.length > 0 && (
        <>
          {' | '}
          <span className="text-gray-400">Filters: {filters.join(', ')}</span>
        </>
      )}
      {asOf && (
        <>
          {' | '}
          <span className="text-gray-400">As of {asOf}</span>
        </>
      )}
    </div>
  );
}

// Compact inline version for cards
export function DataSourceInline({ source, tool }: { source: DataSourceProps['source']; tool?: string }) {
  return (
    <span className="text-[10px] text-gray-500">
      via <span className={sourceColors[source]}>{sourceLabels[source]}</span>
      {tool && <> → <code className="text-gray-500">{tool}</code></>}
    </span>
  );
}
