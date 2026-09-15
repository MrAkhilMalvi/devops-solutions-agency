import { MetadataRoute } from "next";

// Required for Cloudflare Pages Edge Runtime
export const runtime = "edge";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://akhilenterprise.xyz";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/"], // Prevent search engines from indexing API routes or admin pages
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}