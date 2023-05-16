const path = require("path");

const nextConfig = {};

nextConfig.webpack = (config) => {
  config.resolve.alias["@"] = path.join(__dirname);
  return config;
};

module.exports = nextConfig;
