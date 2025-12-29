"use client";

import React, { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";

// Custom Navbar with Home Button
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
              LOTTERYAI
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Lottery Ball Component - 3D Effect
function LotteryBall({ number, color, size = "normal", delay = 0 }: { number: number; color: string; size?: "normal" | "small" | "large" | "xlarge"; delay?: number }) {
  const sizeClasses = {
    small: "w-12 h-12 text-sm",
    normal: "w-16 h-16 text-xl",
    large: "w-24 h-24 text-3xl",
    xlarge: "w-28 h-28 text-4xl"
  };

  return (
    <div
      className={`${sizeClasses[size]} rounded-full flex items-center justify-center font-bold text-white relative`}
      style={{
        background: `radial-gradient(circle at 30% 30%, ${color}, ${color}dd 50%, ${color}99 100%)`,
        boxShadow: `0 8px 32px ${color}60, inset 0 -8px 16px rgba(0,0,0,0.3), inset 0 8px 16px rgba(255,255,255,0.2)`,
        animation: `ballFloat 4s ease-in-out infinite`,
        animationDelay: `${delay}s`
      }}
    >
      {/* Highlight reflection */}
      <div
        className="absolute top-[15%] left-[20%] w-[35%] h-[25%] rounded-full"
        style={{ background: 'linear-gradient(135deg, rgba(255,255,255,0.6) 0%, rgba(255,255,255,0) 100%)' }}
      />
      {/* Secondary reflection */}
      <div
        className="absolute top-[20%] left-[25%] w-[20%] h-[15%] rounded-full bg-white/40 blur-[2px]"
      />
      <span className="relative z-10 drop-shadow-lg">{number}</span>
    </div>
  );
}

// Mini Ball Component for lottery info with numbers
function MiniBall({ number, color = "white", isBonus = false }: { number: number; color?: string; isBonus?: boolean }) {
  return (
    <div
      className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold relative"
      style={{
        background: isBonus ? `radial-gradient(circle at 30% 30%, ${color}, ${color}dd 50%, ${color}99 100%)` : 'radial-gradient(circle at 30% 30%, #ffffff, #e0e0e0 50%, #c0c0c0 100%)',
        boxShadow: isBonus ? `0 2px 8px ${color}60, inset 0 -2px 4px rgba(0,0,0,0.2)` : '0 2px 8px rgba(0,0,0,0.2), inset 0 -2px 4px rgba(0,0,0,0.1)',
        color: isBonus ? '#fff' : '#1a1a2e'
      }}
    >
      {/* Highlight */}
      <div className="absolute top-[15%] left-[20%] w-[30%] h-[20%] rounded-full bg-white/40" />
      <span className="relative z-10">{number}</span>
    </div>
  );
}

// Phone Frame Component
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-[45px] p-3 relative shadow-2xl ${className}`}>
      {/* Dynamic Island */}
      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-[90px] h-[28px] bg-[#0a0a0a] rounded-[20px] z-20" />
      {/* Screen */}
      <div className="w-[280px] h-[580px] rounded-[38px] overflow-hidden bg-[#0a0a0f] relative">
        {children}
      </div>
      {/* Home Indicator */}
      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-[100px] h-1 bg-white/20 rounded-full" />
    </div>
  );
}

// Generate Screen Component
function GenerateScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0f1420] to-[#0a0a12] p-4 pt-12">
      {/* Header */}
      <div className="text-center mb-6">
        <h3 className="text-white text-xl font-bold">LotteryAI</h3>
        <p className="text-gray-400 text-xs">Smart Number Generator</p>
      </div>

      {/* Lottery Toggle */}
      <div className="flex justify-center gap-2 mb-6">
        <button className="px-4 py-2 bg-[#DC3545] text-white text-xs rounded-full font-semibold">
          Powerball
        </button>
        <button className="px-4 py-2 bg-[#1a1a2e] text-gray-400 text-xs rounded-full">
          Mega Millions
        </button>
      </div>

      {/* Strategy Cards */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        <div className="bg-gradient-to-br from-[#FFC107]/20 to-transparent border border-[#FFC107]/30 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">🔥</div>
          <div className="text-white text-xs font-semibold">Hot Numbers</div>
        </div>
        <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">❄️</div>
          <div className="text-gray-400 text-xs">Cold Numbers</div>
        </div>
        <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">🧠</div>
          <div className="text-gray-400 text-xs">Smart Mix</div>
        </div>
        <div className="bg-[#1a1a2e] border border-white/10 rounded-xl p-3 text-center">
          <div className="text-2xl mb-1">🎲</div>
          <div className="text-gray-400 text-xs">Pure Random</div>
        </div>
      </div>

      {/* Generated Numbers */}
      <div className="bg-[#1a1a2e] rounded-2xl p-4 mb-6">
        <div className="text-gray-400 text-xs text-center mb-3">Generated Numbers</div>
        <div className="flex justify-center gap-2 mb-2">
          {[7, 14, 23, 38, 45].map((num, i) => (
            <div key={i} className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold text-[#0a0a12] text-sm">
              {num}
            </div>
          ))}
        </div>
        <div className="flex justify-center">
          <div className="w-10 h-10 rounded-full bg-[#DC3545] flex items-center justify-center font-bold text-white text-sm">
            12
          </div>
        </div>
      </div>

      {/* Generate Button */}
      <button className="w-full py-4 bg-gradient-to-r from-[#FFC107] to-[#FF9500] text-black font-bold rounded-2xl text-lg shadow-lg shadow-[#FFC107]/30">
        Generate Numbers
      </button>
    </div>
  );
}

// Statistics Screen Component
function StatisticsScreen() {
  return (
    <div className="w-full h-full bg-gradient-to-b from-[#0f1420] to-[#0a0a12] p-4 pt-12">
      {/* Header */}
      <div className="text-center mb-4">
        <h3 className="text-white text-lg font-bold">AI Insights</h3>
      </div>

      {/* Hot Numbers */}
      <div className="bg-[#1a1a2e] rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">🔥</span>
          <span className="text-white text-sm font-semibold">Hot Numbers</span>
        </div>
        <div className="flex gap-2">
          {[23, 7, 14, 32, 45].map((num, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#FFC107] to-[#FF6B00] flex items-center justify-center text-white text-xs font-bold">
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Cold Numbers */}
      <div className="bg-[#1a1a2e] rounded-xl p-3 mb-3">
        <div className="flex items-center gap-2 mb-2">
          <span className="text-lg">❄️</span>
          <span className="text-white text-sm font-semibold">Cold Numbers</span>
        </div>
        <div className="flex gap-2">
          {[3, 17, 28, 41, 59].map((num, i) => (
            <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-[#3498DB] to-[#2980B9] flex items-center justify-center text-white text-xs font-bold">
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Frequency Chart */}
      <div className="bg-[#1a1a2e] rounded-xl p-3 mb-3">
        <div className="text-white text-sm font-semibold mb-3">Frequency Analysis</div>
        <div className="space-y-2">
          {[
            { num: 23, pct: 85, color: "#FFC107" },
            { num: 7, pct: 78, color: "#FFC107" },
            { num: 14, pct: 72, color: "#10B981" },
            { num: 45, pct: 65, color: "#10B981" },
            { num: 3, pct: 25, color: "#3498DB" },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <span className="text-white text-xs w-6">{item.num}</span>
              <div className="flex-1 h-2 bg-[#0a0a0f] rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${item.pct}%`, backgroundColor: item.color }}
                />
              </div>
              <span className="text-gray-400 text-xs w-8">{item.pct}%</span>
            </div>
          ))}
        </div>
      </div>

      {/* Last Draw */}
      <div className="bg-gradient-to-r from-[#9B59B6]/20 to-[#3498DB]/20 border border-[#9B59B6]/30 rounded-xl p-3">
        <div className="text-gray-400 text-xs mb-2">Last Powerball Draw</div>
        <div className="flex gap-2">
          {[12, 28, 33, 47, 58].map((num, i) => (
            <div key={i} className="w-7 h-7 rounded-full bg-white flex items-center justify-center text-[#0a0a12] text-xs font-bold">
              {num}
            </div>
          ))}
          <div className="w-7 h-7 rounded-full bg-[#DC3545] flex items-center justify-center text-white text-xs font-bold">
            6
          </div>
        </div>
      </div>
    </div>
  );
}

// Strategy Card Component with colored left border
function StrategyCard({ icon, title, description, color }: { icon: string; title: string; description: string; color: string }) {
  return (
    <div
      className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/5 hover:border-white/20 transition-all duration-300 group relative overflow-hidden"
      style={{ boxShadow: `0 0 30px ${color}10` }}
    >
      {/* Colored left border */}
      <div
        className="absolute left-0 top-0 bottom-0 w-1 rounded-l-2xl"
        style={{ backgroundColor: color }}
      />
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-4 transition-transform group-hover:scale-110"
        style={{ backgroundColor: `${color}20` }}
      >
        {icon}
      </div>
      <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// Lottery Logo Component with mini balls
function LotteryLogo({ name, color }: { name: string; color: string }) {
  const isPowerball = name === "Powerball";
  const bonusColor = isPowerball ? "#DC3545" : "#FFC107";
  const rangeText = isPowerball ? "5 numbers (1-69) + Powerball (1-26)" : "5 numbers (1-70) + Mega Ball (1-25)";
  const mainNumbers = isPowerball ? [7, 14, 23, 38, 45] : [3, 17, 28, 42, 56];
  const bonusNumber = isPowerball ? 12 : 8;

  return (
    <div
      className="bg-[#1a1a2e] rounded-2xl p-6 border border-white/5"
      style={{ boxShadow: `0 0 30px ${color}20` }}
    >
      {/* Header */}
      <div className="flex items-center justify-center gap-3 mb-4">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
          style={{ backgroundColor: color }}
        >
          {isPowerball ? "🎱" : "💰"}
        </div>
        <div className="text-left">
          <div className="text-white font-bold text-lg">{name}</div>
          <div className="text-gray-400 text-sm">Full Support</div>
        </div>
      </div>

      {/* Mini balls row with numbers */}
      <div className="flex items-center justify-center gap-2 mb-3">
        {mainNumbers.map((num, i) => (
          <MiniBall key={i} number={num} />
        ))}
        <span className="text-gray-500 mx-1">+</span>
        <MiniBall number={bonusNumber} color={bonusColor} isBonus />
      </div>

      {/* Range info */}
      <p className="text-gray-500 text-xs text-center">{rangeText}</p>
    </div>
  );
}

// Pricing Card Component
function PricingCard({ title, price, period, subtitle, features, popular, buttonText, buttonColor }: {
  title: string;
  price: string;
  period: string;
  subtitle?: string;
  features: string[];
  popular?: boolean;
  buttonText: string;
  buttonColor: string;
}) {
  return (
    <div className={`relative bg-[#1a1a2e] rounded-3xl p-8 border ${popular ? 'border-[#FFC107]/50' : 'border-white/5'}`}>
      {popular && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-[#FFC107] to-[#FF9500] text-black text-sm font-bold rounded-full">
          Most Popular
        </div>
      )}
      <div className="text-center mb-6">
        <h3 className="text-white text-2xl font-bold mb-2">{title}</h3>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-4xl font-bold text-white">{price}</span>
          <span className="text-gray-400">{period}</span>
        </div>
        {subtitle && (
          <p className="text-[#10B981] text-sm mt-2 font-medium">{subtitle}</p>
        )}
      </div>
      <ul className="space-y-3 mb-8">
        {features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 text-gray-300">
            <span className="text-[#10B981]">✓</span>
            {feature}
          </li>
        ))}
      </ul>
      <button
        className="w-full py-4 rounded-xl font-bold text-lg transition-all hover:opacity-90"
        style={{ backgroundColor: buttonColor, color: popular ? '#000' : '#fff' }}
      >
        {buttonText}
      </button>
    </div>
  );
}

// FAQ Item Component
function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div className="border-b border-white/10">
      <button
        className="w-full py-5 flex items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-white font-semibold pr-4">{question}</span>
        <span className={`text-[#FFC107] text-2xl transition-transform ${isOpen ? 'rotate-45' : ''}`}>+</span>
      </button>
      <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-40 pb-5' : 'max-h-0'}`}>
        <p className="text-gray-400 leading-relaxed">{answer}</p>
      </div>
    </div>
  );
}

export default function LotteryAIPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "Can LotteryAI guarantee winning numbers?",
      answer: "No. LotteryAI uses statistical analysis and AI algorithms to generate numbers based on historical patterns, but lottery draws are random events. No system can guarantee winning numbers."
    },
    {
      question: "How does the AI analysis work?",
      answer: "Our AI analyzes millions of past lottery draws to identify frequency patterns, hot and cold numbers, and statistical trends. It uses this data to generate number combinations based on your chosen strategy."
    },
    {
      question: "Which lotteries are supported?",
      answer: "Currently, LotteryAI supports Powerball and Mega Millions, the two largest US lotteries. We plan to add more lotteries in future updates."
    },
    {
      question: "Is my data private?",
      answer: "Absolutely. All number generation happens locally on your device. We never store your generated numbers or personal information on our servers."
    },
    {
      question: "What's the difference between strategies?",
      answer: "Hot Numbers uses frequently drawn numbers, Cold Numbers uses rarely drawn ones, Smart Mix combines both approaches with AI optimization, and Pure Random generates completely random combinations."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0A0A12] relative overflow-hidden">
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#FFC107]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#DC3545]/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#9B59B6]/5 rounded-full blur-[150px]" />
      </div>

      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center px-4 py-32">
        {/* Floating Lottery Balls - Hidden on mobile, visible on lg+ */}
        <div className="hidden lg:block absolute inset-0 overflow-hidden pointer-events-none">
          {/* === LEFT SIDE OF PHONE === */}
          <div className="absolute top-[22%] right-[35%]">
            <LotteryBall number={7} color="#FFC107" size="xlarge" delay={0} />
          </div>
          <div className="absolute top-[42%] right-[38%]">
            <LotteryBall number={23} color="#F5F5F5" size="large" delay={0.5} />
          </div>
          <div className="absolute top-[58%] right-[33%]">
            <LotteryBall number={12} color="#DC3545" size="large" delay={0.6} />
          </div>
          <div className="absolute top-[72%] right-[36%]">
            <LotteryBall number={14} color="#FFC107" size="normal" delay={1.2} />
          </div>

          {/* === RIGHT SIDE OF PHONE === */}
          <div className="absolute top-[20%] right-[4%]">
            <LotteryBall number={45} color="#F5F5F5" size="large" delay={0.3} />
          </div>
          <div className="absolute top-[38%] right-[2%]">
            <LotteryBall number={32} color="#FFC107" size="xlarge" delay={0.8} />
          </div>
          <div className="absolute top-[55%] right-[5%]">
            <LotteryBall number={8} color="#DC3545" size="normal" delay={1.5} />
          </div>
          <div className="absolute top-[70%] right-[3%]">
            <LotteryBall number={38} color="#F5F5F5" size="large" delay={1.0} />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#FFC107]/10 border border-[#FFC107]/30 rounded-full mb-6">
              <span className="text-[#FFC107]">🎰</span>
              <span className="text-[#FFC107] text-sm font-medium">AI-Powered Lottery Assistant</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Smart Numbers,</span>
              <br />
              <span className="bg-gradient-to-r from-[#FFC107] via-[#FF9500] to-[#DC3545] bg-clip-text text-transparent">
                Better Odds
              </span>
            </h1>

            <p className="text-xl text-gray-400 mb-8 max-w-lg mx-auto lg:mx-0">
              Let AI analyze millions of lottery draws to generate optimized number combinations. Choose your strategy and play smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://apps.apple.com/ae/app/lottery-ai/id6605940433"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#FFC107] to-[#FF9500] text-black font-bold rounded-2xl text-lg shadow-lg shadow-[#FFC107]/30 hover:shadow-[#FFC107]/50 transition-all"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                Download on App Store
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 text-white font-semibold rounded-2xl text-lg border border-white/20 hover:bg-white/20 transition-all"
              >
                Learn More
                <span>→</span>
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div>
                <div className="text-3xl font-bold text-white">10M+</div>
                <div className="text-gray-400 text-sm">Draws Analyzed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">4</div>
                <div className="text-gray-400 text-sm">AI Strategies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white">100%</div>
                <div className="text-gray-400 text-sm">Private & Local</div>
              </div>
            </div>
          </div>

          {/* Right - Phone Mockup */}
          <div className="flex justify-center">
            <div className="relative">
              <PhoneFrame>
                <GenerateScreen />
              </PhoneFrame>
              {/* Glow Effect */}
              <div className="absolute -inset-10 bg-gradient-to-r from-[#FFC107]/20 via-[#DC3545]/20 to-[#9B59B6]/20 blur-3xl -z-10 rounded-full" />
            </div>
          </div>
        </div>
      </section>

      {/* ===== HOW AI WORKS SECTION ===== */}
      <section id="how-it-works" className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              How Our <span className="text-[#FFC107]">AI</span> Works
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Advanced machine learning algorithms analyze historical lottery data to identify patterns and trends
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left - Steps */}
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Data Collection",
                  description: "We continuously collect and update lottery draw results from official sources, building a comprehensive database of millions of draws.",
                  color: "#FFC107"
                },
                {
                  step: "02",
                  title: "Pattern Analysis",
                  description: "Our AI algorithms analyze frequency distributions, number pairs, sequences, and statistical anomalies across all historical data.",
                  color: "#3498DB"
                },
                {
                  step: "03",
                  title: "Strategy Generation",
                  description: "Based on your chosen strategy, the AI generates optimized number combinations weighted by the analyzed patterns.",
                  color: "#9B59B6"
                },
                {
                  step: "04",
                  title: "Local Processing",
                  description: "All number generation happens on your device. Your data never leaves your phone, ensuring complete privacy.",
                  color: "#10B981"
                }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div
                    className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-lg"
                    style={{ backgroundColor: `${item.color}20`, color: item.color }}
                  >
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-white text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Right - Phone Mockup */}
            <div className="flex justify-center">
              <div className="relative">
                <PhoneFrame>
                  <StatisticsScreen />
                </PhoneFrame>
                <div className="absolute -inset-10 bg-gradient-to-r from-[#3498DB]/20 to-[#9B59B6]/20 blur-3xl -z-10 rounded-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 4 STRATEGIES SECTION ===== */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-[#1a1a2e]/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Choose Your <span className="text-[#DC3545]">Strategy</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Four unique AI-powered approaches to number generation, each with its own statistical philosophy
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StrategyCard
              icon="🔥"
              title="Hot Numbers"
              description="Focus on frequently drawn numbers. These numbers have appeared more often in recent draws, riding the momentum."
              color="#FFC107"
            />
            <StrategyCard
              icon="❄️"
              title="Cold Numbers"
              description="Target numbers that haven't appeared recently. Statistical theory suggests they may be 'due' to appear soon."
              color="#3498DB"
            />
            <StrategyCard
              icon="🧠"
              title="Smart Mix"
              description="AI-optimized blend of hot and cold numbers, balanced with frequency analysis and pattern recognition."
              color="#10B981"
            />
            <StrategyCard
              icon="🎲"
              title="Pure Random"
              description="True randomness with no bias. Every number has an equal chance, just like the actual lottery draw."
              color="#9B59B6"
            />
          </div>
        </div>
      </section>

      {/* ===== AI INSIGHTS SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              AI <span className="text-[#9B59B6]">Insights</span> & Statistics
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Real-time analytics and historical data at your fingertips
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { value: "10M+", label: "Historical Draws", icon: "📊", color: "#FFC107" },
              { value: "99.9%", label: "Data Accuracy", icon: "✓", color: "#10B981" },
              { value: "< 1s", label: "Generation Time", icon: "⚡", color: "#3498DB" },
              { value: "24/7", label: "Live Updates", icon: "🔄", color: "#9B59B6" }
            ].map((stat, i) => (
              <div
                key={i}
                className="bg-[#1a1a2e] rounded-2xl p-6 text-center border border-white/5"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-gradient-to-br from-[#FFC107]/10 to-transparent border border-[#FFC107]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">📈</div>
              <h3 className="text-white text-xl font-bold mb-2">Frequency Charts</h3>
              <p className="text-gray-400">Visual representation of how often each number has been drawn over time.</p>
            </div>
            <div className="bg-gradient-to-br from-[#DC3545]/10 to-transparent border border-[#DC3545]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-white text-xl font-bold mb-2">Pair Analysis</h3>
              <p className="text-gray-400">Discover which number combinations appear together most frequently.</p>
            </div>
            <div className="bg-gradient-to-br from-[#3498DB]/10 to-transparent border border-[#3498DB]/20 rounded-2xl p-6">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-white text-xl font-bold mb-2">Draw History</h3>
              <p className="text-gray-400">Complete archive of past lottery results with search and filter options.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SUPPORTED LOTTERIES SECTION ===== */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-[#1a1a2e]/30 to-transparent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Supported <span className="text-[#3498DB]">Lotteries</span>
          </h2>
          <p className="text-xl text-gray-400 mb-12">
            Official data from America&apos;s biggest lottery games
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <LotteryLogo name="Powerball" color="#DC3545" />
            <LotteryLogo name="Mega Millions" color="#FFC107" />
          </div>

          <p className="text-gray-500 mt-8 text-sm">
            More lotteries coming soon including state-specific games
          </p>
        </div>
      </section>

      {/* ===== PRICING SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple <span className="text-[#10B981]">Pricing</span>
            </h2>
            <p className="text-xl text-gray-400">
              Choose the plan that fits your play style
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <PricingCard
              title="Premium"
              price="$2.99"
              period="/mo"
              subtitle="or $19.99/year (Save 45%)"
              features={[
                "All 4 AI strategies",
                "Advanced analytics & insights",
                "Unlimited draw history",
                "Number pattern alerts",
                "Priority support"
              ]}
              popular
              buttonText="Go Premium"
              buttonColor="#FFC107"
            />
          </div>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section className="relative py-32 px-4 bg-gradient-to-b from-transparent via-[#1a1a2e]/30 to-transparent">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Frequently Asked <span className="text-[#FFC107]">Questions</span>
            </h2>
          </div>

          <div className="bg-[#1a1a2e]/50 rounded-3xl p-8 border border-white/5">
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                question={faq.question}
                answer={faq.answer}
                isOpen={openFAQ === i}
                onClick={() => setOpenFAQ(openFAQ === i ? null : i)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ===== DISCLAIMER SECTION ===== */}
      <section className="relative py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-[#DC3545]/10 to-[#FFC107]/10 border border-[#DC3545]/30 rounded-2xl p-8">
            <div className="flex items-start gap-4">
              <div className="text-4xl">⚠️</div>
              <div>
                <h3 className="text-white text-xl font-bold mb-3">Important Disclaimer</h3>
                <p className="text-gray-400 leading-relaxed mb-4">
                  LotteryAI is designed for entertainment purposes only. Lottery games are games of chance, and no software, algorithm, or system can guarantee winning numbers or improve your odds of winning.
                </p>
                <p className="text-gray-400 leading-relaxed mb-4">
                  Our AI analyzes historical data and patterns, but past results do not influence future draws. Each lottery draw is an independent random event.
                </p>
                <p className="text-gray-500 text-sm">
                  Please play responsibly. If you or someone you know has a gambling problem, please contact the National Problem Gambling Helpline at 1-800-522-4700.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER CTA SECTION ===== */}
      <section className="relative py-32 px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Lottery Balls Decoration - 3D effect */}
          <div className="flex justify-center items-end gap-3 md:gap-5 mb-10">
            <LotteryBall number={7} color="#FFC107" size="normal" delay={0} />
            <LotteryBall number={14} color="#DC3545" size="large" delay={0.2} />
            <LotteryBall number={23} color="#3498DB" size="xlarge" delay={0.4} />
            <LotteryBall number={38} color="#9B59B6" size="large" delay={0.6} />
            <LotteryBall number={45} color="#10B981" size="normal" delay={0.8} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Ready to Play <span className="text-[#FFC107]">Smarter</span>?
          </h2>
          <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
            Download LotteryAI today and let artificial intelligence help you pick your next winning numbers.
          </p>

          <a
            href="https://apps.apple.com/ae/app/lottery-ai/id6605940433"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-gradient-to-r from-[#FFC107] to-[#FF9500] text-black font-bold rounded-2xl text-xl shadow-lg shadow-[#FFC107]/30 hover:shadow-[#FFC107]/50 transition-all hover:scale-105"
          >
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            Download on App Store
          </a>

          <p className="text-gray-500 mt-6 text-sm">
            Free to download. Premium features available.
          </p>
        </div>
      </section>

      <Footer />

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes ballFloat {
          0%, 100% {
            transform: translateY(0) rotate(0deg) scale(1);
          }
          25% {
            transform: translateY(-12px) rotate(5deg) scale(1.02);
          }
          50% {
            transform: translateY(-20px) rotate(0deg) scale(1);
          }
          75% {
            transform: translateY(-12px) rotate(-5deg) scale(1.02);
          }
        }
      `}</style>
    </main>
  );
}
