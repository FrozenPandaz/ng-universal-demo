import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TransferHttpClient } from './transfer-http-client';

@NgModule({
  providers: [
    TransferHttpClient
  ]
})
export class TransferHttpClientModule {}
