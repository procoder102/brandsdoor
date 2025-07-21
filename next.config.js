/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images:{
    unoptimized:true,
  },
  experimental: {
    turbo: true, // ✅ enable Turbopack
  },
  eslint: {
    ignoreDuringBuilds: true,
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      '@next/next/no-img-element': 'off',
    },
  },
};

module.exports = nextConfig