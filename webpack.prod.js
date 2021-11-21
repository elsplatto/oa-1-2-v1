const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const CleanWebpackPlugin = require("clean-webpack-plugin");
var HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = merge(common, {
	mode: 'production',
	output: {
    filename: "./js/[name].[contentHash].bundle.js",
    path: path.resolve(__dirname, "docs")
  },
	optimization: {
    minimizer: [
      new HtmlWebpackPlugin({
        template: "./src/index.html",
        minify: {
          removeAttributeQuotes: true,
          collapseWhitespace: true,
          removeComments: true
        }
      })
    ]
  },
  plugins: [
    // new CleanWebpackPlugin()
  ],
});