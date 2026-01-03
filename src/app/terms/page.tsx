"use client";

import Link from "next/link";
import { motion } from "framer-motion";

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
              TERMS
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-white/40 text-sm mb-4">
          © 2025 Digital App LLC. All rights reserved.
        </p>
        <div className="flex justify-center gap-6">
          <Link href="/privacy" className="text-white/50 text-sm hover:text-cyan transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-white/50 text-sm hover:text-cyan transition-colors">
            Terms of Service
          </Link>
        </div>
      </div>
    </footer>
  );
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#030308] text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[80px] animate-pulse"
          style={{
            background: 'rgba(0, 212, 255, 0.08)',
            top: '5%',
            left: '-10%'
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-[80px] animate-pulse"
          style={{
            background: 'rgba(0, 255, 150, 0.06)',
            top: '50%',
            right: '-10%',
            animationDelay: '-5s'
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10 max-w-[800px] mx-auto px-6 lg:px-10 pt-36 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-orbitron text-3xl md:text-4xl lg:text-[42px] font-bold mb-3">
            Terms of Service
          </h1>
          <p className="text-white/40 text-sm mb-10">Last updated: December 2025</p>

          {/* Summary Box */}
          <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mb-10">
            <p className="text-white/70 text-[15px] leading-relaxed">
              <strong className="text-white">Summary:</strong> By using our apps and services, you agree to these terms. Use our services responsibly and legally. We provide them &quot;as is&quot; and reserve the right to modify or terminate them.
            </p>
          </div>

          {/* Section 1: Acceptance of Terms */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              1. Acceptance of Terms
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By accessing or using any application or service provided by Digital App LLC (&quot;Company,&quot; &quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, do not use our services.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              These Terms apply to all users of our applications, including CalculX, BookAI, ZodiacMatch, and any future applications or services we provide.
            </p>
          </section>

          {/* Section 2: Description of Services */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              2. Description of Services
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Digital App LLC develops and publishes mobile applications for iOS and Android platforms. Our current applications include:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li><strong className="text-white">CalculX:</strong> A calculator application with integrated private messaging features</li>
              <li><strong className="text-white">Lottery AI:</strong> An AI-powered lottery number generator for Powerball and Mega Millions</li>
              <li><strong className="text-white">KEMMI:</strong> An AI companion application for conversational support and emotional wellness</li>
              <li><strong className="text-white">BookAI:</strong> An AI-powered accounting application (in development)</li>
              <li><strong className="text-white">ZodiacMatch:</strong> An astrology compatibility application (in development)</li>
            </ul>
            <p className="text-white/70 text-[15px] leading-relaxed">
              We also provide custom app development and website services for businesses.
            </p>
          </section>

          {/* Section 3: User Accounts */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              3. User Accounts
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.1 Account Creation</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Some of our services require you to create an account. You may register using:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Apple Sign-In</li>
              <li>Google Sign-In</li>
              <li>Email and password</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.2 Account Responsibilities</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Maintaining the confidentiality of your account credentials</li>
              <li>All activities that occur under your account</li>
              <li>Notifying us immediately of any unauthorized use</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">3.3 Account Termination</h3>
            <p className="text-white/70 text-[15px] leading-relaxed">
              We reserve the right to suspend or terminate your account if you violate these Terms or engage in any prohibited activities.
            </p>
          </section>

          {/* Section 4: CalculX Premium Subscriptions */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              4. CalculX Premium Subscriptions
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.1 Subscription Plans</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              CalculX offers optional premium subscriptions with the following options:
            </p>
            <table className="w-full mb-6 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Plan</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Price</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Billing Cycle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Monthly</td>
                  <td className="py-3 px-4 text-white/70">$4.99 USD</td>
                  <td className="py-3 px-4 text-white/70">Every month</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Yearly</td>
                  <td className="py-3 px-4 text-white/70">$24.99 USD</td>
                  <td className="py-3 px-4 text-white/70">Every year</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.2 Premium Features</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              CalculX Premium includes:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li><strong className="text-white">Unlimited chat rooms:</strong> Create as many private rooms as you need</li>
              <li><strong className="text-white">Priority support:</strong> Faster response times for support requests</li>
              <li><strong className="text-white">Support the developer:</strong> Help us continue improving the app</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.3 Billing and Payment</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li>All payments are processed securely through the Apple App Store</li>
              <li>Prices are in US Dollars and may vary in other countries based on local currency conversion</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.4 Automatic Renewal</h3>
            <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mb-4">
              <p className="text-white/70 text-[15px] leading-relaxed">
                <strong className="text-white">Important:</strong> Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period.
              </p>
            </div>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
              <li>The renewal price will be the same as the original subscription price unless we notify you of a price change</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.5 Managing Your Subscription</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You can manage or cancel your subscription at any time:
            </p>
            <ol className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-decimal space-y-2">
              <li>Open the <strong className="text-white">Settings</strong> app on your iPhone/iPad</li>
              <li>Tap your <strong className="text-white">Apple ID</strong> (your name at the top)</li>
              <li>Tap <strong className="text-white">Subscriptions</strong></li>
              <li>Select <strong className="text-white">CalculX Premium</strong></li>
              <li>Tap <strong className="text-white">Cancel Subscription</strong> or choose a different plan</li>
            </ol>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.6 Cancellation Policy</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>You may cancel your subscription at any time</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>You will retain access to premium features until the end of your paid period</li>
              <li>No refunds are provided for partial subscription periods</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.7 Refund Policy</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>All purchases are final and non-refundable</li>
              <li>For refund requests, you must contact Apple directly through their support: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">reportaproblem.apple.com</a></li>
              <li>Refunds are granted at Apple&apos;s sole discretion in accordance with their policies</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.8 Restoring Purchases</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              If you have an active subscription and it is not recognized:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Use the &quot;Restore Purchases&quot; button in the app</li>
              <li>Ensure you are signed in with the same Apple ID used for the original purchase</li>
              <li>Contact us at <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a> if issues persist</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">4.9 Price Changes</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>We reserve the right to change subscription prices at any time</li>
              <li>Price changes will not affect current subscription periods</li>
              <li>You will be notified of any price changes before your next renewal</li>
              <li>Continuing to use the subscription after a price change constitutes acceptance of the new price</li>
            </ul>
          </section>

          {/* Section 5: Lottery AI */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              5. Lottery AI
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.1 Description</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Lottery AI is an entertainment application that uses artificial intelligence to analyze historical lottery data and generate number combinations for Powerball and Mega Millions lotteries.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.2 Age Requirement</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold">
                Lottery AI is intended for users aged 18 and older.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By using Lottery AI, you confirm that you are at least 18 years old. Users under 18 are not permitted to use this application.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.3 Subscription Plans</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Lottery AI offers optional premium subscriptions:
            </p>
            <table className="w-full mb-6 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Plan</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Price</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Billing Cycle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Monthly</td>
                  <td className="py-3 px-4 text-white/70">$2.99 USD</td>
                  <td className="py-3 px-4 text-white/70">Every month</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Yearly</td>
                  <td className="py-3 px-4 text-white/70">$19.99 USD</td>
                  <td className="py-3 px-4 text-white/70">Every year</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.4 Subscription Terms</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>You can manage or cancel your subscription in your device Settings &gt; Apple ID &gt; Subscriptions</li>
              <li>No refunds are provided for partial subscription periods</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.5 Important Disclaimer</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold">
                LOTTERY AI IS AN ENTERTAINMENT APP ONLY.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By using Lottery AI, you acknowledge and agree that:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Lottery games are games of chance and results are completely random</li>
              <li>No system, algorithm, or application can guarantee or predict winning lottery numbers</li>
              <li>Our AI analysis is based on historical data and probability patterns only</li>
              <li>Past lottery results do not influence or predict future drawings</li>
              <li>We make no claims or guarantees about winning any lottery prize</li>
              <li>You are solely responsible for your decision to play any lottery game</li>
              <li>You should never spend more than you can afford to lose</li>
              <li>Digital App LLC is not affiliated with any official lottery organization</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.6 Responsible Gaming</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We encourage responsible use of our application:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Set a budget for lottery play and stick to it</li>
              <li>Never view lottery play as a way to make money or solve financial problems</li>
              <li>If you feel you may have a gambling problem, seek help from organizations like the National Council on Problem Gambling (1-800-522-4700)</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">5.7 No Liability for Lottery Outcomes</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Digital App LLC shall not be held liable for:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Any losses incurred from playing lottery games using numbers generated by our app</li>
              <li>Any decisions made based on the app&apos;s suggestions or analysis</li>
              <li>Any technical errors in number generation or display</li>
              <li>Changes to lottery rules, odds, or formats by official lottery organizations</li>
            </ul>
          </section>

          {/* Section 6: KEMMI AI Companion */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              6. KEMMI AI Companion
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.1 Description</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              KEMMI is an AI companion application that provides conversational support and emotional wellness features. KEMMI uses artificial intelligence to engage in personalized conversations with users.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.2 Age Requirement</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold">
                KEMMI is intended for users aged 18 and older.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By using KEMMI, you confirm that you are at least 18 years old. Users under 18 are not permitted to use this application.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.3 Subscription Plans</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              KEMMI offers credit-based subscription plans:
            </p>
            <table className="w-full mb-6 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Plan</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Price</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Credits/Month</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Lite</td>
                  <td className="py-3 px-4 text-white/70">$4.99 USD</td>
                  <td className="py-3 px-4 text-white/70">100 messages</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Standard</td>
                  <td className="py-3 px-4 text-white/70">$9.99 USD</td>
                  <td className="py-3 px-4 text-white/70">280 messages</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Premium</td>
                  <td className="py-3 px-4 text-white/70">$17.99 USD</td>
                  <td className="py-3 px-4 text-white/70">600 messages</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.4 Bonus Credit Packs (One-Time Purchases)</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              In addition to subscriptions, you can purchase bonus credit packs:
            </p>
            <table className="w-full mb-6 border-collapse">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Pack</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Price</th>
                  <th className="py-3 px-4 text-left text-cyan font-semibold">Credits</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Small Pack</td>
                  <td className="py-3 px-4 text-white/70">$1.99 USD</td>
                  <td className="py-3 px-4 text-white/70">+25 messages</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Medium Pack</td>
                  <td className="py-3 px-4 text-white/70">$4.99 USD</td>
                  <td className="py-3 px-4 text-white/70">+80 messages</td>
                </tr>
                <tr className="border-b border-white/10">
                  <td className="py-3 px-4 text-white/70">Large Pack</td>
                  <td className="py-3 px-4 text-white/70">$9.99 USD</td>
                  <td className="py-3 px-4 text-white/70">+200 messages</td>
                </tr>
              </tbody>
            </table>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.5 Credit Terms</h3>
            <div className="bg-cyan/[0.08] border border-cyan/20 rounded-xl p-5 mb-4">
              <p className="text-white/70 text-[15px] leading-relaxed">
                <strong className="text-white">Important:</strong> Subscription credits reset monthly and do NOT roll over. Unused subscription credits expire at the end of each billing period.
              </p>
            </div>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Subscription credits are renewed at the start of each billing cycle</li>
              <li>Unused subscription credits <strong className="text-white">do not carry over</strong> to the next month</li>
              <li>Bonus credit packs <strong className="text-white">never expire</strong> and can be used anytime</li>
              <li>Credits are consumed in order: subscription credits first, then bonus credits</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.6 Billing and Auto-Renewal</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Payment will be charged to your Apple ID account at confirmation of purchase</li>
              <li>All payments are processed securely through the Apple App Store</li>
              <li>Subscriptions automatically renew unless auto-renew is turned off at least 24 hours before the end of the current period</li>
              <li>Your account will be charged for renewal within 24 hours prior to the end of the current period</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.7 Managing Your Subscription</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You can manage or cancel your subscription at any time:
            </p>
            <ol className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-decimal space-y-2">
              <li>Open the <strong className="text-white">Settings</strong> app on your iPhone/iPad</li>
              <li>Tap your <strong className="text-white">Apple ID</strong> (your name at the top)</li>
              <li>Tap <strong className="text-white">Subscriptions</strong></li>
              <li>Select <strong className="text-white">KEMMI</strong></li>
              <li>Tap <strong className="text-white">Cancel Subscription</strong> or choose a different plan</li>
            </ol>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.8 Cancellation and Refund Policy</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>You may cancel your subscription at any time</li>
              <li>Cancellation takes effect at the end of the current billing period</li>
              <li>You will retain access to premium features until the end of your paid period</li>
              <li>All purchases are final and non-refundable</li>
              <li>For refund requests, contact Apple directly: <a href="https://reportaproblem.apple.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">reportaproblem.apple.com</a></li>
              <li><strong className="text-white">You can delete your account and all associated data at any time from the app Settings</strong></li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.9 Apple Terms</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Use of KEMMI is also subject to Apple&apos;s Standard End User License Agreement (EULA):
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/" target="_blank" rel="noopener noreferrer" className="text-cyan hover:underline">https://www.apple.com/legal/internet-services/itunes/dev/stdeula/</a>
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">6.10 AI Disclaimer</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold mb-2">
                KEMMI is an AI-powered companion, not a real person.
              </p>
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold">
                KEMMI IS NOT A LICENSED THERAPIST OR MEDICAL PROFESSIONAL.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By using KEMMI, you acknowledge and agree that:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>KEMMI is an AI companion for entertainment and emotional support purposes only</li>
              <li>KEMMI is not a substitute for professional mental health care, therapy, or medical advice</li>
              <li>You should consult qualified healthcare professionals for medical or psychological concerns</li>
              <li>In case of emergency or crisis, contact local emergency services or a crisis hotline immediately</li>
              <li>Digital App LLC is not responsible for decisions made based on conversations with KEMMI</li>
            </ul>
          </section>

          {/* Section 7: Acceptable Use */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              7. Acceptable Use
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">7.1 You Agree To:</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Use our services only for lawful purposes</li>
              <li>Comply with all applicable laws and regulations</li>
              <li>Respect the rights and privacy of other users</li>
              <li>Provide accurate information when required</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">7.2 Prohibited Activities</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed">
                You may NOT use our services to:
              </p>
            </div>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Engage in any illegal activities</li>
              <li>Harass, threaten, or harm other users</li>
              <li>Distribute malware, spam, or harmful content</li>
              <li>Attempt to hack, reverse engineer, or compromise our systems</li>
              <li>Impersonate others or misrepresent your identity</li>
              <li>Share content that is illegal, obscene, or infringes on others&apos; rights</li>
              <li>Use automated systems to access our services without permission</li>
              <li>Violate any applicable laws or regulations</li>
            </ul>
          </section>

          {/* Section 8: CalculX Messaging Features */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              8. CalculX Messaging Features
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              For the CalculX application specifically:
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.1 Messaging Features</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>The messaging feature is designed for private, personal communication</li>
              <li>Messages are automatically deleted after 24 hours</li>
              <li>You are responsible for the content of your messages</li>
              <li>We do not monitor, read, or store message content beyond the 24-hour delivery period</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.2 Room Codes</h3>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Room codes are unique identifiers for chat rooms</li>
              <li>Only share room codes with people you trust</li>
              <li>You are responsible for who you invite to your rooms</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.3 Age Requirement</h3>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed font-semibold">
                CalculX messaging features are intended for users aged 17 and older.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              By using the messaging features, you confirm that you are at least 17 years old. Users under 17 are not permitted to create accounts or use chat features. We reserve the right to terminate accounts of users who misrepresent their age.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.4 Prohibited Content</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Users are strictly prohibited from sharing the following content in CalculX:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li><strong className="text-white">Illegal content:</strong> Any content that violates local, state, federal, or international laws</li>
              <li><strong className="text-white">Sexual or explicit content:</strong> Pornography, sexually explicit material, or any content involving the exploitation of minors</li>
              <li><strong className="text-white">Violence and threats:</strong> Content promoting violence, self-harm, terrorism, or threatening others</li>
              <li><strong className="text-white">Harassment and hate speech:</strong> Content that harasses, bullies, intimidates, or discriminates against individuals or groups based on race, ethnicity, religion, gender, sexual orientation, disability, or other protected characteristics</li>
              <li><strong className="text-white">Spam and malicious content:</strong> Unsolicited advertising, phishing attempts, scams, malware, or harmful links</li>
              <li><strong className="text-white">Intellectual property violations:</strong> Content that infringes on copyrights, trademarks, or other intellectual property rights</li>
              <li><strong className="text-white">Deceptive content:</strong> Misinformation, impersonation, or fraudulent schemes</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.5 Reporting and Moderation</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We are committed to maintaining a safe environment for all users.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              <strong className="text-white">How to report:</strong>
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Use the <strong className="text-white">&quot;Report&quot; button</strong> within the app to flag inappropriate users or content</li>
              <li>Contact us directly at <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a> with details including the room code (if available)</li>
              <li>Exit the chat room immediately if you feel unsafe</li>
            </ul>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              <strong className="text-white">Enforcement actions:</strong>
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>We will investigate all reports and take appropriate action</li>
              <li>Actions may include content removal, warnings, temporary suspension, or permanent account termination</li>
              <li>Users who violate these rules may have their accounts permanently terminated without refund</li>
              <li>We may report illegal activity to appropriate law enforcement authorities when required by law or when necessary to protect safety</li>
            </ul>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">8.6 User Responsibility</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You are responsible for:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>All content you share in chat rooms</li>
              <li>Protecting your room codes and only sharing them with trusted individuals</li>
              <li>Reporting any violations or inappropriate behavior you encounter</li>
              <li>Your interactions with other users</li>
            </ul>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Digital App LLC is not responsible for the content shared by users or for interactions between users. Use caution when communicating with others and never share personal or sensitive information.
            </p>
          </section>

          {/* Section 9: Intellectual Property */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              9. Intellectual Property
            </h2>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">9.1 Our Property</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              All content, features, and functionality of our applications and website — including but not limited to text, graphics, logos, icons, images, software, and design — are owned by Digital App LLC and protected by intellectual property laws.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">9.2 Limited License</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We grant you a limited, non-exclusive, non-transferable license to use our applications for personal, non-commercial purposes in accordance with these Terms.
            </p>

            <h3 className="text-lg text-white font-semibold mt-6 mb-3">9.3 Restrictions</h3>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You may not:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Copy, modify, or distribute our applications</li>
              <li>Reverse engineer or attempt to extract source code</li>
              <li>Remove any copyright or proprietary notices</li>
              <li>Use our branding without written permission</li>
            </ul>
          </section>

          {/* Section 10: User Content */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              10. User Content
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You retain ownership of any content you create or share through our services. By using our services, you grant us a limited license to process your content solely for the purpose of providing the service.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              For CalculX messages, this license is limited to temporarily storing and delivering messages, after which they are automatically deleted.
            </p>
          </section>

          {/* Section 11: Disclaimer of Warranties */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              11. Disclaimer of Warranties
            </h2>
            <div className="bg-[#ff6b6b]/[0.08] border border-[#ff6b6b]/20 rounded-xl p-5 mb-4">
              <p className="text-[#ffc8c8]/90 text-[15px] leading-relaxed">
                OUR SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED.
              </p>
            </div>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We do not warrant that:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Our services will be uninterrupted or error-free</li>
              <li>Defects will be corrected</li>
              <li>Our services are free of viruses or harmful components</li>
              <li>The results of using our services will meet your requirements</li>
            </ul>
          </section>

          {/* Section 12: Limitation of Liability */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              12. Limitation of Liability
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              To the maximum extent permitted by law, Digital App LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Loss of profits, data, or goodwill</li>
              <li>Service interruption or computer damage</li>
              <li>Any damages resulting from your use of our services</li>
            </ul>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim, or $100, whichever is greater.
            </p>
          </section>

          {/* Section 13: Indemnification */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              13. Indemnification
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              You agree to indemnify and hold harmless Digital App LLC, its officers, directors, employees, and agents from any claims, damages, losses, or expenses (including legal fees) arising from:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Your use of our services</li>
              <li>Your violation of these Terms</li>
              <li>Your violation of any third-party rights</li>
            </ul>
          </section>

          {/* Section 14: Third-Party Services */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              14. Third-Party Services
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Our applications may integrate with third-party services (such as Apple App Store, Supabase, Google). Your use of these services is subject to their respective terms and privacy policies. We are not responsible for third-party services.
            </p>
          </section>

          {/* Section 15: Modifications to Services */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              15. Modifications to Services
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We reserve the right to:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed mb-4 pl-6 list-disc space-y-2">
              <li>Modify or discontinue any service at any time</li>
              <li>Update these Terms with reasonable notice</li>
              <li>Change pricing for premium features (with notice to existing subscribers)</li>
            </ul>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>
          </section>

          {/* Section 16: Termination */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              16. Termination
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice, for any reason, including if you breach these Terms.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              Upon termination:
            </p>
            <ul className="text-white/70 text-[15px] leading-relaxed pl-6 list-disc space-y-2">
              <li>Your right to use our services ceases immediately</li>
              <li>We may delete your account and associated data</li>
              <li>Active subscriptions will not be refunded upon termination for Terms violations</li>
              <li>Provisions that should survive termination will remain in effect</li>
            </ul>
          </section>

          {/* Section 17: Governing Law */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              17. Governing Law
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              These Terms shall be governed by and construed in accordance with the laws of the State of Wyoming, United States, without regard to its conflict of law provisions.
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              Any disputes arising from these Terms shall be resolved in the courts of Wyoming, and you consent to the jurisdiction of such courts.
            </p>
          </section>

          {/* Section 18: Severability */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              18. Severability
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed">
              If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force and effect.
            </p>
          </section>

          {/* Section 19: Entire Agreement */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              19. Entire Agreement
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed">
              These Terms, together with our Privacy Policy, constitute the entire agreement between you and Digital App LLC regarding the use of our services.
            </p>
          </section>

          {/* Section 20: Contact Us */}
          <section className="mb-10">
            <h2 className="text-[22px] text-cyan font-semibold mt-10 mb-4 pb-2.5 border-b border-cyan/20">
              20. Contact Us
            </h2>
            <p className="text-white/70 text-[15px] leading-relaxed mb-4">
              If you have questions about these Terms, please contact us:
            </p>
            <p className="text-white/70 text-[15px] leading-relaxed">
              <strong className="text-white">Digital App LLC</strong><br />
              30 N Gould St, STE R<br />
              Sheridan, WY 82801, USA<br />
              Email: <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">info@digitalappusa.com</a>
            </p>
          </section>

        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
