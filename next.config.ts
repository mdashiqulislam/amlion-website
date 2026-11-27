import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 75 is the default; 90 keeps banners and portraits sharp
  images: { qualities: [75, 90] },
};

export default nextConfig;
