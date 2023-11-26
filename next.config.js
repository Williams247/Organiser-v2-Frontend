const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
});

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    loader: "cloudinary",
    path: "https://res.cloudinary.com/dm1ta9lno/image/upload/",
  },
  transpilePackages: ["frontend-lib", "libraries"]
}

module.exports = withPWA({ ...nextConfig });