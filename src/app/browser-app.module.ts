import { NgModule } from '@angular/core';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
  bootstrap: [ AppComponent ],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    BrowserTransferStateModule,
    AppModule
  ]
})
export class BrowserAppModule {}
