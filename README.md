# Minimal Starter with Angular on both Server and Browser Platforms

## Get Started
```sh
npm run start
```
## Developement mode
* Terminal 1: ```npm run watch```
* Wait for the build to finish
* Terminal 2: ```npm run server```

## Prod mode
Includes AoT
```sh
npm run build:prod
npm run server
```

Based on https://github.com/robwormald/ng-universal-demo

## Webpack config changes
For adding more style files edit webpack/webpack.client.js: 14
```js
entry: {
    "client": [root('./src/main.browser.ts')],
    "styles": [root('./src/styles.scss')]
  }
```
