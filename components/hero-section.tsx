'use client'

import Image from "next/image";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { AppleIcon, Apple } from "lucide-react";
import { FaApple, FaAndroid, FaAward } from "react-icons/fa";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { JoinWaitlistForm } from "@/components/join-waitlist-form";

function El1() {
  return (
    <svg
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="16" cy="16" r="16" fill="url(#paint0_linear_3641_17379)" />
      <defs>
        <linearGradient
          id="paint0_linear_3641_17379"
          x1="16"
          y1="0"
          x2="16"
          y2="32"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF823F" />
          <stop offset="1" stopColor="#FBBD1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function El2() {
  return (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="10" cy="10.5" r="10" fill="url(#paint0_linear_3641_17378)" />
      <defs>
        <linearGradient
          id="paint0_linear_3641_17378"
          x1="10"
          y1="0.5"
          x2="10"
          y2="20.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FBBD1E" />
          <stop offset="1" stopColor="#FF823F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function ImageEllipse() {
  return (
    <svg
      width="90"
      height="90"
      viewBox="0 0 90 90"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="45" cy="45" r="45" fill="url(#paint0_linear_3454_23584)" />
      <defs>
        <linearGradient
          id="paint0_linear_3454_23584"
          x1="0"
          y1="45"
          x2="90"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF823F" />
          <stop offset="0.5" stopColor="#FF823F" />
          <stop offset="1" stopColor="#FBBD1E" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HeroSection() {
  const [open, setOpen] = useState(false);

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
              Barbing <span className="text-[#FF823F]">.Anytime.</span> Anywhere
            </h1>
            <p className="text-gray-600 text-center sm:text-lg max-w-xl mx-auto mb-8">
              Beauty made convenient with EWÀ
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Sheet open={open} onOpenChange={setOpen}>
                <Button
                  size={"lg"}
                  className="rounded-full bg-gradient-to-r from-[#061C27] to-[#FF823F] text-white transition-all duration-300 hover:brightness-110 hover:shadow-xl text-lg"
                  style={{
                    padding: "28px 48px",
                    boxShadow: "0 10px 40px rgba(6, 28, 39, 0.4)",
                  }}
                  onClick={() => setOpen(true)}
                >
                  <FaAward
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  />
                  Join Wait List
                </Button>
                <SheetContent
                  side="bottom"
                  className="h-[90vh] overflow-y-auto rounded-t-3xl border-t bg-gradient-to-b from-white to-gray-50 shadow-2xl w-full md:max-w-xl mx-auto"
                >
                  <div className="mx-auto max-w-2xl px-4 py-6 sm:px-6 md:px-8">
                    <SheetHeader className="mb-6 text-center">
                      <SheetTitle className="text-2xl font-bold text-[#142640] md:text-3xl">
                        Join the EWÀ Biz Waitlist
                      </SheetTitle>
                      <p className="mt-2 text-sm text-gray-600">
                        Share a few details so we can invite you as soon as we launch in your area.
                      </p>
                    </SheetHeader>
                    <div className="mt-6">
                      <JoinWaitlistForm onSuccess={() => setOpen(false)} />
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
              {/* <Button
                size={'lg'}
                variant="outline"
                className="rounded-full border-[#1E2A3A] text-[#1E2A3A] py-6 text-base bg-transparent pl-[24px] pr-[24px]"
              >
                <FaAndroid style={{
                  height: '20px',
                  width: '20px',
                }} />
                Download for Android
              </Button> */}
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
  );
}
