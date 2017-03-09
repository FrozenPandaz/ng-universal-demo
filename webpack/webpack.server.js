const { AotPlugin } = require('@ngtools/webpack');

/**
 * This is a server config which should be merged on top of common config
 */
module.exports = {
  entry: {
    'server': './src/main.server.ts'
  },
  output: {
    filename: 'server.js'
  },
  target: 'node'
};
