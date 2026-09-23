import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";

import "@/app/globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "700"],
});

// Replace with your actual domain once live
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akhilenterprise.info";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Akhiloptix | Cloud Infrastructure & Cost Optimization",
    template: "%s | Akhiloptix",
  },
  description:
    "Accelerate your cloud decisions with Akhiloptix. Managed cloud deployments, 24/7 server monitoring, auto-scaling, and exact cloud cost reduction roadmaps across AWS, GCP, Cloudflare, and VPS platforms.",
  keywords: [
    "Akhiloptix",
    "Cloud Cost Optimization",
    "Managed DevOps",
    "Infrastructure Audit",
    "AWS Cost Reduction",
    "24/7 Server Monitoring",
    "CI/CD Automation",
    "SRE Operations",
  ],
  authors: [{ name: "Akhiloptix Engineering Team" }],
  creator: "Akhiloptix",
  publisher: "Akhiloptix",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Akhiloptix | Cloud Infrastructure & Cost Optimization",
    description:
      "Schedule an infrastructure discovery call with Akhiloptix. We identify idle server bloat and build your exact monthly cost reduction roadmap.",
    siteName: "Akhiloptix",
    images: [
      {
        url: "/akhiloptixlogo.jpeg",
        width: 1200,
        height: 630,
        alt: "Akhiloptix Cloud Infrastructure & Cost Optimization",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Akhiloptix | Cloud Infrastructure & Cost Optimization",
    description:
      "End-to-end managed cloud deployments, 24/7 server monitoring, auto-scaling, and cost reduction.",
    images: ["/akhiloptixlogo.jpeg"],
  },
  icons: {
    icon: "/icon.ico",
    shortcut: "/icon.ico",
    apple: "/icon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("scroll-smooth", "font-sans", inter.variable)}
    >
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-100 transition-colors duration-300 selection:bg-[#ff5722] selection:text-white`}
      >
        {/* Subtle Background Mesh Grid Effect */}
        <div className="fixed inset-0 pointer-events-none z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),gradient(to_bottom,#80808012_1px,transparent_1px)] bg-size-[36px_36px] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Main App Content Container */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}