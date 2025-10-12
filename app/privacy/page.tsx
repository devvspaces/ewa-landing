import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { FeaturesGrid } from "@/components/features-grid"
import { EwaBizSection } from "@/components/ewa-biz-section"
import { EwaAppSection } from "@/components/ewa-app-section"
import { AppFeatures } from "@/components/app-features"
import { Testimonials } from "@/components/testimonials"
import { FaqSection } from "@/components/faq-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pt-24 md:pt-42">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-4xl font-bold mb-8" style={{ color: '#ED8936' }}>
            EWÀ PRIVACY POLICY
          </h1>
          
          <div className="mb-8">
            <h2 className="text-xl font-bold mb-4" style={{ color: '#ED8936' }}>
              TABLE OF CONTENTS
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><a href="#information-collection" className="text-orange-700 hover:underline text-sm">Information We Collect About You</a></li>
              <li><a href="#how-we-use" className="text-orange-700 hover:underline text-sm">How We Use Your Information</a></li>
              <li><a href="#links-to-websites" className="text-orange-700 hover:underline text-sm">Links to Other Websites</a></li>
              <li><a href="#information-security" className="text-orange-700 hover:underline text-sm">Information Security</a></li>
              <li><a href="#data-retention" className="text-orange-700 hover:underline text-sm">Data Retention</a></li>
              <li><a href="#your-choices" className="text-orange-700 hover:underline text-sm">Your Choices</a></li>
              <li><a href="#accessing-information" className="text-orange-700 hover:underline text-sm">Accessing, Correcting, or Deleting Your Information</a></li>
              <li><a href="#geographic-location" className="text-orange-700 hover:underline text-sm">Geographic Location of Data Storage and Processing</a></li>
              <li><a href="#childrens-information" className="text-orange-700 hover:underline text-sm">Children's Information</a></li>
              <li><a href="#changes-to-policy" className="text-orange-700 hover:underline text-sm">Changes to This Privacy Policy</a></li>
              <li><a href="#contact-us" className="text-orange-700 hover:underline text-sm">Contact Us</a></li>
            </ul>
          </div>

          <div className="space-y-8">
            <section>
              <p className="text-gray-700 leading-relaxed mb-4">
                Ewà (hereinafter referred to as "us," "we," "our," or "Company") has created this Privacy Policy to apply to all users of this application and all digital assets contained or offered therein (collectively, our "Services"). This Privacy Policy describes, among other things, the types of information we collect from users when you use our Services, how we use it, and how you can access your information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy is integrated into our Terms & Conditions of Use ("Terms & Conditions").
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                By using the Services and providing us with your personal Information (defined below), you agree to the practices described in this Privacy Policy and Terms & Conditions and to the updates to these policies posted here from time to time.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services connect customers ("Customers") with Service Providers ("Service Providers") (collectively, "Users"). We may therefore share Customer information with Service Providers (and vice versa) to help with this connection, and in accordance with this Privacy Policy. Company does not provide Service Provider services.
              </p>
            </section>

            <section id="information-collection">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                INFORMATION WE COLLECT ABOUT YOU
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect the following types of information about you which are described in more detail below: (A) information you provide to us, (B) information we may automatically collect, and (C) information we may receive from third parties. All of the information listed in (A)-(C) above, are detailed below, and hereinafter referred to as "Information."
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Information You Provide to Us
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In using our Services, you may provide us with Information, including, without limitation, the Information listed below. The Information you provide to us varies based on whether you are a Customer or Service Provider:
              </p>

              <h4 className="text-lg font-medium mb-2 text-gray-800">If you are a Customer:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Contact information such as name, email address, and home address;</li>
                <li>Demographic information such as date of birth and gender;</li>
                <li>Identification information such as your driver's license (or other government-issued ID) information or social security number;</li>
                <li>Photo that you may decide to upload;</li>
                <li>Financial information such as credit card number, name, CVV code, and date of expiration; and</li>
                <li>Additional information as otherwise described to you at the point of collection or pursuant to your consent.</li>
              </ul>

              <h4 className="text-lg font-medium mb-2 text-gray-800">If you are a Service Provider:</h4>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>Contact information such as name, email address, and home address;</li>
                <li>Demographic information such as date of birth and gender;</li>
                <li>Identification information such as your driver's license (or other government-issued ID) information or social security number;</li>
                <li>Photo that you may decide to upload;</li>
                <li>Financial information such bank account number and routing number; and</li>
                <li>Additional information as otherwise described to you at the point of collection or pursuant to your consent.</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Information We May Automatically Collect About You
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services may automatically collect certain Information about you. This Information is used by Ewà for the operation of the Services, to maintain quality of the Services, and to provide general statistics regarding use of the Services. At this time, we collect only location Information.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Information We May Receive from Third Parties
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may collect additional Information about you from third-party websites, including Google Maps or Apple Maps and/or sources providing publicly available information (e.g., from the U.S. postal service) to help us provide services to you, help prevent fraud, and for marketing and advertising purposes.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy only applies to Information collected by our Services. We are not responsible for the privacy and security practices of those other applications or the Information they may collect (which may include IP address). You should contact such third parties directly to determine their respective privacy policies. Links to any other applications or content do not constitute or imply an endorsement or recommendation by us of the linked application and/or content.
              </p>
            </section>

            <section id="how-we-use">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                HOW WE USE YOUR INFORMATION
              </h2>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Use and Purpose of Processing Your Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use and process your Information for things that may include, but are not limited to, the following:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-1">
                <li>To provide you with the Services and information you request;</li>
                <li>To verify your identity;</li>
                <li>To verify your ability to participate in the Services;</li>
                <li>To perform background checks;</li>
                <li>To process your financial transactions made on the Services;</li>
                <li>To facilitate connections between Service Providers and Customers;</li>
                <li>To respond to your inquiries and questions and provide customer service;</li>
                <li>For general or targeted marketing and advertising purposes, including sending you promotional material or special offers on our behalf or on behalf of our marketing partners and/or their respective affiliates and subsidiaries and other third parties, provided that you have not already opted out of receiving such communications;</li>
                <li>To fulfill contracts we have with you;</li>
                <li>To manage, improve and foster relationships with third-party vendors, including vendors, suppliers, and parents, affiliates, subsidiaries, and business partners;</li>
                <li>To maintain, improve, customize, or administer the Services, perform business analyses, or other internal purposes to improve the quality of our business, the Services, resolve technical problems, or improve security or develop other products and services;</li>
                <li>To comply with our Terms & Conditions;</li>
                <li>For analytics for business purposes and business intelligence;</li>
                <li>To comply with any applicable laws and regulations and respond to lawful requests; and/or</li>
                <li>For any other purposes disclosed to you at the time we collect your Information and/or pursuant to your consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may also use Information that has been de-identified and/or aggregated for purposes not otherwise listed above.
              </p>

              <h3 className="text-xl font-semibold mb-3 text-gray-800">
                Sharing Your Information
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                We may share your Information as set forth in the Privacy Policy and in the following circumstances:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Third-Party Vendors.</strong> We may share your Information with third-party vendors that perform certain functions or services on our behalf (such as to host the Services, manage databases, perform background checks, process credit card payments, provide customer service, or send communications for us). These third-party vendors are authorized to use your Information only as necessary to provide these services to us. In some instances, we may aggregate Information we collect so third parties do not have access to your identifiable Information to identify you individually.</li>
                <li><strong>Disclosure to Users.</strong> The Services allow Customers the ability to choose Service Providers. Accordingly, the Services make Customer and Service Provider information (e.g., profiles, portfolios, ratings, and locations) available to any User using the Services to help facilitate bookings. This Policy governs how Ewà uses your Information. We are not responsible for how a User may use your Information.</li>
                <li><strong>Reviews.</strong> If a Customer leaves a review for a Service Provider, we may post that review and the Customer's username on the Services.</li>
                <li><strong>Disclosure of Information for Legal and Administrative Reasons.</strong> We may disclose your Information without notice: (i) when required by law or to comply with a court order, subpoena, search warrant, or other legal process; (ii) to cooperate or undertake an internal or external investigation or audit; (iii) to comply with legal, regulatory or administrative requirements of governmental authorities (including, without limitation, requests from the governmental agency authorities to view your Information); (iv) to protect and defend the rights, property, or safety of us, our subsidiaries and affiliates and any of their officers, directors, employees, attorneys, agents, contractors, and partners, and the application Service Users; (v) to enforce or apply our Terms & Conditions; and (vi) to verify the identity of the User of our Services.</li>
                <li><strong>Business Transfers.</strong> Your Information may be transferred, sold, or otherwise conveyed ("Conveyed") to a third party where we: (i) merge with or are acquired by another business entity; (ii) sell all or substantially all of our assets; (iii) are adjudicated bankrupt; or (iv) are liquidated or otherwise reorganize. You agree to any and all such Conveyances of your Information.</li>
                <li><strong>De-Identified or Aggregated Data.</strong> We may share your Information on an aggregated basis for any purpose in which your specific personal Information is blinded, masked, or otherwise not identifiable.</li>
                <li><strong>With Your Consent.</strong> We may share Information consistent with this Privacy Policy with your consent.</li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                Except as provided in this Privacy Policy, we will not sell, exchange, trade, or disclose your Information we have collected without your consent.
              </p>
            </section>

            <section id="links-to-websites">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                LINKS TO OTHER WEBSITES
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services may contain links to other applications or services that are not owned or controlled by us, including links to Google Maps and Apple Maps, or may redirect you off our application away from our Services.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                This Privacy Policy only applies to Information collected by our Services. We are not responsible for the privacy and security practices of those other applications or the Information they may collect (which may include IP address). You should contact such third parties directly to determine their respective privacy policies. Links to any other applications or content do not constitute or imply an endorsement or recommendation by us of the linked application and/or content.
              </p>
            </section>

            <section id="information-security">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                INFORMATION SECURITY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We use commercially reasonable measures to provide our Services. However, you should assume that no data transmitted over the Internet or stored or maintained by us or our third-party vendors can be 100% secure. Therefore, we do not promise or guarantee, and you should not expect, that your Information or private communications will always remain private or secure. We do not guarantee that your Information will not be misused by third parties. We are not responsible for the circumvention of any privacy settings or security features. You agree that we will not have any liability for misuse, access, acquisition, deletion, or disclosure of your Information.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you believe that your Information has been accessed or acquired by an unauthorized person, you should promptly Contact Us so that necessary measures can quickly be taken.
              </p>
            </section>

            <section id="data-retention">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                DATA RETENTION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We will retain your Information for as long as needed to provide you Services. If you wish to request that we no longer use your Information to provide you Services, please contact us at ewatheapp.com@ewatheapp.com. We will retain and use your Information as necessary to comply with our legal obligations, resolve disputes, and enforce our agreements. In accordance with our routine record keeping, we may delete certain records that contain Information you have submitted to us. We are under no obligation to store such Information indefinitely and disclaim any liability arising out of, or related to, the destruction of such Information.
              </p>
            </section>

            <section id="your-choices">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                YOUR CHOICES
              </h2>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li><strong>Email.</strong> By using our Services, you agree that we may contact you by email as set forth herein. If you do not want to receive marketing and promotional emails from us, you may click on the "unsubscribe" link in the email to unsubscribe and opt out of marketing email communications or Contact Us.</li>
                <li><strong>Mobile Push Notifications.</strong> By using our Services, you agree that we may contact you by sending push notifications to your phone. You can use the settings on your mobile device to enable or turn off mobile push notifications from us or Contact Us.</li>
                <li><strong>Marketing Communications.</strong> If you do not want to receive marketing and promotional emails from us, you may click on the "unsubscribe" link in the email to unsubscribe and opt out of marketing email communications or Contact Us for more information.</li>
                <li><strong>Opting Out of Direct Marketing by Third Parties.</strong> To exercise choices regarding the marketing information you receive, you may also review the following links:
                  <ul className="list-disc pl-6 mt-2 space-y-1">
                    <li>You may opt out of tracking and receiving tailored advertisements on your mobile device by some mobile advertising companies and other similar entities by downloading the App Choices app at www.aboutads.info/appchoices.</li>
                    <li>You may opt out of receiving permissible targeted advertisements by using the NAI Opt-out tool available at http://optout.networkadvertising.org/?c=1 or visiting About Ads at http://optout.aboutads.info.</li>
                    <li>You can opt out of having your activity on our Services made available to Google Analytics by installing the Google Analytics opt-out add-on for your web browser by visiting: https://tools.google.com/dlpage/gaoptout for your web browser.</li>
                  </ul>
                </li>
              </ul>
            </section>

            <section id="accessing-information">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                ACCESSING, CORRECTING, OR DELETING YOUR INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                To the extent certain state laws provide users with data subject rights, such as the right to opt out, access, or delete their personal Information, those rights may be honored by the Company following proper authentication and verification. Please see the Contact Us section below for more information.
              </p>
            </section>

            <section id="geographic-location">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                GEOGRAPHIC LOCATION OF DATA STORAGE AND PROCESSING
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Our Services are targeted to individuals located in the United States. As such, the Services collect Information and process and store that Information in databases located in the United States. If you are visiting the Services from a country outside the United States, you should be aware that you may transfer personally identifiable Information about yourself to the United States, and that the data protection laws of the United States may not be as comprehensive as those in your own country. By visiting the Services and submitting any personally identifiable Information you consent to the transfer of such personally identifiable Information to the United States.
              </p>
            </section>

            <section id="childrens-information">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                CHILDREN'S INFORMATION
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The Services are intended only for Users over the age of sixteen (16). If we become aware that a User is under thirteen (13) (or a higher age threshold where applicable) and has provided us with Information, we will take steps to comply with any applicable legal requirement to remove such Information. Contact us if you believe that we have mistakenly or unintentionally collected Information from a child under the age of thirteen (13).
              </p>
            </section>

            <section id="changes-to-policy">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                CHANGES TO THIS PRIVACY POLICY
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                We reserve the right to change, modify or amend this Privacy Policy at any time to reflect changes in our products and service offerings, accommodate new technologies, regulatory requirements, or other purposes. If we modify our Privacy Policy, we will update the "Effective Date" and such changes will be effective upon posting. It is your obligation to check our current Privacy Policy for any changes.
              </p>
            </section>

            <section id="contact-us">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#ED8936' }}>
                CONTACT US
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or the Information we have collected about you, please contact us at the following:
              </p>
              <ul className="list-none space-y-2 mb-8">
                <li><strong>Email us:</strong> Ewatheapp.com@ewatheapp.com</li>
                <li><strong>Call us:</strong> 862-303-3336</li>
              </ul>
              
              <p className="text-gray-700 leading-relaxed font-medium">
                <strong>Effective Date:</strong> June 1, 2024
              </p>
            </section>
          </div>
        </div>
      </div>

      <FaqSection />
      <Footer />
    </main>
  )
}
