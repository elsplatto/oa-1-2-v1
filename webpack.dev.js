const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const htmlPlugin = new HtmlWebPackPlugin({
 template: './src/index.html',
 filename: './index.html'
});

 module.exports = merge(common, {
   mode: 'development',
   devtool: 'inline-source-map',
	 module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    },

  ]},
   devServer: {
		 historyApiFallback: true
   },
	 plugins: [
		 htmlPlugin,
		 require("tailwindcss"), 
		 require("autoprefixer")]
 });