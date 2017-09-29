const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const config = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'webpack.bundle.js'
  },
  module: {
    rules: [
      {test: /\.js$/,   use: 'babel-loader', exclude: /node_modules/},
      {test: /\.jsx$/,  use: 'babel-loader', exclude: /node_modules/},
      {test: /\.json$/, use: 'json-loader'},
      {test: /\.scss$/, use: 'style!css!postcss!sass'}
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = config;
