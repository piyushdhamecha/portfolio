/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    allowedOrigins: ['localhost:3000', 'my-proxy.com', '*.my-proxy.com'],
  },
  images: {
    domains: ['media.licdn.com'],
  },
};

export default nextConfig;
