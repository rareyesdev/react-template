const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const InlineManifestWebpackPlugin = require('inline-manifest-webpack-plugin');
const baseConfig = require('./webpack.config.base');

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
    new InlineManifestWebpackPlugin('manifest'),
  ],
  devtool: 'source-map',
};

module.exports = merge(baseConfig, config);
