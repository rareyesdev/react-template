/* eslint-disable comma-dangle */

const merge = require('webpack-merge');
const path = require('path');
const baseConfig = require('./webpack.base.js');

const config = {
  devtool: 'inline-source-map',
  devServer: {
    contentBase: path.resolve('dist')
  }
};

module.exports = merge(baseConfig, config);
