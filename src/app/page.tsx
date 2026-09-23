import type { Metadata } from "next";
import CloudShaderFlightHeroDemo from "@/components/HeroSection";
import ExactInfraComparisonSection from "@/components/InfraComparisonSection";
import ExactBentoCloudSection from "@/components/ProcessWorkflowSection";
import GlobeConversionSection from "@/components/GlobeConversionSection";
import ReadyToBuildSection from "@/components/ReadyToBuildSection";
import ContactSection from "@/components/ContactSection";
import ExactFAQSection from "@/components/FAQ";
import DevOpsFooter from "@/components/Footer";

// Page-level metadata overrides root default if needed
export const metadata: Metadata = {
  title: "Cloud Engine | High-Performance Cloud & DevOps Platform",
  alternates: {
    canonical: "/",
  },
};

export default function CloudEngineLandingPage() {
  return (
    <main className="min-h-screen bg-[#faf9f6] text-slate-900 font-sans selection:bg-[#ff5722] selection:text-white dark:bg-[#090D16] dark:text-slate-100">
      <CloudShaderFlightHeroDemo />

      <div id="infra">
        <ExactInfraComparisonSection />
      </div>

      <div id="how-it-works">
        <ExactBentoCloudSection />
      </div>

      <div id="global-infra">
        <GlobeConversionSection />
      </div>

      <div id="faq">
        <ExactFAQSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <ReadyToBuildSection />

      <DevOpsFooter />
    </main>
  );
}
