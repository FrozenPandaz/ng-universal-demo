import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule, HttpClient } from '@angular/common/http';
import { TransferHttpClient } from './transfer-http-client';

@NgModule({
  providers: [
    TransferHttpClient
  ]
})
export class TransferHttpClientModule {}
