/* eslint-disable no-console */

const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));
app.set('port', port);

const server = app.listen(port, () => {
  console.info(`react-template app listening on port ${server.address().port}!\n`);
});