"use client";

import { useState } from "react";
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
              SERVICES
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

function CheckItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-center gap-3 text-white/70">
      <span className="text-green text-lg">✓</span>
      <span>{children}</span>
    </li>
  );
}

function StepCard({ number, icon, title, description }: { number: number; icon: string; title: string; description: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: number * 0.1 }}
      className="flex-1 text-center"
    >
      <div className="relative inline-block mb-4">
        <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan/20 to-green/20 border border-cyan/30 flex items-center justify-center text-3xl">
          {icon}
        </div>
        <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-gradient-to-r from-cyan to-green flex items-center justify-center text-xs font-bold text-[#030308]">
          {number}
        </div>
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-white/60 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
}

function Arrow() {
  return (
    <div className="hidden lg:flex items-center justify-center px-4">
      <motion.div
        animate={{ x: [0, 5, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="text-cyan/50 text-2xl"
      >
        →
      </motion.div>
    </div>
  );
}

export default function ServicesPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedProjectType, setSelectedProjectType] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Explicitly set form-name for Netlify (required for JS submissions)
    formData.set("form-name", "quote");

    // Convert FormData to URLSearchParams
    const urlEncodedData = new URLSearchParams();
    formData.forEach((value, key) => {
      urlEncodedData.append(key, value.toString());
    });

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: urlEncodedData.toString(),
      });

      // Netlify returns 200 for successful form submissions
      if (response.ok || response.status === 200) {
        setFormSubmitted(true);
      } else {
        console.error("Form response status:", response.status);
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      alert("There was an error submitting the form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#030308] text-white relative overflow-hidden">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[500px] h-[500px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(0, 212, 255, 0.08)',
            top: '10%',
            left: '-15%'
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(0, 255, 150, 0.06)',
            top: '60%',
            right: '-10%'
          }}
        />
      </div>

      <Navbar />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="pt-36 pb-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-8"
            >
              🚀
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            >
              Let&apos;s Build{" "}
              <span className="bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
                Something Amazing
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed"
            >
              Custom mobile apps and websites tailored to your business needs. From idea to launch, we&apos;ve got you covered.
            </motion.p>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16"
            >
              Our <span className="text-cyan">Services</span>
            </motion.h2>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Mobile Applications Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[rgba(15,15,25,0.7)] border border-white/10 rounded-2xl p-8 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="text-5xl mb-6">📱</div>
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Mobile Applications</h3>
                <ul className="space-y-4">
                  <CheckItem>iOS Apps (iPhone & iPad)</CheckItem>
                  <CheckItem>Android Apps</CheckItem>
                  <CheckItem>AI-Powered Features</CheckItem>
                  <CheckItem>Beautiful, Modern Design</CheckItem>
                  <CheckItem>App Store Submission</CheckItem>
                  <CheckItem>Ongoing Support</CheckItem>
                </ul>
              </motion.div>

              {/* Websites Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="bg-[rgba(15,15,25,0.7)] border border-white/10 rounded-2xl p-8 hover:border-cyan/30 transition-all duration-300"
              >
                <div className="text-5xl mb-6">🌐</div>
                <h3 className="font-orbitron text-2xl font-bold text-white mb-6">Websites & Web Apps</h3>
                <ul className="space-y-4">
                  <CheckItem>Landing Pages</CheckItem>
                  <CheckItem>Business Websites</CheckItem>
                  <CheckItem>E-commerce Stores</CheckItem>
                  <CheckItem>Web Applications</CheckItem>
                  <CheckItem>SEO Optimization</CheckItem>
                  <CheckItem>Mobile Responsive</CheckItem>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 px-6 bg-gradient-to-b from-transparent via-cyan/[0.02] to-transparent">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-16"
            >
              How It <span className="text-cyan">Works</span>
            </motion.h2>

            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 lg:gap-0">
              <StepCard
                number={1}
                icon="💬"
                title="Contact Us"
                description="Fill the form below and tell us about your project"
              />
              <Arrow />
              <StepCard
                number={2}
                icon="📋"
                title="Free Quote"
                description="We'll discuss your needs and provide a detailed estimate"
              />
              <Arrow />
              <StepCard
                number={3}
                icon="⚙️"
                title="Development"
                description="We design and build your app or website"
              />
              <Arrow />
              <StepCard
                number={4}
                icon="🚀"
                title="Launch!"
                description="Your project goes live and we provide support"
              />
            </div>
          </div>
        </section>

        {/* Get a Free Quote Section */}
        <section className="py-20 px-6">
          <div className="max-w-2xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-orbitron text-3xl md:text-4xl font-bold text-center mb-4"
            >
              Get a <span className="bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">Free Quote</span>
            </motion.h2>
            <p className="text-white/60 text-center mb-12">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>

            {formSubmitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-[rgba(15,15,25,0.7)] border border-green/30 rounded-2xl p-12 text-center"
              >
                <div className="text-6xl mb-6">✅</div>
                <h3 className="font-orbitron text-2xl font-bold text-white mb-4">Thank You!</h3>
                <p className="text-white/70 text-lg">
                  Your request has been sent successfully. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[rgba(15,15,25,0.7)] border border-white/10 rounded-2xl p-8"
              >
                <form
                  name="quote"
                  method="POST"
                  data-netlify="true"
                  netlify-honeypot="bot-field"
                  onSubmit={handleSubmit}
                >
                  <input type="hidden" name="form-name" value="quote" />
                  <p style={{ display: 'none' }}>
                    <input name="bot-field" />
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-white/80 mb-2">
                        Your Name <span className="text-cyan">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-white/80 mb-2">
                        Email Address <span className="text-cyan">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="john@example.com"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-white/80 mb-2">
                        Phone <span className="text-white/40">(Optional)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>

                    {/* Company */}
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-white/80 mb-2">
                        Company <span className="text-white/40">(Optional)</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                        placeholder="Your Company"
                      />
                    </div>
                  </div>

                  {/* Project Type */}
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-white/80 mb-3">
                      Project Type <span className="text-cyan">*</span>
                    </label>
                    <div className="flex flex-wrap gap-4">
                      {[
                        { value: "mobile", label: "📱 Mobile App" },
                        { value: "website", label: "🌐 Website" },
                        { value: "both", label: "🎯 Both" }
                      ].map((option) => (
                        <label
                          key={option.value}
                          className={`flex items-center gap-2 px-5 py-3 rounded-xl cursor-pointer transition-all ${
                            selectedProjectType === option.value
                              ? "bg-cyan/20 border-cyan/50"
                              : "bg-white/5 border-white/10 hover:border-white/20"
                          } border`}
                        >
                          <input
                            type="radio"
                            name="project_type"
                            value={option.value}
                            required
                            className="hidden"
                            onChange={() => setSelectedProjectType(option.value)}
                          />
                          <span className="text-white">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Budget */}
                  <div className="mb-6">
                    <label htmlFor="budget" className="block text-sm font-medium text-white/80 mb-2">
                      Budget Range <span className="text-cyan">*</span>
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      required
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:outline-none focus:border-cyan/50 transition-colors appearance-none cursor-pointer"
                      defaultValue=""
                    >
                      <option value="" disabled className="bg-[#0f0f19]">Select your budget</option>
                      <option value="5000-10000" className="bg-[#0f0f19]">$5,000 - $10,000</option>
                      <option value="10000-25000" className="bg-[#0f0f19]">$10,000 - $25,000</option>
                      <option value="25000-50000" className="bg-[#0f0f19]">$25,000 - $50,000</option>
                      <option value="50000+" className="bg-[#0f0f19]">$50,000+</option>
                    </select>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <label htmlFor="description" className="block text-sm font-medium text-white/80 mb-2">
                      Project Description <span className="text-cyan">*</span>
                    </label>
                    <textarea
                      id="description"
                      name="description"
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors resize-none"
                      placeholder="Tell us about your project, goals, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-cyan to-green text-[#030308] font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-[#030308]/30 border-t-[#030308] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>Send Request →</>
                    )}
                  </button>
                </form>

                <p className="text-center text-white/50 text-sm mt-6">
                  Or email us directly at{" "}
                  <a href="mailto:info@digitalappusa.com" className="text-cyan hover:underline">
                    info@digitalappusa.com
                  </a>
                </p>
              </motion.div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
