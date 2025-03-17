/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  images: {
    unoptimized: true,
  },
  // GitHub Pages needs a trailing slash for proper routing
  trailingSlash: true,
  // Modify this to match your GitHub repository name
  basePath: '/options-website',
  assetPrefix: '/options-website',
};

module.exports = nextConfig; 