/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com",
      },
    ],
  },
};

module.exports = nextConfig;
