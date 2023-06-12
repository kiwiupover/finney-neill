/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    scrollRestoration: true,
    appDir: true,
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
  async redirects() {
    return []
  },
}

module.exports = nextConfig
