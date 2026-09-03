"use client";

import { Navbar } from "@/components/navbar";
import { FaqSection } from "@/components/faq-section";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Instagram, MessageCircle, Download } from "lucide-react";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Support() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-12 md:pt-12 pb-0 md:pb-0 overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 md:pt-32">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ color: "#142640" }}
            >
              Support & Help Center
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Find answers to common questions or get in
              touch with our team.
            </p>
          </div>

          {/* Contact Information Section */}
          <div className="mb-20">
            <h2
              className="text-2xl md:text-3xl font-bold mb-8 text-center"
              style={{ color: "#142640" }}
            >
              Get in Touch
            </h2>

            <div className="grid md:grid-cols-2 gap-6 mb-8">
              {/* Email Card */}
              <Card className="border-2 border-gray-100 rounded-2xl hover:border-[#FF8704] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#FFF4E6]">
                      <Mail className="w-6 h-6" style={{ color: "#FF8704" }} />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-semibold text-lg mb-2"
                        style={{ color: "#142640" }}
                      >
                        Email Support
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Send us an email and we'll respond within 24 hours
                      </p>
                      <Link
                        href="mailto:Ewaapp@ewatheapp.com"
                        className="text-[#FF8704] hover:text-[#ED8936] font-medium text-sm"
                      >
                        Ewaapp@ewatheapp.com
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Instagram Card */}
              <Card className="border-2 border-gray-100 rounded-2xl hover:border-[#FF8704] transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-[#FFF4E6]">
                      <Instagram
                        className="w-6 h-6"
                        style={{ color: "#FF8704" }}
                      />
                    </div>
                    <div className="flex-1">
                      <h3
                        className="font-semibold text-lg mb-2"
                        style={{ color: "#142640" }}
                      >
                        Social Media
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        Follow us on Instagram for updates and support
                      </p>
                      <Link
                        href="https://www.instagram.com/ewaatheapp"
                        target="_blank"
                        className="text-[#FF8704] hover:text-[#ED8936] font-medium text-sm"
                      >
                        @ewaatheapp
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Additional Info Banner */}
            <div className="bg-[#FFF4E6] rounded-2xl p-6 border-2 border-[#FF8704]">
              <h3
                className="font-semibold text-lg mb-2"
                style={{ color: "#142640" }}
              >
                Need immediate assistance?
              </h3>
              <p className="text-sm text-gray-700">
                For urgent issues, please send
                us an email at{" "}
                <Link
                  href="mailto:Ewaapp@ewatheapp.com"
                  className="text-[#FF8704] hover:text-[#ED8936] font-medium"
                >
                  Ewaapp@ewatheapp.com
                </Link>
                . We typically respond within few hours during business days.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FaqSection />

      <Footer />
    </main>
  );
}
