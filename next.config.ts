import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.terasic.com.tw',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.mouser.com',
      },
      {
        protocol: 'https',
        hostname: 'www.microchip.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kindpng.com',
      }
    ],
  },
};

export default nextConfig;
