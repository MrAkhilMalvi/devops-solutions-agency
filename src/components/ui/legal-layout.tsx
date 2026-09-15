"use client";

import React from "react";
import Link from "next/link";

export function LegalPageLayout({
  tag,
  title,
  lastUpdated,
  children,
}: {
  tag: string;
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#faf9f6] text-[#0f172a] font-sans antialiased selection:bg-[#ff5722] selection:text-white">
      {/* 1. Header Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-[#faf9f6]/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16 border-x border-slate-200/80">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="flex h-7 w-7 items-center justify-center rounded-md bg-[#ff5722] text-white font-mono text-xs font-bold">
              λ
            </div>
            <span className="font-bold tracking-tight text-slate-900 text-sm">
              CloudScale<span className="text-[#ff5722]">.ops</span>
            </span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-500 hover:text-slate-900 transition-colors"
          >
            <span>← Back to Platform</span>
          </Link>
        </div>
      </header>

      {/* 2. Main Page Grid Frame */}
      <main className="mx-auto max-w-7xl border-x border-slate-200/80 bg-white">
        
        {/* Metadata sub-header bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-16 py-3.5 flex items-center justify-between bg-[#fdfcfb]">
          <div className="flex items-center gap-2">
            <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ LEGAL ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              {tag}
            </span>
          </div>

          <span className="font-mono text-[11px] text-slate-400">
            EFFECTIVE: {lastUpdated}
          </span>
        </div>

        {/* Hero Title Block */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-16 py-12 bg-[#faf9f6]/50">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
            {title}
          </h1>
          <p className="mt-3 font-mono text-xs text-slate-500 uppercase tracking-wider">
            CloudScale Ops Inc. // Infrastructure Security & Trust Agreement
          </p>
        </div>

        {/* Content Body */}
        <div className="px-6 sm:px-10 lg:px-16 py-12 max-w-4xl prose prose-slate prose-sm sm:prose-base font-normal">
          {children}
        </div>

        {/* Quick Legal Switcher Footer Bar */}
        <div className="border-t border-slate-200/80 px-6 sm:px-10 lg:px-16 py-6 bg-[#fdfcfb] flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-slate-500 hover:text-[#ff5722] transition-colors">
              Privacy Policy
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/terms" className="text-slate-500 hover:text-[#ff5722] transition-colors">
              Terms of Service
            </Link>
            <span className="text-slate-300">·</span>
            <Link href="/cookies" className="text-slate-500 hover:text-[#ff5722] transition-colors">
              Cookie Settings
            </Link>
          </div>
          <span className="text-slate-400">© {new Date().getFullYear()} CloudScale Ops.</span>
        </div>
      </main>
    </div>
  );
}