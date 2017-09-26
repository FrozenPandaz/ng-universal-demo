const { root } = require('./helpers');

const { AotPlugin } = require('@ngtools/webpack');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const ScriptExtPlugin = require('script-ext-html-webpack-plugin');

/**
 * This is a client config which should be merged on top of common config
 */
module.exports = {
  // entry: root('./src/main.browser.ts'),
  entry: {
    "client": [root('./src/main.browser.ts')],
    "styles": [root('./src/styles.scss')]
  },
  output: {
    path: root('dist'),
    filename: '[name].bundle.js',
    chunkFilename: "[id].chunk.js"
  },
  target: 'web',
  plugins: [
    new HtmlWebpackPlugin({
      template: root('./src/index.html'),
      output: root('dist'),
      inject: 'head'
    }),
    new ScriptExtPlugin({
      defaultAttribute: 'defer'
    })
  ]
};
