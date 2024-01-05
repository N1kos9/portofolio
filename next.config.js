/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  experimental: {
    unstable_runtimeJS: false,
  },
  cssLoaderOptions: {
    url: false,
  },
};

module.exports = nextConfig;
