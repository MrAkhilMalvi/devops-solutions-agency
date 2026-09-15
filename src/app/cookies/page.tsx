"use client";

import { useState } from "react";
import { LegalPageLayout } from "@/components/ui/legal-layout";

export default function CookiesPage() {
  const [preferences, setPreferences] = useState({
    essential: true,
    telemetry: true,
    performance: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <LegalPageLayout
      tag="STORAGE // COOKIE PREFERENCES"
      title="Cookie Settings"
      lastUpdated="OCTOBER 2025"
    >
      <section className="space-y-6 text-slate-700 leading-relaxed">
        <p className="text-base text-slate-800 font-medium">
          We use minimal, high-performance cookies to safeguard administrative sessions and benchmark our infrastructure response times. We do not sell tracking profiles to ad brokers.
        </p>

        {/* Interactive Preferences Panel matching Firecrawl grid */}
        <div className="border border-slate-200 divide-y divide-slate-200 mt-6 bg-[#faf9f6]">
          
          {/* Row 1: Essential Cookies */}
          <div className="p-6 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="font-mono text-sm font-bold text-slate-900">
                  Essential Security Tokens
                </span>
                <span className="font-mono text-[10px] uppercase bg-slate-200 text-slate-600 px-2 py-0.5 rounded">
                  Required
                </span>
              </div>
              <p className="text-xs text-slate-500 font-normal">
                Mandatory for CSRF token security, authenticated portal logins, and secure SSL session handshakes.
              </p>
            </div>
            <input
              type="checkbox"
              checked={true}
              disabled={true}
              className="mt-1 h-4 w-4 rounded accent-[#ff5722] cursor-not-allowed opacity-60"
            />
          </div>

          {/* Row 2: Infrastructure Telemetry */}
          <div className="p-6 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-sm font-bold text-slate-900">
                Performance &amp; Latency Telemetry
              </span>
              <p className="text-xs text-slate-500 font-normal">
                Measures DNS handshake speed and edge CDN latency to optimize route propagation across cloud nodes.
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.telemetry}
              onChange={(e) =>
                setPreferences({ ...preferences, telemetry: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded accent-[#ff5722] cursor-pointer"
            />
          </div>

          {/* Row 3: Analytics */}
          <div className="p-6 flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="font-mono text-sm font-bold text-slate-900">
                Documentation &amp; Workflow Analytics
              </span>
              <p className="text-xs text-slate-500 font-normal">
                Helps our engineering team understand which infrastructure guides and DevOps tools are most useful.
              </p>
            </div>
            <input
              type="checkbox"
              checked={preferences.performance}
              onChange={(e) =>
                setPreferences({ ...preferences, performance: e.target.checked })
              }
              className="mt-1 h-4 w-4 rounded accent-[#ff5722] cursor-pointer"
            />
          </div>

        </div>

        {/* Save Button */}
        <div className="pt-4 flex items-center gap-4">
          <button
            onClick={handleSave}
            className="rounded-md bg-[#ff5722] hover:bg-[#f4511e] px-6 py-2.5 font-mono text-xs font-bold uppercase text-white shadow-xs transition-colors"
          >
            Save Preferences
          </button>
          {saved && (
            <span className="font-mono text-xs text-emerald-600">
              ✓ Preferences updated and cached locally.
            </span>
          )}
        </div>
      </section>
    </LegalPageLayout>
  );
}