const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const HtmlCriticalPlugin = require('html-critical-webpack-plugin');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'production',
  output: {
    filename: '[name]__[chunkhash:7].js',
    chunkFilename: '[name]__[chunkhash:7].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name]__[hash:7].[ext]',
            },
          },
        ],
        include: path.resolve('src'),
      },
    ],
  },
  plugins: [
    new webpack.HashedModuleIdsPlugin(),
    new HtmlCriticalPlugin({
      base: path.resolve('dist'),
      src: 'index.html',
      dest: 'index.html',
      inline: true,
      minify: true,
      extract: true,
      // width: 375,
      // height: 565,
      width: 1280,
      height: 900,
      penthouse: {
        blockJSRequests: false,
      },
    }),
  ],
  devtool: 'source-map',
};

module.exports = merge(baseConfig, config);
