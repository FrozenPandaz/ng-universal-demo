import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { WorkerAppModule } from '@angular/platform-webworker';

import { BrowserTransferStateModule } from '../modules/transfer-state/browser-transfer-state.module';

import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    WorkerAppModule,
    BrowserTransferStateModule,
    AppModule
  ]
})
export class BrowserAppModule {}
