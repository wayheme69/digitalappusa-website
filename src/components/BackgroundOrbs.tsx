"use client";

import { motion } from "framer-motion";

export default function BackgroundOrbs() {
  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Cyan Orb - Top Left */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Green Orb - Bottom Right */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 150, 0.12) 0%, transparent 70%)",
          filter: "blur(80px)",
          bottom: "-15%",
          right: "-15%",
        }}
        animate={{
          x: [0, -40, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Cyan Orb - Center Right */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 212, 255, 0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
          top: "40%",
          right: "10%",
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, 40, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Small Green Orb - Left Center */}
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(0, 255, 150, 0.08) 0%, transparent 70%)",
          filter: "blur(50px)",
          top: "60%",
          left: "5%",
        }}
        animate={{
          x: [0, 20, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
