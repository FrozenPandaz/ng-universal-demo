import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TransferHttpModule } from '../../modules/transfer-http/transfer-http.module';
import { TransferHttpClientModule } from '../../modules/transfer-http-client/transfer-http-client.module';

@NgModule({
  imports: [
    CommonModule,
    HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TransferHttpModule,
    TransferHttpClientModule
  ],
  declarations: []
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule only');
    }
  }
  static forRoot(config: ModuleWithProviders): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }
}
