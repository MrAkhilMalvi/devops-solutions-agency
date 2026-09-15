"use client";


export function GradientDivider({
  toColor = "#fdfcfb",
  flip = false,
}: {
  toColor?: string;
  flip?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`relative w-full overflow-hidden pointer-events-none select-none h-36 sm:h-52 md:h-64 ${
        flip ? "rotate-180" : ""
      }`}
    >
      {/* Sky Blue Shader bleed at the top */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: "linear-gradient(90deg, #1b53c6 0%, #2563eb 32%, #4f6be8 68%, #7683ec 100%)",
        }}
      />

      {/* Atmospheric Gaussian falloff directly blending into Firecrawl canvas */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background: `linear-gradient(to bottom,
            rgba(253, 252, 251, 0) 0%,
            rgba(253, 252, 251, 0.04) 15%,
            rgba(253, 252, 251, 0.18) 32%,
            rgba(253, 252, 251, 0.45) 50%,
            rgba(253, 252, 251, 0.78) 72%,
            rgba(253, 252, 251, 0.96) 90%,
            ${toColor} 100%
          )`,
        }}
      />

      {/* Seamless grid connection */}
      <div 
        className="absolute bottom-0 inset-x-0 h-24 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(0, 0, 0, 0.06) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0, 0, 0, 0.06) 1px, transparent 1px)
          `,
          backgroundSize: "72px 72px",
          maskImage: "linear-gradient(to top, #000 40%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to top, #000 40%, transparent 100%)",
        }}
      />
    </div>
  );
}