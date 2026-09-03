"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const scrollToWaitlist = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsMenuOpen(false)
    const target = document.getElementById("hero-waitlist") || document.getElementById("waitlist")
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "center" })
      const input = target.querySelector("input")
      if (input) input.focus()
    } else {
      window.location.href = "/#waitlist"
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FAF8F5]/90 backdrop-blur-md border-b border-[#EDE5DC]/80 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <img
              src="/logo.svg"
              alt="EWÁ"
              className="h-8 sm:h-9 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/#how-to-book"
              className="text-xs sm:text-sm font-medium text-[#475569] hover:text-[#0A1626] transition-colors"
            >
              Book a service
            </a>
            <a
              href="/#for-pros"
              className="text-xs sm:text-sm font-medium text-[#475569] hover:text-[#0A1626] transition-colors"
            >
              For pros
            </a>
            <button
              type="button"
              onClick={scrollToWaitlist}
              className="px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF5C28] to-[#FF7A45] hover:from-[#E64B17] hover:to-[#FF6B35] text-white text-xs sm:text-sm font-semibold tracking-tight orange-glow transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              Get on the list
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="md:hidden p-2 text-[#0A1626] hover:text-[#FF5C28] transition-colors cursor-pointer"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-[#EDE5DC] animate-in fade-in slide-in-from-top-2 duration-200">
            <div className="flex flex-col gap-3.5 pt-1 pb-3">
              <a
                href="/#how-to-book"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                Book a service
              </a>
              <a
                href="/#for-pros"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                For pros
              </a>
              <Link
                href="/support"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                Support
              </Link>
              <Link
                href="/terms"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                Terms of Use
              </Link>
              <Link
                href="/privacy"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/sms-opt-in"
                onClick={() => setIsMenuOpen(false)}
                className="text-sm font-medium text-[#334155] hover:text-[#FF5C28] px-1 transition-colors"
              >
                SMS Opt-In
              </Link>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={scrollToWaitlist}
                  className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF5C28] to-[#FF7A45] text-white text-sm font-semibold tracking-tight orange-glow transition-all"
                >
                  Get on the list
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
