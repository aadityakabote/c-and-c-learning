import Link from "next/link";
import { TrendingUp, ExternalLink, AtSign, Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-6 h-6 text-indigo-500" />
              <span className="text-white font-bold text-lg">
                Trust<span className="text-indigo-500">Ivest</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-xs">
              Connecting ambitious founders with visionary investors to build
              the next generation of world-class companies.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="hover:text-white transition-colors" aria-label="Twitter/X">
                <AtSign className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="LinkedIn">
                <ExternalLink className="w-5 h-5" />
              </a>
              <a href="#" className="hover:text-white transition-colors" aria-label="GitHub">
                <Code2 className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-semibold mb-3">Platform</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link></li>
              <li><Link href="/dashboard/investor" className="hover:text-white transition-colors">Investor Dashboard</Link></li>
              <li><Link href="/dashboard/founder" className="hover:text-white transition-colors">Founder Dashboard</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 text-sm text-center">
          © {new Date().getFullYear()} TrustIvest. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
