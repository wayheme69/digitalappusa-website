"use client";

import { useState, useEffect } from "react";

export default function ConfirmEmailPage() {
  const [showButton, setShowButton] = useState(false);
  const [deepLink, setDeepLink] = useState("");

  useEffect(() => {
    // Get query params from URL
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get("token") || "";
    const type = urlParams.get("type") || "signup";

    // Build deep link
    const link = `calculxapp://confirm?token=${encodeURIComponent(token)}&type=${encodeURIComponent(type)}`;
    setDeepLink(link);

    // Try to open the app automatically
    window.location.href = link;

    // After 2 seconds, show the manual button
    const timer = setTimeout(() => {
      setShowButton(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

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

      {/* Logo */}
      <div className="mb-12 z-10">
        <span className="font-orbitron text-4xl font-bold bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
          CALCULX
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white/[0.03] border border-cyan/20 rounded-2xl p-8 backdrop-blur-sm text-center">

          {!showButton ? (
            <>
              {/* Loading State */}
              <div className="w-16 h-16 border-[3px] border-cyan/30 border-t-cyan rounded-full animate-spin mx-auto mb-6" />
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Opening CalculX...
              </h1>
              <p className="text-white/60">
                Please wait while we redirect you to the app.
              </p>
            </>
          ) : (
            <>
              {/* Manual Button State */}
              <div className="text-5xl mb-6">📱</div>
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Tap to Continue
              </h1>
              <p className="text-white/60 mb-8">
                Tap the button below to open CalculX and confirm your email.
              </p>
              <a
                href={deepLink}
                className="inline-block w-full py-4 bg-gradient-to-r from-cyan to-green text-[#030308] font-bold rounded-xl hover:opacity-90 transition-all text-center"
              >
                Open CalculX App
              </a>
            </>
          )}

        </div>
      </div>

      {/* App Store Link */}
      <div className="mt-8 z-10 text-center">
        <p className="text-white/40 text-sm mb-2">App not opening?</p>
        <a
          href="https://apps.apple.com/app/calculx"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan text-sm hover:underline"
        >
          Download from App Store
        </a>
      </div>

      {/* Footer */}
      <p className="text-white/30 text-xs mt-8 z-10">
        © 2025 Digital App LLC
      </p>
    </div>
  );
}
