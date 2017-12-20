const { root } = require('./helpers');
const { AngularCompilerPlugin, PLATFORM } = require('@ngtools/webpack');

const tsconfigs = {
  client: root('./src/tsconfig.browser.json'),
  server: root('./src/tsconfig.server.json')
};

const mainPaths = {
  client: root('./src/main.browser.ts'),
  server: root('src/main.server.ts')
};

const platforms = {
  client: PLATFORM.Browser,
  server: PLATFORM.Server
};

/**
 * Generates a AotPlugin for @ngtools/webpack
 *
 * @param {string} platform Should either be client or server
 * @param {boolean} aot Enables/Disables AoT Compilation
 * @returns
 */
function getAotPlugin(platform, aot) {
  return new AngularCompilerPlugin({
    tsConfigPath: tsconfigs[platform],
    skipCodeGeneration: !aot,
    platform: platforms[platform],
    mainPath: mainPaths[platform]
  });
}

module.exports = {
  getAotPlugin: getAotPlugin
};
