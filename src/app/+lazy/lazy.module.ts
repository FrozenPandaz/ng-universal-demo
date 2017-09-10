import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common';
import { PostComponent } from './post/post.component';
import { TransferHttpModule } from '../../modules/transfer-http/transfer-http.module';
import { TransferHttpClientModule } from '../../modules/transfer-http-client/transfer-http-client.module';
import { LazyComponent } from './lazy/lazy.component';
import { LazyRoutingModule } from './lazy-routing.module';

@NgModule({
  declarations: [ PostComponent, LazyComponent],
  imports: [
    CommonModule,
    LazyRoutingModule,
    TransferHttpModule,
    TransferHttpClientModule
  ]
})
export class LazyModule { }
