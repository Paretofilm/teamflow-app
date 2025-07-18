/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  transpilePackages: ['@aws-amplify/ui-react'],
}

module.exports = nextConfig