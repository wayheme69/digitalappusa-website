"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { motion, AnimatePresence } from "framer-motion";

// Custom Navbar with Home Button
function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#030308]/90 backdrop-blur-xl border-b border-[#007AFF]/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-6">
            <Link
              href="/"
              className="flex items-center gap-2 text-[#5CA0E8] text-sm font-semibold px-5 py-2.5 bg-[#007AFF]/10 border border-[#007AFF]/30 rounded-full hover:bg-[#007AFF]/20 transition-all"
            >
              <span>←</span>
              <span>Home</span>
            </Link>
            <span
              className="font-orbitron text-2xl font-bold bg-clip-text text-transparent"
              style={{
                backgroundImage: "linear-gradient(to bottom, #E0F7FF, #87CEEB, #4A90D9, #2E5A87)",
              }}
            >
              KEMMI
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Multilingual conversations data
const multilingualConversations = [
  { user: "Hi KEMMI!", kemmi: "Hello! I'm so happy to meet you! 💙" },
  { user: "Bonjour KEMMI!", kemmi: "Salut ! Ravie de te rencontrer ! 💙" },
  { user: "¡Hola KEMMI!", kemmi: "¡Hola! ¡Encantada de conocerte! 💙" },
  { user: "こんにちは KEMMI!", kemmi: "こんにちは！会えて嬉しいです！💙" },
  { user: "Ciao KEMMI!", kemmi: "Ciao! Sono felice di conoscerti! 💙" },
  { user: "Olá KEMMI!", kemmi: "Olá! Prazer em te conhecer! 💙" },
  { user: "Hallo KEMMI!", kemmi: "Hallo! Freut mich, dich kennenzulernen! 💙" },
  { user: "مرحبا KEMMI!", kemmi: "مرحبا! سعيدة بلقائك! 💙" },
];

// Animated Multilingual Chat Component
function AnimatedMultilingualChat() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % multilingualConversations.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const currentConvo = multilingualConversations[currentIndex];

  return (
    <div className="space-y-4">
      {/* User message - Dark background like iOS app */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`user-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4 }}
          className="flex justify-end"
        >
          <div className="max-w-[80%] px-4 py-3 rounded-2xl bg-black text-white rounded-br-md shadow-lg">
            <p className="text-sm md:text-base">{currentConvo.user}</p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* KEMMI response - Ice Blue gradient like iOS app */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`kemmi-${currentIndex}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex justify-start"
        >
          <div
            className="max-w-[80%] px-4 py-3 rounded-2xl text-white rounded-bl-md shadow-lg"
            style={{
              background: "linear-gradient(135deg, #007AFF 0%, #0051D4 100%)",
              boxShadow: "0 4px 15px rgba(0, 122, 255, 0.3)"
            }}
          >
            <p className="text-sm md:text-base">{currentConvo.kemmi}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// Flags array - USA first
const flags = ["🇺🇸", "🇬🇧", "🇫🇷", "🇩🇪", "🇪🇸", "🇯🇵", "🇨🇳", "🇧🇷", "🇮🇹", "🇰🇷", "🇸🇦", "🇮🇳", "🇹🇷", "🇻🇳", "🇹🇭", "🇵🇹"];

// Feature Card Component
function FeatureCard({
  icon,
  title,
  delay = 0
}: {
  icon: string;
  title: string;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="group p-6 rounded-2xl bg-white/5 border border-white/10 hover:border-[#007AFF]/30 transition-all duration-300 text-center hover:-translate-y-1"
    >
      <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="font-orbitron text-lg font-semibold group-hover:text-[#5CA0E8] transition-colors">
        {title}
      </h3>
    </motion.div>
  );
}


// Features data
const features = [
  { icon: "🌍", title: "57 Languages" },
  { icon: "🎙️", title: "Natural Voice" },
  { icon: "🧠", title: "Remembers You" },
  { icon: "💬", title: "Always Available" },
  { icon: "🎭", title: "Animated Character" },
];

export default function KemmiPage() {
  return (
    <div className="min-h-screen bg-[#030308] overflow-hidden">
      <Navbar />

      {/* Background Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,212,255,0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
          animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(0,255,150,0.12) 0%, transparent 70%)",
            filter: "blur(80px)",
          }}
          animate={{ x: [0, -40, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 pt-20 relative z-10">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

            {/* Left Side - Text & Chat */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="mb-4"
              >
                <span className="inline-block px-4 py-2 rounded-full bg-[#007AFF]/10 border border-[#007AFF]/30 text-sm text-[#5CA0E8] font-medium">
                  🤖 Your AI Companion
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              >
                <span className="text-white">Meet </span>
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #E0F7FF, #87CEEB, #4A90D9, #2E5A87)",
                  }}
                >
                  KEMMI
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-white/60 text-lg mb-8 max-w-md"
              >
                Your friendly AI companion who speaks 57 languages and is always there when you need someone to talk to.
              </motion.p>

              {/* Animated Multilingual Chat Preview */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="bg-[#0a0a1a] border border-[#1a1a2e] rounded-2xl p-5 max-w-md"
              >
                <AnimatedMultilingualChat />
              </motion.div>
            </motion.div>

            {/* Right Side - KEMMI Character with Flags */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex flex-col items-center justify-center"
            >
              {/* KEMMI Title above character - Ice Blue gradient */}
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="font-orbitron text-5xl md:text-6xl lg:text-7xl font-bold mb-4 text-center"
              >
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to bottom, #E0F7FF, #87CEEB, #4A90D9, #2E5A87)",
                    filter: "drop-shadow(0 0 30px rgba(135,206,235,0.5))",
                  }}
                >
                  KEMMI
                </span>
              </motion.h2>

              {/* Flags in flexbox - responsive, no overlap */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-wrap justify-center gap-3 md:gap-4 mb-6 max-w-[350px] md:max-w-[450px]"
              >
                {flags.map((flag, index) => (
                  <span key={index} className="text-3xl md:text-4xl">
                    {flag}
                  </span>
                ))}
              </motion.div>

              {/* KEMMI Character */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="relative flex items-center justify-center"
              >
                {/* Glow behind character */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-[80%] h-[80%] bg-[#87CEEB]/20 rounded-full blur-3xl" />
                </div>

                <Image
                  src="/images/KEMMICHARACTER.png"
                  alt="KEMMI - Your AI Companion"
                  width={400}
                  height={600}
                  className="object-contain z-10 w-auto max-h-[350px] md:max-h-[450px] lg:max-h-[500px]"
                  priority
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-4">
              Why <span className="text-[#5CA0E8]">KEMMI</span>?
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto">
              More than just an AI — KEMMI is your companion who understands, remembers, and speaks your language.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 overflow-hidden text-center"
          >
            {/* Background glow - Ice Blue */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#007AFF]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#5CA0E8]/10 rounded-full blur-3xl" />

            <div className="relative">
              <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
                Ready to meet <span className="text-[#5CA0E8]">KEMMI</span>?
              </h2>
              <p className="text-white/60 mb-8 max-w-xl mx-auto">
                Download KEMMI and start your conversation with your new AI companion today.
              </p>

              <Button href="#" variant="primary">
                Download on App Store
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <Link href="/" className="inline-block mb-4">
            <span className="font-orbitron text-xl font-bold bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
              DIGITALAPP
            </span>
          </Link>
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Digital App LLC. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
