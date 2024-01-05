/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  cssLoaderOptions: {
    url: false,
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.forEach((rule) => {
        if (rule.oneOf) {
          rule.oneOf.forEach((oneOfRule) => {
            if (
              oneOfRule.sideEffects &&
              oneOfRule.issuer &&
              oneOfRule.issuer.or
            ) {
              oneOfRule.issuer.or = [/\.(css|scss|sass|less)$/i];
            }
          });
        }
      });
    }

    return config;
  },
};

module.exports = nextConfig;
