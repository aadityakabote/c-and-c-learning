"use client";

import { useState } from "react";
import Link from "next/link";
import { Bookmark, TrendingUp, DollarSign, BarChart2, Search } from "lucide-react";
import StartupCard from "@/components/StartupCard";
import { startups, savedStartupIds } from "@/lib/mockData";

const portfolioStats = [
  { icon: DollarSign, label: "Total Invested", value: "$42,000" },
  { icon: TrendingUp, label: "Portfolio Return", value: "+18.4%" },
  { icon: BarChart2, label: "Active Investments", value: "3" },
  { icon: Bookmark, label: "Saved Startups", value: "2" },
];

export default function InvestorDashboardPage() {
  const [savedIds, setSavedIds] = useState<string[]>(savedStartupIds);
  const [tab, setTab] = useState<"browse" | "saved">("browse");
  const [search, setSearch] = useState("");

  const toggleSave = (id: string) => {
    setSavedIds((prev) =>
      prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
    );
  };

  const displayedStartups = tab === "saved"
    ? startups.filter((s) => savedIds.includes(s.id))
    : startups.filter(
        (s) =>
          s.name.toLowerCase().includes(search.toLowerCase()) ||
          s.industry.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex items-start justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Investor Dashboard
              </h1>
              <p className="text-gray-600 dark:text-gray-400 mt-1">
                Welcome back, Rahul 👋
              </p>
            </div>
            <Link
              href="/marketplace"
              className="px-4 py-2 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
            >
              Browse Marketplace
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6">
            {portfolioStats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700"
                >
                  <Icon className="w-5 h-5 text-indigo-600 dark:text-indigo-400 mb-2" />
                  <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 dark:bg-gray-800 p-1 rounded-xl w-fit mb-6">
          {(["browse", "saved"] as const).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`px-4 py-2 rounded-lg text-sm font-medium capitalize transition-colors ${
                tab === t
                  ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300"
              }`}
            >
              {t === "saved" ? `Saved (${savedIds.length})` : "Browse Startups"}
            </button>
          ))}
        </div>

        {tab === "browse" && (
          <div className="mb-5 relative max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search startups…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
        )}

        {displayedStartups.length === 0 ? (
          <div className="text-center py-16">
            <div className="text-4xl mb-3">{tab === "saved" ? "🔖" : "🔍"}</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
              {tab === "saved" ? "No saved startups" : "No results found"}
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              {tab === "saved"
                ? "Browse the marketplace and bookmark startups that interest you."
                : "Try a different search term."}
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedStartups.map((startup) => (
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
