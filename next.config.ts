import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },
  turbopack: {
    root: path.resolve(__dirname),
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion", "gsap"],
  },
};

export default nextConfig;
