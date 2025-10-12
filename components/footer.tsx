import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { PiInstagramLogoFill, PiTwitterLogoFill, PiLinkedinLogoFill } from "react-icons/pi"

export function Footer() {
  return (
    <footer className="bg-[#fff] text-white py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Logo and Social */}
        <div className="mb-8 w-fit mx-auto md:mx-0">
          <img src="/images/footer-logo.svg" alt="EWA" width={"150px"} className="mb-6" />
          <div className="flex gap-4 items-center">
            <p className="text-[#142640] text-[12px]">Follow us</p>
            <Link
              href="#"
              className="text-[#142640]"
            >
              <PiInstagramLogoFill className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-[#142640]"
            >
              <PiTwitterLogoFill className="w-5 h-5" />
            </Link>
            <Link
              href="#"
              className="text-[#142640]"
            >
              <PiLinkedinLogoFill className="w-5 h-5" />
            </Link>
          </div>
        </div>
        <div className="text-center md:text-left grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company */}
          <div>
            <h3 className="text-[12px] text-[#616161] mb-1 uppercase">Company</h3>
            <ul className="space-y-1">
              <li>
                <Link href="#" className="text-[#000] text-[12px]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-[#000] text-[12px]">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-[#000] text-[12px]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter start from the 4th grid col */}
          <div className="lg:col-start-4 lg:col-span-10">
            <h3 className="font-semibold text-black text-[#616161] text-[12px] mb-2">Sign up to our Waitlist</h3>
            <div className="flex flex-col md:flex-row gap-4 items-center">
              <Input
                type="email"
                placeholder="Your email address"
                className="placeholder:text-gray-400 border-y-1 border-x-0 rounded-none text-[#142640] focus:ring-0 focus:border-[#142640] border-gray-300"
              />
              <Button className="rounded-full bg-[#142640] hover:bg-[#142640] px-6 py-6">Get Started</Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t-1">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex gap-6">
              <Link href="/privacy" className="text-[#616161] text-sm text-[12px] hover:underline">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-[#616161] text-sm text-[12px] hover:underline">
                Terms of Use
              </Link>
            </div>
            <p className="text-[#616161] text-sm text-[12px]">© Copyright 2025 EWÀ. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
