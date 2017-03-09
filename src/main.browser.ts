import './polyfills';
import 'zone.js/dist/zone';
import 'reflect-metadata';

import 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BrowserAppModule } from './app/browser-app.module';

if (process.env.ENV === 'production') {
  enableProdMode();
} else {
  Error['stackTraceLimit'] = Infinity;
  require('zone.js/dist/long-stack-trace-zone');
}

platformBrowserDynamic().bootstrapModule(BrowserAppModule);
