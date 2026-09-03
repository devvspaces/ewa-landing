"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [showAll, setShowAll] = useState(false)

  const faqs = [
    {
      question: "What is EWÀ?",
      answer: `EWÀ is a dual mobile platform that connects clients with barbers for convenient, on-demand grooming and personal care services.`
    },
    {
      question: "Who can use EWÀ?",
      answer: `EWÀ is for two groups:
- Clients who want to book barbers for grooming services.
- Barbers who want to receive and manage bookings through the EWÀ Biz app.`},
    {
      question: "How is EWÀ different from other booking apps?",
      answer: `EWÀ focuses on personal care convenience, offering in-app calls/chats, secure payments, location-based matching, and KYC verification for trust and safety.`
    },
    {
      question: "How do I create an account on Ewà?",
      answer: `Download and install the Ewà Customer app (for clients) or Ewà Biz app (for barbers) from the Google Play Store or Apple App Store. Open the app, accept the terms and conditions, and click Sign Up. Enter your details (name, email, phone number, etc.) and upload any required verification documents to complete registration.`
    },
    {
      question: "How do I sign up as a barber on Ewà?",
      answer: `Download the Ewà Biz app, sign up by entering your details (name, phone number, email, etc.), and upload necessary documents such as a valid ID or certifications. Once verified, you can start accepting bookings.`
    },
    {
      question: "What documents or information do I need to register?",
      answer: `You may need a valid ID, a profile picture, and bank details for payouts. Barbers may also be required to upload certifications or training proof in future versions.`
    },
    {
      question: "Do I need to verify my identity?",
      answer: `Yes. Both clients and barbers must complete KYC verification to ensure trust and safety.`
    },
    {
      question: "Can I log in with my phone number?",
      answer: `Yes. You can log in with either your registered phone number or email.`
    },
    {
      question: "Can I use the same app as both a client and a barber?",
      answer: `No. Clients use Ewa, while barbers use Ewa Biz.`
    },
    {
      question: "Can I edit my profile details, such as profile picture or address?",
      answer: `Yes. Go to Edit Profile in the Profile section and update your details. Save the changes to apply them.`
    },
    {
      question: "How do I update my profile or services as a barber?",
      answer: `In the Ewà Barber app, go to Profile. To edit personal details, use Edit Profile. To update services or pricing, go to Rates and Services. Save changes to keep your profile updated.`
    },
    {
      question: "How do I delete my account?",
      answer: `Go to the Profile section, scroll to Delete Account, and confirm your choice. Once confirmed, your account will be permanently deleted.`
    },
    {
      question: "How do I book a barber?",
      answer: `On the Home section, use the Search or Browse feature to find available barbers near you. Select a barber, choose your service(s), pick a date and time, and confirm the appointment.`
    },
    {
      question: "Can I schedule a service for a later date or time?",
      answer: `Yes. During booking, you can select your preferred date and time before confirming.`
    },
    {
      question: "Can I book multiple services in one appointment?",
      answer: `Yes. You can add multiple services from a barber’s list before finalizing your booking.`
    },
    {
      question: "What happens if the barber is late or doesn’t show up?",
      answer: `Report the issue via the Support section. You may reorder with another barber or request a refund depending on the situation.`
    },
    {
      question: "Can I book a barber for any time of the day?",
      answer: `Yes. Ewa allows you to book barbers anytime, based on their availability.`
    },
    {
      question: "What is the Orders page?",
      answer: `The My Orders page is your order management hub. It shows active, past, and upcoming bookings for easy tracking.`
    },
    {
      question: "Can I save my preferred barbers?",
      answer: `Yes. Liking a barber’s profile automatically adds them to your Favorites list.`
    },
    {
      question: "What payment methods does Ewà accept?",
      answer: `Ewà accepts credit/debit cards and mobile payments through Stripe.`
    },
    {
      question: "When will my card be charged?",
      answer: `Your card is charged at the time of booking.`
    },
    {
      question: "Can I store my card details for faster checkout?",
      answer: `Yes. Stripe allows you to securely save your payment details.`
    },
    {
      question: "Is there a cancellation fee if I decide not to proceed with a booking?",
      answer: `Cancellation fees may apply depending on the barber's policy and how close the cancellation is to the appointment time.`
    },
    {
      question: "What are the service charges or fees for using the app?",
      answer: `Ewà charges a flat service fee of $2 per order. For example, if a barber charges $70, the customer pays $72, and the barber receives $68.`
    },
    {
      question: "Are payments refundable?",
      answer: `Refunds depend on the barber's cancellation policy and are handled through Ewà support.`
    },
    {
      question: "How do barbers get paid?",
      answer: `Payments are processed securely via Stripe and transferred directly to the barber's registered bank account once the service is completed.`
    },
    {
      question: "Do barbers get paid instantly?",
      answer: `Payments are processed securely and barbers can view earnings within the Ewa Biz app.`
    },
    {
      question: "When will I receive my payments as a barber?",
      answer: `Payments are typically processed within 10 minutes after marking a service as completed.`
    },
    {
      question: "Can I view a summary of my earnings as a barber?",
      answer: `Yes. Go to the Earnings section in the Ewà Barber app to see daily, weekly, or monthly reports.`
    },
    {
      question: "How do I choose a specific barber?",
      answer: `Browse barbers on the Home screen, view profiles, read reviews, and check ratings. You can also search by name to find a specific barber.`
    },
    {
      question: "How can I view reviews or ratings of barbers before booking?",
      answer: `Each barber's profile displays customer reviews and ratings.`
    },
    {
      question: "Can I request the same barber I used before?",
      answer: `Yes. Go to your booking history, find the barber, and rebook directly.`
    },
    {
      question: "Can customers leave reviews for barbers?",
      answer: `Yes. After a service, customers can rate and review their barber. These ratings appear publicly on the barber's profile.`
    },
    {
      question: "What should I do if I am unsatisfied with a service?",
      answer: `Communicate directly with the barber. If the issue is unresolved, report it to Ewà support for mediation.`
    },
    {
      question: "Can a barber refuse a booking?",
      answer: `Yes, but frequent refusals may impact their visibility and ratings on the platform.`
    },
    {
      question: "How can a barber build a loyal customer base?",
      answer: `Provide excellent service, maintain professionalism, respond promptly to bookings, and encourage rebookings from satisfied clients.`
    },
    {
      question: "Can I call my barber directly?",
      answer: `Yes. The app includes in-app calling for direct communication.`
    },
    {
      question: "How does the map integration work?",
      answer: `The map shows barbers near your saved address or live location, making it easy to find professionals nearby.`
    },
    {
      question: "Can I save multiple addresses?",
      answer: `Yes. You can store multiple service addresses under your profile.`
    },
    {
      question: "How do I rate a barber's service?",
      answer: `After your appointment, you will be prompted to give a star rating and feedback.`
    },
    {
      question: "Are ratings visible to other clients?",
      answer: `Yes. Ratings and reviews appear on a barber's public profile.`
    },
    {
      question: "The app keeps crashing. What should I do?",
      answer: `Ensure you are using the latest version. Try clearing your cache or reinstalling the app. If the issue persists, contact support.`
    },
    {
      question: "My payment isn't going through. How can I resolve this?",
      answer: `Double-check your payment details and account balance. If issues continue, contact Ewà support.`
    },
    {
      question: "I didn't receive a booking confirmation. Can you help?",
      answer: `Check your spam/junk folder and ensure notifications are enabled. If you still don't see it, contact support.`
    },
    {
      question: "How do I update the app to the latest version?",
      answer: `Go to your device's app store, search for Ewà, and download the latest version.`
    },
    {
      question: "I'm not receiving notifications for bookings. How do I fix this?",
      answer: `Check your device settings to ensure notifications are enabled for the Ewà app.`
    },
    {
      question: "I accidentally canceled a booking. Can it be reinstated?",
      answer: `No. Once canceled, a booking cannot be reinstated. Please ask the customer to rebook.`
    },
    {
      question: "Does Ewà operate in my city or area?",
      answer: `Ewà currently operates in select cities within the United States. Enter your location in the app to check availability.`
    },
    {
      question: "Can I request services at a different location from my saved address?",
      answer: `Yes. During booking, you can enter a new service address or use your current location.`
    },
    {
      question: "How do I set or change my service location in the app?",
      answer: `Go to the search bar on the Home page, click Enter Address or Use Current Location.`
    },
    {
      question: "How do I contact Ewà support?",
      answer: `Go to the Support section in the app or visit https://ewa.ewatheapp.com to use live chat. You can also reach support through in-app messaging.`
    },
    {
      question: "Can I chat directly with the barber before the appointment?",
      answer: `Yes. Once a booking is confirmed, you can chat or call your barber directly in the app.`
    },
    {
      question: "Can I share feedback or suggestions about the app?",
      answer: `Yes. Use the Feedback option in the app to send suggestions. We value your input.`
    },
    {
      question: "Is my personal information safe on Ewà?",
      answer: `Yes. Ewà uses industry-standard encryption and secure payment gateways to protect your data.`
    },
    {
      question: "How does Ewà handle disputes between clients and barbers?",
      answer: `Ewà mediates disputes by reviewing evidence from both parties. Contact support to start a dispute case.`
    },
    {
      question: "How can barbers increase their visibility on Ewà?",
      answer: `Maintain high ratings, respond quickly to requests, keep your profile updated, and set competitive pricing.`
    },
    {
      question: "Can barbers work in multiple locations?",
      answer: `Yes. Barbers can update their service areas in Location Settings to reflect regions they serve.`
    },
    {
      question: "How do I receive bookings as a barber?",
      answer: `When a customer books your service, you'll receive a notification. Accept the booking to confirm.`
    },
    {
      question: "Can I set my availability schedule?",
      answer: `Yes. Toggle your status between Online and Offline to control availability.`
    },
    {
      question: "What should I do if I can't fulfill a booking?",
      answer: `Notify the customer via in-app chat and cancel the appointment as early as possible to avoid penalties.`
    },
    {
      question: "Can I communicate directly with customers?",
      answer: `Yes. Barbers can use in-app chat or call features to confirm service details and locations.`
    },
  ]

  return (
    <section className=" py-[40px] md:py-[140px] bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 text-center mb-12">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {(showAll ? faqs : faqs.slice(0, 5)).map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-2xl overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-base pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                    }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Button 
            onClick={() => setShowAll(!showAll)}
            className="rounded-full bg-[#1E2A3A] text-white hover:bg-[#2A3A4A] px-8 py-6"
          >
            {showAll ? "Show less" : "Load more"}
          </Button>
        </div>
      </div>
    </section>
  )
}
