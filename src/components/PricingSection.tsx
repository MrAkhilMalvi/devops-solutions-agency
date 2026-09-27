"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight, X, Loader2 } from "lucide-react";

type BillingCycle = "monthly" | "yearly";

interface Plan {
  id: string;
  name: string;
  audience: string;
  tagline: string;
  monthly: number | null;
  yearly: number | null;
  features: string[];
  cta: string;
  featured?: boolean;
}

const plans: Plan[] = [
  {
    id: "starter",
    name: "Starter",
    audience: "Portfolios, small businesses, static sites",
    tagline: "Fast, secure hosting — set up in a day.",
    monthly: 499,
    yearly: 4990,
    features: [
      "Free SSL certificate, installed for you",
      "Custom domain & DNS mapping",
      "Single-page or static site deployment",
      "Basic SEO — meta tags, sitemap, Search Console",
      "Email records — MX, SPF, DKIM, DMARC",
      "99.9% uptime guarantee",
      "Standard email support",
    ],
    cta: "Select Starter",
  },
  {
    id: "professional",
    name: "Professional",
    audience: "Dynamic apps, growing startups, e-commerce",
    tagline: "Full-stack hosting with a managed database.",
    monthly: 1499,
    yearly: 14990,
    features: [
      "Everything in Starter",
      "Managed database — Supabase, Firebase, or SQL",
      "Full-stack deployment on Vercel, Netlify, or Render",
      "Advanced on-page SEO & performance tuning",
      "Transactional email — Resend, SendGrid, or SMTP",
      "Global CDN & dynamic asset optimization",
      "Daily automated database backups",
      "Priority email & chat support",
    ],
    cta: "Select Professional",
    featured: true,
  },
  {
    id: "enterprise",
    name: "Enterprise",
    audience: "High-traffic apps, custom cloud architecture",
    tagline: "Dedicated infrastructure, fully managed.",
    monthly: null,
    yearly: null,
    features: [
      "Everything in Professional",
      "Full AWS / DigitalOcean IaaS setup",
      "Infrastructure as code with Terraform",
      "Containerization & orchestration with Docker",
      "Automated CI/CD pipelines",
      "Dedicated / high-volume email infrastructure",
      "Custom scaling & performance monitoring",
      "24/7 account manager & SLA support",
    ],
    cta: "Talk to Expert",
  },
];

function formatINR(n: number) {
  return `₹${n.toLocaleString("en-IN")}`;
}

const inputClasses =
  "w-full rounded-md border border-slate-200 bg-white px-3.5 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none transition-shadow focus:border-[#ff5722]/60 focus:ring-2 focus:ring-[#ff5722]/15";

export default function PricingSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const [selectedPlan, setSelectedPlan] = useState<Plan | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });

  const closeModal = useCallback(() => {
    setSelectedPlan(null);
  }, []);

  const handleOpenForm = (plan: Plan) => {
    setSelectedPlan(plan);
    setSubmitted(false);
  };

  // Lock body scroll while the modal is open
  useEffect(() => {
    if (!selectedPlan) return;
    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = original;
    };
  }, [selectedPlan]);

  // Close on Escape
  useEffect(() => {
    if (!selectedPlan) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selectedPlan, closeModal]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          planName: selectedPlan?.name,
          billingCycle: cycle,
          price:
            cycle === "monthly" ? selectedPlan?.monthly : selectedPlan?.yearly,
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: "", email: "", phone: "", website: "", message: "" });
      }
    } catch (error) {
      console.error("Submission failed", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative w-full border-b border-slate-200/80 bg-[#faf9f6] text-[#0f172a] font-sans antialiased">
      <div className="mx-auto max-w-7xl border-x border-slate-200/80">
        {/* Header Bar */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-4 w-0.75 rounded-full bg-[#ff5722]" />
            <span className="font-mono text-xs tracking-tight text-slate-400">
              [ <span className="text-[#ff5722] font-semibold">04</span> / 06 ]
            </span>
            <span className="text-slate-300 text-xs">·</span>
            <span className="font-mono text-xs uppercase tracking-wider text-slate-500">
              Pricing & Plans
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-2 font-mono text-[11px] text-slate-400">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-500" />
            DIRECT CONSULTATION
          </div>
        </div>

        {/* Title + Toggle */}
        <div className="border-b border-slate-200/80 px-6 sm:px-10 lg:px-12 py-12 text-center relative">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">
            Pricing that scales{" "}
            <span className="text-[#ff5722]">with your build.</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-xs sm:text-sm text-slate-500 leading-relaxed font-normal">
            Choose a plan to submit your project requirements. Our engineering
            team reviews all setups before onboarding.
          </p>

          {/* Billing Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200/90 bg-white p-1 shadow-2xs">
            <button
              onClick={() => setCycle("monthly")}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                cycle === "monthly" ? "text-white" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {cycle === "monthly" && (
                <motion.span
                  layoutId="cycle-pill"
                  className="absolute inset-0 rounded-full bg-[#ff5722]"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10">Monthly</span>
            </button>
            <button
              onClick={() => setCycle("yearly")}
              className={`relative rounded-full px-4 py-1.5 font-mono text-xs uppercase tracking-wider transition-colors ${
                cycle === "yearly" ? "text-white" : "text-slate-500 hover:text-slate-800"
              }`}
            >
              {cycle === "yearly" && (
                <motion.span
                  layoutId="cycle-pill"
                  className="absolute inset-0 rounded-full bg-[#ff5722]"
                  transition={{ type: "spring", duration: 0.4 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-1.5">
                Yearly
                <span
                  className={`rounded px-1.5 py-0.5 text-[10px] ${
                    cycle === "yearly" ? "bg-white/20 text-white" : "bg-emerald-50 text-emerald-700"
                  }`}
                >
                  2 mo free
                </span>
              </span>
            </button>
          </div>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200/80">
          {plans.map((plan) => {
            const price = cycle === "monthly" ? plan.monthly : plan.yearly;
            const isCustom = price === null;

            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between transition-colors ${
                  plan.featured ? "bg-white" : "bg-white/70 hover:bg-white"
                }`}
              >
                {plan.featured && (
                  <div className="absolute inset-x-0 top-0 h-0.5 bg-[#ff5722]" />
                )}

                <div className="p-8 sm:p-10">
                  <div className="flex items-center justify-between pb-6 border-b border-slate-200/70 mb-8">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base font-bold text-slate-900 tracking-tight">
                          {plan.name}
                        </h3>
                        {plan.featured && (
                          <span className="font-mono text-[10px] uppercase tracking-wider text-[#ff5722] bg-orange-50 border border-orange-200/70 px-2 py-0.5 rounded">
                            Most popular
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-xs text-slate-400 font-mono">
                        {plan.audience}
                      </p>
                    </div>
                  </div>

                  <div className="mb-4">
                    {isCustom ? (
                      <div className="text-3xl font-bold font-mono text-slate-900">
                        Custom
                      </div>
                    ) : (
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-3xl font-bold font-mono text-slate-900">
                          {formatINR(price as number)}
                        </span>
                        <span className="text-xs text-slate-400 font-mono">
                          / {cycle === "monthly" ? "month" : "year"}
                        </span>
                      </div>
                    )}
                    <p className="mt-2 text-xs text-slate-500 leading-relaxed">
                      {plan.tagline}
                    </p>
                  </div>

                  <button
                    onClick={() => handleOpenForm(plan)}
                    className={`mb-8 inline-flex w-full items-center justify-center gap-2 rounded-md px-5 py-2.5 text-xs font-semibold transition-colors ${
                      plan.featured
                        ? "bg-[#ff5722] text-white hover:bg-[#f4511e] shadow-xs"
                        : "border border-slate-300/80 bg-white text-slate-700 hover:bg-slate-50"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>

                  <div className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex gap-2.5 items-start">
                        <span
                          className={`mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full ${
                            plan.featured
                              ? "bg-orange-50 text-[#ff5722]"
                              : "bg-slate-100 text-slate-500"
                          }`}
                        >
                          <Check className="h-2.5 w-2.5" strokeWidth={3} />
                        </span>
                        <span className="text-xs text-slate-600 leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* LEAD CAPTURE MODAL */}
      <AnimatePresence>
        {selectedPlan && (
          <div
            className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lead-form-title"
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeModal}
              className="absolute inset-0 bg-slate-900/50 backdrop-blur-xs"
            />

            {/* Panel — bottom sheet on mobile, centered card on larger screens */}
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.98 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="relative flex max-h-[92vh] w-full flex-col overflow-hidden bg-white shadow-2xl
                         rounded-t-2xl sm:rounded-2xl
                         sm:max-w-lg sm:m-4"
            >
              {/* Sticky Header */}
              <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-5 py-4 sm:px-8 sm:py-6">
                {!submitted ? (
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-[#ff5722]">
                      {selectedPlan.name} plan · {cycle}
                    </span>
                    <h3
                      id="lead-form-title"
                      className="mt-1 text-lg sm:text-xl font-bold text-slate-900 leading-snug"
                    >
                      Request infrastructure setup
                    </h3>
                  </div>
                ) : (
                  <div className="min-w-0">
                    <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-emerald-600">
                      Submitted
                    </span>
                    <h3 className="mt-1 text-lg sm:text-xl font-bold text-slate-900 leading-snug">
                      We&apos;ve got your details
                    </h3>
                  </div>
                )}

                <button
                  onClick={closeModal}
                  aria-label="Close"
                  className="shrink-0 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="overflow-y-auto px-5 py-5 sm:px-8 sm:py-6">
                {!submitted ? (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <p className="text-xs text-slate-500 leading-relaxed">
                      Share a few details and our engineering team will review
                      your requirements and reach out to schedule a call.
                    </p>

                    <div>
                      <label
                        htmlFor="lead-name"
                        className="mb-1.5 block font-mono text-[11px] font-medium tracking-wide text-slate-600"
                      >
                        FULL NAME <span className="text-[#ff5722]">*</span>
                      </label>
                      <input
                        id="lead-name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        className={inputClasses}
                      />
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label
                          htmlFor="lead-email"
                          className="mb-1.5 block font-mono text-[11px] font-medium tracking-wide text-slate-600"
                        >
                          EMAIL ADDRESS <span className="text-[#ff5722]">*</span>
                        </label>
                        <input
                          id="lead-email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="john@example.com"
                          className={inputClasses}
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lead-phone"
                          className="mb-1.5 block font-mono text-[11px] font-medium tracking-wide text-slate-600"
                        >
                          PHONE / WHATSAPP <span className="text-[#ff5722]">*</span>
                        </label>
                        <input
                          id="lead-phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="+91 98765 43210"
                          className={inputClasses}
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="lead-website"
                        className="mb-1.5 block font-mono text-[11px] font-medium tracking-wide text-slate-600"
                      >
                        EXISTING WEBSITE / REPO
                        <span className="ml-1 font-normal text-slate-400 normal-case">(optional)</span>
                      </label>
                      <input
                        id="lead-website"
                        type="text"
                        value={formData.website}
                        onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                        placeholder="https://yourwebsite.com"
                        className={inputClasses}
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="lead-message"
                        className="mb-1.5 block font-mono text-[11px] font-medium tracking-wide text-slate-600"
                      >
                        PROJECT REQUIREMENTS
                      </label>
                      <textarea
                        id="lead-message"
                        rows={3}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your tech stack, cloud requirements, or domain details..."
                        className={`${inputClasses} resize-none`}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex w-full items-center justify-center gap-2 rounded-md bg-[#ff5722] py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-[#f4511e] disabled:cursor-not-allowed disabled:opacity-70"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit requirement
                          <ArrowRight className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>

                    <p className="text-center text-[11px] text-slate-400">
                      No payment is collected here — this only sends your
                      requirements to our team.
                    </p>
                  </form>
                ) : (
                  <div className="flex flex-col items-center py-4 text-center">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
                      <Check className="h-6 w-6" strokeWidth={2.5} />
                    </div>
                    <p className="max-w-sm text-sm text-slate-600 leading-relaxed">
                      Thank you. Our team is reviewing your requirements for
                      the <strong className="text-slate-900">{selectedPlan.name}</strong> plan
                      and will contact you via email or phone shortly.
                    </p>
                    <button
                      onClick={closeModal}
                      className="mt-6 rounded-md bg-slate-900 px-6 py-2.5 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
                    >
                      Done
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}

