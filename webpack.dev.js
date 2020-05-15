const path = require("path");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const baseConfig = require("./webpack.base");

module.exports = merge(baseConfig, {
  entry: path.join(__dirname, "./src/demo/"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle_demo.js",
  },
  mode: "development",
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./src/demo/index.html"),
      title: "测试GroupTag",
    }),
  ],
  devServer: {
    port: 8012,
    contentBase: path.resolve(__dirname, "dist"),
    compress: true,
    open: true,
  },
});
