import { Navbar } from "@/components/navbar"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-42">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ED8936' }}>
            EWÀ TERMS & CONDITIONS
          </h1>

          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#ED8936' }}>
              TABLE OF CONTENTS
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#acceptance-of-these-terms" className="text-orange-700 hover:underline text-sm">Acceptance of These Terms</a></li>
              <li><a href="#definitions" className="text-orange-700 hover:underline text-sm">Definitions</a></li>
              <li><a href="#the-companys-role" className="text-orange-700 hover:underline text-sm">The Company's Role</a></li>
              <li><a href="#eligibility-and-account-registration" className="text-orange-700 hover:underline text-sm">Eligibility and Account Registration</a></li>
              <li><a href="#electronic-communications-and-sms-messages" className="text-orange-700 hover:underline text-sm">Electronic Communications and SMS Messages</a></li>
              <li><a href="#bookings-payments-and-fees" className="text-orange-700 hover:underline text-sm">Bookings, Payments, and Fees</a></li>
              <li><a href="#cancellations-refunds-and-no-shows" className="text-orange-700 hover:underline text-sm">Cancellations, Refunds, and No-Shows</a></li>
              <li><a href="#service-provider-obligations" className="text-orange-700 hover:underline text-sm">Service Provider Obligations</a></li>
              <li><a href="#customer-obligations" className="text-orange-700 hover:underline text-sm">Customer Obligations</a></li>
              <li><a href="#user-content-and-reviews" className="text-orange-700 hover:underline text-sm">User Content and Reviews</a></li>
              <li><a href="#prohibited-conduct" className="text-orange-700 hover:underline text-sm">Prohibited Conduct</a></li>
              <li><a href="#safety-and-assumption-of-risk" className="text-orange-700 hover:underline text-sm">Safety and Assumption of Risk</a></li>
              <li><a href="#intellectual-property" className="text-orange-700 hover:underline text-sm">Intellectual Property</a></li>
              <li><a href="#third-party-services" className="text-orange-700 hover:underline text-sm">Third-Party Services</a></li>
              <li><a href="#disclaimer-of-warranties" className="text-orange-700 hover:underline text-sm">Disclaimer of Warranties</a></li>
              <li><a href="#limitation-of-liability" className="text-orange-700 hover:underline text-sm">Limitation of Liability</a></li>
              <li><a href="#indemnification" className="text-orange-700 hover:underline text-sm">Indemnification</a></li>
              <li><a href="#dispute-resolution-and-arbitration" className="text-orange-700 hover:underline text-sm">Dispute Resolution and Arbitration</a></li>
              <li><a href="#governing-law" className="text-orange-700 hover:underline text-sm">Governing Law</a></li>
              <li><a href="#termination" className="text-orange-700 hover:underline text-sm">Termination</a></li>
              <li><a href="#general" className="text-orange-700 hover:underline text-sm">General</a></li>
              <li><a href="#contact-us" className="text-orange-700 hover:underline text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <section id="acceptance-of-these-terms">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                1. ACCEPTANCE OF THESE TERMS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms & Conditions ("Terms") govern your access to and use of the Ewà mobile application, the ewatheapp.com website, and all related digital assets and services (collectively, the "Services"), operated by Ewà ("Company," "we," "us," or "our").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By downloading, accessing, or using the Services, or by creating an account, you agree to be bound by these Terms and by our Privacy Policy, which is incorporated into these Terms by reference. If you do not agree to these Terms, do not use the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may modify these Terms at any time. We will update the Effective Date above when we do. Your continued use of the Services after changes are posted constitutes acceptance of the revised Terms.
              </p>
            </section>

            <section id="definitions">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                2. DEFINITIONS
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>"Customer"</strong> means a User who books or seeks to book beauty or grooming services through the Services.</li>
                <li><strong>"Service Provider"</strong> means an independent professional who offers beauty or grooming services to Customers through the Services.</li>
                <li><strong>"User"</strong> means any person who accesses or uses the Services, including Customers and Service Providers.</li>
                <li><strong>"Provider Services"</strong> means the beauty, grooming, and related services performed by a Service Provider for a Customer.</li>
              </ul>
            </section>

            <section id="the-companys-role">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                3. THE COMPANY'S ROLE
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ewà is a technology platform, not a provider of beauty or grooming services. We provide a marketplace that connects Customers with independent Service Providers. We do not employ Service Providers, do not perform Provider Services, and do not direct, supervise, or control the manner in which Provider Services are performed.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Service Providers are independent contractors. Nothing in these Terms creates an employment, agency, partnership, or joint venture relationship between Ewà and any Service Provider.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Any contract for Provider Services is formed directly between the Customer and the Service Provider. Ewà is not a party to that contract.
              </p>
            </section>

            <section id="eligibility-and-account-registration">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                4. ELIGIBILITY AND ACCOUNT REGISTRATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You must be at least eighteen (18) years of age and legally capable of entering into binding contracts to create an account or use the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                When you register, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate, current, and complete information;</li>
                <li>Maintain and promptly update your information;</li>
                <li>Keep your login credentials confidential;</li>
                <li>Accept responsibility for all activity that occurs under your account; and</li>
                <li>Notify us immediately of any unauthorized use of your account.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may refuse, suspend, or terminate any account at our discretion, including where we believe information provided is inaccurate or these Terms have been violated.
              </p>
            </section>

            <section id="electronic-communications-and-sms-messages">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                5. ELECTRONIC COMMUNICATIONS AND SMS MESSAGES
              </h2>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                5.1 Consent to Electronic Communications
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                By creating an account, you consent to receive communications from us electronically, including by email, in-app notification, push notification, and SMS text message. You agree that all agreements, notices, and disclosures provided electronically satisfy any legal requirement that such communications be in writing.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                5.2 SMS Verification Codes
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Account registration takes place within the Ewà mobile application for iOS and Android. During registration, you enter your mobile phone number and must affirmatively check an unchecked consent checkbox reading: "I agree to receive a one-time verification code by SMS from Ewà. Msg & data rates may apply." Registration cannot be completed without checking this box.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use your mobile phone number to send one-time verification codes (OTP) and transactional account messages, including booking confirmations and security alerts. We do not send marketing or promotional text messages.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Message frequency varies based on your account activity.</li>
                <li>Message and data rates may apply, and are charged by your mobile carrier.</li>
                <li>Reply HELP for help, or contact support@ewatheapp.com.</li>
                <li>Reply STOP to unsubscribe at any time. You will receive one confirmation message and no further texts.</li>
                <li>Carriers are not liable for delayed or undelivered messages.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you opt out of SMS messages, we may be unable to verify your account or deliver security codes, which may prevent you from signing in to the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                No mobile information will be shared with third parties or affiliates for marketing or promotional purposes.
              </p>
            </section>

            <section id="bookings-payments-and-fees">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                6. BOOKINGS, PAYMENTS, AND FEES
              </h2>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                6.1 Booking
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers may request Provider Services through the Services. A booking is confirmed when the Service Provider accepts the request. Prices, availability, and service descriptions are set by Service Providers, not by Ewà.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                6.2 Payment
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Customers authorize Ewà, through our third-party payment processor, to charge the payment method on file for the total amount of the booking, including any applicable service fees, taxes, and gratuity.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Payment card details are collected and stored by our PCI-compliant third-party payment processor. Ewà does not store full payment card numbers or security codes on its own systems.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                6.3 Fees
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ewà charges a service fee for use of the platform. Applicable fees are disclosed before a booking is confirmed. We may change our fees at any time, with changes taking effect for bookings made after the change is posted.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                6.4 Service Provider Payouts
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ewà remits payment to Service Providers, less applicable fees, according to the payout schedule described in the Services. Service Providers are solely responsible for reporting and paying all taxes arising from their earnings.
              </p>
            </section>

            <section id="cancellations-refunds-and-no-shows">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                7. CANCELLATIONS, REFUNDS, AND NO-SHOWS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Cancellation and refund terms are disclosed at the time of booking and may vary by Service Provider.
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Customers who cancel outside the applicable cancellation window may receive a refund as described at booking.</li>
                <li>Customers who cancel within the cancellation window, or who fail to appear, may be charged a cancellation fee.</li>
                <li>If a Service Provider cancels or fails to appear, the Customer will receive a full refund of amounts charged.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Refund disputes should be raised through the Services. Ewà may, at its discretion, issue refunds or credits to resolve disputes, but is not obligated to do so.
              </p>
            </section>

            <section id="service-provider-obligations">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                8. SERVICE PROVIDER OBLIGATIONS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use the Services as a Service Provider, you represent and warrant that you:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Hold and will maintain all licenses, certifications, registrations, and permits required to lawfully perform your Provider Services in the jurisdictions where you operate;</li>
                <li>Will comply with all applicable health, safety, sanitation, and licensing laws and regulations;</li>
                <li>Will maintain any insurance required by law or reasonably appropriate to your Provider Services;</li>
                <li>Will perform Provider Services in a professional, safe, and competent manner;</li>
                <li>Consent to identity verification and background screening as a condition of using the Services; and</li>
                <li>Are solely responsible for your own tools, products, supplies, and equipment.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are solely responsible for the Provider Services you perform and for any injury, damage, or loss arising from them.
              </p>
            </section>

            <section id="customer-obligations">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                9. CUSTOMER OBLIGATIONS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you use the Services as a Customer, you agree to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Provide accurate booking details, including location and service requirements;</li>
                <li>Disclose any allergies, sensitivities, skin conditions, or medical considerations relevant to the Provider Services before they are performed;</li>
                <li>Provide a safe and lawful environment where Provider Services are performed at your location;</li>
                <li>Treat Service Providers with respect; and</li>
                <li>Pay all amounts due for confirmed bookings.</li>
              </ul>
            </section>

            <section id="user-content-and-reviews">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                10. USER CONTENT AND REVIEWS
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may submit content to the Services, including photographs, profile information, and reviews ("User Content"). You retain ownership of your User Content.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By submitting User Content, you grant Ewà a worldwide, non-exclusive, royalty-free, transferable, sublicensable license to use, host, store, reproduce, modify, display, and distribute that content in connection with operating and promoting the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You represent that you own or have the necessary rights to your User Content and that it does not infringe any third-party rights.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reviews must reflect genuine, first-hand experience. We may remove User Content that violates these Terms, but we do not undertake to review all content and are not responsible for User Content.
              </p>
            </section>

            <section id="prohibited-conduct">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                11. PROHIBITED CONDUCT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Use the Services for any unlawful purpose or in violation of any applicable law;</li>
                <li>Arrange payment outside the Services in order to avoid fees;</li>
                <li>Impersonate any person or misrepresent your identity, qualifications, or affiliation;</li>
                <li>Harass, threaten, discriminate against, or harm any other User;</li>
                <li>Request or perform any service of a sexual nature;</li>
                <li>Post false, misleading, defamatory, or fraudulent content;</li>
                <li>Scrape, crawl, reverse engineer, or attempt to gain unauthorized access to the Services;</li>
                <li>Introduce malware or interfere with the operation or security of the Services; or</li>
                <li>Use the Services to send unsolicited commercial messages.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Violation may result in immediate suspension or termination of your account and referral to law enforcement.
              </p>
            </section>

            <section id="safety-and-assumption-of-risk">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                12. SAFETY AND ASSUMPTION OF RISK
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ewà performs identity verification and background screening on Service Providers, but we do not guarantee the conduct, skill, qualifications, or safety of any User. Screening has inherent limitations and does not guarantee that a person poses no risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                You are responsible for exercising your own judgment when interacting with other Users. You use the Services and receive or perform Provider Services at your own risk.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Beauty and grooming services carry inherent risks, including allergic reaction, skin irritation, chemical burns, and injury. You assume these risks.
              </p>
            </section>

            <section id="intellectual-property">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                13. INTELLECTUAL PROPERTY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services, including all software, text, graphics, logos, and the Ewà name and marks, are owned by Ewà or its licensors and are protected by intellectual property laws. Subject to these Terms, we grant you a limited, revocable, non-exclusive, non-transferable license to use the Services for their intended purpose. All rights not expressly granted are reserved.
              </p>
            </section>

            <section id="third-party-services">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                14. THIRD-PARTY SERVICES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services may integrate or link to third-party services, including mapping, payment processing, and messaging providers. We are not responsible for third-party services, their content, or their practices. Your use of them is governed by their own terms.
              </p>
            </section>

            <section id="disclaimer-of-warranties">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                15. DISCLAIMER OF WARRANTIES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR THAT ANY PROVIDER SERVICES WILL MEET YOUR EXPECTATIONS.
              </p>
            </section>

            <section id="limitation-of-liability">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                16. LIMITATION OF LIABILITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                TO THE MAXIMUM EXTENT PERMITTED BY LAW, EWÀ AND ITS OFFICERS, DIRECTORS, EMPLOYEES, AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR GOODWILL, ARISING FROM OR RELATING TO YOUR USE OF THE SERVICES.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICES WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNTS YOU PAID TO EWÀ IN THE SIX (6) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS ($100).
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THE ABOVE MAY NOT APPLY TO YOU.
              </p>
            </section>

            <section id="indemnification">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                17. INDEMNIFICATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You agree to indemnify, defend, and hold harmless Ewà and its officers, directors, employees, and agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) arising from or relating to: (i) your use of the Services; (ii) your User Content; (iii) your violation of these Terms or any applicable law; (iv) your Provider Services, if you are a Service Provider; or (v) any dispute between you and another User.
              </p>
            </section>

            <section id="dispute-resolution-and-arbitration">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                18. DISPUTE RESOLUTION AND ARBITRATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                18.1 Informal Resolution
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Before initiating formal proceedings, you agree to contact us at support@ewatheapp.com and attempt to resolve the dispute informally for at least thirty (30) days.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                18.2 Binding Arbitration
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                If informal resolution fails, any dispute arising from or relating to these Terms or the Services will be resolved by binding individual arbitration administered by the American Arbitration Association under its Consumer Arbitration Rules, rather than in court, except that either party may bring an individual claim in small claims court.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                18.3 Class Action Waiver
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                YOU AND EWÀ AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE PROCEEDING.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                18.4 Opt-Out
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may opt out of this arbitration agreement by sending written notice to support@ewatheapp.com within thirty (30) days of first accepting these Terms. Opting out will not affect any other part of these Terms.
              </p>
            </section>

            <section id="governing-law">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                19. GOVERNING LAW
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                These Terms are governed by the laws of the State of New York, without regard to its conflict of laws principles. Subject to Section 18, the exclusive venue for any dispute is the state and federal courts located in New York County, New York.
              </p>
            </section>

            <section id="termination">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                20. TERMINATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                You may terminate your account at any time through the Services or by contacting us. We may suspend or terminate your access at any time, with or without notice, for any reason, including violation of these Terms.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Upon termination, your right to use the Services ceases immediately. Sections 10, 13, 15, 16, 17, 18, and 19 survive termination.
              </p>
            </section>

            <section id="general">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                21. GENERAL
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Severability.</strong> If any provision is held unenforceable, the remaining provisions remain in full force.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>No Waiver.</strong> Our failure to enforce any provision is not a waiver of it.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Assignment.</strong> You may not assign these Terms without our written consent. We may assign them freely.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Entire Agreement.</strong> These Terms and the Privacy Policy constitute the entire agreement between you and Ewà regarding the Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Force Majeure.</strong> We are not liable for failures caused by events beyond our reasonable control.
              </p>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                22. CONTACT US
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Questions about these Terms:
              </p>
              <ul className="list-none space-y-2 mb-8">
                <li><strong>Email:</strong> support@ewatheapp.com</li>
              </ul>
            </section>
          </div>
        </div>
      </div>

      <FaqSection />
      <Footer />
    </main>
  )
}
