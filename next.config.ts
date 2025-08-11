import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  basePath: "/your-repo-name",
  assetPrefix: "/your-repo-name/",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
