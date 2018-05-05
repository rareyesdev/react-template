/* eslint-disable comma-dangle */

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const autoprefixer = require('autoprefixer');

const development = process.env.NODE_ENV === 'development';

const extractCss = !development;
const minimizeCss = !development;

const enableWebpackBundlerAnalyzer = process.env.ENABLE_BUNDLE_ANALYZER ? 'server' : 'disabled';

const ExtractTextWebpackPluginInstance = new MiniCssExtractPlugin({
  filename: '[name]__[contenthash:7].css',
  chunkFilename: '[name]__[chunkhash:7].css'
});

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    sourceMap: true,
    plugins: () => [
      autoprefixer
    ]
  }
};

const config = {
  entry: {
    bundle: './src/index.jsx',
    vendors: './src/styles/bootstrap-overrides.scss'
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/'
  },
  optimization: {
    runtimeChunk: true,
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve('src')
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        include: path.resolve('src')
      },
      // Loads all CSS related to components. Uses CSS Modules
      {
        test: /\.scss$/,
        use: [
          extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              sourceMap: true,
              minimize: minimizeCss,
              localIdentName: '[name]--[local]'
            }
          },
          postcssLoader,
          {
            loader: 'resolve-url-loader'
          },
          {
            loader: 'sass-loader?sourceMap'
          }
        ],
        include: path.resolve('src'),
        exclude: path.resolve('src', 'styles')
      },
      // Loads all Bootstrap CSS. Disabled CSS Modules
      {
        test: /\.scss$/,
        use: [
          extractCss ? MiniCssExtractPlugin.loader : 'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: false,
              sourceMap: true,
              minimize: minimizeCss,
            }
          },
          postcssLoader,
          {
            loader: 'sass-loader'
          }
        ],
        include: path.resolve('src', 'styles')
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      inject: 'body'
    }),
    ExtractTextWebpackPluginInstance,
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
