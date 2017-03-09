const webpack = require('webpack');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: {
    'client': './src/main.browser.ts',
    'webworker': './src/main.webworker.ts'
  },
  output: {
    filename: '[name].js'
  },
  target: 'web'
};
