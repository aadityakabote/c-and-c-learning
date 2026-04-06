import Link from "next/link";
import { MapPin, TrendingUp, Bookmark } from "lucide-react";
import { Startup } from "@/lib/mockData";

interface StartupCardProps {
  startup: Startup;
  saved?: boolean;
  onToggleSave?: (id: string) => void;
}

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}

const stageColors: Record<string, string> = {
  "Pre-Seed": "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  Seed: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  "Series A": "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400",
  "Series B": "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400",
  "Series C": "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400",
};

export default function StartupCard({
  startup,
  saved = false,
  onToggleSave,
}: StartupCardProps) {
  const progress = Math.min((startup.raised / startup.fundingNeeded) * 100, 100);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col overflow-hidden group">
      {/* Header */}
      <div className="p-5 flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-2xl">
            {startup.logo}
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-indigo-600 transition-colors">
              {startup.name}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-0.5">
              <MapPin className="w-3 h-3" />
              {startup.location}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span
            className={`text-xs font-medium px-2 py-1 rounded-full ${
              stageColors[startup.stage] ?? "bg-gray-100 text-gray-600"
            }`}
          >
            {startup.stage}
          </span>
          {onToggleSave && (
            <button
              onClick={() => onToggleSave(startup.id)}
              className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label={saved ? "Unsave startup" : "Save startup"}
            >
              <Bookmark
                className={`w-4 h-4 ${
                  saved
                    ? "fill-indigo-600 text-indigo-600"
                    : "text-gray-400"
                }`}
              />
            </button>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="px-5 pb-4">
        <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
          {startup.description}
        </p>
      </div>

      {/* Tags */}
      <div className="px-5 pb-4 flex flex-wrap gap-1.5">
        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 font-medium">
          {startup.industry}
        </span>
        {startup.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
          >
            #{tag}
          </span>
        ))}
      </div>

      {/* Funding progress */}
      <div className="px-5 pb-4">
        <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mb-1.5">
          <span>Raised: {formatCurrency(startup.raised)}</span>
          <span>Goal: {formatCurrency(startup.fundingNeeded)}</span>
        </div>
        <div className="h-1.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
          <div
            className="h-full bg-indigo-600 rounded-full transition-all duration-500"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
          {progress.toFixed(0)}% funded
        </p>
      </div>

      {/* Footer */}
      <div className="mt-auto border-t border-gray-100 dark:border-gray-700 px-5 py-3 flex items-center justify-between">
        <div className="flex items-center gap-1 text-sm font-semibold text-indigo-600 dark:text-indigo-400">
          <TrendingUp className="w-4 h-4" />
          {startup.equityOffered}% equity
        </div>
        <Link
          href={`/startup/${startup.id}`}
          className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
        >
          View details →
        </Link>
      </div>
    </div>
  );
}
