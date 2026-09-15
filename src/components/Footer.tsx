"use client";

import  { useState, useEffect } from "react";
import { Icon } from "@iconify/react";
import Link from "next/link";
import { ASCII_LANDSCAPE_FRAMES } from "@/lib/constants";

export default function DevOpsFooter() {
  const [frameIdx, setFrameIdx] = useState(0);

  // Subtle morph animation for ASCII landscape
  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIdx((prev) => (prev + 1) % ASCII_LANDSCAPE_FRAMES.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#faf9f6] text-[#0f172a] font-sans antialiased border-t border-slate-200/80 pt-8 pb-12">
      {/* Container matching Firecrawl 7xl grid */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Decorative Track Line with Intersect Node */}
        <div className="relative mb-6 h-4 w-full border-x border-slate-200/70 border-t rounded-t-xl bg-slate-50/50 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full border border-slate-300 bg-white" />
        </div>

        {/* Main Boxed Footer Container */}
        <div className="border border-slate-200/80 bg-white shadow-2xs overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80">
            {/* LEFT HALF: Branding + Big Animated ASCII Landscape */}
            <div className="lg:col-span-6 p-8 sm:p-12 flex flex-col justify-between relative bg-[#fdfcfb]">
              {/* Brand Header */}
              <div className="space-y-4">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ff5722] text-white font-mono text-xs font-bold shadow-2xs">
                    λ
                  </div>
                  <span className="text-xl font-bold tracking-tight text-slate-900">
                    CloudScale<span className="text-[#ff5722]">.ops</span>
                  </span>
                </div>

                <p className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 max-w-sm leading-snug">
                  The automated way to scale cloud infrastructure.
                </p>
                <p className="text-xs text-slate-500 max-w-sm leading-relaxed">
                  Zero markup cloud setups, auto-scaling clusters, and 24/7
                  proactive site reliability management.
                </p>
              </div>

              {/* Animated ASCII Landscape Art in Orange */}
              <div className="mt-12 overflow-hidden select-none pointer-events-none">
                <pre className="font-mono text-[9px] sm:text-[10px] leading-3.25 tracking-[1.5px] text-[#ff5722] opacity-80 whitespace-pre overflow-x-hidden">
                  {ASCII_LANDSCAPE_FRAMES[frameIdx].join("\n")}
                </pre>
              </div>
            </div>

            {/* RIGHT HALF: Platform Navigation & Social Media Grid */}
            <div className="lg:col-span-6 flex flex-col bg-white">
              {/* Main Tabular Grid: 2 Columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-slate-200/80 flex-1">
                {/* Column 1: Platform & Services Navigation */}
                <div className="flex flex-col justify-between divide-y divide-slate-200/80">
                  <div className="p-4 bg-slate-50/60 border-b border-slate-200/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      // PLATFORM
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200/80 text-xs">
                    <a
                      href="#how-it-works"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-medium">How It Works</span>
                      <span className="font-mono text-[10px] text-slate-400">
                        01
                      </span>
                    </a>

                    <a
                      href="#global-infra"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-medium">Global Infrastructure</span>
                      <span className="font-mono text-[10px] text-slate-400">
                        02
                      </span>
                    </a>

                    <a
                      href="#infra"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-medium">Infra Comparison</span>
                      <span className="font-mono text-[10px] text-slate-400">
                        03
                      </span>
                    </a>

                    <a
                      href="#contact"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-medium">Architecture Audit</span>
                      <span className="font-mono text-[10px] text-[#ff5722] font-semibold">
                        FREE
                      </span>
                    </a>

                    <a
                      href="#faq"
                      className="flex items-center justify-between px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <span className="font-medium">
                        Frequently Asked Questions
                      </span>
                      <span className="font-mono text-[10px] text-slate-400">
                        05
                      </span>
                    </a>
                  </div>
                </div>

                {/* Column 2: Social Media Channels */}
                <div className="flex flex-col justify-between divide-y divide-slate-200/80">
                  <div className="p-4 bg-slate-50/60 border-b border-slate-200/80">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                      // SOCIAL & COMMUNITY
                    </span>
                  </div>

                  <div className="divide-y divide-slate-200/80 text-xs">
                    <a
                      href="https://x.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <Icon
                        icon="ri:twitter-x-fill"
                        className="h-4 w-4 text-slate-600 shrink-0"
                      />
                      <span className="font-medium">X (formerly Twitter)</span>
                    </a>

                    <a
                      href="https://github.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <Icon
                        icon="ri:github-fill"
                        className="h-4 w-4 text-slate-600 shrink-0"
                      />
                      <span className="font-medium">GitHub Organization</span>
                    </a>

                    <a
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <Icon
                        icon="ri:linkedin-fill"
                        className="h-4 w-4 text-slate-600 shrink-0"
                      />
                      <span className="font-medium">LinkedIn</span>
                    </a>

                    <a
                      href="https://discord.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <Icon
                        icon="ri:discord-fill"
                        className="h-4 w-4 text-slate-600 shrink-0"
                      />
                      <span className="font-medium">Discord Community</span>
                    </a>

                    <a
                      href="https://youtube.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-6 py-4 text-slate-700 hover:text-[#ff5722] hover:bg-slate-50/70 transition-colors"
                    >
                      <Icon
                        icon="ri:youtube-fill"
                        className="h-4 w-4 text-slate-600 shrink-0"
                      />
                      <span className="font-medium">YouTube</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Bottom Hairline Utility Bar (Legal & Preferences) */}
              <div className="border-t border-slate-200/80 px-6 py-4 bg-slate-50/40 flex flex-wrap items-center justify-between gap-4 text-xs font-mono">
                <div className="flex items-center gap-6">
                  <Link
                    href="/privacy"
                    className="text-slate-500 hover:text-[#ff5722] transition-colors"
                  >
                    PRIVACY POLICY
                  </Link>
                  <span className="text-slate-300">·</span>
                  <Link
                    href="/terms"
                    className="text-slate-500 hover:text-[#ff5722] transition-colors"
                  >
                    TERMS OF SERVICE
                  </Link>
                  <span className="text-slate-300">·</span>
                  <Link
                    href="/cookies"
                    className="text-slate-500 hover:text-[#ff5722] transition-colors"
                  >
                    COOKIE SETTINGS
                  </Link>
                </div>

                <div className="flex items-center gap-2 text-emerald-600 text-[11px]">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span>ALL SYSTEMS OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Decorative Track Line */}
        <div className="relative mt-6 h-4 w-full border-x border-slate-200/70 border-b rounded-b-xl bg-slate-50/50 flex items-center justify-center">
          <div className="h-2 w-2 rounded-full border border-slate-300 bg-white" />
        </div>

        {/* Copyright notice */}
        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between text-slate-400 font-mono text-[11px]">
          <div>
            © {new Date().getFullYear()} CloudScale Ops. All rights reserved.
          </div>
          <div>BUILT FOR MODERN STARTUP CLOUD RUNTIMES</div>
        </div>
      </div>
    </footer>
  );
}
