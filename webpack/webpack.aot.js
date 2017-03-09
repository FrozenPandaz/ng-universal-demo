const { AotPlugin } = require('@ngtools/webpack');

const tsconfigs = {
  client: './src/tsconfig.browser.json',
  server: './src/tsconfig.server.json'
};

/**
 * Generates a AotPlugin for @ngtools/webpack
 *
 * @param {string} platform Should either be client or server
 * @param {boolean} aot Enables/Disables AoT Compilation
 * @returns
 */
function getAotPlugin(platform, aot) {
  return new AotPlugin({
    tsConfigPath: tsconfigs[platform],
    skipCodeGeneration: !aot
  });
}

module.exports = {
  getAotPlugin: getAotPlugin
};
