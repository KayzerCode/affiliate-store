import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  images: {
    domains: ['via.placeholder.com'/* , 'your-cdn.com', 'another-cdn.com' */],
  },
};

export default nextConfig;
