const path = require("path");
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");

module.exports = (basePath, libraryName, options) => {
  options = options || { DEBUG_MODE: true };
  return {
    mode: options.DEBUG_MODE ? "development" : "production",
    entry: {
      [libraryName]: basePath.src + "/index.ts"
    },
    output: {
      path: basePath.dist,
      filename: "[name].js",
      libraryTarget: "umd"
    },
    devtool: options.DEBUG_MODE ? "source-map" : false,
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.ts$|\.tsx$/,
          exclude: path.resolve(basePath.src, "..", "node_modules"),
          loader: "ts-loader"
        },
        {
          test: /\.p?css$/,
          use: [
            {
              loader: "style-loader"
            },
            {
              loader: "css-loader",
              options: {
                importLoaders: 1,
                url: false
              }
            },
            {
              loader: "postcss-loader"
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js"],
      modules: [path.resolve(basePath.src), "node_modules"]
    },
    plugins: [
      new WebpackBuildNotifierPlugin({
        title: libraryName
      }),
      new webpack.IgnorePlugin(/spec\.ts$/)
    ]
  };
};
