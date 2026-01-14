'use client'

import * as React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Label } from '@/components/ui/label'
import { useToast } from '@/hooks/use-toast'

const joinWaitlistSchema = z.object({
  fullName: z.string().min(2, 'Please enter your full name'),
  phoneNumber: z
    .string()
    .min(7, 'Please enter a valid phone number')
    .max(20, 'Phone number is too long'),
  email: z.string().email('Please enter a valid email address'),
  city: z.string().min(2, 'Please tell us your city or area of operation'),
  profession: z
    .string()
    .min(2, 'Please describe your profession in the beauty industry'),
  yearsOfExperience: z
    .string()
    .min(1, 'Please enter your years of professional experience'),
  offersHomeService: z.enum(['yes', 'no'], {
    required_error: 'Please tell us if you offer home or house-call services',
  }),
  preferredContact: z.enum(['email', 'text'], {
    required_error: 'Please choose how you would like to receive updates',
  }),
})

export type JoinWaitlistFormValues = z.infer<typeof joinWaitlistSchema>

interface JoinWaitlistFormProps {
  onSuccess?: () => void
}

export function JoinWaitlistForm({ onSuccess }: JoinWaitlistFormProps) {
  const { toast } = useToast()

  const form = useForm<JoinWaitlistFormValues>({
    resolver: zodResolver(joinWaitlistSchema),
    defaultValues: {
      fullName: '',
      phoneNumber: '',
      email: '',
      city: '',
      profession: '',
      yearsOfExperience: '',
      offersHomeService: 'yes',
      preferredContact: 'email',
    },
  })

  const onSubmit = async (values: JoinWaitlistFormValues) => {
    try {
      const apiBaseUrl =
        process.env.NEXT_PUBLIC_EWA_API_URL || 'http://localhost:3000'

      const payload = {
        fullName: values.fullName,
        email: values.email,
        phone: values.phoneNumber,
        city: values.city,
        profession: values.profession,
        yearsOfExperience: Number(values.yearsOfExperience),
        homeService: values.offersHomeService === 'yes',
        receiveUpdates:
          values.preferredContact === 'email' ? 'EMAIL' : 'TEXT_MESSAGE',
      }

      const res = await fetch(`${apiBaseUrl}/wait-list/submit`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': process.env.NEXT_PUBLIC_EWA_API_KEY || '',
        },
        body: JSON.stringify(payload),
      })

      if (!res.ok) {
        throw new Error('Failed to join waitlist')
      }

      toast({
        title: "You're on the waitlist!",
        description:
          'Thank you for your interest in EWÀ Biz. We will reach out with updates and next steps soon.',
      })

      form.reset({
        fullName: '',
        phoneNumber: '',
        email: '',
        city: '',
        profession: '',
        yearsOfExperience: '',
        offersHomeService: 'yes',
        preferredContact: 'email',
      })

      onSuccess?.()
    } catch (error) {
      toast({
        title: 'Something went wrong',
        description:
          'We could not add you to the waitlist. Please check your details and try again.',
        variant: 'destructive',
      })
    }
  }

  const isSubmitting = form.formState.isSubmitting

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Full Name <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="John Doe"
                    className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="phoneNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Phone Number <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="+234 801 234 5678"
                    className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  Email Address <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-gray-700">
                  City/Area of Operation <span className="text-red-500">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder="Lekki, Lagos"
                    className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="profession"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                What best describes your profession?
                <span className="text-red-500"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  placeholder="Barber, Hairstylist, Grooming Specialist"
                  className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="yearsOfExperience"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Years of professional experience
                <span className="text-red-500"> *</span>
              </FormLabel>
              <FormControl>
                <Input
                  type="number"
                  min={0}
                  placeholder="3"
                  className="h-11 rounded-lg border-gray-300 focus:border-[#6C5CE7] focus:ring-[#6C5CE7]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="offersHomeService"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                Do you offer home or house-call services?
                <span className="text-red-500"> *</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  className="grid grid-cols-2 gap-3"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <Label
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium transition hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/5 has-[:checked]:border-[#6C5CE7] has-[:checked]:bg-[#6C5CE7]/10 has-[:checked]:text-[#6C5CE7]"
                  >
                    <RadioGroupItem value="yes" className="sr-only" />
                    <span>Yes</span>
                  </Label>
                  <Label
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium transition hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/5 has-[:checked]:border-[#6C5CE7] has-[:checked]:bg-[#6C5CE7]/10 has-[:checked]:text-[#6C5CE7]"
                  >
                    <RadioGroupItem value="no" className="sr-only" />
                    <span>No</span>
                  </Label>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="preferredContact"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="text-sm font-medium text-gray-700">
                How would you like to receive updates?
                <span className="text-red-500"> *</span>
              </FormLabel>
              <FormControl>
                <RadioGroup
                  className="grid grid-cols-2 gap-3"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  <Label
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium transition hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/5 has-[:checked]:border-[#6C5CE7] has-[:checked]:bg-[#6C5CE7]/10 has-[:checked]:text-[#6C5CE7]"
                  >
                    <RadioGroupItem value="email" className="sr-only" />
                    <span>Email</span>
                  </Label>
                  <Label
                    className="flex cursor-pointer items-center justify-center gap-2 rounded-lg border-2 border-gray-200 bg-white px-4 py-3 text-sm font-medium transition hover:border-[#6C5CE7] hover:bg-[#6C5CE7]/5 has-[:checked]:border-[#6C5CE7] has-[:checked]:bg-[#6C5CE7]/10 has-[:checked]:text-[#6C5CE7]"
                  >
                    <RadioGroupItem value="text" className="sr-only" />
                    <span>Text message</span>
                  </Label>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="pt-2">
          <Button
            type="submit"
            className="h-12 w-full rounded-lg bg-gradient-to-r from-[#342b74] to-[#443bc0] text-base font-semibold text-white shadow-md transition-all hover:shadow-lg hover:brightness-105 disabled:cursor-not-allowed disabled:opacity-60"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Submitting...
              </span>
            ) : (
              'Join waitlist'
            )}
          </Button>
        </div>

        <p className="text-center text-xs text-gray-500">
          We respect your privacy. You'll only receive important updates about EWÀ.
        </p>
      </form>
    </Form>
  )
}
