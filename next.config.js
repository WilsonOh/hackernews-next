/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "**/favicon.ico",
      },
      {
        protocol: "http",
        hostname: "**",
        port: "",
        pathname: "**/favicon.ico",
      },
    ],
  },
};

module.exports = nextConfig;
