/* eslint-disable comma-dangle */

const path = require('path');
const merge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const baseConfig = require('./webpack.base');

const config = {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name]__[hash:7].[ext]'
            }
          },
        ],
        include: path.resolve('src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              fallback: 'file-loader',
              name: '[name]__[hash:7].[ext]'
            }
          },
        ],
        include: path.resolve('src')
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new UglifyJSPlugin({
      sourceMap: true
    })
  ]
};

module.exports = merge(baseConfig, config);
