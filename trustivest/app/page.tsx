import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Users, CheckCircle, Star, Zap, BarChart3, Globe } from "lucide-react";
import { testimonials } from "@/lib/mockData";

const features = [
  {
    icon: Shield,
    title: "Verified Startups",
    description:
      "Every startup undergoes our 5-point verification including legal, financial, and team background checks.",
  },
  {
    icon: TrendingUp,
    title: "Smart Matching",
    description:
      "Our AI-powered engine matches investors with startups aligned with their portfolio goals and risk appetite.",
  },
  {
    icon: Users,
    title: "Expert Community",
    description:
      "Connect with 10,000+ verified investors and 500+ vetted startups across 15 industries.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track portfolio performance, monitor startup milestones, and get live updates on your investments.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description:
      "Access investment opportunities across India, SEA, MENA, and emerging markets worldwide.",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "Complete your investment in as little as 48 hours with digital agreements and instant KYC.",
  },
];

const steps = [
  {
    step: "01",
    title: "Create Your Profile",
    description: "Sign up as an investor or founder in under 2 minutes. No paperwork required upfront.",
  },
  {
    step: "02",
    title: "Explore or List",
    description:
      "Investors browse curated startups with full pitch decks. Founders list with a simple guided form.",
  },
  {
    step: "03",
    title: "Connect & Negotiate",
    description:
      "Use our secure messaging and data room to conduct due diligence and agree on terms.",
  },
  {
    step: "04",
    title: "Invest & Grow",
    description:
      "Sign digital agreements, transfer funds, and track your portfolio from one dashboard.",
  },
];

const stats = [
  { value: "$240M+", label: "Capital Deployed" },
  { value: "500+", label: "Verified Startups" },
  { value: "10,000+", label: "Active Investors" },
  { value: "94%", label: "Founder Satisfaction" },
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-950 dark:via-gray-900 dark:to-indigo-950">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgb(99 102 241 / 0.3) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 text-sm font-medium mb-6">
              <Star className="w-3.5 h-3.5 fill-current" />
              Trusted by 10,000+ investors globally
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6 leading-tight">
              Invest Smart.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Build Trust.
              </span>{" "}
              Grow Together.
            </h1>

            <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
              The intelligent investment platform connecting visionary founders with
              smart capital. Discover, evaluate, and invest in tomorrow&apos;s biggest
              companies — all in one place.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/marketplace"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-600 text-white font-semibold rounded-xl hover:bg-indigo-700 transition-all duration-200 shadow-lg shadow-indigo-500/30 hover:-translate-y-0.5"
              >
                Explore Startups
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/dashboard/founder"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-semibold rounded-xl border border-gray-200 dark:border-gray-700 hover:border-indigo-300 dark:hover:border-indigo-600 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
              >
                List Business
              </Link>
            </div>

            <div className="flex items-center justify-center gap-8 mt-12 flex-wrap">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Everything you need to invest with confidence
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              TrustIvest combines powerful tools, expert curation, and AI-driven insights
              to make investing in startups smarter and safer.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-200 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/40 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-gray-900 dark:to-indigo-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              How TrustIvest works
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              From discovery to investment in four simple steps.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm"
              >
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-indigo-300 dark:bg-indigo-700 z-10" />
                )}
                <div className="text-4xl font-black text-indigo-100 dark:text-indigo-900 mb-3">
                  {step.step}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Loved by investors and founders
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              See what our community has to say.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800"
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center text-white text-xs font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-indigo-600 dark:bg-indigo-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to invest in the future?
          </h2>
          <p className="text-indigo-200 text-lg mb-8 max-w-xl mx-auto">
            Join thousands of investors already building their startup portfolios on TrustIvest.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/auth/signup"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-white text-indigo-600 font-semibold rounded-xl hover:bg-indigo-50 transition-all duration-200 shadow-md"
            >
              Create Free Account
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/marketplace"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-indigo-500 text-white font-semibold rounded-xl hover:bg-indigo-400 transition-all duration-200 border border-indigo-400"
            >
              Browse Startups
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-10 text-indigo-200 text-sm flex-wrap">
            {["No investment minimums", "Cancel anytime", "256-bit encryption"].map((item) => (
              <div key={item} className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
