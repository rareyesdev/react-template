/* eslint-disable comma-dangle */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const postCssCssNext = require('postcss-cssnext');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const enableWebpackBundlerAnalyzer = process.env.ENABLE_BUNDLE_ANALYZER ? 'server' : 'disabled';

const config = {
  entry: './src/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve('dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        include: path.resolve(__dirname, '..', 'src')
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
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ],
        include: path.resolve(__dirname, '..', 'src')
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ],
        include: path.resolve(__dirname, '..', 'src')
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: enableWebpackBundlerAnalyzer
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false
  }
};

module.exports = config;
