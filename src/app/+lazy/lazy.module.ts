import { NgModule, Component, OnInit } from '@angular/core'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PostComponent } from './post/post.component'
import { TransferHttp } from '../../modules/transfer-http/transfer-http';
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
  `
})
export class LazyView implements OnInit {
	users: Observable<Array<User>>;
	constructor(private http: TransferHttp) { }
	ngOnInit(){
		this.users = this.http.get('http://jsonplaceholder.typicode.com/users').map(res => res);
	}
}

@NgModule({
  declarations: [LazyView, PostComponent],
  imports: [
    RouterModule.forChild([
      { path: '', component: LazyView, pathMatch: 'full'}
    ]),
    CommonModule
  ]
})
export class LazyModule {

}
