"use client";

import { useState } from "react";
import Link from "next/link";
import { TrendingUp, Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from "lucide-react";

export default function SignupPage() {
  const [form, setForm] = useState({ name: "", email: "", password: "", role: "investor" });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    if (form.name && form.email && form.password.length >= 6) {
      setSuccess(true);
    } else {
      setError("Please fill all fields. Password must be at least 6 characters.");
    }
    setLoading(false);
  };

  const passwordStrength = form.password.length === 0 ? 0
    : form.password.length < 6 ? 1
    : form.password.length < 10 ? 2
    : 3;
  const strengthLabels = ["", "Weak", "Fair", "Strong"];
  const strengthColors = ["", "bg-red-400", "bg-yellow-400", "bg-green-500"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center gap-2 font-bold text-xl">
            <TrendingUp className="w-7 h-7 text-indigo-600" />
            <span className="text-indigo-600">Trust</span>
            <span className="text-gray-900 dark:text-white">Ivest</span>
          </Link>
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mt-4 mb-1">
            Create your account
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Join 10,000+ investors and founders
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-800 p-6 sm:p-8">
          {/* Firebase note */}
          <div className="flex items-start gap-2 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-3 mb-6 text-xs text-blue-700 dark:text-blue-300">
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <span>
              Demo mode — Firebase Auth is not configured. Add credentials to{" "}
              <code className="font-mono bg-blue-100 dark:bg-blue-900/40 px-1 rounded">.env.local</code>{" "}
              to enable real auth. See <code>.env.example</code>.
            </span>
          </div>

          {success ? (
            <div className="text-center py-6">
              <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">
                Account created! (Mock)
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Welcome to TrustIvest, {form.name}!
              </p>
              <Link
                href={form.role === "investor" ? "/dashboard/investor" : "/dashboard/founder"}
                className="px-5 py-2.5 bg-indigo-600 text-white text-sm font-semibold rounded-xl hover:bg-indigo-700 transition-colors"
              >
                Go to {form.role === "investor" ? "Investor" : "Founder"} Dashboard
              </Link>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="flex items-center gap-2 p-3 bg-red-50 dark:bg-red-900/20 text-red-600 dark:text-red-400 rounded-xl text-sm">
                  <AlertCircle className="w-4 h-4 flex-shrink-0" />
                  {error}
                </div>
              )}

              {/* Role selector */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  I want to join as
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {(["investor", "founder"] as const).map((role) => (
                    <button
                      key={role}
                      type="button"
                      onClick={() => setForm({ ...form, role })}
                      className={`py-2.5 rounded-xl border text-sm font-medium capitalize transition-colors ${
                        form.role === role
                          ? "border-indigo-600 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400"
                          : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                      }`}
                    >
                      {role === "investor" ? "💼 Investor" : "🚀 Founder"}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Your full name"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full pl-9 pr-4 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    value={form.password}
                    onChange={(e) => setForm({ ...form, password: e.target.value })}
                    placeholder="Min. 6 characters"
                    className="w-full pl-9 pr-10 py-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {form.password && (
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3].map((i) => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          i <= passwordStrength ? strengthColors[passwordStrength] : "bg-gray-200 dark:bg-gray-700"
                        }`}
                      />
                    ))}
                    <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">
                      {strengthLabels[passwordStrength]}
                    </span>
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 disabled:opacity-70 disabled:cursor-not-allowed transition-colors"
              >
                {loading ? "Creating account…" : "Create free account"}
              </button>

              <p className="text-xs text-gray-500 dark:text-gray-400 text-center">
                By signing up, you agree to our{" "}
                <a href="#" className="text-indigo-600 hover:underline">Terms</a> and{" "}
                <a href="#" className="text-indigo-600 hover:underline">Privacy Policy</a>.
              </p>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-6">
          Already have an account?{" "}
          <Link href="/auth/login" className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline">
            Log in
          </Link>
        </p>
      </div>
    </div>
  );
}
