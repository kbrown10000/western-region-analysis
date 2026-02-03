'use client';

import Link from 'next/link';
import { useState } from 'react';

const companies = [
  // Bay Area
  { name: "Genentech", region: "Bay Area", focus: "Oncology, Immunology", funding: "Roche Subsidiary", employees: "14-19K", stage: "Commercial", priority: "Strategic" },
  { name: "Amgen", region: "Bay Area", focus: "Oncology, Nephrology", funding: "Public", employees: "26K", stage: "Commercial", priority: "Strategic" },
  { name: "Denali Therapeutics", region: "Bay Area", focus: "Neurodegeneration", funding: "Public", employees: "364", stage: "Clinical", priority: "High" },
  { name: "Caribou Biosciences", region: "Bay Area", focus: "CRISPR CAR-T", funding: "Public", employees: "200+", stage: "Clinical", priority: "High" },
  { name: "Altos Labs", region: "Bay Area", focus: "Longevity/Rejuvenation", funding: "$3B", employees: "300+", stage: "Research", priority: "High" },
  { name: "Atomwise", region: "Bay Area", focus: "AI Drug Discovery", funding: "$174M", employees: "100+", stage: "Platform", priority: "Medium" },
  { name: "64x Bio", region: "Bay Area", focus: "Gene Therapy Manufacturing", funding: "Series B", employees: "50+", stage: "Growth", priority: "High" },
  { name: "89bio", region: "Bay Area", focus: "NASH/Liver Disease", funding: "Public", employees: "100+", stage: "Phase 2", priority: "Medium" },
  { name: "Calico Life Sciences", region: "Bay Area", focus: "Aging Research", funding: "Alphabet", employees: "367", stage: "Research", priority: "Medium" },
  { name: "GRAIL", region: "Bay Area", focus: "Cancer Detection", funding: "Illumina", employees: "1500", stage: "Commercial", priority: "Strategic" },
  { name: "Sutro Biopharma", region: "Bay Area", focus: "ADCs/Bispecifics", funding: "Public", employees: "150-200", stage: "Clinical", priority: "Medium" },
  { name: "3T Biosciences", region: "Bay Area", focus: "Immunotherapy", funding: "Series A", employees: "11-50", stage: "Preclinical", priority: "Watch" },
  { name: "Allogene Therapeutics", region: "Bay Area", focus: "Allogeneic CAR-T", funding: "Public", employees: "201-500", stage: "Clinical", priority: "High" },
  { name: "Akero Therapeutics", region: "Bay Area", focus: "Metabolic Diseases", funding: "Public", employees: "56", stage: "Phase 3", priority: "High" },
  { name: "Anagenex", region: "Bay Area", focus: "AI + DEL Discovery", funding: "Series A", employees: "20+", stage: "Platform", priority: "Medium" },
  { name: "Cellares", region: "Bay Area", focus: "Cell Therapy Mfg", funding: "$255M", employees: "200+", stage: "Growth", priority: "High" },
  { name: "Deep Genomics", region: "Bay Area", focus: "AI RNA Therapeutics", funding: "$180M", employees: "100+", stage: "Clinical", priority: "Medium" },
  { name: "Cofactor Genomics", region: "Bay Area", focus: "RNA Diagnostics", funding: "Series C", employees: "50+", stage: "Commercial", priority: "Medium" },
  { name: "Color Health", region: "Bay Area", focus: "Population Genomics", funding: "$278M", employees: "400+", stage: "Commercial", priority: "Medium" },
  { name: "Gritstone Oncology", region: "Bay Area", focus: "Cancer Immunotherapy", funding: "Public", employees: "51-200", stage: "Clinical", priority: "Medium" },
  
  // San Diego
  { name: "National Resilience", region: "San Diego", focus: "Biomanufacturing", funding: "$2B", employees: "2000+", stage: "Commercial", priority: "Strategic" },
  { name: "Artiva Biotherapeutics", region: "San Diego", focus: "NK Cell Therapies", funding: "Series B", employees: "100+", stage: "Clinical", priority: "High" },
  { name: "Epic Sciences", region: "San Diego", focus: "Liquid Biopsy", funding: "Series F", employees: "200+", stage: "Commercial", priority: "High" },
  { name: "RayzeBio", region: "San Diego", focus: "Radiopharmaceuticals", funding: "$358M IPO", employees: "150+", stage: "Clinical", priority: "High" },
  { name: "Element Biosciences", region: "San Diego", focus: "DNA Sequencing", funding: "Series C", employees: "200+", stage: "Commercial", priority: "High" },
  { name: "Aspen Neuroscience", region: "San Diego", focus: "Parkinson's Cell Therapy", funding: "$147.5M", employees: "80+", stage: "Clinical", priority: "High" },
  { name: "Capstan Therapeutics", region: "San Diego", focus: "In Vivo Cell Engineering", funding: "$165M", employees: "50+", stage: "Preclinical", priority: "High" },
  { name: "Poseida Therapeutics", region: "San Diego", focus: "CAR-T Gene Editing", funding: "Public", employees: "200+", stage: "Clinical", priority: "High" },
  { name: "Fate Therapeutics", region: "San Diego", focus: "iPSC Cell Therapies", funding: "Public", employees: "500+", stage: "Clinical", priority: "High" },
  { name: "Crinetics Pharmaceuticals", region: "San Diego", focus: "Rare Endocrine", funding: "Public", employees: "200+", stage: "Clinical", priority: "Medium" },
  { name: "Human Longevity", region: "San Diego", focus: "Genomics + AI Health", funding: "$300M", employees: "100+", stage: "Commercial", priority: "Medium" },
  { name: "Belharra Therapeutics", region: "San Diego", focus: "Chemoproteomic Discovery", funding: "$130M", employees: "50+", stage: "Platform", priority: "High" },
  { name: "Neurocrine Biosciences", region: "San Diego", focus: "Neurology", funding: "Public", employees: "1500+", stage: "Commercial", priority: "Strategic" },
  { name: "Inovio Pharmaceuticals", region: "San Diego", focus: "DNA Immunotherapy", funding: "Public", employees: "200+", stage: "Clinical", priority: "Medium" },
  { name: "BioDuro-Sundia", region: "San Diego", focus: "CRDMO Services", funding: "Advent Intl", employees: "3000+", stage: "Commercial", priority: "Strategic" },
  { name: "NanoCellect Biomedical", region: "San Diego", focus: "Cell Sorting", funding: "Series D", employees: "50+", stage: "Commercial", priority: "Medium" },
  { name: "Debut Biotech", region: "San Diego", focus: "Cell-free Manufacturing", funding: "Series A", employees: "30+", stage: "Growth", priority: "Watch" },
  { name: "Prometheus Biosciences", region: "San Diego", focus: "Precision Medicine IBD", funding: "Public", employees: "100+", stage: "Clinical", priority: "Medium" },
  
  // Seattle
  { name: "Adaptive Biotechnologies", region: "Seattle", focus: "Immune Medicine", funding: "$125M", employees: "800+", stage: "Commercial", priority: "Strategic" },
  { name: "Sana Biotechnology", region: "Seattle", focus: "Gene/Cell Therapy", funding: "$700M+", employees: "400+", stage: "Clinical", priority: "Strategic" },
  { name: "Tune Therapeutics", region: "Seattle", focus: "Epigenetics", funding: "$175M", employees: "100+", stage: "Phase 1", priority: "High" },
  { name: "Outpace Bio", region: "Seattle", focus: "AI-Powered CAR-T", funding: "$144M", employees: "80+", stage: "IND-Enabling", priority: "High" },
  { name: "Aurion Biotech", region: "Seattle", focus: "Corneal Cell Therapy", funding: "$120M", employees: "60+", stage: "Commercial (Japan)", priority: "High" },
  { name: "Umoja Biopharma", region: "Seattle", focus: "In Vivo CAR-T", funding: "$100M", employees: "150+", stage: "Phase 1", priority: "High" },
  { name: "A-Alpha Bio", region: "Seattle", focus: "Protein Engineering", funding: "$14.5M DOD", employees: "50+", stage: "Platform", priority: "Medium" },
  { name: "TwinStrand Biosciences", region: "Seattle", focus: "NGS/MRD Detection", funding: "$83M patent", employees: "100+", stage: "Commercial", priority: "Medium" },
  { name: "Lumen Bioscience", region: "Seattle", focus: "Oral Antibodies", funding: "$16M DOD", employees: "80+", stage: "Phase 2", priority: "Medium" },
  { name: "Sound Pharmaceuticals", region: "Seattle", focus: "Hearing Loss", funding: "$4.2M NIH", employees: "30+", stage: "Phase 3", priority: "Medium" },
  { name: "Alpine Immune Sciences", region: "Seattle", focus: "Immunotherapies", funding: "Public", employees: "200+", stage: "Clinical", priority: "High" },
  { name: "Eliem Therapeutics", region: "Seattle", focus: "Neuropsychiatry", funding: "Public", employees: "50+", stage: "Clinical", priority: "Medium" },
  { name: "ProfoundBio", region: "Seattle", focus: "ADCs", funding: "$312M", employees: "100+", stage: "Clinical", priority: "High" },
  { name: "Arzeda", region: "Seattle", focus: "Enzyme Design AI", funding: "$14.1M NSF", employees: "80+", stage: "Platform", priority: "Medium" },
  { name: "Accipiter Biosciences", region: "Seattle", focus: "AI Protein Design", funding: "$12.7M", employees: "20+", stage: "Discovery", priority: "Watch" },
];

export default function Targets() {
  const [regionFilter, setRegionFilter] = useState('All');
  const [priorityFilter, setPriorityFilter] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredCompanies = companies.filter(c => {
    const matchesRegion = regionFilter === 'All' || c.region === regionFilter;
    const matchesPriority = priorityFilter === 'All' || c.priority === priorityFilter;
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         c.focus.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesRegion && matchesPriority && matchesSearch;
  });

  const priorityColors: Record<string, string> = {
    'Strategic': 'bg-purple-500/20 text-purple-400 border-purple-500/50',
    'High': 'bg-red-500/20 text-red-400 border-red-500/50',
    'Medium': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/50',
    'Watch': 'bg-slate-500/20 text-slate-400 border-slate-500/50',
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-white font-bold text-xl">USDM Western Region</Link>
          <nav className="flex gap-6">
            <Link href="/executive-summary" className="text-slate-400 hover:text-white">Summary</Link>
            <Link href="/market-analysis" className="text-slate-400 hover:text-white">Market</Link>
            <Link href="/action-plan" className="text-slate-400 hover:text-white">Action Plan</Link>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Target Companies</h1>
            <p className="text-slate-400">{filteredCompanies.length} companies matching filters</p>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <input 
              type="text"
              placeholder="Search companies..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500"
            />
            
            <select 
              value={regionFilter}
              onChange={(e) => setRegionFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Regions</option>
              <option value="Bay Area">Bay Area</option>
              <option value="San Diego">San Diego</option>
              <option value="Seattle">Seattle</option>
            </select>
            
            <select 
              value={priorityFilter}
              onChange={(e) => setPriorityFilter(e.target.value)}
              className="px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-cyan-500"
            >
              <option value="All">All Priorities</option>
              <option value="Strategic">Strategic</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Watch">Watch</option>
            </select>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-white">{companies.length}</p>
            <p className="text-slate-400 text-sm">Total Targets</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-purple-400">{companies.filter(c => c.priority === 'Strategic').length}</p>
            <p className="text-slate-400 text-sm">Strategic</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-red-400">{companies.filter(c => c.priority === 'High').length}</p>
            <p className="text-slate-400 text-sm">High Priority</p>
          </div>
          <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700 text-center">
            <p className="text-3xl font-bold text-cyan-400">$10B+</p>
            <p className="text-slate-400 text-sm">Combined Funding</p>
          </div>
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCompanies.map((company, index) => (
            <div key={index} className="bg-slate-800/80 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{company.name}</h3>
                <span className={`text-xs px-2 py-1 rounded border ${priorityColors[company.priority]}`}>
                  {company.priority}
                </span>
              </div>
              
              <div className="space-y-2 mb-4">
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Region:</span>
                  <span className="text-slate-300 text-sm">{company.region}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Focus:</span>
                  <span className="text-cyan-400 text-sm">{company.focus}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Funding:</span>
                  <span className="text-slate-300 text-sm">{company.funding}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Stage:</span>
                  <span className="text-slate-300 text-sm">{company.stage}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-500 text-sm w-20">Size:</span>
                  <span className="text-slate-300 text-sm">{company.employees} employees</span>
                </div>
              </div>
              
              <div className="flex gap-2">
                <span className="text-xs px-2 py-1 bg-slate-700 text-slate-300 rounded">{company.region}</span>
                <span className="text-xs px-2 py-1 bg-cyan-900/50 text-cyan-400 rounded">{company.stage}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex gap-4">
          <Link href="/action-plan" className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-semibold rounded-lg transition-all">
            View Action Plan →
          </Link>
          <Link href="/" className="px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white font-semibold rounded-lg transition-all">
            ← Back to Overview
          </Link>
        </div>
      </main>
    </div>
  );
}
