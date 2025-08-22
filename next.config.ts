import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['cdn.shopify.com'],
  },
  reactStrictMode: false, //for testing
  /* config options here */
};

export default nextConfig;
