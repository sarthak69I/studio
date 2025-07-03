
/** @type {import('next').NextConfig} */
const withPWAInit = require('next-pwa');

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development', // Disable PWA in development
  register: true,
  skipWaiting: true,
});

const nextConfig = {
  env: {
    NEXT_PUBLIC_BASE_URL: 'https://e-leak.vercel.app',
    NEXT_PUBLIC_RECAPTCHA_SITE_KEY: '6Ld032grAAAAAOFNIarNoLD1WEHMLPremOGjz10s',
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: '0x4AAAAAABjZTiJMp4s53ry2',
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'dxixtlyravvxx.cloudfront.net',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'media.canva.com',
        port: '',
        pathname: '/**',
      }
    ],
  },
};

module.exports = withPWA(nextConfig);

    
