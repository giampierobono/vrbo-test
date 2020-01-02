const path = require("path");
const webpack = require("webpack");
const WebpackBuildNotifierPlugin = require("webpack-build-notifier");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = (basePath, libraryName, options) => {
  options = options || { DEV_MODE: true };
  return {
    mode: options.DEV_MODE ? "development" : "production",
    entry: {
      [libraryName]: basePath.src + "/index.ts"
    },
    output: {
      path: basePath.dist,
      filename: "[name].js",
      libraryTarget: "umd"
    },
    devtool: options.DEV_MODE ? "source-map" : false,
    module: {
      rules: [
        {
          enforce: "pre",
          test: /\.ts$|\.tsx$/,
          exclude: path.resolve(basePath.src, "..", "node_modules"),
          loader: "ts-loader"
        },
        {
          test: /\.module\.s(a|c)ss$/,
          loader: [
            options.DEV_MODE ? "style-loader" : MiniCssExtractPlugin.loader,
            {
              loader: "css-loader",
              options: {
                modules: true,
                sourceMap: options.DEV_MODE
              }
            },
            {
              loader: "sass-loader",
              options: {
                sourceMap: options.DEV_MODE
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")]
              }
            }
          ]
        },
        {
          test: /\.s(a|c)ss$/,
          exclude: /\.module.(s(a|c)ss)$/,
          loader: [
            options.DEV_MODE ? "style-loader" : MiniCssExtractPlugin.loader,
            "css-loader",
            {
              loader: "sass-loader",
              options: {
                sourceMap: options.DEV_MODE
              }
            },
            {
              loader: "postcss-loader",
              options: {
                plugins: () => [require("autoprefixer")]
              }
            }
          ]
        }
      ]
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ".scss"],
      modules: [path.resolve(basePath.src), "node_modules"]
    },
    plugins: [
      new WebpackBuildNotifierPlugin({
        title: libraryName
      }),
      new webpack.IgnorePlugin(/spec\.ts$/),
      new MiniCssExtractPlugin({
        filename: options.DEV_MODE ? "[name].css" : "[name].[hash].css",
        chunkFilename: options.DEV_MODE ? "[id].css" : "[id].[hash].css"
      })
    ]
  };
};
