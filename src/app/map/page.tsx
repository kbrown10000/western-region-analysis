'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useState, useMemo } from 'react';

// Import Leaflet CSS
import 'leaflet/dist/leaflet.css';

// Dynamic import for Leaflet to avoid SSR issues
const MapContainer = dynamic(
  () => import('react-leaflet').then((mod) => mod.MapContainer),
  { ssr: false }
);
const TileLayer = dynamic(
  () => import('react-leaflet').then((mod) => mod.TileLayer),
  { ssr: false }
);
const Marker = dynamic(
  () => import('react-leaflet').then((mod) => mod.Marker),
  { ssr: false }
);
const Popup = dynamic(
  () => import('react-leaflet').then((mod) => mod.Popup),
  { ssr: false }
);
const LayersControl = dynamic(
  () => import('react-leaflet').then((mod) => mod.LayersControl),
  { ssr: false }
);
const LayerGroup = dynamic(
  () => import('react-leaflet').then((mod) => mod.LayerGroup),
  { ssr: false }
);

import biotechData from '../../../data/biotech-targets.json';
import customerData from '../../../data/west-customers.json';

const priorityColors: Record<string, string> = {
  strategic: '#a855f7',
  high: '#ef4444',
  medium: '#eab308',
  watch: '#6b7280',
};

const tierColors: Record<string, string> = {
  A: '#22c55e',  // Green - good margin
  B: '#eab308',  // Yellow - okay margin
  C: '#ef4444',  // Red - problem margin
};

const regionCenters: Record<string, [number, number]> = {
  'All': [36.5, -119.5],
  'NorCal': [37.65, -122.35],
  'LA': [34.0, -118.2],
  'SanDiego': [32.88, -117.23],
  'PNW': [47.62, -122.34],
};

const regionZooms: Record<string, number> = {
  'All': 6,
  'NorCal': 10,
  'LA': 9,
  'SanDiego': 10,
  'PNW': 10,
};

const regionLabels: Record<string, string> = {
  'All': 'All Regions',
  'NorCal': 'Biotech Bay',
  'LA': 'LA BioMed',
  'SanDiego': 'Biotech Beach',
  'PNW': 'Cascadia',
};

export default function MapPage() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [showCustomers, setShowCustomers] = useState(true);
  const [showTargets, setShowTargets] = useState(true);
  const [mounted, setMounted] = useState(false);

  // Handle client-side mounting
  useState(() => {
    setMounted(true);
  });

  const filteredTargets = useMemo(() => {
    return biotechData.targets.filter(t => {
      const matchesRegion = regionFilter === 'All' || t.region === regionFilter;
      const matchesPriority = priorityFilter === 'All' || t.priority === priorityFilter;
      return matchesRegion && matchesPriority && !t.isCustomer;
    });
  }, [regionFilter, priorityFilter]);

  const filteredCustomers = useMemo(() => {
    return customerData.westCustomers.filter(c => {
      return regionFilter === 'All' || c.region === regionFilter;
    });
  }, [regionFilter]);

  const existingCustomers = customerData.westCustomers;

  const stats = useMemo(() => {
    const filtered = filteredTargets;
    return {
      total: filtered.length,
      strategic: filtered.filter(t => t.priority === 'strategic').length,
      high: filtered.filter(t => t.priority === 'high').length,
      medium: filtered.filter(t => t.priority === 'medium').length,
      watch: filtered.filter(t => t.priority === 'watch').length,
      customers: filteredCustomers.length,
      customersA: filteredCustomers.filter(c => c.tier === 'A').length,
      customersB: filteredCustomers.filter(c => c.tier === 'B').length,
      customersC: filteredCustomers.filter(c => c.tier === 'C').length,
    };
  }, [filteredTargets, filteredCustomers]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">

      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Western Region Map</h1>
            <p className="text-slate-400">55+ biotech target companies across NorCal, SoCal & PNW</p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <select 
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Regions</option>
              <option value="NorCal">NorCal (Bay Area)</option>
              <option value="SoCal">SoCal (San Diego)</option>
              <option value="PNW">PNW (Seattle)</option>
            </select>
            
            <select 
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Priorities</option>
              <option value="strategic">Strategic</option>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="watch">Watch</option>
            </select>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-3 mb-6">
          <div className="bg-slate-800/50 rounded-lg p-3 border border-slate-700 text-center">
            <p className="text-2xl font-bold text-white">{stats.total}</p>
            <p className="text-slate-400 text-xs">Total</p>
          </div>
          <div className="bg-purple-900/30 rounded-lg p-3 border border-purple-700/50 text-center">
            <p className="text-2xl font-bold text-purple-400">{stats.strategic}</p>
            <p className="text-slate-400 text-xs">Strategic</p>
          </div>
          <div className="bg-red-900/30 rounded-lg p-3 border border-red-700/50 text-center">
            <p className="text-2xl font-bold text-red-400">{stats.high}</p>
            <p className="text-slate-400 text-xs">High</p>
          </div>
          <div className="bg-yellow-900/30 rounded-lg p-3 border border-yellow-700/50 text-center">
            <p className="text-2xl font-bold text-yellow-400">{stats.medium}</p>
            <p className="text-slate-400 text-xs">Medium</p>
          </div>
          <div className="bg-slate-700/30 rounded-lg p-3 border border-slate-600/50 text-center">
            <p className="text-2xl font-bold text-slate-400">{stats.watch}</p>
            <p className="text-slate-400 text-xs">Watch</p>
          </div>
          <div className="bg-cyan-900/30 rounded-lg p-3 border border-cyan-700/50 text-center">
            <p className="text-2xl font-bold text-cyan-400">{stats.customers}</p>
            <p className="text-slate-400 text-xs">Customers</p>
          </div>
        </div>

        {/* Layer Toggles */}
        <div className="flex gap-4 mb-6">
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showTargets}
              onChange={(e) => setShowTargets(e.target.checked)}
              className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500"
            />
            <span>Show Targets</span>
          </label>
          <label className="flex items-center gap-2 text-slate-300 cursor-pointer">
            <input
              type="checkbox"
              checked={showCustomers}
              onChange={(e) => setShowCustomers(e.target.checked)}
              className="w-4 h-4 rounded border-slate-600 bg-slate-800 text-cyan-500 focus:ring-cyan-500"
            />
            <span>Show Existing Customers</span>
          </label>
        </div>

        {/* Map Container */}
        <div className="bg-slate-800/50 rounded-xl border border-slate-700 overflow-hidden" style={{ height: '600px' }}>
          {typeof window !== 'undefined' && (
            <MapContainer
              center={regionCenters[regionFilter]}
              zoom={regionZooms[regionFilter]}
              style={{ height: '100%', width: '100%' }}
              key={regionFilter}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
                url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
              />
              
              {/* Target Company Markers */}
              {showTargets && filteredTargets.map((company, idx) => (
                <Marker
                  key={`target-${idx}`}
                  position={[company.lat, company.lng]}
                  icon={createCustomIcon(priorityColors[company.priority], company.isCustomer)}
                >
                  <Popup>
                    <div className="min-w-[200px]">
                      <h3 className="font-bold text-lg">{company.name}</h3>
                      <p className="text-gray-600">{company.city}, {company.region}</p>
                      <hr className="my-2" />
                      <p><strong>Focus:</strong> {company.focus}</p>
                      <p><strong>Funding:</strong> {company.funding}</p>
                      <p><strong>Stage:</strong> {company.stage}</p>
                      <p><strong>Employees:</strong> {company.employees}</p>
                      <div className="mt-2">
                        <span 
                          className="px-2 py-1 rounded text-white text-xs"
                          style={{ backgroundColor: priorityColors[company.priority] }}
                        >
                          {company.priority.toUpperCase()}
                        </span>
                        {company.isCustomer && (
                          <span className="ml-2 px-2 py-1 rounded bg-cyan-500 text-white text-xs">
                            CUSTOMER
                          </span>
                        )}
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}

              {/* Existing Customer Markers with tier-based coloring */}
              {showCustomers && filteredCustomers.map((customer, idx) => (
                <Marker
                  key={`customer-${idx}`}
                  position={[customer.lat, customer.lng]}
                  icon={createCustomerIcon(tierColors[customer.tier])}
                >
                  <Popup>
                    <div className="min-w-[220px]">
                      <h3 className="font-bold text-lg" style={{ color: tierColors[customer.tier] }}>{customer.name}</h3>
                      <p className="text-gray-600">{customer.city} • {customer.territory}</p>
                      <hr className="my-2" />
                      <p><strong>Revenue:</strong> ${(customer.revenue / 1000000).toFixed(2)}M</p>
                      <p><strong>GP%:</strong> <span style={{ color: tierColors[customer.tier], fontWeight: 'bold' }}>{customer.gp}%</span></p>
                      <p><strong>LTV:</strong> ${(customer.ltv / 1000000).toFixed(1)}M</p>
                      <p><strong>Tenure:</strong> {customer.tenure}</p>
                      <p><strong>Services:</strong> {customer.services.join(', ')}</p>
                      <p><strong>Trend:</strong> {customer.trend}</p>
                      <div className="mt-2">
                        <span 
                          className="px-2 py-1 rounded text-white text-xs"
                          style={{ backgroundColor: tierColors[customer.tier] }}
                        >
                          TIER {customer.tier} CUSTOMER
                        </span>
                      </div>
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          )}
        </div>

        {/* Legend */}
        <div className="mt-6 bg-slate-800/50 rounded-xl p-6 border border-slate-700">
          <h3 className="text-lg font-bold text-white mb-4">Legend</h3>
          <div className="grid grid-cols-2 gap-6">
            <div>
              <p className="text-slate-400 text-sm mb-3">Target Companies</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: priorityColors.strategic }}></div>
                  <span className="text-slate-300 text-sm">Strategic</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: priorityColors.high }}></div>
                  <span className="text-slate-300 text-sm">High</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: priorityColors.medium }}></div>
                  <span className="text-slate-300 text-sm">Medium</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: priorityColors.watch }}></div>
                  <span className="text-slate-300 text-sm">Watch</span>
                </div>
              </div>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-3">Customers (by GP%)</p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full ring-2 ring-white flex items-center justify-center text-white text-xs" style={{ backgroundColor: tierColors.A }}>$</div>
                  <span className="text-slate-300 text-sm">Tier A (≥40%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full ring-2 ring-white flex items-center justify-center text-white text-xs" style={{ backgroundColor: tierColors.B }}>$</div>
                  <span className="text-slate-300 text-sm">Tier B (30-40%)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 rounded-full ring-2 ring-white flex items-center justify-center text-white text-xs" style={{ backgroundColor: tierColors.C }}>$</div>
                  <span className="text-slate-300 text-sm">Tier C (&lt;30%)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-slate-700">
            <p className="text-slate-400 text-sm">
              <span className="text-cyan-400 font-semibold">{stats.customers} West customers</span> shown: 
              <span className="text-green-400 ml-2">{stats.customersA} Tier A</span>,
              <span className="text-yellow-400 ml-2">{stats.customersB} Tier B</span>,
              <span className="text-red-400 ml-2">{stats.customersC} Tier C</span>
            </p>
          </div>
        </div>

        <div className="mt-8 flex gap-4">
          <Link href="/targets" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Full Target List →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}

// Custom icon creator function - will be initialized on client side
function createCustomIcon(color: string, isCustomer: boolean) {
  if (typeof window === 'undefined') return undefined;
  
  const L = require('leaflet');
  
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
      <circle cx="12" cy="12" r="10" fill="${color}" stroke="${isCustomer ? '#06b6d4' : '#1e293b'}" stroke-width="2"/>
      ${isCustomer ? '<circle cx="12" cy="12" r="4" fill="#06b6d4"/>' : ''}
    </svg>
  `;
  
  return L.divIcon({
    html: svgIcon,
    className: 'custom-marker',
    iconSize: [24, 24],
    iconAnchor: [12, 12],
    popupAnchor: [0, -12],
  });
}

function createCustomerIcon(tierColor: string) {
  if (typeof window === 'undefined') return undefined;
  
  const L = require('leaflet');
  
  const svgIcon = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
      <circle cx="12" cy="12" r="11" fill="${tierColor}" stroke="#ffffff" stroke-width="2"/>
      <text x="12" y="16" text-anchor="middle" fill="white" font-size="10" font-weight="bold">$</text>
    </svg>
  `;
  
  return L.divIcon({
    html: svgIcon,
    className: 'customer-marker',
    iconSize: [32, 32],
    iconAnchor: [16, 16],
    popupAnchor: [0, -16],
  });
}
