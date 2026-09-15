"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import {
  ASCII_CHARS,
  TECH_NODES_LEFT,
  TECH_NODES_RIGHT,
} from "@/lib/constants";

function AsciiParticleTower({ nodes }: { nodes: typeof TECH_NODES_LEFT }) {
  const [frame, setFrame] = useState(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  // Progressive step-by-step animation loop (like the Firecrawl live particle morph)
  useEffect(() => {
    const timer = setInterval(() => {
      setFrame((prev) => (prev + 1) % 60);
    }, 90);
    return () => clearInterval(timer);
  }, []);

  // Compute procedurally generated ASCII cloud rows that morph continuously
  const renderAsciiCloud = () => {
    const rows = 14;
    const output: string[] = [];

    for (let r = 0; r < rows; r++) {
      // Width widens as we go down to form an expansive cloud formation
      const progress = r / rows;
      const width = Math.floor(progress * 26) + 3;
      const wave = Math.sin(r * 0.5 + frame * 0.25) * 2;
      const effectiveWidth = Math.max(2, Math.floor(width + wave));

      let line = "";
      for (let c = 0; c < effectiveWidth; c++) {
        const charIdx = (r + c + frame) % ASCII_CHARS.length;
        // Hot core in center, softer chars on edge
        const distFromCenter = Math.abs(c - effectiveWidth / 2);
        const char = distFromCenter < 2 ? "^" : ASCII_CHARS[charIdx];
        line += char;
      }

      // Pad horizontally
      const pad = " ".repeat(Math.max(0, 18 - Math.floor(effectiveWidth / 2)));
      output.push(pad + line);
    }
    return output;
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden select-none">
      {/* 1. Behind the Cloud: 3x3 Architectural Grid with Tech Stack Nodes */}
      <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 divide-x divide-y divide-slate-200/70 z-0">
        {nodes.map((tech, i) => {
          const isFlipping = (frame + i) % 8 === 0;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative flex flex-col items-center justify-center p-2 transition-all duration-300 ${
                hoveredIdx === i ? "bg-white shadow-2xs z-20" : "bg-transparent"
              }`}
            >
              {/* Subtle crosshair in top left of cell */}
              <span className="absolute top-1 left-1.5 font-mono text-[8px] text-slate-300 select-none">
                +
              </span>

              {/* Tech Icon that subtly reveals behind ASCII formation */}
              <div
                className={`transition-all duration-500 flex flex-col items-center gap-1 ${
                  hoveredIdx === i || isFlipping
                    ? "opacity-90 scale-105"
                    : "opacity-25 hover:opacity-80 scale-95"
                }`}
              >
                <Icon
                  icon={tech.icon}
                  className="h-5 w-5 sm:h-6 sm:w-6 transition-transform"
                />
                <span className="font-mono text-[9px] uppercase tracking-wider text-slate-500">
                  {tech.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 2. Front Layer: Animated Rising ASCII Cloud Particle Formation */}
      <div className="relative z-10 pointer-events-none flex flex-col items-center justify-end h-full pb-4">
        <div className="font-mono text-[10px] sm:text-[11px] leading-3.25 tracking-[2.5px] text-[#ff5722] font-semibold mix-blend-multiply drop-shadow-xs">
          <pre className="text-center font-mono">
            {renderAsciiCloud().join("\n")}
          </pre>
        </div>

        {/* Live Step Badge */}
        <div className="mt-2 inline-flex items-center gap-1.5 rounded-full border border-orange-200/80 bg-white/90 px-2.5 py-0.5 shadow-2xs backdrop-blur-xs">
          <span className="h-1.5 w-1.5 rounded-full bg-[#ff5722] animate-ping" />
          <span className="font-mono text-[9px] uppercase tracking-widest text-slate-600">
            AUTO-SCALING CLOUD
          </span>
        </div>
      </div>
    </div>
  );
}

export default function ReadyToBuildSection() {
  return (
    <section className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased overflow-hidden">
      {/* Outer bounding container matching Firecrawl frame */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* Main 3-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-125">
          {/* LEFT FLANK: Bordered Tech Grid + Animated ASCII Cloud Formation */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-between border-r border-slate-200/80 bg-[#fdfcfb] relative p-3">
            <div className="font-mono text-[11px] text-slate-400 tracking-wider select-none">
              [ SEARCH ]
            </div>

            <div className="my-auto h-95 w-full">
              <AsciiParticleTower nodes={TECH_NODES_LEFT} />
            </div>

            <div className="font-mono text-[11px] text-slate-400 tracking-wider select-none">
              [ SCRAPE ]
            </div>
          </div>

          {/* CENTER: Main Ready to Build Content */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center text-center p-8 sm:p-12 lg:p-16 bg-white relative">
            {/* Top Firecrawl Centered Floating Pill Badge */}
            <div className="mb-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1 shadow-2xs backdrop-blur-xs">
                <span className="font-mono text-[11px] text-slate-400">//</span>
                <span className="text-xs">🔥</span>
                <span className="font-mono text-[11px] font-semibold text-slate-800 tracking-wider">
                  Get started
                </span>
                <span className="font-mono text-[11px] text-slate-400">\\</span>
              </div>
            </div>

            {/* Main Headline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 leading-[1.08]">
              Ready to build?
            </h2>

            {/* Subtitle matching your DevOps offering */}
            <p className="mt-5 max-w-md text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
              Deploy managed cloud infrastructure for free and scale seamlessly
              as your application expands. No credit card needed.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#contact"
                className="rounded-xl bg-[#ff5722] px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-xs hover:bg-[#f4511e] transition-colors"
              >
                Start for free
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href="#pricing"
                className="rounded-xl border border-slate-200 bg-slate-50 px-6 py-3 text-xs sm:text-sm font-medium text-slate-700 hover:bg-slate-100/80 transition-colors"
              >
                See our plans
              </motion.a>
            </div>

            {/* Sub-link with Chevron */}
            <div className="mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-slate-800 transition-colors"
              >
                <span>Are you migrating from PaaS? See setup options</span>
                <span className="text-slate-500">›</span>
              </a>
            </div>
          </div>

          {/* RIGHT FLANK: Bordered Tech Grid + Animated ASCII Cloud Formation */}
          <div className="lg:col-span-3 hidden lg:flex flex-col justify-between border-l border-slate-200/80 bg-[#fdfcfb] relative p-3">
            <div className="font-mono text-[11px] text-slate-400 tracking-wider text-right select-none">
              [ INTERACT ]
            </div>

            <div className="my-auto h-95 w-full">
              <AsciiParticleTower nodes={TECH_NODES_RIGHT} />
            </div>

            <div className="font-mono text-[11px] text-slate-400 tracking-wider text-right select-none">
              [ CRAWL ]
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
