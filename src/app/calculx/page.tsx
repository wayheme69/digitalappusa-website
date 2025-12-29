"use client";

import Link from "next/link";
import Button from "@/components/Button";

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
              CALCULX
            </span>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Calculator Button Component
function CalcButton({
  children,
  variant = "num",
  className = ""
}: {
  children: React.ReactNode;
  variant?: "func" | "num" | "op" | "eq";
  className?: string;
}) {
  const variants = {
    func: "bg-[rgba(100,110,120,0.4)] text-white",
    num: "bg-[rgba(45,55,65,0.6)] text-white border border-white/8",
    op: "bg-gradient-to-br from-[#3B82F6] to-[#2563EB] text-white shadow-lg shadow-blue-500/40",
    eq: "bg-gradient-to-br from-[#10B981] to-[#059669] text-white shadow-lg shadow-green-500/40 relative overflow-hidden",
  };

  return (
    <button className={`h-[58px] rounded-[18px] text-2xl font-medium flex items-center justify-center ${variants[variant]} ${className}`}>
      {children}
      {variant === "eq" && (
        <div className="absolute bottom-0 left-0 h-[5px] bg-gradient-to-r from-white/90 to-white/50 rounded-b-[18px] animate-eqProgress" />
      )}
    </button>
  );
}

// Phone Frame Component
function PhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-[50px] p-3 relative shadow-2xl ${className}`}>
      {/* Dynamic Island */}
      <div className="absolute top-[18px] left-1/2 -translate-x-1/2 w-[90px] h-7 bg-[#0a0a0a] rounded-[20px] z-20" />
      <div className="w-full h-full rounded-[40px] overflow-hidden bg-[#0a0a0f]">
        {children}
      </div>
    </div>
  );
}

// Small Phone Frame for sections
function SmallPhoneFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] rounded-[35px] p-2 relative shadow-xl ${className}`}>
      {/* Dynamic Island */}
      <div className="absolute top-3 left-1/2 -translate-x-1/2 w-[60px] h-5 bg-[#0a0a0a] rounded-[15px] z-20" />
      <div className="w-full h-full rounded-[28px] overflow-hidden bg-[#0a0a0f]">
        {children}
      </div>
    </div>
  );
}

// Calculator Screen Component - HERO
function CalculatorScreen() {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#0a0a15] via-[#0d1520] to-[#0a1015] relative">
      <div className="astro-pattern" />
      {/* Display Area */}
      <div className="flex-1 flex flex-col justify-end p-5 pb-2">
        <div className="bg-[rgba(30,40,50,0.4)] rounded-[20px] p-6 backdrop-blur border border-white/5">
          <div className="text-[52px] font-light text-white text-right font-inter">0</div>
        </div>
      </div>
      {/* Buttons Grid */}
      <div className="p-4 pb-5 grid grid-cols-4 gap-3 relative">
        <CalcButton variant="func">C</CalcButton>
        <CalcButton variant="func">±</CalcButton>
        <CalcButton variant="func">%</CalcButton>
        <CalcButton variant="op">÷</CalcButton>
        <CalcButton>7</CalcButton>
        <CalcButton>8</CalcButton>
        <CalcButton>9</CalcButton>
        <CalcButton variant="op">×</CalcButton>
        <CalcButton>4</CalcButton>
        <CalcButton>5</CalcButton>
        <CalcButton>6</CalcButton>
        <CalcButton variant="op">−</CalcButton>
        <CalcButton>1</CalcButton>
        <CalcButton>2</CalcButton>
        <CalcButton>3</CalcButton>
        <CalcButton variant="op">+</CalcButton>
        <CalcButton className="col-span-2 !justify-start !pl-6">0</CalcButton>
        <CalcButton>.</CalcButton>
        <CalcButton variant="eq">=</CalcButton>
        {/* Finger positioned on = button */}
        <div className="absolute bottom-[5px] right-[18px] text-5xl animate-fingerTap drop-shadow-2xl z-50">
          👆
        </div>
      </div>
    </div>
  );
}

// Mini Calculator Screen Component
function MiniCalculatorScreen({ showFinger = false }: { showFinger?: boolean }) {
  return (
    <div className="h-full flex flex-col bg-gradient-to-br from-[#0a0a15] via-[#0d1520] to-[#0a1015] relative">
      <div className="astro-pattern" />
      <div className="flex-1 flex items-end justify-end p-4">
        <div className="bg-[rgba(30,40,50,0.4)] rounded-[14px] p-4 w-full text-right border border-white/5">
          <span className="text-[32px] font-light text-white">0</span>
        </div>
      </div>
      <div className="p-2.5 pb-3 grid grid-cols-4 gap-[7px]">
        {["C", "±", "%", "÷", "7", "8", "9", "×", "4", "5", "6", "−", "1", "2", "3", "+"].map((btn) => (
          <div key={btn} className={`h-[38px] rounded-xl text-[15px] font-medium flex items-center justify-center text-white ${
            ["÷", "×", "−", "+"].includes(btn) ? "bg-gradient-to-br from-[#3B82F6] to-[#2563EB]" :
            ["C", "±", "%"].includes(btn) ? "bg-[rgba(100,110,120,0.4)]" : "bg-[rgba(45,55,65,0.6)]"
          }`}>{btn}</div>
        ))}
        <div className="col-span-2 h-[38px] rounded-xl bg-[rgba(45,55,65,0.6)] text-[15px] text-white flex items-center pl-4">0</div>
        <div className="h-[38px] rounded-xl bg-[rgba(45,55,65,0.6)] text-[15px] text-white flex items-center justify-center">.</div>
        <div className="h-[38px] rounded-xl bg-gradient-to-br from-[#10B981] to-[#059669] text-[15px] text-white flex items-center justify-center">=</div>
      </div>
      {showFinger && (
        <div className="absolute -bottom-5 right-2.5 text-[30px] animate-fingerTap drop-shadow-xl z-50">👆</div>
      )}
    </div>
  );
}

// Login Screen Component
function LoginScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-[#0a0a15] to-[#0d1520] flex flex-col items-center p-5 pt-[50px] relative">
      <div className="astro-pattern" />
      <div className="w-[50px] h-[50px] bg-gradient-to-br from-[#3479E8] to-[#2563EB] rounded-xl flex items-center justify-center text-2xl mb-3 relative z-10">🔐</div>
      <div className="font-orbitron text-[22px] font-bold bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] bg-clip-text text-transparent mb-1 relative z-10">CALCULX</div>
      <div className="text-[11px] text-white/50 mb-1.5 relative z-10">Secure Messaging</div>
      <div className="text-[10px] text-white/40 mb-5 relative z-10">Sign in to continue</div>
      <button className="w-full bg-white text-black py-3 rounded-xl text-xs font-semibold mb-2.5 relative z-10"> Sign in with Apple</button>
      <button className="w-full bg-white text-black py-3 rounded-xl text-xs font-semibold mb-3 relative z-10">G Sign in with Google</button>
      <div className="text-white/30 text-[11px] mb-3 relative z-10">OR</div>
      <input className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-xs mb-2.5 relative z-10" placeholder="✉️ Email" readOnly />
      <input className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-xs mb-3 relative z-10" placeholder="🔒 Password" readOnly />
      <button className="w-full bg-gradient-to-r from-[#3479E8] to-[#2563EB] text-white py-3 rounded-xl text-[13px] font-semibold relative z-10">Sign In</button>
    </div>
  );
}

// Dashboard Screen Component
function DashboardScreen() {
  return (
    <div className="h-full bg-[#0a0a0f] flex flex-col relative">
      <div className="astro-pattern" />
      <div className="pt-[45px] pb-3 px-4 text-center relative z-10">
        <h3 className="font-orbitron text-lg bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] bg-clip-text text-transparent">CalculX</h3>
        <span className="text-[10px] text-white/40">Secure Messaging</span>
      </div>
      <div className="text-center relative z-10">
        <span className="inline-flex items-center gap-1 bg-[rgba(52,121,232,0.2)] px-3.5 py-1.5 rounded-full text-[10px] text-white">🔔 ON</span>
      </div>
      <div className="text-center my-3 relative z-10">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] px-6 py-2.5 rounded-full text-xs font-semibold text-white">💬 New Chat</span>
      </div>
      <div className="flex gap-1.5 px-4 mb-4 relative z-10">
        <div className="w-9 h-9 bg-[#E53935] rounded-lg flex items-center justify-center text-sm">🗑️</div>
        <div className="flex-1 bg-[rgba(255,255,255,0.9)] rounded-lg px-3 text-[11px] text-gray-500 flex items-center">Enter code</div>
        <div className="bg-[#1565C0] px-4 rounded-lg text-[11px] font-semibold text-white flex items-center">Join</div>
      </div>
      <div className="flex-1 px-3 relative z-10">
        <div className="bg-white/8 rounded-[14px] p-3 flex items-center gap-2.5 mb-2">
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#3479E8] to-[#10B981] flex items-center justify-center text-base relative">
            👤
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22C55E] rounded-full border-2 border-[#0a0a0f]" />
          </div>
          <div className="flex-1">
            <h5 className="text-xs font-semibold text-white">Emma</h5>
            <p className="text-[10px] text-white/40">Hey! How are you?</p>
          </div>
          <span className="text-[10px] text-white/50 uppercase">Room</span>
        </div>
        <div className="bg-white/8 rounded-[14px] p-3 flex items-center gap-2.5">
          <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-base">👤</div>
          <div className="flex-1">
            <h5 className="text-xs font-semibold text-white">Alex</h5>
            <p className="text-[10px] text-white/40">See you tomorrow!</p>
          </div>
          <span className="text-[10px] text-white/50 uppercase">Room</span>
        </div>
      </div>
    </div>
  );
}

// Chat Screen Component
function ChatScreen() {
  return (
    <div className="h-full bg-[#0a0a0f] flex flex-col relative">
      <div className="astro-pattern" />
      <div className="bg-[rgba(20,20,25,0.95)] pt-10 pb-3 px-3 flex items-center gap-2.5 relative z-10">
        <div className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center text-xs">‹</div>
        <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#6366F1] flex items-center justify-center text-sm relative">
          👤
          <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22C55E] rounded-full border border-[#0a0a0f]" />
        </div>
        <div className="flex-1">
          <h5 className="text-[13px] font-semibold text-white">Emma</h5>
          <span className="text-[10px] text-[#22C55E]">Online</span>
        </div>
        <span className="text-[10px] text-white/40 uppercase">Room</span>
      </div>
      <div className="flex-1 p-3 flex flex-col justify-end gap-2 relative z-10">
        <div className="bg-[rgba(255,255,255,0.1)] self-start rounded-[18px] rounded-bl-[5px] px-3.5 py-2.5 text-[11px] text-white max-w-[80%]">Hey! How are you? 😊</div>
        <div className="bg-[#3479E8] self-end rounded-[18px] rounded-br-[5px] px-3.5 py-2.5 text-[11px] text-white">
          Great thanks!<span className="text-white/40 text-[9px] ml-2">10:42</span><span className="text-[#60A5FA] text-[10px] ml-1">✓✓</span>
        </div>
        <div className="bg-[rgba(255,255,255,0.1)] self-start rounded-[18px] rounded-bl-[5px] px-3.5 py-2.5 text-[11px] text-white">Check this out!</div>
        <div className="bg-[rgba(52,121,232,0.15)] border border-[rgba(52,121,232,0.3)] self-start rounded-[18px] rounded-bl-[5px] px-3.5 py-2.5 text-[11px] text-white/70 flex items-center gap-2">🎤 Opened</div>
        <div className="bg-[rgba(52,121,232,0.15)] border border-[rgba(52,121,232,0.3)] self-start rounded-[18px] rounded-bl-[5px] px-3.5 py-2.5 text-[11px] text-white/70 flex items-center gap-2">📷 Opened</div>
        <div className="bg-[#3479E8] self-end rounded-[18px] rounded-br-[5px] px-3.5 py-2.5 text-[11px] text-white">
          That&apos;s awesome!<span className="text-white/40 text-[9px] ml-2">10:45</span><span className="text-[#60A5FA] text-[10px] ml-1">✓✓</span>
        </div>
      </div>
      <div className="bg-[rgba(20,20,25,0.95)] p-2.5 flex items-center gap-2 relative z-10">
        <div className="w-8 h-8 rounded-full bg-[rgba(52,121,232,0.3)] flex items-center justify-center text-sm text-[#3479E8]">📷</div>
        <div className="flex-1 bg-white/8 rounded-full px-4 py-2.5 text-xs text-white/50">Message</div>
        <div className="w-8 h-8 rounded-full bg-[#3479E8] flex items-center justify-center text-sm">🎤</div>
      </div>
    </div>
  );
}

// Create Room Modal Screen
function CreateRoomScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-[#1a1a1f] to-[#0d1015] flex flex-col items-center justify-center p-4 pt-10 relative">
      <div className="astro-pattern" />
      <div className="text-4xl mb-3 relative z-10">💬</div>
      <div className="text-base font-bold text-white mb-1.5 relative z-10">New Private Chat</div>
      <div className="text-[10px] text-white/50 text-center mb-5 relative z-10">Create a room and share the code</div>
      <div className="w-full mb-4 relative z-10">
        <div className="text-[10px] text-white/60 mb-1.5">Chat Name</div>
        <div className="w-full bg-[rgba(255,255,255,0.95)] rounded-lg py-3 px-3.5 text-[13px] font-medium text-gray-800">Friends</div>
      </div>
      <button className="w-full py-3 bg-gradient-to-r from-[#3479E8] to-[#2563EB] rounded-lg text-[13px] font-semibold text-white mb-2 relative z-10">Create Chat</button>
      <button className="w-full py-3 bg-white/10 rounded-lg text-[13px] text-white/60 relative z-10">Cancel</button>
    </div>
  );
}

// Code Created Screen
function CodeCreatedScreen() {
  return (
    <div className="h-full bg-gradient-to-br from-[#1a1a1f] to-[#0d1015] flex flex-col items-center justify-center p-4 pt-10 relative">
      <div className="astro-pattern" />
      <div className="text-4xl mb-3 relative z-10">🔒</div>
      <div className="text-base font-bold text-white mb-1.5 relative z-10">Chat Created!</div>
      <div className="text-[10px] text-white/50 text-center mb-5 relative z-10">Send this code to your contact</div>
      <div className="w-full bg-[rgba(52,121,232,0.1)] border-2 border-dashed border-[rgba(52,121,232,0.4)] rounded-xl p-3 mb-4 text-center relative z-10">
        <div className="text-[9px] text-white/50 uppercase tracking-wider mb-1">Your Code</div>
        <div className="font-orbitron text-[22px] text-[#3479E8] tracking-[3px] font-bold">4YKQUZ</div>
      </div>
      <div className="flex gap-2 w-full mb-2 relative z-10">
        <button className="flex-1 py-2.5 bg-white/10 rounded-lg text-[11px] font-semibold text-white flex items-center justify-center gap-1">📋 Copy</button>
        <button className="flex-1 py-2.5 bg-gradient-to-r from-[#3479E8] to-[#2563EB] rounded-lg text-[11px] font-semibold text-white flex items-center justify-center gap-1">📤 Share</button>
      </div>
      <button className="w-full py-3 bg-white/10 rounded-lg text-[13px] text-white/60 relative z-10">Done</button>
    </div>
  );
}

// Dashboard with Code Filled
function DashboardWithCode() {
  return (
    <div className="h-full bg-[#0a0a0f] flex flex-col relative">
      <div className="astro-pattern" />
      <div className="pt-[38px] pb-2 px-3 text-center relative z-10">
        <h3 className="font-orbitron text-base bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] bg-clip-text text-transparent">CalculX</h3>
        <span className="text-[9px] text-white/40">Secure Messaging</span>
      </div>
      <div className="text-center relative z-10">
        <span className="inline-flex items-center gap-1 bg-[rgba(52,121,232,0.2)] px-3 py-1.5 rounded-full text-[10px] text-white">🔔 ON</span>
      </div>
      <div className="text-center my-2.5 relative z-10">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] px-4 py-2 rounded-full text-[11px] font-semibold text-white">💬 New Chat</span>
      </div>
      <div className="flex gap-1.5 px-2.5 mb-3 h-9 relative z-10">
        <div className="w-9 h-9 bg-[#E53935] rounded-lg flex items-center justify-center text-sm flex-shrink-0">🗑️</div>
        <div className="flex-1 bg-[rgba(255,255,255,0.95)] rounded-lg px-2.5 font-orbitron text-[11px] font-semibold text-gray-800 tracking-wider flex items-center min-w-0">4YKQUZ</div>
        <div className="bg-[#1565C0] px-3 rounded-lg text-[11px] font-semibold text-white flex items-center justify-center flex-shrink-0">Join</div>
      </div>
      <div className="flex-1 px-2.5 relative z-10">
        <div className="bg-white/8 rounded-xl p-2.5 flex items-center gap-2 mb-1.5">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#3479E8] to-[#10B981] flex items-center justify-center text-[15px] flex-shrink-0">👤</div>
          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-semibold text-white">Emma</h5>
            <p className="text-[10px] text-white/40 truncate">Hey! How are you?</p>
          </div>
          <span className="text-[9px] text-white/40 uppercase flex-shrink-0">Room</span>
        </div>
      </div>
      {/* Finger on Join button */}
      <div className="absolute top-[205px] right-[18px] text-2xl animate-fingerTap drop-shadow-lg z-50">👆</div>
    </div>
  );
}

// Dashboard with New Room Connected
function DashboardConnected() {
  return (
    <div className="h-full bg-[#0a0a0f] flex flex-col relative">
      <div className="astro-pattern" />
      <div className="pt-[38px] pb-2 px-3 text-center relative z-10">
        <h3 className="font-orbitron text-base bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] bg-clip-text text-transparent">CalculX</h3>
        <span className="text-[9px] text-white/40">Secure Messaging</span>
      </div>
      <div className="text-center relative z-10">
        <span className="inline-flex items-center gap-1 bg-[rgba(52,121,232,0.2)] px-3 py-1.5 rounded-full text-[10px] text-white">🔔 ON</span>
      </div>
      <div className="text-center my-2.5 relative z-10">
        <span className="inline-flex items-center gap-1.5 bg-gradient-to-r from-[#3479E8] to-[#4FC3F8] px-4 py-2 rounded-full text-[11px] font-semibold text-white">💬 New Chat</span>
      </div>
      <div className="flex gap-1.5 px-2.5 mb-3 h-9 relative z-10">
        <div className="w-9 h-9 bg-[#E53935] rounded-lg flex items-center justify-center text-sm flex-shrink-0">🗑️</div>
        <div className="flex-1 bg-[rgba(255,255,255,0.95)] rounded-lg px-2.5 text-[10px] text-gray-400 flex items-center min-w-0">Enter code</div>
        <div className="bg-[#1565C0] px-3 rounded-lg text-[11px] font-semibold text-white flex items-center justify-center flex-shrink-0">Join</div>
      </div>
      <div className="flex-1 px-2.5 relative z-10 overflow-hidden">
        {/* New room - highlighted */}
        <div className="bg-[rgba(16,185,129,0.1)] border-2 border-[rgba(16,185,129,0.5)] rounded-xl p-2.5 flex items-center gap-2 mb-1.5">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center text-[15px] flex-shrink-0">👤</div>
          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-semibold text-white">Friends</h5>
            <p className="text-[10px] text-white/40 truncate">Room created! 🎉</p>
          </div>
          <span className="text-[9px] text-white/40 uppercase flex-shrink-0">Room</span>
        </div>
        {/* Existing room */}
        <div className="bg-white/8 rounded-xl p-2.5 flex items-center gap-2">
          <div className="w-[34px] h-[34px] rounded-full bg-gradient-to-br from-[#3479E8] to-[#10B981] flex items-center justify-center text-[15px] flex-shrink-0">👤</div>
          <div className="flex-1 min-w-0">
            <h5 className="text-xs font-semibold text-white">Emma</h5>
            <p className="text-[10px] text-white/40 truncate">Hey! How are you?</p>
          </div>
          <span className="text-[9px] text-white/40 uppercase flex-shrink-0">Room</span>
        </div>
      </div>
    </div>
  );
}

export default function CalculXPage() {
  const features = [
    { icon: "💬", title: "Text Messages", description: "Real-time messaging with read receipts. Know when your messages are delivered and read." },
    { icon: "🎤", title: "Voice Messages", description: "Record voice notes that disappear after listening. Once played, they're gone forever.", highlight: true },
    { icon: "📷", title: "Photo Sharing", description: "Share photos that vanish after viewing. Your moments stay private and temporary.", highlight: true },
    { icon: "🟢", title: "Online Status", description: "See when your contacts are online and available to chat in real-time." },
    { icon: "🔔", title: "Notification Control", description: "Toggle notifications ON or OFF anytime. Stay in complete control of your alerts." },
    { icon: "🗑️", title: "Delete All", description: "Panic button: instantly erase all your conversations with a single tap." },
  ];

  const safetyCards = [
    { icon: "⏱️", title: "24h Auto-Delete", description: "All messages automatically disappear after 24 hours. Your conversations don't stick around." },
    { icon: "🚨", title: "Report System", description: "Flag inappropriate content, harassment, spam, or suspicious behavior directly in the app." },
  ];

  const privacyCards = [
    { icon: "🙈", title: "Hidden in Plain Sight", description: "To everyone else, it's just a calculator. Your privacy stays protected." },
    { icon: "🔐", title: "Secure Login", description: "Sign in with Apple or Google for maximum account security." },
    { icon: "🔄", title: "Auto Calculator Mode", description: "Close the app and it returns to calculator mode instantly." },
    { icon: "🚫", title: "No Data Selling", description: "We never track, store, or sell your personal data. Ever." },
  ];

  const faqs = [
    { q: "Does the calculator actually work?", a: "Yes! CalculX is a fully functional calculator. You can perform all normal calculations. The private messaging feature is completely hidden unless you know how to access it." },
    { q: "Are voice messages and photos really ephemeral?", a: "Yes! Voice messages disappear immediately after listening. Photos vanish after viewing. They cannot be recovered—even by us. Plus, all messages auto-delete after 24 hours." },
    { q: "Is CalculX free to use?", a: "Yes! The free plan includes 1 chat room with all features (text, voice, photos, ephemeral messages). Upgrade to Premium for unlimited rooms at $4.99/month or $24.99/year." },
    { q: "How do I report inappropriate behavior?", a: "Tap the ••• menu in any chat and select \"Report\". Choose a reason (inappropriate content, harassment, spam, suspicious behavior) and submit. We review all reports within 24 hours." },
    { q: "What if someone sees me holding the = button?", a: "Just release your finger! The app will simply show the calculation result. Nobody will know you were trying to access the messaging area." },
    { q: "Can someone find my hidden messages?", a: "No. When you close CalculX, it always opens back to the calculator screen. There's no indication that private messages exist inside the app." },
  ];

  return (
    <div className="pt-20 overflow-hidden relative">
      <Navbar />

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Content */}
          <div className="flex-1 text-center lg:text-left max-w-[550px]">
            <div className="inline-flex items-center gap-2.5 px-6 py-3 bg-[rgba(52,121,232,0.1)] border border-[rgba(52,121,232,0.3)] rounded-full text-[#3479E8] text-sm mb-8">
              <span className="w-2.5 h-2.5 bg-[#10B981] rounded-full animate-pulse" />
              🔒 Privacy First
            </div>
            <h1 className="font-orbitron text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
              Your Privacy<br />
              <span className="bg-gradient-to-r from-[#3479E8] to-[#10B981] bg-clip-text text-transparent">Hidden in Plain Sight</span>
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-9 leading-relaxed">
              A real calculator with more inside. Hold the &quot;=&quot; button to unlock private messaging where voice notes and photos vanish after being opened.
            </p>
            <div className="flex flex-wrap gap-6 mb-10 justify-center lg:justify-start">
              <div className="flex items-center gap-2.5 text-white/85 text-[15px] font-medium"><span className="text-[#10B981] font-bold">✓</span> Real Calculator</div>
              <div className="flex items-center gap-2.5 text-white/85 text-[15px] font-medium"><span className="text-[#10B981] font-bold">✓</span> Ephemeral Messages</div>
              <div className="flex items-center gap-2.5 text-white/85 text-[15px] font-medium"><span className="text-[#10B981] font-bold">✓</span> Voice & Photos</div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button href="#journey" variant="primary">See How It Works</Button>
              <Button href="#pricing" variant="secondary">View Pricing</Button>
            </div>
          </div>
          {/* Phone Visual */}
          <div className="flex flex-col items-center gap-6">
            <PhoneFrame className="w-[280px] h-[580px]">
              <CalculatorScreen />
            </PhoneFrame>
            <div className="flex items-center gap-3 bg-[rgba(16,185,129,0.12)] border border-[rgba(16,185,129,0.35)] px-7 py-3.5 rounded-full text-[#10B981] text-[15px] font-semibold animate-hintPulse">
              👆 Hold &quot;=&quot; to unlock messaging
            </div>
          </div>
        </div>
      </section>

      {/* YOUR JOURNEY SECTION */}
      <section id="journey" className="py-24 px-4 bg-gradient-to-b from-[rgba(52,121,232,0.03)] to-transparent border-t border-[rgba(52,121,232,0.1)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">Your Journey</h2>
            <p className="text-white/50 text-lg">From calculator to private messaging in seconds</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-6">
                <MiniCalculatorScreen showFinger />
              </SmallPhoneFrame>
              <span className="inline-block bg-gradient-to-r from-[#3479E8] to-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Step 1</span>
              <h4 className="text-lg font-semibold text-white mb-2">Open CalculX</h4>
              <p className="text-white/50 text-[13px] max-w-[180px] mx-auto leading-relaxed">It looks like a normal calculator</p>
            </div>
            {/* Step 2 */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-6">
                <LoginScreen />
              </SmallPhoneFrame>
              <span className="inline-block bg-gradient-to-r from-[#3479E8] to-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Step 2</span>
              <h4 className="text-lg font-semibold text-white mb-2">Sign In Securely</h4>
              <p className="text-white/50 text-[13px] max-w-[180px] mx-auto leading-relaxed">Use Apple, Google, or email</p>
            </div>
            {/* Step 3 */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-6">
                <DashboardScreen />
              </SmallPhoneFrame>
              <span className="inline-block bg-gradient-to-r from-[#3479E8] to-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Step 3</span>
              <h4 className="text-lg font-semibold text-white mb-2">Your Dashboard</h4>
              <p className="text-white/50 text-[13px] max-w-[180px] mx-auto leading-relaxed">All your private rooms in one place</p>
            </div>
            {/* Step 4 */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-6">
                <ChatScreen />
              </SmallPhoneFrame>
              <span className="inline-block bg-gradient-to-r from-[#3479E8] to-[#10B981] text-white text-xs font-bold px-4 py-1.5 rounded-full mb-3">Step 4</span>
              <h4 className="text-lg font-semibold text-white mb-2">Chat Privately</h4>
              <p className="text-white/50 text-[13px] max-w-[180px] mx-auto leading-relaxed">Messages that disappear</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section id="features" className="py-24 px-4 bg-gradient-to-b from-[rgba(16,185,129,0.03)] to-transparent border-t border-[rgba(16,185,129,0.1)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">✨ Full Messaging Experience</h2>
            <p className="text-white/50 text-lg">Everything you need for private conversations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className={`group p-10 rounded-3xl border text-center transition-all duration-300 hover:-translate-y-2 ${
                  feature.highlight
                    ? "bg-gradient-to-br from-[rgba(16,185,129,0.08)] to-[rgba(16,185,129,0.02)] border-[rgba(16,185,129,0.3)]"
                    : "bg-[rgba(15,15,25,0.8)] border-white/6 hover:border-[rgba(52,121,232,0.4)]"
                }`}
              >
                <span className="text-5xl block mb-5">{feature.icon}</span>
                <h3 className={`text-[19px] font-semibold mb-3 ${feature.highlight ? "text-[#10B981]" : "text-white"}`}>
                  {feature.title}
                </h3>
                <p className="text-white/55 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EPHEMERAL SECTION */}
      <section className="py-24 px-4">
        <div className="max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center gap-20">
          <div className="flex-1 min-w-[320px]">
            <div className="inline-flex items-center gap-2.5 bg-[rgba(16,185,129,0.1)] border border-[rgba(16,185,129,0.3)] px-5 py-2.5 rounded-full text-[#10B981] text-[13px] font-semibold mb-6">
              ⏱️ EPHEMERAL BY DESIGN
            </div>
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-5 leading-tight">Messages That Disappear</h2>
            <p className="text-white/65 text-[17px] leading-relaxed mb-8">
              Privacy isn&apos;t just a feature—it&apos;s the foundation. Every message type has built-in expiration for your protection.
            </p>
            <ul className="space-y-0">
              {[
                "Voice messages disappear after listening",
                "Photos vanish after viewing",
                "All messages auto-delete after 24 hours",
                "No message history stored on servers"
              ].map((item) => (
                <li key={item} className="flex items-center gap-0 text-white/80 text-base py-3.5 pl-9 relative border-b border-white/5 last:border-b-0">
                  <span className="absolute left-0 text-[#10B981] font-bold text-lg">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex-shrink-0">
            <PhoneFrame className="w-[250px] h-[520px]">
              <div className="h-full flex flex-col bg-[#0a0a0f] relative">
                <div className="astro-pattern" />
                <div className="bg-[rgba(20,20,25,0.95)] pt-[42px] pb-3.5 px-3.5 flex items-center gap-2.5 relative z-10">
                  <div className="w-[38px] h-[38px] rounded-full bg-gradient-to-br from-[#F59E0B] to-[#EF4444] flex items-center justify-center text-base relative">
                    👤
                    <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-[#22C55E] rounded-full border-2 border-[#0a0a0f]" />
                  </div>
                  <div>
                    <h5 className="text-sm font-semibold text-white">Alex</h5>
                    <span className="text-[11px] text-[#22C55E]">Online</span>
                  </div>
                </div>
                <div className="flex-1 p-4 flex flex-col justify-end gap-2.5 relative z-10">
                  <div className="bg-[rgba(255,255,255,0.1)] self-start rounded-[20px] rounded-bl-[5px] px-4 py-3 text-[13px] text-white">Hey, check this out! 😊</div>
                  <div className="bg-[rgba(52,121,232,0.12)] border border-[rgba(52,121,232,0.25)] self-start rounded-[20px] rounded-bl-[5px] px-4 py-3 text-[13px] text-white/70 flex items-center gap-2.5">
                    🎤 Opened<span className="text-white/40 text-[10px] ml-2.5">11:08</span>
                  </div>
                  <div className="bg-[rgba(52,121,232,0.12)] border border-[rgba(52,121,232,0.25)] self-start rounded-[20px] rounded-bl-[5px] px-4 py-3 text-[13px] text-white/70 flex items-center gap-2.5">
                    📷 Opened<span className="text-white/40 text-[10px] ml-2.5">11:08</span>
                  </div>
                  <div className="bg-[rgba(255,255,255,0.1)] self-start rounded-[20px] rounded-bl-[5px] px-4 py-3 text-[13px] text-white">What do you think?</div>
                  <div className="bg-[#3479E8] self-end rounded-[20px] rounded-br-[5px] px-4 py-3 text-[13px] text-white">That&apos;s incredible! 🔥</div>
                </div>
                <div className="bg-[rgba(20,20,25,0.95)] p-3 flex items-center gap-2.5 relative z-10">
                  <div className="w-9 h-9 rounded-full bg-[rgba(52,121,232,0.25)] flex items-center justify-center text-[#3479E8]">📷</div>
                  <div className="flex-1 bg-white/8 rounded-full px-4 py-2.5 text-[13px] text-white/40">Message</div>
                  <div className="w-9 h-9 rounded-full bg-[#3479E8] flex items-center justify-center">🎤</div>
                </div>
              </div>
            </PhoneFrame>
          </div>
        </div>
      </section>

      {/* CREATE & JOIN ROOM SECTION */}
      <section id="create" className="py-24 px-4 bg-gradient-to-b from-[rgba(52,121,232,0.03)] to-transparent border-t border-[rgba(52,121,232,0.1)]">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">🔗 Create & Join a Room</h2>
            <p className="text-white/50 text-lg">Connect with friends in 4 simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Step 1 - Create Room */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-4">
                <CreateRoomScreen />
              </SmallPhoneFrame>
              <div className="w-10 h-10 bg-gradient-to-br from-[#3479E8] to-[#10B981] rounded-full flex items-center justify-center font-bold text-lg text-white mx-auto mb-3">1</div>
              <h4 className="text-[15px] font-semibold text-white mb-1.5">Create a Room</h4>
              <p className="text-white/50 text-xs max-w-[160px] mx-auto leading-relaxed">Tap &quot;New Chat&quot; and choose a name</p>
            </div>
            {/* Step 2 - Get Code */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-4">
                <CodeCreatedScreen />
              </SmallPhoneFrame>
              <div className="w-10 h-10 bg-gradient-to-br from-[#3479E8] to-[#10B981] rounded-full flex items-center justify-center font-bold text-lg text-white mx-auto mb-3">2</div>
              <h4 className="text-[15px] font-semibold text-white mb-1.5">Get Your Code</h4>
              <p className="text-white/50 text-xs max-w-[160px] mx-auto leading-relaxed">Copy or share with your friend</p>
            </div>
            {/* Step 3 - Friend Joins */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-4">
                <DashboardWithCode />
              </SmallPhoneFrame>
              <div className="w-10 h-10 bg-gradient-to-br from-[#3479E8] to-[#10B981] rounded-full flex items-center justify-center font-bold text-lg text-white mx-auto mb-3">3</div>
              <h4 className="text-[15px] font-semibold text-white mb-1.5">Friend Joins</h4>
              <p className="text-white/50 text-xs max-w-[160px] mx-auto leading-relaxed">Enter the code and tap &quot;Join&quot;</p>
            </div>
            {/* Step 4 - Connected */}
            <div className="text-center">
              <SmallPhoneFrame className="w-[200px] h-[420px] mx-auto mb-4">
                <DashboardConnected />
              </SmallPhoneFrame>
              <div className="w-10 h-10 bg-gradient-to-br from-[#3479E8] to-[#10B981] rounded-full flex items-center justify-center font-bold text-lg text-white mx-auto mb-3">4</div>
              <h4 className="text-[15px] font-semibold text-white mb-1.5">Connected!</h4>
              <p className="text-white/50 text-xs max-w-[160px] mx-auto leading-relaxed">New room in your dashboard</p>
            </div>
          </div>
        </div>
      </section>

      {/* SAFETY SECTION */}
      <section id="safety" className="py-24 px-4 bg-gradient-to-b from-[rgba(255,59,48,0.02)] to-[rgba(52,121,232,0.02)] border-t border-[rgba(255,59,48,0.1)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">🛡️ Safety & Community</h2>
            <p className="text-white/50 text-lg">We&apos;re committed to providing a safe experience for everyone</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyCards.map((card) => (
              <div key={card.title} className="bg-[rgba(15,15,25,0.8)] rounded-3xl p-10 border border-white/6 text-center hover:-translate-y-1 transition-all duration-300">
                <span className="text-5xl block mb-5">{card.icon}</span>
                <h3 className="text-xl font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
            {/* Age Card */}
            <div className="bg-gradient-to-br from-[rgba(255,59,48,0.06)] to-transparent rounded-3xl p-10 border border-[rgba(255,59,48,0.25)] text-center hover:-translate-y-1 transition-all duration-300">
              <div className="font-orbitron text-[56px] font-extrabold text-[#FF3B30] mb-2.5">17+</div>
              <h3 className="text-xl font-semibold text-[#FF3B30] mb-3">Age Required</h3>
              <p className="text-white/55 text-sm leading-relaxed">CalculX messaging is designed for users 17 years and older. We take this seriously.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING SECTION */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-[850px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">💎 Simple Pricing</h2>
            <p className="text-white/50 text-lg">Start free, upgrade when you need more</p>
          </div>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            {/* Free Plan */}
            <div className="flex-1 max-w-[380px] bg-[rgba(15,15,25,0.85)] rounded-[28px] p-11 border border-white/6 hover:-translate-y-2 transition-all duration-300">
              <div className="text-[13px] font-bold text-white/45 tracking-widest mb-3">FREE</div>
              <h3 className="font-orbitron text-[30px] mb-2">Starter</h3>
              <div className="text-5xl font-bold mb-1">$0</div>
              <div className="text-white/40 text-sm mb-8">Forever free</div>
              <ul className="space-y-0 mb-9">
                {["1 chat room", "Text, voice & photos", "Ephemeral messages", "24h auto-delete", "Report system"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-[15px] border-b border-white/5 py-3.5">
                    <span className="text-[#10B981] font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Button href="#" variant="secondary" className="w-full">Get Started</Button>
            </div>
            {/* Premium Plan */}
            <div className="flex-1 max-w-[380px] bg-gradient-to-br from-[rgba(52,121,232,0.1)] to-[rgba(16,185,129,0.05)] rounded-[28px] p-11 border border-[rgba(52,121,232,0.4)] hover:-translate-y-2 transition-all duration-300">
              <div className="text-[13px] font-bold text-[#3479E8] tracking-widest mb-3">⭐ PREMIUM</div>
              <h3 className="font-orbitron text-[30px] mb-2">Unlimited</h3>
              <div className="text-5xl font-bold mb-1">$4.99<span className="text-lg font-normal text-white/50">/mo</span></div>
              <div className="text-white/40 text-sm mb-8">or $24.99/year (save 58%)</div>
              <ul className="space-y-0 mb-9">
                {["Unlimited chat rooms", "All free features included", "Priority support", "Support the developer", "Early access to new features"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white/70 text-[15px] border-b border-white/5 py-3.5">
                    <span className="text-[#10B981] font-bold">✓</span>{item}
                  </li>
                ))}
              </ul>
              <Button href="#" variant="primary" className="w-full">Upgrade</Button>
            </div>
          </div>
        </div>
      </section>

      {/* PRIVACY SECTION */}
      <section className="py-24 px-4 bg-gradient-to-b from-[rgba(16,185,129,0.03)] to-transparent border-t border-[rgba(16,185,129,0.1)]">
        <div className="max-w-[1000px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">🔒 Your Privacy Matters</h2>
            <p className="text-white/50 text-lg">Built from the ground up with security in mind</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {privacyCards.map((card) => (
              <div key={card.title} className="text-center p-9">
                <span className="text-5xl block mb-5">{card.icon}</span>
                <h3 className="text-[17px] font-semibold text-[#10B981] mb-2.5">{card.title}</h3>
                <p className="text-white/55 text-sm leading-relaxed">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="py-24 px-4">
        <div className="max-w-[800px] mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">Questions & Answers</h2>
            <p className="text-white/50 text-lg">Everything you need to know</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-[rgba(15,15,25,0.8)] rounded-[20px] p-8 border border-white/6 hover:border-[rgba(52,121,232,0.3)] transition-all duration-300">
                <h4 className="text-[17px] font-semibold text-white mb-3.5 flex items-start gap-3.5">
                  <span className="min-w-8 h-8 bg-gradient-to-br from-[#3479E8] to-[#10B981] rounded-full flex items-center justify-center text-[15px] font-bold">?</span>
                  {faq.q}
                </h4>
                <p className="text-white/55 text-[15px] leading-relaxed pl-[46px]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="py-24 px-4 bg-gradient-to-t from-[rgba(52,121,232,0.06)] to-transparent text-center">
        <h2 className="font-orbitron text-3xl md:text-5xl font-bold mb-5">Ready for True Privacy?</h2>
        <p className="text-white/55 text-lg mb-10 max-w-[500px] mx-auto">Download CalculX and keep your conversations truly private and ephemeral.</p>
        <Link
          href="#"
          className="inline-flex items-center gap-4 bg-white text-black px-9 py-5 rounded-2xl font-semibold hover:-translate-y-1 hover:shadow-2xl hover:shadow-white/15 transition-all duration-300"
        >
          <span className="text-[32px]"></span>
          <span className="text-left">
            <span className="text-xs opacity-70 block">Download on the</span>
            <span className="text-lg font-bold">App Store</span>
          </span>
        </Link>
      </section>
    </div>
  );
}
