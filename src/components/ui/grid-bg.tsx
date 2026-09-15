"use client";

import React from "react";

// The intersection point circle/diamond seen in the screenshot
export function GridNode({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute z-20 flex h-3.5 w-3.5 items-center justify-center -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none ${className}`}
    >
      <div className="h-1.5 w-1.5 rounded-full bg-slate-300 ring-4 ring-[#faf9f6]" />
    </div>
  );
}

// Wrapper for any section to give it the exact Firecrawl bordered frame
export function FirecrawlSection({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={`relative w-full border-b border-slate-200/70 bg-[#faf9f6] ${className}`}
    >
      <div className="relative mx-auto max-w-7xl border-x border-slate-200/70 px-6 sm:px-10 lg:px-16">
        {/* Intersection corner nodes */}
        <GridNode className="top-0 left-0" />
        <GridNode className="top-0 right-0" />
        <GridNode className="bottom-0 left-0" />
        <GridNode className="bottom-0 right-0" />

        {children}
      </div>
    </section>
  );
}