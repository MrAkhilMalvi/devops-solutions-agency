"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Icon } from "@iconify/react";
import { globeConfig, sampleArcs } from "@/lib/constants";

const World = dynamic(
  () => import("@/components/ui/globe").then((m) => m.World),
  { ssr: false },
);

export default function GlobeConversionSection() {
  return (
    <section className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased overflow-hidden">
      {/* Outer container bounded by Firecrawl hairline borders */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* 1. Firecrawl Metadata Sub-header Bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Orange notch indicator */}
            <div className="h-4 w- rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ <span className="text-[#ff5722] font-semibold">03</span> / 06 ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Global Infrastructure
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            LIVE EDGE ROUTING
          </div>
        </div>

        {/* 2. Main Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-145">
          {/* LEFT COLUMN: Editorial & Metrics */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 relative">
            {/* Crosshair accents at grid corner */}
            <span className="pointer-events-none absolute -top-2 -right-2 text-[11px] font-mono text-slate-400 hidden lg:inline">
              +
            </span>
            <span className="pointer-events-none absolute -bottom-2 -right-2 text-[11px] font-mono text-slate-400 hidden lg:inline">
              +
            </span>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              {/* Category Pill */}
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-1 text-xs shadow-2xs">
                <span className="font-mono text-[11px] text-[#ff5722] font-semibold">
                  ●
                </span>
                <span className="font-mono text-[11px] text-slate-600 uppercase tracking-wide">
                  High Availability Cloud
                </span>
              </div>

              {/* Firecrawl Style Bold Typography */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                Deploy production-grade <br />
                infra{" "}
                <span className="text-[#ff5722]">anywhere in the world.</span>
              </h2>

              {/* Subheading */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-lg font-normal">
                We architect, automate, and manage high-availability clusters
                across AWS, GCP, Azure, and Hetzner—slashing raw hosting
                expenses by up to 60% with zero downtime.
              </p>

              {/* Highlights Technical Grid */}
              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border border-slate-200/80 bg-white/70 p-4 rounded-lg relative">
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-slate-400">
                    01
                  </span>
                  <div className="text-2xl font-bold font-mono text-slate-900">
                    50–70%
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    Reduction in PaaS markup costs
                  </p>
                </div>

                <div className="border border-slate-200/80 bg-white/70 p-4 rounded-lg relative">
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-slate-400">
                    02
                  </span>
                  <div className="text-2xl font-bold font-mono text-slate-900">
                    99.99%
                  </div>
                  <p className="text-xs text-slate-500 mt-1">
                    SLA backed automated failover
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTAs */}
            <div className="pt-8 flex flex-wrap items-center gap-3">
              <motion.a
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                href="#audit"
                className="inline-flex items-center gap-2 rounded-md bg-[#ff5722] px-5 py-2.5 text-xs font-semibold text-white shadow-xs hover:bg-[#f4511e] transition-colors"
              >
                Book Infrastructure Audit
                <Icon icon="lucide:arrow-right" className="h-3.5 w-3.5" />
              </motion.a>

              <a
                href="#case-studies"
                className="inline-flex items-center gap-1.5 rounded-md border border-slate-300/80 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
              >
                View Case Studies
                <span className="text-slate-400">›</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: 3D Interactive Console with Globe */}
          <div className="lg:col-span-6 relative flex flex-col items-center justify-center p-4 lg:p-8 min-h-110 lg:min-h-145 bg-[#fcfbfa]">
            {/* ASCII / Contour Grid subtle backdrop behind globe */}
            <div
              className="absolute inset-0 opacity-[0.35] pointer-events-none"
              style={{
                backgroundImage: `radial-gradient(rgba(0,0,0,0.12) 1px, transparent 1px)`,
                backgroundSize: "20px 20px",
              }}
            />

            {/* Centered Firecrawl Pill Badge above Globe */}
            <div className="absolute top-6 z-20">
              <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white/95 px-3.5 py-1 shadow-2xs backdrop-blur-xs">
                <span className="font-mono text-[11px] text-slate-400">//</span>
                <span className="text-xs">🌍</span>
                <span className="font-mono text-[11px] font-semibold text-slate-800 tracking-wider uppercase">
                  Multi-Region Failover
                </span>
                <span className="font-mono text-[11px] text-slate-400">\\</span>
              </div>
            </div>

            {/* Atmospheric Glow behind globe */}
            <div className="absolute h-64 w-64 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

            {/* 3D Globe Canvas */}
            <div className="relative w-full h-90 sm:h-105 lg:h-115 flex items-center justify-center z-10">
              <World data={sampleArcs} globeConfig={globeConfig} />
            </div>

            {/* Technical Edge Latency Footer Tag Bar */}
            <div className="w-full pt-4 border-t border-slate-200/70 flex items-center justify-between font-mono text-[11px] text-slate-500 z-10">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  us-east:{" "}
                  <strong className="text-slate-800 font-medium">14ms</strong>
                </span>
                <span className="flex items-center gap-1">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  eu-central:{" "}
                  <strong className="text-slate-800 font-medium">19ms</strong>
                </span>
              </div>
              <span className="text-slate-400 hidden sm:inline">
                DNS: ANYCAST ROUTED
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
