"use client";

import Link from "next/link";
import Footer from "@/components/Footer";

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030308]/90 backdrop-blur-xl border-b border-cyan/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-cyan text-sm font-semibold px-5 py-2.5 bg-cyan/10 border border-cyan/30 rounded-full hover:bg-cyan/20 transition-all"
            >
              <span>←</span>
              <span>Home</span>
            </Link>
            <span className="font-orbitron text-2xl font-bold bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
              PRIVACY
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#030308] relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-[5%] left-[-10%] w-[400px] h-[400px] bg-cyan/[0.08] rounded-full blur-[80px]" />
        <div className="absolute top-[50%] right-[-10%] w-[350px] h-[350px] bg-green/[0.06] rounded-full blur-[80px]" />
      </div>

      <Navbar />

      <div className="max-w-4xl mx-auto px-6 pt-32 pb-20 relative z-10">
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-2 text-center">
          Privacy <span className="bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">Policy</span>
        </h1>
        <p className="text-white/40 text-sm text-center mb-12">Last updated: December 2025</p>

        {/* Summary Box */}
        <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mb-10">
          <p className="text-white/80 text-sm">
            <strong className="text-white">Summary:</strong> We respect your privacy. We do not sell your data. Our apps are designed with privacy as a core principle.
          </p>
        </div>

        <div className="space-y-10 text-white/70 text-[15px] leading-relaxed">

          {/* Section 1 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">1. Introduction</h2>
            <p className="mb-4">Digital App LLC (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates mobile applications and websites. This Privacy Policy explains how we collect, use, and protect your information when you use our services.</p>
            <p>By using our applications or visiting our website, you agree to the terms of this Privacy Policy.</p>
          </section>

          {/* Section 2 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">2. Information We Collect</h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">2.1 Information You Provide</h3>
            <p className="mb-3">When you use our services, you may provide:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Account Information:</strong> Email address when you create an account (via Apple Sign-In, Google Sign-In, or email registration)</li>
              <li><strong className="text-white">Contact Form Data:</strong> Name, email, phone number, and project details when you submit a quote request on our website</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">2.2 Information Collected Automatically</h3>
            <p>We do not collect personal data automatically. We do not use tracking cookies or analytics tools that identify individual users.</p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">2.3 CalculX App Specific</h3>
            <p className="mb-3">For our CalculX application:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do <strong className="text-white">not</strong> read, access, or store the content of your messages</li>
              <li>Messages are stored temporarily on secure servers for delivery purposes only</li>
              <li><strong className="text-white">Messages are automatically deleted after 24 hours</strong></li>
              <li>We use end-to-end privacy practices to protect your communications</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">2.4 Report Data</h3>
            <p className="mb-3">When you submit a report about another user, we collect the following information to investigate and enforce our Terms of Service:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your user ID and username (reporter)</li>
              <li>The reported user&apos;s ID and username</li>
              <li>The room ID where the incident occurred</li>
              <li>The reason(s) you selected for the report</li>
              <li>The date and time of the report</li>
            </ul>
            <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mt-4">
              <p className="text-white/80 text-sm">
                <strong className="text-white">Important:</strong> We do NOT collect or access the content of messages when you submit a report. Your conversations remain private.
              </p>
            </div>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">2.5 Lottery AI App</h3>
            <p className="mb-3">For our Lottery AI application:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>We do <strong className="text-white">not</strong> collect any personal information</li>
              <li>No account or registration is required to use the app</li>
              <li>Generated number history is stored <strong className="text-white">locally on your device only</strong></li>
              <li>We do not have access to your generated numbers or history</li>
              <li>Subscription status is managed entirely by Apple through the App Store</li>
              <li>We do not track your location or any device identifiers</li>
            </ul>
            <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mt-4">
              <p className="text-white/80 text-sm">
                <strong className="text-white">Privacy First:</strong> Lottery AI is designed with privacy as a core principle. Your data stays on your device.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">3. Subscription and Payment Information</h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.1 In-App Subscriptions</h3>
            <p className="mb-3">Our apps offer optional premium subscriptions:</p>

            <p className="mb-2"><strong className="text-white">CalculX Premium:</strong></p>
            <ul className="list-disc pl-6 space-y-1 mb-4">
              <li><strong className="text-white">Monthly Subscription:</strong> $4.99 USD per month</li>
              <li><strong className="text-white">Annual Subscription:</strong> $24.99 USD per year</li>
            </ul>

            <p className="mb-2"><strong className="text-white">Lottery AI Premium:</strong></p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong className="text-white">Monthly Subscription:</strong> $2.99 USD per month</li>
              <li><strong className="text-white">Annual Subscription:</strong> $19.99 USD per year</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.2 Payment Processing</h3>
            <p className="mb-3">All subscription payments are processed exclusively through Apple&apos;s App Store. We do <strong className="text-white">NOT</strong> collect, store, or have access to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Your credit card number</li>
              <li>Bank account information</li>
              <li>Apple Pay details</li>
              <li>Any other payment credentials</li>
            </ul>
            <p className="mt-3">Apple handles all payment processing in accordance with their privacy policy: <a href="https://apple.com/legal/privacy" target="_blank" className="text-cyan hover:underline">apple.com/legal/privacy</a></p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.3 Subscription Data We Store</h3>
            <p className="mb-3">To provide premium features, we store the following information on our secure servers:</p>
            <ul className="list-disc pl-6 space-y-2 mb-4">
              <li>Your subscription status (active/inactive)</li>
              <li>Subscription type (monthly/yearly)</li>
              <li>Subscription expiration date</li>
              <li>Original transaction identifier (for verification purposes)</li>
            </ul>
            <p className="mb-3">This information is linked to your user account and is used solely to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verify your premium access</li>
              <li>Restore purchases across devices</li>
              <li>Provide customer support for subscription issues</li>
            </ul>
          </section>

          {/* Section 4 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">4. Third-Party Services</h2>
            <p className="mb-4">Our applications use the following third-party services:</p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.1 Apple App Store (StoreKit)</h3>
            <p>For in-app purchases and subscriptions, we use Apple&apos;s StoreKit framework. Apple processes all transactions and manages subscription renewals. Apple&apos;s privacy policy: <a href="https://apple.com/legal/privacy" target="_blank" className="text-cyan hover:underline">apple.com/legal/privacy</a></p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.2 Supabase</h3>
            <p>We use Supabase for backend services including authentication and temporary message storage. Supabase&apos;s privacy policy can be found at: <a href="https://supabase.com/privacy" target="_blank" className="text-cyan hover:underline">supabase.com/privacy</a></p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.3 Apple Sign-In / Google Sign-In</h3>
            <p className="mb-3">If you choose to sign in with Apple or Google, their respective privacy policies apply to the authentication process:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Apple: <a href="https://www.apple.com/legal/privacy/" target="_blank" className="text-cyan hover:underline">apple.com/legal/privacy</a></li>
              <li>Google: <a href="https://policies.google.com/privacy" target="_blank" className="text-cyan hover:underline">policies.google.com/privacy</a></li>
            </ul>
          </section>

          {/* Section 5 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">5. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Provide, maintain, and improve our services</li>
              <li>Create and manage your account</li>
              <li>Manage your subscription status and provide premium features</li>
              <li>Respond to your inquiries and support requests</li>
              <li>Investigate reports and enforce our Terms of Service</li>
              <li>Send you important updates about our services</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Section 6 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">6. Data Storage and Security</h2>
            <p className="mb-3">We take data security seriously:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>All data is transmitted using SSL/TLS encryption</li>
              <li>We use secure, reputable cloud infrastructure</li>
              <li>Access to user data is strictly limited</li>
              <li>Messages in CalculX are automatically purged after 24 hours</li>
              <li>Subscription data is stored securely and encrypted</li>
              <li>Report data is stored securely and accessible only to authorized personnel</li>
            </ul>
          </section>

          {/* Section 7 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">7. Data Sharing</h2>
            <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mb-4">
              <p className="text-white/80 text-sm">
                <strong className="text-white">We do NOT sell, rent, or trade your personal information to third parties.</strong>
              </p>
            </div>
            <p className="mb-3">We may share information only in the following circumstances:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>With your explicit consent</li>
              <li>With Apple for subscription verification and management</li>
              <li>To comply with legal obligations or valid legal requests</li>
              <li>To protect our rights, privacy, safety, or property</li>
              <li>With law enforcement when required by law or to report illegal activity</li>
            </ul>
          </section>

          {/* Section 8 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">8. Data Retention</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Account data:</strong> Retained until you delete your account</li>
              <li><strong className="text-white">Messages:</strong> Automatically deleted after 24 hours</li>
              <li><strong className="text-white">Report data:</strong> Retained for 90 days, then automatically deleted</li>
              <li><strong className="text-white">Subscription data:</strong> Retained for the duration of your subscription plus 90 days for support purposes, or until you request deletion</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">9. Your Rights</h2>
            <p className="mb-3">You have the right to:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong className="text-white">Access:</strong> Request a copy of your personal data</li>
              <li><strong className="text-white">Correction:</strong> Request correction of inaccurate data</li>
              <li><strong className="text-white">Deletion:</strong> Request deletion of your account and data</li>
              <li><strong className="text-white">Portability:</strong> Request your data in a portable format</li>
            </ul>
            <p className="mt-4">To exercise these rights, contact us at <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a></p>
          </section>

          {/* Section 10 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">10. Age Requirements</h2>
            <p className="mb-4">CalculX and its messaging features are intended for users aged <strong className="text-white">17 and older</strong>. By using our services, you confirm that you are at least 17 years old.</p>
            <p>We do not knowingly collect personal information from users under 17. If you believe we have collected information from a user under 17, please contact us immediately at <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a> and we will take steps to delete such information.</p>
          </section>

          {/* Section 11 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">11. California Privacy Rights (CCPA)</h2>
            <p className="mb-3">If you are a California resident, you have additional rights under the California Consumer Privacy Act (CCPA):</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Right to know what personal information is collected</li>
              <li>Right to know whether your data is sold or disclosed</li>
              <li>Right to say no to the sale of personal information</li>
              <li>Right to equal service and price</li>
            </ul>
            <p className="mt-4">We do not sell personal information to third parties.</p>
          </section>

          {/* Section 12 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">12. International Users</h2>
            <p>If you are accessing our services from outside the United States, please be aware that your information may be transferred to, stored, and processed in the United States where our servers are located.</p>
          </section>

          {/* Section 13 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">13. Changes to This Policy</h2>
            <p>We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the &quot;Last updated&quot; date.</p>
          </section>

          {/* Section 14 */}
          <section>
            <h2 className="text-xl text-cyan font-semibold mb-4 pb-3 border-b border-cyan/20">14. Contact Us</h2>
            <p className="mb-4">If you have questions about this Privacy Policy or our privacy practices, please contact us:</p>
            <div className="bg-[#0a0a12] border border-white/10 rounded-xl p-5">
              <p className="text-white font-semibold mb-2">Digital App LLC</p>
              <p>30 N Gould St, STE R<br />
              Sheridan, WY 82801, USA</p>
              <p className="mt-2">Email: <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a></p>
            </div>
          </section>

        </div>
      </div>

      <Footer />
    </main>
  );
}
