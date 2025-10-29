import Image from "next/image"
import { Button } from "@/components/ui/button"
import { AppleIcon, Apple } from "lucide-react"
import { FaApple, FaAndroid } from "react-icons/fa";

function El1() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_3641_17379)" />
      <defs>
        <linearGradient id="paint0_linear_3641_17379" x1="16" y1="0" x2="16" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#BCC7FA" />
          <stop offset="1" stopColor="#B0A0F0" />
        </linearGradient>
      </defs>
    </svg>
  )
}

function El2() {
  return (
    <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10.5" r="10" fill="url(#paint0_linear_3641_17378)" />
      <defs>
        <linearGradient id="paint0_linear_3641_17378" x1="10" y1="0.5" x2="10" y2="20.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#EEC7EE" />
          <stop offset="1" stopColor="#F9BED0" />
        </linearGradient>
      </defs>
    </svg>

  )
}

function ImageEllipse() {
  return (
    <svg width="90" height="90" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="45" cy="45" r="45" fill="url(#paint0_linear_3454_23584)" />
      <defs>
        <linearGradient id="paint0_linear_3454_23584" x1="0" y1="45" x2="90" y2="45" gradientUnits="userSpaceOnUse">
          <stop stopColor="#DD31FF" />
          <stop offset="0.5" stopColor="#7D28EB" />
          <stop offset="1" stopColor="#622DFD" />
        </linearGradient>
      </defs>
    </svg>
  )
}

export function HeroSection() {
  return (
    <section className="relative pt-24 md:pt-42 pb-0 md:pb-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left lg:col-span-2 relative">
            <div className="absolute right-[0] top-[50px] md:left-[50%] md:top-[-120px]">
              <El1 />
            </div>
            <div className="absolute left-[0px] bottom-[-30px] md:left-[-40px] md:bottom-[80px]">
              <El2 />
            </div>
            <h1 className="text-2xl text-center sm:text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Barbing <span className="text-[#6C5CE7]">.Anytime.</span> Anywhere
            </h1>
            <p className="text-gray-600 text-center sm:text-lg max-w-xl mx-auto mb-8">
              Beauty made convenient with EWÀ
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button size={'lg'} className="rounded-full bg-[#1E2A3A] text-white hover:bg-[#2A3A4A] py-6 text-base pl-[24px] pr-[24px]">
                <FaApple style={{
                  height: '20px',
                  width: '20px',
                }} />
                Download for iOS
              </Button>
              <Button
                size={'lg'}
                variant="outline"
                className="rounded-full border-[#1E2A3A] text-[#1E2A3A] py-6 text-base bg-transparent pl-[24px] pr-[24px]"
              >
                <FaAndroid style={{
                  height: '20px',
                  width: '20px',
                }} />
                Download for Android
              </Button>
            </div>
          </div>

          {/* Right Content - Phone Mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="hidden md:block absolute right-[0] top-[0px] z-[1] transform translate-x-1/3 -translate-y-1/3">
                <ImageEllipse />
              </div>
              <Image
                src="/images/hero1.png"
                alt="EWA App Preview"
                width={400}
                height={800}
                className="w-full relative max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] h-auto z-[10]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
