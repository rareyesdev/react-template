const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  output: {
    filename: '[name].js',
    chunkFilename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|gif|ico|woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]__[hash:7].[ext]',
            },
          },
        ],
        include: path.resolve('src'),
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: path.resolve('dist'),
    historyApiFallback: true,
    hot: true,
    host: '0.0.0.0',
  },
};

module.exports = merge(baseConfig, config);
