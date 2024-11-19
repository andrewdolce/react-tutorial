import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/react-tutorial",
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

export default nextConfig;
