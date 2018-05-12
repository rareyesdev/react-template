/* eslint-disable no-console */

const path = require('path');
const express = require('express');
const compression = require('compression');
const historyApiFallback = require('connect-history-api-fallback');
const {
  init: initLogger,
  fileLogger: fileLoggerMiddleware,
  consoleLogger: consoleLoggerMiddleware,
} = require('./middlewares/logging');

const app = express();

const port = process.env.PORT || 8080;

initLogger();

app.use(fileLoggerMiddleware());
app.use(consoleLoggerMiddleware());
app.use(historyApiFallback());
app.use(compression());
app.use(express.static(path.resolve('dist')));
app.set('port', port);

const server = app.listen(port, () => {
  console.info(`react-template app listening on port ${server.address().port}!\n`);
});
