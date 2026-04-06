import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, TrendingUp, Users, DollarSign, ArrowLeft, CheckCircle } from "lucide-react";
import { startups } from "@/lib/mockData";

interface Props {
  params: Promise<{ id: string }>;
}

function formatCurrency(value: number) {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${(value / 1_000).toFixed(0)}K`;
  return `$${value}`;
}

export default async function StartupDetailPage({ params }: Props) {
  const { id } = await params;
  const startup = startups.find((s) => s.id === id);
  if (!startup) notFound();

  const progress = Math.min((startup.raised / startup.fundingNeeded) * 100, 100);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950">
      {/* Breadcrumb */}
      <div className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link
            href="/marketplace"
            className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Marketplace
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-900/30 flex items-center justify-center text-3xl flex-shrink-0">
                  {startup.logo}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-3 flex-wrap">
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{startup.name}</h1>
                      <div className="flex items-center gap-2 mt-1 text-sm text-gray-500 dark:text-gray-400">
                        <MapPin className="w-4 h-4" />
                        {startup.location}
                        <span className="mx-1">·</span>
                        <span className="px-2 py-0.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-xs font-medium">
                          {startup.industry}
                        </span>
                        <span className="px-2 py-0.5 rounded-full bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300 text-xs font-medium">
                          {startup.stage}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-gray-600 dark:text-gray-400">{startup.description}</p>
                </div>
              </div>
            </div>

            {/* Pitch */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-3">The Pitch</h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{startup.pitch}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {startup.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Financial Highlights */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4">
                Financial Highlights
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {startup.highlights.map((h) => (
                  <div
                    key={h.label}
                    className="p-4 rounded-xl bg-indigo-50 dark:bg-indigo-900/20 text-center"
                  >
                    <div className="text-xl font-bold text-indigo-600 dark:text-indigo-400">{h.value}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">{h.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Team */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6">
              <h2 className="font-bold text-gray-900 dark:text-white text-lg mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                The Team
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {startup.founders.map((founder) => (
                  <div
                    key={founder.name}
                    className="flex gap-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800"
                  >
                    <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                      {founder.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-white text-sm">{founder.name}</div>
                      <div className="text-xs text-indigo-600 dark:text-indigo-400 mb-1">{founder.role}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">{founder.bio}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-5">
            {/* Investment card */}
            <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-800 p-6 sticky top-20">
              <h3 className="font-bold text-gray-900 dark:text-white mb-5">Investment Details</h3>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <DollarSign className="w-4 h-4" />
                    Funding goal
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {formatCurrency(startup.fundingNeeded)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                    <TrendingUp className="w-4 h-4" />
                    Equity offered
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {startup.equityOffered}%
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Raised so far</span>
                  <span className="font-semibold text-green-600 dark:text-green-400">
                    {formatCurrency(startup.raised)}
                  </span>
                </div>

                {/* Progress bar */}
                <div>
                  <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-600 rounded-full"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {progress.toFixed(0)}% of goal reached
                  </p>
                </div>
              </div>

              <Link
                href="/auth/signup"
                className="mt-6 block w-full py-3 bg-indigo-600 text-white text-center font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Invest Now
              </Link>
              <p className="text-xs text-gray-400 dark:text-gray-500 text-center mt-2">
                Sign up or log in to invest
              </p>

              <div className="mt-5 space-y-2">
                {[
                  "Verified startup",
                  "Secure transactions",
                  "Digital agreement",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                    <CheckCircle className="w-3.5 h-3.5 text-green-500" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return startups.map((s) => ({ id: s.id }));
}
