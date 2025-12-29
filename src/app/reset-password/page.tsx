"use client";

import { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = 'https://ooygypzgbpyhpxvvpmop.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im9veWd5cHpnYnB5aHB4dnZwbW9wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzE4NjM2ODIsImV4cCI6MjA0NzQzOTY4Mn0.giyPEfGVqU1wRNdVXk4z0fSPJPMCnzxMvLxsNU5pP-A';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

type PageState = "loading" | "form" | "success" | "error";

function getPasswordStrength(password: string): { strength: number; label: string; color: string } {
  let strength = 0;

  if (password.length >= 8) strength += 1;
  if (password.length >= 12) strength += 1;
  if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
  if (/\d/.test(password)) strength += 1;
  if (/[^a-zA-Z0-9]/.test(password)) strength += 1;

  if (strength <= 1) return { strength: 1, label: "Weak", color: "#ff4444" };
  if (strength <= 2) return { strength: 2, label: "Fair", color: "#ffaa00" };
  if (strength <= 3) return { strength: 3, label: "Good", color: "#88cc00" };
  if (strength <= 4) return { strength: 4, label: "Strong", color: "#00cc66" };
  return { strength: 5, label: "Very Strong", color: "#00ff96" };
}

export default function ResetPasswordPage() {
  const [pageState, setPageState] = useState<PageState>("loading");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const processTokens = async () => {
      // Get hash from URL
      const hash = window.location.hash.substring(1);
      const params = new URLSearchParams(hash);

      const accessToken = params.get("access_token");
      const refreshToken = params.get("refresh_token");
      const type = params.get("type");

      if (!accessToken || !refreshToken || type !== "recovery") {
        setPageState("error");
        return;
      }

      try {
        const { error } = await supabase.auth.setSession({
          access_token: accessToken,
          refresh_token: refreshToken,
        });

        if (error) {
          console.error("Session error:", error);
          setPageState("error");
          return;
        }

        setPageState("form");
      } catch (err) {
        console.error("Error processing tokens:", err);
        setPageState("error");
      }
    };

    processTokens();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (password.length < 8) {
      setErrorMessage("Password must be at least 8 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match.");
      return;
    }

    setIsSubmitting(true);

    try {
      const { error } = await supabase.auth.updateUser({ password });

      if (error) {
        setErrorMessage(error.message);
        setIsSubmitting(false);
        return;
      }

      setPageState("success");
    } catch {
      setErrorMessage("An unexpected error occurred. Please try again.");
      setIsSubmitting(false);
    }
  };

  const passwordStrength = getPasswordStrength(password);

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
      <div className="mb-8 z-10">
        <span className="font-orbitron text-3xl font-bold bg-gradient-to-r from-cyan to-green bg-clip-text text-transparent">
          CALCULX
        </span>
      </div>

      {/* Card */}
      <div className="w-full max-w-md z-10">
        <div className="bg-white/[0.03] border border-cyan/20 rounded-2xl p-8 backdrop-blur-sm">

          {/* Loading State */}
          {pageState === "loading" && (
            <div className="text-center py-8">
              <div className="w-12 h-12 border-[3px] border-cyan/30 border-t-cyan rounded-full animate-spin mx-auto mb-4" />
              <p className="text-white/60">Verifying your link...</p>
            </div>
          )}

          {/* Error State */}
          {pageState === "error" && (
            <div className="text-center">
              <div className="text-6xl mb-6">⚠️</div>
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">Link Expired</h1>
              <p className="text-white/60 mb-8">
                This password reset link has expired or is invalid.
              </p>
              <a
                href="calculxapp://"
                className="inline-block w-full py-4 bg-gradient-to-r from-cyan to-green text-[#030308] font-bold rounded-xl hover:opacity-90 transition-all text-center"
              >
                Open CalculX App
              </a>
            </div>
          )}

          {/* Form State */}
          {pageState === "form" && (
            <>
              <div className="text-center mb-8">
                <div className="text-5xl mb-4">🔐</div>
                <h1 className="font-orbitron text-2xl font-bold text-white mb-2">Reset Password</h1>
                <p className="text-white/60 text-sm">
                  Enter your new password below. Make sure it&apos;s at least 8 characters long.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* New Password */}
                <div>
                  <label htmlFor="password" className="block text-sm font-medium text-white/80 mb-2">
                    New Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                    placeholder="Enter new password"
                  />

                  {/* Password Strength Indicator */}
                  {password.length > 0 && (
                    <div className="mt-3">
                      <div className="flex gap-1 mb-1">
                        {[1, 2, 3, 4, 5].map((level) => (
                          <div
                            key={level}
                            className="h-1 flex-1 rounded-full transition-colors"
                            style={{
                              backgroundColor: level <= passwordStrength.strength
                                ? passwordStrength.color
                                : 'rgba(255,255,255,0.1)'
                            }}
                          />
                        ))}
                      </div>
                      <p className="text-xs" style={{ color: passwordStrength.color }}>
                        {passwordStrength.label}
                      </p>
                    </div>
                  )}
                </div>

                {/* Confirm Password */}
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-white/80 mb-2">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    minLength={8}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/30 focus:outline-none focus:border-cyan/50 transition-colors"
                    placeholder="Confirm new password"
                  />
                  {confirmPassword.length > 0 && password !== confirmPassword && (
                    <p className="text-xs text-red-400 mt-2">Passwords do not match</p>
                  )}
                </div>

                {/* Error Message */}
                {errorMessage && (
                  <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-4">
                    <p className="text-red-400 text-sm">{errorMessage}</p>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting || password.length < 8 || password !== confirmPassword}
                  className="w-full py-4 bg-gradient-to-r from-cyan to-green text-[#030308] font-bold rounded-xl hover:opacity-90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-[#030308]/30 border-t-[#030308] rounded-full animate-spin" />
                      Updating...
                    </>
                  ) : (
                    "Update Password"
                  )}
                </button>
              </form>
            </>
          )}

          {/* Success State */}
          {pageState === "success" && (
            <div className="text-center">
              <div className="text-6xl mb-6">✅</div>
              <h1 className="font-orbitron text-2xl font-bold text-white mb-3">Password Updated!</h1>
              <p className="text-white/60 mb-8">
                Your password has been successfully changed.
              </p>
              <a
                href="calculxapp://"
                className="inline-block w-full py-4 bg-gradient-to-r from-cyan to-green text-[#030308] font-bold rounded-xl hover:opacity-90 transition-all text-center"
              >
                Open CalculX App
              </a>
            </div>
          )}

        </div>
      </div>

      {/* Footer */}
      <p className="text-white/30 text-xs mt-8 z-10">
        © 2025 Digital App LLC
      </p>
    </div>
  );
}
