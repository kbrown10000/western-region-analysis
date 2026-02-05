'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';

interface NavItem {
  label: string;
  href?: string;
  children?: { label: string; href: string }[];
}

const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'Executive Summary', href: '/executive-summary' },
  {
    label: 'Partners',
    children: [
      { label: 'Partner Overview', href: '/partner-overview' },
      { label: 'Partner Plays', href: '/partner-plays' },
      { label: 'Technology Ecosystem', href: '/partner-ecosystem' },
      { label: 'Solutions Alignment', href: '/partner-solutions' },
      { label: 'Partner Metrics', href: '/partner-strategy' },
      { label: 'Western Partner Plan', href: '/partner-west' },
    ],
  },
  {
    label: 'Strategy',
    children: [
      { label: 'GTM Strategy', href: '/gtm-strategy' },
      { label: 'Cloud Assurance → AI', href: '/cloud-assurance-expansion' },
      { label: 'Sales Momentum', href: '/sales-momentum' },
      { label: 'Service Expansion', href: '/service-expansion' },
      { label: 'Marketing Alignment', href: '/marketing-alignment' },
    ],
  },
  {
    label: 'Markets',
    children: [
      { label: 'Regional Overview', href: '/market-analysis' },
      { label: 'Bay Area Deep Dive', href: '/bay-area-deep-dive' },
      { label: 'San Diego Deep Dive', href: '/san-diego-deep-dive' },
      { label: 'LA Deep Dive', href: '/la-deep-dive' },
      { label: 'Seattle Deep Dive', href: '/seattle-deep-dive' },
    ],
  },
  {
    label: 'Accounts',
    children: [
      { label: 'Target Companies', href: '/targets' },
      { label: 'Account Rationale', href: '/account-rationale' },
      { label: 'Action Plan', href: '/action-plan' },
      { label: 'Interactive Map', href: '/map' },
    ],
  },
  {
    label: 'Financial',
    children: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Margin Analysis', href: '/margin-analysis' },
      { label: 'Customer LTV', href: '/ltv' },
      { label: 'Churn Signals', href: '/churn-signals' },
      { label: 'Territories', href: '/territories' },
    ],
  },
  {
    label: 'Operations',
    children: [
      { label: 'Team Capacity', href: '/team-capacity' },
      { label: 'Seller Performance', href: '/seller-performance' },
    ],
  },
  {
    label: 'Analytics',
    children: [
      { label: 'Multi-Year Trends', href: '/trends' },
      { label: 'Financial Model', href: '/financial-model' },
    ],
  },
  { label: 'Appendix', href: '/appendix' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isActive = (href: string) => pathname === href;
  const isChildActive = (children: { href: string }[]) => 
    children.some(child => pathname === child.href);

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setOpenDropdown(label);
  };

  const handleMouseLeave = () => {
    // Delay closing to allow moving to dropdown
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  const handleClick = (label: string) => {
    // Toggle on click for better mobile/touch support
    setOpenDropdown(openDropdown === label ? null : label);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.nav-dropdown-container')) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <nav className="bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-white">USDM</span>
            <span className="text-sm text-slate-400">Western Region</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative nav-dropdown-container"
                onMouseEnter={() => item.children && handleMouseEnter(item.label)}
                onMouseLeave={handleMouseLeave}
              >
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleClick(item.label)}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center gap-1 ${
                      item.children && isChildActive(item.children)
                        ? 'bg-blue-600 text-white'
                        : openDropdown === item.label
                        ? 'bg-slate-800 text-white'
                        : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                    }`}
                  >
                    {item.label}
                    <svg 
                      className={`w-4 h-4 transition-transform ${openDropdown === item.label ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}

                {/* Dropdown - no gap, connected to button */}
                {item.children && openDropdown === item.label && (
                  <div 
                    className="absolute left-0 top-full w-56 bg-slate-800 rounded-b-md shadow-lg border border-slate-700 border-t-0 py-1 z-50"
                    onMouseEnter={() => handleMouseEnter(item.label)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        onClick={() => setOpenDropdown(null)}
                        className={`block px-4 py-2.5 text-sm transition-colors ${
                          isActive(child.href)
                            ? 'bg-blue-600 text-white'
                            : 'text-slate-300 hover:bg-slate-700 hover:text-white'
                        }`}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden pb-4">
            {navItems.map((item) => (
              <div key={item.label}>
                {item.href ? (
                  <Link
                    href={item.href}
                    className={`block px-3 py-2 rounded-md text-base font-medium ${
                      isActive(item.href)
                        ? 'bg-blue-600 text-white'
                        : 'text-slate-300 hover:bg-slate-800'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <div>
                    <div className="px-3 py-2 text-base font-medium text-slate-400">
                      {item.label}
                    </div>
                    <div className="pl-4">
                      {item.children?.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className={`block px-3 py-2 rounded-md text-sm ${
                            isActive(child.href)
                              ? 'bg-blue-600 text-white'
                              : 'text-slate-300 hover:bg-slate-800'
                          }`}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
