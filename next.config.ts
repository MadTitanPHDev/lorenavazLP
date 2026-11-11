import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/reflexologia", destination: "/drenagem-linfatica", permanent: true },
      { source: "/massagem", destination: "/terapias-manuais", permanent: true },
      { source: "/physioscan", destination: "/terapias-integrativas", permanent: true },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
