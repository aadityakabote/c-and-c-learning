"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, TrendingUp } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { href: "/marketplace", label: "Marketplace" },
    { href: "/dashboard/investor", label: "Investors" },
    { href: "/dashboard/founder", label: "Founders" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
            <span className="text-indigo-600">Trust</span>
            <span className="text-gray-900 dark:text-white">Ivest</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Right side */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link
              href="/auth/login"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              className="px-4 py-2 text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 rounded-md text-gray-600 dark:text-gray-300"
              aria-label="Toggle menu"
            >
              {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-indigo-600 transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 border-t border-gray-200 dark:border-gray-700 flex flex-col gap-2">
            <Link
              href="/auth/login"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300"
            >
              Log in
            </Link>
            <Link
              href="/auth/signup"
              onClick={() => setOpen(false)}
              className="px-4 py-2 text-center text-sm font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
