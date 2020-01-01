"use strict";

const path = require("path");
const webpack = require("webpack");
const webpackCommon = require(path.resolve(
  __dirname,
  "..",
  "..",
  "config",
  "webpack.config"
));

const PATHS = {
  src: path.join(__dirname, "./src"),
  dist: path.join(__dirname, "./dist")
};

const partialConfig = webpackCommon(PATHS, "common-components");
module.exports = {
  ...partialConfig,
  plugins: [
    ...partialConfig.plugins,
    new webpack.ProvidePlugin({
      Holder: "holderjs",
      holder: "holderjs",
      "window.Holder": "holderjs"
    })
  ],
  externals: {
    ...partialConfig.externals,
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom"
    }
  }
};
