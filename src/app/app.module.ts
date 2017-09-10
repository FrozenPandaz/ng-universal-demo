import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeView } from './home/home-view.component';
/*
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';
import { TransferHttpClientModule } from '../modules/transfer-http-client/transfer-http-client.module';*/
import { CoreModule } from './core/core.module';


@NgModule({
  imports: [
    CommonModule,
    CoreModule,
    /*HttpModule,
    HttpClientModule,
    HttpClientJsonpModule,
    TransferHttpModule,
    TransferHttpClientModule,*/
    RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ])
  ],
  declarations: [ AppComponent, HomeView ],
  exports: [ AppComponent ]
})
export class AppModule {}
