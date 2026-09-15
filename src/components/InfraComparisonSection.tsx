"use client";

import { managedSteps, traditionalSteps } from "@/lib/constants";
import { Calendar, Plus } from "lucide-react";

export default function ExactInfraComparisonSection() {
  return (
    <section className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased">
      {/* Outer bounding container matching Firecrawl frame */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* 1. Firecrawl Metadata Sub-header bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ <span className="text-[#ff5722] font-semibold">01</span> / 06 ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Infrastructure Comparison
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            BENCHMARK AUDIT
          </div>
        </div>

        {/* 2. Headline & Subtitle Area */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-12 text-center relative">
          <span className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-slate-400 text-xs hidden lg:inline">
            +
          </span>
          <span className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-slate-400 text-xs hidden lg:inline">
            +
          </span>

          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-0.5 text-xs mb-4 shadow-2xs">
            <span className="font-mono text-[10px] text-slate-400">//</span>
            <span className="font-mono text-[11px] font-medium text-slate-700">
              COST & EFFICIENCY
            </span>
            <span className="font-mono text-[10px] text-slate-400">\\</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Cloud maintenance{" "}
            <span className="text-[#ff5722]">10x cheaper</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Traditional cloud setups require expensive dedicated DevOps hires
            for every change. Our managed service handles setups, right-sizing,
            and security automatically.
          </p>
        </div>

        {/* 3. Comparison Grid: 2 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {/* Left Column: Traditional Workflow */}
          <div className="flex flex-col justify-between bg-white/70 hover:bg-white transition-colors">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200/70 mb-8">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Traditional Workflow Tools
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-rose-600 bg-rose-50 border border-rose-200/70 px-2 py-0.5 rounded">
                  Unoptimized
                </span>
              </div>

              <div className="space-y-6">
                {traditionalSteps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-rose-200 bg-rose-50/80 text-[11px] font-mono font-semibold text-rose-600">
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-800 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-400 font-mono">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div className="border-t border-slate-200/80 bg-rose-50/40 px-8 py-3.5 flex items-center justify-between font-mono text-xs text-rose-700">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-rose-500" />
                HIGH OVERHEAD & BLOATED MARGINS
              </span>
              <Calendar className="h-4 w-4 opacity-70" />
            </div>
          </div>

          {/* Right Column: Managed Infrastructure */}
          <div className="flex flex-col justify-between bg-white hover:bg-slate-50/40 transition-colors">
            <div className="p-8 sm:p-10 lg:p-12">
              <div className="flex items-center justify-between pb-6 border-b border-slate-200/70 mb-8">
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Managed Infrastructure
                </h3>
                <span className="font-mono text-[10px] uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200/70 px-2 py-0.5 rounded">
                  Automated
                </span>
              </div>

              <div className="space-y-6">
                {managedSteps.map((step) => (
                  <div key={step.num} className="flex gap-4 items-start">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded border border-emerald-200 bg-emerald-50/80 text-[11px] font-mono font-semibold text-emerald-700">
                      {step.num}
                    </span>
                    <div className="space-y-1">
                      <h4 className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight">
                        {step.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom Status Banner */}
            <div className="border-t border-slate-200/80 bg-emerald-50/40 px-8 py-3.5 flex items-center justify-between font-mono text-xs text-emerald-800">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                RIGHT-SIZED & 24/7 MANAGED
              </span>
              <Plus className="h-4 w-4 opacity-70" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
