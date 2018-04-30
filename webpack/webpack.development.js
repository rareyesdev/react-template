/* eslint-disable comma-dangle */

const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
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
            loader: 'file-loader',
            options: {
              name: '[name]__[hash:7].[ext]'
            }
          },
        ],
        include: path.resolve('src')
      }
    ]
  },
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    historyApiFallback: true,
  }
};

module.exports = merge(baseConfig, config);
