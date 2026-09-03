"use client"

import * as React from "react"
import { ArrowRight } from "lucide-react"

interface ProsSectionProps {
  onOpenProModal: () => void
}

export function ProsSection({ onOpenProModal }: ProsSectionProps) {
  return (
    <section id="for-pros" className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      <div className="bg-[#07151E] rounded-3xl p-6 sm:p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (Content) */}
          <div className="lg:col-span-7 text-left">
            <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF5C28] uppercase mb-3">
              For Beauty Professionals
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 leading-[1.15]">
              You're the talent. We bring the clients.
            </h2>
            <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed mb-8 max-w-xl">
              Ewá is your mobile storefront — clients who want home service, a calendar you fully control, and payouts you can count on.
            </p>

            {/* Bullets */}
            <div className="space-y-5 mb-8">
              {/* Bullet 1 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-xs bg-[#FF5C28] shrink-0 mt-1.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">
                    We bring you the clients
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-relaxed">
                    People in your neighborhood are looking for in-home beauty services right now. Fill gaps in your week, no marketing required.
                  </p>
                </div>
              </div>

              {/* Bullet 2 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-xs bg-[#FF5C28] shrink-0 mt-1.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">
                    Your calendar, your rules
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-relaxed">
                    Open and close availability day-to-day. You decide when you're on the clock. No minimum hours, no penalty points.
                  </p>
                </div>
              </div>

              {/* Bullet 3 */}
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-xs bg-[#FF5C28] shrink-0 mt-1.5" />
                <div>
                  <h4 className="font-semibold text-white text-xs sm:text-sm">
                    Work on-demand, scheduled, or both
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-400 mt-0.5 leading-relaxed">
                    Take immediate requests or plan weeks in advance. Earn extra when you take on-demand jobs.
                  </p>
                </div>
              </div>
            </div>

            {/* Button */}
            <button
              type="button"
              onClick={onOpenProModal}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5C28] to-[#FF7A45] hover:from-[#E64B17] hover:to-[#FF6B35] text-white text-xs sm:text-sm font-semibold tracking-tight orange-glow transition-all duration-200 active:scale-[0.98] cursor-pointer"
            >
              <span>Join as a Beauty Pro</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right Column (Stylized Mockup Card) */}
          <div className="lg:col-span-5 w-full">
            <div className="bg-[#0E202C]/90 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-sm">
              {/* Mockup Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 text-xs">
                <span className="text-gray-400 font-medium">Next week</span>
                <span className="text-white font-semibold">6 appointments</span>
              </div>

              {/* Mockup Rows */}
              <div className="divide-y divide-white/5 my-2">
                {/* Row 1 */}
                <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
                  <span className="text-gray-400 font-mono text-xs w-28">10:00 AM</span>
                  <span className="text-white font-medium flex-1 px-2 truncate">Silk Press</span>
                  <span className="text-[#34D399] font-mono font-semibold">$120</span>
                </div>

                {/* Row 2 */}
                <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
                  <span className="text-gray-400 font-mono text-xs w-28 truncate">1:00 PM - 2:30 PM</span>
                  <span className="text-white font-medium flex-1 px-2 truncate">Medium Knotless Braids</span>
                  <span className="text-[#34D399] font-mono font-semibold">$220</span>
                </div>

                {/* Row 3 */}
                <div className="flex items-center justify-between py-3 text-xs sm:text-sm">
                  <span className="text-gray-400 font-mono text-xs w-28">4:00 PM</span>
                  <span className="text-white font-medium flex-1 px-2 truncate">Fade & Beard</span>
                  <span className="text-[#34D399] font-mono font-semibold">$65</span>
                </div>
              </div>

              {/* Mockup Footer */}
              <div className="pt-3.5 mt-2 border-t border-white/10 text-center">
                <p className="text-[11px] sm:text-xs text-gray-400">
                  Clients pay via the app, you get paid instantly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

