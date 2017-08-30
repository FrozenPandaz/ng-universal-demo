import { NgModule, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component'
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
import { TransferHttpClientModule } from '../../modules/transfer-http-client/transfer-http-client.module';
import { TransferHttpClient } from '../../modules/transfer-http-client/transfer-http-client';
import { Observable } from 'rxjs/Observable';

interface User {
	id: number,
    name: string,
    username: string,
    email: string,
    address: any,
    phone: string,
    website: string,
    company: any
}

@Component({
  selector: 'lazy-view',
  template: `
  	<h3>i'm lazy</h3>
  	<ul>
		<li *ngFor="let user of users | async">
			({{user.id}}). {{ user.name | uppercase }}
			<br />
			<i>{{user.email}} : {{user.phone}}</i>
			<address>{{user.address.street}}</address>
		</li>
  	</ul>
    <hr>
    <ul>
      <li *ngFor="let photo of photos">
        <h3>{{photo.title}}</h3>
      </li>
    </ul>
    <code>{{resPost | json}}</code>
  `
})
export class LazyView implements OnInit {
	users: Observable<Array<User>>;
	photos;
	resPost;
	constructor(private http: TransferHttp, private httpClient: TransferHttpClient) { }
	ngOnInit(){
		this.users = this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res);
		this.httpClient.request('GET', 'http://jsonplaceholder.typicode.com/todos', {
      responseType: 'json'
    }).subscribe(res => {
		  //console.log(res);
		  this.photos = res;
    });
		this.httpClient.post('http://jsonplaceholder.typicode.com/todos', {
		  title: 'foo',
      body: 'bar',
      userId: 1
    }).subscribe( res => {
      console.log(res);
      this.resPost = res;
    } );
	}
}

@NgModule({
  declarations: [LazyView, PostComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyView, pathMatch: 'full'}
    ]),
    CommonModule,
    TransferHttpClientModule
  ]
})
export class LazyModule {

}
