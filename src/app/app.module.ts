import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { FactorialService } from './factorial.service';
import { TransferHttpModule } from '../modules/transfer-http/transfer-http.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    TransferHttpModule,
    /*RouterModule.forRoot([
      { path: '', component: HomeView, pathMatch: 'full'},
      { path: 'lazy', loadChildren: './+lazy/lazy.module#LazyModule'}
    ])*/
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/'},
    FactorialService
  ],
  declarations: [
    AppComponent
  ],
  exports: [
    AppComponent
  ]
})
export class AppModule {}
