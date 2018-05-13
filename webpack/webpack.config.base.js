const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const DuplicatePackageCheckerPlugin = require('duplicate-package-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackExcludeAssetsPlugin = require('html-webpack-exclude-assets-plugin');
const RemoveSourceWebpackPlugin = require('remove-source-webpack-plugin');
const autoprefixer = require('autoprefixer');

const development = process.env.NODE_ENV === 'development';
const analyzeBundle = process.env.ANALYZE_BUNDLE;

const extractCss = !development;
const minimizeCss = !development;

const enableWebpackBundlerAnalyzer = analyzeBundle ? 'server' : 'disabled';
const configWithDuplicatePackageCheckerPlugin = analyzeBundle
  ? { plugins: [new DuplicatePackageCheckerPlugin({ verbose: true, emitError: true })] }
  : {};

const bootstrapEntryPointRegex = /bootstrap__[\d\D]*\.js/;

const ExtractTextWebpackPluginInstance = new MiniCssExtractPlugin({
  filename: '[name]__[contenthash:7].css',
  chunkFilename: '[name]__[chunkhash:7].css',
});

const postcssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: () => [
      autoprefixer,
    ],
  },
};

const config = {
  entry: {
    bundle: './src/index.jsx',
    bootstrap: './src/styles/bootstrap-overrides.scss',
  },
  output: {
    path: path.resolve('dist'),
    publicPath: '/',
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest',
    },
    splitChunks: {
      chunks: 'all',
    },
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        include: path.resolve('src'),
      },
      {
        test: /\.jsx$/,
        use: 'babel-loader',
        include: path.resolve('src'),
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
              localIdentName: '[name]--[local]',
            },
          },
          postcssLoader,
          'fast-sass-loader',
        ],
        include: path.resolve('src'),
        exclude: path.resolve('src', 'styles'),
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
            },
          },
          postcssLoader,
          'fast-sass-loader',
        ],
        include: path.resolve('src', 'styles'),
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      favicon: './src/favicon.ico',
      inject: 'body',
      excludeAssets: [bootstrapEntryPointRegex],
    }),
    new HtmlWebpackExcludeAssetsPlugin(),
    new RemoveSourceWebpackPlugin([bootstrapEntryPointRegex]),
    ExtractTextWebpackPluginInstance,
    new BundleAnalyzerPlugin({
      analyzerMode: enableWebpackBundlerAnalyzer,
    }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
    symlinks: false,
  },
};

module.exports = merge(config, configWithDuplicatePackageCheckerPlugin);
