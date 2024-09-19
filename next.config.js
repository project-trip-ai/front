/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'd21a74xarniucs.cloudfront.net',
        port: '',
        pathname: '/**/**',
      },
    ],
  },
};
