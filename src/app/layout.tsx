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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akhilenterprise.xyz";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Managed Cloud Infrastructure & DevOps Solutions",
    template: "%s | Cloud Engine",
  },
  description:
    "End-to-end managed cloud deployments, 24/7 server monitoring, auto-scaling, and cost optimization across AWS, GCP, Hostinger, and VPS platforms.",
  keywords: [
    "Managed DevOps",
    "Cloud Management",
    "AWS Hosting",
    "Hostinger VPS",
    "CI/CD Automation",
    "Server Uptime Monitoring",
  ],
  authors: [{ name: "Cloud Engine Team" }],
  creator: "Cloud Engine",
  publisher: "Cloud Engine",
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
    title: "Managed Cloud Infrastructure & DevOps Solutions",
    description:
      "End-to-end managed cloud deployments, 24/7 server monitoring, auto-scaling, and cost optimization across AWS, GCP, Hostinger, and VPS platforms.",
    siteName: "Cloud Engine",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Engine Managed Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Managed Cloud Infrastructure & DevOps Solutions",
    description:
      "End-to-end managed cloud deployments, 24/7 server monitoring, and auto-scaling.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased min-h-screen bg-slate-50 text-slate-900 dark:bg-[#090D16] dark:text-slate-100 transition-colors duration-300 selection:bg-cyan-500 selection:text-white`}
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