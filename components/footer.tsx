"use client"

import * as React from "react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="border-t border-[#EDE5DC] bg-[#FAF8F5] py-12 sm:py-16 text-[#64748B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 pb-8 border-b border-[#EDE5DC]/60">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <img
              src="/logo.svg"
              alt="EWÁ"
              className="h-7 sm:h-8 w-auto object-contain"
            />
          </Link>

          {/* Navigation Links */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs sm:text-sm font-medium">
            <a
              href="/#how-to-book"
              className="hover:text-[#0A1626] transition-colors"
            >
              Book a service
            </a>
            <a
              href="/#for-pros"
              className="hover:text-[#0A1626] transition-colors"
            >
              For pros
            </a>
            <Link
              href="/support"
              className="hover:text-[#0A1626] transition-colors"
            >
              Support
            </Link>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A1626] transition-colors"
            >
              Instagram
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A1626] transition-colors"
            >
              Twitter
            </a>
            <Link
              href="/terms"
              className="hover:text-[#0A1626] transition-colors"
            >
              Terms
            </Link>
            <Link
              href="/privacy"
              className="hover:text-[#0A1626] transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="/sms-opt-in"
              className="hover:text-[#0A1626] transition-colors"
            >
              SMS Disclosure
            </Link>
          </nav>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 text-center sm:text-left text-xs text-[#94A3B8]">
          <p>© 2026 Ewá. All rights reserved. Made in NYC with ♥.</p>
        </div>
      </div>
    </footer>
  )
}
