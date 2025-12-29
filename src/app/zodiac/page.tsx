"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ZodiacPage() {
  return (
    <div className="min-h-screen bg-[#030308] text-white relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background Orbs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(0, 212, 255, 0.08)',
            top: '10%',
            left: '-15%'
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(0, 255, 150, 0.06)',
            top: '60%',
            right: '-10%'
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center z-10"
      >
        {/* Icon */}
        <div className="text-7xl mb-6">⭐</div>

        {/* Title */}
        <h1 className="font-orbitron text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
          ZodiacMatch
        </h1>

        {/* Badge */}
        <div className="inline-block px-4 py-2 rounded-full bg-gradient-to-r from-cyan to-green text-[#030308] text-sm font-bold mb-6">
          Coming Soon
        </div>

        {/* Description */}
        <p className="text-white/60 text-lg max-w-md mx-auto mb-10">
          Discover your cosmic compatibility. Stay tuned!
        </p>

        {/* Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-xl text-white hover:bg-white/10 transition-all"
        >
          <span>←</span>
          <span>Back to Home</span>
        </Link>
      </motion.div>

      {/* Footer */}
      <p className="absolute bottom-8 text-white/30 text-xs z-10">
        © 2025 Digital App LLC
      </p>
    </div>
  );
}
