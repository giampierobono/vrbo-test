"use strict";

const path = require("path");
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

module.exports = {
  ...webpackCommon(PATHS, "common-components")
};
