"use client"

import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeApp, setActiveApp] = useState<"ewa-app" | "ewa-biz" | null>(null)

  // Handle route to know which app is active
  useEffect(() => {
    const path = window.location.hash
    if (path.includes("#ewa-app")) {
      setActiveApp("ewa-app")
    } else if (path.includes("#ewa-biz")) {
      setActiveApp("ewa-biz")
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-20 md:h-20 gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/images/nav-logo.png"
              alt="EWA Logo"
              className="h-15 w-auto md:h-15"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 mr-auto">
            <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Home
            </Link>
            <Link href="/support" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Support
            </Link>
            <Link href="/terms" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Terms of Use
            </Link>
            <Link href="/privacy" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
              Privacy Policy
            </Link>
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Link href="/#ewa-app">
              <Button
                variant={activeApp === "ewa-app" ? "default" : "outline"}
                className={`rounded-full border-[#1E2A3A] text-[#1E2A3A] bg-transparent ${activeApp === "ewa-app" ? "bg-[#1E2A3A] text-white" : ""}`}
                onClick={() => {
                  setActiveApp("ewa-app")
                  setIsMenuOpen(false)
                }}
              >
                Order a barber
              </Button>
            </Link>
            <Link href="/#ewa-biz">
              <Button
                variant={activeApp === "ewa-biz" ? "default" : "outline"}
                className={`rounded-full border-[#1E2A3A] text-[#1E2A3A] bg-transparent ${activeApp === "ewa-biz" ? "bg-[#1E2A3A] text-white" : ""}`}
                onClick={() => {
                  setActiveApp("ewa-biz")
                  setIsMenuOpen(false)
                }}
              >
                Become a barber
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2 text-gray-700 ml-auto">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Home
              </Link>
              <Link href="/support" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Support
              </Link>
              <Link href="/terms" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Terms of Use
              </Link>
              <Link href="/privacy" className="text-gray-700 hover:text-gray-900 text-sm font-medium">
                Privacy Policy
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Link href="/#ewa-app">
                  <Button
                    variant={activeApp === "ewa-app" ? "default" : "outline"}
                    className={`rounded-full border-[#1E2A3A] text-[#1E2A3A] bg-transparent ${activeApp === "ewa-app" ? "bg-[#1E2A3A] text-white" : ""}`}
                    onClick={() => {
                      setActiveApp("ewa-app")
                      setIsMenuOpen(false)
                    }}
                  >
                    Order a barber
                  </Button>
                </Link>
                <Link href="/#ewa-biz">
                  <Button
                    variant={activeApp === "ewa-biz" ? "default" : "outline"}
                    className={`rounded-full border-[#1E2A3A] text-[#1E2A3A] bg-transparent ${activeApp === "ewa-biz" ? "bg-[#1E2A3A] text-white" : ""}`}
                    onClick={() => {
                      setActiveApp("ewa-biz")
                      setIsMenuOpen(false)
                    }}
                  >
                    Become a barber
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
