"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal, X } from "lucide-react";
import StartupCard from "@/components/StartupCard";
import { startups } from "@/lib/mockData";

const industries = ["All", "CleanTech", "HealthTech", "AgriTech", "EdTech", "FinTech", "LogiTech"];
const stages = ["All", "Pre-Seed", "Seed", "Series A", "Series B", "Series C"];
const fundingRanges = [
  { label: "All", min: 0, max: Infinity },
  { label: "Under $500K", min: 0, max: 500000 },
  { label: "$500K – $2M", min: 500000, max: 2000000 },
  { label: "$2M – $5M", min: 2000000, max: 5000000 },
  { label: "Over $5M", min: 5000000, max: Infinity },
];

export default function MarketplacePage() {
  const [search, setSearch] = useState("");
  const [industry, setIndustry] = useState("All");
  const [stage, setStage] = useState("All");
  const [fundingRange, setFundingRange] = useState("All");
  const [showFilters, setShowFilters] = useState(false);
  const [savedIds, setSavedIds] = useState<string[]>(["1"]);

  const filtered = useMemo(() => {
    const range = fundingRanges.find((r) => r.label === fundingRange) ?? fundingRanges[0];
    return startups.filter((s) => {
      const matchSearch =
        s.name.toLowerCase().includes(search.toLowerCase()) ||
        s.description.toLowerCase().includes(search.toLowerCase()) ||
        s.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchIndustry = industry === "All" || s.industry === industry;
      const matchStage = stage === "All" || s.stage === stage;
      const matchFunding = s.fundingNeeded >= range.min && s.fundingNeeded < range.max;
      return matchSearch && matchIndustry && matchStage && matchFunding;
    });
  }, [search, industry, stage, fundingRange]);

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const clearFilters = () => {
    setSearch("");
    setIndustry("All");
    setStage("All");
    setFundingRange("All");
  };

  const hasFilters = search || industry !== "All" || stage !== "All" || fundingRange !== "All";

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-1">
            Startup Marketplace
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {filtered.length} verified startups seeking investment
          </p>

          {/* Search + filter toggle */}
          <div className="flex gap-3 mt-5">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search startups, industries, tags…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border text-sm font-medium transition-colors ${
                showFilters
                  ? "border-indigo-500 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                  : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              }`}
            >
              <SlidersHorizontal className="w-4 h-4" />
              Filters
              {hasFilters && (
                <span className="w-2 h-2 rounded-full bg-indigo-600" />
              )}
            </button>
            {hasFilters && (
              <button
                onClick={clearFilters}
                className="flex items-center gap-1.5 px-3 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-600 dark:text-gray-400 hover:text-red-500 transition-colors"
              >
                <X className="w-4 h-4" />
                Clear
              </button>
            )}
          </div>

          {/* Filter dropdowns */}
          {showFilters && (
            <div className="mt-4 flex flex-wrap gap-3">
              <select
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {industries.map((i) => (
                  <option key={i} value={i}>{i === "All" ? "All Industries" : i}</option>
                ))}
              </select>

              <select
                value={stage}
                onChange={(e) => setStage(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {stages.map((s) => (
                  <option key={s} value={s}>{s === "All" ? "All Stages" : s}</option>
                ))}
              </select>

              <select
                value={fundingRange}
                onChange={(e) => setFundingRange(e.target.value)}
                className="px-3 py-2 rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-700 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              >
                {fundingRanges.map((r) => (
                  <option key={r.label} value={r.label}>{r.label === "All" ? "All Funding Ranges" : r.label}</option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-5xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No startups found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">Try adjusting your filters or search term.</p>
            <button
              onClick={clearFilters}
              className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((startup) => (
              <StartupCard
                key={startup.id}
                startup={startup}
                saved={savedIds.includes(startup.id)}
                onToggleSave={toggleSave}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
