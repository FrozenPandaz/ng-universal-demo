import { NgModule, APP_BOOTSTRAP_LISTENER, ApplicationRef } from '@angular/core';
import { ServerModule, ServerTransferStateModule } from '@angular/platform-server';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';
import { BrowserModule, TransferState } from '@angular/platform-browser';

@NgModule({
  bootstrap: [AppComponent],
  imports: [
    BrowserModule.withServerTransition({
      appId: 'my-app-id'
    }),
    ServerModule,
    ServerTransferStateModule,
    AppModule
  ]
})
export class ServerAppModule {

}
