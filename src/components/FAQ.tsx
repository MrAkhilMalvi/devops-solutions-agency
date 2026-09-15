"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FirecrawlSection } from "@/components/ui/grid-bg";
import { ASCII_FAQ_FRAMES, devOpsFaqs } from "@/lib/constants";

export default function ExactFAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [frameIdx, setFrameIdx] = useState(0);

  // Smooth ASCII morphing effect cycling special characters
  useEffect(() => {
    const timer = setInterval(() => {
      setFrameIdx((prev) => (prev + 1) % ASCII_FAQ_FRAMES.length);
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  return (
    <FirecrawlSection id="faq" className="py-0">
      {/* 1. Firecrawl Metadata Sub-header bar */}
      <div className="relative -mx-6 sm:-mx-10 lg:-mx-16 border-b border-slate-200/70 px-6 sm:px-10 lg:px-16 py-3.5">
        <div className="flex items-center gap-2">
          {/* Orange active indicator notch */}
          <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />

          {/* Technical indicator */}
          <span className="font-mono text-xs tracking-tight text-slate-400">
            [ <span className="text-[#ff5722] font-semibold">06</span> / 06 ]
          </span>
          <span className="text-slate-300 text-xs">·</span>
          <span className="font-mono text-xs uppercase tracking-wider text-slate-400">
            FAQ
          </span>
        </div>
      </div>

      {/* 2. Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-145">
        {/* LEFT COLUMN: Animated Big ASCII "FAQ" in Orange + Tech Badges */}
        <div className="relative lg:col-span-5 border-b lg:border-b-0 lg:border-r border-slate-200/70 p-8 sm:p-12 flex flex-col justify-between overflow-hidden bg-[#fdfcfb]">
          {/* Background Micro-Dot Grid */}
          <div
            className="absolute inset-0 opacity-[0.4] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(rgba(0, 0, 0, 0.12) 1px, transparent 1px)`,
              backgroundSize: "18px 18px",
            }}
          />

          {/* Top Tag */}
          <div className="relative z-10">
            <span className="font-mono text-[11px] uppercase tracking-widest text-slate-400">
              [ QUERY_INDEX // RUNTIME ]
            </span>
          </div>

          {/* CENTER: Big Special Character ASCII Art "FAQ" */}
          <div className="relative z-10 my-auto py-8 flex flex-col items-center justify-center">
            {/* Ambient Orange Glow behind the ASCII text */}
            <div className="absolute h-40 w-52 rounded-full bg-[#ff5722]/15 blur-2xl pointer-events-none" />

            <motion.div
              key={frameIdx}
              initial={{ opacity: 0.6, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="relative select-none text-center"
            >
              {/* ASCII Big Wordmark */}
              <pre className="font-mono text-xs sm:text-sm md:text-base font-extrabold leading-tight tracking-wider text-[#ff5722] drop-shadow-xs">
                {ASCII_FAQ_FRAMES[frameIdx].join("\n")}
              </pre>

              {/* Firecrawl floating pill badge overlapping */}
              <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full border border-orange-200/90 bg-white/95 px-3.5 py-1 shadow-2xs backdrop-blur-xs">
                  <span className="font-mono text-[11px] text-[#ff5722]">
                    //
                  </span>
                  <span className="text-xs">💬</span>
                  <span className="font-mono text-xs font-semibold text-slate-800 tracking-wider uppercase">
                    KNOWLEDGE BASE
                  </span>
                  <span className="font-mono text-[11px] text-[#ff5722]">
                    \\
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Live System Indicator */}
          <div className="relative z-10 flex items-center justify-between border-t border-slate-200/80 pt-4 font-mono text-[11px] text-slate-400">
            <span className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5722] animate-pulse" />
              STATUS: READY
            </span>
            <span>UTF-8 // MONO</span>
          </div>
        </div>

        {/* RIGHT COLUMN: Headline + Accordion */}
        <div className="lg:col-span-7 p-8 lg:p-14 flex flex-col justify-center bg-white">
          {/* Headline */}
          <div className="mb-10">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
              Frequently <br />
              asked <span className="text-[#ff5722]">questions</span>
            </h2>
            <p className="mt-3 text-sm text-slate-500 font-normal">
              Everything you need to know about our automated cloud operations.
            </p>
          </div>

          {/* Accordion List */}
          <div className="border-t border-slate-200/80 divide-y divide-slate-200/80">
            {devOpsFaqs.map((faq, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="transition-colors group">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-center justify-between py-4 text-left focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span
                      className={`text-[15px] font-medium transition-colors ${
                        isOpen
                          ? "text-[#ff5722]"
                          : "text-slate-800 group-hover:text-black"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="shrink-0 text-slate-400 ml-4">
                      <svg
                        className={`h-4 w-4 transform transition-transform duration-200 ${
                          isOpen ? "rotate-180 text-[#ff5722]" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pb-5 pt-1 text-sm leading-relaxed text-slate-600 font-normal">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </FirecrawlSection>
  );
}
