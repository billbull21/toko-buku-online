/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["cdn.gramedia.com", "ebooks.gramedia.com"],
  },
};

module.exports = nextConfig;
