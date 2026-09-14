import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import { LegalSection as Section } from "../components/marketing/LegalSection";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Ewà" },
      {
        name: "description",
        content:
          "The terms that govern your use of the Ewà app and website, including bookings, payments, SMS messages, and dispute resolution.",
      },
    ],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="min-h-screen bg-paper text-midnight">
      <Nav variant="landing" />
      <main className="mx-auto max-w-[760px] px-6 py-14">
        <h1 className="font-display text-[32px] font-medium leading-tight text-midnight">
          Ewà Terms &amp; Conditions
        </h1>

        <div className="mt-8 rounded-2xl border border-midnight/[.08] bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-[.12em] text-orange">
            Table of contents
          </h2>
          <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-sm text-midnight/70">
            <li>
              <a href="#acceptance" className="hover:text-orange">
                Acceptance of These Terms
              </a>
            </li>
            <li>
              <a href="#definitions" className="hover:text-orange">
                Definitions
              </a>
            </li>
            <li>
              <a href="#role" className="hover:text-orange">
                The Company's Role
              </a>
            </li>
            <li>
              <a href="#eligibility" className="hover:text-orange">
                Eligibility and Account Registration
              </a>
            </li>
            <li>
              <a href="#sms" className="hover:text-orange">
                Electronic Communications and SMS Messages
              </a>
            </li>
            <li>
              <a href="#bookings" className="hover:text-orange">
                Bookings, Payments, and Fees
              </a>
            </li>
            <li>
              <a href="#cancellations" className="hover:text-orange">
                Cancellations, Refunds, and No-Shows
              </a>
            </li>
            <li>
              <a href="#provider-obligations" className="hover:text-orange">
                Service Provider Obligations
              </a>
            </li>
            <li>
              <a href="#customer-obligations" className="hover:text-orange">
                Customer Obligations
              </a>
            </li>
            <li>
              <a href="#user-content" className="hover:text-orange">
                User Content and Reviews
              </a>
            </li>
            <li>
              <a href="#prohibited" className="hover:text-orange">
                Prohibited Conduct
              </a>
            </li>
            <li>
              <a href="#safety" className="hover:text-orange">
                Safety and Assumption of Risk
              </a>
            </li>
            <li>
              <a href="#ip" className="hover:text-orange">
                Intellectual Property
              </a>
            </li>
            <li>
              <a href="#third-party" className="hover:text-orange">
                Third-Party Services
              </a>
            </li>
            <li>
              <a href="#warranties" className="hover:text-orange">
                Disclaimer of Warranties
              </a>
            </li>
            <li>
              <a href="#liability" className="hover:text-orange">
                Limitation of Liability
              </a>
            </li>
            <li>
              <a href="#indemnification" className="hover:text-orange">
                Indemnification
              </a>
            </li>
            <li>
              <a href="#disputes" className="hover:text-orange">
                Dispute Resolution and Arbitration
              </a>
            </li>
            <li>
              <a href="#law" className="hover:text-orange">
                Governing Law
              </a>
            </li>
            <li>
              <a href="#termination" className="hover:text-orange">
                Termination
              </a>
            </li>
            <li>
              <a href="#general" className="hover:text-orange">
                General
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-orange">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-10">
          <Section id="acceptance" title="1. Acceptance of These Terms">
            <p>
              These Terms &amp; Conditions ("Terms") govern your access to and use of the Ewà mobile
              application, the ewatheapp.com website, and all related digital assets and services
              (collectively, the "Services"), operated by Ewà ("Company," "we," "us," or "our").
            </p>
            <p>
              By downloading, accessing, or using the Services, or by creating an account, you agree
              to be bound by these Terms and by our Privacy Policy, which is incorporated into these
              Terms by reference. If you do not agree to these Terms, do not use the Services.
            </p>
            <p>
              We may modify these Terms at any time. We will update the Effective Date above when we
              do. Your continued use of the Services after changes are posted constitutes acceptance
              of the revised Terms.
            </p>
          </Section>

          <Section id="definitions" title="2. Definitions">
            <ul>
              <li>
                <strong>"Customer"</strong> means a User who books or seeks to book beauty or
                grooming services through the Services.
              </li>
              <li>
                <strong>"Service Provider"</strong> means an independent professional who offers
                beauty or grooming services to Customers through the Services.
              </li>
              <li>
                <strong>"User"</strong> means any person who accesses or uses the Services,
                including Customers and Service Providers.
              </li>
              <li>
                <strong>"Provider Services"</strong> means the beauty, grooming, and related
                services performed by a Service Provider for a Customer.
              </li>
            </ul>
          </Section>

          <Section id="role" title="3. The Company's Role">
            <p>
              Ewà is a technology platform, not a provider of beauty or grooming services. We
              provide a marketplace that connects Customers with independent Service Providers. We
              do not employ Service Providers, do not perform Provider Services, and do not direct,
              supervise, or control the manner in which Provider Services are performed.
            </p>
            <p>
              Service Providers are independent contractors. Nothing in these Terms creates an
              employment, agency, partnership, or joint venture relationship between Ewà and any
              Service Provider.
            </p>
            <p>
              Any contract for Provider Services is formed directly between the Customer and the
              Service Provider. Ewà is not a party to that contract.
            </p>
          </Section>

          <Section id="eligibility" title="4. Eligibility and Account Registration">
            <p>
              You must be at least eighteen (18) years of age and legally capable of entering into
              binding contracts to create an account or use the Services.
            </p>
            <p>When you register, you agree to:</p>
            <ul>
              <li>Provide accurate, current, and complete information;</li>
              <li>Maintain and promptly update your information;</li>
              <li>Keep your login credentials confidential;</li>
              <li>Accept responsibility for all activity that occurs under your account; and</li>
              <li>Notify us immediately of any unauthorized use of your account.</li>
            </ul>
            <p>
              We may refuse, suspend, or terminate any account at our discretion, including where we
              believe information provided is inaccurate or these Terms have been violated.
            </p>
          </Section>

          <Section id="sms" title="5. Electronic Communications and SMS Messages">
            <h3>5.1 Consent to Electronic Communications</h3>
            <p>
              By creating an account, you consent to receive communications from us electronically,
              including by email, in-app notification, push notification, and SMS text message. You
              agree that all agreements, notices, and disclosures provided electronically satisfy
              any legal requirement that such communications be in writing.
            </p>
            <h3>5.2 SMS Verification Codes</h3>
            <p>
              Account registration takes place within the Ewà mobile application for iOS and
              Android. During registration, you enter your mobile phone number and must
              affirmatively check an unchecked consent checkbox reading: "I agree to receive a
              one-time verification code by SMS from Ewà. Msg &amp; data rates may apply."
              Registration cannot be completed without checking this box.
            </p>
            <p>
              We use your mobile phone number to send one-time verification codes (OTP) and
              transactional account messages, including booking confirmations and security alerts.
              We do not send marketing or promotional text messages.
            </p>
            <ul>
              <li>Message frequency varies based on your account activity.</li>
              <li>Message and data rates may apply, and are charged by your mobile carrier.</li>
              <li>Reply HELP for help, or contact support@ewatheapp.com.</li>
              <li>
                Reply STOP to unsubscribe at any time. You will receive one confirmation message and
                no further texts.
              </li>
              <li>Carriers are not liable for delayed or undelivered messages.</li>
            </ul>
            <p>
              If you opt out of SMS messages, we may be unable to verify your account or deliver
              security codes, which may prevent you from signing in to the Services.
            </p>
            <p>
              No mobile information will be shared with third parties or affiliates for marketing or
              promotional purposes.
            </p>
          </Section>

          <Section id="bookings" title="6. Bookings, Payments, and Fees">
            <h3>6.1 Booking</h3>
            <p>
              Customers may request Provider Services through the Services. A booking is confirmed
              when the Service Provider accepts the request. Prices, availability, and service
              descriptions are set by Service Providers, not by Ewà.
            </p>
            <h3>6.2 Payment</h3>
            <p>
              Customers authorize Ewà, through our third-party payment processor, to charge the
              payment method on file for the total amount of the booking, including any applicable
              service fees, taxes, and gratuity.
            </p>
            <p>
              Payment card details are collected and stored by our PCI-compliant third-party payment
              processor. Ewà does not store full payment card numbers or security codes on its own
              systems.
            </p>
            <h3>6.3 Fees</h3>
            <p>
              Ewà charges a service fee for use of the platform. Applicable fees are disclosed
              before a booking is confirmed. We may change our fees at any time, with changes taking
              effect for bookings made after the change is posted.
            </p>
            <h3>6.4 Service Provider Payouts</h3>
            <p>
              Ewà remits payment to Service Providers, less applicable fees, according to the payout
              schedule described in the Services. Service Providers are solely responsible for
              reporting and paying all taxes arising from their earnings.
            </p>
          </Section>

          <Section id="cancellations" title="7. Cancellations, Refunds, and No-Shows">
            <p>
              Cancellation and refund terms are disclosed at the time of booking and may vary by
              Service Provider.
            </p>
            <ul>
              <li>
                Customers who cancel outside the applicable cancellation window may receive a refund
                as described at booking.
              </li>
              <li>
                Customers who cancel within the cancellation window, or who fail to appear, may be
                charged a cancellation fee.
              </li>
              <li>
                If a Service Provider cancels or fails to appear, the Customer will receive a full
                refund of amounts charged.
              </li>
            </ul>
            <p>
              Refund disputes should be raised through the Services. Ewà may, at its discretion,
              issue refunds or credits to resolve disputes, but is not obligated to do so.
            </p>
          </Section>

          <Section id="provider-obligations" title="8. Service Provider Obligations">
            <p>
              If you use the Services as a Service Provider, you represent and warrant that you:
            </p>
            <ul>
              <li>
                Hold and will maintain all licenses, certifications, registrations, and permits
                required to lawfully perform your Provider Services in the jurisdictions where you
                operate;
              </li>
              <li>
                Will comply with all applicable health, safety, sanitation, and licensing laws and
                regulations;
              </li>
              <li>
                Will maintain any insurance required by law or reasonably appropriate to your
                Provider Services;
              </li>
              <li>Will perform Provider Services in a professional, safe, and competent manner;</li>
              <li>
                Consent to identity verification and background screening as a condition of using
                the Services; and
              </li>
              <li>Are solely responsible for your own tools, products, supplies, and equipment.</li>
            </ul>
            <p>
              You are solely responsible for the Provider Services you perform and for any injury,
              damage, or loss arising from them.
            </p>
          </Section>

          <Section id="customer-obligations" title="9. Customer Obligations">
            <p>If you use the Services as a Customer, you agree to:</p>
            <ul>
              <li>
                Provide accurate booking details, including location and service requirements;
              </li>
              <li>
                Disclose any allergies, sensitivities, skin conditions, or medical considerations
                relevant to the Provider Services before they are performed;
              </li>
              <li>
                Provide a safe and lawful environment where Provider Services are performed at your
                location;
              </li>
              <li>Treat Service Providers with respect; and</li>
              <li>Pay all amounts due for confirmed bookings.</li>
            </ul>
          </Section>

          <Section id="user-content" title="10. User Content and Reviews">
            <p>
              You may submit content to the Services, including photographs, profile information,
              and reviews ("User Content"). You retain ownership of your User Content.
            </p>
            <p>
              By submitting User Content, you grant Ewà a worldwide, non-exclusive, royalty-free,
              transferable, sublicensable license to use, host, store, reproduce, modify, display,
              and distribute that content in connection with operating and promoting the Services.
            </p>
            <p>
              You represent that you own or have the necessary rights to your User Content and that
              it does not infringe any third-party rights.
            </p>
            <p>
              Reviews must reflect genuine, first-hand experience. We may remove User Content that
              violates these Terms, but we do not undertake to review all content and are not
              responsible for User Content.
            </p>
          </Section>

          <Section id="prohibited" title="11. Prohibited Conduct">
            <p>You agree not to:</p>
            <ul>
              <li>
                Use the Services for any unlawful purpose or in violation of any applicable law;
              </li>
              <li>Arrange payment outside the Services in order to avoid fees;</li>
              <li>
                Impersonate any person or misrepresent your identity, qualifications, or
                affiliation;
              </li>
              <li>Harass, threaten, discriminate against, or harm any other User;</li>
              <li>Request or perform any service of a sexual nature;</li>
              <li>Post false, misleading, defamatory, or fraudulent content;</li>
              <li>
                Scrape, crawl, reverse engineer, or attempt to gain unauthorized access to the
                Services;
              </li>
              <li>
                Introduce malware or interfere with the operation or security of the Services; or
              </li>
              <li>Use the Services to send unsolicited commercial messages.</li>
            </ul>
            <p>
              Violation may result in immediate suspension or termination of your account and
              referral to law enforcement.
            </p>
          </Section>

          <Section id="safety" title="12. Safety and Assumption of Risk">
            <p>
              Ewà performs identity verification and background screening on Service Providers, but
              we do not guarantee the conduct, skill, qualifications, or safety of any User.
              Screening has inherent limitations and does not guarantee that a person poses no risk.
            </p>
            <p>
              You are responsible for exercising your own judgment when interacting with other
              Users. You use the Services and receive or perform Provider Services at your own risk.
            </p>
            <p>
              Beauty and grooming services carry inherent risks, including allergic reaction, skin
              irritation, chemical burns, and injury. You assume these risks.
            </p>
          </Section>

          <Section id="ip" title="13. Intellectual Property">
            <p>
              The Services, including all software, text, graphics, logos, and the Ewà name and
              marks, are owned by Ewà or its licensors and are protected by intellectual property
              laws. Subject to these Terms, we grant you a limited, revocable, non-exclusive,
              non-transferable license to use the Services for their intended purpose. All rights
              not expressly granted are reserved.
            </p>
          </Section>

          <Section id="third-party" title="14. Third-Party Services">
            <p>
              The Services may integrate or link to third-party services, including mapping, payment
              processing, and messaging providers. We are not responsible for third-party services,
              their content, or their practices. Your use of them is governed by their own terms.
            </p>
          </Section>

          <Section id="warranties" title="15. Disclaimer of Warranties">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE SERVICES ARE PROVIDED "AS IS" AND "AS
              AVAILABLE," WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING WARRANTIES
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, AND NON-INFRINGEMENT.
            </p>
            <p>
              WE DO NOT WARRANT THAT THE SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, OR
              THAT ANY PROVIDER SERVICES WILL MEET YOUR EXPECTATIONS.
            </p>
          </Section>

          <Section id="liability" title="16. Limitation of Liability">
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, EWÀ AND ITS OFFICERS, DIRECTORS, EMPLOYEES,
              AND AGENTS WILL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL,
              EXEMPLARY, OR PUNITIVE DAMAGES, OR FOR ANY LOSS OF PROFITS, REVENUE, DATA, OR
              GOODWILL, ARISING FROM OR RELATING TO YOUR USE OF THE SERVICES.
            </p>
            <p>
              OUR TOTAL AGGREGATE LIABILITY ARISING FROM OR RELATING TO THESE TERMS OR THE SERVICES
              WILL NOT EXCEED THE GREATER OF (A) THE TOTAL AMOUNTS YOU PAID TO EWÀ IN THE SIX (6)
              MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM, OR (B) ONE HUNDRED U.S. DOLLARS
              ($100).
            </p>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW CERTAIN LIMITATIONS, SO SOME OF THE ABOVE MAY NOT
              APPLY TO YOU.
            </p>
          </Section>

          <Section id="indemnification" title="17. Indemnification">
            <p>
              You agree to indemnify, defend, and hold harmless Ewà and its officers, directors,
              employees, and agents from any claims, damages, losses, liabilities, and expenses
              (including reasonable attorneys' fees) arising from or relating to: (i) your use of
              the Services; (ii) your User Content; (iii) your violation of these Terms or any
              applicable law; (iv) your Provider Services, if you are a Service Provider; or (v) any
              dispute between you and another User.
            </p>
          </Section>

          <Section id="disputes" title="18. Dispute Resolution and Arbitration">
            <p>PLEASE READ THIS SECTION CAREFULLY. IT AFFECTS YOUR LEGAL RIGHTS.</p>
            <h3>18.1 Informal Resolution</h3>
            <p>
              Before initiating formal proceedings, you agree to contact us at support@ewatheapp.com
              and attempt to resolve the dispute informally for at least thirty (30) days.
            </p>
            <h3>18.2 Binding Arbitration</h3>
            <p>
              If informal resolution fails, any dispute arising from or relating to these Terms or
              the Services will be resolved by binding individual arbitration administered by the
              American Arbitration Association under its Consumer Arbitration Rules, rather than in
              court, except that either party may bring an individual claim in small claims court.
            </p>
            <h3>18.3 Class Action Waiver</h3>
            <p>
              YOU AND EWÀ AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL
              CAPACITY, AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY CLASS OR REPRESENTATIVE
              PROCEEDING.
            </p>
            <h3>18.4 Opt-Out</h3>
            <p>
              You may opt out of this arbitration agreement by sending written notice to
              support@ewatheapp.com within thirty (30) days of first accepting these Terms. Opting
              out will not affect any other part of these Terms.
            </p>
          </Section>

          <Section id="law" title="19. Governing Law">
            <p>
              These Terms are governed by the laws of the State of New York, without regard to its
              conflict of laws principles. Subject to Section 18, the exclusive venue for any
              dispute is the state and federal courts located in New York County, New York.
            </p>
          </Section>

          <Section id="termination" title="20. Termination">
            <p>
              You may terminate your account at any time through the Services or by contacting us.
              We may suspend or terminate your access at any time, with or without notice, for any
              reason, including violation of these Terms.
            </p>
            <p>
              Upon termination, your right to use the Services ceases immediately. Sections 10, 13,
              15, 16, 17, 18, and 19 survive termination.
            </p>
          </Section>

          <Section id="general" title="21. General">
            <p>
              <strong>Severability.</strong> If any provision is held unenforceable, the remaining
              provisions remain in full force.
            </p>
            <p>
              <strong>No Waiver.</strong> Our failure to enforce any provision is not a waiver of
              it.
            </p>
            <p>
              <strong>Assignment.</strong> You may not assign these Terms without our written
              consent. We may assign them freely.
            </p>
            <p>
              <strong>Entire Agreement.</strong> These Terms and the Privacy Policy constitute the
              entire agreement between you and Ewà regarding the Services.
            </p>
            <p>
              <strong>Force Majeure.</strong> We are not liable for failures caused by events beyond
              our reasonable control.
            </p>
          </Section>

          <Section id="contact" title="22. Contact Us">
            <p>Questions about these Terms:</p>
            <ul>
              <li>
                <strong>Email:</strong> support@ewatheapp.com
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer variant="landing" />
    </div>
  );
}
