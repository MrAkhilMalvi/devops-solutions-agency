"use client";

import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { row1, row2, row3, row4 } from "@/lib/constants";

export default function ExactBentoCloudSection() {
  return (
    <section className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] font-sans antialiased text-[#0f172a]">
      {/* Outer bounding container matching Firecrawl frame */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* 1. Firecrawl Metadata Sub-header bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ <span className="text-[#ff5722] font-semibold">02</span> / 06 ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Workflow & Execution
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#ff5722]" />
            3-STEP AUTOMATION
          </div>
        </div>

        {/* 2. Headline & Action Row */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-10 flex flex-col md:flex-row md:items-end justify-between gap-6 relative">
          <span className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-slate-400 text-xs hidden lg:inline">
            +
          </span>
          <span className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-slate-400 text-xs hidden lg:inline">
            +
          </span>

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-slate-200/90 bg-white px-3 py-0.5 text-xs mb-3 shadow-2xs">
              <span className="font-mono text-[10px] text-slate-400">//</span>
              <span className="font-mono text-[11px] font-medium text-slate-700">
                EXECUTION PIPELINE
              </span>
              <span className="font-mono text-[10px] text-slate-400">\\</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
              How it <span className="text-[#ff5722]">works</span>
            </h2>
          </div>

          <motion.a
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            href="#contact"
            className="inline-flex items-center gap-2 rounded-md bg-[#ff5722] px-5 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-[#f4511e] w-fit shadow-xs"
          >
            Try for free <span>→</span>
          </motion.a>
        </div>

        {/* 3. Bento Grid Container with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {/* CARD 1: Repository & Specs Trigger */}
          <div className="flex flex-col bg-white hover:bg-slate-50/50 transition-colors group relative">
            {/* Visual Area with subtle dot-matrix */}
            <div
              className="relative h-64 w-full p-6 flex flex-col justify-center items-center border-b border-slate-200/80 bg-[#fdfcfb]"
              style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            >
              <div className="w-full max-w-62.5 space-y-2.5">
                {/* Trigger 1 */}
                <motion.div
                  initial={{ x: -8, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 rounded-md bg-white px-3.5 py-2.5 shadow-xs border border-slate-200/90"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-100">
                    <Icon icon="logos:git-icon" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs text-slate-800">
                    git push origin main
                  </span>
                </motion.div>

                {/* Connector Indicator */}
                <div className="flex justify-center text-slate-400 font-mono text-xs">
                  ↓
                </div>

                {/* Trigger 2 */}
                <motion.div
                  initial={{ x: 8, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-2.5 rounded-md bg-white px-3.5 py-2.5 shadow-xs border border-slate-200/90"
                >
                  <span className="flex h-5 w-5 items-center justify-center rounded bg-orange-50">
                    <Icon icon="logos:docker-icon" className="h-3.5 w-3.5" />
                  </span>
                  <span className="font-mono text-xs text-slate-800">
                    terraform apply
                  </span>
                </motion.div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#ff5722]">
                  01.
                </span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Connect your repository
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Link your codebase and specify your infrastructure requirements
                to trigger automated provisioning.
              </p>
            </div>
          </div>

          {/* CARD 2: App & Tech Integration Grid */}
          <div className="flex flex-col bg-white hover:bg-slate-50/50 transition-colors group relative">
            {/* Visual Matrix Container */}
            <div className="relative h-64 w-full p-4 flex flex-col justify-center overflow-hidden border-b border-slate-200/80 bg-[#fdfcfb]">
              <div className="flex flex-col gap-2">
                {/* ROW 1 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 25,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex gap-2 shrink-0"
                  >
                    {[...row1, ...row1].map((item, idx) => (
                      <div
                        key={`r1-${idx}`}
                        className={`h-10 w-10 rounded-md flex items-center justify-center shrink-0 border border-slate-200/80 ${
                          item.empty ? "bg-slate-50/50" : "bg-white shadow-2xs"
                        }`}
                      >
                        {item.icon && (
                          <Icon icon={item.icon} className="h-4.5 w-4.5" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* ROW 2 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex gap-2 shrink-0"
                  >
                    {[...row2, ...row2].map((item, idx) => (
                      <div
                        key={`r2-${idx}`}
                        className={`h-10 w-10 rounded-md flex items-center justify-center shrink-0 border border-slate-200/80 ${
                          item.empty ? "bg-slate-50/50" : "bg-white shadow-2xs"
                        }`}
                      >
                        {item.icon && (
                          <Icon icon={item.icon} className="h-4.5 w-4.5" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* ROW 3 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    animate={{ x: ["0%", "-50%"] }}
                    transition={{
                      duration: 22,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex gap-2 shrink-0"
                  >
                    {[...row3, ...row3].map((item, idx) => (
                      <div
                        key={`r3-${idx}`}
                        className={`h-10 w-10 rounded-md flex items-center justify-center shrink-0 border border-slate-200/80 ${
                          item.empty ? "bg-slate-50/50" : "bg-white shadow-2xs"
                        }`}
                      >
                        {item.icon && (
                          <Icon icon={item.icon} className="h-4.5 w-4.5" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>

                {/* ROW 4 */}
                <div className="flex overflow-hidden">
                  <motion.div
                    animate={{ x: ["-50%", "0%"] }}
                    transition={{
                      duration: 28,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="flex gap-2 shrink-0"
                  >
                    {[...row4, ...row4].map((item, idx) => (
                      <div
                        key={`r4-${idx}`}
                        className={`h-10 w-10 rounded-md flex items-center justify-center shrink-0 border border-slate-200/80 ${
                          item.empty ? "bg-slate-50/50" : "bg-white shadow-2xs"
                        }`}
                      >
                        {item.icon && (
                          <Icon icon={item.icon} className="h-4.5 w-4.5" />
                        )}
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#ff5722]">
                  02.
                </span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Connect your stack
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Pre-configured support for AWS, Hetzner, Docker, Kubernetes,
                Supabase, and custom microservices.
              </p>
            </div>
          </div>

          {/* CARD 3: Automated Infrastructure Management */}
          <div className="flex flex-col bg-white hover:bg-slate-50/50 transition-colors group relative">
            {/* Visual Area */}
            <div
              className="relative h-64 w-full p-6 flex flex-col justify-center items-center border-b border-slate-200/80 bg-[#fdfcfb]"
              style={{
                backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.08) 1px, transparent 1px)`,
                backgroundSize: "16px 16px",
              }}
            >
              <motion.div
                initial={{ scale: 0.96, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="w-full max-w-65 rounded-md bg-white p-4 shadow-2xs border border-slate-200/90 font-mono text-xs space-y-2"
              >
                <div className="flex items-center justify-between text-[11px] text-slate-400 pb-1 border-b border-slate-100">
                  <span>DEPLOYMENT</span>
                  <span className="text-emerald-600 font-semibold">
                    SUCCESS
                  </span>
                </div>
                <div className="text-[11px] text-slate-600 space-y-1">
                  <div>✔ SSL Certificate active</div>
                  <div>✔ Auto-scaling rules applied</div>
                  <div>✔ Zero-downtime healthcheck</div>
                </div>
              </motion.div>
            </div>

            {/* Bottom Content Area */}
            <div className="p-8 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-bold text-[#ff5722]">
                  03.
                </span>
                <h3 className="text-base font-bold text-slate-900 tracking-tight">
                  Deploy and scale
                </h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed font-normal">
                Our automated workflows handle server provisioning, security
                rules, and monitoring continuously.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
