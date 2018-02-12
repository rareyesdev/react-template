/* eslint-disable comma-dangle */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const postCssCssNext = require('postcss-cssnext');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const enableWebpackBundlerAnalyzer = process.env.ENABLE_BUNDLE_ANALYZER ? 'server' : 'disabled';

module.exports = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                modules: true,
                importLoaders: 1,
                localIdentName: '[name]--[local]'
              }
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: () => [
                  postCssCssNext({
                    browsers: ['ie >= 8', 'last 2 versions']
                  })
                ]
              }
            }
          ]
        }),
        exclude: /node_modules/
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    new ExtractTextPlugin('bundle.css'),
    new BundleAnalyzerPlugin({
      analyzerMode: enableWebpackBundlerAnalyzer
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.resolve('dist')
  }
};
