"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { JoinWaitlistForm } from "@/components/join-waitlist-form"

interface ProWaitlistModalProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function ProWaitlistModal({ open, onOpenChange }: ProWaitlistModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[580px] max-h-[90vh] overflow-y-auto bg-white p-6 sm:p-8 rounded-2xl">
        <DialogHeader className="mb-4">
          <DialogTitle className="text-2xl font-serif font-bold text-[#0F172A]">
            Join as an EWÁ Beauty Pro
          </DialogTitle>
          <DialogDescription className="text-gray-600 text-sm mt-1">
            Build your independent mobile clientele in NYC. Set your own hours, keep your rates, and get instant payouts.
          </DialogDescription>
        </DialogHeader>

        <JoinWaitlistForm onSuccess={() => onOpenChange(false)} />
      </DialogContent>
    </Dialog>
  )
}

