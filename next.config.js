module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: ["upload.wikimedia.org", "resource.logitechg.com", "i.imgur.com", "focused-gg.herokuapp.com"],
  },
};
