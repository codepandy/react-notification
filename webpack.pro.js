const path = require("path");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: path.resolve(__dirname, "./src/"),
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    libraryTarget: "commonjs2",
  },
  mode: "production",
});
