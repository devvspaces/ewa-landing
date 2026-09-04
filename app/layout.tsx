import type React from "react"
import type { Metadata } from "next"

import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

import { Toaster } from "@/components/ui/toaster"
import { Hanken_Grotesk, Fraunces } from 'next/font/google'

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
})

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
})

export const metadata: Metadata = {
  title: "EWÁ — Beauty Professionals Who Come to You",
  description: "EWÁ connects you with vetted beauty professionals who come to you — no salon, no commute, no wait times.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${hanken.variable} ${fraunces.variable} font-sans antialiased`}>
        <Suspense fallback={<div>Loading...</div>}>
          {children}
          <Analytics />
          <Toaster />
        </Suspense>
      </body>
    </html>
  )
}
