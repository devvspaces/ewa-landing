import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export const metadata: Metadata = {
  title: "SMS Opt-In Disclosure — EWÁ",
  description:
    "How EWÁ collects consent to send one-time SMS verification codes, including the in-app opt-in screen, message samples, and opt-out instructions.",
}

export default function SmsOptIn() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-42">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-4" style={{ color: "#ED8936" }}>
            SMS Opt-In Disclosure
          </h1>
          <p className="text-gray-700 leading-relaxed mb-8">
            This page documents how EWÁ collects consent before sending
            one-time verification codes by text message, and how to stop
            receiving them.
          </p>

          <div className="space-y-8">
            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                WHAT WE SEND
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                EWÁ sends one type of text message: a one-time verification
                code used to confirm your phone number when you create an
                account or sign in. These are transactional security messages.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>
                  We do not send marketing or promotional text messages, and we
                  never share mobile numbers with third parties for marketing
                  purposes.
                </strong>
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                HOW CONSENT IS COLLECTED
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Account registration takes place inside the EWÁ mobile app for
                iOS and Android. We do not collect phone numbers through this
                website.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                On the registration screen, directly beneath the mobile number
                field, there is a checkbox that is unchecked by default.
                Registration cannot be completed unless the user checks it.
              </p>

              <div className="bg-[#F3ECE5] border-l-4 border-[#7A4B2A] p-6 mb-4">
                <span className="block text-xs uppercase tracking-wide text-[#7A4B2A] font-bold mb-2">
                  Checkbox text shown in the app
                </span>
                <p className="italic text-gray-800">
                  “I agree to receive a one-time verification code by SMS from
                  EWÁ. Msg &amp; data rates may apply.”
                </p>
              </div>

              <figure className="mb-6">
                <img
                  className="block max-w-[340px] w-full mx-auto border border-gray-200 rounded-xl bg-white"
                  src="/images/ewa-registration-optin.jpeg"
                  alt="EWÁ mobile app registration screen showing the mobile number field with an unchecked SMS consent checkbox directly below it."
                />
                <figcaption className="text-center text-sm text-gray-500 mt-3">
                  EWÁ app registration screen, showing the unchecked consent
                  checkbox.
                </figcaption>
              </figure>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                SAMPLE MESSAGE
              </h2>
              <div className="bg-white border border-gray-200 rounded-xl p-5 font-mono text-sm leading-relaxed">
                <span className="block text-xs uppercase tracking-wide text-gray-500 mb-2">
                  From EWÁ
                </span>
                Your EWÁ verification code is 123456. It expires in 10 minutes.
                Do not share this code.
              </div>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                MESSAGE TERMS
              </h2>
              <table className="w-full border-collapse text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Program
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      EWÁ account verification codes
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Frequency
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      Varies by account activity. A code is sent only when you
                      request one by signing in or registering.
                    </td>
                  </tr>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Cost
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      Message and data rates may apply. Charges come from your
                      mobile carrier, not from EWÁ.
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Carriers
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      Carriers are not liable for delayed or undelivered
                      messages.
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                GETTING HELP AND OPTING OUT
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reply{" "}
                <kbd className="font-mono bg-[#F3ECE5] border border-gray-200 rounded px-1.5 py-0.5 text-sm">
                  HELP
                </kbd>{" "}
                to any message for assistance, or email{" "}
                <a
                  href="mailto:support@ewatheapp.com"
                  className="text-orange-700 hover:underline"
                >
                  support@ewatheapp.com
                </a>
                .
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Reply{" "}
                <kbd className="font-mono bg-[#F3ECE5] border border-gray-200 rounded px-1.5 py-0.5 text-sm">
                  STOP
                </kbd>{" "}
                at any time to stop receiving messages. You will get one
                confirmation message and nothing after that.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Because verification codes are how EWÁ confirms your identity,
                opting out may prevent you from signing in to your account.
              </p>
            </section>

            <section>
              <h2
                className="text-2xl font-bold mb-4"
                style={{ color: "#ED8936" }}
              >
                CONTACT
              </h2>
              <table className="w-full border-collapse text-left">
                <tbody>
                  <tr className="border-b border-gray-200">
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Email
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      <a
                        href="mailto:support@ewatheapp.com"
                        className="text-orange-700 hover:underline"
                      >
                        support@ewatheapp.com
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <th className="py-3 pr-4 w-32 text-xs uppercase tracking-wide text-gray-500 font-bold align-top">
                      Phone
                    </th>
                    <td className="py-3 text-gray-700 align-top">
                      862-303-3336
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>

            <div className="border-t-2 border-gray-900 mt-16 pt-6 text-sm text-gray-500">
              <div className="mb-4">
                <a
                  href="/privacy"
                  className="text-orange-700 hover:underline mr-4 whitespace-nowrap"
                >
                  Privacy Policy
                </a>
                <a
                  href="/terms"
                  className="text-orange-700 hover:underline mr-4 whitespace-nowrap"
                >
                  Terms &amp; Conditions
                </a>
                <a
                  href="/"
                  className="text-orange-700 hover:underline whitespace-nowrap"
                >
                  Home
                </a>
              </div>
              <p>Last updated 24 August 2026 &nbsp;·&nbsp; © 2026 EWÁ</p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
