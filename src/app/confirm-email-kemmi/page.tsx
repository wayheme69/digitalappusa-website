"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Supabase client for KEMMI
const SUPABASE_URL = 'https://erclbrmnusivjmevwnsq.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVyY2xicm1udXNpdmptZXZ3bnNxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NTEwNzEsImV4cCI6MjA4MjEyNzA3MX0.ul9cNCTscgfVR63PA802Yusu6nRH1289ruMwaoZImLw';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type PageState = "verifying" | "success" | "error" | "redirecting";

export default function ConfirmEmailKemmiPage() {
  const [pageState, setPageState] = useState<PageState>("verifying");
  const [errorMessage, setErrorMessage] = useState("");
  const [deepLink, setDeepLink] = useState("kemmi://");

  useEffect(() => {
    const verifyEmail = async () => {
      // Get query params from URL
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token") || "";
      const type = urlParams.get("type") || "signup";

      // Build deep link for KEMMI app
      setDeepLink(`kemmi://confirmed`);

      if (!token) {
        setErrorMessage("No confirmation token found.");
        setPageState("error");
        return;
      }

      try {
        // Verify the OTP token with Supabase
        const { error } = await supabase.auth.verifyOtp({
          token_hash: token,
          type: type === "signup" ? "signup" : "email",
        });

        if (error) {
          console.error("Verification error:", error);
          setErrorMessage(error.message || "Failed to verify email.");
          setPageState("error");
          return;
        }

        // Success! Email is now confirmed
        setPageState("success");

        // Wait 2 seconds then redirect to app
        setTimeout(() => {
          setPageState("redirecting");
          window.location.href = "kemmi://confirmed";
        }, 2000);

      } catch (err) {
        console.error("Error verifying email:", err);
        setErrorMessage("An unexpected error occurred.");
        setPageState("error");
      }
    };

    verifyEmail();
  }, []);

  return (
    <div className="min-h-screen bg-[#030308] text-white relative overflow-hidden flex flex-col items-center justify-center px-4">
      {/* Background Orbs - Ice Blue */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute w-[400px] h-[400px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(0, 122, 255, 0.08)',
            top: '10%',
            left: '-15%'
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] rounded-full blur-[100px]"
          style={{
            background: 'rgba(92, 160, 232, 0.06)',
            top: '60%',
            right: '-10%'
          }}
        />
      </div>

      {/* Logo KEMMI - Ice Blue Gradient */}
      <div className="mb-12 z-10">
        <span
          className="font-orbitron text-4xl font-bold bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(to bottom, #E0F7FF, #87CEEB, #4A90D9, #2E5A87)",
          }}
        >
          KEMMI
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white/[0.03] border border-[#007AFF]/20 rounded-2xl p-8 backdrop-blur-sm text-center">

          {/* Verifying State */}
          {pageState === "verifying" && (
            <>
              <div className="w-16 h-16 border-[3px] border-[#007AFF]/30 border-t-[#007AFF] rounded-full animate-spin mx-auto mb-6" />
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Verifying your email...
              </h1>
              <p className="text-white/60">
                Please wait while we confirm your email address.
              </p>
            </>
          )}

          {/* Success State */}
          {pageState === "success" && (
            <>
              <div className="text-6xl mb-6">✅</div>
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Email Confirmed!
              </h1>
              <p className="text-white/60">
                Your email has been verified successfully. Redirecting to the app...
              </p>
            </>
          )}

          {/* Redirecting State */}
          {pageState === "redirecting" && (
            <>
              <div className="w-16 h-16 border-[3px] border-[#007AFF]/30 border-t-[#007AFF] rounded-full animate-spin mx-auto mb-6" />
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Opening KEMMI...
              </h1>
              <p className="text-white/60 mb-8">
                If the app doesn&apos;t open automatically, tap the button below.
              </p>
              <a
                href={deepLink}
                className="inline-block w-full py-4 text-white font-bold rounded-xl hover:opacity-90 transition-all text-center"
                style={{
                  background: "linear-gradient(135deg, #007AFF 0%, #0051D4 100%)",
                }}
              >
                Open KEMMI App
              </a>
            </>
          )}

          {/* Error State */}
          {pageState === "error" && (
            <>
              <div className="text-6xl mb-6">❌</div>
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">
                Verification Failed
              </h1>
              <p className="text-white/60 mb-4">
                {errorMessage}
              </p>
              <p className="text-white/40 text-sm mb-8">
                The link may have expired. Please request a new confirmation email from the app.
              </p>
              <a
                href="kemmi://"
                className="inline-block w-full py-4 text-white font-bold rounded-xl hover:opacity-90 transition-all text-center"
                style={{
                  background: "linear-gradient(135deg, #007AFF 0%, #0051D4 100%)",
                }}
              >
                Open KEMMI App
              </a>
            </>
          )}

        </div>
      </div>

      {/* App Store Link */}
      <div className="mt-8 z-10 text-center">
        <p className="text-white/40 text-sm mb-2">Don&apos;t have the app?</p>
        <a
          href="https://apps.apple.com/app/kemmi"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[#5CA0E8] text-sm hover:underline"
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
