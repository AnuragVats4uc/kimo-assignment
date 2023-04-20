/** @type {import('next').NextConfig} */
module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://web-dev.dev.kimo.ai/v1/:path*",
      },
    ];
  },
  images: {
    domains: ["storage.googleapis.com"],
  },
};
