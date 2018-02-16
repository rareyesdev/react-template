const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack/webpack.production.js');

const app = express();
const compiler = webpack(config);

const port = process.env.PORT || 8080;

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: config.output.publicPath,
}));
app.set('port', port);

// Serve the files on port 3000.
app.listen(port, () => {
  console.log(`react-template app listening on port ${port}!\n`);
});
