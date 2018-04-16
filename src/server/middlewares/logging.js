const fs = require('fs');
const rfs = require('rotating-file-stream');
const path = require('path');
const morgan = require('morgan');

const fileName = 'file.log';
const logDirectory = path.resolve('logs');

// create filenames using UTC instead of local time
function fileNameGenerator(date, index) {
  if (!date) {
    return fileName;
  }
  return `${date.toISOString()}--${index}--${fileName}`;
}

function getLogStream() {
  const stream = rfs(fileNameGenerator, {
    interval: '1d', // rotate daily
    path: logDirectory,
  });
  return stream;
}

module.exports = {
  init: function init() {
    // ensure log directory exists
    if (!fs.existsSync(logDirectory)) {
      fs.mkdirSync(logDirectory);
    }
  },

  fileLogger: function fileLogger() {
    return morgan('combined', { stream: getLogStream() });
  },

  consoleLogger: function consoleLogger() {
    return morgan('dev');
  },
};
