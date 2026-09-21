import type { ReactNode } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import { LegalSection as Section } from "../components/marketing/LegalSection";

export const Route = createFileRoute("/sms-opt-in")({
  head: () => ({
    meta: [
      { title: "SMS Opt-In Disclosure — Ewà" },
      {
        name: "description",
        content:
          "How Ewà collects consent to send one-time SMS verification codes, including the in-app opt-in screen, message samples, and opt-out instructions.",
      },
    ],
  }),
  component: SmsOptIn,
});

function SmsOptIn() {
  return (
    <div className="min-h-screen bg-paper text-midnight">
      <Nav variant="landing" />
      <main className="mx-auto max-w-[760px] px-6 py-14">
        <h1 className="font-display text-[32px] font-medium leading-tight text-midnight">
          SMS Opt-In Disclosure
        </h1>
        <p className="mt-4 text-[15px] leading-relaxed text-midnight/70">
          This page documents how Ewà collects consent before sending one-time verification codes by
          text message, and how to stop receiving them.
        </p>

        <div className="mt-10 space-y-10">
          <Section id="what-we-send" title="What We Send">
            <p>
              Ewà sends one type of text message: a one-time verification code used to confirm your
              phone number when you create an account or sign in. These are transactional security
              messages.
            </p>
            <p>
              <strong>
                We do not send marketing or promotional text messages, and we never share mobile
                numbers with third parties for marketing purposes.
              </strong>
            </p>
          </Section>

          <Section id="how-consent" title="How Consent Is Collected">
            <p>
              Account registration takes place inside the Ewà mobile app for iOS and Android. We do
              not collect phone numbers through this website.
            </p>
            <p>
              On the registration screen, directly beneath the mobile number field, there is a
              checkbox that is unchecked by default. Registration cannot be completed unless the
              user checks it.
            </p>
            <div className="rounded-xl border-l-4 border-orange bg-white p-6">
              <span className="block text-xs font-bold uppercase tracking-wide text-orange">
                Checkbox text shown in the app
              </span>
              <p className="mt-2 italic text-midnight">
                "I agree to receive a one-time verification code by SMS from Ewà. Msg &amp; data
                rates may apply."
              </p>
            </div>
            <figure>
              <img
                className="mx-auto block w-full max-w-[340px] rounded-2xl border border-midnight/[.12] bg-white shadow-xs"
                src="/images/1.jpeg"
                alt="Ewà mobile app registration screen showing the mobile number field with an unchecked SMS consent checkbox directly below it."
              />
              <figcaption className="mt-3 text-center text-sm text-midnight/50">
                Ewà app registration screen, showing the unchecked consent checkbox.
              </figcaption>
            </figure>
          </Section>

          <Section id="sample-message" title="Sample Message">
            <div className="rounded-xl border border-midnight/[.12] bg-white p-5">
              <span className="block text-xs font-bold uppercase tracking-wide text-midnight/50">
                From Ewà
              </span>
              <p className="mt-2 font-mono text-sm leading-relaxed text-midnight">
                Your Ewà verification code is 123456. It expires in 10 minutes. Do not share this
                code.
              </p>
            </div>
          </Section>

          <Section id="message-terms" title="Message Terms">
            <div className="overflow-hidden rounded-xl border border-midnight/[.12] bg-white">
              <TermRow label="Program" value="Ewà account verification codes" />
              <TermRow
                label="Frequency"
                value="Varies by account activity. A code is sent only when you request one by signing in or registering."
              />
              <TermRow
                label="Cost"
                value="Message and data rates may apply. Charges come from your mobile carrier, not from Ewà."
              />
              <TermRow
                label="Carriers"
                value="Carriers are not liable for delayed or undelivered messages."
              />
            </div>
          </Section>

          <Section id="help-opt-out" title="Getting Help and Opting Out">
            <p>
              Reply{" "}
              <code className="rounded border border-midnight/[.12] bg-white px-1.5 py-0.5 font-mono text-sm">
                HELP
              </code>{" "}
              to any message for assistance, or email{" "}
              <a href="mailto:support@ewatheapp.com" className="text-orange hover:underline">
                support@ewatheapp.com
              </a>
              .
            </p>
            <p>
              Reply{" "}
              <code className="rounded border border-midnight/[.12] bg-white px-1.5 py-0.5 font-mono text-sm">
                STOP
              </code>{" "}
              at any time to stop receiving messages. You will get one confirmation message and
              nothing after that.
            </p>
            <p>
              Because verification codes are how Ewà confirms your identity, opting out may prevent
              you from signing in to your account.
            </p>
          </Section>

          <Section id="contact" title="Contact">
            <div className="overflow-hidden rounded-xl border border-midnight/[.12] bg-white">
              <TermRow
                label="Email"
                value={
                  <a href="mailto:support@ewatheapp.com" className="text-orange hover:underline">
                    support@ewatheapp.com
                  </a>
                }
              />
              <TermRow label="Phone" value="862-303-3336" />
            </div>
          </Section>
        </div>

        <div className="mt-16 border-t-2 border-midnight pt-6 text-sm text-midnight/50">
          <div className="flex flex-wrap gap-4">
            <Link to="/privacy" className="text-orange hover:underline">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-orange hover:underline">
              Terms &amp; Conditions
            </Link>
            <Link to="/" className="text-orange hover:underline">
              Home
            </Link>
          </div>
          <p className="mt-4">Last updated 24 August 2026 · © 2026 Ewà</p>
        </div>
      </main>
      <Footer variant="landing" />
    </div>
  );
}

function TermRow({ label, value }: { label: string; value: ReactNode }) {
  return (
    <div className="flex gap-4 border-b border-midnight/[.08] px-5 py-3 last:border-b-0">
      <span className="w-32 shrink-0 text-xs font-bold uppercase tracking-wide text-midnight/50">
        {label}
      </span>
      <span className="text-[15px] text-midnight/80">{value}</span>
    </div>
  );
}
