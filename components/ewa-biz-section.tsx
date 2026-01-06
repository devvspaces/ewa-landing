import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { FaAndroid, FaApple, FaAward, FaDownload, FaHourglass, FaPlane } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { Button } from "./ui/button";
import Link from "next/link";

function IU1() {
  return (
    <svg
      width="674"
      height="570"
      viewBox="0 0 674 570"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="602" cy="12" r="12" fill="url(#paint0_linear_3641_17383)" />
      <circle cx="662" cy="112" r="12" fill="url(#paint1_linear_3641_17383)" />
      <circle cx="20" cy="550" r="20" fill="url(#paint2_linear_3641_17383)" />
      <defs>
        <linearGradient
          id="paint0_linear_3641_17383"
          x1="602"
          y1="0"
          x2="602"
          y2="24"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#DAA5DE" />
          <stop offset="1" stopColor="#AC8BF0" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_3641_17383"
          x1="662"
          y1="100"
          x2="662"
          y2="124"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D0AFD1" />
          <stop offset="1" stopColor="#DDA8B7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_3641_17383"
          x1="20"
          y1="530"
          x2="20"
          y2="570"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E2B48E" />
          <stop offset="1" stopColor="#E29669" />
        </linearGradient>
      </defs>
    </svg>
  );
}

function IU2() {
  return (
    <svg
      width="597"
      height="597"
      viewBox="0 0 597 597"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="298.5"
        cy="298.5"
        r="298.5"
        fill="url(#paint0_linear_3454_23211)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_3454_23211"
          x1="-20.5"
          y1="299"
          x2="697.5"
          y2="299"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D53434" />
          <stop offset="0.189158" stopColor="#E17133" />
          <stop offset="0.717643" stopColor="#415A90" />
          <stop offset="1" stopColor="#1C8D9F" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function EwaBizSection() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden" id="ewa-biz">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-32 items-center">
          <div className="relative flex justify-center lg:justify-start order-2 lg:order-1 w-full">
            <div className="relative mx-auto">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-65 md:scale-100">
                <IU1 />
              </div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 scale-65 md:scale-100">
                <IU2 />
              </div>
              <Image
                src="/images/ewa-biz.png"
                alt="EWA Biz App"
                width={350}
                height={700}
                className="w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[350px] h-auto relative z-10"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2 w-full max-w-[500px]">
            <span className="text-[#FF8704] font-semibold text-sm uppercase tracking-wide">
              EWÀ BIZ
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-3 mb-2 leading-tight">
              Become your own boss with EWÀ
            </h2>

            <p className="text-gray-700 text-sm leading-relaxed mb-8">
              Turn your passion into a thriving business. Become a trusted name
              in the beauty industry with Ewa as your partner. Let’s redefine
              the way you work—one satisfied client at a time.
            </p>

            <div className="bg-[#FFF4E6] rounded-2xl p-6 mb-3 border border-[#FF8704] flex flex-col md:flex-row gap-4 md:gap-6">
              <div>
                <LuDownload className="w-8 h-8 text-[#FF8704] mb-4" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-lg">
                  Why choose EWÀ Biz?
                </h3>
                <p className="text-gray-700 text-[14px] leading-relaxed">
                  Are you ready to take control of your career and build a
                  thriving business in the beauty industry? At Ewa, we empower
                  skilled barbers and personal care professionals to work
                  independently, connect with clients effortlessly, and grow
                  their businesses on their terms.
                </p>
              </div>
            </div>

            <div className="space-y-3 mb-6">
              <Link href="https://forms.gle/oh6m9Y2LjTGAVnu49" target="_blank">
                <Button
                  className="rounded-lg bg-[#F5F5F5] text-[#142640] py-6 text-base w-full hover:bg-[#E0E0E0] justify-start cursor-pointer"
                  style={{
                    paddingLeft: "24px",
                    paddingRight: "24px",
                  }}
                >
                  <FaAward
                    style={{
                      height: "20px",
                      width: "20px",
                    }}
                  />
                  Join wait list
                </Button>
              </Link>
              {/* <Button className="rounded-lg bg-[#F5F5F5] text-[#142640] py-6 text-base w-full hover:bg-[#E0E0E0] justify-start" style={{
                paddingLeft: '24px',
                paddingRight: '24px',
              }}>
                <FaApple style={{
                  height: '20px',
                  width: '20px',
                }} />
                Download on App Store
              </Button>
              <Button className="rounded-lg bg-[#F5F5F5] text-[#142640] py-6 text-base w-full hover:bg-[#E0E0E0] justify-start" style={{
                paddingLeft: '24px',
                paddingRight: '24px',
              }}>
                <FaAndroid style={{
                  height: '20px',
                  width: '20px',
                }} />
                Download on Play Store
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
