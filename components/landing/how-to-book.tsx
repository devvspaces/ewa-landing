"use client"

import * as React from "react"
import { MapPin, Clock, ShieldCheck, Calendar, Heart, Bell } from "lucide-react"

export function HowToBook() {
  const [activeTab, setActiveTab] = React.useState<"on-demand" | "scheduled">("on-demand")

  return (
    <section id="how-to-book" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10 sm:mb-12">
        <p className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF5C28] uppercase mb-3">
          How To Book
        </p>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#0A1626] mb-4">
          Two ways to book.
        </h2>
        <p className="text-sm sm:text-base text-[#556070] max-w-lg mx-auto">
          Need it today or planning for next week? Ewá works either way.
        </p>
      </div>

      {/* Interactive Card Container */}
      <div className="bg-[#F6EFEB] border border-[#E9E1D8] rounded-3xl p-6 sm:p-10 shadow-sm transition-all duration-300">
        {/* Segmented Control */}
        <div className="flex items-center justify-center mb-8">
          <div className="inline-flex p-1 rounded-full bg-[#E8DFD5]/70 border border-[#DCD1C5]">
            <button
              type="button"
              onClick={() => setActiveTab("on-demand")}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "on-demand"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              On demand
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("scheduled")}
              className={`px-6 sm:px-8 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "scheduled"
                  ? "bg-[#0F172A] text-white shadow-sm"
                  : "text-[#64748B] hover:text-[#0F172A]"
              }`}
            >
              Scheduled
            </button>
          </div>
        </div>

        {/* Tab Content */}
        {activeTab === "on-demand" ? (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-left mb-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1626] mb-1.5">
                Need it today? Book now.
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Request a pro on-demand and get matched with available vetted beauty pros right in your area.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {/* Feature 1 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <MapPin className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Real-time tracking
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Follow your pro from the moment they are on the road.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Arrival within 2 hours
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Average arrival time is 45 minutes across NYC boroughs.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Pre-vetted professionals
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Every pro is background checked and skill verified before taking clients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-6 animate-in fade-in duration-300">
            <div className="text-left mb-6">
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#0A1626] mb-1.5">
                Planning ahead? Schedule in advance.
              </h3>
              <p className="text-xs sm:text-sm text-[#64748B]">
                Lock in your favorite professional days or weeks before your big event or routine refresh.
              </p>
            </div>

            <div className="space-y-3 sm:space-y-3.5">
              {/* Feature 1 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <Calendar className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Flexible scheduling
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Choose the exact date and time that fits your busy life.
                  </p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <Heart className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Rebook your favorite pro
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Keep the stylist or barber who understands your personal style best.
                  </p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex items-start sm:items-center gap-3.5 sm:gap-4 p-4 sm:p-4.5 rounded-2xl bg-white border border-[#EDE5DC] shadow-[0_2px_4px_rgba(0,0,0,0.02)]">
                <div className="w-8 h-8 rounded-full bg-[#FFEAE2] text-[#FF5C28] flex items-center justify-center shrink-0 mt-0.5 sm:mt-0">
                  <Bell className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0F172A] text-xs sm:text-sm">
                    Automated reminders
                  </h4>
                  <p className="text-xs text-[#64748B]">
                    Timely SMS and calendar notifications before your appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

