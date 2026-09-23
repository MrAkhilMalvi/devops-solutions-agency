"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [agreed, setAgreed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    details: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please agree to the terms and conditions before submitting.");
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus("idle");
    setStatusMessage("");

    try {
      // Template params to match your EmailJS template variables
      const templateParams = {
        name: formState.name,
        email: formState.email,
        company: formState.company || "Not Provided",
        details: formState.details,
        message: formState.details, // Fallback key commonly used in templates
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY,
      );

      setSubmitStatus("success");
      setStatusMessage(
        "Thank you! Your message has been dispatched successfully.",
      );
      setFormState({
        name: "",
        email: "",
        company: "",
        details: "",
      });
      setAgreed(false);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setSubmitStatus("error");
      setStatusMessage(
        "Failed to transmit request. Please contact support@akhilenterprise.info directly.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased"
    >
      {/* Outer bounding container */}
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* 1. Header Metadata Bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-1 rounded-full bg-[#ff5722]" />
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
            24/7 ENGINEERS ACTIVE (IST / UTC+5:30)
          </div>
        </div>

        {/* 2. Main Split Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-145">
          {/* LEFT COLUMN: Editorial, Location & Direct Contact */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-200/80 relative">
            <span className="pointer-events-none absolute -bottom-2 -left-2 font-mono text-slate-400 text-xs hidden lg:inline">
              +
            </span>
            <span className="pointer-events-none absolute -bottom-2 -right-2 font-mono text-slate-400 text-xs hidden lg:inline">
              +
            </span>

            {/* Top Area: Headline */}
            <div>
              <div className="flex items-start justify-between">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
                  Accelerate Your <br />
                  <span className="text-[#ff5722]">Cloud Decisions</span>
                </h2>
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

            {/* Middle Area: Ahmedabad, India Location Info */}
            <div className="my-8 border-y border-slate-200/80 py-6">
              <div className="rounded-lg border border-slate-200 bg-white/60 p-4 sm:p-5 backdrop-blur-xs">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] text-slate-400">
                    UTC+5:30 (IST)
                  </span>
                </div>

                <div className="mt-3 flex items-baseline gap-2">
                  <span className="text-sm font-semibold text-slate-700">
                    Ahmedabad, India
                  </span>
                </div>

                <p className="mt-1 font-mono text-xs text-slate-500 leading-relaxed uppercase tracking-wider">
                  Gujarat, India · Operating Global Remote Cloud Ops
                </p>
              </div>
            </div>

            {/* Bottom Direct Email */}
            <div className="space-y-2">
              <p className="text-xs text-slate-500 leading-relaxed">
                For urgent incident support, enterprise migrations, or
                customized SLA contracts, reach out directly:
              </p>
              <div>
                <a
                  href="mailto:support@akhilenterprise.info"
                  className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm font-semibold text-[#ff5722] hover:underline tracking-normal lowercase"
                >
                  support@akhilenterprise.info
                  <span className="text-slate-400 text-xs">✓</span>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div className="lg:col-span-6 p-6 sm:p-10 lg:p-14 flex flex-col justify-between bg-white relative">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Contact Us
                </h3>
                <p className="font-mono text-xs text-slate-400 mt-1 uppercase">
                  Direct dispatch to engineering
                </p>
              </div>
              <span className="font-mono text-slate-400 text-xs select-none">
                ┐
              </span>
            </div>

            {/* Feedback Alerts */}
            {submitStatus === "success" && (
              <div className="mb-6 border-l-2 border-emerald-500 bg-emerald-50/70 p-3.5 text-xs font-mono text-emerald-800">
                ✓ {statusMessage}
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-6 border-l-2 border-rose-500 bg-rose-50/70 p-3.5 text-xs font-mono text-rose-800">
                ✕ {statusMessage}
              </div>
            )}

            {/* Form */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
              {/* Field 1: Name */}
              <div className="space-y-1">
                <label className="inline-block bg-slate-100 text-slate-600 font-mono text-[10px] px-2 py-0.5 uppercase tracking-wider">
                  YOUR NAME
                </label>
                <div className="relative border-b-2 border-slate-900">
                  <input
                    type="text"
                    name="name"
                    required
                    value={formState.name}
                    onChange={(e) =>
                      setFormState({ ...formState, name: e.target.value })
                    }
                    placeholder="Jane Doe"
                    className="w-full bg-transparent px-2 py-2 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Field 2: Email */}
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
                    name="email"
                    required
                    value={formState.email}
                    onChange={(e) =>
                      setFormState({ ...formState, email: e.target.value })
                    }
                    placeholder="jane@company.com"
                    className="w-full bg-transparent px-2 py-2 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
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
                    name="company"
                    value={formState.company}
                    onChange={(e) =>
                      setFormState({ ...formState, company: e.target.value })
                    }
                    placeholder="Acme Inc. (AWS / GCP / Cloudflare)"
                    className="w-full bg-transparent px-2 py-2 text-sm font-sans text-slate-900 outline-none placeholder:text-slate-300"
                  />
                </div>
              </div>

              {/* Field 4: Project Details */}
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
                    name="details"
                    required
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
              <div className="flex items-start gap-3 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  checked={agreed}
                  onChange={(e) => setAgreed(e.target.checked)}
                  className="mt-0.5 h-4 w-4 rounded-xs border-slate-300 accent-[#ff5722] cursor-pointer"
                  required
                />
                <label
                  htmlFor="terms"
                  className="font-mono text-[10px] uppercase text-slate-500 leading-tight cursor-pointer select-none"
                >
                  BY CLICKING &quot;SEND REQUEST&quot; YOU CONFIRM YOU AGREE
                  WITH OUR{" "}
                  <Link
                    href="/terms"
                    className="underline hover:text-slate-800"
                  >
                    TERMS AND CONDITIONS
                  </Link>
                  .
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <motion.button
                  whileHover={{ scale: isSubmitting ? 1 : 1.005 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.995 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="relative flex w-full items-center justify-center bg-[#ff5722] hover:bg-[#f4511e] disabled:bg-slate-400 py-3.5 sm:py-4 text-xs font-mono font-bold tracking-widest text-white uppercase transition-colors shadow-xs cursor-pointer disabled:cursor-not-allowed"
                >
                  <span>
                    {isSubmitting
                      ? "TRANSMITTING ENCRYPTED..."
                      : "SEND REQUEST"}
                  </span>
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
