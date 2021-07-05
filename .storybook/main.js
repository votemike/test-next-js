const path = require("path");

module.exports = {
  stories: ["../components/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-essentials",
    "@storybook/addon-links",
  ],
  presets: [path.resolve(__dirname, "./next-preset.js")],
  webpackFinal: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.output.publicPath = "/styleguide/";
    }
    return config;
  },
  managerWebpack: async (config, { configType }) => {
    if (configType === "PRODUCTION") {
      config.output.publicPath = "/styleguide/";
    }
    return config;
  },
};
