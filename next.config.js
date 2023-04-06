/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: { appDir: true },
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'apimeme.com' }],
    unoptimized: true,
  },
};
