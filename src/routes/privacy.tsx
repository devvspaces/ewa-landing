import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "../components/marketing/Nav";
import { Footer } from "../components/marketing/Footer";
import { LegalSection as Section } from "../components/marketing/LegalSection";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Ewà" },
      {
        name: "description",
        content:
          "How Ewà collects, uses, and protects your information, including your choices around SMS verification messages and marketing communications.",
      },
    ],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <div className="min-h-screen bg-paper text-midnight">
      <Nav variant="landing" />
      <main className="mx-auto max-w-[760px] px-6 py-14">
        <h1 className="font-display text-[32px] font-medium leading-tight text-midnight">
          Ewà Privacy Policy
        </h1>

        <div className="mt-8 rounded-2xl border border-midnight/[.08] bg-white p-6">
          <h2 className="text-sm font-bold uppercase tracking-[.12em] text-orange">
            Table of contents
          </h2>
          <ul className="mt-3 grid list-disc gap-1.5 pl-5 text-sm text-midnight/70">
            <li>
              <a href="#information-collection" className="hover:text-orange">
                Information We Collect About You
              </a>
            </li>
            <li>
              <a href="#how-we-use" className="hover:text-orange">
                How We Use Your Information
              </a>
            </li>
            <li>
              <a href="#links-to-websites" className="hover:text-orange">
                Links to Other Websites
              </a>
            </li>
            <li>
              <a href="#information-security" className="hover:text-orange">
                Information Security
              </a>
            </li>
            <li>
              <a href="#data-retention" className="hover:text-orange">
                Data Retention
              </a>
            </li>
            <li>
              <a href="#your-choices" className="hover:text-orange">
                Your Choices
              </a>
            </li>
            <li>
              <a href="#accessing-information" className="hover:text-orange">
                Accessing, Correcting, or Deleting Your Information
              </a>
            </li>
            <li>
              <a href="#geographic-location" className="hover:text-orange">
                Geographic Location of Data Storage and Processing
              </a>
            </li>
            <li>
              <a href="#childrens-information" className="hover:text-orange">
                Children's Information
              </a>
            </li>
            <li>
              <a href="#changes-to-policy" className="hover:text-orange">
                Changes to This Privacy Policy
              </a>
            </li>
            <li>
              <a href="#contact-us" className="hover:text-orange">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 space-y-10">
          <section>
            <div className="space-y-4 text-[15px] leading-relaxed text-midnight/70">
              <p>
                Ewà (hereinafter referred to as "us," "we," "our," or "Company") has created this
                Privacy Policy to apply to all users of this application and all digital assets
                contained or offered therein (collectively, our "Services"). This Privacy Policy
                describes, among other things, the types of information we collect from users when
                you use our Services, how we use it, and how you can access your information.
              </p>
              <p>
                This Privacy Policy is integrated into our Terms &amp; Conditions of Use ("Terms
                &amp; Conditions").
              </p>
              <p>
                By using the Services and providing us with your personal Information (defined
                below), you agree to the practices described in this Privacy Policy and Terms &amp;
                Conditions and to the updates to these policies posted here from time to time.
              </p>
              <p>
                Our Services connect customers ("Customers") with Service Providers ("Service
                Providers") (collectively, "Users"). We may therefore share Customer information
                with Service Providers (and vice versa) to help with this connection, and in
                accordance with this Privacy Policy. Company does not provide Service Provider
                services.
              </p>
            </div>
          </section>

          <Section id="information-collection" title="Information We Collect About You">
            <p>
              We may collect the following types of information about you which are described in
              more detail below: (A) information you provide to us, (B) information we may
              automatically collect, and (C) information we may receive from third parties. All of
              the information listed in (A)-(C) above, are detailed below, and hereinafter referred
              to as "Information."
            </p>
            <h3>Information You Provide to Us</h3>
            <p>
              In using our Services, you may provide us with Information, including, without
              limitation, the Information listed below. The Information you provide to us varies
              based on whether you are a Customer or Service Provider:
            </p>
            <p>
              <strong>If you are a Customer:</strong>
            </p>
            <ul>
              <li>
                Contact information such as name, email address, mobile phone number, and home
                address;
              </li>
              <li>Demographic information such as date of birth and gender;</li>
              <li>
                Identification information such as your driver's license (or other government-issued
                ID) information or social security number;
              </li>
              <li>Photo that you may decide to upload;</li>
              <li>
                Financial information such as credit card number, name, CVV code, and date of
                expiration; and
              </li>
              <li>
                Additional information as otherwise described to you at the point of collection or
                pursuant to your consent.
              </li>
            </ul>
            <p>
              <strong>If you are a Service Provider:</strong>
            </p>
            <ul>
              <li>
                Contact information such as name, email address, mobile phone number, and home
                address;
              </li>
              <li>Demographic information such as date of birth and gender;</li>
              <li>
                Identification information such as your driver's license (or other government-issued
                ID) information or social security number;
              </li>
              <li>Photo that you may decide to upload;</li>
              <li>Financial information such as bank account number and routing number; and</li>
              <li>
                Additional information as otherwise described to you at the point of collection or
                pursuant to your consent.
              </li>
            </ul>
            <h3>Information We May Automatically Collect About You</h3>
            <p>
              Our Services may automatically collect certain Information about you. This Information
              is used by Ewà for the operation of the Services, to maintain quality of the Services,
              and to provide general statistics regarding use of the Services. At this time, we
              collect only location Information.
            </p>
            <h3>Information We May Receive from Third Parties</h3>
            <p>
              We may collect additional Information about you from third-party websites, including
              Google Maps or Apple Maps and/or sources providing publicly available information
              (e.g., from the U.S. postal service) to help us provide services to you, help prevent
              fraud, and for marketing and advertising purposes.
            </p>
            <p>
              This Privacy Policy only applies to Information collected by our Services. We are not
              responsible for the privacy and security practices of those other applications or the
              Information they may collect (which may include IP address). You should contact such
              third parties directly to determine their respective privacy policies. Links to any
              other applications or content do not constitute or imply an endorsement or
              recommendation by us of the linked application and/or content.
            </p>
          </Section>

          <Section id="how-we-use" title="How We Use Your Information">
            <h3>Use and Purpose of Processing Your Information</h3>
            <p>
              We use and process your Information for things that may include, but are not limited
              to, the following:
            </p>
            <ul>
              <li>To provide you with the Services and information you request;</li>
              <li>To verify your identity;</li>
              <li>
                To verify your mobile phone number by sending a one-time verification code (OTP) by
                SMS text message;
              </li>
              <li>To verify your ability to participate in the Services;</li>
              <li>To perform background checks;</li>
              <li>To process your financial transactions made on the Services;</li>
              <li>To facilitate connections between Service Providers and Customers;</li>
              <li>To respond to your inquiries and questions and provide customer service;</li>
              <li>
                To send you transactional and account-related notifications, including booking
                confirmations and security alerts;
              </li>
              <li>
                For general or targeted marketing and advertising purposes, including sending you
                promotional material or special offers on our behalf or on behalf of our marketing
                partners and/or their respective affiliates and subsidiaries and other third
                parties, provided that you have not already opted out of receiving such
                communications. Mobile phone numbers and SMS opt-in data are expressly excluded from
                this provision and are never shared with marketing partners, affiliates, or any
                third parties;
              </li>
              <li>To fulfill contracts we have with you;</li>
              <li>
                To manage, improve and foster relationships with third-party vendors, including
                vendors, suppliers, and parents, affiliates, subsidiaries, and business partners;
              </li>
              <li>
                To maintain, improve, customize, or administer the Services, perform business
                analyses, or other internal purposes to improve the quality of our business, the
                Services, resolve technical problems, or improve security or develop other products
                and services;
              </li>
              <li>To comply with our Terms &amp; Conditions;</li>
              <li>For analytics for business purposes and business intelligence;</li>
              <li>
                To comply with any applicable laws and regulations and respond to lawful requests;
                and/or
              </li>
              <li>
                For any other purposes disclosed to you at the time we collect your Information
                and/or pursuant to your consent.
              </li>
            </ul>
            <p>
              We may also use Information that has been de-identified and/or aggregated for purposes
              not otherwise listed above.
            </p>
            <h3>Sharing Your Information</h3>
            <p>
              We may share your Information as set forth in the Privacy Policy and in the following
              circumstances:
            </p>
            <ul>
              <li>
                <strong>Mobile Information and SMS Data.</strong> No mobile information will be
                shared with third parties or affiliates for marketing or promotional purposes. All
                other categories exclude text messaging originator opt-in data and consent; this
                information will not be shared with any third parties.
              </li>
              <li>
                <strong>Your Mobile Phone Number.</strong> Your mobile phone number is used solely
                to deliver account verification codes and transactional messages relating to your
                use of the Services. We share your mobile number only with the licensed
                telecommunications providers required to deliver those messages to your device, and
                those providers are contractually prohibited from using it for any other purpose.
              </li>
              <li>
                <strong>Third-Party Vendors.</strong> We may share your Information with third-party
                vendors that perform certain functions or services on our behalf (such as to host
                the Services, manage databases, perform background checks, process credit card
                payments, provide customer service, or send communications for us). These
                third-party vendors are authorized to use your Information only as necessary to
                provide these services to us. In some instances, we may aggregate Information we
                collect so third parties do not have access to your identifiable Information to
                identify you individually.
              </li>
              <li>
                <strong>Disclosure to Users.</strong> The Services allow Customers the ability to
                choose Service Providers. Accordingly, the Services make Customer and Service
                Provider information (e.g., profiles, portfolios, ratings, and locations) available
                to any User using the Services to help facilitate bookings. This Policy governs how
                Ewà uses your Information. We are not responsible for how a User may use your
                Information.
              </li>
              <li>
                <strong>Reviews.</strong> If a Customer leaves a review for a Service Provider, we
                may post that review and the Customer's username on the Services.
              </li>
              <li>
                <strong>Disclosure of Information for Legal and Administrative Reasons.</strong> We
                may disclose your Information without notice: (i) when required by law or to comply
                with a court order, subpoena, search warrant, or other legal process; (ii) to
                cooperate or undertake an internal or external investigation or audit; (iii) to
                comply with legal, regulatory or administrative requirements of governmental
                authorities; (iv) to protect and defend the rights, property, or safety of us, our
                subsidiaries and affiliates and any of their officers, directors, employees,
                attorneys, agents, contractors, and partners, and the application Service Users; (v)
                to enforce or apply our Terms &amp; Conditions; and (vi) to verify the identity of
                the User of our Services.
              </li>
              <li>
                <strong>Business Transfers.</strong> Your Information may be transferred, sold, or
                otherwise conveyed ("Conveyed") to a third party where we: (i) merge with or are
                acquired by another business entity; (ii) sell all or substantially all of our
                assets; (iii) are adjudicated bankrupt; or (iv) are liquidated or otherwise
                reorganize. You agree to any and all such Conveyances of your Information.
              </li>
              <li>
                <strong>De-Identified or Aggregated Data.</strong> We may share your Information on
                an aggregated basis for any purpose in which your specific personal Information is
                blinded, masked, or otherwise not identifiable.
              </li>
              <li>
                <strong>With Your Consent.</strong> We may share Information consistent with this
                Privacy Policy with your consent.
              </li>
            </ul>
            <p>
              Except as provided in this Privacy Policy, we will not sell, exchange, trade, or
              disclose your Information we have collected without your consent.
            </p>
          </Section>

          <Section id="links-to-websites" title="Links to Other Websites">
            <p>
              Our Services may contain links to other applications or services that are not owned or
              controlled by us, including links to Google Maps and Apple Maps, or may redirect you
              off our application away from our Services.
            </p>
            <p>
              This Privacy Policy only applies to Information collected by our Services. We are not
              responsible for the privacy and security practices of those other applications or the
              Information they may collect (which may include IP address). You should contact such
              third parties directly to determine their respective privacy policies. Links to any
              other applications or content do not constitute or imply an endorsement or
              recommendation by us of the linked application and/or content.
            </p>
          </Section>

          <Section id="information-security" title="Information Security">
            <p>
              We use commercially reasonable measures to provide our Services. However, you should
              assume that no data transmitted over the Internet or stored or maintained by us or our
              third-party vendors can be 100% secure. Therefore, we do not promise or guarantee, and
              you should not expect, that your Information or private communications will always
              remain private or secure. We do not guarantee that your Information will not be
              misused by third parties. We are not responsible for the circumvention of any privacy
              settings or security features. You agree that we will not have any liability for
              misuse, access, acquisition, deletion, or disclosure of your Information.
            </p>
            <p>
              If you believe that your Information has been accessed or acquired by an unauthorized
              person, you should promptly Contact Us so that necessary measures can quickly be
              taken.
            </p>
          </Section>

          <Section id="data-retention" title="Data Retention">
            <p>
              We will retain your Information for as long as needed to provide you Services. If you
              wish to request that we no longer use your Information to provide you Services, please
              contact us at support@ewatheapp.com. We will retain and use your Information as
              necessary to comply with our legal obligations, resolve disputes, and enforce our
              agreements. In accordance with our routine record keeping, we may delete certain
              records that contain Information you have submitted to us. We are under no obligation
              to store such Information indefinitely and disclaim any liability arising out of, or
              related to, the destruction of such Information.
            </p>
          </Section>

          <Section id="your-choices" title="Your Choices">
            <h3>SMS Text Messages</h3>
            <p>
              When you create an account with Ewà, we collect your mobile phone number in order to
              send you a one-time verification code (OTP) by SMS text message.
            </p>
            <p>
              Account registration takes place within the Ewà mobile application, available for iOS
              and Android. During registration, you enter your mobile phone number and must
              affirmatively check an unchecked consent checkbox reading "I agree to receive a
              one-time verification code by SMS from Ewà. Msg &amp; data rates may apply." You
              cannot complete registration without checking this box. We do not collect mobile phone
              numbers through our website.
            </p>
            <p>
              These are transactional messages required to verify and secure your account. We do not
              send marketing or promotional text messages.
            </p>
            <ul>
              <li>Message frequency varies based on your account activity.</li>
              <li>Message and data rates may apply.</li>
              <li>Reply HELP for help, or contact us at support@ewatheapp.com.</li>
              <li>
                Reply STOP to unsubscribe at any time. After replying STOP, you will receive one
                confirmation message and no further text messages. Please note that if you opt out
                of SMS messages, we may be unable to verify your account or deliver security codes,
                which may prevent you from signing in.
              </li>
            </ul>
            <p>
              Your mobile phone number and SMS consent data are never shared with third parties or
              affiliates for marketing or promotional purposes.
            </p>
            <ul>
              <li>
                <strong>Email.</strong> By using our Services, you agree that we may contact you by
                email as set forth herein. If you do not want to receive marketing and promotional
                emails from us, you may click on the "unsubscribe" link in the email to unsubscribe
                and opt out of marketing email communications or Contact Us.
              </li>
              <li>
                <strong>Mobile Push Notifications.</strong> By using our Services, you agree that we
                may contact you by sending push notifications to your phone. You can use the
                settings on your mobile device to enable or turn off mobile push notifications from
                us or Contact Us.
              </li>
              <li>
                <strong>Marketing Communications.</strong> If you do not want to receive marketing
                and promotional emails from us, you may click on the "unsubscribe" link in the email
                to unsubscribe and opt out of marketing email communications or Contact Us for more
                information.
              </li>
              <li>
                <strong>Opting Out of Direct Marketing by Third Parties.</strong> To exercise
                choices regarding the marketing information you receive, you may also review the
                following links:
                <ul>
                  <li>
                    You may opt out of tracking and receiving tailored advertisements on your mobile
                    device by some mobile advertising companies and other similar entities by
                    downloading the App Choices app at www.aboutads.info/appchoices.
                  </li>
                  <li>
                    You may opt out of receiving permissible targeted advertisements by using the
                    NAI Opt-out tool available at http://optout.networkadvertising.org/?c=1 or
                    visiting About Ads at http://optout.aboutads.info.
                  </li>
                  <li>
                    You can opt out of having your activity on our Services made available to Google
                    Analytics by installing the Google Analytics opt-out add-on for your web browser
                    by visiting: https://tools.google.com/dlpage/gaoptout for your web browser.
                  </li>
                </ul>
              </li>
            </ul>
          </Section>

          <Section
            id="accessing-information"
            title="Accessing, Correcting, or Deleting Your Information"
          >
            <p>
              To the extent certain state laws provide users with data subject rights, such as the
              right to opt out, access, or delete their personal Information, those rights may be
              honored by the Company following proper authentication and verification. Please see
              the Contact Us section below for more information.
            </p>
          </Section>

          <Section
            id="geographic-location"
            title="Geographic Location of Data Storage and Processing"
          >
            <p>
              Our Services are targeted to individuals located in the United States. As such, the
              Services collect Information and process and store that Information in databases
              located in the United States. If you are visiting the Services from a country outside
              the United States, you should be aware that you may transfer personally identifiable
              Information about yourself to the United States, and that the data protection laws of
              the United States may not be as comprehensive as those in your own country. By
              visiting the Services and submitting any personally identifiable Information you
              consent to the transfer of such personally identifiable Information to the United
              States.
            </p>
          </Section>

          <Section id="childrens-information" title="Children's Information">
            <p>
              The Services are intended only for Users over the age of sixteen (16). We do not
              knowingly collect Information from anyone under the age of sixteen (16). If we become
              aware that a User is under the age of sixteen (16) and has provided us with
              Information, we will take steps to delete such Information from our records. Contact
              us if you believe that we have mistakenly or unintentionally collected Information
              from a User under the age of sixteen (16).
            </p>
          </Section>

          <Section id="changes-to-policy" title="Changes to This Privacy Policy">
            <p>
              We reserve the right to change, modify or amend this Privacy Policy at any time to
              reflect changes in our products and service offerings, accommodate new technologies,
              regulatory requirements, or other purposes. If we modify our Privacy Policy, we will
              update the "Effective Date" and such changes will be effective upon posting. It is
              your obligation to check our current Privacy Policy for any changes.
            </p>
          </Section>

          <Section id="contact-us" title="Contact Us">
            <p>
              If you have any questions about this Privacy Policy or the Information we have
              collected about you, please contact us at the following:
            </p>
            <ul>
              <li>
                <strong>Email us:</strong> support@ewatheapp.com
              </li>
            </ul>
          </Section>
        </div>
      </main>
      <Footer variant="landing" />
    </div>
  );
}
