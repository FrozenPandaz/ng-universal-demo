const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  entry: {
    'client': root('./src/main.browser.ts'),
    'webworker': root('./src/main.webworker.ts')
  },
  output: {
    filename: '[name].js'
  },
  target: 'web'
};
