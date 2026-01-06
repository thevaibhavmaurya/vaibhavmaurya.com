import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  transpilePackages: ["next-mdx-remote"],
  reactCompiler: true,
  images: {
    qualities: [75, 100],
  },
};

export default nextConfig;
