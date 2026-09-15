"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function ContactSection() {
  const [agreed, setAgreed] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Request received. We will reach out within 24 hours.");
  };

  return (
    <section
      id="contact"
      className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased"
    >
      {/* Outer bounding container matching Firecrawl frame */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* 1. Firecrawl Metadata Sub-header bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            {/* Orange notch indicator */}
            <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ <span className="text-[#ff5722] font-semibold">04</span> / 06 ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Contact & Infra Audit
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            24/7 ENGINEERS DISPATCHED
          </div>
        </div>

        {/* 2. Main Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-155">
          {/* LEFT COLUMN: Editorial, Locations & Direct Contact */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 relative">
            <span className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-slate-400 text-xs hidden lg:inline">
              +
            </span>
            <span className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-slate-400 text-xs hidden lg:inline">
              +
            </span>

            {/* Top Area: Headline */}
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12]">
                  Accelerate Your <br />
                  <span className="text-[#ff5722]">Cloud Decisions</span>
                </h2>
                {/* Minimal technical corner arrow */}
                <span className="font-mono text-slate-400 text-xs select-none">
                  ┐
                </span>
              </div>

              <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed font-normal max-w-lg">
                Schedule an infrastructure discovery call. We analyze your repo,
                identify idle server bloat, and calculate your exact monthly
                cost reduction roadmap.
              </p>
            </div>

            {/* Middle Area: Locations Grid with Dot-Matrix Monospace Text */}
            <div className="my-10 border-y border-slate-200/80 py-8">
              <div className="grid grid-cols-3 gap-4">
                {/* Location 1 */}
                <div className="space-y-1.5">
                  <div className="font-mono text-lg sm:text-xl font-bold tracking-tighter text-slate-700 select-none">
                    SF<span className="text-[#ff5722]">.</span>
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 leading-tight uppercase">
                    548 MARKET ST <br />
                    SAN FRANCISCO, CA
                  </div>
                </div>

                {/* Location 2 */}
                <div className="space-y-1.5 border-l border-slate-200/80 pl-4">
                  <div className="font-mono text-lg sm:text-xl font-bold tracking-tighter text-slate-700 select-none">
                    NYC<span className="text-[#ff5722]">.</span>
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 leading-tight uppercase">
                    217 BROADWAY <br />
                    NEW YORK, NY
                  </div>
                </div>

                {/* Location 3 */}
                <div className="space-y-1.5 border-l border-slate-200/80 pl-4">
                  <div className="font-mono text-lg sm:text-xl font-bold tracking-tighter text-slate-700 select-none">
                    LON<span className="text-[#ff5722]">.</span>
                  </div>
                  <div className="font-mono text-[10px] text-slate-400 leading-tight uppercase">
                    30 ST MARY AXE <br />
                    LONDON, UK
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Direct Email */}
            <div className="space-y-3">
              <p className="text-xs text-slate-500 leading-relaxed">
                For urgent incident support, enterprise migrations, or
                customized SLA contracts, reach out directly to our engineering
                desk:
              </p>
              <a
                href="mailto:ops@cloudscaleops.com"
                className="inline-flex items-center gap-1.5 font-mono text-xs font-semibold text-[#ff5722] hover:underline uppercase tracking-wider"
              >
                OPS@CLOUDSCALEOPS.COM <span className="text-slate-400">✓</span>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form with Diagonal Hatch Pattern */}
          <div className="lg:col-span-6 p-8 sm:p-10 lg:p-14 flex flex-col justify-between bg-white relative">
            <div className="flex items-start justify-between mb-8">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Contact Us
              </h3>
              <span className="font-mono text-slate-400 text-xs select-none">
                ┐
              </span>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Field 1: Name */}
              <div className="space-y-1">
                <label className="inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider">
                  YOUR NAME
                </label>
                <div className="relative border-b-2 border-slate-900">
                  <input
                    type="text"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full bg-transparent px-2 py-2.5 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Field 2: Email (Styled with Diagonal Technical Hatching & Orange focus) */}
              <div className="space-y-1">
                <label className="inline-block bg-[#ff5722] text-white font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider font-semibold">
                  WORK EMAIL
                </label>
                <div
                  className="relative border border-[#ff5722] p-1"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(255,87,34,0.03) 0, rgba(255,87,34,0.03) 2px, transparent 0, transparent 8px)`,
                  }}
                >
                  <input
                    type="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className="w-full bg-transparent px-2 py-2.5 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Field 3: Company */}
              <div className="space-y-1">
                <label className="inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider">
                  COMPANY / CURRENT CLOUD PROVIDER
                </label>
                <div className="relative border-b-2 border-slate-900">
                  <input
                    type="text"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Acme Inc. (AWS / Vercel / GCP)"
                    className="w-full bg-transparent px-2 py-2.5 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Field 4: Your Details / Textarea with Diagonal Hatching */}
              <div className="space-y-1">
                <label className="inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider">
                  PROJECT SPECIFICS & ESTIMATED SPEND
                </label>
                <div
                  className="relative border border-slate-300 focus-within:border-[#ff5722] p-1 transition-colors"
                  style={{
                    backgroundImage: `repeating-linear-gradient(45deg, rgba(0,0,0,0.02) 0, rgba(0,0,0,0.02) 2px, transparent 0, transparent 8px)`,
                  }}
                >
                  <textarea
                    rows={4}
                    value={formState.details}
                    onChange={(e) =>
                      setFormState({ ...formState, details: e.target.value })
                    }
                    placeholder="Tell us about your architecture, current monthly cloud bills, or downtime concerns..."
                    className="w-full resize-none bg-transparent px-2 py-2 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-start gap-3 pt-2">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-1 h-4 w-4 rounded-xs border-slate-300 accent-[#ff5722] cursor-pointer"
                  required
                />
                <label
                  htmlFor="terms"
                  className="font-mono text-[10px] uppercase text-slate-400 leading-tight cursor-pointer"
                >
                  BY CLICKING &quot;SEND REQUEST&quot; YOU CONFIRM YOU AGREE
                  WITH OUR{" "}
                  <Link
                    href="/terms"
                    className="underline hover:text-slate-700"
                  >
                    TERMS AND CONDITIONS{" "}
                  </Link>
                  .
                </label>
              </div>

              {/* Submit CTA Button (Vibrant Orange with Corner Arrow) */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: 1.005 }}
                  whileTap={{ scale: 0.995 }}
                  type="submit"
                  className="relative flex w-full items-center justify-center bg-[#ff5722] hover:bg-[#f4511e] py-4 text-xs font-mono font-bold tracking-widest text-white uppercase transition-colors shadow-xs"
                >
                  <span>SEND REQUEST</span>
                  <span className="absolute right-4 text-sm select-none font-mono">
                    ┐
                  </span>
                </motion.button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
