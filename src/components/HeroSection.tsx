"use client";

import { motion } from "framer-motion";
import { CloudShader } from "@/components/ui/cloud-shader";

export default function CloudShaderInfraHero() {
  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    id: string,
  ) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative h-dvh min-h-160 w-full overflow-hidden bg-linear-to-t from-[#8cbfe8] to-[#3876ba]">
      {/* Cloud Shader Background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.4, ease: "easeOut" }}
      >
        <div className="absolute h-1/2 w-1/2 origin-top-left scale-200">
          <CloudShader speed={1} className="absolute inset-0" />
        </div>
      </motion.div>

      {/* Atmospheric Soft Gradient Veil */}
      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/10 pointer-events-none" />

      {/* Modern Navbar */}
      <nav className="relative z-30 mx-auto flex w-full max-w-7xl items-center justify-between px-6 pt-6 md:px-12">
        {/* Brand */}
        <div className="flex items-center gap-10">
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Akhiloptix Icon Mark */}
            <img
              src="/akhillogo.png"
              alt="Akhiloptix Logo"
              className="h-7 w-7 scale-[3.5] object-contain transition-transform duration-200 group-hover:scale-105"
            />

            {/* Akhiloptix Wordmark */}
            <span className="text-base font-bold tracking-tight text-white drop-shadow-sm">
              AKHIL<span className="text-[#ff5722]">OPTIX</span>
            </span>
          </a>

          {/* Navigation Links matched with your exact page sections */}
          <div className="hidden items-center gap-7 text-xs font-mono uppercase tracking-wider text-white/90 md:flex">
            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="transition hover:text-white hover:underline underline-offset-4"
            >
              How It Works
            </a>
            <a
              href="#global-infra"
              onClick={(e) => scrollToSection(e, "global-infra")}
              className="transition hover:text-white hover:underline underline-offset-4"
            >
              Global Infra
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="transition hover:text-white hover:underline underline-offset-4"
            >
              Contact Us
            </a>
            <a
              href="#faq"
              onClick={(e) => scrollToSection(e, "faq")}
              className="transition hover:text-white hover:underline underline-offset-4"
            >
              FAQ
            </a>
          </div>
        </div>

        {/* Right CTA Button (Firecrawl Grid Orange) */}
        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, "contact")}
          className="relative inline-flex items-center justify-center rounded-md bg-[#ff5722] hover:bg-[#f4511e] px-4 py-2 text-xs font-mono font-bold tracking-wider text-white uppercase shadow-md transition-all border border-orange-400/40"
        >
          <span>Book Audit</span>
          <span className="ml-1.5 text-orange-200">┐</span>
        </a>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 mx-auto mt-14 w-full max-w-7xl px-6 md:mt-24 md:px-12">
        <div className="max-w-2xl">
          {/* Subtle Live Badge */}
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/20 px-3.5 py-1 text-xs text-white backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5722] animate-pulse" />
            <span className="font-mono text-[11px] uppercase tracking-wider text-white/90">
              Zero-Markup DevOps Architecture
            </span>
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight text-white [text-shadow:0_2px_14px_rgba(15,42,67,0.4)] sm:text-5xl md:text-6xl leading-[1.1]">
            Smarter cloud infra built for real startup budgets
          </h1>

          <p className="mt-5 max-w-xl text-sm sm:text-base text-black leading-relaxed drop-shadow-xs font-normal">
            Stop overpaying for bloated PaaS markups. We architect, automate,
            and maintain your exact infrastructure requirements—with hardened
            security, 24/7 coverage, and complete execution.
          </p>

          {/* Action CTAs */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="inline-flex items-center gap-2 rounded-md bg-[#ff5722] hover:bg-[#f4511e] px-6 py-3 text-xs font-mono font-bold uppercase tracking-wider text-white shadow-lg transition-transform hover:scale-[1.02]"
            >
              Get Free Infra Audit
              <span className="text-sm">┐</span>
            </a>

            <a
              href="#how-it-works"
              onClick={(e) => scrollToSection(e, "how-it-works")}
              className="inline-flex items-center gap-2 rounded-md border border-gray/40 bg-white/10 hover:bg-white/20 backdrop-blur-md px-6 py-3 text-xs font-mono font-semibold uppercase tracking-wider text-[#ff5722] transition-colors"
            >
              How It Works
              <span>↓</span>
            </a>
          </div>

          {/* Social Proof Avatars */}
          <div className="mt-5 flex items-center gap-3">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <img
                  key={i}
                  src={`https://assets.aceternity.com/avatars/${i}.webp`}
                  alt={`Engineer ${i}`}
                  width={30}
                  height={30}
                  className="h-7 w-7 rounded-full border border-white/80 object-cover shadow-xs"
                />
              ))}
            </div>
            <p className="text-xs text-gray/80 font-mono">
              Helping startups save{" "}
              <span className="font-bold text-gray/40 underline decoration underline-offset-4">
                50–70%
              </span>{" "}
              on monthly hosting bills.
            </p>
          </div>
        </div>
      </div>

      {/* Floating Plane Wing Perspective */}
      <motion.div
        className="pointer-events-none absolute -bottom-6 left-0 z-10 w-[85%] md:w-[70%]"
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      >
        <img
          src="https://assets.aceternity.com/components/plane-wing.png"
          alt="Infrastructure Cloud Wing Perspective"
          className="h-auto w-full object-cover"
        />
      </motion.div>
    </div>
  );
}
