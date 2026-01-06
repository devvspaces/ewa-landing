"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  PiInstagramLogoFill,
  PiTwitterLogoFill,
  PiLinkedinLogoFill,
} from "react-icons/pi";

export function Footer() {
  return (
    <footer className="bg-[#fff] text-white py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social */}
        <div className="mb-5 w-fit mx-auto">
          <img
            src="/images/footer-logo.svg"
            alt="EWA"
            width={"150px"}
            className="mb-6"
          />
        </div>
        <div className="mb-5">
          <Link
            target="_blank"
            href="https://forms.gle/oh6m9Y2LjTGAVnu49"
          >
            <Button className="rounded-full bg-[#142640] hover:bg-[#142640] px-14 py-6">
              Join Waitlist
            </Button>
          </Link>
        </div>
        <ul className="mb-5 flex gap-20 justify-center font-medium">
          <li>
            <Link href="#" className="text-[#000] text-[12px]">
              Home
            </Link>
          </li>
          <li>
            <Link
              href="mailto:Ewaapp@ewatheapp.com"
              target="_blank"
              className="text-[#000] text-[12px]"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="#faq" className="text-[#000] text-[12px]">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="/terms" className="text-[#000] text-[12px]">
              Terms of Use
            </Link>
          </li>
          <li>
            <Link href="/privacy" className="text-[#000] text-[12px]">
              Privacy Policy
            </Link>
          </li>
        </ul>
        <div className="flex justify-center mb-5">
          <div className="flex gap-4 items-center">
            <p className="text-[#142640] text-[12px]">Follow us</p>
            <Link
              href="https://www.instagram.com/ewaatheapp"
              className="text-[#142640]"
              target="_blank"
            >
              <PiInstagramLogoFill className="w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#616161] text-sm text-[12px]">
              © Copyright 2025 EWÀ. All Rights Reserved.
            </p>
            <div className="cursor-pointer scale-75" onClick={() => {
              // Scroll up
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}>
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="16"
                  cy="16"
                  r="15.5"
                  transform="rotate(-90 16 16)"
                  stroke="black"
                />
                <path
                  d="M8.4707 19.7646L16.0001 13.1764L23.5295 19.7646"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
